import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity, AlertTriangle, Zap, Eye, ArrowRight } from 'lucide-react';
import { projectsMetrics, metricsTranslations } from '../../data/projectMetrics';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ObservabilitySummary = ({ lang }) => {
  const router = useRouter();
  const translations = metricsTranslations[lang || 'en'];

  // Calcular métricas agregadas
  const aggregatedMetrics = projectsMetrics.reduce((acc, project) => {
    acc.totalProjects += 1;
    acc.avgAvailability += project.metrics.slo.availability;
    acc.totalIncidents += project.metrics.incidents.p1 + project.metrics.incidents.p2 + project.metrics.incidents.p3;
    acc.totalP1 += project.metrics.incidents.p1;
    acc.totalMonitors += project.metrics.monitoring.monitor_checks;
    acc.totalDeployments += project.metrics.devops.deployments_per_week;
    acc.avgApdex += project.metrics.monitoring.apdex;
    acc.totalAlerts += project.metrics.monitoring.alerts;
    acc.totalAutoResolved += project.metrics.monitoring.auto_resolved;
    return acc;
  }, {
    totalProjects: 0,
    avgAvailability: 0,
    totalIncidents: 0,
    totalP1: 0,
    totalMonitors: 0,
    totalDeployments: 0,
    avgApdex: 0,
    totalAlerts: 0,
    totalAutoResolved: 0
  });

  // Promedios
  const avgAvailability = (aggregatedMetrics.avgAvailability / aggregatedMetrics.totalProjects).toFixed(2);
  const avgApdex = (aggregatedMetrics.avgApdex / aggregatedMetrics.totalProjects).toFixed(2);
  const autoResolutionRate = ((aggregatedMetrics.totalAutoResolved / aggregatedMetrics.totalAlerts) * 100).toFixed(0);

  const handleViewDetails = () => {
    router.push(`/${lang}/metrics`);
  };

  return (
    <div className="w-full bg-[#0f1419] text-white p-6 md:p-10 border border-[#2a3441] rounded-lg" id="performance-metrics">
      {/* Header estilo Kibana */}
      <div className="bg-[#1a202c] border border-[#2d3748] rounded-lg p-4 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-3 h-3 bg-[#00bfb3] rounded-full animate-pulse"></div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#e2e8f0]">
                {lang === 'es' ? 'Observability & SRE' : 'Observability & SRE'}
              </h2>
            </div>
            <span className="block text-center md:text-left text-sm text-[#a0aec0] ml-0 md:ml-6 mt-1">
              {lang === 'es' 
                ? 'Incidents, Metrics, Alerts, Logs Management' 
                : 'Incidents, Metrics, Alerts, Logs Management'}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-[#a0aec0]">
            <span className="bg-[#2d3748] px-3 py-1 rounded text-xs font-medium">
              {lang === 'es' ? 'Tiempo Real' : 'Real-time'}
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Métricas Principales - Dashboard Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Disponibilidad Promedio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] border border-[#00bfb3] rounded-lg p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#00bfb3] opacity-10 rounded-full -mr-10 -mt-10"></div>
          <div className="flex items-center justify-between mb-3">
            <Activity className="h-6 w-6 text-[#00bfb3]" />
            <span className="text-xs bg-green-900 text-green-200 px-2 py-1 rounded font-medium">
              {lang === 'es' ? 'EXCELENTE' : 'EXCELLENT'}
            </span>
          </div>
          <div className="text-4xl font-bold text-white mb-2">{avgAvailability}%</div>
          <div className="text-sm text-[#a0aec0] uppercase tracking-wide">
            {lang === 'es' ? 'Disponibilidad Promedio' : 'Average Availability'}
          </div>
          <div className="mt-3 text-xs text-green-400 flex items-center">
            <TrendingUp className="h-3 w-3 mr-1" />
            {lang === 'es' ? 'Por encima del SLO' : 'Above SLO target'}
          </div>
        </motion.div>

        {/* Total de Incidentes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] border border-[#f04e98] rounded-lg p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#f04e98] opacity-10 rounded-full -mr-10 -mt-10"></div>
          <div className="flex items-center justify-between mb-3">
            <AlertTriangle className="h-6 w-6 text-[#f04e98]" />
            <span className="text-xs bg-amber-900 text-amber-200 px-2 py-1 rounded font-medium">
              {aggregatedMetrics.totalP1} P1
            </span>
          </div>
          <div className="text-4xl font-bold text-white mb-2">{aggregatedMetrics.totalIncidents}</div>
          <div className="text-sm text-[#a0aec0] uppercase tracking-wide">
            {lang === 'es' ? 'Incidentes Totales' : 'Total Incidents'}
          </div>
          <div className="mt-3 text-xs text-amber-400">
            {lang === 'es' ? 'Últimos 30 días' : 'Last 30 days'}
          </div>
        </motion.div>

        {/* Despliegues Semanales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] border border-[#0078d4] rounded-lg p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#0078d4] opacity-10 rounded-full -mr-10 -mt-10"></div>
          <div className="flex items-center justify-between mb-3">
            <Zap className="h-6 w-6 text-[#0078d4]" />
            <span className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded font-medium">
              CI/CD
            </span>
          </div>
          <div className="text-4xl font-bold text-white mb-2">{aggregatedMetrics.totalDeployments}</div>
          <div className="text-sm text-[#a0aec0] uppercase tracking-wide">
            {lang === 'es' ? 'Deploys/Semana' : 'Deploys/Week'}
          </div>
          <div className="mt-3 text-xs text-blue-400 flex items-center">
            <TrendingUp className="h-3 w-3 mr-1" />
            {lang === 'es' ? 'Alta frecuencia' : 'High frequency'}
          </div>
        </motion.div>

        {/* Monitores Activos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] border border-[#00bfb3] rounded-lg p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#00bfb3] opacity-10 rounded-full -mr-10 -mt-10"></div>
          <div className="flex items-center justify-between mb-3">
            <Eye className="h-6 w-6 text-[#00bfb3]" />
            <span className="text-xs bg-green-900 text-green-200 px-2 py-1 rounded font-medium">
              LIVE
            </span>
          </div>
          <div className="text-4xl font-bold text-white mb-2">{aggregatedMetrics.totalMonitors}</div>
          <div className="text-sm text-[#a0aec0] uppercase tracking-wide">
            {lang === 'es' ? 'Monitores Activos' : 'Active Monitors'}
          </div>
          <div className="mt-3 text-xs text-green-400">
            {autoResolutionRate}% {lang === 'es' ? 'auto-resolución' : 'auto-resolution'}
          </div>
        </motion.div>
      </div>

      {/* KPIs Secundarios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-[#1a202c] border border-[#2d3748] rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-[#a0aec0] mb-1">
                {lang === 'es' ? 'Apdex Score' : 'Apdex Score'}
              </div>
              <div className="text-3xl font-bold text-white">{avgApdex}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-green-400 flex items-center justify-end">
                <TrendingUp className="h-3 w-3 mr-1" />
                {lang === 'es' ? 'Óptimo' : 'Optimal'}
              </div>
            </div>
          </div>
          <div className="mt-3 w-full bg-[#2d3748] rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full" 
              style={{ width: `${avgApdex * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-[#1a202c] border border-[#2d3748] rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-[#a0aec0] mb-1">
                {lang === 'es' ? 'Proyectos Monitoreados' : 'Monitored Projects'}
              </div>
              <div className="text-3xl font-bold text-white">{aggregatedMetrics.totalProjects}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-blue-400">
                {lang === 'es' ? 'En producción' : 'In production'}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1a202c] border border-[#2d3748] rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-[#a0aec0] mb-1">
                {lang === 'es' ? 'Tasa Auto-resolución' : 'Auto-resolution Rate'}
              </div>
              <div className="text-3xl font-bold text-white">{autoResolutionRate}%</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-green-400 flex items-center justify-end">
                <TrendingUp className="h-3 w-3 mr-1" />
                {lang === 'es' ? 'Eficiente' : 'Efficient'}
              </div>
            </div>
          </div>
          <div className="mt-3 w-full bg-[#2d3748] rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" 
              style={{ width: `${autoResolutionRate}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Herramientas de Monitoreo */}
      <div className="mt-8 pt-8 border-t border-slate-700">
        <h3 className="text-xl font-bold mb-6 text-center">
          {lang === 'es' ? 'Stack de Observabilidad' : 'Observability Stack'}
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
          <div className="text-center group">
            <div className="bg-slate-700 p-4 rounded-lg mb-2 hover:bg-slate-600 transition-all duration-300 transform group-hover:scale-105">
              <Image 
                src="/tecnologies/Pagerduty.webp" 
                alt="PagerDuty" 
                width={40} 
                height={40} 
                className="mx-auto"
              />
            </div>
            <h4 className="font-semibold text-sm">PagerDuty</h4>
            <p className="text-xs text-slate-400">
              {lang === 'es' ? 'Incident Management' : 'Incident Management'}
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-slate-700 p-4 rounded-lg mb-2 hover:bg-slate-600 transition-all duration-300 transform group-hover:scale-105">
              <Image 
                src="/tecnologies/elastic.svg" 
                alt="Elastic Stack" 
                width={40} 
                height={40} 
                className="mx-auto"
              />
            </div>
            <h4 className="font-semibold text-sm">ELK Stack</h4>
            <p className="text-xs text-slate-400">
              {lang === 'es' ? 'Log Management' : 'Log Management'}
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-slate-700 p-4 rounded-lg mb-2 hover:bg-slate-600 transition-all duration-300 transform group-hover:scale-105">
              <Image 
                src="/tecnologies/kibana.svg" 
                alt="Kibana" 
                width={40} 
                height={40} 
                className="mx-auto"
              />
            </div>
            <h4 className="font-semibold text-sm">Kibana</h4>
            <p className="text-xs text-slate-400">
              {lang === 'es' ? 'Synthetic Monitoring' : 'Synthetic Monitoring'}
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-slate-700 p-4 rounded-lg mb-2 hover:bg-slate-600 transition-all duration-300 transform group-hover:scale-105">
              <Image 
                src="/tecnologies/azure-monitor.svg" 
                alt="Azure Monitor" 
                width={40} 
                height={40} 
                className="mx-auto"
              />
            </div>
            <h4 className="font-semibold text-sm">Azure Monitor</h4>
            <p className="text-xs text-slate-400">
              {lang === 'es' ? 'Cloud Observability' : 'Cloud Observability'}
            </p>
          </div>
        </div>

        {/* CTA para ver detalles completos */}
        <div className="text-center">
          <button
            onClick={handleViewDetails}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00bfb3] to-[#0078d4] hover:from-[#00a89a] hover:to-[#0066b8] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>
              {lang === 'es' ? 'Ver Métricas Detalladas por Proyecto' : 'View Detailed Metrics by Project'}
            </span>
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="text-sm text-slate-400 mt-3">
            {lang === 'es' 
              ? 'Explora SLOs, incidentes, DevOps, seguridad y costos de cada proyecto'
              : 'Explore SLOs, incidents, DevOps, security and costs for each project'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ObservabilitySummary;
