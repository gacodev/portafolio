import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, AlertOctagon, GitBranch, Eye } from 'lucide-react';
import { categoryTranslations } from '../../../data/projectMetrics';

const ProjectCard = ({ project, translations, onViewDetails, index, lang }) => {
  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { delay: index * 0.1 }
    }
  };

  return (
    <motion.div
      variants={cardAnimation}
      className="bg-[#1a202c] border border-[#2d3748] rounded-lg hover:border-[#00bfb3] transition-all duration-300 hover:shadow-lg min-h-[320px] flex flex-col relative overflow-hidden"
    >
      {/* Barra superior estilo Kibana */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00bfb3] to-[#f04e98]"></div>
      {/* Header estilo Dashboard */}
      <div className="flex items-start justify-between mb-4 pt-4 px-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <h3 className="text-lg font-semibold text-[#e2e8f0] leading-tight">
              {project.name}
            </h3>
          </div>
          <p className="text-[#a0aec0] text-sm uppercase tracking-wide">
              {categoryTranslations[lang || 'en'][project.category] || project.category}
            </p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs px-2 py-1 bg-[#2d3748] rounded text-[#a0aec0] mb-1">
            {project.year}
          </span>
          <span className="text-xs text-[#00bfb3]">
            {lang === 'es' ? 'ACTIVO' : 'ACTIVE'}
          </span>
        </div>
      </div>

      {/* Métricas estilo Kibana Dashboard */}
      <div className="grid grid-cols-2 gap-3 mb-6 flex-1 px-4">
        {/* Disponibilidad - Estilo Azure Monitor */}
        <div className="bg-[#0f1419] border border-[#2d3748] rounded p-3 relative">
          <div className="flex items-center justify-between mb-2">
            <Gauge className="h-4 w-4 text-[#00bfb3]" />
            <div className="text-xs text-[#a0aec0] bg-[#2d3748] px-2 py-1 rounded">
              SLO
            </div>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            {project.metrics.slo.availability}%
          </div>
          <div className="text-xs text-[#a0aec0] uppercase tracking-wide">
            {lang === 'es' ? 'DISPONIBILIDAD' : 'AVAILABILITY'}
          </div>
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-green-400 rounded-full"></div>
        </div>

        {/* Incidentes - Estilo Elastic */}
        <div className="bg-[#0f1419] border border-[#2d3748] rounded p-3 relative">
          <div className="flex items-center justify-between mb-2">
            <AlertOctagon className="h-4 w-4 text-[#f04e98]" />
            <div className="text-xs text-[#a0aec0] bg-[#2d3748] px-2 py-1 rounded">
              P1-P3
            </div>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            {project.metrics.incidents.p1 + project.metrics.incidents.p2 + project.metrics.incidents.p3}
          </div>
          <div className="text-xs text-[#a0aec0] uppercase tracking-wide">
            {lang === 'es' ? 'INCIDENTES' : 'INCIDENTS'}
          </div>
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-amber-400 rounded-full"></div>
        </div>

        {/* Monitoreo - Estilo Kibana */}
        <div className="bg-[#0f1419] border border-[#2d3748] rounded p-3 relative">
          <div className="flex items-center justify-between mb-2">
            <Eye className="h-4 w-4 text-[#00bfb3]" />
            <div className="text-xs text-[#a0aec0] bg-[#2d3748] px-2 py-1 rounded">
              LIVE
            </div>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            {project.metrics.monitoring.monitor_checks}
          </div>
          <div className="text-xs text-[#a0aec0] uppercase tracking-wide">
            {lang === 'es' ? 'MONITOREO' : 'MONITORING'}
          </div>
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        {/* Despliegues - Estilo Azure DevOps */}
        <div className="bg-[#0f1419] border border-[#2d3748] rounded p-3 relative">
          <div className="flex items-center justify-between mb-2">
            <GitBranch className="h-4 w-4 text-[#0078d4]" />
            <div className="text-xs text-[#a0aec0] bg-[#2d3748] px-2 py-1 rounded">
              CI/CD
            </div>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            {project.metrics.devops.deployments_per_week}
          </div>
          <div className="text-xs text-[#a0aec0] uppercase tracking-wide">
            {lang === 'es' ? 'DEPLOYS/SEM' : 'DEPLOYS/WEEK'}
          </div>
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-blue-400 rounded-full"></div>
        </div>
      </div>

      {/* Botón estilo Dashboard */}
      <div className="px-4 pb-4 mt-auto">
        <button
          onClick={() => onViewDetails(project)}
          className="w-full bg-[#00bfb3] hover:bg-[#00a89a] text-[#0f1419] text-sm py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center space-x-2 font-semibold uppercase tracking-wide"
        >
          <Eye className="h-4 w-4" />
          <span>{lang === 'es' ? 'VER DETALLES' : 'VIEW DETAILS'}</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
