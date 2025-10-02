# 🧩 Baseline Buddy

**Baseline Buddy** is a VS Code extension that helps developers write browser-compatible web code effortlessly.  
It integrates [Baseline](https://web.dev/baseline/) data directly into the editor to flag unsupported features, highlight browser compatibility, and offer quick fixes — turning compatibility pain into productivity.

---

## 🚀 Features

### 🧠 Smart Detection
Detects when you’re using HTML, CSS, or JS features that aren’t yet supported across all major browsers.

### 💡 Hover Suggestions
Displays compatibility info and recommended fallbacks through non-intrusive hover popups.

### ⚙️ One-Click Quick Fix
Automatically suggests or inserts supported alternatives — developer-controlled, never intrusive.

### 🌍 Browser Support Highlighting
Shows compatibility indicators directly inside the editor (Chrome, Firefox, Safari, Edge).

### 🧪 “Test in Browser” Button *(planned)*
Open a quick preview with a chosen browser engine to confirm feature behavior instantly.

---

## 🏗️ Architecture Overview

### 🔹 Folder Structure

```plaintext
src/
 ├── data/        → Baseline data integration & feature mapping  
 ├── ui/          → Hover, highlights, and visual feedback  
 ├── quickfix/    → Core logic for quick suggestions and fixes  
 ├── extension.ts → Entry point for VS Code activation
````

---

### 🧭 System Flow

```text
┌─────────────────────────────┐
│         Developer           │
│   (Writes web code in VSCode) │
└──────────────┬──────────────┘
               │
               ▼
        🔍 Baseline Buddy Extension
               │
     ┌─────────┴────────────┐
     │                      │
     ▼                      ▼
⚙️  Feature Detector     💡 Hover UI Layer
     │                      │
     ▼                      ▼
📊 Baseline Data API     🧩 Quick-Fix Engine
     │                      │
     └──────────┬───────────┘
                ▼
        ✅ Supported Suggestion
        (Shows fallback, compatibility info,
         and optional browser test button)
```

This diagram shows how the extension interacts with VS Code, analyzes code using Baseline data, and provides visual + actionable feedback.

---

## ⚙️ Tech Stack

* **VS Code API** — for editor integration
* **TypeScript** — extension logic
* **Baseline Data** — feature compatibility source
* **Node.js** — build and compile environment

---

## 👩‍💻 Team

| Name                                                   | Role                             | GitHub         |
| ------------------------------------------------------ | -------------------------------- | -------------- |
| [Shubh Mittal](https://github.com/shubhm8971)          | Team Lead / Core Logic           | @shubhm8971    |
| [Gayathri Polavarapu](https://github.com/vanigayathri) | Data Integration & Research      | @vanigayathri  |
| [Fatuma Yattani](https://github.com/Fatumayattani)     | UI, Hover Design & Documentation | @Fatumayattani |
| Priya Vanka                                            | Contributor (initial phase)      | —              |

---

## 🧩 How It Works

1. **Baseline Data Fetching**
   Pulls feature support data and maps it into an internal compatibility dictionary.

2. **Linting & Detection**
   Monitors code in real-time to detect unsupported or partially supported web APIs.

3. **UI Feedback**
   Provides hover popups, highlights, and optional quick-fix actions.

4. **Suggestions**
   Offers alternative implementations or fallback code snippets.

---

## 🧰 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/shubhm8971/baseline-buddy.git
cd baseline-buddy

# Install dependencies
npm install

# Compile the extension
npm run compile

# Launch the extension in VS Code
code .
# Then press F5 to run in Extension Development Host
```

---

## 🧠 Future Enhancements

* [ ] Live browser testing inside VS Code
* [ ] Custom rule configuration
* [ ] Baseline version tracking
* [ ] Dark mode compatibility hints

---

## 🏆 Hackathon Context

Built for the **Baseline Hackathon 2025**, focusing on developer tools that leverage Baseline data for better cross-browser web development.

---

## 📜 License

MIT License © 2025 Baseline Buddy Team



