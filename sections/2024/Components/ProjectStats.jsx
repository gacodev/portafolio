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
    className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg text-center"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="text-5xl mb-4 block">{icon}</span>
    <h3 className="text-2xl font-semibold mb-2">{title[lang]}</h3>
    <p className="text-4xl font-bold">{value}</p>
  </motion.div>
);

const ProjectStats = ({ lang = 'en' }) => {
  const t = translations[lang];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 mt-10">
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