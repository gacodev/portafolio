import React from 'react';

// Un solo arreglo que contiene la información en ambos idiomas
const achievements = [
  { category: { en: 'Projects Delivered', es: 'Proyectos Gestionados' }, result: { en: '9 large-scale projects', es: '9 proyectos a gran escala' } },
  { category: { en: 'Pipelines Managed', es: 'Pipelines Creados y/o Gestionados' }, result: { en: '394 pipelines orchestrated', es: '400+ pipelines gestionados' } },
  { category: { en: 'Cost Reduction', es: 'Reducción de Costos' }, result: { en: '40% cost reduction', es: '40% de reducción de costos' } },
  { category: { en: 'Deployment Time Reduction', es: 'Reducción en Tiempo de Despliegue' }, result: { en: '40% faster deployments', es: 'Despliegues 40% más rápidos' } },
  { category: { en: 'Incident Reduction', es: 'Reducción de Incidentes' }, result: { en: '80% fewer incidents post-optimization', es: '80% menos incidentes tras la optimización' } },
  { category: { en: 'Resource Efficiency', es: 'Eficiencia en Recursos' }, result: { en: '35% improvement with autoscaling agents', es: '35% mejora con agentes de escalado automático' } },
  { category: { en: 'Security Enhancement', es: 'Mejoras en Seguridad' }, result: { en: 'OWASP integrated in 16 critical pipelines', es: 'OWASP integrado en 16 pipelines críticos' } },
  { category: { en: 'Process Automation', es: 'Automatización de Procesos' }, result: { en: '60% of the processes automated', es: '60% de los procesos automatizados' } },
  { category: { en: 'Code Quality & Security', es: 'Calidad del Código & Seguridad' }, result: { en: 'Improved through SonarCloud integration', es: 'Mejorada con la integración de SonarCloud' } },
  { category: { en: 'System Performance Boost', es: 'Incremento en Rendimiento' }, result: { en: '25% faster data handling with MongoDB & RabbitMQ', es: 'Manejo de datos 25% más rápido con MongoDB & RabbitMQ' } },
  { category: { en: 'Response Time Reduction', es: 'Reducción en Tiempo de Respuesta' }, result: { en: '30% faster response time using cache with Redis & AFD', es: '30% más rápido en el tiempo de respuesta usando Redis y AFD' } },
  { category: { en: 'Private Networks & Security', es: 'Redes Privadas & Seguridad' }, result: { en: 'Private network setup with VPCs and secure connections', es: 'Configuración de redes privadas con VPCs y conexiones seguras' } },
  { category: { en: 'Architecture Proposals & CAF/WAF', es: 'Propuestas de Arquitectura & CAF/WAF' }, result: { en: 'Designed 6 architecture proposals with CAF/WAF integration', es: 'Diseño de 6 propuestas de arquitectura con integración de CAF/WAF' } },
  { category: { en: 'Landing Zones & Scalability', es: 'Landing Zones & Escalabilidad' }, result: { en: 'Implemented landing zones with automatic scalability', es: 'Implementación de landing zones con escalabilidad automática' } },
  { category: { en: 'Mentoring & Team Leadership', es: 'Mentoría & Liderazgo de Equipos' }, result: { en: 'Mentored teams in cloud architecture best practices', es: 'Mentoría a equipos en mejores prácticas de arquitectura en la nube' } },
  { category: { en: 'Backup & Disaster Recovery', es: 'Backups & Recuperación ante Desastres' }, result: { en: 'Designed backup strategies with RPO < 5 mins', es: 'Diseño de estrategias de backup con RPO < 5 minutos' } },
];

const KeyAchievements = ({ language = 'es' }) => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {language === 'en' ? 'Key Achievements' : 'Logros Clave'}
      </h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-700">
            <th className="border border-gray-300 px-4 py-2">
              {language === 'en' ? 'Category' : 'Categoría'}
            </th>
            <th className="border border-gray-300 px-4 py-2">
              {language === 'en' ? 'Results' : 'Resultados'}
            </th>
          </tr>
        </thead>
        <tbody>
          {achievements.map((achievement, index) => (
            <tr key={index} className="text-lg">
              <td className="border border-gray-300 px-4 py-2">
                {achievement.category[language]}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {achievement.result[language]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KeyAchievements;
