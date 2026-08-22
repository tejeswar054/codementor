import React from 'react';
import { AlertCircle, CheckCircle2, Info, Play, Sparkles, RefreshCw, RotateCcw } from 'lucide-react';
import HintAccordion from './HintAccordion';
import TestCaseCard from './TestCaseCard';
import SuggestedFixCard from './SuggestedFixCard';
import ComplexityBadge from './ComplexityBadge';

export default function AnalysisSection({ analysis, onApplyToEditor, language, onRunTests }) {
  if (!analysis) return null;

  const {
    summary,
    bugFound,
    bugExplanation,
    hints,
    fullExplanation,
    suggestedFix,
    testCases,
    complexity,
    fixStatus,
    reanalysisContext,
  } = analysis;

  return (
    <div className="flex flex-col gap-4 animate-fade-in">
      {/* Conditional Status Banner */}
      <div
        className={`border rounded-xl p-4 shadow-xl ${
          bugFound
            ? 'bg-gradient-to-r from-amber-950/50 via-slate-900 to-slate-900 border-amber-500/40'
            : 'bg-gradient-to-r from-emerald-950/50 via-slate-900 to-slate-900 border-emerald-500/40'
        }`}
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            {bugFound ? (
              <div className="p-1.5 bg-amber-500/20 rounded-lg text-amber-400">
                <AlertCircle className="w-5 h-5" />
              </div>
            ) : (
              <div className="p-1.5 bg-emerald-500/20 rounded-lg text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            )}
            <h2 className="text-base font-bold text-white">
              {bugFound ? '🐛 Potential Issue Detected' : '✅ No Issues Detected'}
            </h2>
          </div>

          {fixStatus && (
            <span
              className={`px-2.5 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${
                !bugFound || fixStatus.toLowerCase().includes('fixed') || fixStatus.toLowerCase().includes('clean')
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                  : 'bg-amber-500/15 text-amber-300 border-amber-500/30'
              }`}
            >
              <RefreshCw className="w-3 h-3" />
              {fixStatus}
            </span>
          )}
        </div>

        {/* Explanation text */}
        <p className="text-xs text-slate-300 leading-relaxed font-medium pl-8">
          {bugExplanation || summary}
        </p>

        {/* Direct "Run Test Cases" button if code is correct */}
        {!bugFound && onRunTests && (
          <div className="mt-3 pt-3 border-t border-emerald-500/20 flex items-center justify-between">
            <span className="text-xs text-emerald-300 font-medium">
              Ready to verify against all test cases?
            </span>
            <button
              onClick={onRunTests}
              className="py-2 px-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all active:scale-[0.99]"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>▶ Run Test Cases</span>
            </button>
          </div>
        )}
      </div>

      {/* Re-Analysis Context Comparison Card */}
      {reanalysisContext && reanalysisContext.isReanalysis && (
        <div className="bg-slate-900 border border-indigo-500/30 rounded-xl p-4 shadow-lg flex flex-col gap-2">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
            <RotateCcw className="w-4 h-4 text-indigo-400" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Re-Analysis Comparison
            </h3>
          </div>

          <div className="text-xs space-y-1.5 pt-1">
            <div>
              <span className="text-slate-400 font-medium">Previous issue: </span>
              <span className="text-rose-300 font-mono">{reanalysisContext.previousIssue}</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium">Current analysis: </span>
              <span className={reanalysisContext.isResolved ? 'text-emerald-300 font-semibold' : 'text-amber-300 font-semibold'}>
                {reanalysisContext.isResolved ? '✅ ' : '⚠️ '}{reanalysisContext.currentComparison}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Bug Explanation (Only when bugFound is true) */}
      {bugFound && bugExplanation && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-2 border-b border-slate-800 pb-2.5">
            <Info className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-semibold text-white">Root Cause Explanation</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line">
            {bugExplanation}
          </p>
        </div>
      )}

      {/* Progressive Hints Accordion (Only when bugFound is true AND hints exist) */}
      {bugFound && hints && hints.length > 0 && (
        <HintAccordion hints={hints} fullExplanation={fullExplanation} />
      )}

      {/* Suggested Fix Card (Only when bugFound is true AND suggestedFix exists) */}
      {bugFound && suggestedFix && (
        <SuggestedFixCard
          suggestedFix={suggestedFix}
          onApplyToEditor={onApplyToEditor}
          language={language}
        />
      )}

      {/* Generated Test Cases */}
      {testCases && testCases.length > 0 && <TestCaseCard testCases={testCases} />}

      {/* Complexity Analysis */}
      {complexity && <ComplexityBadge complexity={complexity} />}
    </div>
  );
}
