import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackScrollDepth, trackTimeOnPage, trackServiceView } from '@/utils/analytics';

/**
 * Hook personalizado para rastrear engajamento da página
 * Útil para melhorar Quality Score do Google Ads
 */
export const usePageTracking = (serviceName?: string, serviceCategory?: string) => {
  const location = useLocation();
  const startTimeRef = useRef<number>(Date.now());
  const scrollDepthsTracked = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Reset ao mudar de página
    startTimeRef.current = Date.now();
    scrollDepthsTracked.current.clear();

    // Track service page view (para remarketing)
    if (serviceName && serviceCategory) {
      trackServiceView(serviceName, serviceCategory);
    }

    // Scroll depth tracking
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercent = Math.round((scrolled / scrollHeight) * 100);

      // Track at 25%, 50%, 75%, 90%
      const milestones = [25, 50, 75, 90];
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollDepthsTracked.current.has(milestone)) {
          scrollDepthsTracked.current.add(milestone);
          trackScrollDepth(milestone, location.pathname);
        }
      });
    };

    // Time on page tracking
    const trackTime = () => {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      
      // Track at 30s, 1min, 2min, 5min
      const timeThresholds = [30, 60, 120, 300];
      timeThresholds.forEach(threshold => {
        if (timeSpent >= threshold && timeSpent < threshold + 5) {
          trackTimeOnPage(timeSpent, location.pathname);
        }
      });
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    const timeInterval = setInterval(trackTime, 5000); // Check every 5 seconds

    // Track final time on page when leaving
    const handleBeforeUnload = () => {
      const finalTime = Math.round((Date.now() - startTimeRef.current) / 1000);
      if (finalTime > 10) { // Only track if more than 10 seconds
        trackTimeOnPage(finalTime, location.pathname);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearInterval(timeInterval);
    };
  }, [location, serviceName, serviceCategory]);
};
