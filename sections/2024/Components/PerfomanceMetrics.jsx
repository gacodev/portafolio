import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const performanceData = [
  { month: 'Jan', sprints: [{ sprint: 1, deployments: 296, incidents: 22 }, { sprint: 2, deployments: 300, incidents: 18 }] },
  { month: 'Feb', sprints: [{ sprint: 1, deployments: 325, incidents: 16 }, { sprint: 2, deployments: 325, incidents: 14 }] },
  { month: 'Mar', sprints: [{ sprint: 1, deployments: 350, incidents: 12 }, { sprint: 2, deployments: 350, incidents: 10 }] },
  { month: 'Apr', sprints: [{ sprint: 1, deployments: 375, incidents: 8 }, { sprint: 2, deployments: 375, incidents: 6 }] },
  { month: 'May', sprints: [{ sprint: 1, deployments: 400, incidents: 5 }, { sprint: 2, deployments: 400, incidents: 3 }] },
  { month: 'Jun', sprints: [{ sprint: 1, deployments: 467, incidents: 4 }, { sprint: 2, deployments: 425, incidents: 2 }] },
  { month: 'Jul', sprints: [{ sprint: 1, deployments: 530, incidents: 3 }, { sprint: 2, deployments: 450, incidents: 1 }] },
  { month: 'Aug', sprints: [{ sprint: 1, deployments: 575, incidents: 2 }, { sprint: 2, deployments: 475, incidents: 1 }] },
  { month: 'Sep', sprints: [{ sprint: 1, deployments: 590, incidents: 1 }, { sprint: 2, deployments: 500, incidents: 0 }] },
];


// Aplanar los datos para el gráfico
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

const PerformanceMetrics = ({ language = 'es' }) => {
  const title = language === 'en' ? 
  "Quarterly Performance Metrics of Projects I've Contributed To" : 
  "Métricas Trimestrales de Rendimiento y Confiabilidad en Proyectos en los que He Contribuido";

  const message = language === 'en'
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
