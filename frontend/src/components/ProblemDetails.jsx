import React from 'react';
import { BookOpen, CheckCircle2, AlertCircle, FileText } from 'lucide-react';

export default function ProblemDetails({ problem }) {
  if (!problem) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col gap-5 shadow-xl">
      {/* Title & Topic Badges */}
      <div className="flex flex-col gap-2 border-b border-slate-800 pb-4">
        <h2 className="text-xl font-bold text-white">{problem.title}</h2>
        <div className="flex flex-wrap items-center gap-1.5">
          {problem.topics.map((topic) => (
            <span key={topic} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-950 text-indigo-300 border border-slate-800">
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-indigo-400" /> Problem Description
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line font-normal">
          {problem.description}
        </p>
      </div>

      {/* Examples */}
      {problem.examples && problem.examples.length > 0 && (
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Examples
          </h3>
          {problem.examples.map((ex, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800/80 rounded-lg p-3.5 flex flex-col gap-1.5 text-xs font-mono">
              <span className="text-slate-400 font-sans text-[11px] font-semibold text-indigo-300">
                Example {idx + 1}:
              </span>
              <div>
                <span className="text-slate-500">Input: </span>
                <span className="text-slate-200">{ex.input}</span>
              </div>
              <div>
                <span className="text-slate-500">Output: </span>
                <span className="text-emerald-400">{ex.output}</span>
              </div>
              {ex.explanation && (
                <div className="text-[11px] font-sans text-slate-400 italic mt-1 pt-1 border-t border-slate-900">
                  {ex.explanation}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Constraints */}
      {problem.constraints && problem.constraints.length > 0 && (
        <div className="flex flex-col gap-2 border-t border-slate-800/80 pt-4">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Constraints
          </h3>
          <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 font-mono">
            {problem.constraints.map((c, idx) => (
              <li key={idx} className="text-slate-300">
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
