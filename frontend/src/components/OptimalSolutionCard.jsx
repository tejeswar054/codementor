import React, { useState } from 'react';
import { getOptimalSolution } from '../utils/optimalSolutions';
import { Code2, Zap, Check, Copy, Sparkles, ArrowRight, Layers } from 'lucide-react';

export default function OptimalSolutionCard({ problemId, language, onApplyToEditor, onClose }) {
  const optimalObj = getOptimalSolution(problemId);
  const [copied, setCopied] = useState(false);

  if (!optimalObj) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center text-xs text-slate-400">
        Canonical optimal reference solution for this problem is being generated. Check the AI Mentor tab for full walkthroughs!
      </div>
    );
  }

  const optimalCode = optimalObj[language] || optimalObj.javascript;

  const handleCopy = () => {
    navigator.clipboard.writeText(optimalCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-indigo-500/30 rounded-xl p-5 shadow-2xl flex flex-col gap-4 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-indigo-500/20 rounded-lg text-indigo-400">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              Canonical Optimal Solution
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase">
                {language}
              </span>
            </h3>
            <p className="text-[11px] text-slate-400">Industry-standard clean implementation</p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold flex items-center gap-1 border border-slate-700 transition-all"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Snippet Box */}
      <div className="bg-[#1e1e1e] border border-slate-800 rounded-lg p-3 overflow-x-auto font-mono text-xs text-indigo-200">
        <pre className="whitespace-pre">{optimalCode}</pre>
      </div>

      {/* Complexity & Explanation Badges */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20 font-mono text-indigo-300">
            <span className="text-slate-400 font-sans">Time:</span> {optimalObj.complexity.time}
          </div>
          <div className="flex items-center gap-1.5 bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20 font-mono text-indigo-300">
            <span className="text-slate-400 font-sans">Space:</span> {optimalObj.complexity.space}
          </div>
        </div>

        <p className="text-slate-400 text-[11px] leading-relaxed">
          {optimalObj.explanation}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
        {onApplyToEditor && (
          <button
            onClick={() => onApplyToEditor(optimalCode)}
            className="py-2 px-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow transition-all active:scale-[0.99]"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Apply to Editor</span>
          </button>
        )}
      </div>
    </div>
  );
}
