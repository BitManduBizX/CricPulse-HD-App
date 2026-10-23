import React from 'react';
import { CricketMatch } from '../../types/cricket';
import { MapPin, Clock, ChevronRight, BarChart3, Users } from 'lucide-react';

interface MatchCardProps {
  match: CricketMatch;
  onSelect: (match: CricketMatch) => void;
  onVote: (matchId: string, team: 'teamA' | 'teamB') => void;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match, onSelect, onVote }) => {
  const isLive = match.status === 'LIVE';
  const isCompleted = match.status === 'COMPLETED';

  // Dynamic glow color based on Team A / Team B
  const teamAGlow = match.teamA.primaryColor || '#162235';
  const teamBGlow = match.teamB.primaryColor || '#162235';

  const totalVotes = (match.communityVotes?.teamA || 0) + (match.communityVotes?.teamB || 0);
  const teamAPercent = totalVotes > 0 
    ? Math.round(((match.communityVotes?.teamA || 0) / totalVotes) * 100) 
    : 50;
  const teamBPercent = 100 - teamAPercent;

  const handleVoteClick = (e: React.MouseEvent, team: 'teamA' | 'teamB') => {
    e.stopPropagation();
    onVote(match.id, team);
  };

  return (
    <div
      onClick={() => onSelect(match)}
      style={{
        boxShadow: isLive 
          ? `0 0 20px -8px ${teamAGlow}44, 0 0 20px -8px ${teamBGlow}44` 
          : 'none'
      }}
      className="group relative rounded-2xl bg-[#162235]/80 hover:bg-[#182840] border border-white/10 hover:border-white/25 transition-all duration-300 p-5 cursor-pointer backdrop-blur-md flex flex-col justify-between"
    >
      {/* Top Header Row */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <span className="text-white font-bold">{match.series}</span>
            <span>·</span>
            <span>{match.format}</span>
            <span>·</span>
            <span className="hidden sm:inline">{match.gender}</span>
          </div>

          <div>
            {isLive ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#39FF14]/15 text-[#39FF14] text-[11px] font-extrabold border border-[#39FF14]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] live-pulse" />
                LIVE NOW
              </span>
            ) : isCompleted ? (
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                COMPLETED
              </span>
            ) : (
              <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                UPCOMING
              </span>
            )}
          </div>
        </div>

        {/* Teams & Scores */}
        <div className="space-y-3 my-4">
          
          {/* Team A */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center text-lg border border-white/15 shadow-sm"
                style={{ backgroundColor: `${match.teamA.primaryColor}22` }}
              >
                {match.teamA.flag}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#39FF14] transition-colors">
                  {match.teamA.name}
                </h4>
                {match.teamA.isBatting && (
                  <span className="text-[10px] text-[#39FF14] font-semibold flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#39FF14]" /> Batting
                  </span>
                )}
              </div>
            </div>

            <div className="text-right">
              <div className="text-base font-extrabold text-white font-mono-numbers">
                {match.teamA.runs > 0 || match.teamA.wickets > 0 
                  ? `${match.teamA.runs}/${match.teamA.wickets}` 
                  : (match.status === 'UPCOMING' ? 'Yet to Bat' : '0/0')}
              </div>
              {match.teamA.overs && match.teamA.overs !== '0.0' && (
                <div className="text-[11px] text-slate-400 font-mono-numbers">
                  ({match.teamA.overs} ov)
                </div>
              )}
            </div>
          </div>

          {/* Team B */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center text-lg border border-white/15 shadow-sm"
                style={{ backgroundColor: `${match.teamB.primaryColor}22` }}
              >
                {match.teamB.flag}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#39FF14] transition-colors">
                  {match.teamB.name}
                </h4>
                {match.teamB.isBatting && (
                  <span className="text-[10px] text-[#39FF14] font-semibold flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#39FF14]" /> Batting
                  </span>
                )}
              </div>
            </div>

            <div className="text-right">
              <div className="text-base font-extrabold text-white font-mono-numbers">
                {match.teamB.runs > 0 || match.teamB.wickets > 0 
                  ? `${match.teamB.runs}/${match.teamB.wickets}` 
                  : (match.status === 'UPCOMING' ? 'Yet to Bat' : '0/0')}
              </div>
              {match.teamB.overs && match.teamB.overs !== '0.0' && (
                <div className="text-[11px] text-slate-400 font-mono-numbers">
                  ({match.teamB.overs} ov)
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Live Status Description */}
        <div className="text-xs font-medium text-slate-300 py-1.5 border-t border-white/5 flex items-center justify-between">
          <p className="truncate text-[12px] font-semibold text-[#39FF14]/90">
            {match.statusText}
          </p>
          {match.currentRunRate > 0 && (
            <span className="text-[11px] font-mono-numbers text-slate-400 ml-2 shrink-0">
              CRR: <strong className="text-white">{match.currentRunRate}</strong>
            </span>
          )}
        </div>

        {/* Recent Balls Trail (if available) */}
        {match.recentBalls && match.recentBalls.length > 0 && (
          <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-white/5">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mr-1">
              Recent:
            </span>
            {match.recentBalls.map((b, idx) => {
              const isFour = b === '4';
              const isSix = b === '6';
              const isWicket = b === 'W';
              return (
                <span
                  key={idx}
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono font-bold ${
                    isSix 
                      ? 'bg-[#39FF14] text-black font-extrabold'
                      : isFour
                      ? 'bg-blue-500 text-white font-bold'
                      : isWicket
                      ? 'bg-red-500 text-white font-black'
                      : 'bg-white/10 text-slate-300'
                  }`}
                >
                  {b}
                </span>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer Area: Win Probability & Predictor Vote */}
      <div className="mt-4 pt-3 border-t border-white/10 space-y-3">
        
        {/* Win Probability Bar */}
        {isLive && match.winProbability && (
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono-numbers">
              <span className="text-slate-400">
                Win Prob: <strong className="text-white">{match.teamA.shortName} {match.winProbability.teamA}%</strong>
              </span>
              <span className="text-slate-400">
                <strong className="text-white">{match.teamB.shortName} {match.winProbability.teamB}%</strong>
              </span>
            </div>
            <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden flex">
              <div 
                className="h-full transition-all duration-500"
                style={{ 
                  width: `${match.winProbability.teamA}%`, 
                  backgroundColor: match.teamA.primaryColor 
                }} 
              />
              <div 
                className="h-full transition-all duration-500"
                style={{ 
                  width: `${match.winProbability.teamB}%`, 
                  backgroundColor: match.teamB.primaryColor 
                }} 
              />
            </div>
          </div>
        )}

        {/* Community Match Predictor Voting */}
        <div className="bg-[#0D1117]/80 rounded-xl p-2.5 border border-white/5">
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="text-slate-400 font-semibold flex items-center gap-1">
              <Users className="w-3 h-3 text-[#39FF14]" />
              Fan Predictor Vote
            </span>
            <span className="text-[10px] text-slate-500 font-mono-numbers">
              {totalVotes.toLocaleString()} votes
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={(e) => handleVoteClick(e, 'teamA')}
              className={`py-1 px-2 rounded-lg text-xs font-bold transition-all border flex items-center justify-between ${
                match.communityVotes?.userVoted === 'teamA'
                  ? 'bg-[#39FF14]/20 border-[#39FF14] text-[#39FF14]'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{match.teamA.shortName}</span>
              <span className="font-mono-numbers text-[10px]">{teamAPercent}%</span>
            </button>

            <button
              onClick={(e) => handleVoteClick(e, 'teamB')}
              className={`py-1 px-2 rounded-lg text-xs font-bold transition-all border flex items-center justify-between ${
                match.communityVotes?.userVoted === 'teamB'
                  ? 'bg-[#39FF14]/20 border-[#39FF14] text-[#39FF14]'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{match.teamB.shortName}</span>
              <span className="font-mono-numbers text-[10px]">{teamBPercent}%</span>
            </button>
          </div>
        </div>

        {/* Venue & Action row */}
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1 truncate max-w-[200px]" title={match.venue}>
            <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
            <span className="truncate">{match.venue}</span>
          </div>

          <div className="flex items-center gap-1 text-[#39FF14] font-bold group-hover:translate-x-0.5 transition-transform shrink-0">
            <span>Scorecard</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>
    </div>
  );
};
