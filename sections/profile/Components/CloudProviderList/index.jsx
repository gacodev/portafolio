import React, { useState } from 'react';
import Image from "next/image";
import { XIcon, Code, Terminal, Eye, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cloudProviders, iacTools } from '../../../data/cloud';

const ExperienceTag = ({ years }) => (
  <div className="absolute top-0 right-0 overflow-hidden w-40 h-40">
    <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                    py-5 px-12 shadow-lg transform rotate-45 translate-x-[45%] -translate-y-[15%]
                    flex items-center text-center justify-center pointer-events-none">
      <span className="text-sm font-extrabold tracking-wider transform -rotate-45 justify-center">
        {years}+ '
      </span>
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, title, skills }) => {
  if (!isOpen) return null;

  // Group skills by their new category
  const categorizedSkills = skills.reduce((acc, skill) => {
    const defaultCat = "Other Services";
    const category = skill.category || defaultCat;
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill.name);
    return acc;
  }, {});

  // Pre-defined sort order for logical hierarchy (entry point -> compute/data -> management)
  const categoryOrder = [
    "Networking & Edge",
    "Security & Identity",
    "Compute & Serverless",
    "Containers",
    "Storage & DBs",
    "Management & DevOps"
  ];

  const sortedCategories = Object.keys(categorizedSkills).sort(
    (a, b) => {
      const idxA = categoryOrder.indexOf(a);
      const idxB = categoryOrder.indexOf(b);
      // fallback to end of list if not in order array
      return (idxA !== -1 ? idxA : 99) - (idxB !== -1 ? idxB : 99);
    }
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-2 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          className="bg-gray-900 border border-gray-700 rounded-xl p-5 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="sticky top-0 float-right z-20 p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition"
            aria-label="Close modal"
          >
            <XIcon size={24} />
          </button>

          <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
            <Share2 className="text-blue-400" size={32} />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {title} Architecture
            </h3>
          </div>

          <div className="relative">
            {/* Visual backbone line running vertically */}
            <div className="absolute left-[20px] sm:left-[32px] top-6 bottom-6 w-1 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/10 rounded-full z-0"></div>

            <div className="space-y-8 sm:space-y-12 relative z-10 w-full">
              {sortedCategories.map((category, index) => (
                <div key={category} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 relative group pl-2 sm:pl-4">

                  {/* Category Node / Circle */}
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gray-800 border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 mt-1 transition-transform group-hover:scale-110">
                    <span className="text-blue-400 font-bold text-xs sm:text-lg">{index + 1}</span>
                  </div>

                  {/* Horizontal visual connecting line */}
                  <div className="hidden sm:block absolute left-16 top-8 w-6 h-px bg-blue-500/50 -z-10 group-hover:bg-blue-400 transition-colors"></div>

                  <div className="flex-grow w-full bg-gray-800/60 border border-gray-700/50 rounded-xl p-4 sm:p-5 hover:border-blue-500/40 transition-colors shadow-lg ml-6 sm:ml-0">
                    <h4 className="text-sm sm:text-lg font-bold text-blue-300 uppercase tracking-widest mb-3 border-b border-gray-700 pb-2">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {categorizedSkills[category].map(skill => (
                        <span key={skill} className="px-2.5 py-1.5 text-xs sm:text-sm bg-gray-900 border border-gray-600 rounded-md text-gray-200 hover:text-white hover:border-blue-400 hover:shadow-[0_0_8px_rgba(59,130,246,0.3)] transition-all cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* End Point Dot */}
            <div className="absolute left-[18px] sm:left-[30px] bottom-0 w-3 h-3 rounded-full bg-blue-500 border border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10"></div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ArchitectureLines = () => (
  <div className="hidden lg:block relative w-full h-16 pointer-events-none mt-2 mb-2">
    <div className="absolute top-0 w-full h-8">
      <div className="absolute left-[16.66%] w-px h-full bg-blue-500/60 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
      <div className="absolute left-[50%] w-px h-full bg-blue-500/60 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
      <div className="absolute left-[83.33%] w-px h-full bg-blue-500/60 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
    </div>
    <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-blue-500/60 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
    <div className="absolute top-8 w-full h-8">
      <div className="absolute left-[12.5%] w-px h-full bg-blue-500/60 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
      <div className="absolute left-[37.5%] w-px h-full bg-blue-500/60 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
      <div className="absolute left-[62.5%] w-px h-full bg-blue-500/60 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
      <div className="absolute left-[87.5%] w-px h-full bg-blue-500/60 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
    </div>
  </div>
);

export const CloudProviderList = ({ lang }) => {
  const [modalContent, setModalContent] = useState(null);
  const title = lang === "en" ? "Cloud Experience" : lang === "pt" ? "Experiência em Nuvem" : "Experiencia en nube";
  const iacTitle = lang === "en" ? "Management & Infrastructure Tools" : lang === "pt" ? "Ferramentas de Gerenciamento" : "Herramientas de Gestión";
  const paragraph = lang === "en"
    ? "My preference for Infrastructure as Code (IaC) tools like Terraform and Pulumi enhances my productivity and enables more consistent, fault-tolerant deliveries. This approach allows me to represent infrastructure in code, facilitating progressive growth and better management. By adopting cutting-edge cloud technologies such as Docker, Hashicorp Vault, Packer, and Ansible, I streamline processes and reduce repetitive tasks, which is crucial in challenging situations and leads to more efficient and reliable cloud solutions."
    : lang === "pt"
      ? "Minha preferência por ferramentas de Infraestrutura como Código (IaC) como Terraform e Pulumi aumenta minha produtividade e permite entregas mais consistentes e tolerantes a falhas. Essa abordagem me permite representar a infraestrutura em código, facilitando um crescimento progressivo e um melhor gerenciamento. Ao adotar tecnologias de ponta em nuvem, como Docker, Hashicorp Vault, Packer e Ansible, eu otimizo processos e reduzo tarefas repetitivas, o que é crucial em situações desafiadoras e leva a soluções em nuvem mais eficientes e confiáveis."
      : "Mi preferencia por herramientas de Infraestructura como Código (IaC) como Terraform y Pulumi mejora mi productividad y permite entregas más consistentes y tolerantes a fallos. Este enfoque me permite representar la infraestructura en código, facilitando un crecimiento progresivo y una mejor gestión. Al adoptar tecnologías de vanguardia en la nube como Docker, Hashicorp Vault, Packer y Ansible, optimizo procesos y reduzco tareas repetitivas, lo cual es crucial en situaciones desafiantes y conduce a soluciones en la nube más eficientes y confiables.";

  const dynamicTools = [
    ...iacTools, // Includes Terraform and Pulumi
    {
      name: lang === "en" ? "Cloud CLIs" : "CLIs de Nube",
      logo: null,
      icon: <Terminal size={50} className="text-blue-400" />,
      items: ["AWS CLI", "Azure CLI", "gcloud"],
      color: "border-blue-500/40"
    },
    {
      name: "Cloud SDKs",
      logo: null,
      icon: <Code size={50} className="text-green-400" />,
      items: ["Node.js", "Python", "Go", "Bash"],
      color: "border-green-500/40"
    }
  ];

  return (
    <div className="w-full px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-white">{title}</h2>

      {/* Cloud Providers Grid (3 Columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full z-10 relative">
        {cloudProviders.map((provider) => (
          <div
            key={provider.name}
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl 
                       overflow-hidden border border-gray-700 transform transition duration-300 hover:scale-105 w-full flex flex-col justify-between"
          >
            <ExperienceTag years={Math.floor(provider.experience)} />
            <div className="p-4 sm:p-6 flex-grow flex flex-col">
              <h4 className="text-lg sm:text-xl font-semibold text-center mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
                {provider.name}
              </h4>
              <div className="flex justify-center mb-4 sm:mb-6">
                <Image
                  src={provider.logo}
                  alt={provider.name}
                  width={80}
                  height={80}
                  className="object-contain sm:w-[100px] sm:h-[100px]"
                />
              </div>
              <ul className="text-white text-xs sm:text-sm space-y-1 sm:space-y-2 mb-4 flex-grow">
                {provider.skills.slice(0, 6).map(skill => (
                  <li key={skill.name} className="flex items-center">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                    <span className="text-xs sm:text-sm truncate" title={skill.name}>{skill.name}</span>
                  </li>
                ))}
                {provider.skills.length > 6 && (
                  <li className="flex items-center text-gray-400 italic text-xs mt-1">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full mr-2 flex-shrink-0"></span>
                    + {provider.skills.length - 6} core components
                  </li>
                )}
              </ul>

              <div className="mt-auto pt-4 flex justify-center border-t border-gray-700/50">
                <button
                  onClick={() => setModalContent({ title: provider.name, skills: provider.skills })}
                  className="group flex justify-center items-center w-12 h-12 bg-gray-800 hover:bg-gray-700/80 rounded-full border border-blue-500/30 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                  aria-label={lang === "en" ? "Show Architecture Map" : "Ver Mapa de Arquitectura"}
                  title={lang === "en" ? "Show Architecture Map" : "Ver Mapa de Arquitectura"}
                >
                  <Eye className="text-blue-400 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300" size={22} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Connection Threads (Lines) */}
      <ArchitectureLines />

      {/* Tools Grid (4 Columns) */}
      <div className="mt-6 md:mt-0 mb-8 sm:mb-12 relative z-10">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-white text-center">{iacTitle}</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl mx-auto">
          {dynamicTools.map((tool) => (
            <div
              key={tool.name}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 sm:p-5 
                         flex flex-col items-center justify-start transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] 
                         transform hover:-translate-y-1 border ${tool.color || 'border-gray-700'} w-full group overflow-hidden`}
            >
              <div className="flex flex-col items-center z-10 w-full h-full relative">
                <div className="mb-3 sm:mb-4 h-[60px] sm:h-[80px] flex items-center justify-center">
                  {tool.logo ? (
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      width={60}
                      height={60}
                      className="object-contain w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]"
                    />
                  ) : (
                    tool.icon
                  )}
                </div>
                <span className="text-white text-base sm:text-lg font-bold text-center group-hover:text-blue-300 transition-colors">{tool.name}</span>

                {tool.items && (
                  <div className="w-full mt-4 flex flex-wrap justify-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                    {tool.items.map(i => (
                      <span key={i} className={`px-2 py-1 text-[10px] sm:text-xs font-semibold rounded-md bg-gray-900/80 border ${tool.color || 'border-blue-500/30'} text-gray-200`}>
                        {i}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500 z-0"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Paragraph Context */}
      <div className="max-w-4xl mx-auto text-center mt-10">
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300 px-2 sm:px-4">
          {paragraph}
        </p>
      </div>

      <Modal
        isOpen={!!modalContent}
        onClose={() => setModalContent(null)}
        title={modalContent?.title}
        skills={modalContent?.skills}
      />
    </div>
  );
};

export default CloudProviderList;