import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { SiApachekafka, SiApache } from 'react-icons/si';

const KafkaExperience = ({ lang }) => {
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
      id="kafka-experience"
      className="bg-gradient-to-br from-gray-900 to-red-900 rounded-xl p-6 shadow-xl border-2 border-red-600 pt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex-shrink-0 mb-4 md:mb-0 bg-white p-2 rounded-md">
          <img
            src="/images/kafka.png"
            alt="Apache Kafka Logo"
            width={150}
            height={80}
            className="object-contain"
          />
        </div>
        
        <div className="text-right">
          <h3 className="text-xl md:text-2xl font-bold text-red-400">
            {lang === "es" ? `${monthsDiff} Meses desplegando y monitoreando` : `${monthsDiff} Months Deploying & monitoring`}
          </h3>
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-300">
        {lang === "es" ? "Experiencia" : "Experience"}
      </h3>
      
      <h3 className="text-lg md:text-xl font-semibold mb-4 text-red-300">
        {lang === "es" ? "Componentes de la Plataforma de Confluent" : "Confluent Platform Components"}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <motion.div 
          className="bg-gradient-to-br from-red-950 to-red-900 p-4 rounded-lg border border-red-700 shadow cursor-pointer"
          whileHover={{ scale: 1.03 }}
          onClick={() => window.open("https://zookeeper.apache.org/", '_blank', 'noopener,noreferrer')}
        >
          <div className="flex items-center gap-2 mb-2">
            <SiApache className="w-5 h-5 text-red-400" />
            <h4 className="font-medium text-base text-red-200">ZooKeeper</h4>
          </div>
          <p className="text-xs md:text-sm text-gray-300">
            {lang === "es" ? 
              "Gestión de configuración distribuida y coordinación de brokers" : 
              "Distributed configuration management and broker coordination"}
          </p>
          <div className="mt-2 text-xs text-gray-400 flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            {lang === "es" ? "Sitio oficial" : "Official site"}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-red-950 to-red-900 p-4 rounded-lg border border-red-700 shadow cursor-pointer"
          whileHover={{ scale: 1.03 }}
          onClick={() => window.open("https://docs.confluent.io/platform/current/schema-registry/index.html", '_blank', 'noopener,noreferrer')}
        >
          <div className="flex items-center gap-2 mb-2">
            <SiApachekafka className="w-5 h-5 text-red-400" />
            <h4 className="font-medium text-base text-red-200">Schema Registry</h4>
          </div>
          <p className="text-xs md:text-sm text-gray-300">
            {lang === "es" ? 
              "Validación y evolución de esquemas para garantizar compatibilidad" : 
              "Schema validation and evolution to ensure compatibility"}
          </p>
          <div className="mt-2 text-xs text-gray-400 flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            {lang === "es" ? "Sitio oficial" : "Official site"}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-red-950 to-red-900 p-4 rounded-lg border border-red-700 shadow cursor-pointer"
          whileHover={{ scale: 1.03 }}
          onClick={() => window.open("https://kafka.apache.org/documentation/#connect", '_blank', 'noopener,noreferrer')}
        >
          <div className="flex items-center gap-2 mb-2">
            <SiApachekafka className="w-5 h-5 text-red-400" />
            <h4 className="font-medium text-base text-red-200">Kafka Connect</h4>
          </div>
          <p className="text-xs md:text-sm text-gray-300">
            {lang === "es" ? 
              "Conectores para integración con sistemas externos y bases de datos" : 
              "Connectors for integration with external systems and databases"}
          </p>
          <div className="mt-2 text-xs text-gray-400 flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            {lang === "es" ? "Sitio oficial" : "Official site"}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-red-950 to-red-900 p-4 rounded-lg border border-red-700 shadow cursor-pointer"
          whileHover={{ scale: 1.03 }}
          onClick={() => window.open("https://docs.confluent.io/platform/current/kafka-rest/index.html", '_blank', 'noopener,noreferrer')}
        >
          <div className="flex items-center gap-2 mb-2">
            <SiApachekafka className="w-5 h-5 text-red-400" />
            <h4 className="font-medium text-base text-red-200">REST Proxy</h4>
          </div>
          <p className="text-xs md:text-sm text-gray-300">
            {lang === "es" ? 
              "API RESTful para interactuar con Kafka desde cualquier lenguaje" : 
              "RESTful API for interacting with Kafka from any language"}
          </p>
          <div className="mt-2 text-xs text-gray-400 flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            {lang === "es" ? "Sitio oficial" : "Official site"}
          </div>
        </motion.div>
      </div>
      
      <h3 className="text-lg md:text-xl font-semibold mb-4 text-red-300">
        {lang === "es" ? "Habilidades Técnicas" : "Technical Skills"}
      </h3>
      
      <ul className="space-y-3 mb-6 text-sm md:text-base">
        <li className="flex items-start">
          <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            {lang === "es" ? 
              "Configuración y gestión de tópicos, particiones y replicación" : 
              "Configuration and management of topics, partitions, and replication"}
          </span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            {lang === "es" ? 
              "Optimización de rendimiento y configuración para alta disponibilidad" : 
              "Performance optimization and configuration for high availability"}
          </span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            {lang === "es" ? 
              "Despliegue y configuración usando Helm en entornos Kubernetes" : 
              "Deployment and configuration using Helm in Kubernetes environments"}
          </span>
        </li>
      </ul>
      

    </motion.div>
  );
};

KafkaExperience.propTypes = {
  lang: PropTypes.string.isRequired
};

export default KafkaExperience;
