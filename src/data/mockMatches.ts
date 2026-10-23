import { CricketMatch } from '../types/cricket';

export const INITIAL_MATCHES: CricketMatch[] = [
  {
    id: 'npl-match-01',
    title: 'Kathmandu Gorkhas vs Janakpur Bolts',
    subtitle: 'NPL Season — Match 12, TU Cricket Ground',
    series: 'Nepal Premier League 2024/25',
    category: 'Live Now',
    gender: 'Cricket Men',
    format: 'T20',
    status: 'LIVE',
    statusText: 'Kathmandu Gorkhas need 28 runs in 16 balls to win',
    venue: 'Tribhuvan University International Cricket Ground',
    city: 'Kirtipur, Kathmandu',
    toss: 'Janakpur Bolts won the toss and elected to bat first',
    date: 'Today, 24 Oct',
    time: '01:15 PM NPT',
    teamA: {
      name: 'Janakpur Bolts',
      shortName: 'JB',
      flag: '⚡',
      primaryColor: '#F59E0B',
      secondaryColor: '#D97706',
      runs: 168,
      wickets: 6,
      overs: '20.0',
      battingScorecard: [
        { id: 'jb-1', name: 'Aasif Sheikh', isWicketkeeper: true, role: 'Wicketkeeper Batter', runs: 62, balls: 41, fours: 6, sixes: 3, strikeRate: 151.2, dismissal: 'c Karan b Shahab Alam' },
        { id: 'jb-2', name: 'Lahiru Milantha', role: 'Batter', runs: 34, balls: 24, fours: 4, sixes: 1, strikeRate: 141.6, dismissal: 'b Pratis GC' },
        { id: 'jb-3', name: 'Anil Kumar Sah', role: 'Batter', runs: 28, balls: 19, fours: 2, sixes: 2, strikeRate: 147.3, dismissal: 'lbw b Rashid Khan (NEP)' },
        { id: 'jb-4', name: 'James Neesham', role: 'All-rounder', runs: 24, balls: 14, fours: 1, sixes: 2, strikeRate: 171.4, dismissal: 'not out', notOut: true },
        { id: 'jb-5', name: 'Kishore Mahato', role: 'Bowler', runs: 8, balls: 6, fours: 1, sixes: 0, strikeRate: 133.3, dismissal: 'run out (Bhim Sharki)' },
        { id: 'jb-6', name: 'Tul Bahadur Thapa', role: 'Bowler', runs: 2, balls: 4, fours: 0, sixes: 0, strikeRate: 50.0, dismissal: 'c & b Pratis GC' },
      ],
      bowlingFigures: [
        { id: 'jb-b1', name: 'Kishore Mahato', overs: '3.2', maidens: 0, runs: 27, wickets: 2, economy: 8.1 },
        { id: 'jb-b2', name: 'Lalit Rajbanshi', overs: '4.0', maidens: 0, runs: 29, wickets: 1, economy: 7.25 },
        { id: 'jb-b3', name: 'James Neesham', overs: '3.0', maidens: 0, runs: 26, wickets: 1, economy: 8.66 },
        { id: 'jb-b4', name: 'Ben Mike', overs: '3.0', maidens: 0, runs: 31, wickets: 0, economy: 10.33 },
        { id: 'jb-b5', name: 'Mohammad Mohsin', overs: '3.4', maidens: 0, runs: 26, wickets: 0, economy: 7.09 }
      ]
    },
    teamB: {
      name: 'Kathmandu Gorkhas',
      shortName: 'KG',
      flag: '🛡️',
      primaryColor: '#EF4444',
      secondaryColor: '#991B1B',
      runs: 141,
      wickets: 4,
      overs: '17.2',
      isBatting: true,
      battingScorecard: [
        { id: 'kg-1', name: 'Michael Levitt', role: 'Batter', runs: 44, balls: 29, fours: 5, sixes: 2, strikeRate: 151.7, dismissal: 'c Aasif b Kishore Mahato' },
        { id: 'kg-2', name: 'Bhim Sharki', role: 'Batter', runs: 38, balls: 28, fours: 3, sixes: 1, strikeRate: 135.7, dismissal: 'c Neesham b Lalit' },
        { id: 'kg-3', name: 'Karan KC', isCaptain: true, role: 'All-rounder', runs: 31, balls: 18, fours: 2, sixes: 2, strikeRate: 172.2, dismissal: 'not out', notOut: true },
        { id: 'kg-4', name: 'Gerhard Erasmus', role: 'All-rounder', runs: 16, balls: 12, fours: 1, sixes: 1, strikeRate: 133.3, dismissal: 'b Kishore Mahato' },
        { id: 'kg-5', name: 'Sumit Maharjan', role: 'Batter', runs: 9, balls: 8, fours: 1, sixes: 0, strikeRate: 112.5, dismissal: 'not out', notOut: true },
      ],
      bowlingFigures: [
        { id: 'kg-b1', name: 'Karan KC', overs: '4.0', maidens: 0, runs: 32, wickets: 1, economy: 8.0 },
        { id: 'kg-b2', name: 'Shahab Alam', overs: '4.0', maidens: 0, runs: 28, wickets: 2, economy: 7.0 },
        { id: 'kg-b3', name: 'Pratis GC', overs: '4.0', maidens: 0, runs: 36, wickets: 2, economy: 9.0 },
        { id: 'kg-b4', name: 'Rashid Khan (NEP)', overs: '4.0', maidens: 0, runs: 31, wickets: 1, economy: 7.75 },
        { id: 'kg-b5', name: 'Gerhard Erasmus', overs: '4.0', maidens: 0, runs: 38, wickets: 0, economy: 9.5 }
      ]
    },
    currentInnings: 2,
    currentRunRate: 8.13,
    requiredRunRate: 10.5,
    target: 169,
    winProbability: {
      teamA: 44, // Janakpur Bolts
      teamB: 56  // Kathmandu Gorkhas
    },
    communityVotes: {
      teamA: 3420,
      teamB: 4890,
      userVoted: undefined
    },
    recentBalls: ['1', '4', '6', '1', '2', '0'],
    commentary: [
      {
        id: 'c-106',
        over: 17,
        ball: 2,
        runs: 0,
        isBoundary: false,
        isSix: false,
        isWicket: false,
        bowlerName: 'Kishore Mahato',
        batsmanName: 'Sumit Maharjan',
        commentaryText: 'Full and angling across off stump! Sumit tries to carve it past backward point but misses. Precious dot ball for Janakpur Bolts!',
        tag: 'DOT'
      },
      {
        id: 'c-105',
        over: 17,
        ball: 1,
        runs: 2,
        isBoundary: false,
        isSix: false,
        isWicket: false,
        bowlerName: 'Kishore Mahato',
        batsmanName: 'Karan KC',
        commentaryText: 'Drilled down toward long-on. They hustle back for the second run with exceptional athletic running between the wickets.',
        tag: 'SINGLE'
      },
      {
        id: 'c-104',
        over: 16,
        ball: 6,
        runs: 6,
        isBoundary: true,
        isSix: true,
        isWicket: false,
        bowlerName: 'James Neesham',
        batsmanName: 'Karan KC',
        commentaryText: 'BOOM! Stand and deliver! In the slot from Neesham, and Karan KC deposits it 92 meters onto the grass embankments of TU Ground! The crowd erupts in Kirtipur!',
        tag: 'SIX'
      },
      {
        id: 'c-103',
        over: 16,
        ball: 5,
        runs: 4,
        isBoundary: true,
        isSix: false,
        isWicket: false,
        bowlerName: 'James Neesham',
        batsmanName: 'Karan KC',
        commentaryText: 'FOUR! Smashed over extra cover! Pure timing from the Kathmandu captain. That races away to the ropes with floodlights gleaming.',
        tag: 'FOUR'
      },
      {
        id: 'c-102',
        over: 16,
        ball: 4,
        runs: 1,
        isBoundary: false,
        isSix: false,
        isWicket: false,
        bowlerName: 'James Neesham',
        batsmanName: 'Sumit Maharjan',
        commentaryText: 'Good length delivery on middle, nudged into the gap at square leg for a single.',
        tag: 'SINGLE'
      },
      {
        id: 'c-101',
        over: 16,
        ball: 3,
        runs: 0,
        isBoundary: false,
        isSix: false,
        isWicket: true,
        wicketDesc: 'b Kishore Mahato',
        bowlerName: 'Kishore Mahato',
        batsmanName: 'Gerhard Erasmus',
        commentaryText: 'OUT! Cleans him up! Yorker right in the blockhole! Erasmus was backing away to manufacture room, misses completely, and the off-stump is knocked out of the ground!',
        tag: 'WICKET'
      }
    ],
    playingXI: {
      teamA: [
        { name: 'Aasif Sheikh', role: 'Wicketkeeper Batter', isWicketkeeper: true },
        { name: 'Lahiru Milantha', role: 'Batter' },
        { name: 'Anil Kumar Sah', role: 'Batter' },
        { name: 'James Neesham', role: 'All-rounder' },
        { name: 'Ben Mike', role: 'All-rounder' },
        { name: 'Kishore Mahato', role: 'Pacer' },
        { name: 'Lalit Rajbanshi', role: 'Spinner' },
        { name: 'Mohammad Mohsin', role: 'Spinner' },
        { name: 'Tul Bahadur Thapa', role: 'Pacer' },
        { name: 'Rupesh Singh', role: 'All-rounder' },
        { name: 'Shubha Gahatraj', role: 'Batter' }
      ],
      teamB: [
        { name: 'Michael Levitt', role: 'Batter' },
        { name: 'Bhim Sharki', role: 'Batter' },
        { name: 'Karan KC', role: 'All-rounder', isCaptain: true },
        { name: 'Gerhard Erasmus', role: 'All-rounder' },
        { name: 'Sumit Maharjan', role: 'Batter' },
        { name: 'Shahab Alam', role: 'Spinner' },
        { name: 'Pratis GC', role: 'Pacer' },
        { name: 'Rashid Khan (NEP)', role: 'Pacer' },
        { name: 'Raju Rijal', role: 'Wicketkeeper Batter', isWicketkeeper: true },
        { name: 'Krishna Karki', role: 'Pacer' },
        { name: 'Deepesh Kandel', role: 'All-rounder' }
      ]
    },
    headToHead: {
      totalMatches: 4,
      teamAWins: 2,
      teamBWins: 2,
      noResult: 0,
      lastFive: ['teamB', 'teamA', 'teamB', 'teamA']
    }
  },
  {
    id: 'intl-match-02',
    title: 'India vs Australia',
    subtitle: '3rd ODI, MCG Spectacular — Australia Tour of India',
    series: 'Border-Gavaskar ODI Trophy 2026',
    category: 'Current Matches',
    gender: 'Cricket Men',
    format: 'Cricket ODI',
    status: 'LIVE',
    statusText: 'India need 64 runs in 58 balls (Target: 298)',
    venue: 'Melbourne Cricket Ground',
    city: 'Melbourne, Australia',
    toss: 'Australia won the toss and chose to bat first',
    date: 'Today, 24 Oct',
    time: '02:30 PM AEDT',
    teamA: {
      name: 'Australia',
      shortName: 'AUS',
      flag: '🇦🇺',
      primaryColor: '#FACC15',
      secondaryColor: '#15803D',
      runs: 297,
      wickets: 8,
      overs: '50.0',
      battingScorecard: [
        { id: 'aus-1', name: 'Travis Head', role: 'Batter', runs: 89, balls: 72, fours: 9, sixes: 3, strikeRate: 123.6, dismissal: 'c Gill b Kuldeep' },
        { id: 'aus-2', name: 'Mitch Marsh', isCaptain: true, role: 'Batter', runs: 71, balls: 68, fours: 6, sixes: 2, strikeRate: 104.4, dismissal: 'c Rahul b Bumrah' },
        { id: 'aus-3', name: 'Steve Smith', role: 'Batter', runs: 42, balls: 51, fours: 3, sixes: 0, strikeRate: 82.3, dismissal: 'lbw b Jadeja' },
        { id: 'aus-4', name: 'Glenn Maxwell', role: 'All-rounder', runs: 38, balls: 22, fours: 3, sixes: 2, strikeRate: 172.7, dismissal: 'b Siraj' },
        { id: 'aus-5', name: 'Josh Inglis', isWicketkeeper: true, role: 'Wicketkeeper Batter', runs: 28, balls: 24, fours: 2, sixes: 1, strikeRate: 116.6, dismissal: 'not out', notOut: true }
      ],
      bowlingFigures: [
        { id: 'aus-b1', name: 'Mitchell Starc', overs: '8.0', maidens: 1, runs: 48, wickets: 2, economy: 6.0 },
        { id: 'aus-b2', name: 'Pat Cummins', overs: '7.2', maidens: 0, runs: 42, wickets: 1, economy: 5.72 },
        { id: 'aus-b3', name: 'Adam Zampa', overs: '9.0', maidens: 0, runs: 54, wickets: 2, economy: 6.0 },
        { id: 'aus-b4', name: 'Josh Hazlewood', overs: '8.0', maidens: 0, runs: 41, wickets: 1, economy: 5.12 }
      ]
    },
    teamB: {
      name: 'India',
      shortName: 'IND',
      flag: '🇮🇳',
      primaryColor: '#2563EB',
      secondaryColor: '#1E40AF',
      runs: 234,
      wickets: 4,
      overs: '40.2',
      isBatting: true,
      battingScorecard: [
        { id: 'ind-1', name: 'Rohit Sharma', isCaptain: true, role: 'Batter', runs: 68, balls: 59, fours: 7, sixes: 3, strikeRate: 115.2, dismissal: 'c Smith b Starc' },
        { id: 'ind-2', name: 'Shubman Gill', role: 'Batter', runs: 54, balls: 52, fours: 5, sixes: 1, strikeRate: 103.8, dismissal: 'b Zampa' },
        { id: 'ind-3', name: 'Virat Kohli', role: 'Batter', runs: 62, balls: 64, fours: 5, sixes: 0, strikeRate: 96.8, dismissal: 'not out', notOut: true },
        { id: 'ind-4', name: 'Shreyas Iyer', role: 'Batter', runs: 26, balls: 31, fours: 2, sixes: 0, strikeRate: 83.8, dismissal: 'c Inglis b Hazlewood' },
        { id: 'ind-5', name: 'KL Rahul', isWicketkeeper: true, role: 'Wicketkeeper Batter', runs: 18, balls: 16, fours: 1, sixes: 1, strikeRate: 112.5, dismissal: 'not out', notOut: true }
      ],
      bowlingFigures: [
        { id: 'ind-b1', name: 'Jasprit Bumrah', overs: '10.0', maidens: 2, runs: 42, wickets: 3, economy: 4.2 },
        { id: 'ind-b2', name: 'Mohammed Siraj', overs: '10.0', maidens: 0, runs: 62, wickets: 2, economy: 6.2 },
        { id: 'ind-b3', name: 'Kuldeep Yadav', overs: '10.0', maidens: 0, runs: 58, wickets: 2, economy: 5.8 },
        { id: 'ind-b4', name: 'Ravindra Jadeja', overs: '10.0', maidens: 1, runs: 45, wickets: 1, economy: 4.5 }
      ]
    },
    currentInnings: 2,
    currentRunRate: 5.80,
    requiredRunRate: 6.62,
    target: 298,
    winProbability: {
      teamA: 38,
      teamB: 62
    },
    communityVotes: {
      teamA: 9820,
      teamB: 15400,
      userVoted: undefined
    },
    recentBalls: ['1', '4', '1', '1', '0', '2'],
    commentary: [
      {
        id: 'c-ind-1',
        over: 40,
        ball: 2,
        runs: 4,
        isBoundary: true,
        isSix: false,
        isWicket: false,
        bowlerName: 'Mitchell Starc',
        batsmanName: 'Virat Kohli',
        commentaryText: 'GLORIOUS! King Kohli steps across and punches Starc with surgical precision through midwicket. 85,000 fans roar at the MCG!',
        tag: 'FOUR'
      },
      {
        id: 'c-ind-2',
        over: 40,
        ball: 1,
        runs: 1,
        isBoundary: false,
        isSix: false,
        isWicket: false,
        bowlerName: 'Mitchell Starc',
        batsmanName: 'KL Rahul',
        commentaryText: 'Starc steams in from the Southern Stand end, yorker length, dug out toward third man for a comfortable single.',
        tag: 'SINGLE'
      }
    ],
    playingXI: {
      teamA: [
        { name: 'Travis Head', role: 'Batter' },
        { name: 'Mitch Marsh', role: 'Batter', isCaptain: true },
        { name: 'Steve Smith', role: 'Batter' },
        { name: 'Marnus Labuschagne', role: 'Batter' },
        { name: 'Glenn Maxwell', role: 'All-rounder' },
        { name: 'Josh Inglis', role: 'Wicketkeeper Batter', isWicketkeeper: true },
        { name: 'Pat Cummins', role: 'Pacer' },
        { name: 'Mitchell Starc', role: 'Pacer' },
        { name: 'Adam Zampa', role: 'Spinner' },
        { name: 'Josh Hazlewood', role: 'Pacer' },
        { name: 'Marcus Stoinis', role: 'All-rounder' }
      ],
      teamB: [
        { name: 'Rohit Sharma', role: 'Batter', isCaptain: true },
        { name: 'Shubman Gill', role: 'Batter' },
        { name: 'Virat Kohli', role: 'Batter' },
        { name: 'Shreyas Iyer', role: 'Batter' },
        { name: 'KL Rahul', role: 'Wicketkeeper Batter', isWicketkeeper: true },
        { name: 'Hardik Pandya', role: 'All-rounder' },
        { name: 'Ravindra Jadeja', role: 'All-rounder' },
        { name: 'Kuldeep Yadav', role: 'Spinner' },
        { name: 'Jasprit Bumrah', role: 'Pacer' },
        { name: 'Mohammed Siraj', role: 'Pacer' },
        { name: 'Arshdeep Singh', role: 'Pacer' }
      ]
    },
    headToHead: {
      totalMatches: 152,
      teamAWins: 84,
      teamBWins: 58,
      noResult: 10,
      lastFive: ['teamB', 'teamB', 'teamA', 'teamB', 'teamA']
    }
  },
  {
    id: 'npl-match-02',
    title: 'Chitwan Rhinos vs Biratnagar Kings',
    subtitle: 'NPL Season — Match 13, TU Cricket Ground',
    series: 'Nepal Premier League 2024/25',
    category: 'T20 League Today Match',
    gender: 'Cricket Men',
    format: 'T20',
    status: 'UPCOMING',
    statusText: 'Match starts at 5:00 PM NPT (Night Game under Floodlights)',
    venue: 'Tribhuvan University International Cricket Ground',
    city: 'Kirtipur, Kathmandu',
    toss: 'Toss scheduled at 4:30 PM NPT',
    date: 'Today, 24 Oct',
    time: '05:00 PM NPT',
    teamA: {
      name: 'Chitwan Rhinos',
      shortName: 'CR',
      flag: '🦏',
      primaryColor: '#059669',
      secondaryColor: '#047857',
      runs: 0,
      wickets: 0,
      overs: '0.0',
      battingScorecard: [],
      bowlingFigures: []
    },
    teamB: {
      name: 'Biratnagar Kings',
      shortName: 'BK',
      flag: '👑',
      primaryColor: '#0284C7',
      secondaryColor: '#0369A1',
      runs: 0,
      wickets: 0,
      overs: '0.0',
      battingScorecard: [],
      bowlingFigures: []
    },
    currentInnings: 1,
    currentRunRate: 0,
    winProbability: {
      teamA: 52,
      teamB: 48
    },
    communityVotes: {
      teamA: 4120,
      teamB: 3950,
      userVoted: undefined
    },
    recentBalls: [],
    commentary: [
      {
        id: 'c-cr-pre',
        over: 0,
        ball: 0,
        runs: 0,
        isBoundary: false,
        isSix: false,
        isWicket: false,
        bowlerName: 'Pitch Report',
        batsmanName: 'TU Cricket Ground',
        commentaryText: 'Pitch Report from Kirtipur: Firm dry surface with light evening dew anticipated later in the 2nd innings. Expect the team winning the toss to bowl first. Kushal Malla vs Sandeep Lamichhane will be the blockbuster marquee matchup!',
        tag: 'DOT'
      }
    ],
    playingXI: {
      teamA: [
        { name: 'Kushal Malla', role: 'All-rounder', isCaptain: true },
        { name: 'Rijan Dhakal', role: 'Pacer' },
        { name: 'Kamal Singh Airee', role: 'Pacer' },
        { name: 'Bipin Rawal', role: 'Wicketkeeper Batter', isWicketkeeper: true },
        { name: 'Santosh Karki', role: 'Batter' },
        { name: 'Luc Benkenstein', role: 'All-rounder' },
        { name: 'Marchant de Lange', role: 'Pacer' },
        { name: 'Amar Singh Routela', role: 'All-rounder' }
      ],
      teamB: [
        { name: 'Sandeep Lamichhane', role: 'Spinner', isCaptain: true },
        { name: 'Lokesh Bam', role: 'Batter' },
        { name: 'Pratish GC', role: 'Pacer' },
        { name: 'Basir Ahamad', role: 'All-rounder' },
        { name: 'Martin Guptill', role: 'Batter' },
        { name: 'Aqib Ilyas', role: 'All-rounder' },
        { name: 'Subash Bhandari', role: 'Spinner' },
        { name: 'Dipak Paswan', role: 'Bowler' }
      ]
    },
    headToHead: {
      totalMatches: 3,
      teamAWins: 2,
      teamBWins: 1,
      noResult: 0,
      lastFive: ['teamA', 'teamB', 'teamA']
    }
  },
  {
    id: 'women-match-03',
    title: 'England Women vs South Africa Women',
    subtitle: 'ICC Women’s T20 World Cup — Super 6 Decider',
    series: 'ICC Women T20 World Cup',
    category: 'Live Now',
    gender: 'Cricket Women',
    format: 'T20',
    status: 'LIVE',
    statusText: 'South Africa Women need 38 runs in 24 balls',
    venue: "Lord's Cricket Ground",
    city: 'London, England',
    toss: 'England Women won the toss and chose to bat',
    date: 'Today, 24 Oct',
    time: '06:30 PM BST',
    teamA: {
      name: 'England Women',
      shortName: 'ENG-W',
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      primaryColor: '#DC2626',
      secondaryColor: '#991B1B',
      runs: 154,
      wickets: 5,
      overs: '20.0',
      battingScorecard: [
        { id: 'ew-1', name: 'Danni Wyatt-Hodge', role: 'Batter', runs: 56, balls: 39, fours: 7, sixes: 1, strikeRate: 143.5, dismissal: 'c Wolvaardt b Kapp' },
        { id: 'ew-2', name: 'Nat Sciver-Brunt', role: 'All-rounder', runs: 48, balls: 33, fours: 5, sixes: 1, strikeRate: 145.4, dismissal: 'not out', notOut: true },
        { id: 'ew-3', name: 'Heather Knight', isCaptain: true, role: 'Batter', runs: 24, balls: 18, fours: 2, sixes: 0, strikeRate: 133.3, dismissal: 'b Mlaba' }
      ],
      bowlingFigures: [
        { id: 'ew-b1', name: 'Sophie Ecclestone', overs: '4.0', maidens: 0, runs: 21, wickets: 2, economy: 5.25 },
        { id: 'ew-b2', name: 'Lauren Bell', overs: '3.0', maidens: 0, runs: 26, wickets: 1, economy: 8.66 },
        { id: 'ew-b3', name: 'Sarah Glenn', overs: '4.0', maidens: 0, runs: 28, wickets: 1, economy: 7.0 }
      ]
    },
    teamB: {
      name: 'South Africa Women',
      shortName: 'SA-W',
      flag: '🇿🇦',
      primaryColor: '#16A34A',
      secondaryColor: '#15803D',
      runs: 117,
      wickets: 4,
      overs: '16.0',
      isBatting: true,
      battingScorecard: [
        { id: 'saw-1', name: 'Laura Wolvaardt', isCaptain: true, role: 'Batter', runs: 58, balls: 44, fours: 6, sixes: 1, strikeRate: 131.8, dismissal: 'not out', notOut: true },
        { id: 'saw-2', name: 'Tazmin Brits', role: 'Batter', runs: 29, balls: 23, fours: 3, sixes: 1, strikeRate: 126.0, dismissal: 'c Jones b Ecclestone' },
        { id: 'saw-3', name: 'Marizanne Kapp', role: 'All-rounder', runs: 18, balls: 14, fours: 2, sixes: 0, strikeRate: 128.5, dismissal: 'not out', notOut: true }
      ],
      bowlingFigures: [
        { id: 'saw-b1', name: 'Marizanne Kapp', overs: '4.0', maidens: 1, runs: 24, wickets: 2, economy: 6.0 },
        { id: 'saw-b2', name: 'Nonkululeko Mlaba', overs: '4.0', maidens: 0, runs: 30, wickets: 1, economy: 7.5 }
      ]
    },
    currentInnings: 2,
    currentRunRate: 7.31,
    requiredRunRate: 9.50,
    target: 155,
    winProbability: {
      teamA: 54,
      teamB: 46
    },
    communityVotes: {
      teamA: 5210,
      teamB: 4890,
      userVoted: undefined
    },
    recentBalls: ['4', '1', '2', '0', '1', '1'],
    commentary: [
      {
        id: 'c-saw-1',
        over: 16,
        ball: 1,
        runs: 4,
        isBoundary: true,
        isSix: false,
        isWicket: false,
        bowlerName: 'Lauren Bell',
        batsmanName: 'Laura Wolvaardt',
        commentaryText: 'CREAMED THROUGH EXTRA COVER! Wolvaardt presents the full face of the bat and pierces the inner ring effortlessly.',
        tag: 'FOUR'
      }
    ],
    playingXI: {
      teamA: [
        { name: 'Danni Wyatt-Hodge', role: 'Batter' },
        { name: 'Maia Bouchier', role: 'Batter' },
        { name: 'Nat Sciver-Brunt', role: 'All-rounder' },
        { name: 'Heather Knight', role: 'Batter', isCaptain: true },
        { name: 'Amy Jones', role: 'Wicketkeeper Batter', isWicketkeeper: true },
        { name: 'Sophie Ecclestone', role: 'Spinner' },
        { name: 'Sarah Glenn', role: 'Spinner' },
        { name: 'Lauren Bell', role: 'Pacer' }
      ],
      teamB: [
        { name: 'Laura Wolvaardt', role: 'Batter', isCaptain: true },
        { name: 'Tazmin Brits', role: 'Batter' },
        { name: 'Marizanne Kapp', role: 'All-rounder' },
        { name: 'Anneke Bosch', role: 'Batter' },
        { name: 'Sinalo Jafta', role: 'Wicketkeeper Batter', isWicketkeeper: true },
        { name: 'Chloe Tryon', role: 'All-rounder' },
        { name: 'Nonkululeko Mlaba', role: 'Spinner' },
        { name: 'Ayabonga Khaka', role: 'Pacer' }
      ]
    },
    headToHead: {
      totalMatches: 24,
      teamAWins: 16,
      teamBWins: 7,
      noResult: 1,
      lastFive: ['teamA', 'teamB', 'teamA', 'teamA', 'teamB']
    }
  },
  {
    id: 'cwc-match-04',
    title: 'Nepal vs Netherlands',
    subtitle: 'ICC Men’s Cricket World Cup League 2 — Match 28',
    series: 'Upcoming Cricket World Cup Pathway',
    category: 'Upcoming Cricket World Cup',
    gender: 'Cricket Men',
    format: 'Cricket ODI',
    status: 'UPCOMING',
    statusText: 'Starts Tomorrow, 9:30 AM local time at TU Ground',
    venue: 'Tribhuvan University International Cricket Ground',
    city: 'Kirtipur, Kathmandu',
    toss: 'Toss tomorrow at 9:00 AM',
    date: 'Tomorrow, 25 Oct',
    time: '09:30 AM NPT',
    teamA: {
      name: 'Nepal',
      shortName: 'NEP',
      flag: '🇳🇵',
      primaryColor: '#DC2626',
      secondaryColor: '#1E3A8A',
      runs: 0,
      wickets: 0,
      overs: '0.0',
      battingScorecard: [],
      bowlingFigures: []
    },
    teamB: {
      name: 'Netherlands',
      shortName: 'NED',
      flag: '🇳🇱',
      primaryColor: '#EA580C',
      secondaryColor: '#C2410C',
      runs: 0,
      wickets: 0,
      overs: '0.0',
      battingScorecard: [],
      bowlingFigures: []
    },
    currentInnings: 1,
    currentRunRate: 0,
    winProbability: {
      teamA: 55,
      teamB: 45
    },
    communityVotes: {
      teamA: 18450,
      teamB: 4120,
      userVoted: undefined
    },
    recentBalls: [],
    commentary: [
      {
        id: 'c-nep-pre',
        over: 0,
        ball: 0,
        runs: 0,
        isBoundary: false,
        isSix: false,
        isWicket: false,
        bowlerName: 'Match Preview',
        batsmanName: 'CricPulse HD Analyst',
        commentaryText: 'Massive CWC Qualification stakes! Rohit Paudel and his Rhinos army host Scott Edwards Dutch brigade in Kirtipur. Over 20,000 passionate Nepali fans are already camping outside TU Ground!',
        tag: 'DOT'
      }
    ],
    playingXI: {
      teamA: [
        { name: 'Rohit Paudel', role: 'Batter', isCaptain: true },
        { name: 'Aasif Sheikh', role: 'Wicketkeeper Batter', isWicketkeeper: true },
        { name: 'Kushal Bhurtel', role: 'Batter' },
        { name: 'Dipendra Singh Airee', role: 'All-rounder' },
        { name: 'Kushal Malla', role: 'All-rounder' },
        { name: 'Gulsan Jha', role: 'All-rounder' },
        { name: 'Sompal Kami', role: 'Pacer' },
        { name: 'Karan KC', role: 'Pacer' },
        { name: 'Sandeep Lamichhane', role: 'Spinner' },
        { name: 'Lalit Rajbanshi', role: 'Spinner' },
        { name: 'Bhim Sharki', role: 'Batter' }
      ],
      teamB: [
        { name: 'Scott Edwards', role: 'Wicketkeeper Batter', isCaptain: true, isWicketkeeper: true },
        { name: 'Max O’Dowd', role: 'Batter' },
        { name: 'Vikramjit Singh', role: 'All-rounder' },
        { name: 'Bas de Leede', role: 'All-rounder' },
        { name: 'Teja Nidamanuru', role: 'Batter' },
        { name: 'Colin Ackermann', role: 'All-rounder' },
        { name: 'Roelof van der Merwe', role: 'Spinner' },
        { name: 'Paul van Meekeren', role: 'Pacer' },
        { name: 'Aryan Dutt', role: 'Spinner' },
        { name: 'Vivian Kingma', role: 'Pacer' },
        { name: 'Sybrand Engelbrecht', role: 'Batter' }
      ]
    },
    headToHead: {
      totalMatches: 8,
      teamAWins: 4,
      teamBWins: 4,
      noResult: 0,
      lastFive: ['teamA', 'teamB', 'teamA', 'teamB', 'teamA']
    }
  },
  {
    id: 'test-match-05',
    title: 'Australia vs India',
    subtitle: 'ICC World Test Championship Final — Day 4',
    series: 'ICC World Test Championship',
    category: 'Matches By Day',
    gender: 'Cricket Men',
    format: 'Test',
    status: 'LIVE',
    statusText: 'Day 4: Stumps — India lead by 182 runs',
    venue: 'Lord’s Cricket Ground',
    city: 'London, UK',
    toss: 'India won the toss and elected to bat',
    date: 'Today, 24 Oct',
    time: 'Day 4 Stumps',
    teamA: {
      name: 'India',
      shortName: 'IND',
      flag: '🇮🇳',
      primaryColor: '#2563EB',
      runs: 345,
      wickets: 10,
      overs: '98.4',
      battingScorecard: [
        { id: 'indt-1', name: 'Yashasvi Jaiswal', role: 'Batter', runs: 124, balls: 198, fours: 16, sixes: 2, strikeRate: 62.6, dismissal: 'c Smith b Cummins' },
        { id: 'indt-2', name: 'Rishabh Pant', isWicketkeeper: true, role: 'Wicketkeeper Batter', runs: 88, balls: 94, fours: 9, sixes: 4, strikeRate: 93.6, dismissal: 'c Carey b Starc' },
        { id: 'indt-3', name: 'Ravindra Jadeja', role: 'All-rounder', runs: 58, balls: 112, fours: 6, sixes: 0, strikeRate: 51.7, dismissal: 'b Lyon' }
      ],
      bowlingFigures: [
        { id: 'indt-b1', name: 'Jasprit Bumrah', overs: '22.0', maidens: 6, runs: 54, wickets: 4, economy: 2.45 },
        { id: 'indt-b2', name: 'Mohammed Siraj', overs: '19.4', maidens: 3, runs: 68, wickets: 3, economy: 3.45 }
      ]
    },
    teamB: {
      name: 'Australia',
      shortName: 'AUS',
      flag: '🇦🇺',
      primaryColor: '#FACC15',
      runs: 298,
      wickets: 10,
      overs: '91.2',
      battingScorecard: [
        { id: 'aust-1', name: 'Usman Khawaja', role: 'Batter', runs: 76, balls: 184, fours: 8, sixes: 0, strikeRate: 41.3, dismissal: 'lbw b Bumrah' },
        { id: 'aust-2', name: 'Steve Smith', role: 'Batter', runs: 94, balls: 172, fours: 11, sixes: 1, strikeRate: 54.6, dismissal: 'c Kohli b Siraj' }
      ],
      bowlingFigures: [
        { id: 'aust-b1', name: 'Pat Cummins', overs: '24.0', maidens: 5, runs: 78, wickets: 4, economy: 3.25 },
        { id: 'aust-b2', name: 'Mitchell Starc', overs: '20.4', maidens: 2, runs: 84, wickets: 3, economy: 4.06 },
        { id: 'aust-b3', name: 'Nathan Lyon', overs: '28.0', maidens: 7, runs: 74, wickets: 2, economy: 2.64 }
      ]
    },
    currentInnings: 2,
    currentRunRate: 3.24,
    winProbability: {
      teamA: 48,
      teamB: 34
    },
    communityVotes: {
      teamA: 11200,
      teamB: 8900,
      userVoted: undefined
    },
    recentBalls: ['0', '0', '1', '0', '0', 'W'],
    commentary: [
      {
        id: 'c-test-1',
        over: 98,
        ball: 4,
        runs: 0,
        isBoundary: false,
        isSix: false,
        isWicket: true,
        wicketDesc: 'c Smith b Cummins',
        bowlerName: 'Pat Cummins',
        batsmanName: 'Yashasvi Jaiswal',
        commentaryText: 'WICKET! Beautiful outswinger from Cummins, finds the outside edge and Steve Smith takes a regulation catch at second slip! Incredible innings of 124 comes to an end!',
        tag: 'WICKET'
      }
    ],
    playingXI: {
      teamA: [
        { name: 'Rohit Sharma', role: 'Batter', isCaptain: true },
        { name: 'Yashasvi Jaiswal', role: 'Batter' },
        { name: 'Shubman Gill', role: 'Batter' },
        { name: 'Virat Kohli', role: 'Batter' },
        { name: 'Rishabh Pant', role: 'Wicketkeeper Batter', isWicketkeeper: true },
        { name: 'Ravindra Jadeja', role: 'All-rounder' },
        { name: 'Ravichandran Ashwin', role: 'All-rounder' },
        { name: 'Jasprit Bumrah', role: 'Pacer' },
        { name: 'Mohammed Siraj', role: 'Pacer' },
        { name: 'Akash Deep', role: 'Pacer' },
        { name: 'Sarfaraz Khan', role: 'Batter' }
      ],
      teamB: [
        { name: 'Pat Cummins', role: 'Pacer', isCaptain: true },
        { name: 'Usman Khawaja', role: 'Batter' },
        { name: 'Nathan McSweeney', role: 'Batter' },
        { name: 'Marnus Labuschagne', role: 'Batter' },
        { name: 'Steve Smith', role: 'Batter' },
        { name: 'Travis Head', role: 'Batter' },
        { name: 'Alex Carey', role: 'Wicketkeeper Batter', isWicketkeeper: true },
        { name: 'Mitchell Starc', role: 'Pacer' },
        { name: 'Nathan Lyon', role: 'Spinner' },
        { name: 'Josh Hazlewood', role: 'Pacer' },
        { name: 'Mitchell Marsh', role: 'All-rounder' }
      ]
    },
    headToHead: {
      totalMatches: 108,
      teamAWins: 32,
      teamBWins: 45,
      noResult: 31,
      lastFive: ['teamA', 'teamA', 'teamB', 'teamA', 'teamB']
    }
  },
  {
    id: 'npl-match-06',
    title: 'Pokhara Avengers vs Lumbini Lions',
    subtitle: 'NPL Season — Match 10 Thriller Result',
    series: 'Nepal Premier League 2024/25',
    category: 'All Matches',
    gender: 'Cricket Men',
    format: 'T20',
    status: 'COMPLETED',
    statusText: 'Pokhara Avengers won by 3 wickets (with 1 ball remaining)',
    venue: 'Tribhuvan University International Cricket Ground',
    city: 'Kirtipur, Kathmandu',
    toss: 'Pokhara Avengers won the toss and elected to field',
    date: '22 Oct 2024',
    time: 'Final Result',
    teamA: {
      name: 'Lumbini Lions',
      shortName: 'LL',
      flag: '🦁',
      primaryColor: '#F97316',
      secondaryColor: '#C2410C',
      runs: 174,
      wickets: 7,
      overs: '20.0',
      battingScorecard: [
        { id: 'll-1', name: 'Rohit Paudel', isCaptain: true, role: 'Batter', runs: 74, balls: 46, fours: 7, sixes: 3, strikeRate: 160.8, dismissal: 'c Kushal b Bipin' },
        { id: 'll-2', name: 'Ben Cutting', role: 'All-rounder', runs: 42, balls: 21, fours: 3, sixes: 3, strikeRate: 200.0, dismissal: 'not out', notOut: true }
      ],
      bowlingFigures: [
        { id: 'll-b1', name: 'Surya Tamang', overs: '4.0', maidens: 0, runs: 28, wickets: 2, economy: 7.0 },
        { id: 'll-b2', name: 'Durgesh Gupta', overs: '3.5', maidens: 0, runs: 38, wickets: 2, economy: 9.9 }
      ]
    },
    teamB: {
      name: 'Pokhara Avengers',
      shortName: 'PA',
      flag: '⚔️',
      primaryColor: '#8B5CF6',
      secondaryColor: '#6D28D9',
      runs: 175,
      wickets: 7,
      overs: '19.5',
      battingScorecard: [
        { id: 'pa-1', name: 'Kushal Bhurtel', isCaptain: true, role: 'Batter', runs: 65, balls: 38, fours: 6, sixes: 4, strikeRate: 171.0, dismissal: 'c Rohit b Surya' },
        { id: 'pa-2', name: 'Michael Leask', role: 'All-rounder', runs: 39, balls: 20, fours: 3, sixes: 2, strikeRate: 195.0, dismissal: 'not out', notOut: true }
      ],
      bowlingFigures: [
        { id: 'pa-b1', name: 'Bipin Khatri', overs: '4.0', maidens: 0, runs: 31, wickets: 3, economy: 7.75 },
        { id: 'pa-b2', name: 'Matt Critchley', overs: '4.0', maidens: 0, runs: 29, wickets: 1, economy: 7.25 }
      ]
    },
    currentInnings: 2,
    currentRunRate: 8.82,
    target: 175,
    winProbability: {
      teamA: 0,
      teamB: 100
    },
    communityVotes: {
      teamA: 3890,
      teamB: 6420,
      userVoted: 'teamB'
    },
    recentBalls: ['6', '1', '4', 'W', '4'],
    commentary: [
      {
        id: 'c-pa-fin',
        over: 19,
        ball: 5,
        runs: 4,
        isBoundary: true,
        isSix: false,
        isWicket: false,
        bowlerName: 'Durgesh Gupta',
        batsmanName: 'Michael Leask',
        commentaryText: 'MATCH WINNING BOUNDARY! Leask carves it over backward point! The Pokhara dugout races onto the TU Ground field in pure ecstasy!',
        tag: 'FOUR'
      }
    ],
    playingXI: {
      teamA: [
        { name: 'Rohit Paudel', role: 'Batter', isCaptain: true },
        { name: 'Ben Cutting', role: 'All-rounder' },
        { name: 'Surya Tamang', role: 'Spinner' },
        { name: 'Durgesh Gupta', role: 'Pacer' },
        { name: 'Bibek Yadav', role: 'All-rounder' }
      ],
      teamB: [
        { name: 'Kushal Bhurtel', role: 'Batter', isCaptain: true },
        { name: 'Michael Leask', role: 'All-rounder' },
        { name: 'Bipin Khatri', role: 'Pacer' },
        { name: 'Matt Critchley', role: 'All-rounder' },
        { name: 'Dinesh Kharel', role: 'Batter' }
      ]
    },
    headToHead: {
      totalMatches: 2,
      teamAWins: 1,
      teamBWins: 1,
      noResult: 0,
      lastFive: ['teamB', 'teamA']
    }
  }
];
