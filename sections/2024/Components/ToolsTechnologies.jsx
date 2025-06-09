import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Azure DevOps', logo: '/tecnologies/azure-devops.svg', url: 'https://docs.microsoft.com/en-us/azure/devops/' },
  { name: 'Git', logo: '/tecnologies/git.svg', url: 'https://git-scm.com/doc' },
  { name: 'Docker', logo: '/tecnologies/docker.svg', url: 'https://docs.docker.com/' },
  { name: 'Kubernetes', logo: '/tecnologies/kubernetes.svg', url: 'https://kubernetes.io/docs/home/' },
  { name: 'SonarCloud', logo: '/tecnologies/sonar.svg', url: 'https://docs.sonarcloud.io/' },
  { name: 'Ansible', logo: '/tecnologies/ansible.svg', url: 'https://docs.ansible.com/' },
  { name: 'MongoDB', logo: '/tecnologies/mongodb.svg', url: 'https://docs.mongodb.com/' },
  { name: 'RabbitMQ', logo: '/tecnologies/rabbitmq.svg', url: 'https://www.rabbitmq.com/documentation.html' },
  { name: 'OWASP', logo: '/tecnologies/owasp.webp', url: 'https://owasp.org/www-project-top-ten/' },
  { name: 'CosmosDB', logo: '/tecnologies/cosmos.webp', url: 'https://learn.microsoft.com/en-us/azure/cosmos-db/' },
];

const ToolsTechnologies = ({ lang = 'en' }) => {
  const title = lang === 'en' ? 'Tools & Technologies' : 'Herramientas y Tecnologías';

  return (
    <div id="tools-technologies" className="mb-20 px-4 pt-10">
      <h2 className="text-3xl font-bold mb-12 mt-8 text-center">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {tools.map((tool) => (
          <motion.a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-28 h-28 mb-4 bg-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform group-hover:shadow-2xl group-hover:-translate-y-2 flex items-center justify-center overflow-hidden">
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <span className="text-sm font-medium group-hover:text-blue-600 transition-colors duration-300">
              {tool.name}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ToolsTechnologies;