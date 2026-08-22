import React, { useState, useMemo } from 'react';
import { PROBLEMS, TOPICS_LIST } from '../data/problems';
import { Search, Filter, Code2, Sparkles, ChevronRight, BookOpen } from 'lucide-react';

export default function ProblemLibrary({ onSelectProblem }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All Topics');

  // Filter problems based on search, difficulty, and topic
  const filteredProblems = useMemo(() => {
    return PROBLEMS.filter((prob) => {
      const matchesSearch =
        prob.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prob.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDifficulty =
        selectedDifficulty === 'All' || prob.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();

      const matchesTopic =
        selectedTopic === 'All Topics' || prob.topics.includes(selectedTopic);

      return matchesSearch && matchesDifficulty && matchesTopic;
    });
  }, [searchQuery, selectedDifficulty, selectedTopic]);

  const getDifficultyBadge = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'medium':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'hard':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
      {/* Hero Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-900/40 via-slate-900 to-slate-900 border border-indigo-500/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Code2 className="w-64 h-64 text-indigo-400" />
        </div>

        <div className="relative z-10 max-w-2xl flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 w-fit">
            <Sparkles className="w-3.5 h-3.5" /> LeetCode-Style AI Mentor Catalog
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">
            Select a Problem to Master
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Practice data structures & algorithms with step-by-step mentor guidance, progressive hints, and real sandboxed test executions.
          </p>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search problems by title, topic, or keyword..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Difficulty Filter Pills */}
        <div className="flex items-center gap-1.5 shrink-0 bg-slate-950 p-1 rounded-lg border border-slate-800">
          {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                selectedDifficulty === diff
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Topics Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
        {TOPICS_LIST.map((topic) => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 transition-all border ${
              selectedTopic === topic
                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 shadow-sm'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
            }`}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Problem Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProblems.map((prob) => (
          <div
            key={prob.id}
            onClick={() => onSelectProblem(prob)}
            className="group bg-slate-900 border border-slate-800/90 hover:border-indigo-500/50 rounded-xl p-5 shadow-lg hover:shadow-indigo-500/10 transition-all flex flex-col justify-between cursor-pointer active:scale-[0.99]"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-bold text-slate-100 group-hover:text-indigo-300 transition-colors line-clamp-1">
                  {prob.title}
                </h3>
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border shrink-0 ${getDifficultyBadge(prob.difficulty)}`}>
                  {prob.difficulty}
                </span>
              </div>

              <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed font-normal">
                {prob.description.replace(/`/g, '')}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
              {/* Topic Badges */}
              <div className="flex flex-wrap items-center gap-1.5">
                {prob.topics.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:translate-x-0.5 transition-transform shrink-0 ml-2">
                <span>Solve</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}

        {filteredProblems.length === 0 && (
          <div className="col-span-full bg-slate-900/60 border border-slate-800 border-dashed rounded-xl p-12 text-center flex flex-col items-center justify-center gap-2">
            <BookOpen className="w-8 h-8 text-slate-500 mb-1" />
            <h4 className="text-sm font-semibold text-slate-300">No matching problems found</h4>
            <p className="text-xs text-slate-500">Try adjusting your search query or filter tags.</p>
          </div>
        )}
      </div>
    </div>
  );
}
