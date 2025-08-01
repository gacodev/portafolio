// Datos de métricas para los proyectos del portafolio
// Enfocado en monitorización, SLOs, incidentes y eficiencia DevOps

export const projectsMetrics = [
  {
    name: 'Traffig',
    category: 'Dispositivos IoT/Edge',
    url: 'www.inteia.com.co',
    year: 2024,
    description: 'Plataforma IoT para gestión de tráfico inteligente con edge computing',
    metrics: {
      slo: { availability: 99.96, latency: 98.8, error_budget_remaining: 88 },
      incidents: { p1: 0, p2: 1, p3: 2, mttr: 22 },
      devops: { deployments_per_week: 10, rollbacks: 1, lead_time: 24 },
      monitoring: { monitor_checks: 45, apdex: 0.95, alerts: 28, auto_resolved: 25 },
      security: { vulnerabilities: { critical: 0, high: 1, medium: 3 }, compliance: 97 },
      cost: { monthly: 5200, trend: -4, optimization_score: 91 }
    }
  },
  {
    name: 'AppiMotion+',
    category: 'Movilidad',
    url: 'https://www.appimotion.com/',
    year: 2024,
    description: 'Plataforma de movilidad urbana con seguimiento en tiempo real y optimización de rutas',
    metrics: {
      slo: { availability: 99.92, latency: 97.5, error_budget_remaining: 82 },
      incidents: { p1: 0, p2: 2, p3: 3, mttr: 28 },
      devops: { deployments_per_week: 8, rollbacks: 2, lead_time: 32 },
      monitoring: { monitor_checks: 32, apdex: 0.92, alerts: 42, auto_resolved: 38 },
      security: { vulnerabilities: { critical: 0, high: 2, medium: 6 }, compliance: 94 },
      cost: { monthly: 3800, trend: -2, optimization_score: 87 }
    }
  },
  {
    name: 'Trackmile',
    category: 'Movilidad',
    url: 'https://www.trackmile.co/',
    year: 2024,
    description: 'Sistema de rastreo GPS empresarial con análisis predictivo y geofencing',
    metrics: {
      slo: { availability: 99.88, latency: 96.2, error_budget_remaining: 76 },
      incidents: { p1: 0, p2: 1, p3: 4, mttr: 35 },
      devops: { deployments_per_week: 6, rollbacks: 2, lead_time: 38 },
      monitoring: { monitor_checks: 28, apdex: 0.89, alerts: 38, auto_resolved: 32 },
      security: { vulnerabilities: { critical: 0, high: 2, medium: 8 }, compliance: 91 },
      cost: { monthly: 2900, trend: -1, optimization_score: 84 }
    }
  },
  {
    name: 'Carbonlytics',
    category: 'GreenTech',
    url: 'https://www.carbonlytics.com',
    year: 2024,
    description: 'Plataforma de análisis de huella de carbono con IA para empresas sostenibles',
    metrics: {
      slo: { availability: 99.85, latency: 95.1, error_budget_remaining: 72 },
      incidents: { p1: 0, p2: 1, p3: 2, mttr: 42 },
      devops: { deployments_per_week: 4, rollbacks: 1, lead_time: 48 },
      monitoring: { monitor_checks: 18, apdex: 0.87, alerts: 24, auto_resolved: 21 },
      security: { vulnerabilities: { critical: 0, high: 1, medium: 5 }, compliance: 89 },
      cost: { monthly: 1800, trend: -2, optimization_score: 82 }
    }
  },

  {
    name: 'Inspira',
    category: 'Recursos Humanos',
    url: 'N/A',
    year: 2024,
    description: 'Plataforma de gestión de talento humano con análisis de desempeño y bienestar',
    metrics: {
      slo: { availability: 99.78, latency: 93.2, error_budget_remaining: 68 },
      incidents: { p1: 0, p2: 1, p3: 3, mttr: 52 },
      devops: { deployments_per_week: 3, rollbacks: 1, lead_time: 56 },
      monitoring: { monitor_checks: 14, apdex: 0.85, alerts: 18, auto_resolved: 15 },
      security: { vulnerabilities: { critical: 0, high: 2, medium: 7 }, compliance: 87 },
      cost: { monthly: 1200, trend: -1, optimization_score: 79 }
    }
  },
  {
    name: 'Arpex',
    category: 'Geo referencia',
    url: 'N/A',
    year: 2024,
    description: 'Sistema de georeferenciación y mapeo con análisis espacial avanzado',
    metrics: {
      slo: { availability: 99.72, latency: 91.8, error_budget_remaining: 62 },
      incidents: { p1: 0, p2: 2, p3: 2, mttr: 58 },
      devops: { deployments_per_week: 2, rollbacks: 1, lead_time: 72 },
      monitoring: { monitor_checks: 12, apdex: 0.82, alerts: 16, auto_resolved: 12 },
      security: { vulnerabilities: { critical: 0, high: 3, medium: 9 }, compliance: 85 },
      cost: { monthly: 950, trend: 0, optimization_score: 77 }
    }
  },
  {
    name: 'DCT',
    category: 'Energético',
    url: 'N/A',
    year: 2024,
    description: 'Sistema de gestión energética para optimización de consumo industrial',
    metrics: {
      slo: { availability: 99.68, latency: 89.5, error_budget_remaining: 55 },
      incidents: { p1: 0, p2: 1, p3: 3, mttr: 65 },
      devops: { deployments_per_week: 2, rollbacks: 1, lead_time: 84 },
      monitoring: { monitor_checks: 8, apdex: 0.79, alerts: 12, auto_resolved: 8 },
      security: { vulnerabilities: { critical: 0, high: 2, medium: 8 }, compliance: 82 },
      cost: { monthly: 680, trend: 0, optimization_score: 74 }
    }
  },
  {
    name: 'Traffig',
    category: 'Dispositivos IoT/Edge',
    url: 'www.inteia.com.co',
    year: 2024,
    description: 'Plataforma IoT para gestión de tráfico inteligente con edge computing',
    metrics: {
      slo: { availability: 99.82, latency: 95.8, error_budget_remaining: 74 },
      incidents: { p1: 1, p2: 2, p3: 1, mttr: 42 },
      devops: { deployments_per_week: 15, rollbacks: 3, lead_time: 28 },
      monitoring: { monitor_checks: 37, apdex: 0.87, alerts: 52, auto_resolved: 44 },
      security: { vulnerabilities: { critical: 0, high: 3, medium: 9 }, compliance: 88 },
      cost: { monthly: 14600, trend: +2, optimization_score: 83 }
    }
  },
  {
    name: 'Deep',
    category: 'AI/ML',
    url: 'N/A',
    year: 2024,
    description: 'Plataforma de machine learning para análisis predictivo y procesamiento de datos',
    metrics: {
      slo: { availability: 99.90, latency: 96.8, error_budget_remaining: 85 },
      incidents: { p1: 0, p2: 0, p3: 0, mttr: 0 },
      devops: { deployments_per_week: 5, rollbacks: 1, lead_time: 42 },
      monitoring: { monitor_checks: 15, apdex: 0.92, alerts: 18, auto_resolved: 16 },
      security: { vulnerabilities: { critical: 0, high: 1, medium: 4 }, compliance: 95 },
      cost: { monthly: 7200, trend: -4, optimization_score: 89 }
    }
  },
  {
    name: 'Gobierno Nube',
    category: 'Infraestructura',
    url: 'N/A',
    year: 2024,
    description: 'Infraestructura cloud gubernamental con alta seguridad y compliance',
    metrics: {
      slo: { availability: 99.65, latency: 88.2, error_budget_remaining: 48 },
      incidents: { p1: 1, p2: 2, p3: 4, mttr: 78 },
      devops: { deployments_per_week: 1, rollbacks: 1, lead_time: 108 },
      monitoring: { monitor_checks: 6, apdex: 0.76, alerts: 15, auto_resolved: 9 },
      security: { vulnerabilities: { critical: 1, high: 3, medium: 12 }, compliance: 75 },
      cost: { monthly: 480, trend: +2, optimization_score: 65 }
    }
  }
];

