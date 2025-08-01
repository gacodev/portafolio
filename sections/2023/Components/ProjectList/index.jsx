import React from "react";
import Link from "next/link";
import Image from "next/image";
import projects from "../../../data/projects";
import PropTypes from 'prop-types';
import GravatarImage from "./GravatarImage";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const ProjectList = ({ lang }) => {
  return (
    <div className="w-full px-2 sm:px-4 lg:px-8" id="timeline">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center text-white mb-6 sm:mb-8 lg:mb-12 drop-shadow-lg">
        {lang === "en" ? "Software Projects Timeline" : "Línea de Tiempo de Proyectos de Software"}
      </h2>
      <VerticalTimeline layout="1-column"> {/* Agregar layout para una columna */}
        {projects.map((company) => (
          <VerticalTimelineElement
            key={company.company}
            date={company.projects[0]?.year}
            iconStyle={{
              background: '#4A90E2',
              color: '#fff',
              width: 'clamp(32px, 6vw, 45px)', // Optimizado para iPad Pro
              height: 'clamp(32px, 6vw, 45px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            icon={<span className="text-white font-bold text-xs sm:text-sm lg:text-xl">{company.projects[0]?.year}</span>}
            contentStyle={{
              marginLeft: 'clamp(0px, 4vw, 70px)', // Mejor para iPad Pro
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: 'none',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              width: '100%',
              margin: '0 auto',
              padding: 'clamp(1rem, 2.5vw, 1.5rem)', // Mejor spacing para iPad Pro
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.2)' }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 text-center mb-4 sm:mb-6 lg:mb-8 drop-shadow-lg transform hover:scale-105 transition-transform duration-300">
              {company.url ? (
                <Link
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-300"
                >
                  {company.company}
                </Link>
              ) : (
                company.company
              )}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-4 lg:gap-6 xl:gap-4">
              {company.projects.map((project) => (
                <div key={`${company.company}-${project.name}-${project.year}`} className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start rounded-lg p-3 sm:p-4 lg:p-4 xl:p-6 shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm w-full">
                <div className="flex-shrink-0 mb-3 sm:mb-4 lg:mb-3 xl:mb-4 sm:mr-4 lg:mr-0 xl:mr-6 w-full sm:w-auto lg:w-full xl:w-auto flex justify-center sm:block lg:justify-center xl:block">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] xl:w-[100px] xl:h-[100px]"
                    />
                  ) : (
                    <GravatarImage name={project.name} size={80} className="sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] xl:w-[100px] xl:h-[100px]" />
                  )}
                </div>
                <div className="flex-grow w-full">
<<<<<<< HEAD
                  <h3 className="text-lg sm:text-xl lg:text-lg xl:text-2xl font-bold text-white mb-2 drop-shadow-md text-center sm:text-left lg:text-center xl:text-left">{project.name}</h3>
                  <p className="text-blue-300 text-sm sm:text-base lg:text-sm xl:text-lg mb-2 font-semibold text-center sm:text-left lg:text-center xl:text-left">{project.role}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 mb-3 sm:mb-4 lg:mb-3 xl:mb-4 justify-center sm:justify-start lg:justify-center xl:justify-start">
                    {project.technologies.slice(0, 5).map((tech, index) => (
                      <span key={`${project.name}-${tech}-${index}`} className="bg-blue-500 text-white text-xs sm:text-sm lg:text-xs xl:text-sm px-2 sm:px-3 py-1 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="bg-blue-500 text-white text-xs sm:text-sm lg:text-xs xl:text-sm px-2 sm:px-3 py-1 rounded-full font-medium">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
=======
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 drop-shadow-md text-center sm:text-left">{project.name}</h3>
                  <p className="text-blue-300 text-sm sm:text-base lg:text-lg xl:text-xl mb-2 font-semibold text-center sm:text-left">{project.role}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 mb-3 sm:mb-4 justify-center sm:justify-start">
                    {project.technologies.map((tech, index) => (
                      <span key={`${project.name}-${tech}-${index}`} className="bg-blue-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
>>>>>>> feature/blog
                  </div>
                  {project.url && project.url !== 'N/A' && (
                    <div className="text-center sm:text-left">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-100 transition-colors duration-300 text-sm sm:text-base lg:text-xl font-semibold"
                      >
                        {lang === "en" ? "Visit Project" : "Visitar Proyecto"} →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

ProjectList.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default ProjectList;
