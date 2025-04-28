
import { LucideIcon } from "lucide-react";

export interface FeatureDemo {
  type: 'image';
  src: string;
  caption: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  extendedDescription: string;
  demoTitle: string;
  demoDescription: string;
  actionLabel: string;
  color: string;
  hoverColor: string;
  iconColor: string;
  demo: FeatureDemo;
}
