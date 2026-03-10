import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import {
  Rocket, Shield, TrendingUp, Users, Brain
} from 'lucide-react';
import achievements, { heroStats } from '../../data/achievement';

const pillarIcons = {
  rocket: Rocket,
  shield: Shield,
  trending: TrendingUp,
  users: Users,
  brain: Brain,
};

const colorMap = {
  blue: { bg: 'bg-blue-500/15', border: 'border-blue-500/30', text: 'text-blue-400', accent: 'text-blue-300', metric: 'text-blue-400', glow: 'shadow-blue-500/10' },
  emerald: { bg: 'bg-emerald-500/15', border: 'border-emerald-500/30', text: 'text-emerald-400', accent: 'text-emerald-300', metric: 'text-emerald-400', glow: 'shadow-emerald-500/10' },
  amber: { bg: 'bg-amber-500/15', border: 'border-amber-500/30', text: 'text-amber-400', accent: 'text-amber-300', metric: 'text-amber-400', glow: 'shadow-amber-500/10' },
  violet: { bg: 'bg-violet-500/15', border: 'border-violet-500/30', text: 'text-violet-400', accent: 'text-violet-300', metric: 'text-violet-400', glow: 'shadow-violet-500/10' },
  rose: { bg: 'bg-rose-500/15', border: 'border-rose-500/30', text: 'text-rose-400', accent: 'text-rose-300', metric: 'text-rose-400', glow: 'shadow-rose-500/10' },
};

const heroColorMap = {
  blue: 'from-blue-400 to-blue-600',
  cyan: 'from-cyan-400 to-cyan-600',
  green: 'from-green-400 to-emerald-600',
  purple: 'from-purple-400 to-violet-600',
};

const t = (lang, es, en, pt) => ({ es, en, pt })[lang] || en;

const KeyAchievements = ({ lang = 'es' }) => {
  return (
    <div id="key-achievements" className="mt-12 pt-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center text-white">
        {t(lang, 'Logros Clave', 'Key Achievements', 'Principais Conquistas')}
      </h2>
      <p className="text-sm text-slate-400 text-center mb-10 max-w-2xl mx-auto">
        {t(lang,
          'Impacto medible en proyectos empresariales de arquitectura cloud, DevOps y SRE',
          'Measurable impact across enterprise cloud architecture, DevOps, and SRE projects',
          'Impacto mensurável em projetos empresariais de arquitetura cloud, DevOps e SRE'
        )}
      </p>

      {/* Hero Stats — big numbers */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
        {heroStats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 text-center group hover:border-slate-600/50 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity" />
            <div className={`text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r ${heroColorMap[stat.color]} bg-clip-text text-transparent mb-1`}>
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">
              {stat.label[lang] || stat.label.en}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pillar cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
        {achievements.map((pillar, pIdx) => {
          const Icon = pillarIcons[pillar.icon] || Rocket;
          const colors = colorMap[pillar.color] || colorMap.blue;

          return (
            <motion.div
              key={pIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: pIdx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`bg-slate-800/40 backdrop-blur-sm border ${colors.border} rounded-2xl p-5 sm:p-6 shadow-lg ${colors.glow} hover:bg-slate-800/60 transition-all ${pIdx === achievements.length - 1 && achievements.length % 2 !== 0 ? 'md:col-span-2' : ''}`}
            >
              {/* Pillar header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`${colors.bg} p-2.5 rounded-xl`}>
                  <Icon className={`w-5 h-5 ${colors.text}`} />
                </div>
                <h3 className={`text-lg font-bold ${colors.accent}`}>
                  {pillar.pillar[lang] || pillar.pillar.en}
                </h3>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {pillar.items.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 group/item">
                    {/* Metric badge */}
                    <div className="shrink-0 w-12 text-right">
                      {item.metric ? (
                        <span className={`text-sm font-bold ${colors.metric}`}>
                          {item.metric}
                        </span>
                      ) : (
                        <span className={`text-lg ${colors.text} opacity-60`}>&#10003;</span>
                      )}
                    </div>
                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-semibold text-slate-200">
                        {item.category[lang] || item.category.en}
                      </span>
                      <span className="text-xs text-slate-500 ml-1.5">
                        &mdash; {item.result[lang] || item.result.en}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

KeyAchievements.propTypes = {
  lang: PropTypes.string,
};

export default KeyAchievements;
