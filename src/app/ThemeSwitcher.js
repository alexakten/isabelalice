"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

useEffect(() => {
  setMounted(true)
}, []);

  if(!mounted){
    return null;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      style={{ fontFamily: "Garamond", fontStyle: "italic" }}
      className="text-lg"
    >
      {theme === "light" ? "◖ dark" : "● light"}
    </button>
  );
}
