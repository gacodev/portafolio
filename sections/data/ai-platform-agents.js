export const aiPlatformAgents = [
  {
    id: "ai-finops",
    name: "FinOps & Cost Optimization Agent",
    role: {
      es: "Cloud Financial Orchestrator",
      en: "Cloud Financial Orchestrator",
      pt: "Orquestrador Financeiro de Nuvem"
    },
    protocol: "MCP (Tool Use)",
    provider: "Claude Opus 4",
    icon: "pie-chart",
    description: {
      es: "Analiza continuamente patrones de facturación y uso en arquitecturas Multi-Cloud. Identifica recursos sobre-aprovisionados, cruza tráfico de red vs. costos y emite recomendaciones de Reserved Instances preventivas.",
      en: "Continuously analyzes billing and usage patterns across Multi-Cloud architectures. Identifies over-provisioned resources, cross-references network traffic vs. costs, and issues preventive Reserved Instance recommendations.",
      pt: "Analisa continuamente padrões de faturamento e uso em arquiteturas Multi-Cloud. Identifica recursos superprovisionados, cruza tráfego de rede vs. custos e emite recomendações preventivas de Reserved Instances."
    },
    impact: {
      es: "Maximiza el presupuesto de IT eliminando desperdicio y previendo variaciones mensuales de gasto (Cloud Waste).",
      en: "Maximizes IT budget by eliminating waste and predicting monthly spending variations (Cloud Waste).",
      pt: "Maximiza o orçamento de TI eliminando desperdício e prevendo variações mensais de gastos (Cloud Waste)."
    },
    metrics: [
      { label: "Cost Offset", value: "32% Saved" },
      { label: "Anomalies Caught", value: "18/mo" },
      { label: "Rightsizing", value: "Autoscale" }
    ],
    tags: ["MCP Server", "Tool Use", "Agent-to-API"],
    status: { es: "Activo", en: "Active", pt: "Ativo" }
  },
  {
    id: "ai-gov",
    name: "Cloud Governance Sentinel",
    role: {
      es: "Compliance & Policy Guardrail",
      en: "Compliance & Policy Guardrail",
      pt: "Guardrail de Conformidade e Políticas"
    },
    protocol: "Agent-to-Agent (A2A)",
    provider: "Claude Sonnet 4",
    icon: "shield",
    description: {
      es: "Supervisa en tiempo real cuentas de Azure/AWS evaluando el cumplimiento de políticas de seguridad (CIS, HIPAA) y arquitecturas CAF mediante escaneo avanzado de Terraform state y configuraciones IAM.",
      en: "Monitors Azure/AWS accounts in real-time, evaluating compliance with security policies (CIS, HIPAA) and CAF architectures through advanced Terraform state scanning and IAM configurations.",
      pt: "Monitora contas Azure/AWS em tempo real, avaliando conformidade com políticas de segurança (CIS, HIPAA) e arquiteturas CAF através de escaneamento avançado de Terraform state e configurações IAM."
    },
    impact: {
      es: "Mantiene la postura de seguridad (Security Posture) intacta, bloqueando derivas de infraestructura (Drifts) no deseadas.",
      en: "Maintains security posture intact, blocking unwanted infrastructure drifts.",
      pt: "Mantém a postura de segurança intacta, bloqueando derivas de infraestrutura indesejadas."
    },
    metrics: [
      { label: "Compliance Rate", value: "99.9%" },
      { label: "Drifts Prevented", value: "450+" },
      { label: "Security Scans", value: "Continuous" }
    ],
    tags: ["A2A Protocol", "MCP Client", "Agent-to-Agent"],
    status: { es: "Activo", en: "Active", pt: "Ativo" }
  },
  {
    id: "ai-aiops",
    name: "Intelligent Observability (AIOps)",
    role: {
      es: "Proactive Incident Predictor",
      en: "Proactive Incident Predictor",
      pt: "Preditor Proativo de Incidentes"
    },
    protocol: "MCP (Agent-to-Data)",
    provider: "Gemini 2.5 Pro",
    icon: "activity",
    description: {
      es: "Ingesta métricas y logs de Elastic Stack/Datadog utilizando enormes ventanas de contexto. Descubre patrones ocultos que preceden fallas del sistema o degradaciones de experiencia de usuario.",
      en: "Ingests metrics and logs from Elastic Stack/Datadog using massive context windows. Discovers hidden patterns that precede system failures or user experience degradations.",
      pt: "Ingere métricas e logs do Elastic Stack/Datadog utilizando enormes janelas de contexto. Descobre padrões ocultos que precedem falhas do sistema ou degradações de experiência do usuário."
    },
    impact: {
      es: "Cambia el enfoque de reactivo a predictivo, logrando resolver problemas antes de que el cliente final perciba el fallo.",
      en: "Shifts focus from reactive to predictive, resolving issues before the end customer perceives the failure.",
      pt: "Muda o foco de reativo para preditivo, resolvendo problemas antes que o cliente final perceba a falha."
    },
    metrics: [
      { label: "MTTD Reduction", value: "70%" },
      { label: "Events Correlated", value: "1.2M/day" },
      { label: "Uptime Insight", value: "Predictive" }
    ],
    tags: ["MCP Server", "Tool Use", "Agent-to-UI"],
    status: { es: "Activo", en: "Active", pt: "Ativo" }
  },
  {
    id: "ai-arch",
    name: "Architecture Knowledge Assistant",
    role: {
      es: "ADR & Technical Debt Manager",
      en: "ADR & Technical Debt Manager",
      pt: "Gerente de ADR e Dívida Técnica"
    },
    protocol: "Agent-to-UI / Tool Use",
    provider: "OpenAI o3",
    icon: "book-open",
    description: {
      es: "Actúa como hub de conocimiento técnico en PRs complejos. Extrae contexto, redacta borradores de Registros de Decisiones de Arquitectura (ADRs) y mapea deuda técnica en el código base.",
      en: "Acts as a technical knowledge hub in complex PRs. Extracts context, drafts Architecture Decision Records (ADRs), and maps technical debt in the codebase.",
      pt: "Atua como hub de conhecimento técnico em PRs complexos. Extrai contexto, redige rascunhos de Registros de Decisões de Arquitetura (ADRs) e mapeia dívida técnica no código."
    },
    impact: {
      es: "Asegura la memoria técnica del equipo de ingeniería sin sobrecarga manual, democratizando el contexto del proyecto.",
      en: "Ensures the engineering team's technical memory without manual overhead, democratizing project context.",
      pt: "Garante a memória técnica da equipe de engenharia sem sobrecarga manual, democratizando o contexto do projeto."
    },
    metrics: [
      { label: "ADRs Drafted", value: "24" },
      { label: "Tech Debt Mapped", value: "Complete" },
      { label: "Onboarding Time", value: "-40%" }
    ],
    tags: ["Tool Use", "Agent-to-UI", "MCP Client"],
    status: { es: "En Espera", en: "Standby", pt: "Em Espera" }
  }
];

