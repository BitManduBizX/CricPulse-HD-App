import React, { useState } from 'react';
import { CricketMatch, MatchCategory, MatchFormat, MatchGender } from '../../types/cricket';
import { MatchCard } from './MatchCard';
import { Radio, Filter, Flame, Trophy, ArrowRight, Sparkles } from 'lucide-react';

interface MatchListProps {
  matches: CricketMatch[];
  onSelectMatch: (match: CricketMatch) => void;
  onVote: (matchId: string, team: 'teamA' | 'teamB') => void;
  onNavigateNPL: () => void;
  searchQuery: string;
}

export const MatchList: React.FC<MatchListProps> = ({
  matches,
  onSelectMatch,
  onVote,
  onNavigateNPL,
  searchQuery
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MatchCategory | 'All'>('All');
  const [selectedGender, setSelectedGender] = useState<MatchGender | 'All'>('All');
  const [selectedFormat, setSelectedFormat] = useState<MatchFormat | 'All'>('All');

  // Filter logic
  const filteredMatches = matches.filter((m) => {
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchText = `${m.title} ${m.series} ${m.venue} ${m.teamA.name} ${m.teamB.name} ${m.city}`.toLowerCase();
      if (!matchText.includes(q)) return false;
    }

    // Category
    if (selectedCategory !== 'All') {
      if (selectedCategory === 'Live Now' && m.status !== 'LIVE') return false;
      if (selectedCategory !== 'Live Now' && m.category !== selectedCategory) return false;
    }

    // Gender
    if (selectedGender !== 'All' && m.gender !== selectedGender) {
      return false;
    }

    // Format
    if (selectedFormat !== 'All' && m.format !== selectedFormat) {
      return false;
    }

    return true;
  });

  const categories: Array<MatchCategory | 'All'> = [
    'All',
    'Live Now',
    'Current Matches',
    'T20 League Today Match',
    'Upcoming Cricket World Cup',
    'Matches By Day'
  ];

  const formats: Array<MatchFormat | 'All'> = ['All', 'T20', 'Cricket ODI', 'Test'];
  const genders: Array<MatchGender | 'All'> = ['All', 'Cricket Men', 'Cricket Women'];

  return (
    <div className="space-y-6">
      
      {/* Featured Headline Banner: NPL Spotlight & World Cup */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#162235] via-[#004D40] to-[#162235] border border-white/10 p-5 sm:p-6 shadow-xl">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#39FF14]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-48 h-48 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-[#EF4444] text-white text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                <span>🇳🇵</span> FEATURED TOURNAMENT
              </span>
              <span className="text-xs text-[#D4AF37] font-semibold flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5" /> रू 1.1 Crore Bounty
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Nepal Premier League (NPL) — Live from TU Cricket Ground
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Experience the Himalayan cricket fever! 8 provincial franchise powerhouses, Shikhar Dhawan, Martin Guptill, and Sandeep Lamichhane under the Kirtipur floodlights.
            </p>
          </div>

          <button
            onClick={onNavigateNPL}
            className="shrink-0 px-5 py-3 rounded-xl bg-[#39FF14] hover:bg-[#32e012] text-black font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg neon-glow-green"
          >
            <span>Explore NPL Hub</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter Toolbar: Categories, Format, Gender */}
      <div className="space-y-3 bg-[#162235]/60 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <span className="text-xs font-bold text-slate-400 flex items-center gap-1 shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5 text-[#39FF14]" />
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? cat === 'Live Now'
                    ? 'bg-[#39FF14] text-black shadow-md'
                    : 'bg-white text-slate-900 shadow-md'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat === 'Live Now' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600 mr-1.5 live-pulse" />}
              {cat === 'All' ? 'All Matches' : cat}
            </button>
          ))}
        </div>

        {/* Second Row: Format & Gender Sub-Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5">
          {/* Format */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-slate-400">Format:</span>
            {formats.map((fmt) => (
              <button
                key={fmt}
                onClick={() => setSelectedFormat(fmt)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                  selectedFormat === fmt
                    ? 'bg-[#004D40] text-[#39FF14] border border-[#39FF14]/40 font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>

          {/* Gender */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-slate-400">Division:</span>
            {genders.map((gen) => (
              <button
                key={gen}
                onClick={() => setSelectedGender(gen)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                  selectedGender === gen
                    ? 'bg-[#004D40] text-[#39FF14] border border-[#39FF14]/40 font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {gen}
              </button>
            ))}
          </div>

          {/* Match Count Badge */}
          <div className="text-[11px] font-mono-numbers text-slate-400">
            Showing <strong className="text-white">{filteredMatches.length}</strong> fixtures
          </div>
        </div>

      </div>

      {/* Matches Grid */}
      {filteredMatches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMatches.map((match) => (
            <MatchCard
              key={match.id}
              match={match}
              onSelect={onSelectMatch}
              onVote={onVote}
            />
          ))}
        </div>
      ) : (
        <div className="glass-panel p-12 rounded-2xl text-center space-y-4 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-white/5 mx-auto flex items-center justify-center text-3xl">
            🏏
          </div>
          <h3 className="text-lg font-bold text-white">No matches found</h3>
          <p className="text-xs text-slate-400">
            Try resetting your category or format filters to discover live and scheduled cricket fixtures.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedFormat('All');
              setSelectedGender('All');
            }}
            className="px-4 py-2 bg-[#162235] hover:bg-[#1e2f47] text-[#39FF14] text-xs font-bold rounded-xl border border-[#39FF14]/30"
          >
            Reset All Filters
          </button>
        </div>
      )}

    </div>
  );
};
