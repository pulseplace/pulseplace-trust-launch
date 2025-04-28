
export type MessageRole = "user" | "bot" | "system";

export interface Message {
  id: number;
  type: MessageRole;
  content: string;
  isThinking?: boolean;
  context?: string;
  alertLevel?: "none" | "info" | "warning" | "critical";
}

