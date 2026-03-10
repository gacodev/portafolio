import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Database, FileCode, Users } from 'lucide-react';

const t = (lang, es, en, pt) => ({ es, en, pt })[lang] || en;

const migrationProjects = [
  {
    year: 2025,
    projects: [
      {
        name: "Apache Kafka — Conduktor → AKHQ + ZooKeeper → KRaft",
        description: {
          es: "Migración completa de la plataforma de gestión Kafka de Conduktor a AKHQ desplegado en Kubernetes, con mapeo de roles de Active Directory a grupos AKHQ para gestión de permisos. Simultáneamente se migró de ZooKeeper a Kafka 4.x con modo KRaft para coordinación nativa de brokers.",
          en: "Complete migration of the Kafka management platform from Conduktor to AKHQ deployed on Kubernetes, with Active Directory role mapping to AKHQ groups for permission management. Simultaneously migrated from ZooKeeper to Kafka 4.x with KRaft mode for native broker coordination.",
          pt: "Migração completa da plataforma de gestão Kafka de Conduktor para AKHQ implantado no Kubernetes, com mapeamento de roles do Active Directory para grupos AKHQ para gestão de permissões. Simultaneamente migrou-se do ZooKeeper para Kafka 4.x com modo KRaft para coordenação nativa de brokers."
        },
        details: {
          activeClients: 10000
        },
        highlights: [
          {
            icon: "shield",
            title: { es: "Mapeo AD → AKHQ Groups", en: "AD → AKHQ Groups Mapping", pt: "Mapeamento AD → AKHQ Groups" },
            desc: { es: "Traducción de roles de AD a grupos AKHQ para reutilizar la estructura existente y asignar permisos de gestión según nivel de acceso", en: "AD roles translated to AKHQ groups to reuse existing structure and assign management permissions by access level", pt: "Roles do AD traduzidos para grupos AKHQ para reutilizar a estrutura existente e atribuir permissões por nível de acesso" }
          },
          {
            icon: "file",
            title: { es: "Reporte de Confiabilidad MDS", en: "MDS Reliability Report", pt: "Relatório de Confiabilidade MDS" },
            desc: { es: "Validación dinámica de consistencia entre permisos MDS y configuración YAML con generación automática de archivos ante diferencias", en: "Dynamic consistency validation between MDS permissions and YAML config with automatic file generation on differences", pt: "Validação dinâmica de consistência entre permissões MDS e configuração YAML com geração automática de arquivos em caso de diferenças" }
          },
          {
            icon: "database",
            title: { es: "Kafka Connect & Sinks", en: "Kafka Connect & Sinks", pt: "Kafka Connect & Sinks" },
            desc: { es: "Gestión de conectores con drivers adicionales para múltiples bases de datos y Schema Registry para versionamiento", en: "Connector management with additional drivers for multiple databases and Schema Registry for versioning", pt: "Gestão de conectores com drivers adicionais para múltiplos bancos de dados e Schema Registry para versionamento" }
          },
          {
            icon: "zap",
            title: { es: "Automatización Python + GitOps", en: "Python Automation + GitOps", pt: "Automação Python + GitOps" },
            desc: { es: "Scripts para comparación MDS vs YAML, generación de configuraciones y administración como código", en: "Scripts for MDS vs YAML comparison, configuration generation, and administration as code", pt: "Scripts para comparação MDS vs YAML, geração de configurações e administração como código" }
          }
        ],
        technologies: [
          "Python", "YAML", "Kubernetes", "AKHQ", "MDS", "Kafka Connect",
          "Bootstrap Servers", "Schema Registry", "Active Directory", "KRaft", "Helm"
        ],
        achievements: {
          es: [
            "Eliminación de dependencia de ZooKeeper con migración a KRaft",
            "Reutilización de grupos AD existentes para permisos AKHQ",
            "Reportes automáticos de consistencia MDS vs YAML",
            "Soporte para sinks con múltiples bases de datos via Kafka Connect"
          ],
          en: [
            "Eliminated ZooKeeper dependency with KRaft migration",
            "Reused existing AD groups for AKHQ permissions",
            "Automated MDS vs YAML consistency reports",
            "Multi-database sink support via Kafka Connect"
          ],
          pt: [
            "Eliminação da dependência do ZooKeeper com migração para KRaft",
            "Reutilização de grupos AD existentes para permissões AKHQ",
            "Relatórios automáticos de consistência MDS vs YAML",
            "Suporte a sinks com múltiplos bancos de dados via Kafka Connect"
          ]
        }
      }
    ]
  },
  {
    year: 2023,
    projects: [
      {
        name: "Aula Digital Comfama",
        url: "https://auladigital.comfama.com",
        description: {
          es: "Migración integral y automatizada de una plataforma educativa monolítica a una arquitectura de alta disponibilidad, incluyendo la actualización de contenidos (blobs, cursos, notas etc), optimización de plugins y modernización de integraciones",
          en: "Comprehensive and automated migration of a monolithic educational platform to a high-availability architecture, including content updates (videos, courses, grades etc), plugin optimization, and modernization of integrations",
          pt: "Migração abrangente e automatizada de uma plataforma educacional monolítica para uma arquitetura de alta disponibilidade, incluindo atualizações de conteúdo (vídeos, cursos, notas etc), otimização de plugins e modernização de integrações"
        },
        details: {
          sourceOS: "Ubuntu 18.04 LTS",
          targetOS: "Ubuntu 22.04 LTS",
          environments: ["Desarrollo", "Integración", "Producción"],
          activeUsers: 50000
        },
        technologies: [
          "Ansible", "Azure DevOps", "Azure Virtual Machines", "Autoscale Sets",
          "PHP", "MySQL", "Moodle", "Git", "SQL", "Bash", "Python", "Vimeo API",
          "Azure Blob Storage", "Az CLI", "AzCopy"
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
          ],
          pt: [
            "Implementação de infraestrutura em redes privadas",
            "Aplicação de melhores práticas de segurança",
            "Automação completa do processo de migração",
            "Melhoria na escalabilidade e desempenho do sistema"
          ]
        }
      }
    ]
  }
];

