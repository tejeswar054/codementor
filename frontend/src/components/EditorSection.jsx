import React from 'react';
import Editor from '@monaco-editor/react';
import { Play, RotateCw, FileCode, MessageSquareText } from 'lucide-react';

const LANGUAGES = [
  { id: 'javascript', name: 'JavaScript', monacoId: 'javascript' },
  { id: 'python', name: 'Python', monacoId: 'python' },
  { id: 'java', name: 'Java', monacoId: 'java' },
  { id: 'cpp', name: 'C++', monacoId: 'cpp' },
];

export default function EditorSection({
  language,
  setLanguage,
  problem,
  setProblem,
  code,
  setCode,
  onAnalyze,
  isLoading,
  hasAnalyzed,
}) {
  const currentLangObj = LANGUAGES.find((l) => l.id === language) || LANGUAGES[0];

  return (
    <div className="flex flex-col gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-xl">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <FileCode className="w-5 h-5 text-indigo-400" />
          <span className="text-sm font-semibold text-slate-200">Solution Code Editor</span>
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-2">
          <label htmlFor="language-select" className="text-xs font-medium text-slate-400">Language:</label>
          <select
            id="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Monaco Editor Container */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-300">Solution Editor ({currentLangObj.name})</span>
          <span className="text-[11px] text-slate-500">Edit code anytime & re-analyze</span>
        </div>

        <div className="h-[480px] w-full rounded-lg overflow-hidden border border-slate-800 bg-[#1e1e1e]">
          <Editor
            height="100%"
            language={currentLangObj.monacoId}
            value={code}
            onChange={(value) => setCode(value || '')}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 13,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
              wordWrap: 'on',
              padding: { top: 12, bottom: 12 },
              lineNumbersMinChars: 3,
            }}
          />
        </div>
      </div>

      {/* Primary CTA Button */}
      <button
        id="analyze-btn"
        onClick={onAnalyze}
        disabled={isLoading || !code.trim()}
        className={`w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
          isLoading || !code.trim()
            ? 'bg-slate-800 text-slate-500 border border-slate-700/50 cursor-not-allowed'
            : hasAnalyzed
            ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/25 active:scale-[0.99]'
            : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/25 active:scale-[0.99]'
        }`}
      >
        {isLoading ? (
          <>
            <RotateCw className="w-4 h-4 animate-spin text-white" />
            <span>Analyzing Code with Mentor AI...</span>
          </>
        ) : hasAnalyzed ? (
          <>
            <RotateCw className="w-4 h-4" />
            <span>Analyze Again</span>
          </>
        ) : (
          <>
            <Play className="w-4 h-4 fill-current" />
            <span>Analyze Code</span>
          </>
        )}
      </button>
    </div>
  );
}
