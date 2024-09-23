import React from "react";
import Link from "next/link";
import Image from "next/image";
import projects from "./projects"; // Import the projects array
import GravatarImage from "./GravatarImage"; // Import the new GravatarImage component

export const ProjectList = ({ lang }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        {lang === "en" ? "Software Projects Timeline" : "Línea de Tiempo de Proyectos de Software"}
      </h1>
      {projects.map((company, companyIndex) => (
        <div key={companyIndex} className="mb-16">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-8 drop-shadow-lg">
            {company.url ? (
              <Link
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-transform transform hover:scale-105 duration-300"
              >
                {company.company}
              </Link>
            ) : (
              company.company
            )}
          </h2>
          <div className="relative">
            {company.projects.map((project, projectIndex) => (
              <div key={projectIndex} className="mb-16 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row items-start mb-4">
                      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
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
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-1">{project.name}</h3>
                        <p className="text-blue-300 mb-1">{project.role}</p>
                        <p className="text-blue-300 mb-2">{project.year}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 5).map((tech, i) => (
                        <span key={i} className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                    {project.url && project.url !== 'N/A' && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-100 transition-colors duration-300"
                      >
                        {lang === "en" ? "Visit Project" : "Visitar Proyecto"} →
                      </a>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-1 bg-blue-500 h-full absolute left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0"></div>
                  <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;