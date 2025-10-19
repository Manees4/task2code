import React from "react";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div className="header-left">
        <h1>My React Dashboard</h1>
        <p className="subtitle">Simple, responsive & beginner-friendly</p>
      </div>
      <button
        className="dark-toggle"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}



