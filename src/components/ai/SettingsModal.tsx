import React, { useState } from 'react';
import { 
  Key, 
  ExternalLink, 
  ShieldCheck, 
  Trash2, 
  X, 
  CheckCircle2, 
  Lock, 
  AlertCircle 
} from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  apiKey: string;
  onSaveApiKey: (key: string) => void;
  onRemoveApiKey: () => void;
  hasConsented: boolean;
  onConsentChange: (consented: boolean) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  apiKey,
  onSaveApiKey,
  onRemoveApiKey,
  hasConsented,
  onConsentChange
}) => {
  if (!isOpen) return null;

  const [inputKey, setInputKey] = useState(apiKey);
  const [showKey, setShowKey] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = () => {
    onSaveApiKey(inputKey.trim());
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleClear = () => {
    setInputKey('');
    onRemoveApiKey();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#0D1117] border border-white/15 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#004D40] flex items-center justify-center text-[#39FF14] border border-[#39FF14]/30">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">CricMind AI Assistant Settings</h3>
              <p className="text-[11px] text-slate-400">Configure your personal Google Gemini API key</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Privacy Notice Banner */}
        <div className="p-4 rounded-2xl bg-[#162235] border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-[#39FF14]">
            <Lock className="w-4 h-4 text-[#39FF14]" />
            <span>Client-Side Local Encryption & Privacy Guarantee</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Your Google Gemini API Key is stored purely within your local browser storage (<code className="text-[#39FF14] font-mono">localStorage</code>). It is never sent to third-party databases.
          </p>
        </div>

        {/* User Consent Checkbox */}
        <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
          <input
            type="checkbox"
            id="ai-consent"
            checked={hasConsented}
            onChange={(e) => onConsentChange(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded border-slate-600 text-[#39FF14] focus:ring-[#39FF14] cursor-pointer"
          />
          <label htmlFor="ai-consent" className="text-xs text-slate-300 cursor-pointer select-none">
            I consent to using Google Gemini AI for live cricket tactical predictions, match summaries, and tournament queries.
          </label>
        </div>

        {/* Key Input Field */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-300">
              Personal Google Gemini API Key
            </label>
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#39FF14] hover:underline font-bold flex items-center gap-1"
            >
              <span>Get Free Gemini API Key</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="relative">
            <input
              type={showKey ? 'text' : 'password'}
              placeholder="AIzaSy..."
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#162235] border border-white/15 rounded-xl text-xs text-white placeholder-slate-500 font-mono focus:outline-none focus:border-[#39FF14]"
            />
            <button
              type="button"
              onClick={() => setShowKey(!showKey)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white uppercase font-bold"
            >
              {showKey ? 'Hide' : 'Show'}
            </button>
          </div>
          <p className="text-[10px] text-slate-400">
            Powered by modern <code className="text-[#39FF14]">gemini-3.8-flash</code> for lightning-fast cricket intelligence.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2">
          {apiKey ? (
            <button
              onClick={handleClear}
              className="px-3 py-2 text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1.5 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Remove Key
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={!hasConsented}
              className={`px-5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-md ${
                hasConsented
                  ? 'bg-[#39FF14] hover:bg-[#32e012] text-black neon-glow-green cursor-pointer'
                  : 'bg-white/10 text-slate-500 cursor-not-allowed'
              }`}
            >
              {savedSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>Key Saved!</span>
                </>
              ) : (
                <span>Save API Key</span>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
