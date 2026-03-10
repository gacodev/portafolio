import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  // Original Tools & Technologies (with documentation URLs)
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
  // Merged from TechList (unique items not already above)
  { name: 'ReactJS', logo: '/tecnologies/react.webp' },
  { name: 'Angular', logo: '/tecnologies/angular.webp' },
  { name: 'Tailwind CSS', logo: '/tecnologies/tailwind.svg' },
  { name: 'Windows Server', logo: '/tecnologies/win.svg' },
  { name: 'Sequelize', logo: '/tecnologies/sequelize.webp' },
  { name: 'Prisma ORM', logo: '/tecnologies/prisma.webp' },
  { name: 'Netlify', logo: '/tecnologies/netlify.webp' },
  { name: 'Vercel', logo: '/tecnologies/vercel.webp' },
  { name: 'TypeScript', logo: '/tecnologies/typescript.webp' },
  { name: 'Next.js', logo: '/tecnologies/nextjs.webp' },
  { name: 'TypeORM', logo: '/tecnologies/typeorm.webp' },
  { name: 'MySQL', logo: '/tecnologies/mysql.webp' },
  { name: 'PostgreSQL', logo: '/tecnologies/postgres.webp' },
  { name: 'Laravel', logo: '/tecnologies/laravel.webp' },
  { name: 'NestJS', logo: '/tecnologies/nestjs.webp' },
  { name: 'GraphQL', logo: '/tecnologies/graph.webp' },
  { name: 'GitHub Actions', logo: '/tecnologies/gha.webp' },
  { name: 'Jest', logo: '/tecnologies/jest.avif' },
  { name: 'Puppeteer', logo: '/tecnologies/puppeter.webp' },
  { name: 'Linux', logo: '/tecnologies/linux.webp' },
  { name: 'Serverless Framework', logo: '/tecnologies/sls.webp' },
  { name: 'Firebase', logo: '/tecnologies/firebase.webp' },
  { name: 'Node.js', logo: '/tecnologies/nodejs.webp' },
];

const ToolsTechnologies = ({ lang = 'en' }) => {
  const title = { en: 'Tools & Technologies', es: 'Herramientas y Tecnologías', pt: 'Ferramentas e Tecnologias' }[lang] || 'Tools & Technologies';

  return (
    <div id="tools-technologies" className="mb-20 px-4 pt-10">
      <h2 className="text-3xl font-bold mb-12 mt-8 text-center">{title}</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6">
        {tools.map((tool) => {
          const content = (
            <>
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-3 bg-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform group-hover:shadow-2xl group-hover:-translate-y-2 flex items-center justify-center overflow-hidden">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <span className="text-xs sm:text-sm font-medium group-hover:text-blue-400 transition-colors duration-300 text-center">
                {tool.name}
              </span>
            </>
          );

          return tool.url ? (
            <motion.a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {content}
            </motion.a>
          ) : (
            <motion.div
              key={tool.name}
              className="flex flex-col items-center justify-center group cursor-default"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {content}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ToolsTechnologies;