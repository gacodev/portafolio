import React, { useState } from 'react';
import Image from "next/image";
import { XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cloudProviders, iacTools } from '../../../data/cloud';

const ExperienceTag = ({ years }) => (
  <div className="absolute top-0 right-0 overflow-hidden w-40 h-40">
    <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                    py-5 px-12 shadow-lg transform rotate-45 translate-x-[45%] -translate-y-[15%]
                    flex items-center text-center justify-center">
      <span className="text-sm font-extrabold tracking-wider transform -rotate-45 justify-center">
        {years}+ '    
      </span>
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, title, skills }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="bg-gray-800 rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto relative"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Close modal"
          >
            <XIcon size={24} />
          </button>
          <h3 className="text-2xl font-bold mb-4 text-white pr-8">{title} Skills</h3>
          <ul className="space-y-2">
            {skills.map(skill => (
              <li key={skill.name} className="flex justify-between text-white">
                <span>{skill.name}</span>
                <span className="font-bold">{skill.exp} {skill.exp === 1 ? 'year' : 'years'}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export const CloudProviderList = ({ lang }) => {
  const [modalContent, setModalContent] = useState(null);
  const title = lang === "en" ? "Cloud Experience" : "Experiencia en nube";
  const iacTitle = lang === "en" ? "Infrastructure as Code" : "Infraestructura como Código";
  const paragraph = lang === "en"
    ? "My preference for Infrastructure as Code (IaC) tools like Terraform and Pulumi enhances my productivity and enables more consistent, fault-tolerant deliveries. This approach allows me to represent infrastructure in code, facilitating progressive growth and better management. By adopting cutting-edge cloud technologies such as Docker, Vagrant, and Ansible, I streamline processes and reduce repetitive tasks, which is crucial in challenging situations and leads to more efficient and reliable cloud solutions."
    : "Mi preferencia por herramientas de Infraestructura como Código (IaC) como Terraform y Pulumi mejora mi productividad y permite entregas más consistentes y tolerantes a fallos. Este enfoque me permite representar la infraestructura en código, facilitando un crecimiento progresivo y una mejor gestión. Al adoptar tecnologías de vanguardia en la nube como Docker, Vagrant y Ansible, optimizo procesos y reduzco tareas repetitivas, lo cual es crucial en situaciones desafiantes y conduce a soluciones en la nube más eficientes y confiables.";

  return (
    <div className="w-full px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-white">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
        {cloudProviders.map((provider) => (
          <div 
            key={provider.name} 
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl 
                       overflow-hidden border border-gray-700 transform transition duration-300 hover:scale-105 w-full"
          >
            <ExperienceTag years={provider.name === "Google Cloud" ? 1 : provider.name === "Amazon Web Services" ? 1 : Math.floor(provider.experience)} />
            <div className="p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-semibold text-center mb-3 sm:mb-4 text-white">
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
              <ul className="text-white text-xs sm:text-sm space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                {provider.skills.slice(0, 10).map(skill => (
                  <li key={skill.name} className="flex items-center">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                    <span className="text-xs sm:text-sm">{skill.name}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setModalContent({ title: provider.name, skills: provider.skills })}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                           text-white font-bold py-2 px-3 sm:px-4 rounded transition duration-300 text-sm sm:text-base"
              >
                Show All Skills
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto text-center mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-white">{iacTitle}</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 lg:space-x-12 mb-6 sm:mb-10">
          {iacTools.map((tool) => (
            <div
              key={tool.name}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 sm:p-6 
                         flex flex-col items-center transition-all duration-300 hover:shadow-2xl 
                         transform hover:scale-105 border border-gray-700 w-full sm:w-auto"
            >
              <ExperienceTag years={Math.floor(tool.experience)} />
              <Image
                src={tool.logo}
                alt={tool.name}
                width={120}
                height={120}
                className="object-contain mb-3 sm:mb-4 sm:w-[200px] sm:h-[200px]"
              />
              <span className="text-white text-base sm:text-lg font-semibold">{tool.name}</span>
            </div>
          ))}
        </div>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white px-2 sm:px-4">
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