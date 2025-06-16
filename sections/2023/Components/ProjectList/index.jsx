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
    <div className="w-full px-4 md:px-8" id="timeline">
      <h2 className="text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg">
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
              width: 'clamp(36px, 10vw, 50px)', // Ajuste: más pequeño y evitar superposición
              height: 'clamp(36px, 10vw, 50px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            icon={<span className="text-white font-bold text-lg md:text-xl">{company.projects[0]?.year}</span>}
            contentStyle={{
              marginLeft: 'clamp(0px, 8vw, 80px)',
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: 'none',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              width: '100%',
              margin: '0 auto',
              padding: '1.5rem',
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.2)' }}
          >
            <h3 className="text-3xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 text-center mb-8 drop-shadow-lg transform hover:scale-105 transition-transform duration-300">
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
            {company.projects.map((project) => (
              <div key={`${company.company}-${project.name}-${project.year}`} className="flex flex-col md:flex-row items-start rounded-lg p-4 md:p-6 shadow-md transition-transform transform hover:scale-105 mb-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm w-full">
                <div className="flex-shrink-0 mb-4 md:mr-6">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={100}
                      height={100}
                      className="rounded-lg object-cover"
                    />
                  ) : (
                    <GravatarImage name={project.name} size={100} />
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-md">{project.name}</h3>
                  <p className="text-blue-300 text-lg sm:text-xl mb-2 font-semibold">{project.role}</p>
                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    {project.technologies.slice(0, 5).map((tech, index) => (
                      <span key={`${project.name}-${tech}-${index}`} className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                  {project.url && project.url !== 'N/A' && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 transition-colors duration-300 text-xl font-semibold"
                    >
                      {lang === "en" ? "Visit Project" : "Visitar Proyecto"} →
                    </a>
                  )}
                </div>
              </div>
            ))}
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
