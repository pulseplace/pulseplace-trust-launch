
type ResponseConfig = {
  content: string;
  alertLevel?: "none" | "info" | "warning" | "critical";
  context?: string;
};

export const generateDemoResponse = (userMessage: string): ResponseConfig => {
  const lowercaseMessage = userMessage.toLowerCase();
  
  if (lowercaseMessage.includes("psychological safety")) {
    return {
      content: "Based on our analysis, psychological safety can be improved through:\n\n1. Regular anonymous feedback channels\n2. 'Learning from failure' sessions\n3. Active celebration of diverse viewpoints\n4. Clear escalation paths for concerns\n\nWould you like specific implementation strategies for any of these areas?",
      alertLevel: "info",
      context: "Based on analysis of similar organizations"
    };
  }
  
  if (lowercaseMessage.includes("trust metrics")) {
    return {
      content: "Your organization's trust metrics show:\n\n- Leadership transparency: 78%\n- Peer-to-peer trust: 82%\n- Information sharing: 71%\n- Decision-making clarity: 75%\n\nThe most significant opportunity for improvement is in information sharing practices. Would you like recommendations for improvement?",
      alertLevel: "info",
      context: "Based on Q1-Q2 survey data"
    };
  }
  
  if (lowercaseMessage.includes("transparent leadership")) {
    return {
      content: "Here are key practices for transparent leadership:\n\n1. Regular town halls with open Q&A\n2. Shared OKRs and progress tracking\n3. Clear communication of strategic decisions\n4. Consistent feedback loops\n\nI notice successful organizations implement these gradually. Would you like a step-by-step implementation plan?",
      alertLevel: "none",
      context: "Based on leadership effectiveness studies"
    };
  }

  return {
    content: "I understand you're interested in improving workplace culture. Could you tell me more specifically what aspects you'd like to focus on? For example:\n\n- Trust building\n- Employee engagement\n- Leadership development\n- Team communication",
    alertLevel: "none",
    context: "Based on common workplace culture inquiries"
  };
};
