
export type FeatureStatus = 'available' | 'in-progress' | 'planned' | 'unique' | 'missing';

export interface CompetitorFeature {
  id: string;
  name: string;
  description: string;
  category: 'trust' | 'certification' | 'analytics' | 'engagement' | 'security' | 'integration';
  importance: 1 | 2 | 3 | 4 | 5; // 1 = low, 5 = critical
  status: {
    pulseplace: FeatureStatus;
    competitor1: FeatureStatus;
    competitor2: FeatureStatus;
    competitor3: FeatureStatus;
  };
  notes?: string;
}

export interface Competitor {
  id: string;
  name: string;
  description: string;
  primaryFocus: string;
  strengthAreas: string[];
  weaknessAreas: string[];
  fundingStage: string;
  marketShare?: string;
  pricePoint: 'low' | 'medium' | 'high' | 'enterprise';
}

export const competitors: Competitor[] = [
  {
    id: 'culture-amp',
    name: 'Culture Amp',
    description: 'Employee experience platform with engagement surveys and performance reviews',
    primaryFocus: 'Employee Experience Platform',
    strengthAreas: ['Survey Technology', 'Large Enterprise Adoption', 'Performance Management'],
    weaknessAreas: ['Trust Certification', 'Explainable AI', 'Industry-specific Benchmarking'],
    fundingStage: 'Series F ($100M+)',
    marketShare: '22% of enterprise market',
    pricePoint: 'enterprise',
  },
  {
    id: 'peakon',
    name: 'Peakon (Workday)',
    description: 'Employee success platform with continuous listening and insights',
    primaryFocus: 'Continuous Employee Listening',
    strengthAreas: ['Real-time Engagement Tracking', 'Advanced NLP', 'Integration Ecosystem'],
    weaknessAreas: ['Trust-focused Metrics', 'Certification Engine', 'SMB Solutions'],
    fundingStage: 'Acquired by Workday ($700M)',
    marketShare: '18% of enterprise market',
    pricePoint: 'enterprise',
  },
  {
    id: 'glint',
    name: 'Glint (Microsoft)',
    description: 'Employee engagement platform with pulse surveys and analytics',
    primaryFocus: 'Employee Engagement & Development',
    strengthAreas: ['Microsoft/LinkedIn Integration', 'Action Planning', 'Learning Integration'],
    weaknessAreas: ['Trust Metrics', 'Public Certification', 'Startup-friendly Solutions'],
    fundingStage: 'Acquired by Microsoft (via LinkedIn)',
    pricePoint: 'high',
  }
];

