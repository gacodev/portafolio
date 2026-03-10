import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import projects from "../../../data/projects";
import PropTypes from 'prop-types';
import GravatarImage from "./GravatarImage";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ProjectModal from "./ProjectModal";
import { Eye } from 'lucide-react';

export const ProjectList = ({ lang }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Re-group projects by year
  const projectsByYear = {};
  projects.forEach((company) => {
    company.projects.forEach((project) => {
      if (!projectsByYear[project.year]) {
        projectsByYear[project.year] = [];
      }
      projectsByYear[project.year].push({
        ...project,
        companyName: company.company,
        companyUrl: company.url,
      });
    });
  });

  const sortedYears = Object.keys(projectsByYear).sort((a, b) => b - a);

  return (
    <>
      <div className="w-full px-2 sm:px-4 lg:px-8" id="timeline">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center text-white mb-6 sm:mb-8 lg:mb-12 drop-shadow-lg">
          {{ en: "Software Projects Timeline", es: "Línea de Tiempo de Proyectos de Software", pt: "Linha do Tempo de Projetos de Software" }[lang] || "Software Projects Timeline"}
        </h2>
        <VerticalTimeline layout="1-column">
          {sortedYears.map((year) => (
            <VerticalTimelineElement
              key={year}
              date={year}
              iconStyle={{
                background: '#ff6b6b', // Distinct color for the year
                color: '#fff',
                width: '64px',
                height: '64px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 0 0 4px #1a1a2e, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)',
                zIndex: 20
              }}
              icon={<span className="text-white font-black text-sm sm:text-base">{year}</span>}
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.05)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                width: 'calc(100% - 80px)', // explicitly leave 80px of space on the right for the timeline line/icon
                margin: '0',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
              }}
              contentArrowStyle={{ borderRight: '10px solid rgba(255, 255, 255, 0.1)', top: '24px' }}
            >
              <div className="flex flex-col gap-6 lg:gap-8">
                {projectsByYear[year].map((project, idx) => (
                  <div
                    key={`${project.companyName}-${project.name}-${idx}`}
                    className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start rounded-xl p-4 sm:p-5 lg:p-6 xl:p-8 shadow-xl transition-all transform hover:scale-[1.02] hover:bg-gray-800/80 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md w-full cursor-pointer border border-gray-700/50 hover:border-blue-500/50"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex-shrink-0 mb-4 sm:mb-0 lg:mb-4 xl:mb-0 sm:mr-6 lg:mr-0 xl:mr-8 w-full sm:w-auto lg:w-full xl:w-auto flex justify-center sm:block lg:justify-center xl:block">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={100}
                          height={100}
                          className="rounded-lg object-cover sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px] xl:w-[120px] xl:h-[120px]"
                        />
                      ) : (
                        <GravatarImage name={project.name} size={100} className="sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px] xl:w-[120px] xl:h-[120px]" />
                      )}
                    </div>
                    <div className="flex-grow w-full flex flex-col md:flex-row justify-between gap-5">
                      <div className="w-full md:w-auto flex-grow">
                        <div className="mb-1 text-orange-400 font-semibold text-sm sm:text-base uppercase tracking-wider">
                          {project.companyUrl && project.companyUrl !== "N/A" ? (
                            <Link href={project.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-orange-300 transition-colors" onClick={e => e.stopPropagation()}>
                              {project.companyName}
                            </Link>
                          ) : project.companyName}
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white mb-2 drop-shadow-md text-center sm:text-left group-hover:text-blue-400 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-blue-300 text-base sm:text-lg lg:text-xl md:text-2xl mb-3 font-semibold text-center sm:text-left">{project.role}</p>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 justify-center sm:justify-start">
                          {project.technologies.slice(0, 5).map((tech, index) => (
                            <span key={`${project.name}-${tech}-${index}`} className="bg-blue-500/20 border border-blue-500/40 text-blue-100 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 5 && (
                            <span className="bg-gray-700 text-gray-300 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium">
                              +{project.technologies.length - 5}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="w-full md:w-auto flex-shrink-0 text-center md:text-right mt-4 md:mt-0 flex justify-center md:justify-end items-center">
                        <button
                          onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                          className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full shadow-lg shadow-blue-900/40 transition-all duration-300 hover:shadow-blue-900/60 transform hover:-translate-y-0.5 hover:scale-110"
                          title={lang === "en" ? "View Details" : lang === "pt" ? "Ver Detalhes" : "Ver Detalles"}
                        >
                          <Eye size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
        lang={lang}
      />
    </>
  );
};

ProjectList.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default ProjectList;
