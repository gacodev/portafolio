import React, { useState } from 'react';
import { motion } from 'framer-motion';
import aimlData from '../../data/aiml';
import translations from '../../../utils/translations';

const AIMLExperience = ({ lang = 'es' }) => {
  const [activeTab, setActiveTab] = useState('platforms');
  const t = translations[lang];

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const PlatformCard = ({ platform }) => (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-center mb-4">
        <div className="flex items-center mb-2 sm:mb-0">
          <img 
            src={platform.logo} 
            alt={platform.name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg mr-3 sm:mr-4"
          />
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">{platform.name}</h3>
            <span className="text-xs sm:text-sm text-blue-400">{platform.category}</span>
          </div>
        </div>
        <div className="sm:ml-auto">
          <span className="px-2 py-1 sm:px-3 sm:py-1 bg-green-500 text-white text-xs sm:text-sm rounded-full">
            {t[platform.experience.toLowerCase()]}
          </span>
        </div>
      </div>
      <p className="text-gray-300 mb-4 text-sm sm:text-base">{platform.description[lang]}</p>
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {platform.capabilities.map((capability, index) => (
          <span key={index} className="px-2 py-1 sm:px-3 sm:py-1 bg-slate-700 text-blue-300 text-xs sm:text-sm rounded-full">
            {capability}
          </span>
        ))}
      </div>
    </motion.div>
  );

  const ServiceCard = ({ service }) => (
    <motion.div
      variants={cardVariants}
      className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{service.icon}</span>
        <h3 className="text-xl font-bold text-white">{t[service.category.toLowerCase().replace(' ', '')]}</h3>
      </div>
      <div className="space-y-4">
        {service.services.map((item, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-blue-300 mb-2">{item.name}</h4>
            <p className="text-gray-300 text-sm mb-2">{item.description[lang]}</p>
            <div className="flex flex-wrap gap-1">
              {item.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const MLLifecycleCard = ({ phase, index }) => (
    <motion.div
      variants={cardVariants}
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 relative"
    >
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
        {index + 1}
      </div>
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{phase.icon}</span>
        <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
      </div>
      <p className="text-gray-300 mb-4">{phase.description[lang]}</p>
      <div className="flex flex-wrap gap-2">
        {phase.tools.map((tool, toolIndex) => (
          <span key={toolIndex} className="px-3 py-1 bg-blue-900 text-blue-300 text-sm rounded-full">
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );

  const FrameworkCard = ({ framework }) => (
    <motion.div
      variants={cardVariants}
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700"
    >
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{framework.icon}</span>
        <h3 className="text-lg font-bold text-white">{framework.category}</h3>
      </div>
      <div className="space-y-4">
        {framework.frameworks.map((item, index) => (
          <div key={index} className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-purple-300 mb-2">{item.name}</h4>
            <p className="text-gray-300 text-sm mb-2">{item.description[lang]}</p>
            <div className="flex flex-wrap gap-1">
              {item.capabilities.map((capability, capIndex) => (
                <span key={capIndex} className="px-2 py-1 bg-purple-900 text-purple-300 text-xs rounded">
                  {capability}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const SentimentAnalysisCard = () => (
    <motion.div
      variants={cardVariants}
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">🧠</span>
        <div>
          <h3 className="text-xl font-bold text-white">{aimlData.sentimentAnalysis.title[lang]}</h3>
          <p className="text-gray-300 mt-2">{aimlData.sentimentAnalysis.description[lang]}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {aimlData.sentimentAnalysis.capabilities.map((capability, index) => (
          <div key={index} className="border border-slate-600 rounded-lg p-4">
            <h4 className="font-semibold text-green-300 mb-2">{capability.name}</h4>
            <p className="text-gray-300 text-sm mb-2">{capability.description[lang]}</p>
            <div className="flex flex-wrap gap-1">
              {capability.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="px-2 py-1 bg-green-900 text-green-300 text-xs rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const TechnicalCapabilities = () => (
    <motion.div
      variants={cardVariants}
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700"
    >
      <h3 className="text-xl font-bold text-white mb-4">{t.capabilities}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {aimlData.technicalCapabilities[lang].map((capability, index) => (
          <div key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-300">{capability}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const tabs = [
    { id: 'platforms', label: t.platforms, icon: '🏢' },
    { id: 'services', label: t.aiServices, icon: '🤖' },
    { id: 'lifecycle', label: t.mlLifecycle, icon: '🔄' },
    { id: 'frameworks', label: 'SDKs & Frameworks', icon: '🛠️' },
    { id: 'sentiment', label: 'Sentiment Analysis', icon: '🧠' },
    { id: 'capabilities', label: t.capabilities, icon: '⚡' }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-slate-900" id="aiml">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">
            {t.aimlTitle}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            {t.aimlSubtitle}
          </p>
        </motion.div>

        {/* Tabs - Mobile First Design */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-6 sm:mb-8 px-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              <span className="mr-1 sm:mr-2 text-sm sm:text-base">{tab.icon}</span>
              <span className="hidden xs:inline sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          className="min-h-[400px]"
        >
          {activeTab === 'platforms' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {aimlData.platforms.map((platform, index) => (
                <PlatformCard key={index} platform={platform} />
              ))}
            </div>
          )}

          {activeTab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {aimlData.aiServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          )}

          {activeTab === 'lifecycle' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {aimlData.mlLifecycle.map((phase, index) => (
                <MLLifecycleCard key={index} phase={phase} index={index} />
              ))}
            </div>
          )}

          {activeTab === 'frameworks' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {aimlData.aiFrameworks.map((framework, index) => (
                <FrameworkCard key={index} framework={framework} />
              ))}
            </div>
          )}

          {activeTab === 'sentiment' && (
            <div className="space-y-6">
              <SentimentAnalysisCard />
            </div>
          )}

          {activeTab === 'capabilities' && (
            <div className="space-y-6">
              <TechnicalCapabilities />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AIMLExperience;