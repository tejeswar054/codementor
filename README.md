# CodeMentor AI — AI-Powered LeetCode Coding Mentor

> **A Socratic, AI-powered LeetCode-style debugging and learning mentor for students and junior developers.**

CodeMentor AI transforms the traditional LeetCode experience. Instead of simply generating answers or dumping code, CodeMentor AI acts as a computer science mentor: it provides progressive hints, structured root-cause explanations, real sandboxed test case execution, targeted mentoring on failed test cases, and theoretical complexity analysis.

---

## 🚩 Problem

When practicing algorithm challenges (LeetCode, HackerRank, etc.), students often hit a wall when a test case fails. Generic LLMs (like standard ChatGPT prompts) usually respond by dumping the full final solution immediately. This removes the problem-solving challenge required to build long-term debugging intuition.

## 💡 Solution

**CodeMentor AI** introduces a Socratic learning workflow:
1. **Curated Problem Library**: Choose from a data-driven catalog of algorithms across Arrays, Strings, Stack, Searching, Linked Lists, Hashing, Sorting, Two Pointers, and Sliding Window.
2. **Pre-Loaded Workspace**: Selecting a problem auto-populates the problem description, constraints, examples, and Monaco Editor starter code (`function twoSum(nums, target) { ... }`).
3. **Deterministic Sandboxed Test Runner**: Click **▶ Run Test Cases** to execute user code in a safe, isolated Node.js `vm` sandbox environment with execution timeouts and memory boundaries. Returns exact Pass/Fail breakdown (`7/8 Passed`), actual vs expected output diffs, and execution timing.
4. **Targeted AI Feedback on Failed Tests**: If a test case fails, click **Ask AI Mentor about Failed Tests**. Gemini analyzes *why* the user's logic produced that specific wrong actual output and provides targeted hints without spoiling the final answer.
5. **Progressive Mentor Hints**: Interactive reveal mechanism (**Hint 1 → Hint 2 → Hint 3 → Full Walkthrough**).
6. **Solution Accepted Banner**: When all tests pass, presents **🎉 SOLUTION ACCEPTED**, complexity breakdown, and "Try Another Problem".

---

## ✨ Features

- 📚 **Data-Driven Problem Catalog**: 16 curated LeetCode-style problems with search, difficulty filters (Easy/Medium/Hard), and topic tags.
- 💻 **Monaco Code Editor**: Professional code editor with syntax highlighting and automatic starter code injection.
- 🧪 **Deterministic Sandbox Execution**: Fast, safe isolated VM runner executing user solution code against test cases with execution timing (`1.09ms`).
- 🎯 **Targeted AI Mentoring**: Mentors users specifically on failed test case inputs and expected/actual mismatches.
- 💡 **Progressive Mentor Hints**: Step-by-step hint reveal system.
- ⏱️ **Complexity Breakdown**: Theoretical Time ($O(N)$) and Space ($O(1)$) complexity calculations.
- ⚙️ **Dual Execution Architecture**: Defaults to safe local VM Sandbox; seamlessly delegates to Judge0 API when `JUDGE0_API_KEY` is configured in `.env`.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS (Dark Developer Theme)
- **Editor**: `@monaco-editor/react` (Monaco Editor Integration)
- **HTTP Client**: Axios
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js + Express
- **AI Integration**: `@google/generative-ai` (Gemini 2.5 Flash API)
- **Execution Engine**: Isolated Node.js `vm` Sandbox + optional Judge0 API integration
- **Middleware**: `cors`, `dotenv`, request validation middleware

---

## 🏗️ Architecture

```
[ Problem Library Catalog ]
           │ (User Selects Problem)
           ▼
[ LeetCode Coding Workspace ]
    ├── Left: Problem Description, Constraints & Examples
    ├── Center: Monaco Editor (Starter Code Pre-Loaded)
    └── Right/Bottom: AI Mentor Panel & Test Runner Output
           │
 ┌─────────┴────────────────────────┐
 │                                  │
 ▼                                  ▼
[ POST /api/execute ]        [ POST /api/analyze ]
 └── Safe `vm` Sandbox         └── Gemini AI Mentor
      - 1000ms Timeout              - Progressive Hints
      - Pass/Fail Results           - Failed Test Targeted Feedback
      - Execution Time              - Solution Complexity
```

---

## 🚀 Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- Google Gemini API Key

### Step-by-Step Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tejeswar054/codementor.git
   cd codementor-ai
   ```

2. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   Add your keys to `.env`:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   CODE_EXECUTION_MODE=sandbox
   # Optional Judge0 credentials:
   JUDGE0_API_URL=https://judge0-ce.p.rapidapi.com
   JUDGE0_API_KEY=your_rapidapi_key_here
   PORT=5000
   ```

3. **Install Dependencies**:
   ```bash
   npm run install:all
   ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```

   - **Backend API**: `http://localhost:5000`
   - **Frontend UI**: `http://localhost:5173`

---

## 🔒 Security & Sandbox Execution

- **No Server Host Execution**: User submissions are never executed directly via `eval()` or `child_process.exec()` on the host OS.
- **Node.js VM Sandbox**: Executed in a fresh `vm.createContext()` with disabled system access (`fs`, `net`, `process` are blocked) and a 1000ms execution timeout guard against infinite loops.
- **Server Key Protection**: `GEMINI_API_KEY` and `JUDGE0_API_KEY` are isolated server-side.
