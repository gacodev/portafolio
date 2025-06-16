import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import CICDCards from "../../../components/CICDCards";      

const AgileComponent = ({ lang = "en" }) => {
  const [activeSection, setActiveSection] = useState("values");

  const agileContent = {
    values: [
      { en: "Individuals and interactions", es: "Individuos e interacciones" },
      { en: "Working software", es: "Software funcionando" },     
      { en: "Customer collaboration", es: "Colaboración con el cliente" },
      { en: "Responding to change", es: "Respuesta ante el cambio" },
    ],
    principles: [
      { en: "Early delivery", es: "Entrega temprana" },
      { en: "Welcome changes", es: "Aceptar cambios" },
      { en: "Frequent delivery", es: "Entrega frecuente" },
      { en: "Work together", es: "Trabajar juntos" },
      { en: "Motivated individuals", es: "Individuos motivados" },
      { en: "Face-to-face conversation", es: "Conversación cara a cara" },
      { en: "Working software", es: "Software funcionando" },
      { en: "Sustainable development", es: "Desarrollo sostenible" },
      { en: "Technical excellence", es: "Excelencia técnica" },
      { en: "Simplicity", es: "Simplicidad" },
      { en: "Self-organizing teams", es: "Equipos auto-organizados" },
      { en: "Regular adaptation", es: "Adaptación regular" },
    ],
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="agile-cicd" className="w-full rounded-lg shadow-lg overflow-hidden scroll-mt-20">
      <div className="p-6 bg-gradient-to-r from-teal-400 to-blue-500 text-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white relative">
          <span className="relative z-10">
            {lang === "en"
              ? "Mastering Agile: Principles in Practice"
              : "Dominio Ágil: Principios en Acción"}
          </span>
        </h2>

      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 rounded-l-lg ${
            activeSection === "values"
              ? "bg-white text-blue-500"
              : "bg-blue-600"
          }`}
          onClick={() => setActiveSection("values")}
        >
          {lang === "en" ? "Values" : "Valores"}
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${
            activeSection === "principles"
              ? "bg-white text-blue-500"
              : "bg-blue-600"
          }`}
          onClick={() => setActiveSection("principles")}
        >
          {lang === "en" ? "Principles" : "Principios"}
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.5 }}
        >
          {activeSection === "values" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {agileContent.values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white/20 p-4 rounded-lg flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl md:text-3xl mr-3">
                    {["👥", "💻", "🤝", "🔄"][index]}
                  </span>
                  <span>{value[lang]}</span>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {agileContent.principles.map((principle, index) => (
                <motion.div
                  key={index}
                  className="bg-white/20 p-3 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {principle[lang]}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      </div>
      
      {/* Sección de CI/CD Tools con el componente mejorado */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <CICDCards lang={lang} />
      </div>
    </div>
  );
};
AgileComponent.propTypes = {
  lang: PropTypes.string,
};

export default AgileComponent;