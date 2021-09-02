import { Event } from "../types/googleAnalytics/event";
export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

// IDが取得できない場合の対処
export const existsGaId = GA_ID !== "";

// PV測定
export const pageview = (path: string) => {
  if (GA_ID)
    window.gtag("config", GA_ID, {
      page_path: path,
    });
};

// イベント測定
export const event = ({ action, category, label }: Event) => {
  if (!existsGaId) {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
  });
};
