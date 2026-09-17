/**
 * Centralized environment configuration
 * The Google Apps Script URL is read from environment variables.
 * No hardcoded fallback endpoint is used.
 */

export const CONFIG = {
  GOOGLE_SCRIPT_URL: import.meta.env.VITE_GOOGLE_SCRIPT_URL || '',
  IS_PROD: import.meta.env.PROD,
  IS_DEV: import.meta.env.DEV,
};

export default CONFIG;
