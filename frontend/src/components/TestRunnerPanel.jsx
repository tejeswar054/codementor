import React from 'react';
import { Play, CheckCircle2, XCircle, Clock, Sparkles, HelpCircle, ArrowLeft } from 'lucide-react';

export default function TestRunnerPanel({
  testResults,
  isExecuting,
  onRunTests,
  onAskMentorForFailed,
  onBackToLibrary,
  isLoadingAI,
}) {
  const getBadgeStyle = (difficulty = '') => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'medium':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'hard':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default:
        return 'bg-slate-800 text-slate-300';
    }
  };

  const allPassed = testResults && testResults.passed === testResults.total && testResults.total > 0;
  const failedResults = testResults?.results?.filter((r) => !r.passed) || [];

  return (
    <div className="flex flex-col gap-4">
      {/* Run Test Cases Action Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-xl flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-white">Test Execution Engine</h3>
          <p className="text-[11px] text-slate-400">Run code against deterministic test cases</p>
        </div>

        <button
          onClick={onRunTests}
          disabled={isExecuting}
          className={`py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center gap-2 transition-all shadow-md ${
            isExecuting
              ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
              : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/25 active:scale-[0.99]'
          }`}
        >
          {isExecuting ? (
            <>
              <Clock className="w-4 h-4 animate-spin text-white" />
              <span>Executing Tests...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" />
              <span>▶ Run Test Cases</span>
            </>
          )}
        </button>
      </div>

      {/* Test Results Output */}
      {testResults && (
        <div className="flex flex-col gap-3 animate-fade-in">
          {/* Summary Status Box */}
          <div
            className={`border rounded-xl p-4 shadow-xl ${
              allPassed
                ? 'bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border-emerald-500/40'
                : 'bg-gradient-to-r from-rose-950/60 via-slate-900 to-slate-900 border-rose-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                {allPassed ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-400" />
                )}
                <h4 className="text-base font-bold text-white">
                  {allPassed ? '🎉 SOLUTION ACCEPTED' : 'Test Suite Result'}
                </h4>
              </div>

              <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full border ${
                allPassed
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  : 'bg-rose-500/20 text-rose-300 border-rose-500/30'
              }`}>
                {testResults.passed} / {testResults.total} Passed
              </span>
            </div>

            <p className="text-xs text-slate-300 pl-7">
              {allPassed
                ? 'Great job! Your solution passed all deterministic test cases.'
                : `Your code passed ${testResults.passed} of ${testResults.total} test cases. Review the failed cases below or ask the AI mentor for guidance.`}
            </p>
          </div>

          {/* Solution Accepted State Actions */}
          {allPassed && (
            <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 flex items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-2 text-xs text-emerald-300">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Ready to analyze complexity or select next challenge!</span>
              </div>

              <button
                onClick={onBackToLibrary}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Try Another Problem</span>
              </button>
            </div>
          )}

          {/* Failed Tests Mentoring Callout */}
          {!allPassed && failedResults.length > 0 && (
            <button
              onClick={() => onAskMentorForFailed(failedResults)}
              disabled={isLoadingAI}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.99]"
            >
              <HelpCircle className="w-4 h-4" />
              <span>
                {isLoadingAI
                  ? 'AI Mentor is analyzing failed tests...'
                  : 'Ask AI Mentor about Failed Tests'}
              </span>
            </button>
          )}

          {/* Detailed Test Results Cards */}
          <div className="flex flex-col gap-2">
            {testResults.results.map((r, idx) => (
              <div
                key={idx}
                className={`border rounded-lg p-3 flex flex-col gap-2 transition-all ${
                  r.passed
                    ? 'bg-slate-900/60 border-slate-800'
                    : 'bg-rose-950/20 border-rose-500/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {r.passed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-400" />
                    )}
                    <span className="text-xs font-semibold text-slate-200">{r.name}</span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono">
                    <span className="text-slate-400">{r.executionTime}</span>
                    <span className={`px-2 py-0.5 rounded font-semibold uppercase ${
                      r.passed ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                    }`}>
                      {r.passed ? 'PASSED' : 'FAILED'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  <div className="bg-slate-950 border border-slate-800 rounded p-2">
                    <span className="text-[10px] text-slate-500 font-sans block uppercase">Input</span>
                    <span className="text-slate-300 break-all">{r.input}</span>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded p-2">
                    <span className="text-[10px] text-slate-500 font-sans block uppercase">Expected</span>
                    <span className="text-emerald-400 break-all">{r.expected}</span>
                  </div>
                </div>

                {!r.passed && (
                  <div className="bg-rose-950/30 border border-rose-500/20 rounded p-2 text-xs font-mono">
                    <span className="text-[10px] text-rose-400 font-sans block uppercase">Actual Output Received</span>
                    <span className="text-rose-300 break-all">{r.actual}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