const highlightIcons = {
  shield: Shield,
  file: FileCode,
  database: Database,
  zap: Zap,
  users: Users,
};

export const MigrationComponent = ({ lang }) => {
  return (
    <div id="migrations" className="w-full px-4 py-16 md:px-8 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center text-white mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t(lang, 'Migraciones', 'Migrations', 'Migrações')}
      </motion.h2>
      <p className="text-sm text-slate-400 text-center mb-12 max-w-xl mx-auto">
        {t(lang,
          'Proyectos de migración de plataformas e infraestructura',
          'Platform and infrastructure migration projects',
          'Projetos de migração de plataformas e infraestrutura'
        )}
      </p>

      {migrationProjects.map((yearData) => (
        <div key={yearData.year} className="mb-12">
          {/* Year badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {yearData.year}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/40 to-transparent" />
          </div>

          <div className="space-y-6">
            {yearData.projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                          {project.name}
                        </a>
                      ) : project.name}
                    </h3>
                    {project.details?.activeUsers && (
                      <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/15 border border-blue-500/25 rounded-full text-xs font-semibold text-blue-300">
                        <Users className="w-3 h-3" />
                        {project.details.activeUsers.toLocaleString()} {t(lang, 'usuarios activos', 'active users', 'usuários ativos')}
                      </span>
                    )}
                    {project.details?.activeClients && (
                      <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/15 border border-amber-500/25 rounded-full text-xs font-semibold text-amber-300">
                        <Database className="w-3 h-3" />
                        {project.details.activeClients.toLocaleString()} {t(lang, 'clientes activos', 'active clients', 'clientes ativos')}
                      </span>
                    )}
                  </div>

                  <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-5">
                    {project.description[lang] || project.description.en}
                  </p>

                  {/* Migration details (source → target) */}
                  {project.details && (
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      <span className="px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-lg text-xs font-medium text-red-300">
                        {project.details.sourceOS}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500" />
                      <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg text-xs font-medium text-green-300">
                        {project.details.targetOS}
                      </span>
                      {project.details.environments && (
                        <span className="ml-auto text-xs text-slate-500">
                          {project.details.environments.length} {t(lang, 'ambientes', 'environments', 'ambientes')}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Highlight cards (for Kafka migration) */}
                  {project.highlights && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                      {project.highlights.map((h, i) => {
                        const Icon = highlightIcons[h.icon] || Zap;
                        return (
                          <div key={i} className="flex items-start gap-2.5 bg-slate-900/50 p-3.5 rounded-xl border border-slate-700/30">
                            <Icon className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                            <div>
                              <h5 className="text-xs font-bold text-slate-200 mb-1">
                                {h.title[lang] || h.title.en}
                              </h5>
                              <p className="text-[11px] text-slate-400 leading-relaxed">
                                {h.desc[lang] || h.desc.en}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Footer: Technologies + Achievements */}
                <div className="border-t border-slate-700/30 bg-slate-900/30 px-6 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Technologies */}
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                        {t(lang, 'Tecnologías', 'Technologies', 'Tecnologias')}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 bg-blue-500/10 text-blue-300 text-[10px] sm:text-xs rounded-md border border-blue-500/20 font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                        {t(lang, 'Logros', 'Achievements', 'Conquistas')}
                      </h4>
                      <ul className="space-y-1.5">
                        {(project.achievements[lang] || project.achievements.en).map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="text-green-400 mt-0.5 shrink-0">&#10003;</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MigrationComponent;
