
import { LucideIcon } from "lucide-react";

export interface DemoContent {
  type: string;
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
  actionLink?: string;
  color: string;
  hoverColor: string;
  iconColor: string;
  demo: DemoContent;
}
