
type ResponseConfig = {
  content: string;
  alertLevel?: "none" | "info" | "warning" | "critical";
  context?: string;
};

export const generateDemoResponse = (userMessage: string): ResponseConfig => {
  const lowercaseMessage = userMessage.toLowerCase();
  
  // Extract organization name if present in the message
  const orgMatch = userMessage.match(/Organization: ([^,]+)/);
  const organizationName = orgMatch ? orgMatch[1] : "your organization";
  
  // Extract PulseScore if present
  const scoreMatch = userMessage.match(/PulseScore: (\d+)/);
  const pulseScore = scoreMatch ? parseInt(scoreMatch[1]) : 85;
  
  if (lowercaseMessage.includes("psychological safety")) {
    return {
      content: `Based on our analysis, ${organizationName}'s psychological safety score is ${Math.min(95, pulseScore + Math.floor(Math.random() * 10) - 5)}/100.\n\nWe recommend:\n\n1. Regular anonymous feedback channels\n2. 'Learning from failure' sessions\n3. Active celebration of diverse viewpoints\n4. Clear escalation paths for concerns\n\nWould you like specific implementation strategies for any of these areas?`,
      alertLevel: "info",
      context: "Based on analysis of employee responses and trust metrics"
    };
  }
  
  if (lowercaseMessage.includes("trust metrics") || lowercaseMessage.includes("trust dynamics")) {
    return {
      content: `${organizationName}'s trust metrics show:\n\n- Leadership transparency: ${Math.min(95, pulseScore + Math.floor(Math.random() * 5) - 2)}%\n- Peer-to-peer trust: ${Math.min(95, pulseScore + Math.floor(Math.random() * 8))}%\n- Information sharing: ${Math.min(95, pulseScore - Math.floor(Math.random() * 10))}%\n- Decision-making clarity: ${Math.min(95, pulseScore - Math.floor(Math.random() * 5))}%\n\nThe most significant opportunity for improvement is in information sharing practices. Would you like recommendations for improvement?`,
      alertLevel: "info",
      context: "Based on Q1-Q2 survey data and leadership assessments"
    };
  }
  
  if (lowercaseMessage.includes("transparent leadership")) {
    return {
      content: `Here are key practices for transparent leadership that could help ${organizationName} improve its PulseScore™ of ${pulseScore}:\n\n1. Regular town halls with open Q&A\n2. Shared OKRs and progress tracking\n3. Clear communication of strategic decisions\n4. Consistent feedback loops\n\nI notice successful organizations implement these gradually. Would you like a step-by-step implementation plan?`,
      alertLevel: "none",
      context: "Based on leadership effectiveness studies and industry benchmarks"
    };
  }

  if (lowercaseMessage.includes("strengths") || lowercaseMessage.includes("opportunities")) {
    return {
      content: `Based on ${organizationName}'s PulseScore™ of ${pulseScore}, here are the key strengths and opportunities:\n\nStrengths:\n• Leadership transparency (${Math.min(95, pulseScore + 8)}%)\n• Team collaboration (${Math.min(95, pulseScore + 5)}%)\n• Work-life balance (${Math.min(95, pulseScore + 3)}%)\n\nOpportunities:\n• Role clarity (${Math.max(60, pulseScore - 15)}%)\n• Recognition frequency (${Math.max(65, pulseScore - 12)}%)\n• Career development pathways (${Math.max(70, pulseScore - 10)}%)\n\nWould you like specific recommendations for any of these areas?`,
      alertLevel: "info",
      context: "Analysis based on comprehensive pulse surveys and engagement metrics"
    };
  }

  if (lowercaseMessage.includes("engagement") || lowercaseMessage.includes("improve engagement")) {
    return {
      content: `To improve ${organizationName}'s engagement metrics, I recommend focusing on these key areas:\n\n1. Enhance role clarity through quarterly alignment sessions\n2. Implement a structured recognition program\n3. Create visible career pathways with skill development maps\n4. Increase transparency in decision-making processes\n\nOrganizations with similar profiles have seen an average 14% increase in engagement scores within 6 months by implementing these strategies systematically.`,
      alertLevel: "info",
      context: "Recommendations based on analysis of 300+ similar organizations"
    };
  }

  if (lowercaseMessage.includes("certification") || lowercaseMessage.includes("pulse certified")) {
    return {
      content: `${organizationName}'s current PulseScore™ of ${pulseScore} puts it in the top ${100 - Math.floor(pulseScore / 3)}% of organizations in your industry.\n\nTo achieve Pulse Certified™ status, you need to maintain a score of 85+ for two consecutive quarters. Your certification would highlight your commitment to:\n\n• Transparent leadership\n• Psychological safety\n• Work-life harmony\n• Career development\n\nThe certification badge can be displayed on your careers page, LinkedIn, and other platforms to attract top talent.`,
      alertLevel: "none",
      context: "Based on PulsePlace certification requirements and industry benchmarks"
    };
  }

  return {
    content: `I understand you're interested in improving ${organizationName}'s workplace culture with its current PulseScore™ of ${pulseScore}.\n\nCould you tell me more specifically what aspects you'd like to focus on? For example:\n\n- Trust building\n- Employee engagement\n- Leadership development\n- Team communication\n- Psychological safety\n- Work-life harmony`,
    alertLevel: "none",
    context: "Based on common workplace culture inquiries and your organization's profile"
  };
};
