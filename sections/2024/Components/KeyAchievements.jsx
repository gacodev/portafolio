import PropTypes from 'prop-types';
import achievements from '../../data/achievement';

const KeyAchievements = ({ lang = 'es' }) => {
  return (
    <div className="mb-4 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">
        {lang === 'en' ? 'Key Achievements' : 'Logros Clave'}
      </h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-700">
            <th className="border border-gray-300 px-6 py-4 hidden md:table-cell">
              #
            </th>
            <th className="border border-gray-300 px-6 py-4">
              {lang === 'en' ? 'Category' : 'Categoría'}
            </th>
            <th className="border border-gray-300 px-6 py-4">
              {lang === 'en' ? 'Results' : 'Resultados'}
            </th>
          </tr>
        </thead>
        <tbody>
          {achievements?.map((achievement) => (
            <tr key={achievement.id} className="text-lg">
              <td className="border border-gray-300 px-2 text-center py-2 hidden md:table-cell">
                {achievement.id}
              </td>
              <td className="border border-gray-300 px-2 py-2">
                {achievement.category?.[lang]}
              </td>
              <td className="border border-gray-300 px-2 py-2">
                {achievement.result?.[lang]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

KeyAchievements.propTypes = {
  lang: PropTypes.string,
};

export default KeyAchievements;
