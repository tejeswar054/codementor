import React from 'react';
import { ArrowLeft, Sparkles, BookOpen, TestTube2, MessageSquare, RotateCw } from 'lucide-react';

export default function WorkspaceHeader({
  problem,
  onBack,
  activeTab,
  setActiveTab,
  onAnalyze,
  isLoadingAI,
  hasAnalyzed,
}) {
  if (!problem) return null;

  const getDifficultyBadge = (difficulty = '') => {
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

  return (
    <div className="bg-slate-900 border-b border-slate-800 sticky top-[57px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Back button & Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 transition-all text-xs font-semibold flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Problems</span>
          </button>

          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-white tracking-tight">{problem.title}</h2>
            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${getDifficultyBadge(problem.difficulty)}`}>
              {problem.difficulty}
            </span>
          </div>
        </div>

        {/* Right: Tab Navigation & Analyze Code CTA (Placed between Test Runner & AI Mentor) */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('problem')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
              activeTab === 'problem'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Problem</span>
          </button>

          <button
            onClick={() => setActiveTab('testrunner')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
              activeTab === 'testrunner'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <TestTube2 className="w-3.5 h-3.5" />
            <span>Test Runner</span>
          </button>

          {/* Analyze Code CTA Button - Positioned directly between Test Runner and AI Mentor */}
          {onAnalyze && (
            <button
              onClick={onAnalyze}
              disabled={isLoadingAI}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-bold text-xs transition-all shadow-md ${
                isLoadingAI
                  ? 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-indigo-600/30 active:scale-[0.98]'
              }`}
            >
              {isLoadingAI ? (
                <>
                  <RotateCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Analyzing...</span>
                </>
              ) : hasAnalyzed ? (
                <>
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Analyze Again</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-current" />
                  <span>Analyze Code</span>
                </>
              )}
            </button>
          )}

          <button
            onClick={() => setActiveTab('mentor')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
              activeTab === 'mentor'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>AI Mentor</span>
          </button>
        </div>
      </div>
    </div>
  );
}
