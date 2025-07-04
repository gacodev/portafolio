import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stages } from '../../data/stages';

const CICDAnimation = ({ lang = 'en' }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % stages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getTooltipPosition = (index) => {
    if (isMobile) return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
    const totalStages = stages.length;
    if (index < totalStages / 3) return 'bottom-full left-0 mb-2';
    if (index > (2 * totalStages) / 3) return 'bottom-full right-0 mb-2';
    return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
  };

  return (
    <div ref={containerRef} className="w-full p-4 md:p-8 rounded-lg shadow-lg overflow-hidden relative">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
        {lang === 'en' ? 'CI/CD Pipeline' : 'Pipeline de CI/CD'}
      </h2>
      {/* Layout para móviles - Una card animada */}
      <div className="block sm:hidden">
        <AnimatePresence>
          <motion.div
            key={currentStep}
            className="flex flex-col items-center justify-center p-6 rounded-xl w-full max-w-sm mx-auto"
            style={{
              backgroundColor: stages[currentStep].color,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1.05,
              boxShadow: '0 0 20px rgba(255,255,255,0.6)'
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group">
              <a 
                href={stages[currentStep].link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center justify-center w-full h-full text-white no-underline"
              >
                <motion.div 
                  className="text-5xl mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  {stages[currentStep].icon}
                </motion.div>
                <span className="text-lg font-bold text-white text-center">
                  {stages[currentStep].name[lang]}
                </span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Indicadores de progreso */}
        <div className="flex justify-center gap-2 mt-4">
          {stages.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStep ? 'bg-blue-400 scale-125' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Layout para tablets, desktop y pantallas grandes - 2 filas de 5 elementos */}
      <div className="hidden sm:block">
        {/* Primera fila - 5 elementos */}
        <div className="flex items-center justify-between gap-2 mb-4">
          {stages.slice(0, 5).map((stage, index) => (
            <motion.div
              key={stage.name[lang]}
              className="flex flex-col items-center justify-center p-3 rounded-xl flex-1"
              style={{
                backgroundColor: stage.color,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: index === currentStep ? 1.05 : 1,
                boxShadow: index === currentStep ? '0 0 15px rgba(255,255,255,0.5)' : 'none'
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative group">
                <a 
                  href={stage.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center justify-center w-full h-full text-white no-underline"
                >
                  <motion.div 
                    className="text-2xl sm:text-3xl mb-2"
                    animate={index === currentStep ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  >
                    {stage.icon}
                  </motion.div>
                  <span className="text-xs font-bold text-white text-center px-1 leading-tight">
                    {stage.name[lang]}
                  </span>
                </a>
                <motion.div 
                  className={`absolute ${getTooltipPosition(index)} bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 z-20 pointer-events-none max-w-[200px] min-h-[40px] flex items-center justify-center text-center`}
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {stage.tooltip[lang]}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Segunda fila - 5 elementos */}
        <div className="flex items-center justify-between gap-2">
          {stages.slice(5).map((stage, index) => {
            const actualIndex = index + 5;
            return (
              <motion.div
                key={stage.name[lang]}
                className="flex flex-col items-center justify-center p-3 rounded-xl flex-1"
                style={{
                  backgroundColor: stage.color,
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: actualIndex === currentStep ? 1.05 : 1,
                  boxShadow: actualIndex === currentStep ? '0 0 15px rgba(255,255,255,0.5)' : 'none'
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative group">
                  <a 
                    href={stage.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center justify-center w-full h-full text-white no-underline"
                  >
                    <motion.div 
                      className="text-2xl sm:text-3xl mb-2"
                      animate={actualIndex === currentStep ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                      {stage.icon}
                    </motion.div>
                    <span className="text-xs font-bold text-white text-center px-1 leading-tight">
                      {stage.name[lang]}
                    </span>
                  </a>
                  <motion.div 
                    className={`absolute ${getTooltipPosition(actualIndex)} bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 z-20 pointer-events-none max-w-[200px] min-h-[40px] flex items-center justify-center text-center`}
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stage.tooltip[lang]}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default CICDAnimation;