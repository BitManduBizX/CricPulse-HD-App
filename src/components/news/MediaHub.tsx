import React, { useState } from 'react';
import { CRICKET_NEWS, VIDEO_HIGHLIGHTS, FAN_POLL } from '../../data/mockNews';
import { NewsItem } from '../../types/cricket';
import { 
  Newspaper, 
  Play, 
  Clock, 
  Flame, 
  CheckCircle2, 
  Sparkles, 
  Eye, 
  ExternalLink 
} from 'lucide-react';

interface MediaHubProps {
  onAskAIWithTopic: (topic: string) => void;
}

export const MediaHub: React.FC<MediaHubProps> = ({ onAskAIWithTopic }) => {
  const [pollVotes, setPollVotes] = useState(FAN_POLL.options);
  const [userVotedId, setUserVotedId] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const handleVote = (optionId: string) => {
    if (userVotedId) return;
    setUserVotedId(optionId);
    setPollVotes((prev) =>
      prev.map((opt) => (opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt))
    );
  };

  const totalPollVotes = pollVotes.reduce((acc, curr) => acc + curr.votes, 0);

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-2">
        <div className="flex items-center gap-2">
          <Newspaper className="w-5 h-5 text-[#39FF14]" />
          <h2 className="text-2xl sm:text-3xl font-black text-white">Media Hub & Editorial Desk</h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-300">
          In-depth investigative reports, tactical columns, video replay highlights, and community fan polls.
        </p>
      </div>

      {/* Main Grid: Articles on Left, Highlights & Poll on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (2 Cols): News Articles */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xs font-black text-[#D4AF37] uppercase tracking-wider">
            Latest Headlines & Editorial Features
          </h3>

          <div className="space-y-4">
            {CRICKET_NEWS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedArticle(item)}
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-white/25 cursor-pointer transition-all duration-200 group flex flex-col sm:flex-row gap-4 items-start"
              >
                <div className="w-full sm:w-48 h-36 rounded-xl overflow-hidden shrink-0 relative bg-black/40">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-bold text-[#39FF14] border border-white/10">
                    {item.category}
                  </span>
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                    <span>{item.author}</span>
                    <span>·</span>
                    <span>{item.publishedAt}</span>
                    <span>·</span>
                    <span className="text-slate-300 font-mono-numbers">{item.readTime}</span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#39FF14] transition-colors leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="pt-1 flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAskAIWithTopic(`Give me tactical analysis and insights on this cricket report: "${item.title}"`);
                      }}
                      className="text-[11px] text-[#39FF14] font-bold flex items-center gap-1 hover:underline"
                    >
                      <Sparkles className="w-3 h-3" />
                      Ask AI about this story
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (1 Col): Video Reels & Fan Poll */}
        <div className="space-y-6">
          
          {/* Video Highlights Reel */}
          <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-4">
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4 text-[#39FF14]" />
              <h3 className="text-xs font-black text-white uppercase tracking-wider">
                Video Highlights Reel
              </h3>
            </div>

            <div className="space-y-3">
              {VIDEO_HIGHLIGHTS.map((vid) => (
                <div
                  key={vid.id}
                  className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#0D1117] hover:border-[#39FF14]/50 cursor-pointer transition-all"
                  onClick={() => alert(`Playing highlight: "${vid.title}"`)}
                >
                  <div className="relative h-28 w-full bg-black">
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-black/60 group-hover:bg-[#39FF14] text-white group-hover:text-black flex items-center justify-center shadow-lg transition-colors">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 font-mono text-[10px] text-white">
                      {vid.duration}
                    </span>
                  </div>

                  <div className="p-2.5">
                    <h5 className="text-xs font-bold text-white group-hover:text-[#39FF14] transition-colors line-clamp-1">
                      {vid.title}
                    </h5>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                      <span>{vid.match}</span>
                      <span className="flex items-center gap-1 font-mono-numbers">
                        <Eye className="w-2.5 h-2.5" /> {vid.views}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Fan Poll */}
          <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-4">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-400" />
              <h3 className="text-xs font-black text-white uppercase tracking-wider">
                Fan Pulse Poll
              </h3>
            </div>

            <p className="text-xs font-bold text-slate-200">
              {FAN_POLL.question}
            </p>

            <div className="space-y-2">
              {pollVotes.map((opt) => {
                const percent = Math.round((opt.votes / totalPollVotes) * 100);
                const isSelected = userVotedId === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleVote(opt.id)}
                    className={`w-full p-2.5 rounded-xl text-left border transition-all relative overflow-hidden ${
                      isSelected
                        ? 'border-[#39FF14] bg-[#39FF14]/15'
                        : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    {/* Background progress fill */}
                    {userVotedId && (
                      <div
                        className="absolute inset-y-0 left-0 bg-[#39FF14]/20 transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    )}

                    <div className="relative z-10 flex items-center justify-between text-xs">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14]" />}
                        {opt.label}
                      </span>
                      {userVotedId && (
                        <span className="font-mono-numbers text-xs font-extrabold text-[#39FF14]">
                          {percent}%
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="text-[10px] text-slate-500 font-mono-numbers text-center">
              {totalPollVotes.toLocaleString()} total votes registered
            </div>
          </div>

        </div>

      </div>

      {/* Article Read Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0D1117] border border-white/15 rounded-2xl p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="px-2.5 py-0.5 rounded bg-[#39FF14]/20 text-[#39FF14] text-xs font-bold">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-slate-400 hover:text-white text-xs font-bold px-2 py-1 bg-white/5 rounded-lg"
              >
                Close
              </button>
            </div>

            <h3 className="text-xl font-black text-white leading-snug">
              {selectedArticle.title}
            </h3>

            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span>By {selectedArticle.author}</span>
              <span>·</span>
              <span>{selectedArticle.publishedAt}</span>
            </div>

            <img
              src={selectedArticle.imageUrl}
              alt={selectedArticle.title}
              className="w-full h-52 object-cover rounded-xl"
            />

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedArticle.summary}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              International cricket fans and provincial franchise supporters continue to praise the tournament organizers for bringing cutting-edge technology, including ball-tracking telemetry and LED stump illumination to the TU Ground in Kirtipur.
            </p>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => {
                  onAskAIWithTopic(`Analyze the story: ${selectedArticle.title}`);
                  setSelectedArticle(null);
                }}
                className="px-4 py-2 bg-[#39FF14] text-black font-extrabold text-xs rounded-xl flex items-center gap-1.5 shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Ask CricMind AI About This Story
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
