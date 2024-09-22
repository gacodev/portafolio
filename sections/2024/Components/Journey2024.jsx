import CICDAnimation from './CICDAnimations';
import ProjectStats from './ProjectStats';
import PerformanceMetrics from './PerfomanceMetrics';
import ProjectBreakdown from './ProjectBreakdown';
import ToolsTechnologies from './ToolsTechnologies';
import KeyAchievements from './KeyAchievements';
import ProfessionalSummary from './ProfessionalSummary';

const Journey2024 = ({ lang }) => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-purple-900 min-h-screen text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-16">{lang.devSecOps}</h1>
      <ProfessionalSummary lang={lang} />
      <CICDAnimation lang={lang} />
      <ProjectStats lang={lang} />
      <PerformanceMetrics lang={lang} />
      <ProjectBreakdown lang={lang} />
      <ToolsTechnologies lang={lang} />
      <KeyAchievements lang={lang} />
    </div>
  );
};

export default Journey2024;
