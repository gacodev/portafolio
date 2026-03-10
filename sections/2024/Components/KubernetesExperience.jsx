import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import KafkaExperience from './KafkaExperience';
import ElasticExperience from './ElasticExperience';
import { SiApacheairflow, SiVault, SiRabbitmq, SiApachekafka, SiElastic, SiRedis, SiJenkins, SiNginx, SiTensorflow, SiGrafana } from 'react-icons/si';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { FaBrain, FaRobot, FaCloud, FaNetworkWired, FaShieldAlt, FaCertificate, FaExternalLinkAlt, FaLock, FaGlobe, FaMicrochip, FaDatabase, FaServer, FaChartLine, FaExchangeAlt, FaBalanceScale, FaFlag, FaCheck } from 'react-icons/fa';

const KubernetesExperience = ({ lang }) => {
  const t = (es, en, pt) => ({ es, en, pt })[lang] || en;

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
            {t("Experiencia en Kubernetes", "Kubernetes Experience", "Experiência em Kubernetes")}
          </h1>
        </div>

        <div className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full px-6 py-2 mt-2 flex items-center">
          <span className="font-semibold mr-2 text-lg">
            {t(`${yearsExperience}+ años`, `${yearsExperience}+ years`, `${yearsExperience}+ anos`)}
          </span>
          <span className="text-blue-300">
            {t("de experiencia en entornos de producción", "of experience in production environments", "de experiência em ambientes de produção")}
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
          {t("Arquitectura de Microservicios Avanzada", "Advanced Microservices Architecture", "Arquitetura de Microsserviços Avançada")}
        </h2>
        <p className="text-base md:text-lg mb-4">
          {t(
            "Como arquitecto de soluciones cloud-native, he diseñado e implementado arquitecturas de microservicios complejas sobre Kubernetes en múltiples entornos de producción a gran escala. Mi experiencia abarca desde la definición de la estrategia de contenedorización hasta la implementación de patrones avanzados de comunicación entre servicios.",
            "As a cloud-native solutions architect, I've designed and implemented complex microservices architectures on Kubernetes across multiple large-scale production environments. My experience spans from containerization strategy definition to implementing advanced service communication patterns.",
            "Como arquiteto de soluções cloud-native, projetei e implementei arquiteturas complexas de microsserviços em Kubernetes em múltiplos ambientes de produção em larga escala. Minha experiência abrange desde a definição da estratégia de containerização até a implementação de padrões avançados de comunicação entre serviços."
          )}
        </p>
        <p className="text-base md:text-lg mb-6">
          {t(
            "He liderado la transformación de aplicaciones monolíticas a arquitecturas de microservicios, implementando prácticas DevOps y SRE para garantizar alta disponibilidad, escalabilidad y resiliencia. Mi enfoque incluye diseño de APIs RESTful y gRPC, gestión de contratos con API Gateway, y estrategias de circuit breaking y service mesh.",
            "I've led the transformation of monolithic applications to microservices architectures, implementing DevOps and SRE practices to ensure high availability, scalability, and resilience. My approach includes RESTful and gRPC API design, contract management with API Gateway, and circuit breaking and service mesh strategies.",
            "Liderei a transformação de aplicações monolíticas para arquiteturas de microsserviços, implementando práticas DevOps e SRE para garantir alta disponibilidade, escalabilidade e resiliência. Minha abordagem inclui design de APIs RESTful e gRPC, gestão de contratos com API Gateway, e estratégias de circuit breaking e service mesh."
          )}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {[
            {
              name: "Apache Kafka",
              description: t("Streaming de datos en tiempo real", "Real-time data streaming", "Streaming de dados em tempo real"),
              color: "from-red-900 to-red-950",
              border: "border-red-600",
              icon: <SiApachekafka className="w-5 h-5 text-red-400" />,
              url: "https://kafka.apache.org/"
            },
            {
              name: "Prometheus & Grafana",
              description: t("Monitoreo avanzado y alertas para sistemas distribuidos", "Advanced monitoring and alerting for distributed systems", "Monitoramento avançado e alertas para sistemas distribuídos"),
              color: "from-yellow-900 to-yellow-950",
              border: "border-yellow-500",
              icon: <SiGrafana className="w-5 h-5 text-yellow-400" />,
              url: "https://prometheus.io/"
            },
            {
              name: "Elastic Stack",
              description: t("Agregación de logs y analíticas", "Log aggregation and analytics", "Agregação de logs e análises"),
              color: "from-blue-900 to-indigo-950",
              border: "border-blue-600",
              icon: <FaNetworkWired className="w-5 h-5 text-blue-400" />,
              url: "https://www.elastic.co/"
            },
            {
              name: "Redis",
              description: t("Cache y almacenamiento en memoria", "In-memory cache and storage", "Cache e armazenamento em memória"),
              color: "from-red-800 to-red-950",
              border: "border-red-500",
              icon: <SiRedis className="w-5 h-5 text-red-400" />,
              url: "https://redis.io/"
            },
            {
              name: "Apache Airflow",
              description: t("Orquestación de flujos de datos", "Data pipeline orchestration", "Orquestração de fluxos de dados"),
              color: "from-green-800 to-green-950",
              border: "border-green-500",
              icon: <SiApacheairflow className="w-5 h-5 text-green-400" />,
              url: "https://airflow.apache.org/"
            },
            {
              name: "HashiCorp Vault",
              description: t("Gestión segura de secretos", "Secure secrets management", "Gestão segura de segredos"),
              color: "from-yellow-900 to-yellow-950",
              border: "border-yellow-600",
              icon: <SiVault className="w-5 h-5 text-yellow-400" />,
              url: "https://www.vaultproject.io/"
            },
            {
              name: "RabbitMQ",
              description: t("Mensajería entre servicios", "Service messaging broker", "Mensageria entre serviços"),
              color: "from-orange-900 to-orange-950",
              border: "border-orange-500",
              icon: <SiRabbitmq className="w-5 h-5 text-orange-400" />,
              url: "https://www.rabbitmq.com/"
            },
            {
              name: t("Inteligencia Artificial", "Artificial Intelligence", "Inteligência Artificial"),
              description: t("Modelos ML para procesamiento", "ML models for processing", "Modelos ML para processamento"),
              color: "from-purple-900 to-purple-950",
              border: "border-purple-600",
              icon: <SiTensorflow className="w-5 h-5 text-purple-400" />,
              url: "https://www.tensorflow.org/"
            },
            {
              name: "Jenkins",
              description: t("Integración y despliegue continuo", "CI/CD pipeline automation", "Integração e implantação contínua"),
              color: "from-green-900 to-green-950",
              border: "border-green-600",
              icon: <SiJenkins className="w-5 h-5 text-green-400" />,
              url: "https://www.jenkins.io/"
            },
            {
              name: t("Balanceador de Carga", "Load Balancer", "Balanceador de Carga"),
              description: t("Nginx para distribución de tráfico", "Nginx for traffic distribution", "Nginx para distribuição de tráfego"),
              color: "from-teal-900 to-teal-950",
              border: "border-teal-600",
              icon: <SiNginx className="w-5 h-5 text-teal-400" />,
              url: "https://www.nginx.com/"
            },
            {
              name: t("Modelos de Lenguaje", "Language Models", "Modelos de Linguagem"),
              description: t("LLMs de OpenAI, Azure, GCP", "LLMs from OpenAI, Azure, GCP", "LLMs da OpenAI, Azure, GCP"),
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
                {t("Sitio oficial", "Official site", "Site oficial")}
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
          {t("Operadores & Componentes Avanzados", "Advanced Operators & Components", "Operadores e Componentes Avançados")}
        </h2>
        <p className="text-base md:text-lg mb-6">
          {t(
            "He implementado y administrado componentes avanzados del ecosistema Kubernetes, configurando y optimizando operadores para automatizar tareas complejas de gestión de infraestructura y aplicaciones en entornos empresariales.",
            "I've implemented and managed advanced components within the Kubernetes ecosystem, configuring and optimizing operators to automate complex infrastructure and application management tasks in enterprise environments.",
            "Implementei e administrei componentes avançados do ecossistema Kubernetes, configurando e otimizando operadores para automatizar tarefas complexas de gestão de infraestrutura e aplicações em ambientes empresariais."
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {[
            {
              name: "Istio Service Mesh",
              description: t("Control avanzado de tráfico, seguridad y observabilidad en comunicaciones de servicios", "Advanced traffic control, security and observability for service communications", "Controle avançado de tráfego, segurança e observabilidade nas comunicações de serviços"),
              color: "from-blue-900 to-indigo-950",
              border: "border-blue-500",
              icon: <FaNetworkWired className="w-5 h-5 text-blue-400" />,
              url: "https://istio.io/"
            },
            {
              name: "Confluent for Kubernetes (CFK)",
              description: t("Automatización y orquestación de plataformas Kafka a gran escala", "Automating and orchestrating large-scale Kafka platforms", "Automação e orquestração de plataformas Kafka em larga escala"),
              color: "from-red-900 to-red-950",
              border: "border-red-500",
              icon: <FaServer className="w-5 h-5 text-red-400" />,
              url: "https://docs.confluent.io/operator/current/overview.html"
            },
            {
              name: "ExternalDNS",
              description: t("Integración de DNS automática con servicios y rutas de Kubernetes", "Automatic DNS integration with Kubernetes services and ingresses", "Integração automática de DNS com serviços e rotas do Kubernetes"),
              color: "from-green-900 to-green-950",
              border: "border-green-500",
              icon: <FaGlobe className="w-5 h-5 text-green-400" />,
              url: "https://github.com/kubernetes-sigs/external-dns"
            },
            {
              name: "Cert-Manager",
              description: t("Gestión automatizada de certificados TLS en clústeres de Kubernetes", "Automated TLS certificate management in Kubernetes clusters", "Gestão automatizada de certificados TLS em clusters Kubernetes"),
              color: "from-orange-900 to-amber-950",
              border: "border-orange-500",
              icon: <FaCertificate className="w-5 h-5 text-orange-400" />,
              url: "https://cert-manager.io/"
            },
            {
              name: "ArgoCD GitOps",
              description: t("Despliegue continuo e infraestructura como código declarativa", "Continuous deployment and declarative infrastructure as code", "Implantação contínua e infraestrutura como código declarativa"),
              color: "from-purple-900 to-purple-950",
              border: "border-purple-500",
              icon: <FaCloud className="w-5 h-5 text-purple-400" />,
              url: "https://argo-cd.readthedocs.io/"
            },
            {
              name: "ElasticSearch Operator (ECK)",
              description: t("Gestión nativa de clústeres Elasticsearch en Kubernetes", "Native Elasticsearch cluster management in Kubernetes", "Gestão nativa de clusters Elasticsearch no Kubernetes"),
              color: "from-blue-900 to-blue-950",
              border: "border-blue-500",
              icon: <SiElastic className="w-5 h-5 text-blue-400" />,
              url: "https://www.elastic.co/guide/en/cloud-on-k8s/current/index.html"
            },
            {
              name: "OpenTelemetry Operator",
              description: t("Gestión de telemetría y observabilidad distribuida", "Distributed telemetry and observability management", "Gestão de telemetria e observabilidade distribuída"),
              color: "from-indigo-900 to-indigo-950",
              border: "border-indigo-500",
              icon: <FaChartLine className="w-5 h-5 text-indigo-400" />,
              url: "https://opentelemetry.io/docs/kubernetes/operator/"
            },
            {
              name: "Prometheus Operator",
              description: t("Automatización del monitoreo y alertas en Kubernetes", "Automated monitoring and alerting in Kubernetes", "Automação do monitoramento e alertas no Kubernetes"),
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
                {t("Documentación", "Documentation", "Documentação")}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <KafkaExperience lang={lang} />
        <ElasticExperience lang={lang} />
      </div>

      {/* Deployment Strategies Section */}
      <motion.div
        className="bg-black/40 rounded-lg p-6 mb-12 border-2 border-green-500 shadow-lg shadow-green-600/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-300">
          {t("Estrategias de Despliegue", "Deployment Strategies", "Estratégias de Implantação")}
        </h2>
        <p className="text-base md:text-lg mb-6">
          {t(
            "He implementado y optimizado diversas estrategias de despliegue en entornos de Kubernetes para garantizar liberaciones sin tiempo de inactividad, minimizar riesgos y permitir el lanzamiento gradual de nuevas funcionalidades.",
            "I've implemented and optimized various deployment strategies in Kubernetes environments to ensure zero-downtime releases, minimize risk, and enable gradual feature rollouts.",
            "Implementei e otimizei diversas estratégias de implantação em ambientes Kubernetes para garantir liberações sem tempo de inatividade, minimizar riscos e permitir o lançamento gradual de novas funcionalidades."
          )}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Blue-Green Deployments */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900/30 p-5 rounded-lg border border-blue-800/50">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-blue-300 flex items-center">
              <FaExchangeAlt className="mr-2" />
              Blue-Green
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              {t(
                "Implementación simultánea de dos entornos idénticos para transiciones instantáneas y reversiones rápidas.",
                "Simultaneous deployment of two identical environments for instant transitions and quick rollbacks.",
                "Implementação simultânea de dois ambientes idênticos para transições instantâneas e reversões rápidas."
              )}
            </p>
            <ul className="space-y-2">
              {[
                t("Transiciones sin tiempo de inactividad", "Zero-downtime transitions", "Transições sem tempo de inatividade"),
                t("Reversión inmediata", "Immediate rollback capability", "Reversão imediata"),
                t("Pruebas en entorno de pre-producción real", "Testing in real pre-production environment", "Testes em ambiente de pré-produção real")
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="text-green-400 mr-2 mt-1"><FaCheck size={12} /></div>
                  <div className="text-gray-300 text-sm">{item}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Canary Deployments */}
          <div className="bg-gradient-to-r from-gray-900 to-yellow-900/30 p-5 rounded-lg border border-yellow-800/50">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-yellow-300 flex items-center">
              <FaBalanceScale className="mr-2" />
              Canary Deployments
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              {t(
                "Despliegue gradual con enrutamiento controlado de tráfico para mitigar riesgos con monitorización en tiempo real.",
                "Gradual deployment with controlled traffic routing to mitigate risks with real-time monitoring.",
                "Implantação gradual com roteamento controlado de tráfego para mitigar riscos com monitoramento em tempo real."
              )}
            </p>
            <ul className="space-y-2">
              {[
                t("Detección temprana de problemas", "Early problem detection", "Detecção antecipada de problemas"),
                t("Exposición limitada a riesgos", "Limited risk exposure", "Exposição limitada a riscos"),
                t("Despliegue progresivo automatizado", "Automated progressive rollout", "Implantação progressiva automatizada")
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="text-green-400 mr-2 mt-1"><FaCheck size={12} /></div>
                  <div className="text-gray-300 text-sm">{item}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature Flags */}
          <div className="bg-gradient-to-r from-gray-900 to-purple-900/30 p-5 rounded-lg border border-purple-800/50">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-purple-300 flex items-center">
              <FaFlag className="mr-2" />
              Feature Flags
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              {t(
                "Separación de despliegue y activación de funcionalidades para mayor control y experimentación con usuarios.",
                "Decoupling deployment from feature activation for greater control and user experimentation.",
                "Separação de implantação e ativação de funcionalidades para maior controle e experimentação com usuários."
              )}
            </p>
            <ul className="space-y-2">
              {[
                t("A/B testing con usuarios reales", "A/B testing with real users", "A/B testing com usuários reais"),
                t("Lanzamientos personalizados por audiencia", "Audience-targeted rollouts", "Lançamentos personalizados por audiência"),
                t("Desactivación instantánea de funciones", "Instant feature kill-switch", "Desativação instantânea de funcionalidades")
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="text-green-400 mr-2 mt-1"><FaCheck size={12} /></div>
                  <div className="text-gray-300 text-sm">{item}</div>
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
          {t("Experiencia Técnica Avanzada", "Advanced Technical Expertise", "Experiência Técnica Avançada")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: t("Arquitectura de Microservicios", "Microservices Architecture", "Arquitetura de Microsserviços"), value: 95 },
            { name: t("Operadores Kubernetes", "Kubernetes Operators", "Operadores Kubernetes"), value: 92 },
            { name: "Service Mesh (Istio)", value: 90 },
            { name: "GitOps (ArgoCD/Flux)", value: 88 },
            { name: t("Seguridad Avanzada", "Advanced Security", "Segurança Avançada"), value: 85 },
            { name: t("Automatización SRE", "SRE Automation", "Automação SRE"), value: 90 },
            { name: t("Helm Charts Avanzados", "Advanced Helm Charts", "Helm Charts Avançados"), value: 93 },
            { name: t("Observabilidad Distribuida", "Distributed Observability", "Observabilidade Distribuída"), value: 88 },
            { name: t("Multi-Cloud & Federación", "Multi-Cloud & Federation", "Multi-Cloud & Federação"), value: 85 }
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
