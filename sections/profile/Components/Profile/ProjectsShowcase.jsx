import React, { useState, useEffect } from 'react';
import { X, Briefcase, Calendar, ChevronRight, ExternalLink, Building2, Eye } from 'lucide-react';
import projects from '../../../data/projects';
import Image from 'next/image';
import GravatarImage from '../../../2023/Components/ProjectList/GravatarImage';
import ProjectModal from '../../../2023/Components/ProjectList/ProjectModal';

const t = (lang, es, en, pt) => ({ es, en, pt })[lang] || en;

const ProjectsShowcase = ({ isOpen, onClose, lang }) => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const totalProjects = projects.reduce((acc, c) => acc + c.projects.length, 0);
  const totalCompanies = projects.length;
  const yearRange = (() => {
    const years = projects.flatMap(c => c.projects.map(p => p.year));
    return `${Math.min(...years)} - ${Math.max(...years)}`;
  })();

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 border border-slate-700/50 rounded-2xl shadow-2xl transition-all duration-300 transform ${isVisible ? 'scale-100' : 'scale-95'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white/70 hover:text-white transition-colors z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-700/50">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 mb-1">
            {t(lang, 'Trayectoria Profesional', 'Professional Track Record', 'Trajetória Profissional')}
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            {t(lang, 'Proyectos destacados por empresa', 'Key projects by company', 'Projetos destacados por empresa')}
          </p>
          {/* Quick stats */}
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <Building2 size={14} className="text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">{totalCompanies} {t(lang, 'empresas', 'companies', 'empresas')}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <Briefcase size={14} className="text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">{totalProjects} {t(lang, 'proyectos', 'projects', 'projetos')}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
              <Calendar size={14} className="text-cyan-400" />
              <span className="text-sm text-cyan-300 font-medium">{yearRange}</span>
            </div>
          </div>
        </div>

        {/* Company List */}
        <div className="p-4 sm:p-6 space-y-3">
          {projects.map((company) => {
            const isExpanded = selectedCompany === company.company;
            const latestYear = Math.max(...company.projects.map(p => p.year));
            const techSet = [...new Set(company.projects.flatMap(p => p.technologies))];

            return (
              <div key={company.company} className="rounded-xl overflow-hidden border border-slate-700/50 bg-slate-800/30">
                {/* Company Header - Clickable */}
                <button
                  onClick={() => setSelectedCompany(isExpanded ? null : company.company)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-slate-800/60 transition-colors text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-lg shadow-blue-900/30">
                      {company.company.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white truncate">{company.company}</h3>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-0.5">
                        <span>{company.projects.length} {company.projects.length === 1 ? t(lang, 'proyecto', 'project', 'projeto') : t(lang, 'proyectos', 'projects', 'projetos')}</span>
                        <span className="text-slate-600">|</span>
                        <span>{latestYear}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={20} className={`text-slate-400 transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-90' : ''}`} />
                </button>

                {/* Expanded Projects */}
                {isExpanded && (
                  <div className="border-t border-slate-700/30 bg-slate-900/40">
                    {/* Tech cloud for company */}
                    <div className="px-4 sm:px-5 pt-3 pb-2 flex flex-wrap gap-1.5">
                      {techSet.slice(0, 10).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-slate-700/50 text-slate-400 text-[10px] rounded-md font-medium">
                          {tech}
                        </span>
                      ))}
                      {techSet.length > 10 && (
                        <span className="px-2 py-0.5 bg-slate-700/50 text-slate-500 text-[10px] rounded-md">+{techSet.length - 10}</span>
                      )}
                    </div>

                    {/* Project Cards */}
                    <div className="p-3 sm:p-4 space-y-3">
                      {company.projects.map((project, idx) => (
                        <div
                          key={`${company.company}-${project.name}-${idx}`}
                          className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-slate-800/80 to-slate-800/40 border border-slate-700/30 hover:border-blue-500/30 transition-all group"
                        >
                          {/* Project thumbnail */}
                          <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-slate-700/50 flex items-center justify-center">
                            {project.image ? (
                              <Image
                                src={project.image}
                                alt={project.name}
                                width={64}
                                height={64}
                                className="object-cover w-full h-full"
                              />
                            ) : (
                              <GravatarImage name={project.name} size={64} />
                            )}
                          </div>

                          {/* Project info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div className="min-w-0">
                                <h4 className="text-sm sm:text-base font-bold text-white truncate group-hover:text-blue-400 transition-colors">
                                  {project.name}
                                </h4>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <span className="text-xs text-blue-400 font-medium">{project.role}</span>
                                  <span className="text-[10px] text-slate-500 bg-slate-700/50 px-1.5 py-0.5 rounded">{project.year}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1 shrink-0">
                                <button
                                  onClick={() => setSelectedProject(project)}
                                  className="p-1.5 text-slate-500 hover:text-cyan-400 transition-colors rounded-md hover:bg-cyan-500/10"
                                  title={t(lang, 'Ver detalles', 'View details', 'Ver detalhes')}
                                >
                                  <Eye size={15} />
                                </button>
                                {project.url && project.url !== 'N/A' && (
                                  <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 text-slate-500 hover:text-blue-400 transition-colors rounded-md hover:bg-blue-500/10"
                                    onClick={(e) => e.stopPropagation()}
                                    title={t(lang, 'Sitio web', 'Website', 'Site')}
                                  >
                                    <ExternalLink size={14} />
                                  </a>
                                )}
                              </div>
                            </div>
                            <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                              {project.description?.[lang] || project.description?.es || ''}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {project.technologies.slice(0, 4).map((tech) => (
                                <span key={tech} className="px-1.5 py-0.5 bg-blue-500/10 text-blue-300 text-[10px] rounded border border-blue-500/20 font-medium">
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 4 && (
                                <span className="px-1.5 py-0.5 text-slate-500 text-[10px]">+{project.technologies.length - 4}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Company link */}
                    {company.url && (
                      <div className="px-4 sm:px-5 pb-3 text-right">
                        <a
                          href={company.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {t(lang, 'Ver empresa', 'View company', 'Ver empresa')}
                          <ExternalLink size={11} />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Reuse the same ProjectModal from the timeline */}
      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
        lang={lang}
      />
    </div>
  );
};

export default ProjectsShowcase;