export const aiWorkflows = [
  {
    id: "cost-workflow",
    name: {
      es: "Optimización FinOps Multi-Cloud",
      en: "Multi-Cloud FinOps Optimization",
      pt: "Otimização FinOps Multi-Cloud"
    },
    steps: [
      { name: { es: "Pico de Uso Detectado", en: "Usage Spike Detected", pt: "Pico de Uso Detectado" }, type: "trigger", icon: "trending-up" },
      { name: { es: "Agente FinOps: Analizar Causa Raíz", en: "FinOps Agent: Analyze Root Cause", pt: "Agente FinOps: Analisar Causa Raiz" }, type: "agent", agentId: "ai-finops", icon: "bot" },
      { name: { es: "Agente Gov: Verificar Impacto", en: "Gov Agent: Check Impact", pt: "Agente Gov: Verificar Impacto" }, type: "agent", agentId: "ai-gov", icon: "bot" },
      { name: { es: "Arquitecto de Plataforma: Aprobar Acción", en: "Platform Architect: Approve Action", pt: "Arquiteto de Plataforma: Aprovar Ação" }, type: "human", icon: "user-check" },
      { name: { es: "Aplicar Rightsizing", en: "Apply Rightsizing", pt: "Aplicar Rightsizing" }, type: "action", icon: "zap" }
    ],
    description: {
      es: "Un pico inusual de tráfico/gasto es interceptado. El agente FinOps perfila el costo contra el valor del negocio, el Sentinel verifica si detener la operación incumple SLAs, y el arquitecto tiene los datos listos para decidir y aplicar recortes (downscale) automáticos.",
      en: "An unusual traffic/cost spike is intercepted. The FinOps agent profiles cost against business value, the Sentinel checks if stopping the operation violates SLAs, and the architect has data ready to decide and apply automatic downsizing.",
      pt: "Um pico incomum de tráfego/custo é interceptado. O agente FinOps perfila o custo contra o valor do negócio, o Sentinel verifica se interromper a operação viola SLAs, e o arquiteto tem os dados prontos para decidir e aplicar recortes automáticos."
    },
    protocols: ["MCP Server ↔ Client", "A2A (Agent-to-Agent)", "Tool Use"]
  },
  {
    id: "incident-workflow",
    name: {
      es: "Incidentes Predictivos y AIOps",
      en: "Predictive Incident & AIOps",
      pt: "Incidentes Preditivos e AIOps"
    },
    steps: [
      { name: { es: "Umbral de Entropía de Logs", en: "Log Entropy Threshold", pt: "Limiar de Entropia de Logs" }, type: "trigger", icon: "alert-circle" },
      { name: { es: "Agente AIOps: Correlación Cruzada", en: "AIOps Agent: Cross-Correlate", pt: "Agente AIOps: Correlação Cruzada" }, type: "agent", agentId: "ai-aiops", icon: "bot" },
      { name: { es: "Agente Arch: Revisar ADRs Recientes", en: "Arch Agent: Check Recent ADRs", pt: "Agente Arch: Verificar ADRs Recentes" }, type: "agent", agentId: "ai-arch", icon: "bot" },
      { name: { es: "Líder DevOps: Corrección Estratégica", en: "DevOps Lead: Strategic Fix", pt: "Líder DevOps: Correção Estratégica" }, type: "human", icon: "user-check" }
    ],
    description: {
      es: "Fluctuaciones anómalas en la aplicación antes de un Crash. El AIOps ingesta 100k líneas de log y detecta la anomalía. El Arch Agent revisa cambios recientes de código/arquitectura. El líder técnico recibe un resumen contextualizado (RCA) listo para desplegar el Hotfix antes de la caída.",
      en: "Anomalous fluctuations in the application before a crash. AIOps ingests 100k log lines and detects the anomaly. The Arch Agent reviews recent code/architecture changes. The tech lead receives a contextualized summary (RCA) ready to deploy the hotfix before the crash.",
      pt: "Flutuações anômalas na aplicação antes de um crash. O AIOps ingere 100k linhas de log e detecta a anomalia. O Arch Agent revisa mudanças recentes de código/arquitetura. O líder técnico recebe um resumo contextualizado (RCA) pronto para implantar o hotfix antes da queda."
    },
    protocols: ["MCP Server", "Agent-to-UI", "Tool Use"]
  }
];
