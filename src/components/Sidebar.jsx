import React from "react";

export default function Sidebar({ active, onSelect, darkMode }) {
  const menu = [
    { key: "overview", label: "Overview" },
    { key: "users", label: "Users" },
    { key: "reports", label: "Reports" },
  ];

  return (
    <aside className={`sidebar ${darkMode ? "dark" : ""}`}>
      <div className="brand">📊 Dashboard</div>

      <nav className="menu-list">
        {menu.map((m) => (
          <button
            key={m.key}
            onClick={() => onSelect(m.key)}
            className={`menu-item ${active === m.key ? "active" : ""}`}
          >
            {m.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}







