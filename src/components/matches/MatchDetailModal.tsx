import React, { useState } from 'react';
import { CricketMatch, TeamInnings, BallCommentary } from '../../types/cricket';
import { 
  X, 
  MapPin, 
  Radio, 
  Share2, 
  Sparkles, 
  Flame, 
  ChevronRight, 
  Users, 
  ShieldCheck, 
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';

interface MatchDetailModalProps {
  match: CricketMatch | null;
  onClose: () => void;
  onVote: (matchId: string, team: 'teamA' | 'teamB') => void;
  onAskAIWithMatch: (match: CricketMatch) => void;
}

export const MatchDetailModal: React.FC<MatchDetailModalProps> = ({
  match,
  onClose,
  onVote,
  onAskAIWithMatch
}) => {
  if (!match) return null;

  const [activeTab, setActiveTab] = useState<'commentary' | 'scorecard' | 'lineups' | 'h2h'>('commentary');
  const [commentaryFilter, setCommentaryFilter] = useState<'ALL' | 'BOUNDARIES' | 'WICKETS'>('ALL');
  const [activeInningsTab, setActiveInningsTab] = useState<'teamA' | 'teamB'>('teamA');
  const [copiedLink, setCopiedLink] = useState(false);

  const isLive = match.status === 'LIVE';

  // Filter commentary
  const filteredCommentary = match.commentary.filter((item) => {
    if (commentaryFilter === 'BOUNDARIES') {
      return item.isBoundary || item.isSix;
    }
    if (commentaryFilter === 'WICKETS') {
      return item.isWicket;
    }
    return true;
  });

  const selectedInnings: TeamInnings = activeInningsTab === 'teamA' ? match.teamA : match.teamB;

  const totalVotes = (match.communityVotes?.teamA || 0) + (match.communityVotes?.teamB || 0);
  const teamAPercent = totalVotes > 0 
    ? Math.round(((match.communityVotes?.teamA || 0) / totalVotes) * 100) 
    : 50;
  const teamBPercent = 100 - teamAPercent;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0D1117] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#162235] border-b border-white/10">
          <div className="flex items-center gap-2">
            {isLive ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#39FF14]/15 text-[#39FF14] text-xs font-bold border border-[#39FF14]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] live-pulse" />
                LIVE MATCH CENTER
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-md bg-white/10 text-slate-300 text-xs font-bold uppercase">
                {match.status}
              </span>
            )}
            <span className="text-xs text-slate-400 font-medium">
              {match.series} · {match.format}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1"
              title="Share Match Link"
            >
              <Share2 className="w-4 h-4" />
              {copiedLink && <span className="text-[10px] text-[#39FF14] font-bold">Copied!</span>}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-slate-300 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Big Scorecard Banner Header */}
        <div className="p-6 bg-gradient-to-b from-[#162235] to-[#0D1117] border-b border-white/10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
            
            {/* Team A */}
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border border-white/20 shadow-md"
                style={{ backgroundColor: `${match.teamA.primaryColor}22` }}
              >
                {match.teamA.flag}
              </div>
              <div>
                <h3 className="text-lg font-black text-white">{match.teamA.name}</h3>
                <div className="text-2xl font-black text-[#F8F9FA] font-mono-numbers">
                  {match.teamA.runs > 0 || match.teamA.wickets > 0
                    ? `${match.teamA.runs}/${match.teamA.wickets}`
                    : '-'}
                  <span className="text-xs text-slate-400 font-normal ml-1">
                    ({match.teamA.overs} ov)
                  </span>
                </div>
              </div>
            </div>

            {/* Middle Status & Win Probability */}
            <div className="text-center space-y-2">
              <div className="text-xs font-bold text-[#39FF14] bg-[#004D40]/60 py-1 px-3 rounded-full inline-block border border-[#39FF14]/30">
                {match.statusText}
              </div>
              <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{match.venue}, {match.city}</span>
              </div>
              {match.toss && (
                <div className="text-[10px] text-slate-400 italic">
                  Toss: {match.toss}
                </div>
              )}
            </div>

            {/* Team B */}
            <div className="flex items-center justify-end gap-3 text-right">
              <div>
                <h3 className="text-lg font-black text-white">{match.teamB.name}</h3>
                <div className="text-2xl font-black text-[#F8F9FA] font-mono-numbers">
                  {match.teamB.runs > 0 || match.teamB.wickets > 0
                    ? `${match.teamB.runs}/${match.teamB.wickets}`
                    : '-'}
                  <span className="text-xs text-slate-400 font-normal ml-1">
                    ({match.teamB.overs} ov)
                  </span>
                </div>
              </div>
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border border-white/20 shadow-md"
                style={{ backgroundColor: `${match.teamB.primaryColor}22` }}
              >
                {match.teamB.flag}
              </div>
            </div>

          </div>

          {/* Win Probability & CRR Metric Strip */}
          {isLive && match.winProbability && (
            <div className="pt-3 border-t border-white/10 space-y-1.5">
              <div className="flex justify-between items-center text-xs font-mono-numbers">
                <span className="text-slate-300 font-bold">
                  Win Probability: {match.teamA.shortName} <span className="text-[#39FF14]">{match.winProbability.teamA}%</span>
                </span>
                <span className="text-slate-400 text-[11px]">
                  CRR: <strong className="text-white">{match.currentRunRate}</strong>
                  {match.requiredRunRate ? ` · RRR: ${match.requiredRunRate}` : ''}
                </span>
                <span className="text-slate-300 font-bold">
                  {match.teamB.shortName} <span className="text-blue-400">{match.winProbability.teamB}%</span>
                </span>
              </div>
              <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden flex">
                <div 
                  className="h-full transition-all duration-500" 
                  style={{ width: `${match.winProbability.teamA}%`, backgroundColor: match.teamA.primaryColor }}
                />
                <div 
                  className="h-full transition-all duration-500" 
                  style={{ width: `${match.winProbability.teamB}%`, backgroundColor: match.teamB.primaryColor }}
                />
              </div>
            </div>
          )}

          {/* Quick AI Ask CTA */}
          <div className="flex items-center justify-between bg-[#162235]/90 rounded-xl p-3 border border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#39FF14]" />
              <span className="text-xs text-slate-200 font-medium">
                Want deep AI tactical breakdown for this {match.teamA.shortName} vs {match.teamB.shortName} clash?
              </span>
            </div>
            <button
              onClick={() => {
                onAskAIWithMatch(match);
                onClose();
              }}
              className="px-3 py-1.5 rounded-lg bg-[#39FF14] hover:bg-[#32e012] text-black font-extrabold text-xs flex items-center gap-1.5 transition-all shadow-md neon-glow-green"
            >
              <span>Ask CricMind AI</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 bg-[#162235]/80 border-b border-white/10">
          <button
            onClick={() => setActiveTab('commentary')}
            className={`py-3 px-3 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'commentary'
                ? 'border-[#39FF14] text-[#39FF14]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Ball-by-Ball Feed
          </button>
          <button
            onClick={() => setActiveTab('scorecard')}
            className={`py-3 px-3 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'scorecard'
                ? 'border-[#39FF14] text-[#39FF14]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Full Scorecard
          </button>
          <button
            onClick={() => setActiveTab('lineups')}
            className={`py-3 px-3 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'lineups'
                ? 'border-[#39FF14] text-[#39FF14]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Playing XI & Roles
          </button>
          <button
            onClick={() => setActiveTab('h2h')}
            className={`py-3 px-3 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'h2h'
                ? 'border-[#39FF14] text-[#39FF14]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Head-to-Head & Votes
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          
          {/* TAB 1: Ball-by-ball Commentary */}
          {activeTab === 'commentary' && (
            <div className="space-y-4">
              
              {/* Filter Buttons */}
              <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                <span className="text-xs text-slate-400 font-semibold">Filter Balls:</span>
                {(['ALL', 'BOUNDARIES', 'WICKETS'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setCommentaryFilter(filter)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      commentaryFilter === filter
                        ? 'bg-[#004D40] text-[#39FF14] border border-[#39FF14]/40'
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {filter === 'ALL' ? 'All Balls' : filter === 'BOUNDARIES' ? 'Boundaries (4s & 6s)' : 'Wickets Only'}
                  </button>
                ))}
              </div>

              {/* Commentary List */}
              {filteredCommentary.length > 0 ? (
                <div className="space-y-3">
                  {filteredCommentary.map((c) => (
                    <div
                      key={c.id}
                      className={`p-4 rounded-xl border transition-all ${
                        c.isSix
                          ? 'bg-[#39FF14]/10 border-[#39FF14]/40'
                          : c.isBoundary
                          ? 'bg-blue-500/10 border-blue-500/30'
                          : c.isWicket
                          ? 'bg-red-500/15 border-red-500/40'
                          : 'bg-[#162235]/60 border-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono-numbers text-xs font-black px-2 py-0.5 rounded bg-black/40 text-white border border-white/10">
                            {c.over}.{c.ball}
                          </span>
                          <span className="text-xs font-bold text-slate-300">
                            {c.bowlerName} to {c.batsmanName}
                          </span>
                        </div>

                        {c.tag && (
                          <span className={`text-[11px] font-black px-2 py-0.5 rounded ${
                            c.tag === 'SIX'
                              ? 'bg-[#39FF14] text-black font-extrabold'
                              : c.tag === 'FOUR'
                              ? 'bg-blue-500 text-white font-bold'
                              : c.tag === 'WICKET'
                              ? 'bg-red-600 text-white font-extrabold'
                              : 'bg-white/10 text-slate-300'
                          }`}>
                            {c.tag}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-200 leading-relaxed font-normal">
                        {c.commentaryText}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-slate-400 text-xs">
                  No commentary events match this filter.
                </div>
              )}

            </div>
          )}

          {/* TAB 2: Full Scorecard */}
          {activeTab === 'scorecard' && (
            <div className="space-y-6">
              
              {/* Innings Selector */}
              <div className="flex items-center gap-2 p-1 bg-[#162235] rounded-xl border border-white/10 w-fit">
                <button
                  onClick={() => setActiveInningsTab('teamA')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeInningsTab === 'teamA'
                      ? 'bg-[#39FF14] text-black shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {match.teamA.name} ({match.teamA.runs}/{match.teamA.wickets})
                </button>
                <button
                  onClick={() => setActiveInningsTab('teamB')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeInningsTab === 'teamB'
                      ? 'bg-[#39FF14] text-black shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {match.teamB.name} ({match.teamB.runs}/{match.teamB.wickets})
                </button>
              </div>

              {/* Batting Scorecard Table */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-wider">
                  Batting Performance
                </h4>
                <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#162235]/60">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="bg-white/5 text-slate-400 border-b border-white/10 font-bold">
                        <th className="py-2.5 px-3">Batter</th>
                        <th className="py-2.5 px-3">Dismissal</th>
                        <th className="py-2.5 px-3 text-right font-mono-numbers">R</th>
                        <th className="py-2.5 px-3 text-right font-mono-numbers">B</th>
                        <th className="py-2.5 px-3 text-right font-mono-numbers">4s</th>
                        <th className="py-2.5 px-3 text-right font-mono-numbers">6s</th>
                        <th className="py-2.5 px-3 text-right font-mono-numbers">SR</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {selectedInnings.battingScorecard && selectedInnings.battingScorecard.length > 0 ? (
                        selectedInnings.battingScorecard.map((p) => (
                          <tr key={p.id} className="hover:bg-white/5 transition-colors">
                            <td className="py-2.5 px-3 font-bold text-white flex items-center gap-1.5">
                              <span>{p.name}</span>
                              {p.isCaptain && <span className="text-[10px] text-yellow-400 font-mono">(c)</span>}
                              {p.isWicketkeeper && <span className="text-[10px] text-blue-400 font-mono">(wk)</span>}
                              {p.notOut && <span className="text-[10px] text-[#39FF14] font-mono">*</span>}
                            </td>
                            <td className="py-2.5 px-3 text-slate-400 text-[11px] truncate max-w-[150px]">
                              {p.dismissal}
                            </td>
                            <td className="py-2.5 px-3 text-right font-bold text-white font-mono-numbers">
                              {p.runs}
                            </td>
                            <td className="py-2.5 px-3 text-right text-slate-300 font-mono-numbers">
                              {p.balls}
                            </td>
                            <td className="py-2.5 px-3 text-right text-slate-400 font-mono-numbers">
                              {p.fours}
                            </td>
                            <td className="py-2.5 px-3 text-right text-slate-400 font-mono-numbers">
                              {p.sixes}
                            </td>
                            <td className="py-2.5 px-3 text-right text-[#39FF14] font-bold font-mono-numbers">
                              {p.strikeRate}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={7} className="py-6 text-center text-slate-400">
                            Yet to bat in this innings.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bowling Figures Table */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-[#39FF14] uppercase tracking-wider">
                  Bowling Attack
                </h4>
                <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#162235]/60">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="bg-white/5 text-slate-400 border-b border-white/10 font-bold">
                        <th className="py-2.5 px-3">Bowler</th>
                        <th className="py-2.5 px-3 text-right font-mono-numbers">O</th>
                        <th className="py-2.5 px-3 text-right font-mono-numbers">M</th>
                        <th className="py-2.5 px-3 text-right font-mono-numbers">R</th>
                        <th className="py-2.5 px-3 text-right font-mono-numbers">W</th>
                        <th className="py-2.5 px-3 text-right font-mono-numbers">ECON</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {selectedInnings.bowlingFigures && selectedInnings.bowlingFigures.length > 0 ? (
                        selectedInnings.bowlingFigures.map((b) => (
                          <tr key={b.id} className="hover:bg-white/5 transition-colors">
                            <td className="py-2.5 px-3 font-bold text-white">
                              {b.name}
                            </td>
                            <td className="py-2.5 px-3 text-right text-slate-300 font-mono-numbers">
                              {b.overs}
                            </td>
                            <td className="py-2.5 px-3 text-right text-slate-400 font-mono-numbers">
                              {b.maidens}
                            </td>
                            <td className="py-2.5 px-3 text-right text-slate-300 font-mono-numbers">
                              {b.runs}
                            </td>
                            <td className="py-2.5 px-3 text-right font-black text-[#39FF14] font-mono-numbers">
                              {b.wickets}
                            </td>
                            <td className="py-2.5 px-3 text-right text-slate-300 font-mono-numbers">
                              {b.economy}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={6} className="py-6 text-center text-slate-400">
                            Bowling figures will populate once play resumes.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: Playing XI & Lineups */}
          {activeTab === 'lineups' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Team A Lineup */}
              <div className="space-y-3 bg-[#162235]/60 p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                  <span className="text-xl">{match.teamA.flag}</span>
                  <h4 className="text-sm font-extrabold text-white">{match.teamA.name} XI</h4>
                </div>
                <div className="space-y-1.5">
                  {match.playingXI.teamA.map((player, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1 px-2 rounded hover:bg-white/5">
                      <div className="flex items-center gap-1.5 font-semibold text-white">
                        <span className="text-slate-500 font-mono text-[11px] w-4">{idx + 1}.</span>
                        <span>{player.name}</span>
                        {player.isCaptain && <span className="text-[10px] text-yellow-400 font-mono font-bold">(c)</span>}
                        {player.isWicketkeeper && <span className="text-[10px] text-blue-400 font-mono font-bold">(wk)</span>}
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {player.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team B Lineup */}
              <div className="space-y-3 bg-[#162235]/60 p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                  <span className="text-xl">{match.teamB.flag}</span>
                  <h4 className="text-sm font-extrabold text-white">{match.teamB.name} XI</h4>
                </div>
                <div className="space-y-1.5">
                  {match.playingXI.teamB.map((player, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1 px-2 rounded hover:bg-white/5">
                      <div className="flex items-center gap-1.5 font-semibold text-white">
                        <span className="text-slate-500 font-mono text-[11px] w-4">{idx + 1}.</span>
                        <span>{player.name}</span>
                        {player.isCaptain && <span className="text-[10px] text-yellow-400 font-mono font-bold">(c)</span>}
                        {player.isWicketkeeper && <span className="text-[10px] text-blue-400 font-mono font-bold">(wk)</span>}
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {player.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: Head to Head & Match Predictor */}
          {activeTab === 'h2h' && (
            <div className="space-y-6">
              
              {/* Head-to-Head Statistics */}
              <div className="bg-[#162235]/70 p-5 rounded-2xl border border-white/10 space-y-4">
                <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Historical Head-to-Head Record
                </h4>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                    <div className="text-2xl font-black text-white font-mono-numbers">
                      {match.headToHead.teamAWins}
                    </div>
                    <div className="text-[11px] font-bold text-slate-300 mt-1">
                      {match.teamA.shortName} Wins
                    </div>
                  </div>

                  <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                    <div className="text-2xl font-black text-slate-400 font-mono-numbers">
                      {match.headToHead.totalMatches}
                    </div>
                    <div className="text-[11px] font-bold text-slate-400 mt-1">
                      Total Clashes
                    </div>
                  </div>

                  <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                    <div className="text-2xl font-black text-white font-mono-numbers">
                      {match.headToHead.teamBWins}
                    </div>
                    <div className="text-[11px] font-bold text-slate-300 mt-1">
                      {match.teamB.shortName} Wins
                    </div>
                  </div>
                </div>

                {/* Last 5 Clashes Form */}
                <div className="flex items-center justify-between text-xs pt-2 border-t border-white/5">
                  <span className="text-slate-400">Last 5 Clashes Form:</span>
                  <div className="flex items-center gap-1.5">
                    {match.headToHead.lastFive.map((winner, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                          winner === 'teamA'
                            ? 'bg-[#39FF14]/20 text-[#39FF14]'
                            : winner === 'teamB'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-white/10 text-slate-400'
                        }`}
                      >
                        {winner === 'teamA' ? match.teamA.shortName : winner === 'teamB' ? match.teamB.shortName : 'NR'}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fan Predictor Interactive Polling */}
              <div className="bg-[#162235]/70 p-5 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#39FF14]" />
                    <h4 className="text-sm font-bold text-white">Community Match Predictor</h4>
                  </div>
                  <span className="text-xs text-slate-400 font-mono-numbers">
                    {totalVotes.toLocaleString()} votes cast
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => onVote(match.id, 'teamA')}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      match.communityVotes?.userVoted === 'teamA'
                        ? 'bg-[#39FF14]/20 border-[#39FF14]'
                        : 'bg-black/30 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-white">{match.teamA.name}</span>
                      {match.communityVotes?.userVoted === 'teamA' && (
                        <CheckCircle2 className="w-4 h-4 text-[#39FF14]" />
                      )}
                    </div>
                    <div className="text-2xl font-black text-[#39FF14] font-mono-numbers">
                      {teamAPercent}%
                    </div>
                  </button>

                  <button
                    onClick={() => onVote(match.id, 'teamB')}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      match.communityVotes?.userVoted === 'teamB'
                        ? 'bg-[#39FF14]/20 border-[#39FF14]'
                        : 'bg-black/30 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-white">{match.teamB.name}</span>
                      {match.communityVotes?.userVoted === 'teamB' && (
                        <CheckCircle2 className="w-4 h-4 text-[#39FF14]" />
                      )}
                    </div>
                    <div className="text-2xl font-black text-blue-400 font-mono-numbers">
                      {teamBPercent}%
                    </div>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
