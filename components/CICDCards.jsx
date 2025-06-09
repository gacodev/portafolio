import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CICDCards = ({ lang = 'es' }) => {
  // Traducciones para las cards
  const translations = {
    es: {
      title: 'Herramientas de CI/CD',
      description: 'Herramientas con las que tengo experiencia en integración y entrega continua',
      visit: 'Visitar',
      tools: {
        azure: {
          name: 'Azure DevOps',
          description: 'Experiencia en configuración de pipelines completos y automatización de proyectos empresariales.'
        },
        jenkins: {
          name: 'Jenkins',
          description: 'Configuración avanzada de pipelines, integración con Docker y Kubernetes.'
        },
        github: {
          name: 'GitHub Actions',
          description: 'Automatización de flujos de trabajo con CI/CD y despliegue en múltiples entornos.'
        },
        gitlab: {
          name: 'GitLab CI/CD',
          description: 'Experiencia con pipelines automatizados, configuración de runners y despliegues continuos.'
        }
      }
    },
    en: {
      title: 'CI/CD Tools',
      description: 'Tools I have experience with for continuous integration and delivery',
      visit: 'Visit',
      tools: {
        azure: {
          name: 'Azure DevOps',
          description: 'Experience in setting up complete pipelines and automating enterprise projects.'
        },
        jenkins: {
          name: 'Jenkins',
          description: 'Advanced pipeline configuration, integration with Docker and Kubernetes.'
        },
        github: {
          name: 'GitHub Actions',
          description: 'Workflow automation with CI/CD and deployment across multiple environments.'
        },
        gitlab: {
          name: 'GitLab CI/CD',
          description: 'Experience with automated pipelines, runner configuration and continuous deployments.'
        }
      }
    }
  };

  const t = translations[lang] || translations.es;

  // Lista de herramientas CI/CD
  const tools = [
    {
      id: 'azure-devops',
      name: t.tools.azure.name,
      description: t.tools.azure.description,
      imageSrc: '/tecnologies/azure.webp',
      url: 'https://azure.microsoft.com/services/devops/',
      color: 'border-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900',
      bgGradient: 'from-blue-400 to-blue-600'
    },
    {
      id: 'jenkins',
      name: t.tools.jenkins.name,
      description: t.tools.jenkins.description,
      imageSrc: '/images/jenkins.webp',
      url: 'https://www.jenkins.io/',
      color: 'border-red-500 hover:bg-red-100 dark:hover:bg-red-900',
      bgGradient: 'from-red-400 to-red-600'
    },
    {
      id: 'github-actions',
      name: t.tools.github.name,
      description: t.tools.github.description,
      imageSrc: '/tecnologies/gha.webp',
      url: 'https://github.com/features/actions',
      color: 'border-purple-500 hover:bg-purple-100 dark:hover:bg-purple-900',
      bgGradient: 'from-purple-400 to-purple-600'
    },
    {
      id: 'gitlab-cicd',
      name: t.tools.gitlab.name,
      description: t.tools.gitlab.description,
      imageSrc: '/images/gitlab.webp',
      url: 'https://docs.gitlab.com/ee/ci/',
      color: 'border-orange-500 hover:bg-orange-100 dark:hover:bg-orange-900',
      bgGradient: 'from-orange-400 to-orange-600'
    }
  ];

  // Animación para las cards
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="py-6 px-4">
      <h3 className="text-2xl font-bold mb-4 text-center">{t.title}</h3>
      <p className="text-gray-300 mb-6 text-center">{t.description}</p>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {tools.map((tool) => (
          <motion.a
            key={tool.id}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            className={`rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 transform hover:scale-105 cursor-pointer no-underline`}
            whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
          >
            <div className={`bg-gradient-to-r ${tool.bgGradient} p-6`}>
              <div className="w-full h-40 relative mb-4">
                <Image 
                  src={tool.imageSrc} 
                  alt={tool.name}
                  fill
                  className="drop-shadow-lg rounded"
                />
              </div>
            </div>
            <div className="p-5 flex-grow bg-white dark:bg-gray-800">
              <h4 className="text-2xl font-bold mb-3 text-center">{tool.name}</h4>
              <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

CICDCards.propTypes = {
  lang: PropTypes.string
};

export default CICDCards;
