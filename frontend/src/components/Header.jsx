import React from 'react';
import { Code2, Sparkles, BookOpenCheck } from 'lucide-react';

export default function Header({ onHome }) {
  return (
    <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={onHome}>
          <div className="p-2 bg-indigo-600/20 border border-indigo-500/30 rounded-xl text-indigo-400 group-hover:scale-105 transition-transform">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">CodeMentor AI</h1>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Sparkles className="w-3 h-3" /> Mentor Mode
              </span>
            </div>
            <p className="text-xs text-slate-400">AI-Powered Debugging Mentor & Socratic Code Tutor</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/50">
            <BookOpenCheck className="w-4 h-4 text-emerald-400" />
            <span>Progressive Guidance Active</span>
          </div>
        </div>
      </div>
    </header>
  );
}
