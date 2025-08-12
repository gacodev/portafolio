import React from 'react';

export const TechParagraph = ({ lang = 'en' }) => {
  const content = {
    en: `I prefer using cutting-edge tools for server management and software development, such as Docker, Hashicorp Packer, and Ansible. These tools have optimized my efficiency and productivity in previous projects, helping me avoid repetitive tasks. I tend to automate provisioning tasks to be prepared for challenging situations. My experience with these technologies demonstrates my ability to implement quick and reliable solutions.`,
    es: `Prefiero utilizar herramientas de vanguardia para la administración de servidores y el desarrollo de software, como Docker, Hashicorp Packer y Ansible. Estas herramientas han optimizado mi eficiencia y productividad en proyectos anteriores, ayudándome a evitar tareas repetitivas. Tiendo a automatizar tareas de aprovisionamiento para estar preparado en situaciones desafiantes. Mi experiencia con estas tecnologías demuestra mi capacidad para implementar soluciones rápidas y confiables.`
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 bg-gray-100 rounded-lg shadow-md">
      <p className="text-gray-800 leading-relaxed">
        {content[lang]}
      </p>
    </div>
  );
};

export default TechParagraph;