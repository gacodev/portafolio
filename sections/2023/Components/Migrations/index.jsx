import React from 'react';
import { motion } from 'framer-motion';

const migrationProjects = [
  {
    year: 2023,
    projects: [
      {
        name: "Aula Digital Comfama",
        url: "https://auladigital.comfama.com",
        description: {
          es: "Migración integral y automatizada de una plataforma educativa monolítica a una arquitectura de alta disponibilidad, incluyendo la actualización de contenidos(blobs, cursos, notas etc), optimización de plugins y modernización de integraciones",
          en: "Comprehensive and automated migration of a monolithic educational platform to a high-availability architecture, including content updates (videos, course, califications etc), plugin optimization, and modernization of integrations"
        },
        details: {
          sourceOS: "Ubuntu 18.04 LTS",
          targetOS: "Ubuntu 22.04 LTS",
          environments: ["Desarrollo", "Integración", "Producción"],
          activeUsers: 50000
        },
        technologies: [
          "Ansible", "Azure DevOps", "Azure Virtual Machines", "Autoscale sets",
          "PHP", "MySQL", "Moodle", "Git", "SQL", "Bash", "Python", "Vimeo API",
          "Azure Blob Storage", "Az cli", "Az copy"
        ],
        achievements: {
          es: [
            "Implementación de infraestructura en redes privadas",
            "Aplicación de mejores prácticas de seguridad",
            "Automatización completa del proceso de migración",
            "Mejora en la escalabilidad y rendimiento del sistema"
          ],
          en: [
            "Implementation of infrastructure in private networks",
            "Application of security best practices",
            "Full automation of the migration process",
            "Improvement in system scalability and performance"
          ]
        }
      }
    ]
  }
];

export const MigrationComponent = ({ lang }) => {
  const t = (es, en) => lang === 'es' ? es : en;

  return (
    <div className="w-full px-4 py-16 md:px-8">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        {t('Migraciones', 'Migrations')}
      </h2>
      {migrationProjects.map((yearData) => (
        <div key={yearData.year} className="mb-16">
          <h3 className="text-3xl font-semibold text-white mb-8">{yearData.year}</h3>
          {yearData.projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                <a href={project.url} className="hover:text-blue-300 transition-colors duration-300">{project.name}</a>
              </h3>
              <p className="text-gray-300 mb-6">{project.description[lang]}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{t('Detalles de Migración', 'Migration Details')}</h4>
                  <p className="text-gray-300">
                    {t('Desde', 'From')} <span className="font-semibold">{project.details.sourceOS}</span> &#x27A1; <span className="font-semibold">{project.details.targetOS}</span>
                  </p>
                  <h5 className="text-lg font-semibold text-white mt-4 mb-2">{t('Ambientes', 'Environments')}:</h5>
                  <ul className="list-disc list-inside text-gray-300">
                    {project.details.environments.map((env, i) => (
                      <li key={i}>{env}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{t('Tecnologías utilizadas', 'Technologies used')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-semibold text-white mt-6 mb-2">{t('Logros', 'Achievements')}</h4>
              <ul className="list-disc list-inside text-gray-300">
                {project.achievements[lang].map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-blue-500 bg-opacity-20 rounded-lg">
                <h3 className="text-xl font-semibold text-white">
                  {t(`Usuarios Activos: ${project.details.activeUsers}`, `Active Users: ${project.details.activeUsers}`)}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MigrationComponent;