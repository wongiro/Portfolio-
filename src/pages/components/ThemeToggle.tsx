"use client";

import { useEffect } from "react";
import { FaRegSun } from "react-icons/fa";

export default function ThemeToggle() {
  useEffect(() => {
    // Force dark theme on mount
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="flex items-center gap-2">
      <button
        className="p-2 rounded-lg border border-gray-600 bg-gray-800"
        title="Permanently in dark mode"
      >
        <FaRegSun className="text-yellow-400 w-6 h-6" />
      </button>
    </div>
  );
}