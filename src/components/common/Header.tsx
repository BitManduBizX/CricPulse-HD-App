import React from 'react';
import { 
  Trophy, 
  Flame, 
  Search, 
  Sparkles, 
  Bell, 
  Radio, 
  BarChart2, 
  Newspaper,
  Compass
} from 'lucide-react';

interface HeaderProps {
  activeTab: 'matches' | 'npl' | 'leagues' | 'rankings' | 'news';
  setActiveTab: (tab: 'matches' | 'npl' | 'leagues' | 'rankings' | 'news') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenAiAssistant: () => void;
  notificationsEnabled: boolean;
  onToggleNotifications: () => void;
  liveMatchesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onOpenAiAssistant,
  notificationsEnabled,
  onToggleNotifications,
  liveMatchesCount
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0D1117]/95 backdrop-blur-md border-b border-white/10 transition-all">
      {/* Top Ambient Highlight Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#004D40] via-[#39FF14] to-[#D4AF37]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand Logo & Live Pulse */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setActiveTab('matches')}>
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#162235] to-[#004D40] border border-white/15 shadow-lg group">
              <span className="text-xl sm:text-2xl select-none group-hover:scale-110 transition-transform">🏏</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#39FF14] rounded-full live-pulse" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center">
                  CRIC<span className="text-[#39FF14]">PULSE</span>
                  <span className="ml-1 text-[10px] sm:text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-[#162235] text-[#D4AF37] border border-[#D4AF37]/30">HD</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                <span className="inline-flex items-center gap-1 text-[#39FF14] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-ping" />
                  {liveMatchesCount} LIVE
                </span>
                <span>·</span>
                <span className="hidden sm:inline text-slate-300">Midnight Stadium Broadcast</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-[#162235]/60 p-1.5 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('matches')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'matches'
                  ? 'bg-[#39FF14] text-black shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              Match Center
            </button>

            <button
              onClick={() => setActiveTab('npl')}
              className={`relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'npl'
                  ? 'bg-gradient-to-r from-[#DC2626] to-[#EF4444] text-white shadow-md'
                  : 'text-[#FCA5A5] hover:text-white hover:bg-red-500/10'
              }`}
            >
              <span className="text-sm">🇳🇵</span>
              NPL Hub
              <span className="text-[9px] bg-yellow-400 text-black px-1.5 py-0.2 rounded font-extrabold uppercase">
                SPOTLIGHT
              </span>
            </button>

            <button
              onClick={() => setActiveTab('leagues')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'leagues'
                  ? 'bg-[#162235] text-[#39FF14] border border-[#39FF14]/40'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              All Leagues
            </button>

            <button
              onClick={() => setActiveTab('rankings')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'rankings'
                  ? 'bg-[#162235] text-[#D4AF37] border border-[#D4AF37]/40'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5" />
              Rankings & Stats
            </button>

            <button
              onClick={() => setActiveTab('news')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'news'
                  ? 'bg-white/10 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5" />
              News
            </button>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-2.5">
            {/* Quick Search */}
            <div className="relative hidden lg:block w-48 xl:w-60">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search team, league, player..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-[#162235]/90 border border-white/10 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#39FF14]/70 transition-all font-mono-numbers"
              />
            </div>

            {/* Notification alert toggle */}
            <button
              onClick={onToggleNotifications}
              title={notificationsEnabled ? 'Score Alerts Enabled' : 'Enable Match Alerts'}
              className={`relative p-2 rounded-xl border transition-all ${
                notificationsEnabled 
                  ? 'bg-[#39FF14]/15 border-[#39FF14]/50 text-[#39FF14]' 
                  : 'bg-[#162235] border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <Bell className="w-4 h-4" />
              {notificationsEnabled && (
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
              )}
            </button>

            {/* CricMind AI Assistant CTA Button */}
            <button
              onClick={onOpenAiAssistant}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-[#162235] via-[#004D40] to-[#162235] hover:to-[#005f4e] text-white border border-[#39FF14]/40 hover:border-[#39FF14] text-xs font-bold transition-all shadow-md group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#39FF14] group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">CricMind</span> AI
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
