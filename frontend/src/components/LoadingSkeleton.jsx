import React from 'react';
import { Sparkles } from 'lucide-react';

export default function LoadingSkeleton() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col gap-4 shadow-xl animate-pulse">
      <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
        <div className="p-2 bg-indigo-500/20 rounded-lg">
          <Sparkles className="w-5 h-5 text-indigo-400 animate-spin" />
        </div>
        <div className="flex flex-col gap-1.5 w-full">
          <div className="h-4 bg-slate-800 rounded w-1/3"></div>
          <div className="h-3 bg-slate-800/60 rounded w-1/2"></div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="h-4 bg-slate-800 rounded w-1/4"></div>
        <div className="h-16 bg-slate-950 rounded-lg border border-slate-800"></div>
      </div>

      <div className="space-y-3">
        <div className="h-4 bg-slate-800 rounded w-1/3"></div>
        <div className="h-24 bg-slate-950 rounded-lg border border-slate-800"></div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="h-14 bg-slate-950 rounded-lg border border-slate-800"></div>
        <div className="h-14 bg-slate-950 rounded-lg border border-slate-800"></div>
      </div>
    </div>
  );
}
