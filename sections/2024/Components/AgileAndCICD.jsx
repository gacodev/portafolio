import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import CICDCards from "../../../components/CICDCards";

const AgileComponent = ({ lang = "en" }) => {
  const [activeSection, setActiveSection] = useState("values");
  const t = (es, en, pt) => ({ es, en, pt })[lang] || en;

  const agileContent = {
    values: [
      { en: "Individuals and interactions", es: "Individuos e interacciones", pt: "Indivíduos e interações" },
      { en: "Working software", es: "Software funcionando", pt: "Software funcionando" },
      { en: "Customer collaboration", es: "Colaboración con el cliente", pt: "Colaboração com o cliente" },
      { en: "Responding to change", es: "Respuesta ante el cambio", pt: "Resposta à mudança" },
    ],
    principles: [
      { en: "Early delivery", es: "Entrega temprana", pt: "Entrega antecipada" },
      { en: "Welcome changes", es: "Aceptar cambios", pt: "Aceitar mudanças" },
      { en: "Frequent delivery", es: "Entrega frecuente", pt: "Entrega frequente" },
      { en: "Work together", es: "Trabajar juntos", pt: "Trabalhar juntos" },
      { en: "Motivated individuals", es: "Individuos motivados", pt: "Indivíduos motivados" },
      { en: "Face-to-face conversation", es: "Conversación cara a cara", pt: "Conversa cara a cara" },
      { en: "Working software", es: "Software funcionando", pt: "Software funcionando" },
      { en: "Sustainable development", es: "Desarrollo sostenible", pt: "Desenvolvimento sustentável" },
      { en: "Technical excellence", es: "Excelencia técnica", pt: "Excelência técnica" },
      { en: "Simplicity", es: "Simplicidad", pt: "Simplicidade" },
      { en: "Self-organizing teams", es: "Equipos auto-organizados", pt: "Equipes auto-organizadas" },
      { en: "Regular adaptation", es: "Adaptación regular", pt: "Adaptação regular" },
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
            {t("Dominio Ágil: Principios en Acción", "Mastering Agile: Principles in Practice", "Domínio Ágil: Princípios em Ação")}
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
          {t("Valores", "Values", "Valores")}
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${
            activeSection === "principles"
              ? "bg-white text-blue-500"
              : "bg-blue-600"
          }`}
          onClick={() => setActiveSection("principles")}
        >
          {t("Principios", "Principles", "Princípios")}
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
                  <span>{value[lang] || value.en}</span>
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
                  {principle[lang] || principle.en}
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
