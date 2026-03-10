import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Search, Terminal, AlertCircle, Cloud, Activity, User, Briefcase, ChevronRight, X, GitCommit } from 'lucide-react';

const sectionLabels = {
  es: {
    profile: 'Perfil & Contacto',
    summary: 'Resumen Profesional',
    aiAgents: 'Operaciones AI (Agentes & Workflows)',
    technologies: 'Herramientas y Tecnologías',
    achievements: 'Logros Clave',
    kubernetes: 'Experiencia Kubernetes',
    kafka: 'Experiencia Kafka',
    elastic: 'Experiencia Elastic',
    metrics: 'Métricas de Rendimiento en proyectos',
    metricsDetail: 'Métricas Detalladas por Proyecto',
    agile: 'Agile & CI/CD',
    aiml: 'AI/ML',
    timeline: 'Timeline',
    migrations: 'Migraciones',
    blog: 'ADR - Registros de Decisiones'
  },
  en: {
    profile: 'Profile & Contact',
    summary: 'Professional Summary',
    aiAgents: 'AI Operations (Agents & Workflows)',
    technologies: 'Tools & Technologies',
    achievements: 'Key Achievements',
    kubernetes: 'Kubernetes Experience',
    kafka: 'Kafka Experience',
    elastic: 'Elastic Experience',
    metrics: 'Performance Metrics in projects',
    metricsDetail: 'Detailed Metrics by Project',
    agile: 'Agile & CI/CD',
    aiml: 'AI/ML',
    timeline: 'Timeline',
    migrations: 'Migrations',
    blog: 'Architecture Decision Records'
  },
  pt: {
    profile: 'Perfil & Contato',
    summary: 'Resumo Profissional',
    aiAgents: 'Operações AI (Agentes & Workflows)',
    technologies: 'Ferramentas e Tecnologias',
    achievements: 'Principais Conquistas',
    kubernetes: 'Experiência Kubernetes',
    kafka: 'Experiência Kafka',
    elastic: 'Experiência Elastic',
    metrics: 'Métricas de Desempenho em projetos',
    metricsDetail: 'Métricas Detalhadas por Projeto',
    agile: 'Agile & CI/CD',
    aiml: 'IA/ML',
    timeline: 'Linha do Tempo',
    migrations: 'Migrações',
    blog: 'ADR - Registros de Decisões de Arquitetura'
  }
};

function buildSections(lang) {
  const labels = sectionLabels[lang] || sectionLabels.es;
  return [
    { id: 'profile', name: labels.profile, icon: 'user', ref: 'profile' },
    { id: 'resumen', name: labels.summary, icon: 'mail', ref: 'professional-summary' },
    { id: 'ai-agents', name: labels.aiAgents, icon: 'bot', ref: 'ai-agents' },
    { id: 'aiml', name: labels.aiml, icon: 'code', ref: 'aiml' },
    { id: 'tecnologias', name: labels.technologies, icon: 'refresh', ref: 'tools-technologies' },
    { id: 'logros', name: labels.achievements, icon: 'award', ref: 'key-achievements' },
    { id: 'kubernetes', name: labels.kubernetes, icon: 'cloud', ref: 'kubernetes-experience' },
    { id: 'kafka', name: labels.kafka, icon: 'database', ref: 'kafka-experience' },
    { id: 'elastic', name: labels.elastic, icon: 'search', ref: 'elastic-experience' },
    { id: 'metricas', name: labels.metrics, icon: 'chart', ref: 'performance-metrics' },
    { id: 'agile', name: labels.agile, icon: 'refresh', ref: 'agile-cicd' },
    { id: 'timeline', name: labels.timeline, icon: 'mail', ref: 'timeline' },
    { id: 'migrations', name: labels.migrations, icon: 'refresh', ref: 'migrations' },
    { id: 'blog', name: labels.blog, icon: 'terminal', ref: 'blog', isExternal: true },
  ];
}

