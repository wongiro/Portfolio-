"use client";

import { useEffect, useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    console.log("Initial load - saved theme:", saved, "system dark:", systemDark);
    
    if (saved === "dark" || (!saved && systemDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      console.log("Applied dark theme initially");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      console.log("Applied light theme initially");
    }
  }, []);

  const toggleTheme = () => {
    console.log("=== TOGGLE THEME START ===");
    console.log("Current theme before toggle:", theme);
    
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("Switching to:", newTheme);
    
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      console.log("Added dark class to html");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Removed dark class from html");
    }
    
    console.log("HTML classes after toggle:", document.documentElement.classList);
    console.log("LocalStorage theme:", localStorage.getItem("theme"));
    console.log("=== TOGGLE THEME END ===");
  };

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg border border-gray-400 bg-slate-200">
        <div className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {/* Debug display */}
      <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
        {theme}
      </span>
      
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg border border-gray-400 dark:border-gray-600 
                   bg-slate-200 dark:bg-gray-800 
                   hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        {theme === "light" ? (
          <FaRegMoon className="text-gray-800 w-6 h-6" />
        ) : (
          <FaRegSun className="text-yellow-400 w-6 h-6" />
        )}
      </button>
    </div>
  );
}