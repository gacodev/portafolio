import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stages } from '../../data/stages';
import AgileComponent from './AgileAndCICD';

const CICDAnimation = ({ lang = 'en' }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
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
      <AgileComponent lang={lang} />
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
        {lang === 'en' ? 'CI/CD Pipeline' : 'Pipeline de CI/CD'}
      </h2>
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-between gap-2`}>
        {stages.map((stage, index) => (
          <AnimatePresence key={stage.name[lang]}>
            {(!isMobile || index === currentStep) && (
              <motion.div
                className={`flex flex-col items-center justify-center p-4 rounded-xl ${isMobile ? 'w-full' : 'flex-1'}`}
                style={{
                  backgroundColor: stage.color,
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: index === currentStep ? 1.05 : 1,
                  boxShadow: index === currentStep ? '0 0 15px rgba(255,255,255,0.5)' : 'none'
                }}
                exit={{ opacity: 0, scale: 0.9 }}
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
                      className="text-4xl mb-2"
                      animate={index === currentStep ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                      {stage.icon}
                    </motion.div>
                    <span className="text-sm font-bold text-white text-center px-1">
                      {stage.name[lang]}
                    </span>
                  </a>
                  <motion.div 
                    className={`absolute ${getTooltipPosition(index)} bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 z-20 pointer-events-none max-w-[200px] min-h-[40px] flex items-center justify-center text-center max-h-[200px] overflow-y-auto`}
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stage.tooltip[lang]}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default CICDAnimation;