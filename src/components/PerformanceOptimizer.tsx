import { useEffect } from 'react';

/**
 * Component to optimize Core Web Vitals and overall performance
 */
const PerformanceOptimizer = () => {
  useEffect(() => {
    // Lazy load images that are not in viewport
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      lazyImages.forEach((img) => imageObserver.observe(img));
    }

    // Prefetch important pages on hover
    const setupPrefetch = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href');
          if (href && !document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = href;
            document.head.appendChild(prefetchLink);
          }
        });
      });
    };

    // Defer non-critical scripts
    const deferScripts = () => {
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach((script) => {
        script.setAttribute('defer', '');
      });
    };

    // Run optimizations
    setupPrefetch();
    deferScripts();

    // Report Web Vitals to Google Analytics
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'LCP', {
            event_category: 'Web Vitals',
            value: Math.round(lastEntry.startTime),
            event_label: 'LCP',
          });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'FID', {
              event_category: 'Web Vitals',
              value: Math.round(entry.processingStart - entry.startTime),
              event_label: 'FID',
            });
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'CLS', {
            event_category: 'Web Vitals',
            value: Math.round(clsValue * 1000),
            event_label: 'CLS',
          });
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    return () => {
      // Cleanup observers if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
