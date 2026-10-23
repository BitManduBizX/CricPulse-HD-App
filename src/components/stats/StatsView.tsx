import React, { useState } from 'react';
import { LEADERBOARD_STATS } from '../../data/mockRankings';
import { Flame, Target, Zap, Shield, Sparkles } from 'lucide-react';

interface StatsViewProps {
  onAskAIWithTopic: (topic: string) => void;
}

export const StatsView: React.FC<StatsViewProps> = ({ onAskAIWithTopic }) => {
  const [activeTab, setActiveTab] = useState<'runs' | 'wickets'>('runs');

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel p-6 rounded-3xl border border-white/10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#39FF14]" />
            <h2 className="text-xl sm:text-2xl font-black text-white">Player & Team Statistical Records</h2>
          </div>
          <p className="text-xs text-slate-400">
            All-format career analytics, strike rates, bowling averages, and match-winning contributions.
          </p>
        </div>

        <button
          onClick={() => onAskAIWithTopic('Compare modern batting strike rates in T20 leagues vs international cricket')}
          className="px-4 py-2 bg-[#162235] hover:bg-[#1e2f47] text-[#39FF14] text-xs font-bold rounded-xl border border-[#39FF14]/40 flex items-center gap-1.5 transition-all self-start sm:self-auto"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ask AI Stats Comparison</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-[#162235]/60 rounded-2xl border border-white/10 w-fit">
        <button
          onClick={() => setActiveTab('runs')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'runs'
              ? 'bg-[#39FF14] text-black shadow-md'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <Target className="w-3.5 h-3.5" />
          Leading Run Scorers
        </button>
        <button
          onClick={() => setActiveTab('wickets')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'wickets'
              ? 'bg-[#39FF14] text-black shadow-md'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <Shield className="w-3.5 h-3.5" />
          Leading Wicket Takers
        </button>
      </div>

      {/* Content */}
      <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-white/10">
        {activeTab === 'runs' ? (
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0D1117]/80">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-white/5 text-slate-400 font-bold border-b border-white/10">
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Player</th>
                  <th className="py-3 px-4">Team</th>
                  <th className="py-3 px-4 text-center font-mono-numbers">Matches</th>
                  <th className="py-3 px-4 text-right font-mono-numbers">Runs</th>
                  <th className="py-3 px-4 text-right font-mono-numbers">Average</th>
                  <th className="py-3 px-4 text-right font-mono-numbers">Strike Rate</th>
                  <th className="py-3 px-4 text-right font-mono-numbers">100s</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {LEADERBOARD_STATS.topRunScorers.map((p) => (
                  <tr key={p.rank} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-white">{p.rank}</td>
                    <td className="py-3 px-4 font-bold text-white flex items-center gap-2">
                      <span>{p.player}</span>
                    </td>
                    <td className="py-3 px-4 text-slate-300">{p.team}</td>
                    <td className="py-3 px-4 text-center text-slate-400 font-mono-numbers">{p.matches}</td>
                    <td className="py-3 px-4 text-right font-mono-numbers font-black text-white text-sm">
                      {p.runs.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right text-slate-300 font-mono-numbers">{p.average}</td>
                    <td className="py-3 px-4 text-right font-mono-numbers font-bold text-[#39FF14]">{p.strikeRate}</td>
                    <td className="py-3 px-4 text-right font-mono-numbers text-yellow-400 font-bold">{p.centuries}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0D1117]/80">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-white/5 text-slate-400 font-bold border-b border-white/10">
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Bowler</th>
                  <th className="py-3 px-4">Team</th>
                  <th className="py-3 px-4 text-center font-mono-numbers">Matches</th>
                  <th className="py-3 px-4 text-right font-mono-numbers">Wickets</th>
                  <th className="py-3 px-4 text-right font-mono-numbers">Average</th>
                  <th className="py-3 px-4 text-right font-mono-numbers">Economy</th>
                  <th className="py-3 px-4 text-right font-mono-numbers">5-Wkt Hauls</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {LEADERBOARD_STATS.topWicketTakers.map((b) => (
                  <tr key={b.rank} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-white">{b.rank}</td>
                    <td className="py-3 px-4 font-bold text-white flex items-center gap-2">
                      <span>{b.player}</span>
                    </td>
                    <td className="py-3 px-4 text-slate-300">{b.team}</td>
                    <td className="py-3 px-4 text-center text-slate-400 font-mono-numbers">{b.matches}</td>
                    <td className="py-3 px-4 text-right font-mono-numbers font-black text-[#39FF14] text-sm">
                      {b.wickets}
                    </td>
                    <td className="py-3 px-4 text-right text-slate-300 font-mono-numbers">{b.average}</td>
                    <td className="py-3 px-4 text-right font-mono-numbers font-bold text-blue-400">{b.economy}</td>
                    <td className="py-3 px-4 text-right font-mono-numbers text-yellow-400 font-bold">{b.fiveWickets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
};
