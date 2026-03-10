import React, { useState } from 'react';
import { Bot, Shield, Cloud, Activity, CheckCircle, GitCommit, UserCheck, Rocket, AlertTriangle, ArrowRight, Server, Terminal, Workflow, PieChart, TrendingUp, Zap, BookOpen, AlertCircle } from 'lucide-react';
import { aiPlatformAgents, aiWorkflows } from '../../data/ai-platform-agents';

const IconMap = {
  "shield": Shield,
  "cloud": Cloud,
  "activity": Activity,
  "check-circle": CheckCircle,
  "git-commit": GitCommit,
  "bot": Bot,
  "user-check": UserCheck,
  "rocket": Rocket,
  "alert-triangle": AlertTriangle,
  "server": Server,
  "terminal": Terminal,
  "workflow": Workflow,
  "pie-chart": PieChart,
  "trending-up": TrendingUp,
  "zap": Zap,
  "book-open": BookOpen,
  "alert-circle": AlertCircle
};

const AIAgentsLeadership = ({ lang = 'es' }) => {
  const [activeTab, setActiveTab] = useState('agents');

  const t = {
    es: {
      title: "Operaciones de Plataforma Impulsadas por IA",
      subtitle: "Ingeniería de Plataformas potenciada por Inteligencia Artificial para maximizar la eficiencia financiera, fiabilidad y gobierno corporativo. (Auto-gestión estratégica y creación de valor).",
      tabAgents: "Herramientas AI de Plataforma",
      tabWorkflows: "Workflows y Toma de Decisiones",
      statusActive: "Activo",
      statusStandby: "En Espera",
      metrics: "Impacto en Negocio",
      protocol: "Protocolo:",
      provider: "Motor AI:",
      trigger: "Trigger/Evento",
      agent: "AI Analysis",
      human: "Strategic Decision",
      action: "Platform Action",
      protocols: "Protocolos:"
    },
    en: {
      title: "AI-Driven Platform Operations",
      subtitle: "Platform Engineering empowered by Artificial Intelligence to maximize financial efficiency, reliability, and corporate governance. (Strategic self-management and value creation).",
      tabAgents: "AI Platform Tooling",
      tabWorkflows: "Workflows & Decision Making",
      statusActive: "Active",
      statusStandby: "Standby",
      metrics: "Business Impact",
      protocol: "Protocol:",
      provider: "AI Engine:",
      trigger: "Event/Trigger",
      agent: "AI Analysis",
      human: "Strategic Decision",
      action: "Platform Action",
      protocols: "Protocols:"
    },
    pt: {
      title: "Operações de Plataforma Baseadas em IA",
      subtitle: "Engenharia de Plataforma potencializada por Inteligência Artificial para maximizar eficiência financeira, confiabilidade e governança corporativa. (Autogestão estratégica e criação de valor).",
      tabAgents: "Ferramentas de IA da Plataforma",
      tabWorkflows: "Workflows & Tomada de Decisão",
      statusActive: "Ativo",
      statusStandby: "Em Espera",
      metrics: "Impacto no Negócio",
      protocol: "Protocolo:",
      provider: "Motor de IA:",
      trigger: "Gatilho/Evento",
      agent: "Análise de IA",
      human: "Decisão Estratégica",
      action: "Ação da Plataforma",
      protocols: "Protocolos:"
    }
  };

  const texts = t[lang] || t.es;

  return (
    <section id="ai-agents" className="py-20 relative text-white bg-slate-900 border-t border-slate-800">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900/80 to-slate-900 -z-10"></div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/30">
            <Workflow className="w-8 h-8" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
            {texts.title}
          </h2>
          <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto font-light">
            {texts.subtitle}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-800/50 p-1 rounded-xl ring-1 ring-white/10 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('agents')}
              className={`px-4 sm:px-6 py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'agents' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              <Bot className="w-4 h-4" />
              <span className="hidden sm:inline">{texts.tabAgents}</span>
              <span className="sm:hidden">Agents</span>
            </button>
            <button
              onClick={() => setActiveTab('workflows')}
              className={`px-4 sm:px-6 py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'workflows' ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              <Workflow className="w-4 h-4" />
              <span className="hidden sm:inline">{texts.tabWorkflows}</span>
              <span className="sm:hidden">Workflows</span>
            </button>
          </div>
        </div>

        {/* Content: Agents */}
        {activeTab === 'agents' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiPlatformAgents.map((agent) => {
              const Icon = IconMap[agent.icon] || Bot;
              const isActive = agent.status === 'Activo';

              return (
                <div key={agent.id} className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-5 sm:p-6 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden">

                  {/* Header: icon + title + status */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    <div className="p-2.5 sm:p-3 bg-blue-500/10 text-blue-400 rounded-xl ring-1 ring-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-100 leading-tight">{agent.name}</h3>
                        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold shrink-0 ${isActive ? 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30' : 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30'}`}>
                          <span className="relative flex h-1.5 w-1.5">
                            {isActive && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>}
                            <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isActive ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                          </span>
                          {isActive ? texts.statusActive : texts.statusStandby}
                        </span>
                      </div>
                      <p className="text-indigo-400 font-medium text-sm">{agent.role}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6 text-sm text-slate-300">
                    <p className="leading-relaxed">{agent.description}</p>

                    {/* Protocol & Provider tags */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 bg-slate-700/50 rounded-md text-xs border border-slate-600/50 font-mono text-slate-300">
                        <span className="text-slate-500 mr-1">{texts.provider}</span>{agent.provider}
                      </span>
                      <span className="px-2.5 py-1 bg-slate-700/50 rounded-md text-xs border border-slate-600/50 font-mono text-slate-300">
                        <span className="text-slate-500 mr-1">{texts.protocol}</span>{agent.protocol}
                      </span>
                    </div>

                    {/* Protocol capability tags */}
                    {agent.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {agent.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-indigo-500/10 text-indigo-300 rounded-full text-[10px] font-medium ring-1 ring-indigo-500/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-700/50">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">{texts.metrics}</p>
                    <div className="grid grid-cols-3 gap-2">
                      {agent.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-slate-900/50 rounded-lg p-2.5 sm:p-3 border border-slate-800 text-center group-hover:border-slate-600 transition-colors">
                          <div className="text-base sm:text-lg font-bold text-white mb-0.5">{metric.value}</div>
                          <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wide">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Content: Workflows */}
        {activeTab === 'workflows' && (
          <div className="space-y-8">
            {aiWorkflows.map((workflow) => (
              <div key={workflow.id} className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-5 sm:p-6 lg:p-8">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-3 mb-2">
                    <Workflow className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 shrink-0" />
                    {workflow.name}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base">{workflow.description}</p>

                  {/* Workflow protocol tags */}
                  {workflow.protocols && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-xs text-slate-500 font-semibold self-center">{texts.protocols}</span>
                      {workflow.protocols.map((proto) => (
                        <span key={proto} className="px-2.5 py-1 bg-purple-500/10 text-purple-300 rounded-full text-[11px] font-medium ring-1 ring-purple-500/20">
                          {proto}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-slate-900/60 rounded-xl p-4 sm:p-6 lg:p-8 border border-slate-800 relative overflow-hidden">
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                    {workflow.steps.map((step, idx) => {
                      const StepIcon = IconMap[step.icon] || Bot;
                      const isLast = idx === workflow.steps.length - 1;

                      let colors = "";
                      let label = "";
                      if (step.type === 'trigger') { colors = "bg-rose-500/10 text-rose-400 border-rose-500/30"; label = texts.trigger; }
                      else if (step.type === 'agent') { colors = "bg-blue-500/10 text-blue-400 border-blue-500/30"; label = texts.agent; }
                      else if (step.type === 'human') { colors = "bg-purple-500/10 text-purple-400 border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]"; label = texts.human; }
                      else { colors = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"; label = texts.action; }

                      return (
                        <React.Fragment key={idx}>
                          <div className="flex flex-col items-center flex-1 w-full md:w-auto relative group">
                            <div className="text-[10px] uppercase tracking-wider font-bold mb-2 text-slate-500 group-hover:text-slate-300 transition-colors">
                              {label}
                            </div>
                            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border flex items-center justify-center ${colors} backdrop-blur-sm z-10 group-hover:scale-110 transition-transform`}>
                              <StepIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                            </div>
                            <div className="mt-3 text-xs sm:text-sm font-medium text-slate-300 text-center max-w-[120px]">
                              {step.name}
                            </div>
                          </div>

                          {/* Connector Arrow */}
                          {!isLast && (
                            <div className="hidden md:flex flex-col justify-center items-center text-slate-600 px-2 w-12">
                              <div className="h-0.5 w-full bg-slate-700 relative">
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-[4px] border-transparent border-l-slate-700"></div>
                              </div>
                            </div>
                          )}
                          {/* Mobile Arrow */}
                          {!isLast && (
                            <div className="md:hidden py-2 text-slate-600">
                              <ArrowRight className="w-5 h-5 rotate-90" />
                            </div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AIAgentsLeadership;
