import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaGithub, FaGitlab } from 'react-icons/fa';
import { SiAzuredevops, SiJenkins } from 'react-icons/si';

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
      icon: <SiAzuredevops size={40} className="text-blue-500" />,
      url: 'https://azure.microsoft.com/services/devops/',
      color: 'border-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900'
    },
    {
      id: 'jenkins',
      name: t.tools.jenkins.name,
      description: t.tools.jenkins.description,
      icon: <SiJenkins size={40} className="text-red-500" />,
      url: 'https://www.jenkins.io/',
      color: 'border-red-500 hover:bg-red-100 dark:hover:bg-red-900'
    },
    {
      id: 'github-actions',
      name: t.tools.github.name,
      description: t.tools.github.description,
      icon: <FaGithub size={40} className="text-purple-500" />,
      url: 'https://github.com/features/actions',
      color: 'border-purple-500 hover:bg-purple-100 dark:hover:bg-purple-900'
    },
    {
      id: 'gitlab-cicd',
      name: t.tools.gitlab.name,
      description: t.tools.gitlab.description,
      icon: <FaGitlab size={40} className="text-orange-500" />,
      url: 'https://docs.gitlab.com/ee/ci/',
      color: 'border-orange-500 hover:bg-orange-100 dark:hover:bg-orange-900'
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
      <h3 className="text-2xl font-bold mb-4">{t.title}</h3>
      <p className="text-gray-300 mb-6">{t.description}</p>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.id}
            variants={cardVariants}
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border-t-4 ${tool.color} transition-all duration-300 h-full flex flex-col`}
          >
            <div className="p-5 flex-grow">
              <div className="mb-4 flex justify-center">{tool.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-center">{tool.name}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{tool.description}</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 text-center">
              <a 
                href={tool.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                {t.visit} {tool.name}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

CICDCards.propTypes = {
  lang: PropTypes.string
};

export default CICDCards;
