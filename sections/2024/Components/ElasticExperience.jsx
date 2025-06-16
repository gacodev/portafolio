import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { SiElastic, SiKibana, SiLogstash } from 'react-icons/si';

const ElasticExperience = ({ lang }) => {
  // Calculate months of experience from Jan 1st to current date
  const startDate = new Date('2025-01-01');
  const currentDate = new Date();
  const monthsDiff = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
                     (currentDate.getMonth() - startDate.getMonth());
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div 
      id="elastic-experience"
      className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl p-6 shadow-xl border-2 border-blue-500 pt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex-shrink-0 mb-4 md:mb-0 bg-white p-2 rounded-md">
          <img
            src="/images/elastic.webp"
            alt="Elastic Stack Logo"
            width={150}
            height={80}
            className="object-contain"
          />
        </div>
        
        <div className="text-right">
          <h3 className="text-xl md:text-2xl font-bold text-blue-400">
            {lang === "es" ? `${monthsDiff} Meses desplegando y monitoreando` : `${monthsDiff} Months Deploying & monitoring`}
          </h3>
      
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-300">
        {lang === "es" ? "Experiencia" : "Experience"}
      </h3>
      
      <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-300">
        {lang === "es" ? "Componentes de la Plataforma Elastic Stack" : "Elastic Stack Platform Components"}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <motion.div 
          className="bg-gradient-to-br from-blue-950 to-blue-900 p-4 rounded-lg border border-blue-700 shadow cursor-pointer"
          whileHover={{ scale: 1.03 }}
          onClick={() => window.open("https://www.elastic.co/elasticsearch/", '_blank', 'noopener,noreferrer')}
        >
          <div className="flex items-center gap-2 mb-2">
            <SiElastic className="w-5 h-5 text-blue-400" />
            <h4 className="font-medium text-base text-blue-200">Elasticsearch</h4>
          </div>
          <p className="text-xs md:text-sm text-gray-300">
            {lang === "es" ? 
              "Motor de búsqueda y análisis distribuido" : 
              "Distributed search and analytics engine"}
          </p>
          <div className="mt-2 text-xs text-gray-400 flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            {lang === "es" ? "Sitio oficial" : "Official site"}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-blue-950 to-blue-900 p-4 rounded-lg border border-blue-700 shadow cursor-pointer"
          whileHover={{ scale: 1.03 }}
          onClick={() => window.open("https://www.elastic.co/kibana/", '_blank', 'noopener,noreferrer')}
        >
          <div className="flex items-center gap-2 mb-2">
            <SiKibana className="w-5 h-5 text-blue-400" />
            <h4 className="font-medium text-base text-blue-200">Kibana</h4>
          </div>
          <p className="text-xs md:text-sm text-gray-300">
            {lang === "es" ? 
              "Visualización de datos y dashboards interactivos" : 
              "Data visualization and interactive dashboards"}
          </p>
          <div className="mt-2 text-xs text-gray-400 flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            {lang === "es" ? "Sitio oficial" : "Official site"}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-blue-950 to-blue-900 p-4 rounded-lg border border-blue-700 shadow cursor-pointer"
          whileHover={{ scale: 1.03 }}
          onClick={() => window.open("https://www.elastic.co/logstash/", '_blank', 'noopener,noreferrer')}
        >
          <div className="flex items-center gap-2 mb-2">
            <SiLogstash className="w-5 h-5 text-blue-400" />
            <h4 className="font-medium text-base text-blue-200">Logstash</h4>
          </div>
          <p className="text-xs md:text-sm text-gray-300">
            {lang === "es" ? 
              "Procesamiento y transformación de datos en tiempo real" : 
              "Real-time data processing and transformation"}
          </p>
          <div className="mt-2 text-xs text-gray-400 flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            {lang === "es" ? "Sitio oficial" : "Official site"}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-blue-950 to-blue-900 p-4 rounded-lg border border-blue-700 shadow cursor-pointer"
          whileHover={{ scale: 1.03 }}
          onClick={() => window.open("https://www.elastic.co/beats/", '_blank', 'noopener,noreferrer')}
        >
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19,3H14V5H19V8H17V10H19V13H14V15H19V18H17V20H19A2,2 0 0,0 21,18V5C21,3.89 20.1,3 19,3M16,5V7H14V5H16M16,10V12H14V10H16M16,17V15H14V17H16M8,5H10V7H8V5M8,10H10V12H8V10M8,15H10V17H8V15M5,5H7V7H5V5M5,10H7V12H5V10M5,15H7V17H5V15M3,5H4V19H20V20H3V5Z" />
            </svg>
            <h4 className="font-medium text-base text-blue-200">Beats</h4>
          </div>
          <p className="text-xs md:text-sm text-gray-300">
            {lang === "es" ? 
              "Agentes ligeros para recolección de datos (Filebeat, Metricbeat)" : 
              "Lightweight data collectors (Filebeat, Metricbeat)"}
          </p>
          <div className="mt-2 text-xs text-gray-400 flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            {lang === "es" ? "Sitio oficial" : "Official site"}
          </div>
        </motion.div>
      </div>
      
      <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-300">
        {lang === "es" ? "Habilidades Técnicas" : "Technical Skills"}
      </h3>
      
      <ul className="space-y-3 mb-6 text-sm md:text-base">
        <li className="flex items-start">
          <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            {lang === "es" ? 
              "Configuración y optimización para búsquedas y análisis de datos" : 
              "Configuration and optimization for data search and analysis"}
          </span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            {lang === "es" ? 
              "Creación de dashboards para monitoreo y alertas" : 
              "Dashboard creation for monitoring and alerts"}
          </span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            {lang === "es" ? 
              "Despliegue y gestión en entornos Kubernetes usando Helm" : 
              "Deployment and management in Kubernetes environments using Helm"}
          </span>
        </li>
      </ul>
      

    </motion.div>
  );
};

ElasticExperience.propTypes = {
  lang: PropTypes.string.isRequired
};

export default ElasticExperience;
