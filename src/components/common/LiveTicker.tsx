import React from 'react';
import { CricketMatch } from '../../types/cricket';
import { ChevronRight, Radio } from 'lucide-react';

interface LiveTickerProps {
  matches: CricketMatch[];
  onSelectMatch: (match: CricketMatch) => void;
}

export const LiveTicker: React.FC<LiveTickerProps> = ({ matches, onSelectMatch }) => {
  return (
    <div className="w-full bg-[#121A26] border-b border-white/10 py-2.5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          
          {/* Ticker Lead-in Badge */}
          <div className="hidden sm:flex items-center gap-1.5 shrink-0 px-2.5 py-1 rounded-md bg-[#004D40] text-xs font-bold text-[#39FF14] border border-[#39FF14]/30">
            <Radio className="w-3 h-3 animate-pulse" />
            <span className="tracking-wide uppercase text-[11px]">HD FEED</span>
          </div>

          {/* Horizontal Matches Slider */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth py-0.5">
            {matches.map((m) => {
              const isLive = m.status === 'LIVE';
              return (
                <div
                  key={m.id}
                  onClick={() => onSelectMatch(m)}
                  className="flex items-center gap-3 shrink-0 px-3.5 py-2 rounded-xl bg-[#162235]/90 hover:bg-[#1C2C45] border border-white/10 hover:border-white/25 cursor-pointer transition-all duration-200 group"
                >
                  {/* Status Indicator */}
                  <div className="flex flex-col items-start min-w-[58px]">
                    {isLive ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-[#39FF14]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] live-pulse" />
                        LIVE
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        {m.status}
                      </span>
                    )}
                    <span className="text-[9px] text-slate-400 font-medium truncate max-w-[65px]">
                      {m.format}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-px h-7 bg-white/10" />

                  {/* Team A */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                    <span className="text-sm">{m.teamA.flag}</span>
                    <span className="font-mono-numbers">{m.teamA.shortName}</span>
                    <span className="text-white font-mono-numbers">
                      {m.teamA.runs > 0 || m.teamA.wickets > 0
                        ? `${m.teamA.runs}/${m.teamA.wickets}`
                        : '-'}
                    </span>
                  </div>

                  <span className="text-slate-500 text-[10px] font-mono">vs</span>

                  {/* Team B */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                    <span className="text-sm">{m.teamB.flag}</span>
                    <span className="font-mono-numbers">{m.teamB.shortName}</span>
                    <span className="text-white font-mono-numbers">
                      {m.teamB.runs > 0 || m.teamB.wickets > 0
                        ? `${m.teamB.runs}/${m.teamB.wickets}`
                        : '-'}
                    </span>
                  </div>

                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#39FF14] group-hover:translate-x-0.5 transition-all" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};
