import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bar, Doughnut } from 'react-chartjs-2';
import { X, TrendingUp, TrendingDown } from 'lucide-react';
import { descriptionTranslations } from '../../../data/projectMetrics';

const ProjectModal = ({ 
  selectedProject, 
  isModalOpen, 
  onClose, 
  translations, 
  lang,
  generateIncidentsChartData,
  generateDeploymentsChartData,
  generateSecurityChartData,
  generateMonitoringChartData,
  renderTrend
}) => {
  if (!selectedProject) return null;

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-slate-800 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto antialiased"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-white antialiased">{selectedProject.name}</h3>
                <p className="text-slate-300 antialiased">
                  {descriptionTranslations[lang || 'en'][selectedProject.description] || selectedProject.description}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Contenido del Modal */}
            <div className="p-6 space-y-8">
              {/* Resumen Operativo */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-700 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-400 antialiased">
                    {selectedProject.metrics.slo.availability}%
                  </div>
                  <div className="text-sm text-slate-200 font-medium antialiased">{translations.slo_availability}</div>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-400 antialiased">
                    {selectedProject.metrics.incidents.mttr}
                  </div>
                  <div className="text-sm text-slate-200 font-medium antialiased">{translations.incidents_mttr} ({translations.mins})</div>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-400 antialiased">
                    {selectedProject.metrics.monitoring.apdex.toFixed(2)}
                  </div>
                  <div className="text-sm text-slate-200 font-medium antialiased">{translations.monitoring_apdex}</div>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-yellow-400 antialiased">
                    ${selectedProject.metrics.cost.monthly.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-200 font-medium antialiased">{translations.cost_monthly}</div>
                </div>
              </div>

              {/* Gráficos y Métricas Detalladas */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* SLOs e Incidentes */}
                <div>
                  <h4 className="text-xl font-bold mb-4 text-white antialiased">
                    {translations.incidents_title}
                  </h4>
                  
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="h-64">
                      <Doughnut 
                        data={generateIncidentsChartData(selectedProject)}
                        options={{
                          maintainAspectRatio: false,
                          plugins: {
                            legend: { position: 'bottom' }
                          }
                        }} 
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-100 font-medium antialiased">{translations.incidents_mttr}</span>
                        <span className="text-2xl font-bold text-white antialiased">{selectedProject.metrics.incidents.mttr}</span>
                      </div>
                      <div className="text-xs text-slate-300 antialiased">
                        {lang === 'es' ? 'Tiempo promedio de resolución en minutos' : 'Average resolution time in minutes'}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-red-900 p-3 rounded text-center">
                        <div className="text-lg font-bold text-white antialiased">{selectedProject.metrics.incidents.p1}</div>
                        <div className="text-xs text-red-200 font-medium antialiased">
                          {lang === 'es' ? 'P1 Críticos' : 'P1 Critical'}
                        </div>
                      </div>
                      <div className="bg-orange-900 p-3 rounded text-center">
                        <div className="text-lg font-bold text-white antialiased">{selectedProject.metrics.incidents.p2}</div>
                        <div className="text-xs text-orange-200 font-medium antialiased">
                          {lang === 'es' ? 'P2 Altos' : 'P2 High'}
                        </div>
                      </div>
                      <div className="bg-yellow-900 p-3 rounded text-center">
                        <div className="text-lg font-bold text-white antialiased">{selectedProject.metrics.incidents.p3}</div>
                        <div className="text-xs text-yellow-200 font-medium antialiased">
                          {lang === 'es' ? 'P3 Medios' : 'P3 Medium'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Métricas DevOps */}
                <div>
                  <h4 className="text-xl font-bold mb-4 text-white antialiased">
                    {translations.devops_title}
                  </h4>
                  
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="h-64">
                      <Bar 
                        data={generateDeploymentsChartData(selectedProject)}
                        options={{
                          maintainAspectRatio: false,
                          plugins: {
                            legend: { display: false }
                          },
                          scales: {
                            y: { beginAtZero: true }
                          }
                        }} 
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-100 font-medium antialiased">{translations.devops_lead_time}</span>
                        <span className="text-2xl font-bold text-white antialiased">{selectedProject.metrics.devops.lead_time}h</span>
                      </div>
                      <div className="text-xs text-slate-300 antialiased">
                        {lang === 'es' ? 'Tiempo desde commit hasta producción' : 'Time from commit to production'}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-green-900 p-3 rounded text-center">
                        <div className="text-lg font-bold text-white antialiased">{selectedProject.metrics.devops.deployments_per_week}</div>
                        <div className="text-xs text-green-200 font-medium antialiased">
                          {lang === 'es' ? 'Deploys/semana' : 'Deploys/week'}
                        </div>
                      </div>
                      <div className="bg-red-900 p-3 rounded text-center">
                        <div className="text-lg font-bold text-white antialiased">{selectedProject.metrics.devops.rollbacks}</div>
                        <div className="text-xs text-red-200 font-medium antialiased">
                          {lang === 'es' ? 'Rollbacks' : 'Rollbacks'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monitoreo */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 text-white antialiased">
                  {translations.monitoring_title}
                </h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="h-64">
                      <Bar 
                        data={generateMonitoringChartData(selectedProject)}
                        options={{
                          maintainAspectRatio: false,
                          plugins: {
                            legend: { display: false }
                          },
                          scales: {
                            y: { beginAtZero: true }
                          }
                        }} 
                      />
                    </div>
                  </div>
                  
                  <div className="bg-slate-700 p-4 rounded-lg flex flex-col justify-center">
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-100 font-medium antialiased">{translations.monitoring_apdex}</span>
                        <span className="text-2xl font-bold text-white antialiased">{selectedProject.metrics.monitoring.apdex.toFixed(2)}</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${selectedProject.metrics.monitoring.apdex * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-100 font-medium antialiased">{translations.monitoring_auto_resolution_rate}</span>
                        <span className="text-2xl font-bold text-white antialiased">
                          {((selectedProject.metrics.monitoring.auto_resolved / selectedProject.metrics.monitoring.alerts) * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${(selectedProject.metrics.monitoring.auto_resolved / selectedProject.metrics.monitoring.alerts) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seguridad y Costos */}
              <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-white antialiased">
                    {translations.security_title}
                  </h4>
                  
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="h-64">
                      <Doughnut 
                        data={generateSecurityChartData(selectedProject)}
                        options={{
                          maintainAspectRatio: false,
                          plugins: {
                            legend: { position: 'bottom' }
                          }
                        }} 
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-slate-700 p-4 rounded-lg border border-slate-600">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-100 font-medium antialiased">{translations.security_compliance}</span>
                      <span className="text-2xl font-bold text-white antialiased">{selectedProject.metrics.security.compliance}%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4 text-white antialiased">
                    {translations.cost_title}
                  </h4>
                  
                  <div className="bg-slate-700 p-4 rounded-lg h-64 flex flex-col justify-center">
                    <div className="mb-6">
                      <p className="text-sm text-slate-100 font-medium antialiased">{translations.cost_monthly}</p>
                      <p className="text-4xl font-bold flex items-center text-white antialiased">
                        ${selectedProject.metrics.cost.monthly.toLocaleString()}
                        {renderTrend(selectedProject.metrics.cost.trend)}
                      </p>
                      <p className="text-sm text-slate-200 antialiased">
                        {selectedProject.metrics.cost.trend}% {translations.vs_last_quarter}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-slate-100 font-medium mb-2 antialiased">{translations.cost_optimization}</p>
                      <div className="flex items-center">
                        <div className="w-full bg-slate-600 rounded-full h-4 mr-4">
                          <div 
                            className="bg-blue-500 h-4 rounded-full" 
                            style={{ width: `${selectedProject.metrics.cost.optimization_score}%` }}
                          ></div>
                        </div>
                        <span className="text-2xl font-bold text-white antialiased">{selectedProject.metrics.cost.optimization_score}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
