import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import {
  Rocket, GitBranch, DollarSign, Clock, AlertTriangle, Cpu,
  Shield, Zap, Code, Database, Timer, Network, Building,
  Users, HardDrive, TrendingUp
} from 'lucide-react';
import achievements from '../../data/achievement';

// Iconos para cada categoría de logro
const getAchievementIcon = (id) => {
  const iconMap = {
    1: Rocket,        // Projects Delivered
    2: GitBranch,     // Pipelines Managed
    3: DollarSign,    // Cost Reduction
    4: Clock,         // Deployment Time Reduction
    5: AlertTriangle, // Incident Reduction
    6: Cpu,           // Resource Efficiency
    7: Shield,        // Security Enhancement
    8: Zap,           // Process Automation
    9: Code,          // Code Quality & Security
    10: Database,     // System Performance Boost
    11: Timer,        // Response Time Reduction
    12: Network,      // Private Networks & Security
    13: Building,     // Architecture Proposals & CAF/WAF
    14: TrendingUp,   // Landing Zones & Scalability
    15: Users,        // Mentoring & Team Leadership
    16: HardDrive,    // Backup & Disaster Recovery
  };
  return iconMap[id] || Rocket;
};

const KeyAchievements = ({ lang = 'es' }) => {
  return (
    <div id="key-achievements" className="mt-12 pt-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
        {lang === 'en' ? 'Key Achievements' : 'Logros Clave'}
      </h2>
      
      {/* Grid compacto de logros */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {achievements?.map((achievement, index) => {
          const IconComponent = getAchievementIcon(achievement.id);
          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg p-4 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105"
            >
              {/* Icono y número */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <IconComponent className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400">#{achievement.id}</span>
                </div>
              </div>
              
              {/* Categoría */}
              <h3 className="text-sm font-semibold text-slate-200 mb-2 leading-tight">
                {achievement.category?.[lang]}
              </h3>
              
              {/* Resultado */}
              <p className="text-xs text-slate-300 leading-relaxed">
                {achievement.result?.[lang]}
              </p>
            </motion.div>
          );
        })}
      </div>
      
      {/* Resumen estadístico */}
      <div className="mt-8 bg-slate-800/50 rounded-lg p-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-400">9</div>
            <div className="text-xs text-slate-400">
              {lang === 'en' ? 'Projects' : 'Proyectos'}
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">400+</div>
            <div className="text-xs text-slate-400">
              {lang === 'en' ? 'Pipelines' : 'Pipelines'}
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-400">40%</div>
            <div className="text-xs text-slate-400">
              {lang === 'en' ? 'Cost Reduction' : 'Reducción Costos'}
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">80%</div>
            <div className="text-xs text-slate-400">
              {lang === 'en' ? 'Fewer Incidents' : 'Menos Incidentes'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

KeyAchievements.propTypes = {
  lang: PropTypes.string,
};

export default KeyAchievements;
