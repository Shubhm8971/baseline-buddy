import baselineData from './baseline.json';

interface FeatureInfo {
  name: string;
  support: Record<string, string>;
  fallback?: string;
}

// tell TypeScript the type of your JSON data
const data: Record<string, FeatureInfo> = Object.fromEntries(
  Object.entries(baselineData).map(([key, value]) => [
    key,
    { name: key, ...value }
  ])
);

export async function getFeatureCompatibility(featureName: string): Promise<FeatureInfo | null> {
  const key = featureName.toLowerCase();

  const feature = data[key];
  if (!feature) return null;

  return {
    name: key,
    support: feature.support,
    fallback: feature.fallback || 'No fallback available',
  };
}
