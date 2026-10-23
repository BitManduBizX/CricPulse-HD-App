import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Header } from './components/common/Header';
import { LiveTicker } from './components/common/LiveTicker';
import { BottomNav } from './components/common/BottomNav';
import { MatchList } from './components/matches/MatchList';
import { MatchDetailModal } from './components/matches/MatchDetailModal';
import { NPLHub } from './components/npl/NPLHub';
import { LeaguesDirectory } from './components/leagues/LeaguesDirectory';
import { RankingsView } from './components/rankings/RankingsView';
import { StatsView } from './components/stats/StatsView';
import { MediaHub } from './components/news/MediaHub';
import { CricMindAssistant } from './components/ai/CricMindAssistant';
import { INITIAL_MATCHES } from './data/mockMatches';
import { CricketMatch } from './types/cricket';
import { Radio, Bell, Trophy, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [matches, setMatches] = useState<CricketMatch[]>(INITIAL_MATCHES);
  const [selectedMatch, setSelectedMatch] = useState<CricketMatch | null>(null);
  const [activeTab, setActiveTab] = useState<'matches' | 'npl' | 'leagues' | 'rankings' | 'news'>('matches');
  const [searchQuery, setSearchQuery] = useState('');
  
  // AI Assistant States
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiTopic, setAiTopic] = useState<string | null>(null);

  // Notification Toast
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Live Score Simulation Interval (makes live matches dynamically progress)
  useEffect(() => {
    const interval = setInterval(() => {
      setMatches((prevMatches) => {
        return prevMatches.map((match) => {
          if (match.status !== 'LIVE') return match;

          // Progress Kathmandu Gorkhas vs Janakpur Bolts or India vs Australia
          const randomOutcome = Math.random();
          let addedRuns = 1;
          let ballText = '1';
          let commentaryEvent = '';

          if (randomOutcome > 0.8) {
            addedRuns = 4;
            ballText = '4';
            commentaryEvent = `💥 FOUR! Slashed through point with immaculate timing!`;
          } else if (randomOutcome > 0.65) {
            addedRuns = 6;
            ballText = '6';
            commentaryEvent = `🚀 MAXIMUM! Clean hit over long-off! The stadium goes wild!`;
          } else if (randomOutcome > 0.45) {
            addedRuns = 2;
            ballText = '2';
            commentaryEvent = `Fast running between the wickets pushes for two.`;
          } else if (randomOutcome > 0.25) {
            addedRuns = 1;
            ballText = '1';
            commentaryEvent = `Worked gently into the mid-wicket gap for a single.`;
          } else {
            addedRuns = 0;
            ballText = '0';
            commentaryEvent = `Solid forward defensive push. Dot ball.`;
          }

          const updatedTeamB = {
            ...match.teamB,
            runs: match.teamB.runs + addedRuns,
          };

          const newRecentBalls = [...(match.recentBalls || []), ballText].slice(-6);

          // Trigger live toast if boundary
          if (notificationsEnabled && (ballText === '4' || ballText === '6')) {
            setToastMessage(`⚡ ${match.title}: ${ballText === '6' ? 'SIX!' : 'FOUR!'} (${match.teamB.shortName} ${updatedTeamB.runs}/${match.teamB.wickets})`);
            setTimeout(() => setToastMessage(null), 4000);
          }

          // Recalculate slight win probability shift
          const shift = Math.floor(Math.random() * 3) - 1;
          const newTeamBProb = Math.min(95, Math.max(5, (match.winProbability?.teamB || 50) + shift));
          const newTeamAProb = 100 - newTeamBProb;

          return {
            ...match,
            teamB: updatedTeamB,
            recentBalls: newRecentBalls,
            winProbability: {
              teamA: newTeamAProb,
              teamB: newTeamBProb
            }
          };
        });
      });
    }, 14000);

    return () => clearInterval(interval);
  }, [notificationsEnabled]);

  // Handle community match voting
  const handleVote = (matchId: string, team: 'teamA' | 'teamB') => {
    setMatches((prev) =>
      prev.map((m) => {
        if (m.id !== matchId) return m;
        if (m.communityVotes?.userVoted) return m; // already voted

        const newVotes = {
          ...m.communityVotes,
          [team]: (m.communityVotes?.[team] || 0) + 1,
          userVoted: team
        };

        return { ...m, communityVotes: newVotes };
      })
    );

    // Also update selected match in modal if open
    setSelectedMatch((prev) => {
      if (!prev || prev.id !== matchId) return prev;
      return {
        ...prev,
        communityVotes: {
          ...prev.communityVotes,
          [team]: (prev.communityVotes?.[team] || 0) + 1,
          userVoted: team
        }
      };
    });
  };

  const handleAskAIWithTopic = (topic: string) => {
    setAiTopic(topic);
    setIsAiOpen(true);
  };

  const handleAskAIWithMatch = (match: CricketMatch) => {
    setSelectedMatch(match);
    setAiTopic(`Give me a tactical breakdown, player matchups, and win prediction for ${match.title} (${match.series})`);
    setIsAiOpen(true);
  };

  const liveMatches = matches.filter((m) => m.status === 'LIVE');

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#0D1117] text-[#F8F9FA] flex flex-col font-sans selection:bg-[#39FF14] selection:text-black">
        
        {/* Real-time Push Notification Toast */}
        {toastMessage && (
          <div className="fixed top-20 right-4 z-50 max-w-sm p-3.5 rounded-2xl bg-[#162235]/95 border-2 border-[#39FF14] text-white shadow-2xl flex items-center gap-3 backdrop-blur-md animate-in slide-in-from-top-4 duration-300">
            <div className="w-8 h-8 rounded-xl bg-[#004D40] flex items-center justify-center text-[#39FF14] shrink-0 border border-[#39FF14]/40">
              <Bell className="w-4 h-4 animate-bounce" />
            </div>
            <div className="flex-1 text-xs font-bold leading-tight">
              {toastMessage}
            </div>
          </div>
        )}

        {/* Global Broadcast Header */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenAiAssistant={() => setIsAiOpen(true)}
          notificationsEnabled={notificationsEnabled}
          onToggleNotifications={() => setNotificationsEnabled(!notificationsEnabled)}
          liveMatchesCount={liveMatches.length}
        />

        {/* Global Live Scores Ticker */}
        <LiveTicker
          matches={matches}
          onSelectMatch={(m) => setSelectedMatch(m)}
        />

        {/* Main Content Viewport */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 md:pb-12 space-y-8">
          
          {/* TAB: Match Center */}
          {activeTab === 'matches' && (
            <MatchList
              matches={matches}
              onSelectMatch={(m) => setSelectedMatch(m)}
              onVote={handleVote}
              onNavigateNPL={() => setActiveTab('npl')}
              searchQuery={searchQuery}
            />
          )}

          {/* TAB: NPL Hub */}
          {activeTab === 'npl' && (
            <NPLHub onAskAIWithTopic={handleAskAIWithTopic} />
          )}

          {/* TAB: Leagues Directory */}
          {activeTab === 'leagues' && (
            <LeaguesDirectory onAskAIWithTopic={handleAskAIWithTopic} />
          )}

          {/* TAB: Rankings & Stats */}
          {activeTab === 'rankings' && (
            <div className="space-y-10">
              <RankingsView onAskAIWithTopic={handleAskAIWithTopic} />
              <StatsView onAskAIWithTopic={handleAskAIWithTopic} />
            </div>
          )}

          {/* TAB: News & Media */}
          {activeTab === 'news' && (
            <MediaHub onAskAIWithTopic={handleAskAIWithTopic} />
          )}

        </main>

        {/* Match Deep Dive Modal */}
        <MatchDetailModal
          match={selectedMatch}
          onClose={() => setSelectedMatch(null)}
          onVote={handleVote}
          onAskAIWithMatch={handleAskAIWithMatch}
        />

        {/* Embedded CricMind AI Assistant */}
        <CricMindAssistant
          isOpen={isAiOpen}
          onClose={() => setIsAiOpen(false)}
          onOpen={() => setIsAiOpen(true)}
          activeMatchContext={selectedMatch}
          initialTopic={aiTopic}
          onClearInitialTopic={() => setAiTopic(null)}
        />

        {/* Mobile Persistent Bottom Tab Bar */}
        <BottomNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenAiAssistant={() => setIsAiOpen(true)}
        />

        {/* Broadcast Footer */}
        <footer className="mt-auto border-t border-white/10 bg-[#0A0D12] py-8 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">🏏</span>
              <div>
                <span className="font-black text-white text-sm tracking-tight">
                  CRICPULSE <span className="text-[#39FF14]">HD</span>
                </span>
                <p className="text-[11px] text-slate-400">
                  Broadcast-Grade Cricket Intelligence · Midnight Stadium Visual Architecture
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
              <button onClick={() => setActiveTab('matches')} className="hover:text-white transition-colors">
                Match Center
              </button>
              <span>·</span>
              <button onClick={() => setActiveTab('npl')} className="hover:text-red-400 text-red-500 font-bold transition-colors">
                NPL Hub 🇳🇵
              </button>
              <span>·</span>
              <button onClick={() => setActiveTab('leagues')} className="hover:text-white transition-colors">
                All 28 Leagues
              </button>
              <span>·</span>
              <button onClick={() => setActiveTab('rankings')} className="hover:text-white transition-colors">
                ICC Rankings
              </button>
              <span>·</span>
              <button onClick={() => setIsAiOpen(true)} className="hover:text-[#39FF14] text-[#39FF14] font-bold transition-colors">
                CricMind AI
              </button>
            </div>

            <div className="text-[10px] text-slate-400 font-mono">
              © {new Date().getFullYear()} CricPulse HD · All Rights Reserved
            </div>
          </div>
        </footer>

      </div>
    </ErrorBoundary>
  );
}
