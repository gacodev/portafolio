import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Code, Git, Shield, Globe, Calendar } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

const projects = [
  { name: 'AppiMotion+', category: 'Movilidad', ci: 30, cd: 27, owasp: 2, incidents: 5, url: 'https://www.appimotion.com/', year: 2023 },
  { name: 'Carbonlytics', category: 'GreenTech', ci: 42, cd: 30, owasp: 2, incidents: 1, url: 'https://www.carbonlytics.com', year: 2022 },
  { name: 'Trackmile', category: 'Movilidad', ci: 31, cd: 27, owasp: 2, incidents: 3, url: 'https://www.trackmile.co/', year: 2023 },
  { name: 'Inspira', category: 'Recursos Humanos', ci: 24, cd: 9, owasp: 2, incidents: 1, url: 'N/A', year: 2022 },
  { name: 'Arpex', category: 'Geo referencia', ci: 14, cd: 14, owasp: 2, incidents: 2, url: 'N/A', year: 2021 },
  { name: 'DCT', category: 'Energético', ci: 9, cd: 0, owasp: 0, incidents: 0, url: 'N/A', year: 2021 },
  { name: 'Traffig', category: 'Dispositivos IoT/Edge', ci: 37, cd: 54, owasp: 2, incidents: 4, url: 'www.inteia.com.co', year: 2023 },
  { name: 'Deep', category: 'AI/ML', ci: 15, cd: 15, owasp: 2, incidents: 0, url: 'N/A', year: 2022 },
  { name: 'Gobierno Nube', category: 'Infraestructura', ci: 2, cd: 0, owasp: 0, incidents: 2, url: 'N/A', year: 2021 },
];

const translations = {
  en: {
    latestProjects: 'Latest Projects',
    incidents: 'Incidents',
    visitProject: 'Visit Project',
    ciPipelines: 'CI Pipelines',
    cdPipelines: 'CD Pipelines',
    owaspPipelines: 'OWASP Pipelines',
    totalPipelines: 'Total Pipelines',
    year: 'Year',
  },
  es: {
    latestProjects: 'Últimos Proyectos',
    incidents: 'Incidentes',
    visitProject: 'Visitar Proyecto',
    ciPipelines: 'Pipelines CI',
    cdPipelines: 'Pipelines CD',
    owaspPipelines: 'Pipelines OWASP',
    totalPipelines: 'Total de Pipelines',
    year: 'Año',
  }
};

const ProjectBreakdown = ({ lang }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const t = translations[lang];

  const getChartData = (project) => ({
    labels: [t.ciPipelines, t.cdPipelines, t.owaspPipelines],
    datasets: [
      {
        data: [project.ci, project.cd, project.owasp],
        backgroundColor: ['#66bb6a', '#42a5f5', '#ffca28'],
        hoverBackgroundColor: ['#57a64a', '#1e88e5', '#ffb300'],
      },
    ],
  });

  return (
    <div id="project-breakdown" className="container mx-auto px-4 py-8 pt-10">
      <h2 className="text-3xl font-bold mb-8 mt-4 text-center">{t.latestProjects}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{project.category}</p>
            <div className="flex justify-between items-center text-gray-700">
              <div className="flex items-center">
                <Code size={18} className="mr-2 text-gray-600" />
                <span>{project.ci + project.cd}</span>
              </div>
              <div className="flex items-center">
                <Shield size={18} className="mr-2 text-gray-600" />
                <span>{project.owasp}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2 text-gray-600" />
                <span>{project.year}</span>
              </div>
              <div className={`flex items-center ${project.incidents > 0 ? 'text-red-600' : 'text-gray-700'}`}>
                <span>{project.incidents} {t.incidents}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white text-black p-8 rounded-lg max-w-4xl w-full shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{selectedProject.name}</h3>
              <p className="text-md text-gray-600 mb-4">{selectedProject.category}</p>
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div className="md:w-1/2">
                  <p className="mb-2 flex items-center"><Code size={20} className="mr-2" /> {t.ciPipelines}: {selectedProject.ci}</p>
                  <p className="mb-2 flex items-center"><Git size={20} className="mr-2" /> {t.cdPipelines}: {selectedProject.cd}</p>
                  <p className="mb-2 flex items-center"><Shield size={20} className="mr-2" /> {t.owaspPipelines}: {selectedProject.owasp}</p>
                  <p className={`mb-4 font-semibold ${selectedProject.incidents > 0 ? 'text-red-600' : 'text-gray-800'}`}>
                    {t.incidents}: {selectedProject.incidents}
                  </p>
                  <p className="mb-4 font-semibold">{t.totalPipelines}: {selectedProject.ci + selectedProject.cd + selectedProject.owasp}</p>
                  <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Globe size={20} className="mr-2" /> {t.visitProject}
                  </a>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                  <Pie data={getChartData(selectedProject)} />
                </div>
              </div>
              <p className="text-sm text-gray-600">{t.year}: {selectedProject.year}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectBreakdown;
