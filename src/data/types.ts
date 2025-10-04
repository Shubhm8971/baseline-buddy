export type BrowserId = 'chrome' | 'firefox' | 'safari' | 'edge' | (string & {});
export type SupportStatus = string; // e.g. "✅" | "❌" | "⚠️" or "yes"/"no"/"partial"

export interface RawFeature {
  support: Record<BrowserId, SupportStatus>;
  fallback?: string;
}

export interface FeatureInfo extends RawFeature {
  name: string; // computed from the key
}