const CommandPalette = ({ lang = 'es', sections: externalSections, isOpen: controlledOpen, onClose }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;
  const setIsOpen = isControlled ? (val) => { if (!val && onClose) onClose(); } : setInternalOpen;
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const router = useRouter();

  const sections = useMemo(
    () => externalSections || buildSections(lang),
    [externalSections, lang]
  );

  const t = {
    es: {
      placeholder: "Buscar secciones, proyectos, herramientas...",
      placeholderShort: "Buscar...",
      empty: "No se encontraron resultados.",
      sections: "SECCIONES",
      actions: "ACCIONES RÁPIDAS"
    },
    en: {
      placeholder: "Search sections, projects, tools...",
      placeholderShort: "Search...",
      empty: "No results found.",
      sections: "SECTIONS",
      actions: "QUICK ACTIONS"
    },
    pt: {
      placeholder: "Pesquisar seções, projetos, ferramentas...",
      placeholderShort: "Pesquisar...",
      empty: "Nenhum resultado encontrado.",
      sections: "SEÇÕES",
      actions: "AÇÕES RÁPIDAS"
    }
  };

  const texts = t[lang] || t.es;

  const quickActions = [
    { id: 'action-cv', name: lang === 'es' ? 'Descargar CV' : lang === 'pt' ? 'Baixar CV' : 'Download Resume', icon: 'User', action: () => {
      const fileMap = { en: '/docs/cv.pdf', es: '/docs/hv.pdf', pt: '/docs/hv.pdf' };
      const link = document.createElement('a');
      link.href = fileMap[lang] || fileMap.es;
      link.download = fileMap[lang]?.split('/').pop() || 'hv.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }},
    { id: 'action-contact', name: lang === 'es' ? 'Contactar (Email)' : lang === 'pt' ? 'Contato (Email)' : 'Contact (Email)', icon: 'Terminal', action: () => window.location.href='mailto:gabriel.contrerasv3@gmail.com' }
  ];

  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'user': return <User className="w-4 h-4" />;
      case 'terminal': return <Terminal className="w-4 h-4" />;
      case 'cloud': return <Cloud className="w-4 h-4" />;
      case 'activity': return <Activity className="w-4 h-4" />;
      case 'bot': return <GitCommit className="w-4 h-4" />;
      default: return <ChevronRight className="w-4 h-4" />;
    }
  };

  // Keyboard listener (Cmd+K / Ctrl+K) - only in uncontrolled mode
  useEffect(() => {
    if (isControlled) return;
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isControlled]);

  // Autofocus when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const filteredSections = query === ''
    ? sections
    : sections.filter(s => s.name.toLowerCase().includes(query.toLowerCase()) || s.id.toLowerCase().includes(query.toLowerCase()));

  const filteredActions = query === ''
    ? quickActions
    : quickActions.filter(a => a.name.toLowerCase().includes(query.toLowerCase()));

  const allItems = [...filteredSections, ...filteredActions];

  useEffect(() => {
    const handleNavigation = (e) => {
      if (!isOpen) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % allItems.length);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + allItems.length) % allItems.length);
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        if (allItems[selectedIndex]) {
          handleSelect(allItems[selectedIndex]);
        }
      }
    };
    window.addEventListener('keydown', handleNavigation);
    return () => window.removeEventListener('keydown', handleNavigation);
  }, [isOpen, selectedIndex, allItems]);

  const handleSelect = (item) => {
    setIsOpen(false);
    if (item.action) {
      item.action();
    } else if (item.isExternal) {
      router.push(`/${lang}/${item.ref}`);
    } else {
      const element = document.getElementById(item.ref);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (router.asPath.includes('/blog')) {
         router.push(`/${lang}#${item.ref}`);
      }
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

      {/* Search Modal */}
      <div className="relative bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-700/60 overflow-hidden flex flex-col max-h-[70vh] animate-in fade-in zoom-in-95 duration-200">

        {/* Input Header */}
        <div className="flex items-center px-4 border-b border-slate-800">
          <Search className="w-5 h-5 text-blue-500 mr-3" />
          <input
            ref={inputRef}
            className="flex-1 bg-transparent border-none py-5 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-0 text-lg"
            placeholder={texts.placeholder}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-300 p-2">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-slate-700">
          {allItems.length === 0 ? (
            <div className="text-center py-10 text-slate-500 flex flex-col items-center">
              <AlertCircle className="w-8 h-8 mb-3 opacity-50" />
              {texts.empty}
            </div>
          ) : (
            <>
              {filteredSections.length > 0 && (
                <div className="mb-4">
                  <div className="px-3 py-2 text-xs font-semibold text-slate-500 tracking-wider">
                    {texts.sections}
                  </div>
                  {filteredSections.map((item, index) => {
                    const isSelected = selectedIndex === index;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        className={`w-full text-left px-3 py-3 rounded-xl flex items-center justify-between transition-colors ${isSelected ? 'bg-blue-600/10 text-blue-400' : 'text-slate-300 hover:bg-slate-800'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-1.5 rounded-md ${isSelected ? 'bg-blue-500/20' : 'bg-slate-800'}`}>
                            {renderIcon(item.icon)}
                          </div>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        {isSelected && <ChevronRight className="w-4 h-4" />}
                      </button>
                    );
                  })}
                </div>
              )}

              {filteredActions.length > 0 && (
                <div>
                  <div className="px-3 py-2 text-xs font-semibold text-slate-500 tracking-wider">
                    {texts.actions}
                  </div>
                  {filteredActions.map((item, idx) => {
                    const actualIndex = filteredSections.length + idx;
                    const isSelected = selectedIndex === actualIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        className={`w-full text-left px-3 py-3 rounded-xl flex items-center justify-between transition-colors ${isSelected ? 'bg-emerald-600/10 text-emerald-400' : 'text-slate-300 hover:bg-slate-800'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-1.5 rounded-md ${isSelected ? 'bg-emerald-500/20' : 'bg-slate-800'}`}>
                            <Terminal className="w-4 h-4" />
                          </div>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        {isSelected && <ChevronRight className="w-4 h-4" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Instructions */}
        <div className="border-t border-slate-800 px-4 py-3 bg-slate-900/50 flex justify-between items-center text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <kbd className="bg-slate-800 border border-slate-700 rounded px-1 text-[10px]">↑</kbd>
              <kbd className="bg-slate-800 border border-slate-700 rounded px-1 text-[10px]">↓</kbd>
              {lang === 'en' ? 'navigate' : lang === 'pt' ? 'navegar' : 'navegar'}
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="bg-slate-800 border border-slate-700 rounded px-1.5 text-[10px]">Enter</kbd>
              {lang === 'en' ? 'select' : lang === 'pt' ? 'selecionar' : 'seleccionar'}
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="bg-slate-800 border border-slate-700 rounded px-1.5 text-[10px]">Esc</kbd>
              {lang === 'en' ? 'close' : lang === 'pt' ? 'fechar' : 'cerrar'}
            </span>
          </div>
          <div>Portafolio O.S</div>
        </div>

      </div>
    </div>
  );
};

export default CommandPalette;
