import React, { useState, useEffect } from 'react';
import { NPL_TEAMS, NPL_PRIZE_MONEY, NPL_STANDINGS } from '../../data/mockNPL';
import { NPLFranchise } from '../../types/cricket';
import { 
  Trophy, 
  Clock, 
  MapPin, 
  Users, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  Coins, 
  Flame, 
  Award, 
  ArrowUpRight,
  Calendar
} from 'lucide-react';

interface NPLHubProps {
  onAskAIWithTopic: (topic: string) => void;
}

export const NPLHub: React.FC<NPLHubProps> = ({ onAskAIWithTopic }) => {
  const [selectedTeam, setSelectedTeam] = useState<NPLFranchise>(NPL_TEAMS[0]);
  const [activeNplTab, setActiveNplTab] = useState<'teams' | 'standings' | 'prizes' | 'schedule'>('teams');

  // Countdown to next NPL match / Season milestone
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 18,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8">
      
      {/* Hero Banner with Stadium Ambient Glow & Countdown */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#162235] via-[#330c0c] to-[#162235] border border-red-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 -mb-24 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-black tracking-wide flex items-center gap-1.5 shadow-md">
                <span>🇳🇵</span> OFFICIAL NPL CENTRAL
              </span>
              <span className="text-xs text-yellow-400 font-bold flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5" /> Winner: रू 1.1 Crore
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Nepal Premier League (NPL) Hub
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The grandest cricket spectacle in Nepal’s history. 8 provincial franchises clash under world-class floodlights at the Tribhuvan University (TU) International Cricket Ground in Kirtipur, Kathmandu.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10 font-mono-numbers">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>TU International Cricket Ground, Kirtipur</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10 font-mono-numbers">
                <Users className="w-3.5 h-3.5 text-[#39FF14]" />
                <span>8 Franchise Teams · 32 High-Stakes Matches</span>
              </div>
            </div>
          </div>

          {/* Real-Time Countdown Box: "How many days left for NPL season" */}
          <div className="shrink-0 bg-[#0D1117]/90 p-5 rounded-2xl border border-red-500/40 shadow-xl space-y-3 text-center min-w-[280px]">
            <div className="flex items-center justify-center gap-1.5 text-xs font-black text-red-400 tracking-wider uppercase">
              <Clock className="w-4 h-4 animate-spin text-red-500" style={{ animationDuration: '8s' }} />
              Next NPL Blockbuster Match
            </div>
            
            <div className="grid grid-cols-4 gap-2 text-center font-mono-numbers">
              <div className="p-2 bg-[#162235] rounded-xl border border-white/10">
                <span className="block text-xl sm:text-2xl font-black text-white">{timeLeft.days}</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase">Days</span>
              </div>
              <div className="p-2 bg-[#162235] rounded-xl border border-white/10">
                <span className="block text-xl sm:text-2xl font-black text-white">{timeLeft.hours}</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase">Hours</span>
              </div>
              <div className="p-2 bg-[#162235] rounded-xl border border-white/10">
                <span className="block text-xl sm:text-2xl font-black text-white">{timeLeft.minutes}</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase">Mins</span>
              </div>
              <div className="p-2 bg-[#162235] rounded-xl border border-white/10">
                <span className="block text-xl sm:text-2xl font-black text-[#39FF14]">{timeLeft.seconds}</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase">Secs</span>
              </div>
            </div>

            <button
              onClick={() => onAskAIWithTopic('Give me a full preview of the Nepal Premier League (NPL) season and key match predictions')}
              className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Ask AI NPL Season Analysis
            </button>
          </div>

        </div>
      </div>

      {/* Sub-Navigation for NPL Hub */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar p-1.5 bg-[#162235]/60 rounded-2xl border border-white/10">
        <button
          onClick={() => setActiveNplTab('teams')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeNplTab === 'teams'
              ? 'bg-[#EF4444] text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          8 Franchise Teams & Rosters
        </button>

        <button
          onClick={() => setActiveNplTab('standings')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeNplTab === 'standings'
              ? 'bg-[#39FF14] text-black shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Award className="w-4 h-4" />
          Official Points Table
        </button>

        <button
          onClick={() => setActiveNplTab('prizes')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeNplTab === 'prizes'
              ? 'bg-[#D4AF37] text-black shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Coins className="w-4 h-4" />
          Prize Money Breakdown (रू 1.1 Cr)
        </button>

        <button
          onClick={() => setActiveNplTab('schedule')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeNplTab === 'schedule'
              ? 'bg-white text-slate-900 shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Calendar className="w-4 h-4" />
          TU Ground Fixtures
        </button>
      </div>

      {/* TAB 1: 8 Franchise Teams Showcase */}
      {activeNplTab === 'teams' && (
        <div className="space-y-6">
          {/* Quick Select Franchise Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {NPL_TEAMS.map((team) => (
              <button
                key={team.id}
                onClick={() => setSelectedTeam(team)}
                style={{
                  borderColor: selectedTeam.id === team.id ? team.primaryColor : 'rgba(255,255,255,0.08)'
                }}
                className={`p-3 rounded-xl flex flex-col items-center text-center gap-2 transition-all border ${
                  selectedTeam.id === team.id
                    ? 'bg-[#162235] shadow-lg scale-102'
                    : 'bg-[#162235]/40 hover:bg-[#162235]/80 opacity-80 hover:opacity-100'
                }`}
              >
                <span className="text-2xl">{team.logoEmoji}</span>
                <span className="text-[11px] font-black text-white leading-tight">
                  {team.name}
                </span>
              </button>
            ))}
          </div>

          {/* Selected Team Profile Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-4xl shadow-xl border border-white/20"
                  style={{ backgroundColor: `${selectedTeam.primaryColor}33` }}
                >
                  {selectedTeam.logoEmoji}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl sm:text-3xl font-black text-white">
                      {selectedTeam.name}
                    </h2>
                    <span 
                      className="px-2.5 py-0.5 rounded text-xs font-mono font-bold text-white"
                      style={{ backgroundColor: selectedTeam.primaryColor }}
                    >
                      {selectedTeam.shortName}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    {selectedTeam.city} · Owned by <strong className="text-white">{selectedTeam.owner}</strong>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => onAskAIWithTopic(`Analyze the full squad strengths, marquee players and title chances for ${selectedTeam.name} in NPL`)}
                  className="px-3.5 py-2 bg-[#39FF14] text-black font-extrabold text-xs rounded-xl flex items-center gap-1.5 shadow-md neon-glow-green transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Analyze {selectedTeam.shortName} with AI
                </button>
              </div>
            </div>

            {/* Team Highlights & Key Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-[#0D1117] rounded-2xl border border-white/5 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Marquee Icon
                </span>
                <p className="text-sm font-black text-yellow-400">
                  {selectedTeam.marqueePlayer}
                </p>
              </div>

              <div className="p-4 bg-[#0D1117] rounded-2xl border border-white/5 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Head Coach
                </span>
                <p className="text-sm font-black text-white">
                  {selectedTeam.headCoach}
                </p>
              </div>

              <div className="p-4 bg-[#0D1117] rounded-2xl border border-white/5 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Championship Odds
                </span>
                <p className="text-sm font-black text-[#39FF14] font-mono-numbers">
                  {selectedTeam.championshipOdds} / 1
                </p>
              </div>

              <div className="p-4 bg-[#0D1117] rounded-2xl border border-white/5 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Key Overseas Stars
                </span>
                <p className="text-xs font-bold text-slate-200 truncate">
                  {selectedTeam.iconicOverseas.join(', ')}
                </p>
              </div>
            </div>

            {/* Team Philosophy Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#162235]/40 p-4 rounded-xl border border-white/5">
              {selectedTeam.description}
            </p>

            {/* Squad Table */}
            <div className="space-y-3">
              <h3 className="text-xs font-black text-[#D4AF37] uppercase tracking-wider">
                Full 16-Member Squad Roster
              </h3>

              <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0D1117]/60">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-white/5 text-slate-400 font-bold border-b border-white/10">
                      <th className="py-2.5 px-3">Player Name</th>
                      <th className="py-2.5 px-3">Role</th>
                      <th className="py-2.5 px-3">Auction Category</th>
                      <th className="py-2.5 px-3 text-right">Nationality</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {selectedTeam.squad.map((player, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="py-2.5 px-3 font-bold text-white flex items-center gap-2">
                          <span className="text-slate-500 font-mono text-[11px] w-4">{idx + 1}.</span>
                          <span>{player.name}</span>
                          {player.category === 'Marquee' && (
                            <span className="px-1.5 py-0.2 rounded bg-yellow-400/20 text-yellow-400 text-[10px] font-bold">
                              MARQUEE
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 px-3 text-slate-300">
                          {player.role}
                        </td>
                        <td className="py-2.5 px-3 text-slate-400 font-medium">
                          {player.category}
                        </td>
                        <td className="py-2.5 px-3 text-right font-medium text-slate-200">
                          {player.nationality}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Official NPL Standings */}
      {activeNplTab === 'standings' && (
        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div>
              <h3 className="text-lg font-black text-white">NPL Official League Table</h3>
              <p className="text-xs text-slate-400">Top 4 teams advance to Playoffs (Qualifier 1, Eliminator, Qualifier 2, Final)</p>
            </div>
            <span className="text-xs text-[#39FF14] font-bold font-mono">TU Cricket Ground Standings</span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0D1117]/80">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-white/5 text-slate-400 font-bold border-b border-white/10">
                  <th className="py-3 px-3">#</th>
                  <th className="py-3 px-3">Team</th>
                  <th className="py-3 px-3 text-center font-mono-numbers">P</th>
                  <th className="py-3 px-3 text-center font-mono-numbers">W</th>
                  <th className="py-3 px-3 text-center font-mono-numbers">L</th>
                  <th className="py-3 px-3 text-center font-mono-numbers">NR</th>
                  <th className="py-3 px-3 text-right font-mono-numbers">NRR</th>
                  <th className="py-3 px-3 text-right font-mono-numbers">PTS</th>
                  <th className="py-3 px-3 text-center">Last 5</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {NPL_STANDINGS.map((row) => (
                  <tr 
                    key={row.rank} 
                    className={`hover:bg-white/5 transition-colors ${
                      row.rank <= 4 ? 'bg-[#162235]/40' : ''
                    }`}
                  >
                    <td className="py-3 px-3 font-mono font-bold text-white">
                      {row.rank}
                    </td>
                    <td className="py-3 px-3 font-bold text-white flex items-center gap-2">
                      <span>{row.team}</span>
                      <span className="text-[10px] text-slate-400 font-mono">({row.short})</span>
                      {row.rank <= 4 && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" title="Playoffs Qualification Zone" />
                      )}
                    </td>
                    <td className="py-3 px-3 text-center text-slate-300 font-mono-numbers">{row.played}</td>
                    <td className="py-3 px-3 text-center text-white font-mono-numbers font-bold">{row.won}</td>
                    <td className="py-3 px-3 text-center text-slate-400 font-mono-numbers">{row.lost}</td>
                    <td className="py-3 px-3 text-center text-slate-500 font-mono-numbers">{row.nr}</td>
                    <td className={`py-3 px-3 text-right font-mono-numbers font-bold ${
                      row.nrr.startsWith('+') ? 'text-[#39FF14]' : 'text-red-400'
                    }`}>
                      {row.nrr}
                    </td>
                    <td className="py-3 px-3 text-right font-mono-numbers font-black text-yellow-400 text-sm">
                      {row.points}
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex items-center justify-center gap-1">
                        {row.form.map((res, i) => (
                          <span
                            key={i}
                            className={`w-4 h-4 rounded text-[9px] font-mono font-bold flex items-center justify-center ${
                              res === 'W' ? 'bg-[#39FF14]/20 text-[#39FF14]' : 'bg-red-500/20 text-red-400'
                            }`}
                          >
                            {res}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: Official Prize Money Breakdown */}
      {activeNplTab === 'prizes' && (
        <div className="space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-black text-[#D4AF37] uppercase tracking-wider flex items-center justify-center gap-1.5">
                <Coins className="w-4 h-4 text-[#D4AF37]" /> Total Prize Purse: {NPL_PRIZE_MONEY.totalPool}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Official NPL Prize Money Structure
              </h2>
              <p className="text-xs text-slate-300">
                The biggest financial pool in Himalayan sports history sanctioned by CAN.
              </p>
            </div>

            {/* Podium Display */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
              
              {/* Winner */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#D4AF37]/20 via-[#162235] to-[#0D1117] border-2 border-[#D4AF37] text-center space-y-3 relative shadow-2xl md:scale-105">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-2xl">
                  🏆
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-black text-[10px] font-extrabold uppercase">
                  1st Place Champions
                </span>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono-numbers">
                  {NPL_PRIZE_MONEY.winner.amount}
                </div>
                <p className="text-xs text-[#D4AF37] font-semibold">
                  {NPL_PRIZE_MONEY.winner.formatted}
                </p>
                <div className="text-[11px] text-slate-400">
                  {NPL_PRIZE_MONEY.winner.trophy}
                </div>
              </div>

              {/* Runner-Up */}
              <div className="p-6 rounded-2xl bg-[#162235]/80 border border-slate-300/30 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-slate-300/10 flex items-center justify-center text-2xl">
                  🥈
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-400 text-black text-[10px] font-extrabold uppercase">
                  Runners-Up
                </span>
                <div className="text-xl sm:text-2xl font-black text-white font-mono-numbers">
                  {NPL_PRIZE_MONEY.runnerUp.amount}
                </div>
                <p className="text-xs text-slate-300 font-semibold">
                  {NPL_PRIZE_MONEY.runnerUp.formatted}
                </p>
                <div className="text-[11px] text-slate-400">
                  {NPL_PRIZE_MONEY.runnerUp.trophy}
                </div>
              </div>

              {/* 3rd Place */}
              <div className="p-6 rounded-2xl bg-[#162235]/80 border border-amber-700/30 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-amber-700/10 flex items-center justify-center text-2xl">
                  🥉
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-700 text-white text-[10px] font-extrabold uppercase">
                  3rd Place
                </span>
                <div className="text-xl sm:text-2xl font-black text-white font-mono-numbers">
                  {NPL_PRIZE_MONEY.thirdPlace.amount}
                </div>
                <p className="text-xs text-amber-500 font-semibold">
                  {NPL_PRIZE_MONEY.thirdPlace.formatted}
                </p>
                <div className="text-[11px] text-slate-400">
                  {NPL_PRIZE_MONEY.thirdPlace.trophy}
                </div>
              </div>

              {/* 4th Place */}
              <div className="p-6 rounded-2xl bg-[#162235]/80 border border-white/10 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center text-2xl">
                  🏅
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-slate-300 text-[10px] font-extrabold uppercase">
                  4th Place
                </span>
                <div className="text-xl sm:text-2xl font-black text-white font-mono-numbers">
                  {NPL_PRIZE_MONEY.fourthPlace.amount}
                </div>
                <p className="text-xs text-slate-400 font-semibold">
                  {NPL_PRIZE_MONEY.fourthPlace.formatted}
                </p>
                <div className="text-[11px] text-slate-400">
                  {NPL_PRIZE_MONEY.fourthPlace.trophy}
                </div>
              </div>

            </div>

            {/* Individual Awards */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <h3 className="text-xs font-black text-[#39FF14] uppercase tracking-wider text-center">
                Individual Honors & Vehicle Bounties
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {NPL_PRIZE_MONEY.individualAwards.map((award, i) => (
                  <div key={i} className="p-3.5 bg-black/40 rounded-xl border border-white/5 text-center space-y-1">
                    <span className="text-[11px] font-bold text-slate-300">{award.title}</span>
                    <p className="text-xs font-black text-yellow-400">{award.reward}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TAB 4: TU Ground Fixtures */}
      {activeNplTab === 'schedule' && (
        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
          <h3 className="text-lg font-black text-white">NPL Season Schedule at TU Cricket Ground</h3>
          <p className="text-xs text-slate-400">All fixtures hosted at Tribhuvan University International Cricket Ground, Kirtipur with daytime and evening floodlight doubleheaders.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-[#162235]/70 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="text-red-400 font-bold">Match 14 · Day Game</span>
                <span>Tomorrow, 9:15 AM NPT</span>
              </div>
              <h4 className="text-base font-bold text-white">Kathmandu Gorkhas vs Pokhara Avengers</h4>
              <p className="text-xs text-slate-400">Karan KC (c) vs Kushal Bhurtel (c) — Clash for Top 3 seeding.</p>
            </div>

            <div className="p-4 bg-[#162235]/70 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="text-yellow-400 font-bold">Match 15 · Night Game</span>
                <span>Tomorrow, 1:15 PM NPT</span>
              </div>
              <h4 className="text-base font-bold text-white">Sudurpaschim Royals vs Janakpur Bolts</h4>
              <p className="text-xs text-slate-400">Dipendra Singh Airee vs Aasif Sheikh & Jimmy Neesham.</p>
            </div>

            <div className="p-4 bg-[#162235]/70 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="text-red-400 font-bold">Match 16 · Weekend Blockbuster</span>
                <span>Saturday, 1:15 PM NPT</span>
              </div>
              <h4 className="text-base font-bold text-white">Karnali Yaks vs Biratnagar Kings</h4>
              <p className="text-xs text-slate-400">Shikhar Dhawan & Sompal Kami vs Sandeep Lamichhane & Martin Guptill.</p>
            </div>

            <div className="p-4 bg-[#162235]/70 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="text-[#39FF14] font-bold">Qualifier 1 · High Stakes</span>
                <span>TU Ground Floodlights</span>
              </div>
              <h4 className="text-base font-bold text-white">Table Rank 1 vs Table Rank 2</h4>
              <p className="text-xs text-slate-400">Winner directly enters NPL Grand Final; loser heads to Qualifier 2.</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
