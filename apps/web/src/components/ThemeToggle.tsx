'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border flex items-center justify-center"
      title={theme === 'dark' ? 'Switch to calm day mode' : 'Switch to night mode'}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={14} className="text-amber-400" />
      ) : (
        <Moon size={14} className="text-muted-foreground" />
      )}
    </button>
  );
}
