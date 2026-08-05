"use client";

import { useCallback, useEffect, useState } from "react";
import { safeLocalSet } from "@/lib/template/safeStorage";
import { MoonIcon, SunIcon } from "@/components/icons/UiIcons";
import TextScramble from "../animations/TextScramble";

const STORAGE_KEY = "template.theme";
type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("color-scheme", theme);
}

type ThemeSwitcherProps = {
  initialTheme: Theme;
  isPermanent?: boolean;
};

export default function ThemeSwitcher({
  initialTheme,
  isPermanent = false,
}: ThemeSwitcherProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      safeLocalSet(STORAGE_KEY, next);
      document.cookie = `${STORAGE_KEY}=${next}; path=/; max-age=31536000; samesite=lax`;
      return next;
    });
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      id="color-switcher"
      className={`btn mxd-color-switcher ${isPermanent ? "permanent" : ""}`}
      type="button"
      role="switch"
      aria-label="light/dark mode"
      aria-checked={isDark}
      onClick={toggle}
    >
      {isDark ? (
        <>
          <TextScramble className="switcher-text">Day</TextScramble>
          <span className="switcher-icon">
            <SunIcon />
          </span>
        </>
      ) : (
        <>
          <TextScramble className="switcher-text">Night</TextScramble>
          <span className="switcher-icon night">
            <MoonIcon />
          </span>
        </>
      )}
    </button>
  );
}
