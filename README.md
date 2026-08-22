# CodeMentor AI

> **AI Debugging Mentor for Students and Junior Developers**

CodeMentor AI is an intelligent, developer-oriented code analysis tool designed to act as a supportive mentor rather than a simple answer generator. When a student or junior developer encounters bugs in their code, CodeMentor AI provides progressive hints, structured root-cause explanations, suggested code fixes, edge-case test case generation, and complexity analysis.

---

## 🚩 Problem

When learning to code or debugging tricky logic, students and junior developers often encounter frustrating errors. Existing tools and generic LLM chats often dump complete corrected code solutions instantly. This hampers learning by skipping the critical problem-solving process required to build deep debugging intuition.

## 💡 Solution

**CodeMentor AI** bridges this gap by acting as a Socratic mentor:
1. **Identifies Bugs & Explains Why**: Analyzes logic flaws and explains root causes clearly.
2. **Progressive Hint System**: Reveals guidance step-by-step (Hint 1 → Hint 2 → Hint 3 → Full Explanation) so students can attempt fixing errors on their own first.
3. **Non-Destructive Suggested Fixes**: Presents corrected code side-by-side or in a dedicated preview card without overwriting the user's working code editor.
4. **Edge-Case Test Generation**: Automatically generates test cases (Normal, Edge, Boundary, Invalid) to help users test their implementations.
5. **Re-Analysis Workflow**: Tracks code iterations and alerts the user whether their latest edits fixed the original issue or introduced new bugs.

---

## ✨ Features

- 💻 **Monaco Code Editor**: Professional code editing experience powered by `@monaco-editor/react`.
- 🌐 **Multi-Language Support**: Full support for JavaScript, Python, Java, and C++ with dynamic editor syntax highlighting.
- 💡 **Progressive Mentor Hints**: Interactive reveal mechanism (Hint 1, Hint 2, Hint 3, and Full Walkthrough).
- 🧪 **Smart Test Case Generator**: Generates normal, edge, boundary, and invalid input test cases with clear justifications.
- ⏱️ **Time & Space Complexity Analysis**: Calculates theoretical runtime ($O(N)$) and space bounds for submitted code.
- 🔄 **Iterative Re-Analysis**: Evaluates modified code versions and confirms if previous bugs are resolved.
- ⚡ **Preset Buggy Snippets**: 1-click sample buggy programs in JavaScript, Python, Java, and C++ for instant demonstration.

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
- **AI Integration**: `@google/genai` (Gemini 2.5 Flash API)
- **Environment Management**: `dotenv`
- **Security & Middleware**: `cors`, request validation middleware, structured response schemas

---

## 🏗️ Architecture

```
[ User UI: Monaco Editor + React ]
               │
          HTTP POST /api/analyze
               │
               ▼
[ Express Server & Request Validator ]
               │
          Service Call
               │
               ▼
[ Gemini API (gemini-2.5-flash) ]  ◄── Server-side GEMINI_API_KEY (Strictly Isolated)
               │
     Structured JSON Schema
               │
               ▼
[ Validated & Sanitized Response ]
               │
               ▼
[ Interactive UI: Progressive Hints & Test Cases ]
```

---

## 🚀 Setup & Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn
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
   Add your Gemini API Key in `.env`:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=5000
   ```

3. **Install Dependencies**:
   Install root, backend, and frontend dependencies:
   ```bash
   npm run install:all
   ```

4. **Run the Application**:
   Start both backend and frontend concurrently:
   ```bash
   npm run dev
   ```

   - **Backend API**: `http://localhost:5000`
   - **Frontend UI**: `http://localhost:5173`

---

## 🤖 AI Usage & Integration

### How AI was used during development
AI assist was leveraged for architectural design, system prompt engineering, response schema definitions, and building responsive React components.

### How AI works inside CodeMentor AI
- **Isolated Backend Service**: The frontend never communicates directly with Google Gemini. All requests flow through `backend/services/geminiService.js`.
- **System Prompt & Role Directives**: Gemini is configured with a system prompt specifying the persona of an expert computer science mentor.
- **Structured JSON Schema**: Uses schema enforcement to guarantee consistent JSON structure (`summary`, `bugFound`, `bugExplanation`, `hints`, `suggestedFix`, `testCases`, `complexity`, `fixStatus`).
- **Sanitizing & Fallbacks**: The backend validates and sanitizes every AI response before delivering it to the client.

---

## ⚠️ Limitations

- **No Code Execution**: For security and speed, this MVP performs static AI analysis and does not run user code in an isolated sandbox.
- **Stateless Persistence**: Sessions are kept in client state without requiring a database, matching sprint requirements.

---

## 🔮 Future Improvements

- 🧪 **Sandboxed Code Runner**: Integrate Pyodide / WebAssembly / Docker execution environments for live test case execution.
- 🔐 **User Accounts & Session Saved History**: Save debugging history across learning sessions.
- 📊 **Skill Progress Analytics**: Track common student mistakes and highlight learning growth over time.
- 💬 **Interactive Follow-up Chat**: Allow students to ask specific follow-up questions regarding hints.
