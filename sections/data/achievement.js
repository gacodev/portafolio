// Hero stats — the big numbers that grab attention
export const heroStats = [
  { value: "9", label: { es: "Proyectos", en: "Projects", pt: "Projetos" }, color: "blue" },
  { value: "400+", label: { es: "Pipelines", en: "Pipelines", pt: "Pipelines" }, color: "cyan" },
  { value: "40%", label: { es: "Reducción de Costos", en: "Cost Reduction", pt: "Redução de Custos" }, color: "green" },
  { value: "80%", label: { es: "Menos Incidentes", en: "Fewer Incidents", pt: "Menos Incidentes" }, color: "purple" },
];

// Achievements grouped by pillar
const achievements = [
  {
    pillar: { es: "DevOps & CI/CD", en: "DevOps & CI/CD", pt: "DevOps & CI/CD" },
    icon: "rocket",
    color: "blue",
    items: [
      { id: 1, metric: "9", category: { es: "Proyectos a Gran Escala", en: "Large-Scale Projects", pt: "Projetos de Grande Escala" }, result: { es: "Gestionados de principio a fin", en: "Managed end-to-end", pt: "Gerenciados de ponta a ponta" } },
      { id: 2, metric: "400+", category: { es: "Pipelines Orquestados", en: "Pipelines Orchestrated", pt: "Pipelines Orquestrados" }, result: { es: "CI/CD creados y gestionados", en: "CI/CD created and managed", pt: "CI/CD criados e gerenciados" } },
      { id: 4, metric: "40%", category: { es: "Despliegues Más Rápidos", en: "Faster Deployments", pt: "Implantações Mais Rápidas" }, result: { es: "Reducción en tiempo de despliegue", en: "Deployment time reduction", pt: "Redução no tempo de implantação" } },
      { id: 8, metric: "60%", category: { es: "Procesos Automatizados", en: "Processes Automated", pt: "Processos Automatizados" }, result: { es: "De procesos manuales automatizados", en: "Of manual processes automated", pt: "De processos manuais automatizados" } },
      { id: 24, metric: null, category: { es: "Migración Kafka: Conduktor → AKHQ", en: "Kafka Migration: Conduktor → AKHQ", pt: "Migração Kafka: Conduktor → AKHQ" }, result: { es: "Kubernetes, mapeo AD a grupos AKHQ, reporte MDS vs YAML y GitOps con Python", en: "Kubernetes, AD-to-AKHQ group mapping, MDS vs YAML reliability report and GitOps with Python", pt: "Kubernetes, mapeamento AD para grupos AKHQ, relatório MDS vs YAML e GitOps com Python" } },
    ]
  },
  {
    pillar: { es: "Seguridad & Gobernanza", en: "Security & Governance", pt: "Segurança & Governança" },
    icon: "shield",
    color: "emerald",
    items: [
      { id: 7, metric: "16", category: { es: "Pipelines con OWASP", en: "OWASP Pipelines", pt: "Pipelines com OWASP" }, result: { es: "Seguridad integrada en pipelines críticos", en: "Security integrated in critical pipelines", pt: "Segurança integrada em pipelines críticos" } },
      { id: 9, metric: null, category: { es: "Calidad de Código", en: "Code Quality", pt: "Qualidade de Código" }, result: { es: "SonarCloud integrado en todo el ciclo", en: "SonarCloud integrated across the lifecycle", pt: "SonarCloud integrado em todo o ciclo" } },
      { id: 12, metric: null, category: { es: "Redes Privadas", en: "Private Networks", pt: "Redes Privadas" }, result: { es: "VPCs y conexiones seguras configuradas", en: "VPCs and secure connections configured", pt: "VPCs e conexões seguras configuradas" } },
      { id: 13, metric: "6", category: { es: "Propuestas CAF/WAF", en: "CAF/WAF Proposals", pt: "Propostas CAF/WAF" }, result: { es: "Arquitecturas diseñadas con governance", en: "Architectures designed with governance", pt: "Arquiteturas projetadas com governança" } },
    ]
  },
  {
    pillar: { es: "Rendimiento & Resiliencia", en: "Performance & Resilience", pt: "Desempenho & Resiliência" },
    icon: "trending",
    color: "amber",
    items: [
      { id: 5, metric: "80%", category: { es: "Reducción de Incidentes", en: "Incident Reduction", pt: "Redução de Incidentes" }, result: { es: "Menos incidentes post-optimización", en: "Fewer incidents post-optimization", pt: "Menos incidentes pós-otimização" } },
      { id: 3, metric: "40%", category: { es: "Reducción de Costos", en: "Cost Reduction", pt: "Redução de Custos" }, result: { es: "Optimización de recursos cloud", en: "Cloud resource optimization", pt: "Otimização de recursos cloud" } },
      { id: 10, metric: "25%", category: { es: "Datos Más Rápidos", en: "Faster Data", pt: "Dados Mais Rápidos" }, result: { es: "Con MongoDB & RabbitMQ", en: "With MongoDB & RabbitMQ", pt: "Com MongoDB & RabbitMQ" } },
      { id: 11, metric: "30%", category: { es: "Respuesta Más Rápida", en: "Faster Response", pt: "Resposta Mais Rápida" }, result: { es: "Con Redis y Azure Front Door", en: "With Redis and Azure Front Door", pt: "Com Redis e Azure Front Door" } },
      { id: 16, metric: "<5min", category: { es: "RPO de Backups", en: "Backup RPO", pt: "RPO de Backups" }, result: { es: "Estrategias de disaster recovery", en: "Disaster recovery strategies", pt: "Estratégias de disaster recovery" } },
    ]
  },
  {
    pillar: { es: "Liderazgo & Escalabilidad", en: "Leadership & Scalability", pt: "Liderança & Escalabilidade" },
    icon: "users",
    color: "violet",
    items: [
      { id: 6, metric: "35%", category: { es: "Eficiencia de Recursos", en: "Resource Efficiency", pt: "Eficiência de Recursos" }, result: { es: "Mejora con autoscaling agents", en: "Improvement with autoscaling agents", pt: "Melhoria com agentes de autoscaling" } },
      { id: 14, metric: null, category: { es: "Landing Zones", en: "Landing Zones", pt: "Landing Zones" }, result: { es: "Implementadas con escalabilidad automática", en: "Implemented with automatic scalability", pt: "Implementadas com escalabilidade automática" } },
      { id: 15, metric: null, category: { es: "Mentoría de Equipos", en: "Team Mentoring", pt: "Mentoria de Equipes" }, result: { es: "Mejores prácticas de arquitectura cloud", en: "Cloud architecture best practices", pt: "Melhores práticas de arquitetura cloud" } },
      { id: 21, metric: null, category: { es: "Delegación Humanos + AI Agents", en: "Human + AI Agent Delegation", pt: "Delegação Humanos + AI Agents" }, result: { es: "Supervisión de tareas con Jules, Claude Code y GitHub Agents integrados en Jira y Slack", en: "Task supervision with Jules, Claude Code, and GitHub Agents integrated in Jira and Slack", pt: "Supervisão de tarefas com Jules, Claude Code e GitHub Agents integrados no Jira e Slack" } },
      { id: 22, metric: null, category: { es: "Revisión de PRs con AI", en: "AI-Assisted PR Reviews", pt: "Revisão de PRs com IA" }, result: { es: "Agentes revisan código, aplican estándares y filtran PRs antes de revisión humana", en: "Agents review code, enforce standards, and filter PRs before human review", pt: "Agentes revisam código, aplicam padrões e filtram PRs antes da revisão humana" } },
      { id: 23, metric: null, category: { es: "Ciclo de Desarrollo Estructurado", en: "Structured SDLC", pt: "Ciclo de Desenvolvimento Estruturado" }, result: { es: "Controles CI/CD, quality gates y governance definidos de punta a punta", en: "CI/CD controls, quality gates, and governance defined end-to-end", pt: "Controles CI/CD, quality gates e governança definidos de ponta a ponta" } },
    ]
  },
  {
    pillar: { es: "Ingeniería AI & Optimización", en: "AI Engineering & Optimization", pt: "Engenharia de IA & Otimização" },
    icon: "brain",
    color: "rose",
    items: [
      { id: 17, metric: null, category: { es: "Optimización de Requests con JSONB", en: "Request Optimization with JSONB", pt: "Otimização de Requests com JSONB" }, result: { es: "Estructuras compactas para reducir payload y latencia en llamadas a LLMs", en: "Compact structures to reduce payload and latency in LLM calls", pt: "Estruturas compactas para reduzir payload e latência em chamadas a LLMs" } },
      { id: 18, metric: null, category: { es: "Prompt Engineering para Tokens", en: "Prompt Engineering for Tokens", pt: "Prompt Engineering para Tokens" }, result: { es: "Técnicas de compresión de contexto y few-shot para optimizar consumo de tokens", en: "Context compression and few-shot techniques to optimize token consumption", pt: "Técnicas de compressão de contexto e few-shot para otimizar consumo de tokens" } },
      { id: 19, metric: null, category: { es: "Selección de Modelos por Necesidad", en: "Need-Based Model Selection", pt: "Seleção de Modelos por Necessidade" }, result: { es: "Routing inteligente: tareas simples a modelos ligeros, complejas a modelos avanzados (SOLID)", en: "Smart routing: simple tasks to lightweight models, complex ones to advanced models (SOLID)", pt: "Roteamento inteligente: tarefas simples para modelos leves, complexas para modelos avançados (SOLID)" } },
      { id: 20, metric: null, category: { es: "Prácticas SOLID en AI Agents", en: "SOLID Practices in AI Agents", pt: "Práticas SOLID em AI Agents" }, result: { es: "Principio de responsabilidad única y segregación de interfaces en diseño de agentes", en: "Single responsibility and interface segregation in agent design", pt: "Responsabilidade única e segregação de interfaces no design de agentes" } },
    ]
  }
];

export default achievements;
