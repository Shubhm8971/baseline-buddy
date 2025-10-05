import * as path from 'path';
const data = require('./baseline.json') as Record<string, any>;

export type Feature = {
  id: string;
  title: string;
  support: Record<string,string>;
  fallback?: string;
};


export function getFeature(id: string): Feature | null {
  if (!id) return null;
  return data[id] || null;
}


const tokenToId: Record<string,string> = {
  // Core 50 features
  "gap": "flex-gap",
  ":has": "css-has",
  "subgrid": "css-subgrid",
  "backdrop-filter": "backdrop-filter",
  "dialog": "html-dialog",
  "input[type=date]": "input-date",
  "Intl": "js-intl",
  "navigator.clipboard": "navigator-clipboard",
  "WebSocket": "websocket",
  "web-animations": "web-animations",
  "object-position": "object-position",
  "aspect-ratio": "aspect-ratio",
  "scroll-snap": "scroll-snap",
  "viewBox": "object-view-box",
  "dialog-polyfill": "dialog-polyfill",
  "animation-play-state": "animation-play-state",
  "backface-visibility": "backface-visibility",
  "contain": "css-contain",
  "filter": "css-filter",
  "clip-path": "clip-path",
  "shape-outside": "shape-outside",
  "grid-template-areas": "grid-template-areas",
  "grid-auto-flow": "grid-auto-flow",
  "overflow-anchor": "overflow-anchor",
  "mix-blend-mode": "mix-blend-mode",
  "isolation": "isolation",
  "position-sticky": "position-sticky",
  "object-fit": "object-fit",
  "aspect-ratio-box": "aspect-ratio-box",
  "will-change": "will-change",
  "scroll-behavior": "scroll-behavior",
  "overscroll-behavior": "overscroll-behavior",
  "pointer-events": "pointer-events",
  "text-decoration-skip-ink": "text-decoration-skip-ink",
  "writing-mode": "writing-mode",
  "text-orientation": "text-orientation",
  "unicode-bidi": "unicode-bidi",
  "font-feature-settings": "font-feature-settings",
  "font-variant-numeric": "font-variant-numeric",
  "color-adjust": "color-adjust",
  "accent-color": "accent-color",
  "prefers-color-scheme": "prefers-color-scheme",
  "backdrop-filter-support": "backdrop-filter-support",
  "container-queries": "container-queries",
  "env-variables": "env-variables",
  "logical-properties": "logical-properties",
  "scroll-timeline": "scroll-timeline",
  "animation-timeline": "animation-timeline",
  "view-transition": "view-transition",
  "subgrid-advanced": "subgrid-advanced",

  "flex-gap": "flex-gap",
  "css:has": "css-has",
  "sub-grid": "css-subgrid",
  "backdropfilter": "backdrop-filter",
  "<dialog>": "html-dialog",
  "date-input": "input-date",
  "Intl.DateTimeFormat": "js-intl",
  "clipboard": "navigator-clipboard",
  "websocket": "websocket",
  "animations": "web-animations",
  "objectposition": "object-position",
  "aspectratio": "aspect-ratio",
  "scrollsnap": "scroll-snap",
  "view-box": "object-view-box",
  "dialogpolyfill": "dialog-polyfill",
  "animationplaystate": "animation-play-state",
  "backfacevisibility": "backface-visibility",
  "csscontain": "css-contain",
  "cssfilter": "css-filter"
};


export function findFeatureByWord(word: string): Feature | null {
  if (!word) return null;
  const key = tokenToId[word] || tokenToId[word.toLowerCase()];
  if (!key) return null;
  return getFeature(key);
}
