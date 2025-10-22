"use client";

import { useState } from "react";
import { ContextorWidget, type Message } from "contexor";

export function ContextorDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setIsLoading(true);
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `This is a simulated response to: "${content}". In Phase 2, this will be replaced with real AI responses!`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <ContextorWidget
      messages={messages}
      isLoading={isLoading}
      onSendMessage={handleSendMessage}
      config={{
        position: "bottom-right",
        branding: {
          title: "Contexor Assistant",
          avatarFallback: "CA",
        },
        behavior: {
          welcomeMessage: "Hello! I'm your Contexor assistant. How can I help you today?",
          placeholder: "Ask me anything...",
          suggestedQuestions: [
            "What is Contexor?",
            "How does it work?",
            "Show me an example",
          ],
        },
        theme: {
          inheritHostTheme: true,
          // primaryColor: "220 70% 50%",
          // borderRadius: "0.75rem",
        },
      }}
    />
  );
}
