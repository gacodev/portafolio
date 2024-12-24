import CICDAnimation from './CICDAnimations';
import ProjectStats from './ProjectStats';
import PerformanceMetrics from './PerfomanceMetrics';
import ProjectBreakdown from './ProjectBreakdown';
import ToolsTechnologies from './ToolsTechnologies';
import KeyAchievements from './KeyAchievements';
import ProfessionalSummary from './ProfessionalSummary';
import PropTypes from 'prop-types';

const Journey2024 = ({ lang }) => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-purple-900 min-h-screen text-white p-8 md:p-16 flex flex-col">
      <h1 className="text-5xl font-bold text-center mb-16">{lang.devSecOps}</h1>
      <div className="flex-grow">
        <ProfessionalSummary lang={lang} />
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
Journey2024.propTypes = {
  lang: PropTypes.object,
  string: PropTypes.object,
};

export default Journey2024;
