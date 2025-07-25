import React, { useEffect, useState, useCallback } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/router';

// Ordered list of section IDs (must match the `ref` used in FloatingMenu)
const sectionIds = [
  'profile',
  'professional-summary',
  'aiml',
  'tools-technologies',
  'key-achievements',
  'kubernetes-experience',
  'kafka-experience',
  'elastic-experience',
  'performance-metrics',
  'project-breakdown',
  'agile-cicd',
  'timeline'
];

/**
 * Floating scroll arrows that let the user jump to the previous or next main section.
 * 
 * Mobile/Tablet (< xl):   arrows fixed on the left side of the viewport.
 * Desktop (>= xl): arrows fixed on the right side of the viewport.
 * 
 * Styling follows the glass / translucent buttons used in the FloatingMenu component.
 */
const ScrollArrows = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  const isOnBlogPage = currentPath.includes('/blog');

  // Cache of DOM elements that actually exist on the current page (may vary between routes)
  const [sections, setSections] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveSection = useCallback(() => {
    const scrollMiddle = window.scrollY + window.innerHeight / 2;
    let current = 0;
    sections.forEach((section, idx) => {
      const { el } = section;
      if (el.offsetTop <= scrollMiddle) {
        current = idx;
      }
    });
    setActiveIndex(current);
  }, [sections]);

  useEffect(() => {
    // Build list of existing section elements
    const existing = sectionIds
      .map((id) => document.getElementById(id))
      .map((el, idx) => (el ? { id: sectionIds[idx], el } : null))
      .filter(Boolean)
      // Sort by vertical position to guarantee correct order
      .sort((a, b) => a.el.offsetTop - b.el.offsetTop);
    setSections(existing);
  }, []);

  // Update active section on scroll
  useEffect(() => {
    if (sections.length === 0) return;
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, [updateActiveSection, sections]);

  const scrollToIndex = (idx) => {
    if (idx < 0 || idx >= sections.length) return;
    const { el } = sections[idx];
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    }
  };

  // Don't render arrows on blog pages to avoid navigation conflicts
  if (isOnBlogPage) {
    return null;
  }

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === sections.length - 1;

  // Common button styles - smaller on mobile/tablet, positioned in bottom-left corner
  const btnClass =
    'flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2 rounded-full backdrop-blur-md bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500';

  return (
    <div
      className="fixed z-50 flex flex-col items-center bottom-4 left-2 sm:top-1/2 sm:-translate-y-1/2 sm:left-3 xl:left-auto xl:right-4 xl:bottom-auto"
      aria-label="Scroll navigation arrows"
    >
      {/* Up arrow */}
      {!isFirst && (
        <button
          onClick={() => scrollToIndex(activeIndex - 1)}
          className={btnClass}
          aria-label="Scroll to previous section"
        >
          <ChevronUp size={16} className="sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Down arrow */}
      {!isLast && (
        <button
          onClick={() => scrollToIndex(activeIndex + 1)}
          className={btnClass}
          aria-label="Scroll to next section"
        >
          <ChevronDown size={16} className="sm:w-5 sm:h-5" />
        </button>
      )}
    </div>
  );
};

export default ScrollArrows;
