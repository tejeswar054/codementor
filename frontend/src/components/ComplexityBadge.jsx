import React from 'react';
import { Clock, HardDrive } from 'lucide-react';

export default function ComplexityBadge({ complexity }) {
  if (!complexity) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col gap-3 shadow-lg">
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
        <h3 className="text-sm font-semibold text-white">Complexity Analysis</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Time Complexity */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-3 flex items-start gap-3">
          <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-400 mt-0.5">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
              Time Complexity
            </span>
            <span className="text-xs font-mono font-semibold text-indigo-300">
              {complexity.time || 'N/A'}
            </span>
          </div>
        </div>

        {/* Space Complexity */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-3 flex items-start gap-3">
          <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400 mt-0.5">
            <HardDrive className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
              Space Complexity
            </span>
            <span className="text-xs font-mono font-semibold text-cyan-300">
              {complexity.space || 'N/A'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
