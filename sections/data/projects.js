const projects = [
  {
    company: "EPAM Systems",
    url: "https://www.epam.com",
    projects: [
      {
        name: 'Azure Subscription Vending Agent',
        url: 'https://www.epam.com',
        role: 'Platform Engineer / AI Developer',
        year: 2026,
        technologies: [
          'Node.js', 'Next.js', 'MCP', 'GitHub Actions', 'Terraform', 'Azure'
        ],
        description: {
          es: "Desarrollo de un agente inteligente basado en MCP (Model Context Protocol) utilizando Node.js y Next.js. El agente automatiza la provisión de recursos en Azure (Subscription Vending) ejecutando flujos de GitHub Actions y módulos de Terraform, agilizando la creación de suscripciones, bases de datos y entornos asilados para los distintos equipos de desarrollo.",
          en: "Development of an intelligent agent based on MCP (Model Context Protocol) using Node.js and Next.js. The agent automates resource provisioning in Azure (Subscription Vending) by executing GitHub Actions flows and Terraform modules, streamlining the creation of subscriptions, databases, and isolated environments for development teams.",
          pt: "Desenvolvimento de um agente inteligente baseado no MCP (Model Context Protocol) usando Node.js e Next.js. O agente automatiza o provisionamento de recursos no Azure (Subscription Vending) executando fluxos do GitHub Actions e módulos do Terraform, simplificando a criação de assinaturas, bancos de dados e ambientes isolados para equipes de desenvolvimento."
        }
      },
      {
        name: 'Cloud Security Assessment Tool',
        url: 'https://www.epam.com',
        role: 'Platform Engineer / AI Developer',
        year: 2025,
        technologies: [
          'Terraform', 'Next.js', 'Azure Security Center', 'CSPM', 'AI Agents'
        ],
        description: {
          es: "Creación de una herramienta integral para la evaluación de postura de seguridad (CSPM) en múltiples tenants de Azure. Escanea la infraestructura mediante pipelines y define un backlog de remediación (Product Backlog) accionable a través de un agente asistido. Utiliza Next.js para el front y Terraform para despliegues automatizados y mitigación de vulnerabilidades.",
          en: "Creation of a comprehensive Cloud Security Posture Management (CSPM) tool for multiple Azure tenants. It scans infrastructure via pipelines and defines an actionable remediation backlog (Product Backlog) through an assisted agent. Utilizes Next.js for the UI and Terraform for automated deployments and vulnerability mitigation.",
          pt: "Criação de uma ferramenta abrangente de Cloud Security Posture Management (CSPM) em vários locatários do Azure. Ela rastreia a infraestrutura por meio de pipelines e define um backlog de remediação acionável por meio de um agente assistido. Utiliza Next.js no frontend e Terraform para implantações automatizadas e mitigação de vulnerabilidades."
        }
      },
      {
        name: 'Internal Developer Platform (IDP)',
        url: 'https://www.epam.com',
        role: 'Platform Engineer',
        year: 2026,
        technologies: [
          'GitHub Actions', 'Terraform', 'Python', 'GCP Secret Manager',
          'SonarQube', 'Snyk', 'GSA', 'Platform Engineering'
        ],
        description: {
          es: "Construcción de una plataforma de auto-servicio que orquesta la creación de repositorios mediante un handler dinámico. Fuerza la ejecución del ciclo CI/CD completo, integra análisis estático (SonarQube, Snyk), administra secretos descentralizados en GCP e infiere políticas organizacionales. Permite a un desarrollador tener una arquitectura con scaffolding completo desplegada en 5 minutos.",
          en: "Construction of a self-service platform that orchestrates repository creation using a dynamic handler. It enforces the full CI/CD lifecycle, integrates static analysis (SonarQube, Snyk), manages decentralized secrets in GCP, and enforces organizational policies. Enables developers to have fully scaffolded architecture deployed in under 5 minutes.",
          pt: "Construção de uma plataforma de autoatendimento que orquestra a criação de repositórios dinamicamente. Aplica o ciclo completo de CI/CD, integra análise estática (SonarQube, Snyk), gerencia segredos no GCP e aplica políticas organizacionais. Permite que um desenvolvedor tenha uma arquitetura totalmente estruturada pronta em 5 minutos."
        }
      },
      {
        name: 'Apache Kafka Multi-Region Clusters',
        url: 'https://www.epam.com',
        role: 'Platform Engineer',
        year: 2025,
        technologies: [
          'Apache Kafka', 'Kubernetes', 'Istio', 'Jenkins',
          'PagerDuty', 'ELK Stack'
        ],
        description: {
          es: "Administración de clústeres de Apache Kafka en arquitecturas Multi-Región para sistemas de misión crítica. Implementación y mantenimiento utilizando Kubernetes e Istio, integrando pipelines avanzados de Jenkins, y asegurando alta disponibilidad (99.99%) mediante observabilidad proactiva con ELK Stack, integraciones de PagerDuty y monitoreo sintético con Uptrends.",
          en: "Administration of Apache Kafka clusters in Multi-Region architectures for mission-critical systems. Implementation and maintenance using Kubernetes and Istio, integrating advanced Jenkins pipelines, and ensuring high availability (99.99%) through proactive observability with the ELK Stack, PagerDuty integrations, and synthetic monitoring.",
          pt: "Administração de clusters do Apache Kafka em arquiteturas Multi-Region para sistemas de missão crítica. Implementação e manutenção usando Kubernetes e Istio, integrando pipelines avançados do Jenkins e garantindo alta disponibilidade (99,99%) por meio de observabilidade proativa com o ELK Stack e integrações do PagerDuty."
        }
      }
    ]
  },
  {
    company: "Interconexion Electrica S.A",
    url: "https://www.inteia.com.co",
    projects: [
      {
        name: 'AppiMotion+',
        image: "/projects/appimotion+.webp",
        url: 'https://www.inteia.com.co',
        role: 'Solutions Architect',
        year: 2024,
        technologies: [
          'Terraform', 'Docker', 'SonarCloud', 'OWASP',
          'Azure Front Door', 'Azure App Services', 'VMSS', 'CI/CD Pipelines'
        ],
        description: {
          es: "Diseño de la arquitectura en la nube para el proyecto AppiMotion+. Se aplicaron prácticas de Infraestructura como Código (IaC) en Azure y flujos automatizados para garantizar una alta escalabilidad y resiliencia ante picos de demanda institucional.",
          en: "Cloud architecture design for the AppiMotion+ project. Applied Infrastructure as Code (IaC) practices in Azure and automated flows to ensure high scalability and resilience against institutional demand spikes.",
          pt: "Design de arquitetura em nuvem para o projeto AppiMotion+. Foram aplicadas práticas de Infraestrutura como Código (IaC) no Azure para garantir alta escalabilidade e resiliência."
        }
      },
      {
        name: 'Trackmile',
        url: 'https://www.trackmile.co/',
        role: 'Solutions Architect',
        year: 2024,
        technologies: [
          'Reverse Proxies', 'Docker', 'Ansible', 'IaC',
          'Containers Orchestration', 'Virtual Network', 'Prometheus'
        ],
        description: {
          es: "Optimización de la logística mediante una arquitectura orientada a alta disponibilidad. Configuración de reverse proxies, orquestación de contenedores y monitoreo de métricas precisas usando Prometheus incrustadas en pipelines CI/CD.",
          en: "Logistics optimization through a high-availability oriented architecture. Configuration of reverse proxies, container orchestration, and precise metrics monitoring using Prometheus embedded in CI/CD pipelines.",
          pt: "Otimização logística por meio de uma arquitetura orientada à alta disponibilidade. Configuração de proxies reversos, orquestração de contêineres e monitoramento de métricas precisas usando o Prometheus."
        }
      },
      {
        name: 'Traffig',
        url: 'https://www.inteia.com.co',
        role: 'Solutions Architect',
        year: 2024,
        technologies: [
          'AKS', 'Docker', 'Helm', 'Azure Front Door', 'GitOps', 'Azure Landing Zone'
        ],
        description: {
          es: "Plataforma de tráfico gestionada íntegramente de forma nativa en la nube usando Azure Kubernetes Service (AKS). Diseño basado en GitOps y despliegues mediante Helm, orquestando una flota de microservicios con seguridad multicapa.",
          en: "Traffic platform fully managed cloud-natively using Azure Kubernetes Service (AKS). GitOps-based design and Helm deployments scaling a fleet of microservices with multi-layer security.",
          pt: "Plataforma de tráfego totalmente gerenciada nativamente na nuvem utilizando o Azure Kubernetes Service (AKS). Design baseado em GitOps e implantações com Helm."
        }
      },
      {
        name: 'Gobierno Nube',
        url: 'https://inteia.com.co',
        role: 'Platform Engineer',
        year: 2024,
        technologies: [
          'Azure DevOps', 'Terraform', 'Python', 'policy as code', 'Cloud Governance'
        ],
        description: {
          es: "Piedra angular de la infraestructura organizativa en Inteia. Responsable de estructurar la gobernanza en la nube de Azure definiendo políticas como código (Policy as Code) para auditar y controlar costos, configuraciones de red y seguridad.",
          en: "Cornerstone of organizational infrastructure at Inteia. Responsible for structuring cloud governance in Azure by defining policy as code to audit and control costs, network configurations, and security.",
          pt: "Pedra angular da infraestrutura organizacional da Inteia. Responsável por estruturar a governança em nuvem no Azure definindo política como código para auditar e controlar custos, redes e segurança."
        }
      }
    ]
  },
  {
    company: "Comfama",
    url: "https://www.comfama.com",
    projects: [
      {
        name: "Aula digital comfama",
        image: "/projects/comfama.webp",
        url: "https://auladigital.comfama.com",
        role: "Backend & Cloud Engineer",
        year: 2023,
        technologies: ["PHP", "JS", "Linux Servers", "Azure", "Microservices", "AzureDevops", "Ansible", "IaC"],
        description: {
          es: "Soporte de backend y migración a microservicios para la plataforma de educación online de Comfama. Implementación de automatizaciones con Ansible y Azure DevOps para permitir lanzamientos en minutos y mayor resiliencia.",
          en: "Backend support and microservices migration for Comfama's online education platform. Implementation of automations with Ansible and Azure DevOps to enable releases in minutes with greater resilience.",
          pt: "Suporte de backend e migração para microsserviços para a plataforma de educação online da Comfama. Implementação de automações com Ansible e Azure DevOps para permitir lançamentos rápidos."
        }
      }
    ]
  },
  {
    company: "Newzenda",
    url: "https://www.newzenda.com",
    projects: [
      {
        name: "Mi deber es mi derecho",
        image: "/projects/mideber.webp",
        url: "https://www.instagram.com/mideberesmiderecho/?hl=es-la",
        role: "FullStack Developer",
        year: 2022,
        technologies: ["PHP", "NextJS", "MongoDB", "AWS Lambda", "AWS API Gateway"],
        description: {
          es: "Plataforma FullStack enfocada en impacto social. Se hizo uso de arquitecturas serverless con AWS Lambda y API Gateway para manejar tráfico irregular de manera económica, acoplado a un backend dinámico en PHP y MongoDB.",
          en: "FullStack platform focused on social impact. Leveraged serverless architectures with AWS Lambda and API Gateway to handle irregular burst traffic cost-effectively, coupled to a dynamic PHP/MongoDB backend.",
          pt: "Plataforma FullStack focada em impacto social. Arquiteturas sem servidor aproveitadas com o AWS Lambda e o API Gateway para lidar com picos irregulares de tráfego de maneira econômica."
        }
      }
    ]
  },
  {
    company: "Fuerza Aérea Colombiana",
    url: "https://www.fac.mil.co",
    projects: [
      {
        name: "Inventario de Armamento y Personal",
        image: "/projects/interescuelas.webp",
        url: "N/A",
        role: "Backend Developer",
        year: 2021,
        technologies: ["Laravel", "PHP", "PostgreSQL", "Linux", "Virtual Machines"],
        description: {
          es: "Sistema departamental desarrollado para la Escuela Militar de Suboficiales (EMAVI). Centraliza el registro, expedición y control de armamento, así como el inventario del personal de guardia. El sistema automatiza el cálculo de 'estados finales' diarios y sistematiza los listados (partes) que anteriormente se gestionaban de manera manual, ofreciendo control logístico en tiempo real.",
          en: "Departmental system developed for the Air Force NCO Military School. Centralizes the registration, issuance, and control of weaponry, as well as the inventory of personnel on active guard duty. It automates daily 'estados finales' calculations and modernizes the logistical control previously handled manually.",
          pt: "Sistema departamental desenvolvido para a Escola Militar de Suboficiais da Força Aérea. Centraliza o registro, emissão e controle de armamento, bem como o estoque de pessoal de guarda ativo. O sistema automatiza relatórios diários ('partes') que antes eram processados manualmente."
        }
      },
      {
        name: "Interescuelas FFMM",
        image: "/projects/interescuelas.webp",
        url: "https://www.emavi.edu.co/interescuelas2022",
        role: "FullStack Developer",
        year: 2022,
        technologies: ["Gitlab CI/CD", "Azure", "Linux", "IaC", "Shell Scripting"],
        description: {
          es: "Portal de resultados en tiempo real gestionado para las justas deportivas interescuelas militares (Juegos Interescuelas). Soportó alto tráfico durante eventos combinando caché en Azure y despliegues estandarizados desde GitLab CI/CD.",
          en: "Real-time results portal managed for the inter-school military sports games (Juegos Interescuelas). Built to withstand high traffic during live events by combining Azure caching and standardized deployments from GitLab CI/CD.",
          pt: "Portal de resultados em tempo real para os jogos esportivos militares inter-escolares (Jogos Interescuelas). Suportou alto tráfego durante eventos combinando cache no Azure e implantações do GitLab CI/CD."
        }
      }
    ]
  }
];

projects.forEach(company => {
  company.projects.sort((a, b) => b.year - a.year);
});

projects.sort((a, b) => {
  const aLatestYear = Math.max(...a.projects.map(p => p.year));
  const bLatestYear = Math.max(...b.projects.map(p => p.year));
  return bLatestYear - aLatestYear;
});

export default projects;