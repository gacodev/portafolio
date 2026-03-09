import React from 'react';
import ObservabilitySummary from './ObservabilitySummary';

const PerformanceMetrics = ({ lang = 'es' }) => {
  const title = lang === 'en' ? 
  "Performance Metrics of Projects I've Contributed To" : 
  "Métricas de Rendimiento y Confiabilidad en Proyectos en los que He Contribuido";

  const message = lang === 'en'
    ? "Consistency, oversight, and decision-making have optimized deployment capacity and solution reliability through persistent work and individual contributions."
    : "La consistencia y la toma de decisiones han mejorado la capacidad de despliegue y la confiabilidad de las soluciones mediante trabajo persistente y aportes individuales.";

  return (
    <div id="performance-metrics" className="mb-30 pt-10">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <p className="text-center mt-4 text-lg text-slate-300 max-w-4xl mx-auto">{message}</p>
      
      {/* Componente de resumen de observabilidad */}
      <div className="mt-8">
        <ObservabilitySummary lang={lang} />
      </div>
    </div>
  );
};

export default PerformanceMetrics;
