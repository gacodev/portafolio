import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bar, Doughnut } from 'react-chartjs-2';
import { 
  Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, 
  LinearScale, PointElement, LineElement, BarElement, Title
} from 'chart.js';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { projectsMetrics, metricsTranslations } from '../../data/projectMetrics';
import ProjectCard from './ProjectBreakdown/ProjectCard';
import ProjectModal from './ProjectBreakdown/ProjectModal';
import Image from 'next/image';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement,
  Title
);

const ProjectBreakdown = ({ lang }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Obtener las traducciones según el idioma seleccionado
  const translations = metricsTranslations[lang || 'en'];

  // Manejar apertura del modal
  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Manejar cierre del modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  
  // Animaciones
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Función para renderizar tendencias
  const renderTrend = (trend) => {
    if (trend > 0) {
      return <TrendingUp className="h-4 w-4 text-red-400 ml-2" />;
    } else if (trend < 0) {
      return <TrendingDown className="h-4 w-4 text-green-400 ml-2" />;
    }
    return null;
  };

  // Generar datos para el gráfico de incidentes
  const generateIncidentsChartData = (project) => {
    const { p1, p2, p3 } = project.metrics.incidents;
    return {
      labels: ['P1', 'P2', 'P3'],
      datasets: [
        {
          data: [p1, p2, p3],
          backgroundColor: ['#f87171', '#fbbf24', '#60a5fa'],
          borderWidth: 1,
        },
      ],
    };
  };

  // Generar datos para el gráfico de despliegues
  const generateDeploymentsChartData = (project) => {
    return {
      labels: [
        lang === 'es' ? 'Despliegues' : 'Deployments',
        lang === 'es' ? 'Rollbacks' : 'Rollbacks'
      ],
      datasets: [
        {
          label: translations.devops_title,
          data: [project.metrics.devops.deployments_per_week, project.metrics.devops.rollbacks],
          backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(255, 99, 132, 0.8)'],
          borderWidth: 1,
        },
      ],
    };
  };

  // Generar datos para el gráfico de seguridad
  const generateSecurityChartData = (project) => {
    const { critical, high, medium } = project.metrics.security.vulnerabilities;
    return {
      labels: [translations.security_critical, translations.security_high, translations.security_medium],
      datasets: [
        {
          data: [critical, high, medium],
          backgroundColor: ['#ef4444', '#f97316', '#facc15'],
          borderWidth: 1,
        },
      ],
    };
  };

  // Generar datos para el gráfico de monitoreo
  const generateMonitoringChartData = (project) => {
    return {
      labels: [
        lang === 'es' ? 'Monitores' : 'Monitors',
        lang === 'es' ? 'Alertas' : 'Alerts',
        lang === 'es' ? 'Auto-resueltas' : 'Auto-resolved'
      ],
      datasets: [
        {
          label: translations.monitoring_title,
          data: [
            project.metrics.monitoring.monitor_checks, 
            project.metrics.monitoring.alerts, 
            project.metrics.monitoring.auto_resolved
          ],
          backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(255, 99, 132, 0.8)', 'rgba(75, 192, 192, 0.8)'],
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="w-full bg-[#0f1419] text-white p-6 md:p-10 border border-[#2a3441] rounded-lg">
      <div>
        {/* Header estilo Kibana */}
        <div className="bg-[#1a202c] border border-[#2d3748] rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-3 h-3 bg-[#00bfb3] rounded-full"></div>
                <h2 className="text-xl font-semibold text-[#e2e8f0]">
                  {lang === 'es' ? 'Observability' : 'Observability'}
                </h2>
              </div>
              <span className="block text-center md:text-left text-sm text-[#a0aec0] ml-0 md:ml-6">{lang === 'es' ? 'Incidents, Metrics, Alerts, Logs Management' : 'Incidents, Metrics, Alerts, Logs Management'}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-[#a0aec0]">
              <span className="bg-[#2d3748] px-2 py-1 rounded text-xs">
                {lang === 'es' ? 'Tiempo Real' : 'Real-time'}
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid estilo Kibana/Azure */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-w-7xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          {projectsMetrics.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              translations={translations}
              onViewDetails={handleViewDetails}
              index={index}
              lang={lang}
            />
          ))}
        </motion.div>

        {/* Sección de Herramientas de Monitoreo */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <h3 className="text-xl font-bold mb-6 text-center">
            {lang === 'es' ? 'Herramientas de Monitoreo e Incident Management' : 'Monitoring & Incident Management Tools'}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-slate-700 p-4 rounded-lg mb-2 hover:bg-slate-600 transition-colors">
                <Image 
                  src="/tecnologies/Pagerduty.webp" 
                  alt="PagerDuty" 
                  width={32} 
                  height={32} 
                  className="mx-auto"
                />
              </div>
              <h4 className="font-semibold text-sm">PagerDuty</h4>
              <p className="text-xs text-slate-400">
                {lang === 'es' ? 'Gestión de Incidentes' : 'Incident Management'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-slate-700 p-4 rounded-lg mb-2 hover:bg-slate-600 transition-colors">
                <Image 
                  src="/tecnologies/elastic.svg" 
                  alt="Kibana" 
                  width={32} 
                  height={32} 
                  className="mx-auto"
                />
              </div>
              <h4 className="font-semibold text-sm">ELK Stack</h4>
              <p className="text-xs text-slate-400">
                {lang === 'es' ? 'Gestión de Logs' : 'Log Management'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-slate-700 p-4 rounded-lg mb-2 hover:bg-slate-600 transition-colors">
                <Image 
                  src="/tecnologies/kibana.svg" 
                  alt="Synthetic Monitors" 
                  width={32} 
                  height={32} 
                  className="mx-auto"
                />
              </div>
              <h4 className="font-semibold text-sm">Kibana</h4>
              <p className="text-xs text-slate-400">
                {lang === 'es' ? 'Monitoreo Sintético & alerts' : 'Synthetic Monitoring & Alerts'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-slate-700 p-4 rounded-lg mb-2 hover:bg-slate-600 transition-colors">
                <Image 
                  src="/tecnologies/azure-monitor.svg" 
                  alt="Azure Monitor" 
                  width={32} 
                  height={32} 
                  className="mx-auto"
                />
              </div>
              <h4 className="font-semibold text-sm">Azure Monitor</h4>
              <p className="text-xs text-slate-400">
                {lang === 'es' ? 'Observabilidad Cloud' : 'Cloud Observability'}
              </p>
            </div>
          </div>
          
          {/* Texto descriptivo */}
          <div className="mt-8 text-center max-w-4xl mx-auto">
            <p className="text-slate-300 text-sm leading-relaxed">
              {lang === 'es' 
                ? 'Estas herramientas forman el ecosistema de observabilidad y gestión de incidentes que garantiza la confiabilidad y el rendimiento óptimo de nuestras aplicaciones en producción, permitiendo una respuesta rápida ante cualquier anomalía.'
                : 'These tools form the observability and incident management ecosystem that ensures reliability and optimal performance of our production applications, enabling rapid response to any anomalies.'
              }
            </p>
          </div>
        </div>

        {/* Modal de Detalles */}
        <ProjectModal
          selectedProject={selectedProject}
          isModalOpen={isModalOpen}
          onClose={handleCloseModal}
          translations={translations}
          lang={lang}
          generateIncidentsChartData={generateIncidentsChartData}
          generateDeploymentsChartData={generateDeploymentsChartData}
          generateSecurityChartData={generateSecurityChartData}
          generateMonitoringChartData={generateMonitoringChartData}
          renderTrend={renderTrend}
        />
      </div>
    </div>
  );
};

export default ProjectBreakdown;
