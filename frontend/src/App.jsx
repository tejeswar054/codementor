import React, { useState } from 'react';
import Header from './components/Header';
import ProblemLibrary from './components/ProblemLibrary';
import WorkspaceHeader from './components/WorkspaceHeader';
import ProblemDetails from './components/ProblemDetails';
import EditorSection from './components/EditorSection';
import AnalysisSection from './components/AnalysisSection';
import TestRunnerPanel from './components/TestRunnerPanel';
import LoadingSkeleton from './components/LoadingSkeleton';
import ErrorBanner from './components/ErrorBanner';
import { analyzeCodeAPI, executeCodeAPI } from './services/api';
import { PROBLEMS } from './data/problems';
import { getSolvedProblems, markProblemSolved } from './utils/storage';
import { Terminal, Sparkles } from 'lucide-react';

export default function App() {
  // Navigation & Problem State
  const [viewMode, setViewMode] = useState('library'); // 'library' | 'workspace'
  const [selectedProblem, setSelectedProblem] = useState(PROBLEMS[0]);
  const [activeTab, setActiveTab] = useState('problem'); // 'problem' | 'testrunner' | 'mentor'
  const [solvedProblemIds, setSolvedProblemIds] = useState(() => getSolvedProblems());

  // Code & Editor State
  const [language, setLanguage] = useState(PROBLEMS[0].language);
  const [problemText, setProblemText] = useState(PROBLEMS[0].description);
  const [code, setCode] = useState(PROBLEMS[0].starterCode);

  // Analysis & Test Results State
  const [analysis, setAnalysis] = useState(null);
  const [previousAnalysis, setPreviousAnalysis] = useState(null);
  const [testResults, setTestResults] = useState(null);
  const [customTestResult, setCustomTestResult] = useState(null);

  // Loading & Error States
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [isExecutingTests, setIsExecutingTests] = useState(false);
  const [isExecutingCustom, setIsExecutingCustom] = useState(false);
  const [error, setError] = useState('');
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  // Handle language switching and auto-load starter code template
  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    if (selectedProblem && selectedProblem.starterCodes && selectedProblem.starterCodes[newLang]) {
      setCode(selectedProblem.starterCodes[newLang]);
    }
  };

  // Select problem from library catalog
  const handleSelectProblem = (prob) => {
    setSelectedProblem(prob);
    const initialLang = prob.language || 'javascript';
    setLanguage(initialLang);
    setProblemText(prob.description);
    setCode(prob.starterCodes ? prob.starterCodes[initialLang] || prob.starterCode : prob.starterCode);
    setAnalysis(null);
    setPreviousAnalysis(null);
    setTestResults(null);
    setCustomTestResult(null);
    setHasAnalyzed(false);
    setError('');
    setActiveTab('problem');
    setViewMode('workspace');
  };

  // Back to problem library
  const handleBackToLibrary = () => {
    setViewMode('library');
    setError('');
  };

  // Run Test Cases against execution engine sandbox
  const handleRunTests = async () => {
    if (!code.trim()) {
      setError('Please write or paste your solution before running test cases.');
      return;
    }

    setIsExecutingTests(true);
    setError('');

    try {
      const res = await executeCodeAPI({
        language,
        code,
        functionName: selectedProblem.functionName,
        testCases: selectedProblem.testCases,
      });

      if (res.success) {
        setTestResults(res);
        setActiveTab('testrunner');

        // Track problem mastery if all test cases passed
        if (res.passed === res.total && res.total > 0) {
          markProblemSolved(selectedProblem.id);
          setSolvedProblemIds(getSolvedProblems());
        }
      } else {
        throw new Error(res.error || 'Failed to execute test cases.');
      }
    } catch (err) {
      console.error('Test execution error:', err);
      setError(err.message || 'An error occurred during test execution.');
    } finally {
      setIsExecutingTests(false);
    }
  };

  // Run Custom Input Test Case
  const handleRunCustomTest = async (customInput) => {
    if (!code.trim()) {
      setError('Please write or paste your solution before running custom test cases.');
      return;
    }

    setIsExecutingCustom(true);
    setError('');

    try {
      const res = await executeCodeAPI({
        language,
        code,
        functionName: selectedProblem.functionName,
        testCases: [{ input: customInput, expected: 'N/A', type: 'custom' }],
      });

      if (res.success) {
        setCustomTestResult(res);
      } else {
        throw new Error(res.error || 'Failed to execute custom test case.');
      }
    } catch (err) {
      console.error('Custom test execution error:', err);
      setError(err.message || 'An error occurred during custom test execution.');
    } finally {
      setIsExecutingCustom(false);
    }
  };

  // AI Mentor Analysis handler
  const handleAnalyze = async (failedCases = null) => {
    if (!code.trim()) {
      setError('Please write or paste your solution before requesting AI analysis.');
      return;
    }

    setIsLoadingAI(true);
    setError('');

    try {
      const currentPrev = analysis ? analysis : previousAnalysis;

      const result = await analyzeCodeAPI({
        language,
        problem: selectedProblem ? selectedProblem.description : problemText,
        code,
        previousAnalysis: currentPrev,
        failedTestCases: failedCases || undefined,
      });

      if (result.success && result.analysis) {
        if (analysis) {
          setPreviousAnalysis(analysis);
        }
        setAnalysis(result.analysis);
        setHasAnalyzed(true);
        setActiveTab('mentor');
      } else {
        throw new Error(result.error || 'Failed to analyze code.');
      }
    } catch (err) {
      console.error('Analysis error:', err);
      setError(err.message || 'An error occurred while connecting to the AI Mentor service.');
    } finally {
      setIsLoadingAI(false);
    }
  };

  // Ask AI Mentor specifically about failed test cases
  const handleAskMentorForFailed = (failedResults) => {
    handleAnalyze(failedResults);
  };

  // Apply suggested fix to Monaco editor
  const handleApplyToEditor = (fixedCode) => {
    if (fixedCode) {
      setCode(fixedCode);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Header onHome={handleBackToLibrary} />

      {/* VIEW MODE 1: PROBLEM LIBRARY */}
      {viewMode === 'library' && (
        <ProblemLibrary
          onSelectProblem={handleSelectProblem}
          solvedProblemIds={solvedProblemIds}
        />
      )}

      {/* VIEW MODE 2: CODING WORKSPACE */}
      {viewMode === 'workspace' && (
        <>
          <WorkspaceHeader
            problem={selectedProblem}
            onBack={handleBackToLibrary}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex-1 flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Problem Details / Test Runner / AI Mentor */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                {error && <ErrorBanner message={error} onRetry={handleRunTests} />}

                {/* Tab 1: Problem Details */}
                {activeTab === 'problem' && (
                  <ProblemDetails problem={selectedProblem} />
                )}

                {/* Tab 2: Test Runner Panel */}
                {activeTab === 'testrunner' && (
                  <TestRunnerPanel
                    problemId={selectedProblem?.id}
                    language={language}
                    onApplyToEditor={handleApplyToEditor}
                    testResults={testResults}
                    isExecuting={isExecutingTests}
                    onRunTests={handleRunTests}
                    onRunCustomTest={handleRunCustomTest}
                    customTestResult={customTestResult}
                    isExecutingCustom={isExecutingCustom}
                    onAskMentorForFailed={handleAskMentorForFailed}
                    onBackToLibrary={handleBackToLibrary}
                    onViewAIExplanation={() => setActiveTab('mentor')}
                    isLoadingAI={isLoadingAI}
                    complexity={analysis?.complexity}
                  />
                )}

                {/* Tab 3: AI Mentor Panel */}
                {activeTab === 'mentor' && (
                  <>
                    {isLoadingAI && <LoadingSkeleton />}

                    {!isLoadingAI && analysis && (
                      <AnalysisSection
                        analysis={analysis}
                        onApplyToEditor={handleApplyToEditor}
                        language={language}
                        onRunTests={handleRunTests}
                      />
                    )}

                    {!isLoadingAI && !analysis && (
                      <div className="bg-slate-900/60 border border-slate-800 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center gap-3 min-h-[420px]">
                        <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-indigo-400">
                          <Terminal className="w-8 h-8" />
                        </div>
                        <h3 className="text-base font-bold text-slate-200">AI Mentor Ready</h3>
                        <p className="text-xs text-slate-400 max-w-md leading-relaxed">
                          Click <strong className="text-indigo-400">Analyze Code</strong> or <strong className="text-emerald-400">Run Test Cases</strong> to receive progressive mentor hints, edge case analysis, and test feedback.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Right Column: Monaco Editor */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <EditorSection
                  language={language}
                  setLanguage={handleLanguageChange}
                  problem={problemText}
                  setProblem={setProblemText}
                  code={code}
                  setCode={setCode}
                  onAnalyze={() => handleAnalyze()}
                  isLoading={isLoadingAI}
                  hasAnalyzed={hasAnalyzed}
                />
              </div>
            </div>
          </main>
        </>
      )}

      <footer className="border-t border-slate-800/80 bg-slate-900/40 py-4 text-center text-xs text-slate-500">
        <p>CodeMentor AI — Full-Stack LeetCode-Style AI Mentor • Built with React, Express, Gemini API & Safe Sandbox</p>
      </footer>
    </div>
  );
}
