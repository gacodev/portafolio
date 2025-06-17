import React from 'react';
import { motion } from 'framer-motion';

const translations = {
  en: {
    totalPipelines: "Total Pipelines",
    projectsManaged: "Projects Managed",
    securityPipelines: "Security Pipelines"
  },
  es: {
    totalPipelines: "Pipelines Totales",
    projectsManaged: "Proyectos Gestionados",
    securityPipelines: "Pipelines de Seguridad"
  }
};

const StatsCard = ({ title, value, icon, lang = 'en' }) => (
  <motion.div
    className="bg-white bg-opacity-10 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg text-center w-full"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4 block">{icon}</span>
    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">{title[lang]}</h3>
    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">{value}</p>
  </motion.div>
);

const ProjectStats = ({ lang = 'en' }) => {
  const t = translations[lang];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 mt-6 sm:mt-8 lg:mt-10 w-full">
      <StatsCard 
        title={{ en: t.totalPipelines, es: t.totalPipelines }} 
        value="394" 
        icon="📊" 
        lang={lang}
      />
      <StatsCard 
        title={{ en: t.projectsManaged, es: t.projectsManaged }} 
        value="9" 
        icon="🏗️" 
        lang={lang}
      />
      <StatsCard 
        title={{ en: t.securityPipelines, es: t.securityPipelines }} 
        value="16" 
        icon="🛡️" 
        lang={lang}
      />
    </div>
  );
};

export default ProjectStats;