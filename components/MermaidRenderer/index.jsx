import { useEffect, useRef, useState } from 'react';

const MermaidRenderer = ({ chart, className = "" }) => {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (!chart || !containerRef.current) return;

    let mounted = true;

    const renderMermaid = async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          securityLevel: 'loose',
          fontFamily: 'system-ui, sans-serif',
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis',
            padding: 15
          }
        });

        if (mounted && containerRef.current) {
          const id = 'mermaid-' + Date.now();
          const result = await mermaid.render(id, chart);
          containerRef.current.innerHTML = result.svg || result;
          setStatus('success');
        }
      } catch (error) {
        if (mounted && containerRef.current) {
          containerRef.current.innerHTML = `
            <div class="text-center p-4 bg-red-50 border border-red-200 rounded">
              <p class="text-red-600">Error al renderizar el diagrama</p>
            </div>
          `;
          setStatus('error');
        }
      }
    };

    // Pequeño delay para asegurar que el DOM esté listo
    const timer = setTimeout(renderMermaid, 50);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [chart]);

  return (
    <div className={`my-6 ${className}`}>
      {status === 'loading' && (
        <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <span className="text-gray-600 text-sm">Cargando diagrama...</span>
        </div>
      )}
      
      <div 
        ref={containerRef}
        className="w-full mermaid-content"
        style={{ minHeight: status === 'loading' ? '100px' : 'auto' }}
      />
    </div>
  );
};

export default MermaidRenderer;