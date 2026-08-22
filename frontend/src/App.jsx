import React, { useState } from 'react';
import Header from './components/Header';
import PresetSelector, { SAMPLE_PRESETS } from './components/PresetSelector';
import EditorSection from './components/EditorSection';
import AnalysisSection from './components/AnalysisSection';
import LoadingSkeleton from './components/LoadingSkeleton';
import ErrorBanner from './components/ErrorBanner';
import { analyzeCodeAPI } from './services/api';
import { Sparkles, Terminal } from 'lucide-react';

export default function App() {
  // Initial state loaded with TwoSum demo preset
  const defaultPreset = SAMPLE_PRESETS[0];

  const [language, setLanguage] = useState(defaultPreset.language);
  const [problem, setProblem] = useState(defaultPreset.problem);
  const [code, setCode] = useState(defaultPreset.code);

  const [analysis, setAnalysis] = useState(null);
  const [previousAnalysis, setPreviousAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  // Handle Preset selection
  const handleSelectPreset = (preset) => {
    setLanguage(preset.language);
    setProblem(preset.problem);
    setCode(preset.code);
    setError('');
  };

  // Main analyze submission handler
  const handleAnalyze = async () => {
    if (!code.trim() || !problem.trim()) {
      setError('Please provide both a problem description and source code before analyzing.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Store current analysis as previous context if re-analyzing
      const currentPrev = analysis ? analysis : previousAnalysis;

      const result = await analyzeCodeAPI({
        language,
        problem,
        code,
        previousAnalysis: currentPrev,
      });

      if (result.success && result.analysis) {
        if (analysis) {
          setPreviousAnalysis(analysis);
        }
        setAnalysis(result.analysis);
        setHasAnalyzed(true);
      } else {
        throw new Error(result.error || 'Failed to analyze code.');
      }
    } catch (err) {
      console.error('Analysis error:', err);
      setError(err.message || 'An error occurred while connecting to the AI Mentor service.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handler for "Apply to Editor" from suggested fix
  const handleApplyToEditor = (fixedCode) => {
    if (fixedCode) {
      setCode(fixedCode);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex-1 flex flex-col gap-6">
        {/* Preset Selector Header */}
        <PresetSelector onSelectPreset={handleSelectPreset} />

        {/* Main 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Input & Editor */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <EditorSection
              language={language}
              setLanguage={setLanguage}
              problem={problem}
              setProblem={setProblem}
              code={code}
              setCode={setCode}
              onAnalyze={handleAnalyze}
              isLoading={isLoading}
              hasAnalyzed={hasAnalyzed}
            />
          </div>

          {/* Right Column: Analysis Results / Skeleton / Empty State */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {error && <ErrorBanner message={error} onRetry={handleAnalyze} />}

            {isLoading && <LoadingSkeleton />}

            {!isLoading && analysis && (
              <AnalysisSection
                analysis={analysis}
                onApplyToEditor={handleApplyToEditor}
                language={language}
              />
            )}

            {!isLoading && !analysis && !error && (
              <div className="bg-slate-900/60 border border-slate-800 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center gap-3 min-h-[480px]">
                <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-indigo-400">
                  <Terminal className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-slate-200">Ready to Analyze</h3>
                <p className="text-xs text-slate-400 max-w-md leading-relaxed">
                  Enter your problem description, select your programming language, and paste your code on the left. Click <strong className="text-indigo-400">Analyze Code</strong> to receive mentor guidance, progressive hints, edge cases, and suggested fixes.
                </p>
                <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Socratic debugging mode active</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-900/40 py-4 text-center text-xs text-slate-500">
        <p>CodeMentor AI — Full-Stack AI Debugging Mentor • Built with React, Express & Gemini API</p>
      </footer>
    </div>
  );
}
