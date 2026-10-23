import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  X, 
  Minimize2, 
  Maximize2, 
  Settings, 
  RotateCcw, 
  Copy, 
  Check, 
  Bot, 
  User, 
  Flame,
  Radio,
  ExternalLink
} from 'lucide-react';
import { SettingsModal } from './SettingsModal';
import { CricketMatch } from '../../types/cricket';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: string;
  mode?: 'gemini' | 'demo_fallback';
}

interface CricMindAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  activeMatchContext?: CricketMatch | null;
  initialTopic?: string | null;
  onClearInitialTopic?: () => void;
}

export const CricMindAssistant: React.FC<CricMindAssistantProps> = ({
  isOpen,
  onClose,
  onOpen,
  activeMatchContext,
  initialTopic,
  onClearInitialTopic
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      content: `🏏 **Namaste & Welcome to CricMind AI!**\n\nI am your live Chief Cricket Analyst for **CricPulse HD**. Ask me anything about:\n- **Nepal Premier League (NPL)**: Franchise rosters, marquee players, TU Cricket Ground pitch conditions, and रू 1.1 Crore prize stakes.\n- **International Cricket**: Men's & Women's World Cups, WTC, ODI rivalries, and ICC team rankings.\n- **Global Leagues**: The Hundred (100 balls), IPL, BBL, PSL, CPL, ILT20.\n- **Tactical Breakdown**: Death-overs yorkers, DLS calculations, DRS review strategies.\n\n*How can I elevate your cricket knowledge today?*`,
      timestamp: 'Just now',
      mode: 'gemini'
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [apiKey, setApiKey] = useState<string>(() => {
    return localStorage.getItem('cricpulse_gemini_key') || '';
  });
  const [hasConsented, setHasConsented] = useState<boolean>(() => {
    return localStorage.getItem('cricpulse_ai_consent') === 'true';
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  // Handle external topic triggers (e.g., from NPL Hub or Match Center)
  useEffect(() => {
    if (initialTopic) {
      onOpen();
      setIsMinimized(false);
      handleSendMessage(initialTopic);
      if (onClearInitialTopic) onClearInitialTopic();
    }
  }, [initialTopic]);

  const handleSaveKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('cricpulse_gemini_key', key);
  };

  const handleRemoveKey = () => {
    setApiKey('');
    localStorage.removeItem('cricpulse_gemini_key');
  };

  const handleConsentChange = (val: boolean) => {
    setHasConsented(val);
    localStorage.setItem('cricpulse_ai_consent', val ? 'true' : 'false');
  };

  const quickPrompts = [
    '🇳🇵 NPL Season Preview & Franchise Odds',
    '⚡ Explain DLS Method in T20 Rain Delays',
    '💯 How does "The Hundred" format work?',
    '🏏 Analyze Jasprit Bumrah vs Travis Head',
    '🏆 NPL रू 1.1 Crore Prize Breakdown'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const prompt = (textToSend || inputText).trim();
    if (!prompt || isSubmitting) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsSubmitting(true);

    try {
      // Send request to our Express backend Gemini proxy endpoint
      const res = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: prompt,
          history: messages.slice(-6).map((m) => ({
            role: m.role,
            content: m.content
          })),
          userKey: apiKey || undefined,
          matchContext: activeMatchContext
            ? {
                title: activeMatchContext.title,
                series: activeMatchContext.series,
                venue: activeMatchContext.venue,
                status: activeMatchContext.statusText,
                scoreA: `${activeMatchContext.teamA.name} ${activeMatchContext.teamA.runs}/${activeMatchContext.teamA.wickets}`,
                scoreB: `${activeMatchContext.teamB.name} ${activeMatchContext.teamB.runs}/${activeMatchContext.teamB.wickets}`,
                winProbability: activeMatchContext.winProbability
              }
            : undefined
        })
      });

      if (!res.ok) {
        throw new Error(`Server returned HTTP ${res.status}`);
      }

      const data = await res.json();
      const botResponse: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        content: data.text || 'No response returned from analyst.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        mode: data.mode
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (err: any) {
      console.warn('Backend proxy fetch failed, generating fallback response:', err);
      // Fallback intelligent response generator
      let fallbackText = `🏏 **CricMind Cricket Analyst Insight**:\n\nRegarding: **${prompt}**\n\n- **Tactical Perspective**: Modern T20 cricket relies on high boundary percentage (65%+ of team runs) and boundary suppression in death overs.\n- **Nepal Premier League (NPL)**: Nepal's cricket revolution is peaking with the 8 franchise teams at TU Cricket Ground. Fast bowling in morning sessions gets notable seam movement from the Himalayan morning mist!\n- **Pro Tip**: To connect live to Gemini AI with full real-time reasoning, tap the **Settings (⚙️)** icon in the header and paste your free Gemini API key from Google AI Studio.`;

      if (prompt.toLowerCase().includes('hundred')) {
        fallbackText = `💯 **The Hundred League Explainer (ECB)**:\n\n- **100 Balls Total**: Each innings consists of 100 legal deliveries.\n- **Flexible Overs**: Bowlers can deliver either 5 or 10 consecutive balls.\n- **End Changes**: Bowling ends swap every 10 balls.\n- **Powerplay**: First 25 balls limit fielders outside the circle to two.\n- **Target Time**: Designed for crisp 2.5-hour broadcast prime-time viewing!`;
      } else if (prompt.toLowerCase().includes('dls')) {
        fallbackText = `⚡ **Duckworth-Lewis-Stern (DLS) Method in T20**:\n\n- **Resource Percentage**: DLS treats cricket as a resource game of **Overs remaining** and **Wickets in hand**.\n- If rain stops play in the second innings, the team batting second needs to exceed the 'Par Score' calculated from the resource curves.\n- A minimum of 5 overs per side is required to constitute a valid T20 result!`;
      } else if (prompt.toLowerCase().includes('prize') || prompt.toLowerCase().includes('npl')) {
        fallbackText = `🇳🇵 **NPL Season & Prize Purse Summary**:\n\n- **Champions**: रू 1.1 Crore (NPR 11 Million) + Championship Trophy\n- **Runner-Up**: रू 51 Lakh\n- **3rd Place**: रू 25 Lakh\n- **4th Place**: रू 15 Lakh\n- **Venue**: Tribhuvan University (TU) Cricket Ground, Kirtipur, Kathmandu\n- **Franchises**: Biratnagar Kings, Chitwan Rhinos, Janakpur Bolts, Kathmandu Gorkhas, Karnali Yaks, Lumbini Lions, Pokhara Avengers, Sudurpaschim Royals.`;
      }

      const botFallback: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        content: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        mode: 'demo_fallback'
      };
      setMessages((prev) => [...prev, botFallback]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = (content: string, id: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(content);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'model',
        content: '🏏 CricMind AI chat session reset. What cricket analysis or match preview would you like next?',
        timestamp: 'Just now',
        mode: 'gemini'
      }
    ]);
  };

  // If floating collapsed button
  if (!isOpen) {
    return (
      <aside aria-label="CricMind AI assistant launcher" className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40">
        <button
          onClick={onOpen}
          aria-label="Open CricMind AI assistant"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#162235] via-[#004D40] to-[#162235] hover:to-[#005f4e] text-white border-2 border-[#39FF14]/50 shadow-2xl hover:scale-105 active:scale-95 transition-all group neon-glow-green"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 text-[#39FF14] group-hover:rotate-12 transition-transform" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#39FF14] rounded-full live-pulse" />
          </div>
          <span className="font-extrabold text-xs tracking-wide">
            Ask <span className="text-[#39FF14]">CricMind AI</span>
          </span>
        </button>
      </aside>
    );
  }

  return (
    <>
      <section 
        aria-label="CricMind AI Cricket Assistant"
        className={`fixed z-40 transition-all duration-300 ${
          isMinimized
            ? 'bottom-20 md:bottom-6 right-4 md:right-6 w-72 h-14'
            : 'bottom-20 md:bottom-6 right-3 md:right-6 w-[calc(100vw-1.5rem)] sm:w-[420px] max-w-[460px] h-[580px] max-h-[85vh]'
        } flex flex-col bg-[#0D1117] border border-white/20 rounded-3xl shadow-2xl overflow-hidden`}
      >
        
        {/* Assistant Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#162235] via-[#004D40] to-[#162235] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-black/40 flex items-center justify-center text-[#39FF14] border border-[#39FF14]/30 shadow-inner">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black text-white">CricMind AI</span>
                <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-black/50 text-[#39FF14] border border-[#39FF14]/30">
                  {apiKey ? 'GEMINI' : 'READY'}
                </span>
              </div>
              <span className="text-[10px] text-slate-300 font-medium block">
                Chief Cricket Analyst
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all"
              title="API Key Settings"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetChat}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all"
              title="Clear Chat History"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all"
              title={isMinimized ? 'Expand' : 'Minimize'}
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-red-400 hover:bg-white/10 transition-all"
              title="Close Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Minimized view indicator */}
        {!isMinimized && (
          <>
            {/* Active Match Context Banner (if user is looking at a match) */}
            {activeMatchContext && (
              <div className="px-3.5 py-1.5 bg-[#162235]/90 border-b border-white/5 flex items-center justify-between text-[11px] shrink-0">
                <div className="flex items-center gap-1.5 text-slate-300 truncate max-w-[280px]">
                  <Radio className="w-3 h-3 text-[#39FF14] animate-pulse shrink-0" />
                  <span className="truncate">Context: {activeMatchContext.title}</span>
                </div>
                <span className="text-[10px] font-mono text-[#39FF14]">Active</span>
              </div>
            )}

            {/* Messages Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg) => {
                const isUser = msg.role === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                        isUser
                          ? 'bg-[#39FF14] text-black font-extrabold'
                          : 'bg-[#162235] text-[#39FF14] border border-[#39FF14]/30'
                      }`}
                    >
                      {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>

                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed space-y-1 relative group ${
                        isUser
                          ? 'bg-[#39FF14] text-black font-medium rounded-tr-sm'
                          : 'bg-[#162235]/90 text-slate-100 rounded-tl-sm border border-white/10'
                      }`}
                    >
                      <div className="whitespace-pre-wrap font-sans">
                        {msg.content}
                      </div>

                      <div
                        className={`flex items-center justify-between text-[10px] pt-1 ${
                          isUser ? 'text-black/60' : 'text-slate-400'
                        }`}
                      >
                        <span className="font-mono-numbers">{msg.timestamp}</span>

                        {!isUser && (
                          <button
                            onClick={() => handleCopy(msg.content, msg.id)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 hover:text-white"
                            title="Copy response"
                          >
                            {copiedId === msg.id ? (
                              <Check className="w-3 h-3 text-[#39FF14]" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {isSubmitting && (
                <div className="flex items-center gap-2 p-3 bg-[#162235]/60 rounded-xl border border-white/10 w-fit">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-bounce [animation-delay:0.4s]" />
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">CricMind is analyzing match data...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Carousel */}
            <div className="px-3 py-2 border-t border-white/5 bg-[#0D1117]/60 overflow-x-auto no-scrollbar flex items-center gap-1.5 shrink-0">
              {quickPrompts.map((qp, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(qp)}
                  disabled={isSubmitting}
                  className="shrink-0 px-2.5 py-1 rounded-lg bg-[#162235] hover:bg-[#20314a] border border-white/10 text-[11px] text-slate-300 hover:text-white font-medium transition-all"
                >
                  {qp}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-[#162235]/90 border-t border-white/10 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                placeholder="Ask about NPL squads, live matches, or cricket rules..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isSubmitting}
                className="flex-1 px-3 py-2 bg-[#0D1117] border border-white/15 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#39FF14] transition-all"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isSubmitting}
                className={`p-2 rounded-xl transition-all shadow-md ${
                  inputText.trim() && !isSubmitting
                    ? 'bg-[#39FF14] text-black font-extrabold hover:bg-[#32e012] cursor-pointer'
                    : 'bg-white/10 text-slate-500 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </>
        )}

      </section>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        apiKey={apiKey}
        onSaveApiKey={handleSaveKey}
        onRemoveApiKey={handleRemoveKey}
        hasConsented={hasConsented}
        onConsentChange={handleConsentChange}
      />
    </>
  );
};
