import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import KafkaExperience from './KafkaExperience';
import ElasticExperience from './ElasticExperience';
import { SiApacheairflow, SiVault, SiRabbitmq, SiApachekafka, SiElastic, SiRedis, SiJenkins, SiNginx, SiTensorflow } from 'react-icons/si';
import { FaBrain, FaRobot, FaCloud } from 'react-icons/fa';

const KubernetesExperience = ({ lang }) => {
  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const headingAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  // Calculate months of experience
  const startDate = new Date('2020-01-01');
  const currentDate = new Date();
  const monthsDiff = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
                    (currentDate.getMonth() - startDate.getMonth());
                    
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen text-white p-8 md:p-16 flex flex-col">
      {/* Kubernetes Header with Logo */}
      <motion.div 
        className="mb-16 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={headingAnimation}
      >
        <div className="flex items-center justify-center space-x-4 mb-4">
          <img 
            src="/tecnologies/kubernetes.svg" 
            alt="Kubernetes Logo" 
            className="w-16 h-16 md:w-20 md:h-20" 
          />
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            {lang === "es" ? "Experiencia en Kubernetes" : "Kubernetes Experience"}
          </h1>
        </div>
        
      </motion.div>
      
      <motion.div 
        className="bg-black/40 rounded-lg p-6 mb-12 border-2 border-blue-400 shadow-lg shadow-blue-600/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-4 text-cyan-300">
          {lang === "es" ? "Orquestando Microservicios" : "Orchestrating Microservices"}
        </h2>
        <p className="text-lg mb-6">
          {lang === "es" 
            ? "He trabajado extensivamente con Kubernetes como plataforma de orquestación, implementando y gestionando aplicaciones distribuidas y microservicios. Mi experiencia incluye despliegues automatizados, gestión de recursos, configuración de networking, y optimización de workloads en entornos de producción de alta disponibilidad."
            : "I have worked extensively with Kubernetes as an orchestration platform, implementing and managing distributed applications and microservices. My experience includes automated deployments, resource management, networking configuration, and workload optimization in high-availability production environments."
          }
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {[
            {
              name: "Apache Kafka",
              description: lang === "es" ? "Streaming de datos en tiempo real" : "Real-time data streaming",
              color: "from-red-900 to-red-950",
              border: "border-red-600",
              icon: <SiApachekafka className="w-5 h-5 text-red-400" />,
              url: "https://kafka.apache.org/"
            },
            {
              name: "Elastic Stack",
              description: lang === "es" ? "Agregación de logs y analíticas" : "Log aggregation and analytics",
              color: "from-blue-900 to-indigo-950",
              border: "border-blue-600",
              icon: <SiElastic className="w-5 h-5 text-blue-400" />,
              url: "https://www.elastic.co/"
            },
            {
              name: "Redis",
              description: lang === "es" ? "Cache y almacenamiento en memoria" : "In-memory cache and storage",
              color: "from-red-800 to-red-950",
              border: "border-red-500",
              icon: <SiRedis className="w-5 h-5 text-red-400" />,
              url: "https://redis.io/"
            },
            {
              name: "Apache Airflow",
              description: lang === "es" ? "Orquestación de flujos de datos" : "Data pipeline orchestration",
              color: "from-green-800 to-green-950",
              border: "border-green-500",
              icon: <SiApacheairflow className="w-5 h-5 text-green-400" />,
              url: "https://airflow.apache.org/"
            },
            {
              name: "HashiCorp Vault",
              description: lang === "es" ? "Gestión segura de secretos" : "Secure secrets management",
              color: "from-yellow-900 to-yellow-950",
              border: "border-yellow-600",
              icon: <SiVault className="w-5 h-5 text-yellow-400" />,
              url: "https://www.vaultproject.io/"
            },
            {
              name: "RabbitMQ",
              description: lang === "es" ? "Mensajería entre servicios" : "Service messaging broker",
              color: "from-orange-900 to-orange-950",
              border: "border-orange-500",
              icon: <SiRabbitmq className="w-5 h-5 text-orange-400" />,
              url: "https://www.rabbitmq.com/"
            },
            {
              name: lang === "es" ? "Inteligencia Artificial" : "Artificial Intelligence",
              description: lang === "es" ? "Modelos ML para procesamiento" : "ML models for processing",
              color: "from-purple-900 to-purple-950",
              border: "border-purple-600",
              icon: <SiTensorflow className="w-5 h-5 text-purple-400" />,
              url: "https://www.tensorflow.org/"
            },
            {
              name: "Jenkins",
              description: lang === "es" ? "Integración y despliegue continuo" : "CI/CD pipeline automation",
              color: "from-green-900 to-green-950",
              border: "border-green-600",
              icon: <SiJenkins className="w-5 h-5 text-green-400" />,
              url: "https://www.jenkins.io/"
            },
            {
              name: lang === "es" ? "Balanceador de Carga" : "Load Balancer",
              description: lang === "es" ? "Nginx para distribución de tráfico" : "Nginx for traffic distribution",
              color: "from-teal-900 to-teal-950",
              border: "border-teal-600",
              icon: <SiNginx className="w-5 h-5 text-teal-400" />,
              url: "https://www.nginx.com/"
            },
            {
              name: lang === "es" ? "Modelos de Lenguaje" : "Language Models",
              description: lang === "es" ? "LLMs de OpenAI, Azure, GCP" : "LLMs from OpenAI, Azure, GCP",
              color: "from-indigo-900 to-indigo-950",
              border: "border-indigo-600",
              icon: <div className="flex space-x-1">
                <FaBrain className="w-5 h-5 text-green-400" />
                <FaRobot className="w-5 h-5 text-blue-400" />
                <FaCloud className="w-5 h-5 text-yellow-400" />
              </div>,
              url: "https://openai.com/"
            }
          ].map((service) => (
            <motion.div 
              key={service.name}
              className={`bg-gradient-to-br ${service.color} p-4 rounded-lg ${service.border} shadow cursor-pointer`}
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(66, 153, 225, 0.6)' }}
              onClick={() => window.open(service.url, '_blank', 'noopener,noreferrer')}
            >
              <div className="flex items-center gap-2 mb-2">
                {service.icon}
                <h3 className="font-medium text-gray-100">
                  {service.name}
                </h3>
              </div>
              <p className="text-sm text-gray-300">
                {service.description}
              </p>
              <div className="mt-2 text-xs text-gray-400 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                {lang === "es" ? "Sitio oficial" : "Official site"}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <KafkaExperience lang={lang} />
        <ElasticExperience lang={lang} />
      </div>
      
      {/* Technical Skills with K8s */}
      <motion.div
        className="bg-black/30 rounded-lg p-6 mb-12 border border-blue-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-300">
          {lang === "es" ? "Habilidades Técnicas con Kubernetes" : "Technical Skills with Kubernetes"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: lang === "es" ? "Gestión de Clústeres" : "Cluster Management", value: 90 },
            { name: lang === "es" ? "Helm Charts" : "Helm Charts", value: 85 },
            { name: lang === "es" ? "CI/CD con Jenkins" : "CI/CD with Jenkins", value: 88 },
            { name: lang === "es" ? "Monitoreo & Logging" : "Monitoring & Logging", value: 92 },
            { name: lang === "es" ? "Networking" : "Networking", value: 80 },
            { name: lang === "es" ? "Seguridad" : "Security", value: 85 }
          ].map((skill) => (
            <div key={skill.name} className="bg-gradient-to-r from-gray-900 to-blue-900/40 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <div className="font-medium">{skill.name}</div>
                <div className="text-blue-400">{skill.value}%</div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-blue-500 h-2.5 rounded-full" 
                  style={{ width: `${skill.value}%` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

KubernetesExperience.propTypes = {
  lang: PropTypes.string.isRequired
};

export default KubernetesExperience;