export const features: CompetitorFeature[] = [
  // Trust & Certification Features
  {
    id: 'pulse-certified',
    name: 'Trust Certification Platform',
    description: 'Public, verifiable trust badge system with transparent metrics and renewal requirements',
    category: 'certification',
    importance: 5,
    status: {
      pulseplace: 'unique',
      competitor1: 'missing',
      competitor2: 'missing',
      competitor3: 'missing',
    },
    notes: 'Our primary differentiator - no competitor offers public, verifiable trust certification'
  },
  {
    id: 'explainable-ai',
    name: 'Explainable AI Scoring',
    description: 'Transparent, non-black-box algorithm for calculating culture health scores',
    category: 'trust',
    importance: 5,
    status: {
      pulseplace: 'unique',
      competitor1: 'missing',
      competitor2: 'missing',
      competitor3: 'missing',
    },
    notes: 'Key differentiation from competitors who use black-box ML scoring'
  },
  {
    id: 'pulse-score',
    name: 'PulseScore™ Methodology',
    description: '40% Trust, 30% Engagement, 30% Wellbeing balanced methodology',
    category: 'trust',
    importance: 5,
    status: {
      pulseplace: 'available',
      competitor1: 'missing',
      competitor2: 'missing',
      competitor3: 'missing',
    }
  },
  {
    id: 'badge-embed',
    name: 'Embeddable Certification Badge',
    description: 'Embeddable, verifiable trust badge for career sites and public profiles',
    category: 'certification',
    importance: 4,
    status: {
      pulseplace: 'available',
      competitor1: 'missing',
      competitor2: 'missing',
      competitor3: 'missing',
    }
  },
  
  // Analytics Features
  {
    id: 'trust-analytics',
    name: 'Trust-specific Analytics',
    description: 'Dedicated analytics focusing specifically on workplace trust metrics',
    category: 'analytics',
    importance: 5,
    status: {
      pulseplace: 'available',
      competitor1: 'missing',
      competitor2: 'missing',
      competitor3: 'missing',
    }
  },
  {
    id: 'benchmark-data',
    name: 'Industry Benchmarking',
    description: 'Compare metrics against industry standards and similar organizations',
    category: 'analytics',
    importance: 4,
    status: {
      pulseplace: 'available',
      competitor1: 'available',
      competitor2: 'available',
      competitor3: 'available',
    }
  },
  {
    id: 'predictive-analytics',
    name: 'Predictive Trust Analytics',
    description: 'AI-powered predictions of future trust issues and engagement risks',
    category: 'analytics',
    importance: 4,
    status: {
      pulseplace: 'in-progress',
      competitor1: 'available',
      competitor2: 'available',
      competitor3: 'available',
    },
    notes: 'Critical feature needed for competitive parity'
  },
  {
    id: 'trend-visualization',
    name: 'Trust Trend Visualization',
    description: 'Visual representation of trust trends over time with drill-down capabilities',
    category: 'analytics',
    importance: 3,
    status: {
      pulseplace: 'available',
      competitor1: 'available',
      competitor2: 'available',
      competitor3: 'available',
    }
  },
  
  // Engagement Features
  {
    id: 'pulse-surveys',
    name: 'Dynamic Pulse Surveys',
    description: 'Short, frequent surveys that adapt based on previous responses and organizational context',
    category: 'engagement',
    importance: 5,
    status: {
      pulseplace: 'available',
      competitor1: 'available',
      competitor2: 'available',
      competitor3: 'available',
    }
  },
  {
    id: 'ai-chat',
    name: 'AI Culture Assistant',
    description: 'AI-powered chatbot for culture and trust guidance',
    category: 'engagement',
    importance: 4,
    status: {
      pulseplace: 'available',
      competitor1: 'missing',
      competitor2: 'missing',
      competitor3: 'missing',
    }
  },
  {
    id: 'action-planning',
    name: 'Trust Action Planning',
    description: 'Guided workflows for improving trust metrics with specific action items',
    category: 'engagement',
    importance: 4,
    status: {
      pulseplace: 'planned',
      competitor1: 'available',
      competitor2: 'available',
      competitor3: 'available',
    },
    notes: 'Important gap to address before beta launch'
  },
  
  // Security Features
  {
    id: 'anonymous-feedback',
    name: 'True Anonymity Engine',
    description: 'Advanced anonymization that ensures employee feedback cannot be traced',
    category: 'security',
    importance: 5,
    status: {
      pulseplace: 'available',
      competitor1: 'available',
      competitor2: 'available',
      competitor3: 'available',
    }
  },
  {
    id: 'granular-permissions',
    name: 'Role-based Access Controls',
    description: 'Granular permissions for viewing sensitive trust and culture data',
    category: 'security',
    importance: 4,
    status: {
      pulseplace: 'in-progress',
      competitor1: 'available',
      competitor2: 'available',
      competitor3: 'available',
    },
    notes: 'Critical security feature needed for enterprise clients'
  },
  
  // Integration Features
  {
    id: 'slack-integration',
    name: 'Slack Integration',
    description: 'Deep integration with Slack for surveys and insights delivery',
    category: 'integration',
    importance: 3,
    status: {
      pulseplace: 'planned',
      competitor1: 'available',
      competitor2: 'available',
      competitor3: 'available',
    }
  },
  {
    id: 'teams-integration',
    name: 'Microsoft Teams Integration',
    description: 'Deep integration with Microsoft Teams for surveys and insights delivery',
    category: 'integration',
    importance: 3,
    status: {
      pulseplace: 'planned',
      competitor1: 'missing',
      competitor2: 'missing',
      competitor3: 'available',
    }
  },
  {
    id: 'crm-integration',
    name: 'CRM Integration',
    description: 'Integration with major CRM platforms for customer-facing trust metrics',
    category: 'integration',
    importance: 2,
    status: {
      pulseplace: 'planned',
      competitor1: 'missing',
      competitor2: 'missing',
      competitor3: 'missing',
    }
  }
];

export const getFeaturesByCategory = (category: string) => {
  return features.filter(feature => feature.category === category);
};

export const getUniqueFeatures = () => {
  return features.filter(feature => feature.status.pulseplace === 'unique');
};

export const getMissingCriticalFeatures = () => {
  return features.filter(
    feature => feature.status.pulseplace === 'missing' && feature.importance >= 4
  );
};

export const getCompetitiveGapFeatures = () => {
  return features.filter(
    feature => 
      (feature.status.pulseplace === 'planned' || feature.status.pulseplace === 'in-progress') && 
      (feature.status.competitor1 === 'available' || 
       feature.status.competitor2 === 'available' || 
       feature.status.competitor3 === 'available')
  );
};

export const getRoadmapPriorities = () => {
  return features
    .filter(feature => feature.status.pulseplace === 'planned' || feature.status.pulseplace === 'in-progress')
    .sort((a, b) => b.importance - a.importance);
};
