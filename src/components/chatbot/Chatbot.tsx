import React, { useState } from 'react';
import { MessageCircleIcon, XIcon, SendIcon } from 'lucide-react';
interface Message {
  id: number;
  text: string;
  isUser: boolean;
}
export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    id: 1,
    text: "Hi there! I'm EduLink AI assistant. How can I help you with your learning today?",
    isUser: false
  }]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      isUser: true
    };
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    // Simulate AI response after a short delay
    setTimeout(() => {
      let response = "I'm sorry, I don't have an answer for that yet. As this is a prototype, my responses are limited.";
      // Simple keyword matching for demo purposes
      if (newMessage.toLowerCase().includes('math')) {
        response = 'I can help with math! What specific topic are you studying? Algebra, geometry, calculus?';
      } else if (newMessage.toLowerCase().includes('science')) {
        response = 'Science is fascinating! Are you looking for help with biology, chemistry, or physics?';
      } else if (newMessage.toLowerCase().includes('hello') || newMessage.toLowerCase().includes('hi')) {
        response = 'Hello! How can I assist with your learning today?';
      } else if (newMessage.toLowerCase().includes('thank')) {
        response = "You're welcome! Feel free to ask if you need more help.";
      }
      const aiMessage: Message = {
        id: messages.length + 2,
        text: response,
        isUser: false
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };
  return <>
      {/* Chatbot toggle button */}
      <button onClick={toggleChatbot} className="fixed z-30 bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors" aria-label="Toggle chatbot">
        {isOpen ? <XIcon className="h-6 w-6" /> : <MessageCircleIcon className="h-6 w-6" />}
      </button>
      {/* Chatbot panel */}
      {isOpen && <div className="fixed z-20 bottom-20 right-4 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col max-h-[70vh]">
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-medium">EduLink AI Assistant</h3>
            <button onClick={toggleChatbot} className="text-white hover:text-gray-200" aria-label="Close chatbot">
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-3">
            {messages.map(message => <div key={message.id} className={`max-w-[80%] p-3 rounded-lg ${message.isUser ? 'bg-blue-100 dark:bg-blue-900 text-gray-800 dark:text-gray-100 ml-auto' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100'}`}>
                {message.text}
              </div>)}
            {isTyping && <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-3 rounded-lg max-w-[80%]">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse delay-75"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse delay-150"></div>
                </div>
              </div>}
          </div>
          {/* Input form */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 dark:border-gray-700 p-3 flex">
            <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder="Ask me anything..." className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <SendIcon className="h-5 w-5" />
            </button>
          </form>
        </div>}
    </>;
}