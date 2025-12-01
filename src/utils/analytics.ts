// Google Ads Conversion Tracking and Event Analytics

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Google Ads Conversion IDs (substitua pelos seus IDs reais)
const GOOGLE_ADS_ID = 'AW-XXXXXXXXX'; // Substitua pelo seu ID do Google Ads
const CONVERSION_LABELS = {
  whatsapp: 'whatsapp_click',
  phone: 'phone_call',
  contact_form: 'contact_submit',
  service_view: 'service_page_view',
  cta_click: 'cta_button_click'
};

// Track WhatsApp Click (Principal conversão)
export const trackWhatsAppClick = (serviceName?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Google Ads Conversion
    window.gtag('event', 'conversion', {
      'send_to': `${GOOGLE_ADS_ID}/${CONVERSION_LABELS.whatsapp}`,
      'value': 1.0,
      'currency': 'BRL'
    });

    // Google Analytics Event
    window.gtag('event', 'whatsapp_click', {
      'event_category': 'engagement',
      'event_label': serviceName || 'general',
      'value': 1
    });

    // GTM DataLayer Event
    if (window.dataLayer) {
      window.dataLayer.push({
        'event': 'whatsapp_click',
        'service': serviceName || 'general',
        'conversion_value': 1
      });
    }
  }
};

// Track Phone Call
export const trackPhoneCall = (serviceName?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Google Ads Conversion
    window.gtag('event', 'conversion', {
      'send_to': `${GOOGLE_ADS_ID}/${CONVERSION_LABELS.phone}`,
      'value': 1.0,
      'currency': 'BRL'
    });

    // Google Analytics Event
    window.gtag('event', 'phone_call', {
      'event_category': 'engagement',
      'event_label': serviceName || 'general',
      'value': 1
    });

    // GTM DataLayer Event
    if (window.dataLayer) {
      window.dataLayer.push({
        'event': 'phone_call',
        'service': serviceName || 'general',
        'conversion_value': 1
      });
    }
  }
};

// Track Service Page View (for remarketing)
export const trackServiceView = (serviceName: string, serviceCategory: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Google Ads remarketing
    window.gtag('event', 'page_view', {
      'send_to': GOOGLE_ADS_ID,
      'ecomm_pagetype': 'product',
      'ecomm_prodid': serviceName,
      'ecomm_category': serviceCategory
    });

    // Google Analytics Event
    window.gtag('event', 'service_view', {
      'event_category': 'page_view',
      'event_label': serviceName,
      'service_category': serviceCategory
    });

    // GTM DataLayer Event
    if (window.dataLayer) {
      window.dataLayer.push({
        'event': 'service_view',
        'service_name': serviceName,
        'service_category': serviceCategory
      });
    }
  }
};

// Track CTA Button Click
export const trackCTAClick = (ctaText: string, ctaLocation: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Google Analytics Event
    window.gtag('event', 'cta_click', {
      'event_category': 'engagement',
      'event_label': ctaText,
      'cta_location': ctaLocation
    });

    // GTM DataLayer Event
    if (window.dataLayer) {
      window.dataLayer.push({
        'event': 'cta_click',
        'cta_text': ctaText,
        'cta_location': ctaLocation
      });
    }
  }
};

// Track Scroll Depth (for engagement quality)
export const trackScrollDepth = (percentage: number, pagePath: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll', {
      'event_category': 'engagement',
      'event_label': `${percentage}%`,
      'page_path': pagePath
    });
  }
};

// Track Time on Page (for quality score)
export const trackTimeOnPage = (seconds: number, pagePath: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      'name': 'page_view_time',
      'value': seconds,
      'event_category': 'engagement',
      'event_label': pagePath
    });
  }
};

// Enhanced E-commerce for Service Interest
export const trackServiceInterest = (serviceName: string, price?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      'currency': 'BRL',
      'value': price || 0,
      'items': [{
        'item_id': serviceName.toLowerCase().replace(/\s+/g, '-'),
        'item_name': serviceName,
        'item_category': 'Investigação',
        'price': price || 0
      }]
    });
  }
};

// Track Lead Form Start (if you add forms later)
export const trackFormStart = (formName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      'event_category': 'lead_generation',
      'event_label': formName
    });
  }
};

// Track Lead Submission
export const trackLeadSubmit = (formName: string, leadValue: number = 10) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Google Ads Conversion
    window.gtag('event', 'conversion', {
      'send_to': `${GOOGLE_ADS_ID}/${CONVERSION_LABELS.contact_form}`,
      'value': leadValue,
      'currency': 'BRL'
    });

    // Google Analytics Event
    window.gtag('event', 'generate_lead', {
      'event_category': 'lead_generation',
      'event_label': formName,
      'value': leadValue
    });
  }
};
