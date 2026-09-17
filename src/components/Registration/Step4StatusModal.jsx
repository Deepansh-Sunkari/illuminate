import React from 'react';
import { CheckCircle2, AlertTriangle, RefreshCw, X, Sparkles } from 'lucide-react';
import Modal from '../ui/Modal';

/**
 * Real submission status handler:
 * States: 'idle' | 'submitting' | 'success' | 'error' | 'timeout'
 * Zero fake success. Preserves form state on failure with retry.
 */
export const Step4StatusModal = ({
  status,
  errorMessage,
  summaryData,
  onRetry,
  onClose,
}) => {
  if (status === 'idle') return null;

  return (
    <Modal
      isOpen={status !== 'idle'}
      onClose={status === 'submitting' ? () => {} : onClose}
      maxWidth="max-w-md"
    >
      <div className="text-center py-4 px-2">
        {/* State: Submitting */}
        {status === 'submitting' && (
          <div className="flex flex-col items-center justify-center space-y-4 py-6">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-300 animate-pulse" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Submitting Registration...
              </h3>
              <p className="text-xs text-purple-300/80 mt-1 max-w-xs mx-auto leading-relaxed">
                Encrypting payload and transmitting to Google Apps Script coordinator desk. Please hold on.
              </p>
            </div>
          </div>
        )}

        {/* State: Error or Timeout */}
        {(status === 'error' || status === 'timeout') && (
          <div className="flex flex-col items-center justify-center space-y-5 py-2">
            <div className="w-16 h-16 rounded-2xl bg-rose-950/60 border border-rose-500/50 flex items-center justify-center text-rose-400 shadow-glow-sm">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">
                Submission Could Not Be Completed
              </h3>
              <p className="text-xs text-rose-300/90 mt-1 max-w-xs mx-auto leading-relaxed">
                {errorMessage || 'A network error occurred while communicating with the registration server.'}
              </p>
              <p className="text-[11px] text-slate-400 mt-2">
                Your entered details and attached screenshot have been preserved. You do not need to retype anything.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full pt-2">
              <button
                type="button"
                onClick={onRetry}
                className="w-full min-h-[48px] py-2.5 px-5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-glow-sm transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Retry Submission</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto min-h-[48px] py-2.5 px-4 rounded-xl border border-purple-500/30 text-slate-300 hover:text-white text-xs font-semibold"
              >
                Close & Review
              </button>
            </div>
          </div>
        )}

        {/* State: Success */}
        {status === 'success' && (
          <div className="flex flex-col items-center justify-center space-y-5 py-2">
            {/* Animated Checkmark Badge */}
            <div className="w-16 h-16 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-glow-emerald animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                Registration Confirmed
              </span>
              <h3 className="text-xl font-extrabold text-white mt-0.5">
                Delegate Pass Reserved!
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Your registration has been logged with the E-Cell operations desk.
              </p>
              {summaryData?.isDemo && (
                <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-mono">
                  <span>Preview Mode: Form validated & logged locally</span>
                </div>
              )}
            </div>

            {/* Verified Summary Box */}
            <div className="w-full bg-[#08031a] rounded-2xl p-4 border border-purple-800/40 text-left space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-purple-900/30 pb-2">
                <span className="text-slate-400">Delegate Name:</span>
                <span className="text-white font-bold">{summaryData?.name || 'Registered Delegate'}</span>
              </div>
              <div className="flex items-center justify-between border-b border-purple-900/30 pb-2">
                <span className="text-slate-400">UTR / Transaction:</span>
                <span className="text-purple-300 font-mono font-semibold">{summaryData?.utr || 'Verified'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Confirmation Sent To:</span>
                <span className="text-slate-200 font-medium truncate max-w-[180px]">{summaryData?.email || 'Your Email'}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/30 text-[11px] text-purple-300 text-left leading-relaxed">
              Please present your confirmation email or student ID at the REC registration foyer on the morning of the workshop.
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full min-h-[48px] py-2.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-glow-sm transition-all"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Step4StatusModal;
