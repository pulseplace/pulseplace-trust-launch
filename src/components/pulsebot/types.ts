
export type MessageRole = "user" | "bot" | "system";

export interface Message {
  id: string | number;
  type?: MessageRole;
  sender?: "user" | "bot" | "system";
  content: string;
  timestamp?: Date;
  isThinking?: boolean;
  context?: string;
  alertLevel?: "none" | "info" | "warning" | "critical";
}
