import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import performanceData from '../../data/perfomance';


const flattenData = () => {
  return performanceData.reduce((acc, monthData) => {
    monthData.sprints.forEach(sprint => {
      acc.push({
        month: monthData.month,
        deployments: sprint.deployments,
        incidents: sprint.incidents,
      });
    });
    return acc;
  }, []);
};

const flattenedData = flattenData();

const PerformanceMetrics = ({ lang = 'es' }) => {
  const title = lang === 'en' ? 
  "Quarterly Performance Metrics of Projects I've Contributed To" : 
  "Métricas Trimestrales de Rendimiento y Confiabilidad en Proyectos en los que He Contribuido";

  const message = lang === 'en'
    ? "Consistency, oversight, and decision-making have optimized deployment capacity and solution reliability through persistent work and individual contributions."
    : "La consistencia y la toma de decisiones han mejorado la capacidad de despliegue y la confiabilidad de las soluciones mediante trabajo persistente y aportes individuales.";

  return (
    <div className="mb-30">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={flattenedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff30" />
            <XAxis dataKey="month" stroke="#fff" />
            <YAxis yAxisId="left" stroke="#fff" />
            <YAxis yAxisId="right" orientation="right" stroke="#fff" />
            <Tooltip contentStyle={{ backgroundColor: '#1a365d', border: 'none' }} />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="deployments" stroke="#4caf50" name="Deployments" strokeWidth={2} />
            <Line yAxisId="right" type="monotone" dataKey="incidents" stroke="#ff4d4f" name="Incidents" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-center mt-4 text-lg">{message}</p>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
