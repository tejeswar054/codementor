import React from 'react';
import { AlertCircle, CheckCircle2, Info, Sparkles, RefreshCw } from 'lucide-react';
import HintAccordion from './HintAccordion';
import TestCaseCard from './TestCaseCard';
import SuggestedFixCard from './SuggestedFixCard';
import ComplexityBadge from './ComplexityBadge';

export default function AnalysisSection({ analysis, onApplyToEditor, language }) {
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
  } = analysis;

  return (
    <div className="flex flex-col gap-4 animate-fade-in">
      {/* Overview Status Banner */}
      <div
        className={`border rounded-xl p-4 shadow-xl ${
          bugFound
            ? 'bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border-amber-500/40'
            : 'bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border-emerald-500/40'
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
              {bugFound ? 'Issue Identified in Code' : 'No Bugs Detected'}
            </h2>
          </div>

          {fixStatus && (
            <span
              className={`px-2.5 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${
                fixStatus.toLowerCase().includes('fixed') || fixStatus.toLowerCase().includes('clean')
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                  : 'bg-amber-500/15 text-amber-300 border-amber-500/30'
              }`}
            >
              <RefreshCw className="w-3 h-3" />
              {fixStatus}
            </span>
          )}
        </div>

        {/* Summary text */}
        <p className="text-xs text-slate-300 leading-relaxed font-medium pl-8">
          {summary}
        </p>
      </div>

      {/* Detailed Bug Explanation */}
      {bugExplanation && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-2 border-b border-slate-800 pb-2.5">
            <Info className="w-4 h-4 text-indigo-400" />
            <h3 className="text-sm font-semibold text-white">Root Cause Explanation</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line">
            {bugExplanation}
          </p>
        </div>
      )}

      {/* Progressive Hints Accordion */}
      {hints && hints.length > 0 && (
        <HintAccordion hints={hints} fullExplanation={fullExplanation} />
      )}

      {/* Suggested Fix Card */}
      {suggestedFix && (
        <SuggestedFixCard
          suggestedFix={suggestedFix}
          onApplyToEditor={onApplyToEditor}
          language={language}
        />
      )}

      {/* Test Cases */}
      {testCases && testCases.length > 0 && <TestCaseCard testCases={testCases} />}

      {/* Complexity Analysis */}
      {complexity && <ComplexityBadge complexity={complexity} />}
    </div>
  );
}
