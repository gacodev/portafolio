import { useEffect, useRef, useState } from 'react';

const ArchitectureDiagram = ({ chart, className = "" }) => {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (!chart || !containerRef.current) return;

    const renderDiagram = () => {
      try {
        setStatus('loading');
        
        // Limpiar contenedor
        containerRef.current.innerHTML = '';
        
        // Detectar tipo de diagrama y crear el apropiado
        const diagramType = detectDiagramType(chart);
        
        if (diagramType === 'infrastructure') {
          createInfrastructureDiagram(containerRef.current, chart);
        } else if (diagramType === 'flow') {
          createFlowDiagram(containerRef.current, chart);
        } else if (diagramType === 'sequence') {
          createSequenceDiagram(containerRef.current, chart);
        } else {
          createGenericArchitecture(containerRef.current, chart);
        }
        
        setStatus('success');
      } catch (error) {
        console.error('Error rendering diagram:', error);
        createGenericArchitecture(containerRef.current, chart);
        setStatus('fallback');
      }
    };

    renderDiagram();
  }, [chart]);

  // Detectar tipo de diagrama basado en contenido
  const detectDiagramType = (content) => {
    const lowerContent = content.toLowerCase();
    
    if (lowerContent.includes('monitor') || lowerContent.includes('elastic') || lowerContent.includes('kibana')) {
      return 'infrastructure';
    } else if (lowerContent.includes('sequencediagram') || lowerContent.includes('participant')) {
      return 'sequence';
    } else if (lowerContent.includes('-->') || lowerContent.includes('graph')) {
      return 'flow';
    }
    
    return 'generic';
  };

  // Crear diagrama de infraestructura profesional
  const createInfrastructureDiagram = (container, content) => {
    const svg = `
      <svg width="100%" height="500" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Gradientes profesionales -->
          <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#4A90E2;stop-opacity:0.9" />
            <stop offset="100%" style="stop-color:#357ABD;stop-opacity:1" />
          </linearGradient>
          
          <linearGradient id="serverGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#50C878;stop-opacity:0.9" />
            <stop offset="100%" style="stop-color:#3A9B5C;stop-opacity:1" />
          </linearGradient>
          
          <linearGradient id="databaseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:0.9" />
            <stop offset="100%" style="stop-color:#E55656;stop-opacity:1" />
          </linearGradient>
          
          <linearGradient id="monitorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#9B59B6;stop-opacity:0.9" />
            <stop offset="100%" style="stop-color:#8E44AD;stop-opacity:1" />
          </linearGradient>

          <!-- Filtros y sombras -->
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="3" dy="3" stdDeviation="3" flood-color="#00000030"/>
          </filter>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <!-- Patrones -->
          <pattern id="serverPattern" patternUnits="userSpaceOnUse" width="4" height="4">
            <rect width="4" height="4" fill="#50C878" opacity="0.1"/>
            <rect width="2" height="2" fill="#3A9B5C" opacity="0.3"/>
          </pattern>

          <!-- Iconos SVG -->
          <g id="cloudIcon">
            <path d="M30,20 Q15,10 25,15 Q10,5 20,10 Q5,15 15,20 Q10,35 25,30 Q40,35 35,20 Q45,15 35,10 Q40,5 30,10 Q35,15 30,20 Z" fill="white" opacity="0.8"/>
          </g>

          <g id="serverIcon">
            <rect x="10" y="8" width="20" height="3" rx="1" fill="white" opacity="0.8"/>
            <rect x="10" y="13" width="20" height="3" rx="1" fill="white" opacity="0.8"/>
            <rect x="10" y="18" width="20" height="3" rx="1" fill="white" opacity="0.8"/>
            <circle cx="33" cy="10" r="1.5" fill="#90EE90"/>
            <circle cx="33" cy="15" r="1.5" fill="#90EE90"/>
            <circle cx="33" cy="20" r="1.5" fill="#90EE90"/>
          </g>

          <g id="databaseIcon">
            <ellipse cx="20" cy="10" rx="15" ry="4" fill="white" opacity="0.8"/>
            <rect x="5" y="10" width="30" height="10" fill="white" opacity="0.8"/>
            <ellipse cx="20" cy="20" rx="15" ry="4" fill="white" opacity="0.8"/>
          </g>

          <g id="monitorIcon">
            <rect x="8" y="8" width="24" height="16" rx="2" fill="white" opacity="0.8"/>
            <rect x="10" y="10" width="20" height="10" fill="#9B59B6" opacity="0.3"/>
            <path d="M12,13 L16,17 L26,12" stroke="white" stroke-width="1.5" fill="none"/>
          </g>

          <!-- Marcadores de flecha -->
          <marker id="arrowBlue" markerWidth="12" markerHeight="12" refX="11" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#4A90E2"/>
          </marker>
          
          <marker id="arrowGreen" markerWidth="12" markerHeight="12" refX="11" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#50C878"/>
          </marker>
        </defs>

        <!-- Fondo con grid -->
        <rect width="100%" height="100%" fill="#F8FAFC"/>
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5"/>

        <!-- Título del diagrama -->
        <text x="500" y="30" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="24" font-weight="700" fill="#1E293B">
          Arquitectura de Monitoreo Sintético
        </text>
        <text x="500" y="50" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="14" fill="#64748B">
          Elastic Stack + Terraform Infrastructure
        </text>

        <!-- Capa 1: Usuario/Cliente -->
        <g transform="translate(50, 80)">
          <rect x="0" y="0" width="900" height="80" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="2" rx="8" opacity="0.8"/>
          <text x="20" y="25" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="600" fill="#475569">Cliente / Usuario</text>
          
          <!-- Navegador Web -->
          <g transform="translate(100, 30)">
            <rect x="0" y="0" width="120" height="40" fill="url(#cloudGradient)" rx="6" filter="url(#dropShadow)"/>
            <use href="#cloudIcon" transform="translate(10, 10)"/>
            <text x="60" y="28" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="500" fill="white">Navegador Web</text>
          </g>

          <!-- API Client -->
          <g transform="translate(300, 30)">
            <rect x="0" y="0" width="120" height="40" fill="url(#cloudGradient)" rx="6" filter="url(#dropShadow)"/>
            <use href="#cloudIcon" transform="translate(10, 10)"/>
            <text x="60" y="28" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="500" fill="white">API Client</text>
          </g>

          <!-- Mobile App -->
          <g transform="translate(500, 30)">
            <rect x="0" y="0" width="120" height="40" fill="url(#cloudGradient)" rx="6" filter="url(#dropShadow)"/>
            <use href="#cloudIcon" transform="translate(10, 10)"/>
            <text x="60" y="28" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="500" fill="white">Mobile App</text>
          </g>
        </g>

        <!-- Capa 2: Monitoreo Sintético -->
        <g transform="translate(50, 200)">
          <rect x="0" y="0" width="900" height="100" fill="#EDE9FE" stroke="#C4B5FD" stroke-width="2" rx="8" opacity="0.8"/>
          <text x="20" y="25" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="600" fill="#6D28D9">Capa de Monitoreo Sintético</text>
          
          <!-- Elastic Synthetic Monitor -->
          <g transform="translate(150, 35)">
            <rect x="0" y="0" width="180" height="50" fill="url(#monitorGradient)" rx="6" filter="url(#dropShadow)"/>
            <use href="#monitorIcon" transform="translate(15, 15)"/>
            <text x="90" y="25" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="500" fill="white">Elastic Synthetic</text>
            <text x="90" y="38" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="500" fill="white">Monitor</text>
          </g>

          <!-- Heartbeat -->
          <g transform="translate(400, 35)">
            <rect x="0" y="0" width="140" height="50" fill="url(#monitorGradient)" rx="6" filter="url(#dropShadow)"/>
            <use href="#monitorIcon" transform="translate(15, 15)"/>
            <text x="70" y="32" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="500" fill="white">Heartbeat</text>
          </g>

          <!-- Uptime Monitor -->
          <g transform="translate(600, 35)">
            <rect x="0" y="0" width="140" height="50" fill="url(#monitorGradient)" rx="6" filter="url(#dropShadow)"/>
            <use href="#monitorIcon" transform="translate(15, 15)"/>
            <text x="70" y="25" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="500" fill="white">Uptime</text>
            <text x="70" y="38" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="500" fill="white">Monitor</text>
          </g>
        </g>

        <!-- Capa 3: Elastic Stack -->
        <g transform="translate(50, 340)">
          <rect x="0" y="0" width="900" height="120" fill="#ECFDF5" stroke="#A7F3D0" stroke-width="2" rx="8" opacity="0.8"/>
          <text x="20" y="25" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="600" fill="#065F46">Elastic Stack Infrastructure</text>
          
          <!-- Elasticsearch -->
          <g transform="translate(100, 40)">
            <rect x="0" y="0" width="140" height="60" fill="url(#databaseGradient)" rx="6" filter="url(#dropShadow)"/>
            <use href="#databaseIcon" transform="translate(15, 20)"/>
            <text x="70" y="35" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="600" fill="white">Elasticsearch</text>
            <text x="70" y="48" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="10" fill="white">Data Storage</text>
          </g>

          <!-- Kibana -->
          <g transform="translate(300, 40)">
            <rect x="0" y="0" width="140" height="60" fill="url(#serverGradient)" rx="6" filter="url(#dropShadow)"/>
            <use href="#serverIcon" transform="translate(15, 20)"/>
            <text x="70" y="35" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="600" fill="white">Kibana</text>
            <text x="70" y="48" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="10" fill="white">Visualization</text>
          </g>

          <!-- Logstash -->
          <g transform="translate(500, 40)">
            <rect x="0" y="0" width="140" height="60" fill="url(#serverGradient)" rx="6" filter="url(#dropShadow)"/>
            <use href="#serverIcon" transform="translate(15, 20)"/>
            <text x="70" y="35" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="600" fill="white">Logstash</text>
            <text x="70" y="48" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="10" fill="white">Processing</text>
          </g>

          <!-- Beats -->
          <g transform="translate(700, 40)">
            <rect x="0" y="0" width="140" height="60" fill="url(#serverGradient)" rx="6" filter="url(#dropShadow)"/>
            <use href="#serverIcon" transform="translate(15, 20)"/>
            <text x="70" y="35" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="600" fill="white">Beats</text>
            <text x="70" y="48" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="10" fill="white">Data Shipper</text>
          </g>
        </g>

        <!-- Conexiones con etiquetas -->
        <!-- Usuario a Monitoreo -->
        <line x1="210" y1="160" x2="280" y2="200" stroke="#4A90E2" stroke-width="3" marker-end="url(#arrowBlue)"/>
        <text x="240" y="185" font-family="Inter, system-ui, sans-serif" font-size="10" fill="#4A90E2" font-weight="500">Health Checks</text>

        <line x1="410" y1="160" x2="470" y2="200" stroke="#4A90E2" stroke-width="3" marker-end="url(#arrowBlue)"/>
        <text x="435" y="185" font-family="Inter, system-ui, sans-serif" font-size="10" fill="#4A90E2" font-weight="500">API Tests</text>

        <line x1="610" y1="160" x2="670" y2="200" stroke="#4A90E2" stroke-width="3" marker-end="url(#arrowBlue)"/>
        <text x="635" y="185" font-family="Inter, system-ui, sans-serif" font-size="10" fill="#4A90E2" font-weight="500">Uptime</text>

        <!-- Monitoreo a Elastic Stack -->
        <line x1="240" y1="300" x2="200" y2="340" stroke="#50C878" stroke-width="3" marker-end="url(#arrowGreen)"/>
        <text x="210" y="325" font-family="Inter, system-ui, sans-serif" font-size="10" fill="#50C878" font-weight="500">Metrics</text>

        <line x1="470" y1="300" x2="570" y2="340" stroke="#50C878" stroke-width="3" marker-end="url(#arrowGreen)"/>
        <text x="515" y="325" font-family="Inter, system-ui, sans-serif" font-size="10" fill="#50C878" font-weight="500">Logs</text>

        <line x1="670" y1="300" x2="770" y2="340" stroke="#50C878" stroke-width="3" marker-end="url(#arrowGreen)"/>
        <text x="715" y="325" font-family="Inter, system-ui, sans-serif" font-size="10" fill="#50C878" font-weight="500">Events</text>

        <!-- Conexiones internas de Elastic Stack -->
        <line x1="240" y1="400" x2="300" y2="400" stroke="#059669" stroke-width="2" marker-end="url(#arrowGreen)"/>
        <line x1="440" y1="400" x2="500" y2="400" stroke="#059669" stroke-width="2" marker-end="url(#arrowGreen)"/>
        <line x1="640" y1="400" x2="700" y2="400" stroke="#059669" stroke-width="2" marker-end="url(#arrowGreen)"/>

        <!-- Leyenda -->
        <g transform="translate(750, 100)">
          <rect x="0" y="0" width="200" height="120" fill="white" stroke="#CBD5E1" stroke-width="1" rx="6" filter="url(#dropShadow)"/>
          <text x="100" y="20" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="600" fill="#1E293B">Leyenda</text>
          
          <rect x="10" y="30" width="15" height="10" fill="url(#cloudGradient)"/>
          <text x="30" y="40" font-family="Inter, system-ui, sans-serif" font-size="10" fill="#374151">Aplicaciones Cliente</text>
          
          <rect x="10" y="50" width="15" height="10" fill="url(#monitorGradient)"/>
          <text x="30" y="60" font-family="Inter, system-ui, sans-serif" font-size="10" fill="#374151">Monitoreo Sintético</text>
          
          <rect x="10" y="70" width="15" height="10" fill="url(#serverGradient)"/>
          <text x="30" y="80" font-family="Inter, system-ui, sans-serif" font-size="10" fill="#374151">Elastic Stack</text>
          
          <rect x="10" y="90" width="15" height="10" fill="url(#databaseGradient)"/>
          <text x="30" y="100" font-family="Inter, system-ui, sans-serif" font-size="10" fill="#374151">Data Storage</text>
        </g>

        <!-- Métricas de rendimiento -->
        <g transform="translate(50, 480)">
          <text x="0" y="0" font-family="Inter, system-ui, sans-serif" font-size="11" fill="#6B7280">
            <tspan x="0" dy="0">🔍 Frecuencia de monitoreo: 1min</tspan>
            <tspan x="250" dy="0">📊 Retención de datos: 30 días</tspan>
            <tspan x="500" dy="0">⚡ SLA objetivo: 99.9%</tspan>
            <tspan x="750" dy="0">🚨 Alertas: Email + Slack</tspan>
          </text>
        </g>
      </svg>
    `;
    
    container.innerHTML = svg;
  };

  // Crear diagrama de flujo profesional
  const createFlowDiagram = (container, content) => {
    const svg = ``;
    
    container.innerHTML = svg;
  };

  // Crear diagrama de secuencia profesional
  const createSequenceDiagram = (container, content) => {
    const svg = ``;
    
    container.innerHTML = svg;
  };

  // Crear arquitectura genérica profesional
  const createGenericArchitecture = (container, content) => {
    const svg = ``;
    
    container.innerHTML = svg;
  };

  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-6 my-6 shadow-sm ${className}`}>
      {status === 'loading' && (
        <div className="flex items-center justify-center p-8">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <span className="text-gray-700 text-sm font-medium">Generando diagrama arquitectónico...</span>
          </div>
        </div>
      )}
      
      <div 
        ref={containerRef}
        className="w-full overflow-x-auto"
        style={{ minHeight: '400px' }}
      />
      
      {status === 'fallback' && (
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <span className="text-amber-600">⚠️</span>
            <span className="text-amber-800 text-sm font-medium">Diagrama renderizado en modo alternativo</span>
          </div>
        </div>
      )}
      
      {status === 'success' && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <span className="text-green-600">✅</span>
            <span className="text-green-800 text-sm font-medium">Diagrama arquitectónico generado con calidad profesional</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchitectureDiagram;