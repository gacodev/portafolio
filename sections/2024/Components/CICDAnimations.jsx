import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stages = [
  {
    name: { en: 'Plan', es: 'Planificar' },
    icon: '📋',
    color: '#3498db',
    link: 'https://learn.microsoft.com/en-us/azure/devops/boards/get-started/what-is-azure-boards?view=azure-devops',
    tooltip: {
      en: 'Project goals and requirements are defined.',
      es: 'Se definen los objetivos del proyecto.'
    }
  },
  {
    name: { en: 'Code', es: 'Codificar' },
    icon: '💻',
    color: '#2ecc71',
    link: 'https://learn.microsoft.com/en-us/azure/devops/repos/get-started/what-is-repos?view=azure-devops',
    tooltip: {
      en: 'Code is written and reviewed.',
      es: 'Se escribe y revisa el código.'
    }
  },
  {
    name: { en: 'Build', es: 'Compilar' },
    icon: '🏗️',
    color: '#e67e22',
    link: 'https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/what-is-azure-pipelines?view=azure-devops',
    tooltip: {
      en: 'Code is compiled into executables.',
      es: 'Se compila el código en ejecutables.'
    }
  },
  {
    name: { en: 'Static Analysis', es: 'Análisis Estático' },
    icon: '🔍',
    color: '#9b59b6',
    link: 'https://docs.sonarcloud.io/getting-started/azure-devops/',
    tooltip: {
      en: 'Code is analyzed for bugs and quality issues.',
      es: 'Se analiza el código en busca de errores y problemas de calidad.'
    }
  },
  {
    name: { en: 'Security Review', es: 'Revisión de Seguridad' },
    icon: '🔒',
    color: '#34495e',
    link: 'https://owasp.org/www-project-top-ten/',
    tooltip: {
      en: 'Security vulnerabilities are identified.',
      es: 'Se identifican vulnerabilidades de seguridad.'
    }
  },
  {
    name: { en: 'Testing', es: 'Probar' },
    icon: '🧪',
    color: '#f1c40f',
    link: 'https://learn.microsoft.com/en-us/azure/devops/test/overview?view=azure-devops',
    tooltip: {
      en: 'Application is tested to ensure functionality.',
      es: 'Se prueba la aplicación para garantizar su funcionalidad.'
    }
  },
  {
    name: { en: 'Deploy', es: 'Desplegar' },
    icon: '🚀',
    color: '#e74c3c',
    link: 'https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment',
    tooltip: {
      en: 'Application is moved to production environment.',
      es: 'Se mueve la aplicación al entorno de producción.'
    }
  },
  {
    name: { en: 'Release', es: 'Liberar' },
    icon: '🏷️',
    color: '#3498db',
    link: 'https://learn.microsoft.com/en-us/azure/devops/migrate/phase-features-with-feature-flags?view=azure-devops',
    tooltip: {
      en: 'New version is made available to users.',
      es: 'Se hace disponible la nueva versión a los usuarios.'
    }
  },
  {
    name: { en: 'Monitor', es: 'Monitorear' },
    icon: '📊',
    color: '#1abc9c',
    link: 'https://learn.microsoft.com/en-us/azure/azure-monitor/overview',
    tooltip: {
      en: 'Application performance and user behavior are tracked.',
      es: 'Se rastrea el rendimiento de la aplicación y el comportamiento del usuario.'
    }
  },
  {
    name: { en: 'Feedback', es: 'Retroalimentación' },
    icon: '🔄',
    color: '#95a5a6',
    link: 'https://martinfowler.com/articles/products-over-projects.html#Feedback',
    tooltip: {
      en: 'User feedback is collected and analyzed.',
      es: 'Se recopila y analiza la retroalimentación del usuario.'
    }
  },
];

const CICDAnimation = ({ lang = 'en' }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % stages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getTooltipPosition = (index) => {
    if (isMobile) return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
    const totalStages = stages.length;
    if (index < totalStages / 3) return 'bottom-full left-0 mb-2';
    if (index > (2 * totalStages) / 3) return 'bottom-full right-0 mb-2';
    return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
  };

  return (
    <div ref={containerRef} className="w-full p-4 md:p-8 rounded-lg shadow-lg overflow-hidden relative">
      <h2 className="text-2xl font-bold text-center mb-6">
        {lang === 'en' ? 'CI/CD Pipeline' : 'Pipeline de CI/CD'}
      </h2>
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-between`}>
        {stages.map((stage, index) => (
          <AnimatePresence key={stage.name[lang]}>
            {(!isMobile || index === currentStep) && (
              <motion.div
                className={`flex flex-col items-center justify-center p-4 m-2 ${isMobile ? 'w-full' : 'w-1/9'}`}
                style={{
                  backgroundColor: stage.color,
                  borderRadius: '12px',
                }}
                initial={isMobile ? { opacity: 0, y: 50 } : { opacity: 0.7 }}
                animate={{
                  opacity: index === currentStep ? 1 : 0.9,
                  y: 0,
                  scale: index === currentStep ? [1, 1.05, 1] : 1,
                }}
                exit={isMobile ? { opacity: 0, y: -10 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="relative group">
                  <a 
                    href={stage.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center justify-center w-full h-full text-white no-underline"
                  >
                    <div className="text-4xl mb-2 relative">
                      {stage.icon}
                      {index === currentStep && (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="w-full h-full border-t-4 border-white rounded-full" />
                        </motion.div>
                      )}
                    </div>
                    <span className="text-sm font-bold text-white text-center px-1">
                      {stage.name[lang]}
                    </span>
                  </a>
                  <div 
                    className={`absolute ${getTooltipPosition(index)} bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none`}
                    style={{
                      maxWidth: '200px',
                      minHeight: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      maxHeight: '200px',
                      overflowY: 'auto'
                    }}
                  >
                    {stage.tooltip[lang]}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default CICDAnimation;