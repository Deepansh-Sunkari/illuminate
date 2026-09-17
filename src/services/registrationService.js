import { CONFIG } from '../config/environment';

/**
 * Converts a File object to a base64 Data URL
 * @param {File} file
 * @returns {Promise<string>}
 */
export const readFileAsDataURL = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve('');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error('Failed to read screenshot file'));
    reader.readAsDataURL(file);
  });
};

/**
 * Validates registration form details
 * @param {Object} formData
 * @returns {{ isValid: boolean, errors: Object }}
 */
export const validateRegistrationForm = (formData) => {
  const errors = {};

  if (!formData.name?.trim()) errors.name = 'Full Name is required.';
  if (!formData.roll?.trim()) errors.roll = 'Roll Number is required.';
  if (!formData.college?.trim()) errors.college = 'College name is required.';
  if (!formData.branch?.trim()) errors.branch = 'Please select your Branch / Department.';
  if (!formData.year?.trim()) errors.year = 'Please select your Year of Study.';
  
  if (!formData.phone?.trim()) {
    errors.phone = 'Mobile / WhatsApp number is required.';
  } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
    errors.phone = 'Enter a valid 10-digit mobile number.';
  }

  if (!formData.email?.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Validates payment proof
 * @param {Object} proofData
 * @returns {{ isValid: boolean, errors: Object }}
 */
export const validatePaymentProof = (proofData) => {
  const errors = {};

  if (!proofData.utr?.trim()) {
    errors.utr = 'Transaction Reference / UTR number is required.';
  } else if (proofData.utr.trim().length < 6) {
    errors.utr = 'UTR number must be at least 6 characters.';
  }

  if (!proofData.screenshot) {
    errors.screenshot = 'Payment screenshot proof is required.';
  } else if (proofData.screenshot.size > 5 * 1024 * 1024) {
    errors.screenshot = 'File size exceeds 5 MB maximum limit.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Submits registration payload to the configured Google Apps Script Web App.
 * Data is ONLY sent when user completes Step 3 (after payment UTR and screenshot upload).
 * 
 * @param {Object} fullData { name, roll, college, branch, year, city, phone, email, utr, screenshot }
 * @returns {Promise<{ success: boolean, error?: string, code?: string, data?: Object }>}
 */
export const submitRegistration = async (fullData) => {
  // Check offline status
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return {
      success: false,
      code: 'OFFLINE',
      error: 'No active internet connection. Please check your network and retry.',
    };
  }

  try {
    // Convert screenshot file to Base64 Data URL
    let screenshotData = '';
    let screenshotName = '';
    let screenshotType = '';

    if (fullData.screenshot) {
      screenshotData = await readFileAsDataURL(fullData.screenshot);
      screenshotName = fullData.screenshot.name || 'payment-proof.jpg';
      screenshotType = fullData.screenshot.type || 'image/jpeg';
    }

    // Build complete aggregated payload (Student Details + Payment UTR + Screenshot Base64)
    const payload = {
      name: fullData.name?.trim() || '',
      roll: fullData.roll?.trim() || '',
      college: fullData.college?.trim() || '',
      branch: fullData.branch || '',
      branchName: fullData.branch || '',
      year: fullData.year || '',
      city: fullData.city ? fullData.city.trim() : 'Visakhapatnam',
      phone: fullData.phone?.trim() || '',
      email: fullData.email?.trim() || '',
      utr: fullData.utr ? fullData.utr.trim() : '',
      screenshotName,
      screenshotType,
      screenshotData,
      timestamp: new Date().toISOString(),
    };

    const endpoint = CONFIG.GOOGLE_SCRIPT_URL;

    // If Google Apps Script URL has not been provided in .env yet:
    // Run in friendly Preview / Local Mode so the user can test the entire flow!
    if (!endpoint || !endpoint.trim()) {
      console.log(
        '%c[Illuminate Registration — Local Preview Mode]',
        'color: #a855f7; font-weight: bold; font-size: 13px;'
      );
      console.log('✅ Aggregated payload ready to transmit to Google Apps Script:', {
        ...payload,
        screenshotData: screenshotData ? `${screenshotData.substring(0, 60)}... [${(screenshotData.length / 1024).toFixed(1)} KB base64]` : 'none',
      });
      console.info('Tip: Add VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/.../exec in .env to transmit to Google Sheets directly.');

      // Simulate network roundtrip delay
      await new Promise((resolve) => setTimeout(resolve, 1200));

      return {
        success: true,
        data: {
          name: payload.name,
          utr: payload.utr,
          email: payload.email,
          isDemo: true,
        },
      };
    }

    // When Google Apps Script endpoint is configured: Transmit payload
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    try {
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      return {
        success: true,
        data: {
          name: payload.name,
          utr: payload.utr,
          email: payload.email,
          isDemo: false,
        },
      };
    } catch (fetchError) {
      clearTimeout(timeoutId);
      if (fetchError.name === 'AbortError') {
        return {
          success: false,
          code: 'TIMEOUT',
          error: 'The request timed out. The network might be slow. Please verify and retry.',
        };
      }
      throw fetchError;
    }
  } catch (err) {
    console.error('Registration service submission error:', err);
    return {
      success: false,
      code: 'NETWORK_ERROR',
      error: err.message || 'Failed to submit registration. Please try again.',
    };
  }
};

export default {
  readFileAsDataURL,
  validateRegistrationForm,
  validatePaymentProof,
  submitRegistration,
};
