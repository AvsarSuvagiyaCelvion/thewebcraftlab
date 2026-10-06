import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X, Info } from 'lucide-react';

export const Toast = ({ message, type = 'success', onClose, duration = 4000 }) => {
  useEffect(() => {
    if (!duration) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-cyan-400 shrink-0" />
  };

  const borderColors = {
    success: 'border-emerald-500/30 bg-slate-900/95 text-slate-100',
    error: 'border-rose-500/30 bg-slate-900/95 text-slate-100',
    info: 'border-cyan-500/30 bg-slate-900/95 text-slate-100'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full animate-bounce-in">
      <div className={`flex items-start gap-3 p-4 rounded-xl shadow-2xl border backdrop-blur-md ${borderColors[type] || borderColors.info}`}>
        {icons[type]}
        <div className="flex-1 text-sm font-medium leading-tight pt-0.5">
          {message}
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors p-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
