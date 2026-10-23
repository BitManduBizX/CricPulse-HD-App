import React, { useState } from 'react';
import { CRICKET_LEAGUES, GLOBAL_LEAGUES_SUMMARY } from '../../data/mockLeagues';
import { CricketLeague } from '../../types/cricket';
import { 
  Compass, 
  HelpCircle, 
  Sparkles, 
  ChevronRight, 
  Calendar, 
  Users, 
  Trophy, 
  ShieldCheck,
  Search
} from 'lucide-react';

interface LeaguesDirectoryProps {
  onAskAIWithTopic: (topic: string) => void;
}

export const LeaguesDirectory: React.FC<LeaguesDirectoryProps> = ({ onAskAIWithTopic }) => {
  const [activeTab, setActiveTab] = useState<'directory' | 'the100' | 'teams' | 'schedule'>('directory');
  const [selectedLeague, setSelectedLeague] = useState<CricketLeague>(CRICKET_LEAGUES[0]);
  const [searchLeague, setSearchLeague] = useState('');

  const filteredLeagues = CRICKET_LEAGUES.filter((l) => {
    if (!searchLeague.trim()) return true;
    const q = searchLeague.toLowerCase();
    return l.name.toLowerCase().includes(q) || l.country.toLowerCase().includes(q) || l.teams.some(t => t.toLowerCase().includes(q));
  });

  return (
    <div className="space-y-8">
      
      {/* Educational Explainer Banner: "How many leagues are there in cricket?" */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#162235] via-[#004D40] to-[#162235] border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#39FF14] text-black text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md">
              <Compass className="w-3.5 h-3.5" /> GLOBAL DIRECTORY
            </span>
            <span className="text-xs text-yellow-400 font-bold">
              {GLOBAL_LEAGUES_SUMMARY.totalSanctionedLeagues}+ Sanctioned Tournaments
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white">
            How Many Leagues Are There in Cricket?
          </h1>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {GLOBAL_LEAGUES_SUMMARY.answerHowMany}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onAskAIWithTopic('Compare all top cricket leagues: IPL vs NPL vs BBL vs The Hundred vs PSL in format, economy, and star power')}
              className="px-4 py-2 bg-[#39FF14] hover:bg-[#32e012] text-black font-extrabold text-xs rounded-xl flex items-center gap-1.5 shadow-lg neon-glow-green transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Ask AI League Comparisons
            </button>
            <button
              onClick={() => setActiveTab('the100')}
              className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 border border-white/10 transition-all"
            >
              <span>Explore "The Hundred" Explainer</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar p-1.5 bg-[#162235]/60 rounded-2xl border border-white/10">
        <button
          onClick={() => setActiveTab('directory')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'directory'
              ? 'bg-[#39FF14] text-black shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Trophy className="w-4 h-4" />
          All Cricket League Name List ({CRICKET_LEAGUES.length})
        </button>

        <button
          onClick={() => setActiveTab('the100')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'the100'
              ? 'bg-sky-500 text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <span className="font-mono font-bold">💯</span>
          The 100 League Spotlight
        </button>

        <button
          onClick={() => setActiveTab('teams')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'teams'
              ? 'bg-[#162235] text-[#39FF14] border border-[#39FF14]/40'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Users className="w-4 h-4" />
          All Cricket Match League Teams
        </button>

        <button
          onClick={() => setActiveTab('schedule')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'schedule'
              ? 'bg-[#162235] text-[#D4AF37] border border-[#D4AF37]/40'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Calendar className="w-4 h-4" />
          Global League Schedule Window
        </button>
      </div>

      {/* TAB 1: Leagues Directory Cards */}
      {activeTab === 'directory' && (
        <div className="space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Filter leagues by name, country, or team..."
              value={searchLeague}
              onChange={(e) => setSearchLeague(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#162235] border border-white/10 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#39FF14]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredLeagues.map((league) => (
              <div
                key={league.id}
                onClick={() => {
                  setSelectedLeague(league);
                  setActiveTab('teams');
                }}
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-white/25 cursor-pointer transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{league.trophyEmoji}</span>
                    <span 
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-bold text-white"
                      style={{ backgroundColor: league.badgeColor }}
                    >
                      {league.format}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-white group-hover:text-[#39FF14] transition-colors">
                      {league.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-medium">
                      {league.country} · Founded {league.foundedYear}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {league.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-white">
                    {league.teamsCount} Franchises
                  </span>
                  <div className="flex items-center gap-1 text-[#39FF14] font-bold">
                    <span>View Teams</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: The Hundred Spotlight Explainer */}
      {activeTab === 'the100' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-sky-400/30 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="space-y-2 max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-black uppercase">
                ECB Innovation
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                "The Hundred" (100-Ball Cricket League)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {GLOBAL_LEAGUES_SUMMARY.theHundredExplainer}
              </p>
            </div>

            <button
              onClick={() => onAskAIWithTopic('Explain the rules, tactical bowling strategies, and key records of The Hundred cricket league')}
              className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-xs rounded-xl flex items-center gap-2 shadow-lg transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Ask AI The Hundred Rules
            </button>
          </div>

          {/* Key Rule Distinctives */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-[#0D1117] rounded-2xl border border-white/5 space-y-1">
              <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">
                100 Balls per Innings
              </span>
              <p className="text-xs text-slate-300">
                100 legal balls bowled per team. Countdown timer counts down from 100 to 0 on broadcasting screens.
              </p>
            </div>

            <div className="p-4 bg-[#0D1117] rounded-2xl border border-white/5 space-y-1">
              <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">
                5 or 10-Ball Overs
              </span>
              <p className="text-xs text-slate-300">
                A captain can instruct a bowler to deliver 5 or 10 consecutive deliveries before changing ends. Maximum 20 balls per bowler.
              </p>
            </div>

            <div className="p-4 bg-[#0D1117] rounded-2xl border border-white/5 space-y-1">
              <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">
                25-Ball Powerplay
              </span>
              <p className="text-xs text-slate-300">
                The first 25 balls are a fielding restriction powerplay where only two fielders are permitted outside the 30-yard ring.
              </p>
            </div>
          </div>

          {/* The 8 Hundred Franchises */}
          <div className="space-y-3">
            <h3 className="text-xs font-black text-sky-400 uppercase tracking-wider">
              The 8 Hundred City Franchises (Men & Women)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: 'Oval Invincibles', ground: 'The Kia Oval, London' },
                { name: 'London Spirit', ground: "Lord's, London" },
                { name: 'Manchester Originals', ground: 'Emirates Old Trafford' },
                { name: 'Northern Superchargers', ground: 'Headingley, Leeds' },
                { name: 'Birmingham Phoenix', ground: 'Edgbaston, Birmingham' },
                { name: 'Trent Rockets', ground: 'Trent Bridge, Nottingham' },
                { name: 'Southern Brave', ground: 'Utilita Bowl, Southampton' },
                { name: 'Welsh Fire', ground: 'Sophia Gardens, Cardiff' },
              ].map((t, idx) => (
                <div key={idx} className="p-3 bg-[#162235]/60 rounded-xl border border-white/5">
                  <span className="text-xs font-bold text-white block">{t.name}</span>
                  <span className="text-[10px] text-slate-400">{t.ground}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: All Cricket Match League Teams */}
      {activeTab === 'teams' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{selectedLeague.trophyEmoji}</span>
                <h3 className="text-xl font-black text-white">{selectedLeague.name} — Franchise Teams</h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">{selectedLeague.highlightFact}</p>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedLeague.id}
                onChange={(e) => {
                  const found = CRICKET_LEAGUES.find(l => l.id === e.target.value);
                  if (found) setSelectedLeague(found);
                }}
                className="px-3 py-2 bg-[#162235] border border-white/15 rounded-xl text-xs font-bold text-white focus:outline-none"
              >
                {CRICKET_LEAGUES.map((l) => (
                  <option key={l.id} value={l.id} className="bg-[#0D1117] text-white">
                    {l.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {selectedLeague.teams.map((teamName, i) => (
              <div
                key={i}
                className="p-4 bg-[#0D1117]/80 rounded-2xl border border-white/5 hover:border-white/20 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-slate-500 text-xs w-4">{i + 1}.</span>
                  <span className="text-xs font-bold text-white">{teamName}</span>
                </div>
                <button
                  onClick={() => onAskAIWithTopic(`Provide roster breakdown and tournament analysis for ${teamName} in ${selectedLeague.name}`)}
                  title="Ask AI about this team"
                  className="p-1 rounded bg-white/5 hover:bg-white/15 text-[#39FF14]"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: League Schedule Window */}
      {activeTab === 'schedule' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
          <h3 className="text-lg font-black text-white">Annual Global Franchise Calendar</h3>
          <p className="text-xs text-slate-400">Timeline of when major world leagues take place each year to plan broadcast tracking.</p>

          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0D1117]/70">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-white/5 text-slate-400 font-bold border-b border-white/10">
                  <th className="py-3 px-3">League</th>
                  <th className="py-3 px-3">Country / Region</th>
                  <th className="py-3 px-3">Active Playing Window</th>
                  <th className="py-3 px-3">Current Defending Champion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {CRICKET_LEAGUES.map((l) => (
                  <tr key={l.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-3 font-bold text-white flex items-center gap-2">
                      <span>{l.trophyEmoji}</span>
                      <span>{l.name}</span>
                    </td>
                    <td className="py-3 px-3 text-slate-300 font-medium">{l.country}</td>
                    <td className="py-3 px-3 font-mono font-bold text-[#39FF14]">{l.scheduleWindow}</td>
                    <td className="py-3 px-3 text-yellow-400 font-medium">{l.currentChampion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
