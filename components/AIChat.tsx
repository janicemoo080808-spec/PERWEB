import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { chatWithResume } from '../services/geminiService';

interface AIChatProps {
  context: string;
}

const AIChat: React.FC<AIChatProps> = ({ context }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      { id: '1', role: 'model', text: languageIsEn() ? "Professional Portfolio Assistant Active. Inquire for strategic details." : "专业作品集助手已激活。您可以询问关于项目背景、策略规划或技术细节的信息。" }
    ]);
  }, [context]);

  function languageIsEn() { return context.toLowerCase().includes('janice'); }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await chatWithResume(userMsg.text, context);
      const botMsg: ChatMessage = { id: (Date.now() + 1).toString(), role: 'model', text: responseText };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: "Service link error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center shadow-2xl border border-white/10 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-10 transition-opacity" />
            <MessageSquare className="text-gray-400 group-hover:text-white w-5 h-5 transition-colors" />
            <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(134, 87, 11, 0.8)]" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-80 h-[450px] bg-zinc-950 border border-white/10 rounded-3xl shadow-3xl flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">AI Concierge</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-[11px] leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-white text-black font-medium'
                        : 'bg-zinc-900 text-gray-400 border border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-900 p-3 rounded-2xl border border-white/5 flex gap-2 items-center">
                     <Loader2 className="w-3 h-3 text-gray-600 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-5 border-t border-white/5 bg-black/40">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-white/5 border border-white/5 rounded-xl px-4 py-2 text-[11px] text-white focus:outline-none focus:border-white/20 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-white hover:bg-gray-200 disabled:opacity-20 text-black p-2 rounded-xl transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;