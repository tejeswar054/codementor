import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { FileCode, Settings, X } from 'lucide-react';

const LANGUAGES = [
  { id: 'javascript', name: 'JavaScript', monacoId: 'javascript' },
  { id: 'python', name: 'Python', monacoId: 'python' },
  { id: 'java', name: 'Java', monacoId: 'java' },
  { id: 'cpp', name: 'C++', monacoId: 'cpp' },
];

export default function EditorSection({
  language,
  setLanguage,
  code,
  setCode,
}) {
  const [showSettings, setShowSettings] = useState(false);
  const [editorTheme, setEditorTheme] = useState('vs-dark');
  const [fontSize, setFontSize] = useState(13);

  const currentLangObj = LANGUAGES.find((l) => l.id === language) || LANGUAGES[0];

  return (
    <div className="flex flex-col gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-xl">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <FileCode className="w-5 h-5 text-indigo-400" />
          <span className="text-sm font-semibold text-slate-200">Solution Code Editor</span>
        </div>

        {/* Right Action Controls: Language & Settings */}
        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div className="flex items-center gap-1.5">
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

          {/* Settings Drawer Button */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`p-1.5 rounded-lg border transition-all ${
              showSettings
                ? 'bg-indigo-600 text-white border-indigo-500'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-400 border-slate-700'
            }`}
            title="Editor Settings"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Editor Settings Drawer Bar */}
      {showSettings && (
        <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 flex flex-wrap items-center justify-between gap-4 text-xs animate-fade-in">
          <div className="flex items-center gap-4">
            {/* Theme Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-medium">Theme:</span>
              <select
                value={editorTheme}
                onChange={(e) => setEditorTheme(e.target.value)}
                className="bg-slate-900 border border-slate-700 text-slate-200 rounded px-2 py-1 focus:outline-none"
              >
                <option value="vs-dark">VS Dark</option>
                <option value="light">VS Light</option>
              </select>
            </div>

            {/* Font Size Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-medium">Font Size:</span>
              <select
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="bg-slate-900 border border-slate-700 text-slate-200 rounded px-2 py-1 focus:outline-none"
              >
                <option value={12}>12px</option>
                <option value={13}>13px (Default)</option>
                <option value={14}>14px</option>
                <option value={16}>16px</option>
                <option value={18}>18px</option>
              </select>
            </div>
          </div>

          <button
            onClick={() => setShowSettings(false)}
            className="text-slate-500 hover:text-slate-300"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Monaco Editor Container */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-300">Solution Editor ({currentLangObj.name})</span>
          <span className="text-[11px] text-slate-500 font-mono">Monaco IDE</span>
        </div>

        <div className="h-[550px] w-full rounded-lg overflow-hidden border border-slate-800 bg-[#1e1e1e]">
          <Editor
            height="100%"
            language={currentLangObj.monacoId}
            value={code}
            onChange={(value) => setCode(value || '')}
            theme={editorTheme}
            options={{
              minimap: { enabled: false },
              fontSize: fontSize,
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
    </div>
  );
}
