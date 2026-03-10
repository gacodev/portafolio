export const aiPlatformAgents = [
  {
    id: "ai-finops",
    name: "FinOps & Cost Optimization Agent",
    role: "Cloud Financial Orchestrator",
    protocol: "Agent-to-API",
    provider: "Anthropic Claude 3.5 Sonnet",
    icon: "pie-chart",
    description: "Analiza continuamente patrones de facturación y uso en arquitecturas Multi-Cloud. Identifica recursos sobre-aprovisionados, cruza tráfico de red vs. costos y emite recomendaciones de Reserved Instances preventivas.",
    impact: "Maximiza el presupuesto de IT eliminando desperdicio y previendo variaciones mensuales de gasto (Cloud Waste).",
    metrics: [
      { label: "Cost Offset", value: "32% Saved" },
      { label: "Anomalies Caught", value: "18/mo" },
      { label: "Rightsizing", value: "Autoscale" }
    ],
    status: "Activo"
  },
  {
    id: "ai-gov",
    name: "Cloud Governance Sentinel",
    role: "Compliance & Policy Guardrail",
    protocol: "MCP (Model Context Protocol)",
    provider: "Anthropic Claude 3 Opus",
    icon: "shield",
    description: "Supervisa en tiempo real cuentas de Azure/AWS evaluando el cumplimiento de políticas de seguridad (CIS, HIPAA) y arquitecturas CAF mediante escaneo avanzado de Terraform state y configuraciones IAM.",
    impact: "Mantiene la postura de seguridad (Security Posture) intacta, bloqueando derivas de infraestructura (Drifts) no deseadas.",
    metrics: [
      { label: "Compliance Rate", value: "99.9%" },
      { label: "Drifts Prevented", value: "450+" },
      { label: "Security Scans", value: "Continuous" }
    ],
    status: "Activo"
  },
  {
    id: "ai-aiops",
    name: "Intelligent Observability (AIOps)",
    role: "Proactive Incident Predictor",
    protocol: "Agent-to-Data",
    provider: "Google Gemini 1.5 Pro Fast",
    icon: "activity",
    description: "Ingesta métricas y logs de Elastic Stack/Datadog utilizando enormes ventanas de contexto. Descubre patrones ocultos que preceden fallas del sistema o degradaciones de experiencia de usuario.",
    impact: "Cambia el enfoque de reactivo a predictivo, logrando resolver problemas antes de que el cliente final perciba el fallo.",
    metrics: [
      { label: "MTTD Reduction", value: "70%" },
      { label: "Events Correlated", value: "1.2M/day" },
      { label: "Uptime Insight", value: "Predictive" }
    ],
    status: "Activo"
  },
  {
    id: "ai-arch",
    name: "Architecture Knowledge Assistant",
    role: "ADR & Technical Debt Manager",
    protocol: "Agent-to-Repo",
    provider: "Anthropic Claude 3.5 Sonnet",
    icon: "book-open",
    description: "Actúa como hub de conocimiento técnico en PRs complejos. Extrae contexto, redacta borradores de Registros de Decisiones de Arquitectura (ADRs) y mapea deuda técnica en el código base.",
    impact: "Asegura la memoria técnica del equipo de ingeniería sin sobrecarga manual, democratizando el contexto del proyecto.",
    metrics: [
      { label: "ADRs Drafted", value: "24" },
      { label: "Tech Debt Mapped", value: "Complete" },
      { label: "Onboarding Time", value: "-40%" }
    ],
    status: "En Espera"
  }
];

export const aiWorkflows = [
  {
    id: "cost-workflow",
    name: "Multi-Cloud FinOps Optimization",
    steps: [
      { name: "Usage Spike Detected", type: "trigger", icon: "trending-up" },
      { name: "FinOps Agent: Analyze Root Cause", type: "agent", agentId: "ai-finops", icon: "bot" },
      { name: "Gov Agent: Check Impact", type: "agent", agentId: "ai-gov", icon: "bot" },
      { name: "Platform Architect: Approve Action", type: "human", icon: "user-check" },
      { name: "Apply Rightsizing", type: "action", icon: "zap" }
    ],
    description: "Un pico inusual de tráfico/gasto es interceptado. El agente FinOps perfila el costo contra el valor del negocio, el Sentinel verifica si detener la operación incumple SLAs, y el arquitecto tiene los datos listos para decidir y aplicar recortes (downscale) automáticos."
  },
  {
    id: "incident-workflow",
    name: "Predictive Incident & AIOps",
    steps: [
      { name: "Log Entropy Threshold", type: "trigger", icon: "alert-circle" },
      { name: "AIOps Agent: Cross-Correlate", type: "agent", agentId: "ai-aiops", icon: "bot" },
      { name: "Arch Agent: Check Recent ADRs", type: "agent", agentId: "ai-arch", icon: "bot" },
      { name: "DevOps Lead: Strategic Fix", type: "human", icon: "user-check" }
    ],
    description: "Fluctuaciones anómalas en la aplicación antes de un Crash. El AIOps ingesta 100k líneas de log y detecta la anomalía. El Arch Agent revisa cambios recientes de código/arquitectura. El líder técnico recibe un resumen contextualizado (RCA) listo para desplegar el Hotfix antes de la caída."
  }
];
