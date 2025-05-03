
import React, { useState, useRef, useEffect } from 'react';
import { MessageBubble } from "./MessageBubble";
import { Message } from "./types";
import { collection, addDoc, query, orderBy, limit, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '@/integrations/firebase/client';
import { useAuth } from '@/hooks/useAuth';
import { v4 as uuidv4 } from 'uuid';

interface ChatInterfaceProps {
  initialMessages?: Message[];
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ initialMessages = [] }) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();

  // Load chat history when component mounts
  useEffect(() => {
    if (user) {
      loadChatHistory();
    }
  }, [user]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Load chat history from Firebase
  const loadChatHistory = async () => {
    try {
      if (!user) return;
      
      const messagesRef = collection(db, 'chat_history');
      const q = query(
        messagesRef, 
        orderBy('timestamp', 'desc'),
        limit(20)
      );
      
      const querySnapshot = await getDocs(q);
      const loadedMessages: Message[] = [];
      
      querySnapshot.forEach(doc => {
        const data = doc.data();
        loadedMessages.push({
          id: doc.id,
          content: data.content,
          sender: data.sender,
          timestamp: data.timestamp?.toDate(),
        });
      });
      
      // Only set messages if we have history and no initial messages
      if (loadedMessages.length > 0 && initialMessages.length === 0) {
        setMessages(loadedMessages.reverse());
      }
    } catch (error) {
      console.error("Error loading chat history:", error);
    }
  };

  // Save message to Firebase
  const saveMessageToFirebase = async (message: Message) => {
    try {
      if (!user) return;
      
      await addDoc(collection(db, 'chat_history'), {
        content: message.content,
        sender: message.sender,
        user_id: user.uid,
        timestamp: serverTimestamp()
      });
    } catch (error) {
      console.error("Error saving message:", error);
    }
  };

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    // Simple response generation based on keywords in the message
    const lowercaseMessage = userMessage.toLowerCase();
    
    if (lowercaseMessage.includes('trust') || lowercaseMessage.includes('certification')) {
      return "Trust certification is a core part of PulsePlace. Our certification process evaluates your organization based on transparent trust metrics and provides you with a verifiable badge.";
    } else if (lowercaseMessage.includes('engagement') || lowercaseMessage.includes('survey')) {
      return "PulsePlace measures engagement through dynamic pulse surveys that focus on workplace culture. These regular check-ins help track changes in engagement over time.";
    } else if (lowercaseMessage.includes('wellbeing') || lowercaseMessage.includes('well-being')) {
      return "Emotional wellbeing accounts for 30% of your PulseScore. We measure this through targeted questions about work-life balance, stress levels, and overall satisfaction.";
    } else if (lowercaseMessage.includes('score') || lowercaseMessage.includes('pulsescore')) {
      return "The PulseScore is calculated based on 40% Trust metrics, 30% Engagement Stability, and 30% Emotional Wellbeing. All scoring is transparent and explainable.";
    } else if (lowercaseMessage.includes('badge') || lowercaseMessage.includes('certification badge')) {
      return "Once certified, you'll receive a PulsePlace certification badge that you can embed on your website, include in job postings, and share on social media to showcase your commitment to workplace culture.";
    } else {
      return "I'm PulseBot, your workplace culture assistant. I can help answer questions about trust metrics, engagement, wellbeing, certification process, or anything else related to PulsePlace.";
    }
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;
    
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      content: inputText,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsProcessing(true);

    // Save user message
    await saveMessageToFirebase(userMessage);
    
    // Generate bot response
    const botResponseText = await generateBotResponse(inputText);
    
    // Add bot message with a slight delay
    setTimeout(async () => {
      const botMessage: Message = {
        id: uuidv4(),
        content: botResponseText,
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsProcessing(false);
      
      // Save bot message
      await saveMessageToFirebase(botMessage);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble key={message.id.toString()} message={message} />
        ))}
        
        {isProcessing && (
          <MessageBubble 
            message={{
              id: "processing",
              content: "Thinking...",
              sender: "bot",
              isThinking: true
            }}
          />
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pulse-blue"
            placeholder="Ask PulseBot about workplace culture..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            className="bg-pulse-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={handleSendMessage}
            disabled={isProcessing}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
