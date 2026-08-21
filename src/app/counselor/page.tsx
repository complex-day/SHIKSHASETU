"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AppLayout } from "@/components/layout/AppLayout";
import { useAppStore } from "@/lib/store/useAppStore";
import { runCounselorAgent } from "@/lib/ai/agents/counselorAgent";
import { ChatMessage } from "@/types";
import {
  BotMessageSquare,
  Send,
  Sparkles,
  User,
  Volume2,
  VolumeX,
  Mic,
  Trash2,
  Download,
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

const SUGGESTED_PROMPTS = [
  "What should I do after Class 12 Science (PCM)?",
  "How can I get the PMSSS ₹3 Lakhs scholarship in J&K?",
  "Best colleges for Computer Science & Engineering in J&K?",
  "Scholarships and livelihood schemes for girls in J&K?",
  "Tell me about Mission Youth Parvaaz free IAS coaching"
];

export default function CounselorPage() {
  const { profile } = useAppStore();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "msg_welcome",
      sender: "assistant",
      text: `Hello **${profile.fullName}**! 👋 I am **ShikshaMitra**, your official AI Career & Education Counselor from the Government of Jammu & Kashmir.

I have loaded your profile from **${profile.district} District** (${profile.category} category). How can I assist your educational journey today? You can ask me about **career pathways**, **PMSSS scholarships**, **NIT Srinagar / IIT Jammu admissions**, or **skill certifications**.`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      suggestedFollowUps: [
        "How can I get the PMSSS ₹3 Lakhs scholarship in J&K?",
        "Best colleges for Computer Science & Engineering in J&K?",
        "What should I do after Class 12 Science (PCM)?"
      ],
      relatedActionUrl: "/assessment",
      relatedActionText: "Take 5D Aptitude Assessment"
    }
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr_${Date.now()}`,
      sender: "user",
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery("");
    setIsLoading(true);

    try {
      // Simulate intelligent agent deliberation latency
      await new Promise((res) => setTimeout(res, 600));

      const agentResponse = await runCounselorAgent(query, messages, profile);

      const botMsg: ChatMessage = {
        id: `bot_${Date.now()}`,
        sender: "assistant",
        text: agentResponse.replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        suggestedFollowUps: agentResponse.suggestedFollowUps,
        relatedActionUrl: agentResponse.actionUrl,
        relatedActionText: agentResponse.actionText
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Text to Speech
  const speakText = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      const cleanText = text.replace(/[*#_`]/g, "");
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Mic Toggle Simulation / Speech Recognition
  const toggleMic = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }
    setIsListening(true);
    setTimeout(() => {
      setInputQuery("Tell me the eligibility criteria for PMSSS 2026 scholarship");
      setIsListening(false);
    }, 2000);
  };

  const clearChat = () => {
    setMessages([
      {
        id: "msg_welcome",
        sender: "assistant",
        text: `Chat cleared. How can I assist you with your career or college decisions today, **${profile.fullName}**?`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        suggestedFollowUps: SUGGESTED_PROMPTS.slice(0, 3)
      }
    ]);
  };

  const exportChat = () => {
    const content = messages
      .map((m) => `[${m.timestamp}] ${m.sender.toUpperCase()}:\n${m.text}\n`)
      .join("\n-------------------------\n\n");
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ShikshaMitra_Advisory_${profile.fullName.replace(" ", "_")}.txt`;
    a.click();
  };

  return (
    <AppLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-gov flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-gov-primary to-indigo-900 flex items-center justify-center text-white shadow-md shadow-blue-900/20">
              <BotMessageSquare className="w-6 h-6 text-gov-gold" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black text-slate-900">ShikshaMitra AI Counselor</h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-gov-green border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gov-green animate-pulse" />
                  Online
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Official J&K 24/7 Educational AI Assistant • Multilingual Support
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportChat}
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Export Conversation"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </button>

            <button
              onClick={clearChat}
              className="p-2 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 text-slate-600 hover:text-gov-red text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Clear Chat History"
            >
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:inline">Clear</span>
            </button>
          </div>
        </div>

        {/* CHAT CONTAINER */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-gov flex flex-col h-[600px] overflow-hidden">
          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
            {messages.map((msg) => {
              const isAssistant = msg.sender === "assistant";

              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${isAssistant ? "justify-start" : "justify-end"}`}
                >
                  {isAssistant && (
                    <div className="w-8 h-8 rounded-xl bg-gov-primary text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1 shadow-sm">
                      <Sparkles className="w-4 h-4 text-gov-gold" />
                    </div>
                  )}

                  <div className={`max-w-2xl space-y-2 ${isAssistant ? "items-start" : "items-end"}`}>
                    <div
                      className={`p-4 rounded-3xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                        isAssistant
                          ? "bg-slate-50 border border-slate-200/80 text-slate-800 rounded-tl-sm"
                          : "bg-gov-primary text-white rounded-tr-sm"
                      }`}
                    >
                      <div className="prose prose-sm max-w-none text-xs sm:text-sm space-y-2 whitespace-pre-line">
                        {msg.text}
                      </div>

                      {/* Attached direct action link if available */}
                      {msg.relatedActionUrl && msg.relatedActionText && (
                        <div className="mt-3 pt-3 border-t border-slate-200/60">
                          <Link
                            href={msg.relatedActionUrl}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gov-primary text-white font-bold text-xs shadow-sm hover:bg-blue-700 transition-colors"
                          >
                            <span>{msg.relatedActionText}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Bottom Metadata & Speech button */}
                    <div className={`flex items-center gap-2 text-[10px] text-slate-400 px-2 ${isAssistant ? "justify-start" : "justify-end"}`}>
                      <span>{msg.timestamp}</span>
                      {isAssistant && (
                        <button
                          onClick={() => speakText(msg.text)}
                          className="hover:text-gov-primary transition-colors flex items-center gap-1 text-[11px]"
                          title="Read out loud"
                        >
                          {isSpeaking ? <VolumeX className="w-3.5 h-3.5 text-gov-orange" /> : <Volume2 className="w-3.5 h-3.5" />}
                        </button>
                      )}
                    </div>

                    {/* Follow-up Suggested Pills */}
                    {msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {msg.suggestedFollowUps.map((prompt, i) => (
                          <button
                            key={i}
                            onClick={() => handleSendMessage(prompt)}
                            className="text-left text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-50 hover:bg-blue-100 text-gov-primary border border-blue-200 transition-colors"
                          >
                            💬 {prompt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {!isAssistant && (
                    <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1 shadow-sm">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-xl bg-gov-primary text-white flex items-center justify-center font-bold text-xs shrink-0">
                  <Sparkles className="w-4 h-4 text-gov-gold animate-spin" />
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-500 text-xs flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-gov-primary animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-gov-primary animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-gov-primary animate-bounce [animation-delay:0.4s]" />
                  </div>
                  <span>ShikshaMitra is researching J&K databases...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Prompts Bar */}
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 overflow-x-auto flex items-center gap-2 shrink-0">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0">
              Suggestions:
            </span>
            {SUGGESTED_PROMPTS.map((p, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(p)}
                className="text-[11px] font-medium text-slate-700 bg-white hover:bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 shrink-0 transition-colors truncate max-w-xs"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Box Bar */}
          <div className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2">
            <button
              type="button"
              onClick={toggleMic}
              className={`p-2.5 rounded-xl border transition-colors ${
                isListening
                  ? "bg-rose-50 border-rose-300 text-gov-red animate-pulse"
                  : "bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-700"
              }`}
              title={isListening ? "Listening..." : "Voice Input"}
            >
              <Mic className="w-4 h-4" />
            </button>

            <input
              type="text"
              placeholder="Ask ShikshaMitra anything (e.g. 'What is the cutoff for NIT Srinagar CSE?')..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gov-primary text-xs sm:text-sm font-medium"
            />

            <button
              onClick={() => handleSendMessage()}
              disabled={!inputQuery.trim() || isLoading}
              className="px-5 py-2.5 rounded-xl bg-gov-primary hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-900/15 flex items-center gap-1.5 transition-colors disabled:opacity-40"
            >
              <span>Send</span>
              <Send className="w-4 h-4 text-gov-gold" />
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
