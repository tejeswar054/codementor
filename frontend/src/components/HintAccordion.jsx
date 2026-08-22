import React, { useState } from 'react';
import { Lightbulb, ChevronRight, CheckCircle2, Lock, Eye, BookOpen } from 'lucide-react';

export default function HintAccordion({ hints = [], fullExplanation = '' }) {
  const [revealedStep, setRevealedStep] = useState(0); // 0 = none revealed, 1 = hint 1, 2 = hint 2, 3 = hint 3, 4 = full explanation

  const totalHints = hints.length;

  const handleRevealNext = () => {
    if (revealedStep < totalHints + (fullExplanation ? 1 : 0)) {
      setRevealedStep((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setRevealedStep(0);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col gap-3 shadow-lg">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-400">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Progressive Mentor Hints</h3>
            <p className="text-[11px] text-slate-400">Try solving it step-by-step before viewing full code</p>
          </div>
        </div>

        {revealedStep > 0 && (
          <button
            onClick={handleReset}
            className="text-[11px] font-medium text-slate-400 hover:text-slate-200 underline"
          >
            Hide All
          </button>
        )}
      </div>

      {/* Hints List */}
      <div className="flex flex-col gap-2.5">
        {hints.map((hintText, idx) => {
          const stepNum = idx + 1;
          const isRevealed = revealedStep >= stepNum;

          return (
            <div
              key={idx}
              className={`rounded-lg border p-3 transition-all ${
                isRevealed
                  ? 'bg-amber-950/20 border-amber-500/30 text-slate-200 animate-fade-in'
                  : 'bg-slate-950/50 border-slate-800 text-slate-500'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-bold flex items-center gap-1.5 ${
                  isRevealed ? 'text-amber-400' : 'text-slate-500'
                }`}>
                  {isRevealed ? <Eye className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                  Hint {stepNum}
                </span>
                {isRevealed && (
                  <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    Revealed
                  </span>
                )}
              </div>

              {isRevealed ? (
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{hintText}</p>
              ) : (
                <div className="text-xs text-slate-600 italic">Click "Reveal Next Hint" to unlock this pointer</div>
              )}
            </div>
          );
        })}

        {/* Optional Full Walkthrough Section */}
        {fullExplanation && (
          <div
            className={`rounded-lg border p-3 transition-all ${
              revealedStep > totalHints
                ? 'bg-indigo-950/30 border-indigo-500/40 text-slate-200 animate-fade-in'
                : 'bg-slate-950/50 border-slate-800 text-slate-500'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className={`text-xs font-bold flex items-center gap-1.5 ${
                revealedStep > totalHints ? 'text-indigo-400' : 'text-slate-500'
              }`}>
                <BookOpen className="w-3.5 h-3.5" /> Full Walkthrough Explanation
              </span>
            </div>
            {revealedStep > totalHints ? (
              <p className="text-xs text-slate-200 leading-relaxed whitespace-pre-line">{fullExplanation}</p>
            ) : (
              <div className="text-xs text-slate-600 italic">Locked until all hints are reviewed</div>
            )}
          </div>
        )}
      </div>

      {/* Reveal Control Button */}
      {revealedStep < totalHints + (fullExplanation ? 1 : 0) ? (
        <button
          onClick={handleRevealNext}
          className="mt-1 w-full py-2 px-3 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
        >
          <span>
            {revealedStep === 0
              ? 'Need a hint? Reveal Hint 1'
              : revealedStep < totalHints
              ? `Reveal Hint ${revealedStep + 1}`
              : 'Reveal Full Explanation'}
          </span>
          <ChevronRight className="w-4 h-4" />
        </button>
      ) : (
        <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-medium py-1">
          <CheckCircle2 className="w-4 h-4" />
          <span>All mentor hints and walkthrough revealed!</span>
        </div>
      )}
    </div>
  );
}
