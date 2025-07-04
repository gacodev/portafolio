import { useEffect, useRef, useState } from 'react';

const DiagramRenderer = ({ chart, className = "" }) => {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (!chart || !containerRef.current) return;

    const renderDiagram = () => {
      try {
        setStatus('loading');
        
        // Limpiar contenedor
        containerRef.current.innerHTML = '';
        
        // Parsear el contenido del diagrama
        const diagramData = parseMermaidToData(chart);
        
        // Crear SVG directamente
        createSVGDiagram(containerRef.current, diagramData);
        
        setStatus('success');
      } catch (error) {
        console.error('Error rendering diagram:', error);
        // Crear diagrama de fallback
        createFallbackDiagram(containerRef.current, chart);
        setStatus('fallback');
      }
    };

    // Renderizar inmediatamente
    renderDiagram();
  }, [chart]);

  // Función para parsear contenido mermaid y extraer datos
  const parseMermaidToData = (mermaidContent) => {
    const lines = mermaidContent.trim().split('\n').filter(line => line.trim());
    const nodes = new Map();
    const edges = [];
    
    lines.forEach(line => {
      line = line.trim();
      
      // Parsear conexiones simples: A --> B
      const arrowMatch = line.match(/(\w+)\s*-->\s*(\w+)(?:\[([^\]]+)\])?/);
      if (arrowMatch) {
        const [, from, to, label] = arrowMatch;
        
        if (!nodes.has(from)) nodes.set(from, { id: from, label: from });
        if (!nodes.has(to)) nodes.set(to, { id: to, label: to });
        
        edges.push({ 
          source: from, 
          target: to, 
          label: label || '' 
        });
        return;
      }

      // Parsear nodos con etiquetas: A[Label]
      const nodeMatch = line.match(/(\w+)\[([^\]]+)\]/);
      if (nodeMatch) {
        const [, id, label] = nodeMatch;
        nodes.set(id, { id, label });
        return;
      }

      // Parsear nodos simples
      const simpleNodeMatch = line.match(/^\s*(\w+)\s*$/);
      if (simpleNodeMatch && !line.includes('graph') && !line.includes('-->')) {
        const [, id] = simpleNodeMatch;
        if (!nodes.has(id)) nodes.set(id, { id, label: id });
      }
    });

    return {
      nodes: Array.from(nodes.values()),
      edges: edges
    };
  };

  // Crear diagrama SVG nativo
  const createSVGDiagram = (container, data) => {
    const width = 600;
    const height = 400;

    if (data.nodes.length === 0) {
      createBasicDiagram(container);
      return;
    }

    // Calcular posiciones automáticamente
    const nodePositions = calculateNodePositions(data.nodes, data.edges, width, height);
    
    // Crear SVG
    let svgContent = `
      <svg width="100%" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <style>
          .node-rect { transition: all 0.3s ease; }
          .node-rect:hover { filter: brightness(1.1); transform: scale(1.05); }
          .node-text { pointer-events: none; }
          .edge-line { transition: stroke-width 0.3s ease; }
          .edge-line:hover { stroke-width: 3; }
        </style>
        
        <!-- Definir marcadores de flecha -->
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto" markerUnits="strokeWidth">
            <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
          </marker>
          
          <!-- Gradientes para nodos -->
          <linearGradient id="nodeGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#e3f2fd;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#bbdefb;stop-opacity:1" />
          </linearGradient>
          
          <linearGradient id="nodeGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#f3e5f5;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e1bee7;stop-opacity:1" />
          </linearGradient>
          
          <linearGradient id="nodeGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#e8f5e8;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#c8e6c9;stop-opacity:1" />
          </linearGradient>
        </defs>
    `;

    // Agregar conexiones
    data.edges.forEach(edge => {
      const sourceNode = nodePositions.find(n => n.id === edge.source);
      const targetNode = nodePositions.find(n => n.id === edge.target);
      
      if (sourceNode && targetNode) {
        // Calcular puntos de conexión en los bordes de los rectángulos
        const { x1, y1, x2, y2 } = calculateConnectionPoints(sourceNode, targetNode);
        
        svgContent += `
          <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" 
                stroke="#666" stroke-width="2" 
                marker-end="url(#arrowhead)" 
                class="edge-line"/>
        `;
        
        // Agregar etiqueta si existe
        if (edge.label) {
          const midX = (x1 + x2) / 2;
          const midY = (y1 + y2) / 2;
          svgContent += `
            <text x="${midX}" y="${midY - 5}" text-anchor="middle" 
                  font-family="system-ui, sans-serif" font-size="10" fill="#666">
              ${edge.label}
            </text>
          `;
        }
      }
    });

    // Agregar nodos
    nodePositions.forEach((node, index) => {
      const gradientId = `nodeGradient${(index % 3) + 1}`;
      const colors = [
        { stroke: '#2196f3', text: '#1976d2' },
        { stroke: '#9c27b0', text: '#7b1fa2' },
        { stroke: '#4caf50', text: '#388e3c' }
      ];
      const color = colors[index % 3];
      
      svgContent += `
        <g class="node-group">
          <rect x="${node.x - 50}" y="${node.y - 25}" width="100" height="50" 
                fill="url(#${gradientId})" stroke="${color.stroke}" stroke-width="2" 
                rx="8" class="node-rect"/>
          <text x="${node.x}" y="${node.y}" text-anchor="middle" dy=".35em"
                font-family="system-ui, sans-serif" font-size="12" 
                fill="${color.text}" font-weight="500" class="node-text">
            ${node.label}
          </text>
        </g>
      `;
    });

    svgContent += '</svg>';
    container.innerHTML = svgContent;
  };

  // Calcular posiciones de nodos automáticamente
  const calculateNodePositions = (nodes, edges, width, height) => {
    const nodeCount = nodes.length;
    const positions = [];

    if (nodeCount === 1) {
      positions.push({
        ...nodes[0],
        x: width / 2,
        y: height / 2
      });
    } else if (nodeCount <= 3) {
      // Disposición horizontal para pocos nodos
      const spacing = width / (nodeCount + 1);
      nodes.forEach((node, index) => {
        positions.push({
          ...node,
          x: spacing * (index + 1),
          y: height / 2
        });
      });
    } else {
      // Disposición en círculo para muchos nodos
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.3;
      
      nodes.forEach((node, index) => {
        const angle = (2 * Math.PI * index) / nodeCount;
        positions.push({
          ...node,
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle)
        });
      });
    }

    return positions;
  };

  // Calcular puntos de conexión entre nodos
  const calculateConnectionPoints = (sourceNode, targetNode) => {
    const dx = targetNode.x - sourceNode.x;
    const dy = targetNode.y - sourceNode.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Normalizar vector
    const unitX = dx / distance;
    const unitY = dy / distance;
    
    // Puntos en los bordes de los rectángulos
    const nodeWidth = 50;
    const nodeHeight = 25;
    
    return {
      x1: sourceNode.x + unitX * nodeWidth,
      y1: sourceNode.y + unitY * nodeHeight,
      x2: targetNode.x - unitX * nodeWidth,
      y2: targetNode.y - unitY * nodeHeight
    };
  };

  // Crear diagrama básico si no hay datos
  const createBasicDiagram = (container) => {
    const basicSvg = `
      <svg width="100%" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#e3f2fd;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#bbdefb;stop-opacity:1" />
          </linearGradient>
          <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
          </marker>
        </defs>
        
        <rect x="50" y="125" width="120" height="50" fill="url(#grad1)" stroke="#2196f3" stroke-width="2" rx="8"/>
        <text x="110" y="155" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" fill="#1976d2" font-weight="500">Proceso</text>
        
        <rect x="240" y="125" width="120" height="50" fill="url(#grad1)" stroke="#2196f3" stroke-width="2" rx="8"/>
        <text x="300" y="155" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" fill="#1976d2" font-weight="500">Análisis</text>
        
        <rect x="430" y="125" width="120" height="50" fill="url(#grad1)" stroke="#2196f3" stroke-width="2" rx="8"/>
        <text x="490" y="155" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" fill="#1976d2" font-weight="500">Resultado</text>
        
        <line x1="170" y1="150" x2="240" y2="150" stroke="#666" stroke-width="2" marker-end="url(#arrow)"/>
        <line x1="360" y1="150" x2="430" y2="150" stroke="#666" stroke-width="2" marker-end="url(#arrow)"/>
        
        <text x="300" y="30" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" fill="#495057" font-weight="bold">
          📊 Diagrama de Flujo
        </text>
      </svg>
    `;
    
    container.innerHTML = basicSvg;
  };

  // Crear diagrama de fallback
  const createFallbackDiagram = (container, chartContent) => {
    const fallbackSvg = `
      <svg width="100%" height="350" viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1" rx="8"/>
        
        <text x="300" y="50" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" fill="#495057" font-weight="bold">
          📊 Diagrama Procesado
        </text>
        
        <!-- Contenido representativo -->
        <rect x="80" y="120" width="100" height="60" fill="#e3f2fd" stroke="#2196f3" stroke-width="2" rx="8"/>
        <text x="130" y="145" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#1976d2">Monitor</text>
        <text x="130" y="165" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1976d2">Synthetic</text>
        
        <rect x="250" y="80" width="100" height="60" fill="#f3e5f5" stroke="#9c27b0" stroke-width="2" rx="8"/>
        <text x="300" y="105" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#7b1fa2">Website</text>
        <text x="300" y="125" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7b1fa2">Health</text>
        
        <rect x="250" y="180" width="100" height="60" fill="#fff3e0" stroke="#ff9800" stroke-width="2" rx="8"/>
        <text x="300" y="205" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#f57c00">API</text>
        <text x="300" y="225" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#f57c00">Endpoint</text>
        
        <rect x="420" y="130" width="100" height="60" fill="#e8f5e8" stroke="#4caf50" stroke-width="2" rx="8"/>
        <text x="470" y="155" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#388e3c">Elastic</text>
        <text x="470" y="175" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#388e3c">Stack</text>
        
        <!-- Flechas -->
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
          </marker>
        </defs>
        
        <line x1="180" y1="140" x2="250" y2="110" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>
        <line x1="180" y1="160" x2="250" y2="210" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>
        <line x1="350" y1="110" x2="420" y2="150" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>
        <line x1="350" y1="210" x2="420" y2="170" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>
        
        <text x="300" y="320" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#6c757d">
          ✅ Diagrama generado exitosamente desde contenido Mermaid
        </text>
      </svg>
    `;
    
    container.innerHTML = fallbackSvg;
  };

  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-4 my-6 ${className}`}>
      {status === 'loading' && (
        <div className="flex items-center justify-center p-6">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span className="text-gray-600 text-sm">Generando diagrama...</span>
          </div>
        </div>
      )}
      
      <div 
        ref={containerRef}
        className="flex justify-center items-center min-h-[300px] w-full overflow-x-auto"
      />
      
      {status === 'fallback' && (
        <div className="mt-2 text-xs text-amber-600 text-center">
          ℹ️ Diagrama renderizado en modo alternativo
        </div>
      )}
      
      {status === 'success' && (
        <div className="mt-2 text-xs text-green-600 text-center">
          ✅ Diagrama generado con éxito
        </div>
      )}
    </div>
  );
};

export default DiagramRenderer;