// Traducciones para las métricas y etiquetas
// Traducciones para categorías de proyectos
export const categoryTranslations = {
  en: {
    'Dispositivos IoT/Edge': 'IoT/Edge Devices',
    'Movilidad': 'Mobility',
    'GreenTech': 'GreenTech',
    'Recursos Humanos': 'Human Resources',
    'Geo referencia': 'Geo-reference',
    'Energético': 'Energy',
    'AI/ML': 'AI/ML'
  },
  es: {
    'Dispositivos IoT/Edge': 'Dispositivos IoT/Edge',
    'Movilidad': 'Movilidad',
    'GreenTech': 'GreenTech',
    'Recursos Humanos': 'Recursos Humanos',
    'Geo referencia': 'Geo referencia',
    'Energético': 'Energético',
    'AI/ML': 'AI/ML'
  }
};

// Traducciones para las descripciones de proyectos
export const descriptionTranslations = {
  en: {
    'Plataforma IoT para gestión de tráfico inteligente con edge computing': 'IoT platform for intelligent traffic management with edge computing',
    'Plataforma de movilidad urbana con seguimiento en tiempo real y optimización de rutas': 'Urban mobility platform with real-time tracking and route optimization',
    'Sistema de rastreo GPS empresarial con análisis predictivo y geofencing': 'Enterprise GPS tracking system with predictive analytics and geofencing',
    'Plataforma de análisis de huella de carbono con IA para empresas sostenibles': 'Carbon footprint analysis platform with AI for sustainable businesses',
    'Plataforma de gestión de talento humano con análisis de desempeño y bienestar': 'Human talent management platform with performance and wellness analytics',
    'Sistema de georeferenciación y mapeo con análisis espacial avanzado': 'Georeferencing and mapping system with advanced spatial analysis',
    'Sistema de gestión energética para optimización de consumo industrial': 'Energy management system for industrial consumption optimization',
    'Plataforma de machine learning para análisis predictivo y procesamiento de datos': 'Machine learning platform for predictive analytics and data processing'
  },
  es: {
    'Plataforma IoT para gestión de tráfico inteligente con edge computing': 'Plataforma IoT para gestión de tráfico inteligente con edge computing',
    'Plataforma de movilidad urbana con seguimiento en tiempo real y optimización de rutas': 'Plataforma de movilidad urbana con seguimiento en tiempo real y optimización de rutas',
    'Sistema de rastreo GPS empresarial con análisis predictivo y geofencing': 'Sistema de rastreo GPS empresarial con análisis predictivo y geofencing',
    'Plataforma de análisis de huella de carbono con IA para empresas sostenibles': 'Plataforma de análisis de huella de carbono con IA para empresas sostenibles',
    'Plataforma de gestión de talento humano con análisis de desempeño y bienestar': 'Plataforma de gestión de talento humano con análisis de desempeño y bienestar',
    'Sistema de georeferenciación y mapeo con análisis espacial avanzado': 'Sistema de georeferenciación y mapeo con análisis espacial avanzado',
    'Sistema de gestión energética para optimización de consumo industrial': 'Sistema de gestión energética para optimización de consumo industrial',
    'Plataforma de machine learning para análisis predictivo y procesamiento de datos': 'Plataforma de machine learning para análisis predictivo y procesamiento de datos'
  }
};

export const metricsTranslations = {
  en: {
    projectPerformance: 'Project Performance & Operational Health',
    incidents: 'Incidents',
    visitDashboard: 'Visit Dashboard',
    availability: 'AVAILABILITY',
    sloMetrics: 'SLO Metrics',
    incidentResponse: 'Incident Response',
    devOpsEfficiency: 'DevOps Efficiency',
    monitoring: 'Monitoring & Observability',
    security: 'Security & Compliance',
    description: 'Project description',
    key_achievements: 'Key achievements',
    incidents: 'INCIDENTS',
    deployments: 'DEPLOYMENTS',
    monitors: 'MONITORS',
    slo_target: 'SLO Target',
    total_p1_p3: 'Total P1-P3',
    per_week: 'deploys/week',
    health_checks: 'Health Checks',
    p1Incidents: 'P1 Incidents',
    p2Incidents: 'P2 Incidents',
    p3Incidents: 'P3 Incidents',
    mttr: 'Mean Time to Recovery',
    minutes: 'minutes',
    apdexScore: 'Apdex Score',
    monitorChecks: 'Monitor Checks',
    alertsTriggered: 'Alerts Triggered',
    autoResolved: 'Auto-resolved',
    deployPerWeek: 'Deployments/Week',
    leadTime: 'Lead Time for Changes',
    hours: 'hours',
    rollbacks: 'Rollbacks',
    errorBudget: 'Error Budget Remaining',
    vulnerabilities: 'Vulnerabilities',
    compliance: 'Compliance Score',
    costTrend: 'Cost Trend',
    optimizationScore: 'Optimization Score',
    monthlyCost: 'Monthly Cost',
    latency: 'Latency SLO',
    critical: 'Critical',
    high: 'High',
    medium: 'Medium',
    year: 'Since',
    healthScore: 'Health Score',
    details: 'View Details',
    last30Days: 'Last 30 Days',
    back: 'Back to Projects',
    view_details: 'View Details',
    slo_title: 'Service Level Objectives (SLOs)',
    slo_availability: 'System Availability',
    slo_latency: 'Latency Performance',
    slo_error_budget: 'Error Budget Remaining',
    incidents_title: 'Incident Management',
    incidents_mttr: 'Average MTTR',
    devops_title: 'DevOps Efficiency',
    devops_deployments: 'DEPLOYMENTS',
    devops_lead_time: 'Lead Time',
    monitoring_title: 'Monitoring & Observability',
    monitoring_checks: 'MONITORS',
    monitoring_apdex: 'APDEX SCORE',
    monitoring_auto_resolution_rate: 'Auto-resolution Rate',
    security_title: 'Security & Compliance',
    security_compliance: 'Compliance',
    security_critical: 'Critical',
    security_high: 'High',
    security_medium: 'Medium',
    cost_title: 'Cost Management',
    cost_monthly: 'Monthly Cost',
    cost_optimization: 'Cost Optimization',
    vs_last_quarter: 'vs last quarter',
    weekly: 'weekly',
    mins: 'mins'
  },
  es: {
    projectPerformance: 'Rendimiento de Proyectos y Salud Operativa',
    incidents: 'Incidentes',
    visitDashboard: 'Ver Dashboard',
    availability: 'DISPONIBILIDAD',
    sloMetrics: 'Métricas de SLO',
    incidentResponse: 'Respuesta a Incidentes',
    devOpsEfficiency: 'Eficiencia DevOps',
    monitoring: 'Monitoreo y Observabilidad',
    security: 'Seguridad y Cumplimiento',
    description: 'Descripción del proyecto',
    key_achievements: 'Logros principales',
    incidents: 'INCIDENTES',
    deployments: 'DESPLIEGUES',
    monitors: 'MONITORES',
    slo_target: 'SLO Target',
    total_p1_p3: 'Total P1-P3',
    per_week: 'deploys/sem',
    health_checks: 'Health Checks',
    p1Incidents: 'Incidentes P1',
    p2Incidents: 'Incidentes P2',
    p3Incidents: 'Incidentes P3',
    mttr: 'Tiempo Medio de Recuperación',
    minutes: 'minutos',
    apdexScore: 'Puntuación Apdex',
    monitorChecks: 'Monitores Activos',
    alertsTriggered: 'Alertas Activadas',
    autoResolved: 'Auto-resueltas',
    deployPerWeek: 'Despliegues/Semana',
    leadTime: 'Tiempo de Entrega',
    hours: 'horas',
    rollbacks: 'Reversiones',
    errorBudget: 'Presupuesto de Error Restante',
    vulnerabilities: 'Vulnerabilidades',
    compliance: 'Puntuación de Cumplimiento',
    costTrend: 'Tendencia de Costos',
    optimizationScore: 'Puntuación de Optimización',
    monthlyCost: 'Costo Mensual',
    latency: 'SLO de Latencia',
    critical: 'Críticas',
    high: 'Altas',
    medium: 'Medias',
    year: 'Desde',
    healthScore: 'Puntuación de Salud',
    details: 'Ver Detalles',
    last30Days: 'Últimos 30 Días',
    back: 'Volver a Proyectos',
    view_details: 'Ver Detalles',
    slo_title: 'Service Level Objectives (SLOs)',
    slo_availability: 'Disponibilidad del Sistema',
    slo_latency: 'Performance de Latencia',
    slo_error_budget: 'Error Budget Restante',
    incidents_title: 'Gestión de Incidentes',
    incidents_mttr: 'MTTR Promedio',
    devops_title: 'Eficiencia DevOps',
    devops_deployments: 'DESPLIEGUES',
    devops_lead_time: 'Lead Time',
    monitoring_title: 'Monitoreo y Observabilidad',
    monitoring_checks: 'MONITORES',
    monitoring_apdex: 'APDEX SCORE',
    monitoring_auto_resolution_rate: 'Tasa de Auto-resolución',
    security_title: 'Seguridad y Compliance',
    security_compliance: 'Compliance',
    security_critical: 'Críticas',
    security_high: 'Altas',
    security_medium: 'Medias',
    cost_title: 'Gestión de Costos',
    cost_monthly: 'Costo Mensual',
    cost_optimization: 'Optimización de Costos',
    vs_last_quarter: 'vs trimestre anterior',
    weekly: 'semanal',
    mins: 'mins'
  }
};
