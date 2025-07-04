import CICDAnimation from './CICDAnimations';
import AgileComponent from './AgileAndCICD';
import ProjectStats from './ProjectStats';
import PerformanceMetrics from './PerfomanceMetrics';
import ProjectBreakdown from './ProjectBreakdown';
import ToolsTechnologies from './ToolsTechnologies';
import KeyAchievements from './KeyAchievements';
import ProfessionalSummary from './ProfessionalSummary';

const Journey2024 = ({ lang }) => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-purple-900 min-h-screen text-white p-2 sm:p-4 md:p-8 lg:p-16 flex flex-col w-full">
      <div className="flex-grow w-full max-w-full">
        <ProfessionalSummary lang={lang} />
        <AgileComponent lang={lang} />
        <CICDAnimation lang={lang} />
        <ProjectStats lang={lang} />
        <PerformanceMetrics lang={lang} />
        <ProjectBreakdown lang={lang} />
        <ToolsTechnologies lang={lang} />
        <KeyAchievements lang={lang} />
      </div>
    </div>
  );
};


export default Journey2024;
