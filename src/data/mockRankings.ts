import { TeamRanking } from '../types/cricket';

export interface RankingsDatabase {
  men: {
    test: TeamRanking[];
    odi: TeamRanking[];
    t20: TeamRanking[];
  };
  women: {
    odi: TeamRanking[];
    t20: TeamRanking[];
  };
}

export const ICC_RANKINGS: RankingsDatabase = {
  men: {
    test: [
      { rank: 1, team: 'Australia', flag: '🇦🇺', matches: 32, points: 3950, rating: 123 },
      { rank: 2, team: 'India', flag: '🇮🇳', matches: 36, points: 4320, rating: 120 },
      { rank: 3, team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', matches: 42, points: 4536, rating: 108 },
      { rank: 4, team: 'South Africa', flag: '🇿🇦', matches: 28, points: 2912, rating: 104 },
      { rank: 5, team: 'New Zealand', flag: '🇳🇿', matches: 30, points: 3000, rating: 100 },
      { rank: 6, team: 'Pakistan', flag: '🇵🇰', matches: 27, points: 2430, rating: 90 },
      { rank: 7, team: 'Sri Lanka', flag: '🇱🇰', matches: 25, points: 2125, rating: 85 },
      { rank: 8, team: 'West Indies', flag: '🌴', matches: 26, points: 1976, rating: 76 }
    ],
    odi: [
      { rank: 1, team: 'India', flag: '🇮🇳', matches: 44, points: 5280, rating: 120 },
      { rank: 2, team: 'Australia', flag: '🇦🇺', matches: 38, points: 4484, rating: 118 },
      { rank: 3, team: 'South Africa', flag: '🇿🇦', matches: 34, points: 3876, rating: 114 },
      { rank: 4, team: 'Pakistan', flag: '🇵🇰', matches: 32, points: 3488, rating: 109 },
      { rank: 5, team: 'New Zealand', flag: '🇳🇿', matches: 35, points: 3675, rating: 105 },
      { rank: 6, team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', matches: 36, points: 3636, rating: 101 },
      { rank: 7, team: 'Sri Lanka', flag: '🇱🇰', matches: 42, points: 4032, rating: 96 },
      { rank: 8, team: 'Afghanistan', flag: '🇦🇫', matches: 30, points: 2700, rating: 90 },
      { rank: 14, team: 'Netherlands', flag: '🇳🇱', matches: 28, points: 1848, rating: 66 },
      { rank: 16, team: 'Nepal', flag: '🇳🇵', matches: 36, points: 2160, rating: 60 }
    ],
    t20: [
      { rank: 1, team: 'India', flag: '🇮🇳', matches: 68, points: 17884, rating: 263 },
      { rank: 2, team: 'Australia', flag: '🇦🇺', matches: 48, points: 12480, rating: 260 },
      { rank: 3, team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', matches: 46, points: 11592, rating: 252 },
      { rank: 4, team: 'West Indies', flag: '🌴', matches: 54, points: 13500, rating: 250 },
      { rank: 5, team: 'New Zealand', flag: '🇳🇿', matches: 52, points: 12844, rating: 247 },
      { rank: 6, team: 'South Africa', flag: '🇿🇦', matches: 44, points: 10780, rating: 245 },
      { rank: 7, team: 'Pakistan', flag: '🇵🇰', matches: 58, points: 13920, rating: 240 },
      { rank: 8, team: 'Sri Lanka', flag: '🇱🇰', matches: 48, points: 11136, rating: 232 },
      { rank: 17, team: 'Nepal', flag: '🇳🇵', matches: 42, points: 7980, rating: 190 },
      { rank: 18, team: 'USA', flag: '🇺🇸', matches: 34, points: 6120, rating: 180 }
    ]
  },
  women: {
    odi: [
      { rank: 1, team: 'Australia Women', flag: '🇦🇺', matches: 28, points: 4564, rating: 163 },
      { rank: 2, team: 'England Women', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', matches: 32, points: 4096, rating: 128 },
      { rank: 3, team: 'South Africa Women', flag: '🇿🇦', matches: 30, points: 3450, rating: 115 },
      { rank: 4, team: 'India Women', flag: '🇮🇳', matches: 31, points: 3472, rating: 112 },
      { rank: 5, team: 'New Zealand Women', flag: '🇳🇿', matches: 26, points: 2444, rating: 94 }
    ],
    t20: [
      { rank: 1, team: 'Australia Women', flag: '🇦🇺', matches: 41, points: 12177, rating: 297 },
      { rank: 2, team: 'England Women', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', matches: 44, points: 12364, rating: 281 },
      { rank: 3, team: 'India Women', flag: '🇮🇳', matches: 46, points: 12190, rating: 265 },
      { rank: 4, team: 'South Africa Women', flag: '🇿🇦', matches: 38, points: 9272, rating: 244 },
      { rank: 5, team: 'New Zealand Women', flag: '🇳🇿', matches: 36, points: 8748, rating: 243 }
    ]
  }
};

export const LEADERBOARD_STATS = {
  topRunScorers: [
    { rank: 1, player: 'Virat Kohli', team: 'India', matches: 540, runs: 27130, average: 53.6, strikeRate: 93.8, centuries: 80 },
    { rank: 2, player: 'Rohit Paudel', team: 'Nepal / Lumbini', matches: 94, runs: 3410, average: 38.2, strikeRate: 124.5, centuries: 4 },
    { rank: 3, player: 'Travis Head', team: 'Australia', matches: 162, runs: 6840, average: 44.1, strikeRate: 118.2, centuries: 11 },
    { rank: 4, player: 'Aasif Sheikh', team: 'Nepal / Janakpur', matches: 82, runs: 2980, average: 35.8, strikeRate: 112.4, centuries: 2 },
    { rank: 5, player: 'Laura Wolvaardt', team: 'South Africa (W)', matches: 148, runs: 5420, average: 45.9, strikeRate: 110.1, centuries: 8 }
  ],
  topWicketTakers: [
    { rank: 1, player: 'Jasprit Bumrah', team: 'India', matches: 215, wickets: 412, average: 20.4, economy: 4.15, fiveWickets: 12 },
    { rank: 2, player: 'Sandeep Lamichhane', team: 'Nepal / Biratnagar', matches: 154, wickets: 348, average: 18.2, economy: 6.22, fiveWickets: 8 },
    { rank: 3, player: 'Pat Cummins', team: 'Australia', matches: 220, wickets: 486, average: 24.1, economy: 4.88, fiveWickets: 14 },
    { rank: 4, player: 'Karan KC', team: 'Nepal / Kathmandu', matches: 98, wickets: 184, average: 21.8, economy: 7.34, fiveWickets: 5 },
    { rank: 5, player: 'Sophie Ecclestone', team: 'England (W)', matches: 122, wickets: 245, average: 16.5, economy: 4.95, fiveWickets: 6 }
  ]
};
