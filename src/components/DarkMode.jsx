import { useEffect, useState } from "react";

/**
 * Simple dark‑mode toggle.
 * Drop <DarkMode /> anywhere in your header / navbar.
 */
function DarkMode() {
  const [enabled, setEnabled] = useState(() => {
    // load saved preference (if any)
    return localStorage.getItem("theme") === "dark";
  });

  // apply or remove the `dark` class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (enabled) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [enabled]);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition text-sm"
      title="Toggle dark mode"
    >
      {enabled ? "☀️ " : "🌙 "}
    </button>
  );
}

export default DarkMode;
