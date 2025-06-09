const ProfessionalSummary = ({ lang= 'es' }) => {
  const title = lang === 'en' ? "Professional Summary" : "Resumen Profesional";
  const summary = lang === 'en' 
    ? "Experienced in solution architecture across multiple cloud providers, with a focus on DevOps and SRE practices. Proficient in backend development, SQL and NoSQL databases, and optimizing CI/CD pipelines. Familiar with implementing WAF and CAF architectures, emphasizing network and static code security. Committed to automation and metrics management, ensuring reliable migrations and backups to enhance software delivery efficiency and team performance."
    : "Experimentado en arquitectura de soluciones en múltiples proveedores de nube, con un enfoque en prácticas de DevOps y SRE. Soy competente en desarrollo backend, bases de datos SQL y NoSQL, y optimización de pipelines de CI/CD. Tengo conocimientos en la implementación de arquitecturas WAF y CAF, enfatizando la seguridad de redes y de código estático. Me comprometo a la automatización y gestión de métricas, asegurando migraciones y backups confiables para mejorar la eficiencia en la entrega de software y el rendimiento del equipo.";

  return (
    <div id="professional-summary" className="mb-20 pt-10">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <p className="text-xl leading-relaxed">{summary}</p>
    </div>
  );
};

export default ProfessionalSummary;
