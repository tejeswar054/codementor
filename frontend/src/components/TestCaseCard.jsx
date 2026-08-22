import React from 'react';
import { TestTube2 } from 'lucide-react';

const BADGE_STYLES = {
  normal: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  edge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  boundary: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  invalid: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
};

export default function TestCaseCard({ testCases = [] }) {
  if (!testCases || !Array.isArray(testCases) || testCases.length === 0) return null;

  const getBadgeStyle = (name = '') => {
    const lower = String(name).toLowerCase();
    if (lower.includes('edge')) return BADGE_STYLES.edge;
    if (lower.includes('boundary')) return BADGE_STYLES.boundary;
    if (lower.includes('invalid') || lower.includes('empty')) return BADGE_STYLES.invalid;
    return BADGE_STYLES.normal;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col gap-3 shadow-lg">
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
        <div className="p-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-400">
          <TestTube2 className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Generated Test Cases</h3>
          <p className="text-[11px] text-slate-400">Validate boundary conditions & edge cases</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2.5">
        {testCases.map((tc, idx) => {
          const testName = tc?.name || tc?.type || `Test Case #${idx + 1}`;
          const badgeLabel = typeof testName === 'string' ? testName.split(' ')[0] : 'Test';
          const inputVal = typeof tc?.input === 'object' ? JSON.stringify(tc.input) : (tc?.input ?? '');
          const expectedVal = typeof (tc?.expectedOutput || tc?.expected) === 'object'
            ? JSON.stringify(tc?.expectedOutput || tc?.expected)
            : (tc?.expectedOutput || tc?.expected || '');

          return (
            <div key={idx} className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-200">{testName}</span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${getBadgeStyle(testName)}`}>
                  {badgeLabel}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                <div className="bg-slate-900/90 border border-slate-800 rounded p-2">
                  <span className="text-[10px] uppercase text-slate-500 font-sans block mb-0.5">Input</span>
                  <span className="text-slate-300 break-all">{String(inputVal)}</span>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 rounded p-2">
                  <span className="text-[10px] uppercase text-slate-500 font-sans block mb-0.5">Expected Output</span>
                  <span className="text-emerald-400 break-all">{String(expectedVal)}</span>
                </div>
              </div>

              {(tc?.reason || tc?.explanation) && (
                <p className="text-[11px] text-slate-400 italic bg-slate-900/40 px-2.5 py-1 rounded border border-slate-800/40">
                  💡 <span className="font-medium text-slate-300">Why it matters:</span> {tc.reason || tc.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
