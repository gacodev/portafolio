import React, { useState } from "react";
import { Wrench, Users, XIcon, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * SkillCard
 * Tarjeta llamativa para mostrar las habilidades principales y un modal con la lista completa.
 * Props
 * - title: string
 * - skills: string[]
 * - lang: 'es' | 'en'
 * - icon: 'hard' | 'soft'
 */
const SkillCard = ({ title, skills = [], lang = "en", icon = "hard" }) => {
  const [open, setOpen] = useState(false);
  const tShowAllLabel = lang === "es" ? "Ver más" : "Show all";
  const tClose = lang === "es" ? "Cerrar" : "Close";
  const IconComp = icon === "hard" ? Wrench : Users;
  // Agrupar habilidades por categoría ("Categoria: skill1, skill2")
  const grouped = skills.reduce((acc, str) => {
    if (typeof str !== "string") return acc;
    const [rawCat, rawItems] = str.split(":");
    if (rawItems) {
      const cat = rawCat.trim();
      const items = rawItems.split(/[,•]/).map((s) => s.trim()).filter(Boolean);
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(...items);
    } else {
      
    }
    return acc;
  }, {});
  const categories = Object.entries(grouped);

  return (
    <>
      <div
        className="relative bg-gradient-to-br from-slate-800 via-indigo-600 to-purple-700 p-5 rounded-xl shadow-lg flex flex-col items-start justify-between min-h-[240px] md:min-h-[300px] hover:shadow-2xl transition"
      >
        <div className="flex items-center mb-4 space-x-4">
          <IconComp size={28} className="text-white" />
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>

        {/* Categorías */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 text-center">
          {categories.map(([cat]) => (
            <span
              key={cat}
              className="text-white text-xs sm:text-sm font-semibold truncate"
            >
              {cat}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen(true)}
          className="self-center bg-white/20 hover:bg-white/30 text-white p-2 rounded flex items-center justify-center"
          aria-label={tShowAllLabel}
        >
          <Eye size={18} />
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
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
              <h4 className="text-xl font-semibold mb-4 text-white flex items-center space-x-2">
                <IconComp size={20} /> <span>{title}</span>
              </h4>
              <div className="space-y-4 text-white">
                {categories.map(([cat, items]) => (
                  <div key={cat}>
                    <h5 className="font-semibold mb-1">{cat}</h5>
                    <ul className="space-y-1 ml-4 list-disc list-inside text-sm">
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SkillCard;
