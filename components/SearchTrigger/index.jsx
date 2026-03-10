import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import dynamic from 'next/dynamic';

const CommandPalette = dynamic(
  () => import('../FloatingMenu/CommandPalette'),
  { ssr: false }
);

const placeholders = {
  es: [
    'Buscar secciones...',
    'Kubernetes, AI/ML, DevOps...',
    'Navegar el portafolio...',
  ],
  en: [
    'Search sections...',
    'Kubernetes, AI/ML, DevOps...',
    'Navigate portfolio...',
  ],
  pt: [
    'Pesquisar seções...',
    'Kubernetes, AI/ML, DevOps...',
    'Navegar no portfólio...',
  ],
};

const SearchTrigger = ({ lang = 'es' }) => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const langPlaceholders = placeholders[lang] || placeholders.es;

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % langPlaceholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [langPlaceholders.length]);

  // Global Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-3 w-full max-w-md mx-auto flex items-center gap-3 px-4 py-2.5 bg-slate-900/80 border border-slate-700/50 rounded-xl text-slate-400 hover:border-blue-500/50 hover:text-slate-300 transition-all duration-200 cursor-pointer group"
      >
        <Search className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
        <span className="flex-1 text-left text-sm truncate">
          {langPlaceholders[placeholderIndex]}
        </span>
        <kbd className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-slate-500">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandPalette
        lang={lang}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default SearchTrigger;
