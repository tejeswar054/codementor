import React, { useState } from 'react';
import { Check, Copy, ArrowUpRight, Code } from 'lucide-react';

export default function SuggestedFixCard({ suggestedFix, onApplyToEditor, language }) {
  const [copied, setCopied] = useState(false);

  if (!suggestedFix) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(suggestedFix);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col gap-3 shadow-lg">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400">
            <Code className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Suggested Fix</h3>
            <p className="text-[11px] text-slate-400">Reference solution for mentor comparison</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-slate-300 transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>

          {onApplyToEditor && (
            <button
              onClick={() => onApplyToEditor(suggestedFix)}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-xs font-semibold text-emerald-300 transition-all"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>Apply to Editor</span>
            </button>
          )}
        </div>
      </div>

      <div className="relative rounded-lg border border-slate-800 bg-slate-950 p-3.5 overflow-x-auto max-h-[300px]">
        <pre className="font-mono text-xs text-emerald-300 leading-relaxed whitespace-pre font-normal">
          {suggestedFix}
        </pre>
      </div>
    </div>
  );
}
