import React, { useState } from "react";
import { XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * SkillList component
 * Muestra una lista resumida de habilidades y permite expandirlas en un modal.
 *
 * Props:
 * - title: string  -> Título de la sección.
 * - skills: string[] -> Array completo de habilidades.
 * - lang: 'en' | 'es' -> Idioma para traducciones básicas.
 * - coreCount: number -> Cuántas habilidades mostrar en modo resumido (default 6).
 */
const SkillList = ({ title, skills = [], lang = "en", coreCount = 15 }) => {
  const [open, setOpen] = useState(false);
  const tShowAll = lang === "es" ? "Ver todo" : "Show all";
  const tClose = lang === "es" ? "Cerrar" : "Close";

  return (
    <div className="text-center">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-gray-100">
        {title}
      </h3>
      <ul className="grid grid-cols-2 gap-1 sm:gap-2 text-left justify-items-start">
        {skills.slice(0, coreCount).map((skill) => (
          <li key={skill} className="flex items-center text-sm sm:text-base text-gray-100">
            <span className="mr-1 text-green-500">✓</span>
            {skill}
          </li>
        ))}
      </ul>
      {skills.length > coreCount && (
        <button
          onClick={() => setOpen(true)}
          className="mt-3 inline-block text-sm text-blue-400 underline hover:text-blue-300 transition"
        >
          {tShowAll}
        </button>
      )}

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-800 rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                aria-label={tClose}
              >
                <XIcon size={24} />
              </button>
              <h4 className="text-xl font-semibold mb-4 text-white">{title}</h4>
              <ul className="space-y-2 text-white text-left">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="mr-1 text-green-500">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillList;
