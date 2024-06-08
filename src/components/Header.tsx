import { useState, useEffect } from "react";
import "./switch.css"

function Header() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  useEffect(() => {
    const element = document.getElementById("theme-switch");
    if (element && darkMode !== null) {
      if (darkMode) {
        element.dataset.theme = "dark";
      } else {
        element.dataset.theme = "light";
      }
    }
  }, [darkMode]);
  return (
    <div className="w-full h-[300px] bg-secondary -z-50 px-24 py-20">
      <div className="w-full max-w-6xl inline-flex items-center justify-between">
        <div className="text-4xl font-bold text-left text-text-main">
          Good Evening
          <span>
            <input
              type="text"
              defaultValue={"user"}
              className="ml-[10px] bg-transparent border-none outline-none w-fit cursor-pointer"
            />
          </span>
        </div>
        <div>
          <label className="switch">
            <input
              type="checkbox"
              onChange={() => setDarkMode(darkMode === null ? true : !darkMode)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header;
