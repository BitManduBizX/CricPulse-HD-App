import React, { useState } from 'react';
import { ICC_RANKINGS } from '../../data/mockRankings';
import { Trophy, BarChart2, Sparkles, ArrowUpRight } from 'lucide-react';

interface RankingsViewProps {
  onAskAIWithTopic: (topic: string) => void;
}

export const RankingsView: React.FC<RankingsViewProps> = ({ onAskAIWithTopic }) => {
  const [gender, setGender] = useState<'men' | 'women'>('men');
  const [format, setFormat] = useState<'t20' | 'odi' | 'test'>('t20');

  const rankingList = gender === 'men' 
    ? (format === 't20' ? ICC_RANKINGS.men.t20 : format === 'odi' ? ICC_RANKINGS.men.odi : ICC_RANKINGS.men.test)
    : (format === 't20' ? ICC_RANKINGS.women.t20 : ICC_RANKINGS.women.odi);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel p-6 rounded-3xl border border-white/10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="text-xl sm:text-2xl font-black text-white">Official ICC Team Rankings</h2>
          </div>
          <p className="text-xs text-slate-400">
            Current global standings calculated using ICC weighted ratings across international calendar cycles.
          </p>
        </div>

        <button
          onClick={() => onAskAIWithTopic(`Explain the ICC ranking calculation system, rating points algorithm, and Nepal's current trajectory towards top 10 in T20I`)}
          className="px-4 py-2 bg-[#162235] hover:bg-[#1e2f47] text-[#39FF14] text-xs font-bold rounded-xl border border-[#39FF14]/40 flex items-center gap-1.5 transition-all self-start sm:self-auto"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ask AI Ranking Insights</span>
        </button>
      </div>

      {/* Selectors */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#162235]/60 p-3 rounded-2xl border border-white/10">
        
        {/* Gender Toggle */}
        <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-xl border border-white/5">
          <button
            onClick={() => setGender('men')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              gender === 'men'
                ? 'bg-[#39FF14] text-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Men's Cricket
          </button>
          <button
            onClick={() => {
              setGender('women');
              if (format === 'test') setFormat('t20');
            }}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              gender === 'women'
                ? 'bg-[#39FF14] text-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Women's Cricket
          </button>
        </div>

        {/* Format Toggle */}
        <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-xl border border-white/5">
          <button
            onClick={() => setFormat('t20')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              format === 't20'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            T20I
          </button>
          <button
            onClick={() => setFormat('odi')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              format === 'odi'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ODI
          </button>
          {gender === 'men' && (
            <button
              onClick={() => setFormat('test')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                format === 'test'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Test
            </button>
          )}
        </div>

      </div>

      {/* Rankings Table */}
      <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0D1117]/80">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-white/5 text-slate-400 font-bold border-b border-white/10">
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Team</th>
                <th className="py-3 px-4 text-center font-mono-numbers">Matches</th>
                <th className="py-3 px-4 text-center font-mono-numbers">Points</th>
                <th className="py-3 px-4 text-right font-mono-numbers">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rankingList.map((item) => (
                <tr 
                  key={item.rank} 
                  className={`hover:bg-white/5 transition-colors ${
                    item.team.includes('Nepal') ? 'bg-red-500/10 font-bold' : ''
                  }`}
                >
                  <td className="py-3 px-4 font-mono font-bold text-white">
                    {item.rank}
                  </td>
                  <td className="py-3 px-4 font-bold text-white flex items-center gap-2">
                    <span className="text-base">{item.flag}</span>
                    <span>{item.team}</span>
                    {item.team.includes('Nepal') && (
                      <span className="px-1.5 py-0.2 rounded bg-red-600 text-white text-[9px] font-bold">
                        ASSOCIATE LEADER
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center text-slate-300 font-mono-numbers">{item.matches}</td>
                  <td className="py-3 px-4 text-center text-slate-300 font-mono-numbers">{item.points.toLocaleString()}</td>
                  <td className="py-3 px-4 text-right font-mono-numbers font-black text-[#39FF14] text-sm">
                    {item.rating}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
