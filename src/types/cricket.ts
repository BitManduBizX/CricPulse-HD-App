export type MatchFormat = 'T20' | 'Cricket ODI' | 'Test';
export type MatchGender = 'Cricket Men' | 'Cricket Women';
export type MatchStatus = 'LIVE' | 'UPCOMING' | 'COMPLETED';

export type MatchCategory = 
  | 'All Matches'
  | 'Current Matches'
  | 'Matches By Day'
  | 'T20 League Today Match'
  | 'Live Now'
  | 'Upcoming Cricket World Cup';

export interface PlayerScore {
  id: string;
  name: string;
  isCaptain?: boolean;
  isWicketkeeper?: boolean;
  role: 'Batter' | 'Bowler' | 'All-rounder' | 'Wicketkeeper Batter';
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
  dismissal: string;
  notOut?: boolean;
}

export interface BowlerFigure {
  id: string;
  name: string;
  overs: string;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
}

export interface BallCommentary {
  id: string;
  over: number;
  ball: number;
  runs: number;
  isBoundary: boolean;
  isSix: boolean;
  isWicket: boolean;
  wicketDesc?: string;
  bowlerName: string;
  batsmanName: string;
  commentaryText: string;
  tag?: 'FOUR' | 'SIX' | 'WICKET' | 'DOT' | 'SINGLE' | 'WIDE' | 'NO_BALL';
}

export interface TeamInnings {
  name: string;
  shortName: string;
  flag: string;
  primaryColor: string;
  secondaryColor?: string;
  runs: number;
  wickets: number;
  overs: string;
  declared?: boolean;
  isBatting?: boolean;
  battingScorecard: PlayerScore[];
  bowlingFigures: BowlerFigure[];
}

export interface CricketMatch {
  id: string;
  title: string;
  subtitle: string;
  series: string;
  category: MatchCategory;
  gender: MatchGender;
  format: MatchFormat;
  status: MatchStatus;
  statusText: string;
  venue: string;
  city: string;
  toss: string;
  date: string;
  time: string;
  teamA: TeamInnings;
  teamB: TeamInnings;
  currentInnings: 1 | 2;
  currentRunRate: number;
  requiredRunRate?: number;
  target?: number;
  winProbability: {
    teamA: number; // percentage e.g. 58
    teamB: number; // percentage e.g. 42
  };
  communityVotes: {
    teamA: number;
    teamB: number;
    userVoted?: 'teamA' | 'teamB';
  };
  recentBalls: string[]; // e.g. ['1', '4', '0', 'W', '6', '2']
  commentary: BallCommentary[];
  playingXI: {
    teamA: Array<{ name: string; role: string; isCaptain?: boolean; isWicketkeeper?: boolean }>;
    teamB: Array<{ name: string; role: string; isCaptain?: boolean; isWicketkeeper?: boolean }>;
  };
  headToHead: {
    totalMatches: number;
    teamAWins: number;
    teamBWins: number;
    noResult: number;
    lastFive: Array<'teamA' | 'teamB' | 'NR'>;
  };
}

export interface NPLFranchise {
  id: string;
  name: string;
  shortName: string;
  city: string;
  owner: string;
  primaryColor: string;
  secondaryColor: string;
  marqueePlayer: string;
  iconicOverseas: string[];
  headCoach: string;
  squadSize: number;
  championshipOdds: string;
  logoEmoji: string;
  description: string;
  squad: Array<{
    name: string;
    role: 'Batter' | 'Bowler' | 'Pacer' | 'Spinner' | 'All-rounder' | 'Wicketkeeper' | 'Wicketkeeper Batter';
    category: 'Marquee' | 'Grade A' | 'Grade B' | 'Foreign / Overseas' | 'Talent Hunt';
    nationality: string;
  }>;
}

export interface CricketLeague {
  id: string;
  name: string;
  country: string;
  format: string;
  teamsCount: number;
  foundedYear: number;
  currentChampion: string;
  description: string;
  highlightFact: string;
  teams: string[];
  scheduleWindow: string;
  trophyEmoji: string;
  badgeColor: string;
}

export interface TeamRanking {
  rank: number;
  team: string;
  flag: string;
  matches: number;
  points: number;
  rating: number;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: 'Breaking' | 'Match Report' | 'NPL Exclusive' | 'Tactical Analysis' | 'Video Highlights';
  readTime: string;
  publishedAt: string;
  author: string;
  imageUrl: string;
  videoDuration?: string;
}
