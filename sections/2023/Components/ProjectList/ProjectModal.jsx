import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Calendar, Briefcase, Github, Globe } from 'lucide-react';

const ProjectModal = ({ isOpen, onClose, project, lang }) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      // Small delay to allow display: block to apply before transition
      setTimeout(() => setIsVisible(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      // Wait for transition to finish before unmounting
      setTimeout(() => setIsRendered(false), 300);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isRendered || !project) return null;

  const description = project.description && project.description[lang]
    ? project.description[lang]
    : (project.description?.es || 'Detailed description coming soon.');

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>

      {/* Modal Container */}
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-indigo-950 border border-gray-700/50 rounded-2xl shadow-2xl transition-all duration-300 transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white/70 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header Area */}
        <div className="p-6 sm:p-8 border-b border-gray-700/50">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 mb-2 pr-10">
            {project.name}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base text-gray-300 mt-4">
            <div className="flex items-center gap-1.5">
              <Briefcase size={16} className="text-blue-400" />
              <span className="font-medium text-white">{project.role}</span>
            </div>
            <div className="flex items-center gap-1.5 opacity-80">
              <Calendar size={16} />
              <span>{project.year}</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main Description */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-blue-500 pl-3">
                {lang === 'en' ? 'Project Overview' : lang === 'pt' ? 'Visão Geral do Projeto' : 'Visión General del Proyecto'}
              </h3>
              <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                {description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {project.url && project.url !== 'N/A' && (
                <div className="mt-8">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-900/50"
                  >
                    <Globe size={18} />
                    {lang === "en" ? "More details" : lang === "pt" ? "Mais detalhes" : "Más detalles"}
                  </a>
                </div>
              )}
            </div>

            {/* Sidebar Details */}
            <div className="space-y-8">
              {/* Technologies */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-8 h-px bg-gray-600"></div>
                  {lang === 'en' ? 'Tech Stack' : lang === 'pt' ? 'Tecnologias' : 'Stack Tecnológico'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={`${project.name}-modal-tech-${index}`}
                      className="px-3 py-1.5 bg-gray-800 border border-gray-700 text-gray-200 text-xs sm:text-sm rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
