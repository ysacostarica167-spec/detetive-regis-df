// Centralized WhatsApp click handler with analytics tracking + UTM tagging.
// Sends events to GTM/GA4 dataLayer and Google Ads conversion.

const PHONE = "5561982844543";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export interface WhatsAppClickOptions {
  /** Where on the site the click happened (e.g. "hero", "header", "footer", "faq", "services_cta", "contact_form", "floating_button"). */
  location: string;
  /** Pre-filled WhatsApp message. */
  message?: string;
  /** Optional override for the campaign (utm_campaign). */
  campaign?: string;
}

/**
 * Track a WhatsApp click event in GA4 / GTM / Google Ads, then open wa.me
 * with UTM parameters appended to the message so the destination link is
 * traceable in WhatsApp itself.
 */
export function trackWhatsAppClick(opts: WhatsAppClickOptions): void {
  const {
    location,
    message = "Olá! Vim pelo site e gostaria de falar com o Detetive Regis.",
    campaign = "site_organico",
  } = opts;

  const page = typeof window !== "undefined" ? window.location.pathname : "/";
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const utmSource = params.get("utm_source") || "site";
  const utmMedium = params.get("utm_medium") || "whatsapp_button";
  const utmCampaign = params.get("utm_campaign") || campaign;
  const utmContent = location;

  // Append UTM context to the message so we can identify in the WA chat.
  const taggedMessage = `${message}\n\n[origem: ${utmSource} • ${utmMedium} • ${utmCampaign} • ${utmContent} • ${page}]`;

  // GTM / GA4 dataLayer event
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "whatsapp_click",
      whatsapp_location: location,
      page_path: page,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      utm_content: utmContent,
    });

    // GA4 direct (caso gtag esteja carregado fora do GTM)
    if (typeof window.gtag === "function") {
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: location,
        page_path: page,
      });

      // Google Ads conversion (substitua o label se tiver um específico)
      window.gtag("event", "conversion", {
        send_to: "AW-17483763038",
      });
    }
  }

  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(taggedMessage)}`;
  try {
    window.open(url, "_blank");
  } catch {
    window.open(`tel:+${PHONE}`, "_blank");
  }
}
