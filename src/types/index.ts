export interface JetType {
  name: string;
  description: string;
  specs: string[];
  color: string;
}

export interface FeatureType {
  icon: React.FC;
  title: string;
  description: string;
}