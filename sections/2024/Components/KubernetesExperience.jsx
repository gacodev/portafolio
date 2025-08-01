import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import KafkaExperience from './KafkaExperience';
import ElasticExperience from './ElasticExperience';
import { SiApacheairflow, SiVault, SiRabbitmq, SiApachekafka, SiElastic, SiRedis, SiJenkins, SiNginx, SiTensorflow, SiGrafana } from 'react-icons/si';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { FaBrain, FaRobot, FaCloud, FaNetworkWired, FaShieldAlt, FaCertificate, FaExternalLinkAlt, FaLock, FaGlobe, FaMicrochip, FaDatabase, FaServer, FaChartLine } from 'react-icons/fa';

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

  // Calculate years of experience
  const startDate = new Date('2021-01-01');
  const currentDate = new Date();
  const monthsDiff = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
                    (currentDate.getMonth() - startDate.getMonth());
  const yearsExperience = Math.floor(monthsDiff / 12);
                    
  return (
    <div id="kubernetes-experience" className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen text-white flex flex-col pt-10 p-8 md:p-16">
      {/* Kubernetes Header with Logo */}
      <motion.div 
        className="mb-12 flex flex-col items-center"
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
        
        <div className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full px-6 py-2 mt-2 flex items-center">
          <span className="font-semibold mr-2 text-lg">
            {lang === "es" ? `${yearsExperience}+ años` : `${yearsExperience}+ years`}
          </span>
          <span className="text-blue-300">
            {lang === "es" ? "de experiencia en entornos de producción" : "of experience in production environments"}
          </span>
        </div>
      </motion.div>
      
      <motion.div 
        className="bg-black/40 rounded-lg p-6 mb-12 border-2 border-blue-400 shadow-lg shadow-blue-600/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-300">
          {lang === "es" ? "Arquitectura de Microservicios Avanzada" : "Advanced Microservices Architecture"}
        </h2>
        <p className="text-base md:text-lg mb-4">
          {lang === "es" 
            ? "Como arquitecto de soluciones cloud-native, he diseñado e implementado arquitecturas de microservicios complejas sobre Kubernetes en múltiples entornos de producción a gran escala. Mi experiencia abarca desde la definición de la estrategia de contenedorización hasta la implementación de patrones avanzados de comunicación entre servicios."
            : "As a cloud-native solutions architect, I've designed and implemented complex microservices architectures on Kubernetes across multiple large-scale production environments. My experience spans from containerization strategy definition to implementing advanced service communication patterns."
          }
        </p>
        <p className="text-base md:text-lg mb-6">
          {lang === "es" 
            ? "He liderado la transformación de aplicaciones monolíticas a arquitecturas de microservicios, implementando prácticas DevOps y SRE para garantizar alta disponibilidad, escalabilidad y resiliencia. Mi enfoque incluye diseño de APIs RESTful y gRPC, gestión de contratos con API Gateway, y estrategias de circuit breaking y service mesh."
            : "I've led the transformation of monolithic applications to microservices architectures, implementing DevOps and SRE practices to ensure high availability, scalability, and resilience. My approach includes RESTful and gRPC API design, contract management with API Gateway, and circuit breaking and service mesh strategies."
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
              name: "Prometheus & Grafana",
              description: lang === "es" ? "Monitoreo avanzado y alertas para sistemas distribuidos" : "Advanced monitoring and alerting for distributed systems",
              color: "from-yellow-900 to-yellow-950",
              border: "border-yellow-500",
              icon: <SiGrafana className="w-5 h-5 text-yellow-400" />,
              url: "https://prometheus.io/"
            },
            {
              name: "Elastic Stack",
              description: lang === "es" ? "Agregación de logs y analíticas" : "Log aggregation and analytics",
              color: "from-blue-900 to-indigo-950",
              border: "border-blue-600",
              icon: <FaNetworkWired className="w-5 h-5 text-blue-400" />,
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
                <h3 className="font-medium text-base md:text-lg text-gray-100">
                  {service.name}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-300">
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
      
      {/* Kubernetes Operators & Advanced Components */}
      <motion.div 
        className="bg-black/40 rounded-lg p-6 mb-12 border-2 border-indigo-500 shadow-lg shadow-indigo-600/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-300">
          {lang === "es" ? "Operadores & Componentes Avanzados" : "Advanced Operators & Components"}
        </h2>
        <p className="text-base md:text-lg mb-6">
          {lang === "es" 
            ? "He implementado y administrado componentes avanzados del ecosistema Kubernetes, configurando y optimizando operadores para automatizar tareas complejas de gestión de infraestructura y aplicaciones en entornos empresariales."
            : "I've implemented and managed advanced components within the Kubernetes ecosystem, configuring and optimizing operators to automate complex infrastructure and application management tasks in enterprise environments."
          }
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {[
            {
              name: "Istio Service Mesh",
              description: lang === "es" ? "Control avanzado de tráfico, seguridad y observabilidad en comunicaciones de servicios" : "Advanced traffic control, security and observability for service communications",
              color: "from-blue-900 to-indigo-950",
              border: "border-blue-500",
              icon: <FaNetworkWired className="w-5 h-5 text-blue-400" />,
              url: "https://istio.io/"
            },
            {
              name: "Confluent for Kubernetes (CFK)",
              description: lang === "es" ? "Automatización y orquestación de plataformas Kafka a gran escala" : "Automating and orchestrating large-scale Kafka platforms",
              color: "from-red-900 to-red-950",
              border: "border-red-500",
              icon: <FaServer className="w-5 h-5 text-red-400" />,
              url: "https://docs.confluent.io/operator/current/overview.html"
            },
            {
              name: "ExternalDNS",
              description: lang === "es" ? "Integración de DNS automática con servicios y rutas de Kubernetes" : "Automatic DNS integration with Kubernetes services and ingresses",
              color: "from-green-900 to-green-950",
              border: "border-green-500",
              icon: <FaGlobe className="w-5 h-5 text-green-400" />,
              url: "https://github.com/kubernetes-sigs/external-dns"
            },
            {
              name: "Cert-Manager",
              description: lang === "es" ? "Gestión automatizada de certificados TLS en clústeres de Kubernetes" : "Automated TLS certificate management in Kubernetes clusters",
              color: "from-orange-900 to-amber-950",
              border: "border-orange-500",
              icon: <FaCertificate className="w-5 h-5 text-orange-400" />,
              url: "https://cert-manager.io/"
            },
            {
              name: "ArgoCD GitOps",
              description: lang === "es" ? "Despliegue continuo e infraestructura como código declarativa" : "Continuous deployment and declarative infrastructure as code",
              color: "from-purple-900 to-purple-950",
              border: "border-purple-500",
              icon: <FaCloud className="w-5 h-5 text-purple-400" />,
              url: "https://argo-cd.readthedocs.io/"
            },
            {
              name: "ElasticSearch Operator (ECK)",
              description: lang === "es" ? "Gestión nativa de clústeres Elasticsearch en Kubernetes" : "Native Elasticsearch cluster management in Kubernetes",
              color: "from-blue-900 to-blue-950",
              border: "border-blue-500",
              icon: <SiElastic className="w-5 h-5 text-blue-400" />,
              url: "https://www.elastic.co/guide/en/cloud-on-k8s/current/index.html"
            },
            {
              name: "OpenTelemetry Operator",
              description: lang === "es" ? "Gestión de telemetría y observabilidad distribuida" : "Distributed telemetry and observability management",
              color: "from-indigo-900 to-indigo-950",
              border: "border-indigo-500",
              icon: <FaChartLine className="w-5 h-5 text-indigo-400" />,
              url: "https://opentelemetry.io/docs/kubernetes/operator/"
            },
            {
              name: "Prometheus Operator",
              description: lang === "es" ? "Automatización del monitoreo y alertas en Kubernetes" : "Automated monitoring and alerting in Kubernetes",
              color: "from-orange-900 to-orange-950",
              border: "border-orange-500",
              icon: <SiGrafana className="w-5 h-5 text-orange-400" />,
              url: "https://prometheus-operator.dev/"
            }
          ].map((operator) => (
            <motion.div 
              key={operator.name}
              className={`bg-gradient-to-br ${operator.color} p-4 rounded-lg ${operator.border} shadow cursor-pointer`}
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(99, 102, 241, 0.6)' }}
              onClick={() => window.open(operator.url, '_blank', 'noopener,noreferrer')}
            >
              <div className="flex items-center gap-2 mb-2">
                {operator.icon}
                <h3 className="font-medium text-base md:text-lg text-gray-100">
                  {operator.name}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-300">
                {operator.description}
              </p>
              <div className="mt-2 text-xs text-gray-400 flex items-center">
                <FaExternalLinkAlt className="w-3 h-3 mr-1" />
                {lang === "es" ? "Documentación" : "Documentation"}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <KafkaExperience lang={lang} />
        <ElasticExperience lang={lang} />
      </div>
      
      {/* Kubernetes Architecture Expertise */}
      <motion.div 
        className="bg-black/40 rounded-lg p-6 mb-12 border-2 border-cyan-500 shadow-lg shadow-cyan-600/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-300">
          {lang === "es" ? "Arquitectura Interna de Kubernetes" : "Kubernetes Internal Architecture"}
        </h2>
        <p className="text-base md:text-lg mb-6">
          {lang === "es" 
            ? "Con un profundo conocimiento de la arquitectura interna de Kubernetes, he optimizado componentes clave del plano de control y plano de datos para mejorar la fiabilidad, escalabilidad y rendimiento de grandes clústeres en entornos críticos."
            : "With deep knowledge of Kubernetes internal architecture, I've optimized key control plane and data plane components to enhance reliability, scalability, and performance of large clusters in mission-critical environments."
          }
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Control Plane */}
          <div className="bg-gradient-to-r from-gray-900 to-cyan-900/30 p-5 rounded-lg border border-cyan-800/50">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-cyan-300 flex items-center">
              <FaMicrochip className="mr-2" />
              {lang === "es" ? "Plano de Control" : "Control Plane"}
            </h3>
            <ul className="space-y-3">
              {[
                {
                  name: "API Server",
                  desc: lang === "es" ? "Optimización de rendimiento y configuración de políticas de admisión" : "Performance optimization and admission policy configuration"
                },
                {
                  name: "etcd",
                  desc: lang === "es" ? "Gestión de cluster distribuido de alta disponibilidad y backups" : "High-availability distributed cluster management and backups"
                },
                {
                  name: "Scheduler",
                  desc: lang === "es" ? "Personalización de algoritmos de scheduling y afinidades" : "Custom scheduling algorithms and affinity configuration"
                },
                {
                  name: "Controller Manager",
                  desc: lang === "es" ? "Implementación de controladores personalizados para CRDs" : "Custom controller implementation for CRDs"
                }
              ].map((item, idx) => (
                <li key={idx} className="bg-black/20 p-3 rounded-md">
                  <div className="font-medium text-white text-sm md:text-base">{item.name}</div>
                  <div className="text-cyan-200/70 text-xs md:text-sm mt-1">{item.desc}</div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Data Plane */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900/30 p-5 rounded-lg border border-blue-800/50">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-blue-300 flex items-center">
              <FaNetworkWired className="mr-2" />
              {lang === "es" ? "Plano de Datos" : "Data Plane"}
            </h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Kubelet",
                  desc: lang === "es" ? "Optimización de configuración para alta densidad de pods" : "Configuration optimization for high pod density"
                },
                {
                  name: "Container Runtime",
                  desc: lang === "es" ? "Implementación de containerd y configuración de seguridad" : "Containerd implementation and security configuration"
                },
                {
                  name: "CNI Plugins",
                  desc: lang === "es" ? "Calico, Cilium para políticas de red avanzadas" : "Calico, Cilium for advanced network policies"
                },
                {
                  name: "CSI Drivers",
                  desc: lang === "es" ? "Integración con sistemas de almacenamiento empresariales" : "Integration with enterprise storage systems"
                }
              ].map((item, idx) => (
                <li key={idx} className="bg-black/20 p-3 rounded-md">
                  <div className="font-medium text-white text-sm md:text-base">{item.name}</div>
                  <div className="text-blue-200/70 text-xs md:text-sm mt-1">{item.desc}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
      
      {/* Technical Skills with K8s */}
      <motion.div
        className="bg-black/30 rounded-lg p-6 mb-12 border border-blue-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-blue-300">
          {lang === "es" ? "Experiencia Técnica Avanzada" : "Advanced Technical Expertise"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: lang === "es" ? "Arquitectura de Microservicios" : "Microservices Architecture", value: 95 },
            { name: lang === "es" ? "Operadores Kubernetes" : "Kubernetes Operators", value: 92 },
            { name: lang === "es" ? "Service Mesh (Istio)" : "Service Mesh (Istio)", value: 90 },
            { name: lang === "es" ? "GitOps (ArgoCD/Flux)" : "GitOps (ArgoCD/Flux)", value: 88 },
            { name: lang === "es" ? "Seguridad Avanzada" : "Advanced Security", value: 85 },
            { name: lang === "es" ? "Automatización SRE" : "SRE Automation", value: 90 },
            { name: lang === "es" ? "Helm Charts Avanzados" : "Advanced Helm Charts", value: 93 },
            { name: lang === "es" ? "Observabilidad Distribuida" : "Distributed Observability", value: 88 },
            { name: lang === "es" ? "Multi-Cloud & Federación" : "Multi-Cloud & Federation", value: 85 }
          ].map((skill) => (
            <div key={skill.name} className="bg-gradient-to-r from-gray-900 to-blue-900/40 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <div className="font-medium text-sm md:text-base">{skill.name}</div>
                <div className="text-blue-400">{skill.value}%</div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-gradient-to-r from-blue-600 to-indigo-500 h-2.5 rounded-full" 
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
