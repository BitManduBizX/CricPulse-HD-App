import React from 'react';
import { Radio, Compass, BarChart2, Sparkles } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'matches' | 'npl' | 'leagues' | 'rankings' | 'news';
  setActiveTab: (tab: 'matches' | 'npl' | 'leagues' | 'rankings' | 'news') => void;
  onOpenAiAssistant: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  setActiveTab,
  onOpenAiAssistant
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D1117]/95 backdrop-blur-xl border-t border-white/10 px-2 py-1.5 shadow-2xl">
      <div className="grid grid-cols-5 items-center justify-between text-center">
        
        {/* Matches */}
        <button
          onClick={() => setActiveTab('matches')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activeTab === 'matches' ? 'text-[#39FF14]' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Radio className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold">Matches</span>
        </button>

        {/* NPL Hub */}
        <button
          onClick={() => setActiveTab('npl')}
          className={`flex flex-col items-center justify-center py-1 transition-colors relative ${
            activeTab === 'npl' ? 'text-red-400' : 'text-slate-400 hover:text-white'
          }`}
        >
          <span className="text-base leading-none mb-0.5">🇳🇵</span>
          <span className="text-[10px] font-bold">NPL Hub</span>
        </button>

        {/* CricMind AI Center Float */}
        <button
          onClick={onOpenAiAssistant}
          className="flex flex-col items-center justify-center -mt-4"
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#004D40] to-[#39FF14] text-black flex items-center justify-center shadow-lg border-2 border-[#0D1117] neon-glow-green active:scale-95 transition-transform">
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <span className="text-[9px] font-extrabold text-[#39FF14] mt-0.5">CricMind</span>
        </button>

        {/* Leagues */}
        <button
          onClick={() => setActiveTab('leagues')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activeTab === 'leagues' ? 'text-[#39FF14]' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Compass className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold">Leagues</span>
        </button>

        {/* Rankings */}
        <button
          onClick={() => setActiveTab('rankings')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activeTab === 'rankings' ? 'text-[#D4AF37]' : 'text-slate-400 hover:text-white'
          }`}
        >
          <BarChart2 className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold">Rankings</span>
        </button>

      </div>
    </div>
  );
};
