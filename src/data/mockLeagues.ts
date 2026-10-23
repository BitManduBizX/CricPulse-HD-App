import { CricketLeague } from '../types/cricket';

export const GLOBAL_LEAGUES_SUMMARY = {
  totalSanctionedLeagues: 28,
  topTierLeagues: 10,
  answerHowMany: "There are currently 28 active ICC-sanctioned and major professional domestic cricket leagues globally. These range from the world's most lucrative franchise tournament (Indian Premier League) to the innovative 100-ball format in England ('The Hundred'), and the rapidly rising Nepal Premier League (NPL) boasting passionate sold-out crowds.",
  theHundredExplainer: "The Hundred is an ECB (England and Wales Cricket Board) innovation consisting of 100 balls per innings. Bowlers bowl either 5 or 10 consecutive balls, with a change of ends every 10 balls. A 25-ball powerplay allows two fielders outside the 30-yard circle, creating a fast-paced 2.5-hour broadcast spectacle."
};

export const CRICKET_LEAGUES: CricketLeague[] = [
  {
    id: 'npl',
    name: 'Nepal Premier League (NPL)',
    country: 'Nepal 🇳🇵',
    format: 'T20 (20 Overs)',
    teamsCount: 8,
    foundedYear: 2024,
    currentChampion: 'Inaugural Season Finalist Contenders',
    description: 'The premier franchise cricket spectacle of the Himalayas! Featuring 8 provincial franchises competing at the legendary TU Cricket Ground in Kirtipur under floodlights with रू 1.1 Crore winner prize.',
    highlightFact: 'Attracts global marquee stars like Shikhar Dhawan, Martin Guptill, and James Neesham with world-record Associate fandom.',
    teams: [
      'Biratnagar Kings',
      'Chitwan Rhinos',
      'Janakpur Bolts',
      'Kathmandu Gorkhas',
      'Karnali Yaks',
      'Lumbini Lions',
      'Pokhara Avengers',
      'Sudurpaschim Royals'
    ],
    scheduleWindow: 'November – December (Annual)',
    trophyEmoji: '🏆',
    badgeColor: '#EF4444'
  },
  {
    id: 'the-hundred',
    name: 'The Hundred (ECB)',
    country: 'England & Wales 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    format: '100 Balls per Innings',
    teamsCount: 8,
    foundedYear: 2021,
    currentChampion: 'Oval Invincibles (Men) / London Spirit (Women)',
    description: 'A revolutionary 100-ball cricket competition launched by the ECB. Fast-paced action with unique 5 or 10 ball overs and gender-equal double-headers at iconic UK grounds.',
    highlightFact: 'Simplified format designed for families and prime-time broadcast, featuring equal prize money parity for men and women.',
    teams: [
      'Oval Invincibles',
      'London Spirit',
      'Manchester Originals',
      'Northern Superchargers',
      'Birmingham Phoenix',
      'Trent Rockets',
      'Southern Brave',
      'Welsh Fire'
    ],
    scheduleWindow: 'July – August',
    trophyEmoji: '💯',
    badgeColor: '#38BDF8'
  },
  {
    id: 'ipl',
    name: 'Indian Premier League (IPL)',
    country: 'India 🇮🇳',
    format: 'T20 (20 Overs)',
    teamsCount: 10,
    foundedYear: 2008,
    currentChampion: 'Kolkata Knight Riders',
    description: 'The undisputed financial and sporting juggernaut of cricket. Boasting the highest media rights valuation per match in global sports after the NFL.',
    highlightFact: '10 franchises, 74 matches, and an estimated brand ecosystem value exceeding $10 Billion USD.',
    teams: [
      'Chennai Super Kings',
      'Mumbai Indians',
      'Kolkata Knight Riders',
      'Royal Challengers Bengaluru',
      'Gujarat Titans',
      'Rajasthan Royals',
      'Sunrisers Hyderabad',
      'Delhi Capitals',
      'Lucknow Super Giants',
      'Punjab Kings'
    ],
    scheduleWindow: 'March – May',
    trophyEmoji: '🦁',
    badgeColor: '#F59E0B'
  },
  {
    id: 'bbl',
    name: 'Big Bash League (BBL)',
    country: 'Australia 🇦🇺',
    format: 'T20 (20 Overs)',
    teamsCount: 8,
    foundedYear: 2011,
    currentChampion: 'Brisbane Heat',
    description: 'Australia’s flagship summer cricket festival, packing iconic venues like the MCG, SCG, and Adelaide Oval with summer holiday entertainment and high-octane T20 cricket.',
    highlightFact: 'Pioneered Zing bails, Power Surge split overs, and the New Year’s Eve Adelaide blockbuster fixture.',
    teams: [
      'Brisbane Heat',
      'Sydney Sixers',
      'Perth Scorchers',
      'Melbourne Stars',
      'Melbourne Renegades',
      'Adelaide Strikers',
      'Hobart Hurricanes',
      'Sydney Thunder'
    ],
    scheduleWindow: 'December – January',
    trophyEmoji: '🦘',
    badgeColor: '#10B981'
  },
  {
    id: 'psl',
    name: 'Pakistan Super League (PSL)',
    country: 'Pakistan 🇵🇰',
    format: 'T20 (20 Overs)',
    teamsCount: 6,
    foundedYear: 2015,
    currentChampion: 'Islamabad United',
    description: 'Renowned as the fiercest fast-bowling crucible in franchise cricket, nurturing 150 km/h tearaway pacers and electric crowds in Lahore, Karachi, and Multan.',
    highlightFact: 'Boasts the lowest average bowling economy and highest average bowling speeds of all global leagues.',
    teams: [
      'Islamabad United',
      'Lahore Qalandars',
      'Multan Sultans',
      'Peshawar Zalmi',
      'Karachi Kings',
      'Quetta Gladiators'
    ],
    scheduleWindow: 'February – March',
    trophyEmoji: '⚡',
    badgeColor: '#16A34A'
  },
  {
    id: 'cpl',
    name: 'Caribbean Premier League (CPL)',
    country: 'West Indies 🌴',
    format: 'T20 (20 Overs)',
    teamsCount: 6,
    foundedYear: 2013,
    currentChampion: 'Saint Lucia Kings',
    description: 'Known as the "Biggest Party in Sport", CPL marries carnival culture, infectious Caribbean music, and legendary six-hitting slugfests across Caribbean islands.',
    highlightFact: 'Consistently records the highest sixes-per-match ratio among premier franchise tournaments.',
    teams: [
      'Saint Lucia Kings',
      'Guyana Amazon Warriors',
      'Trinbago Knight Riders',
      'Barbados Royals',
      'Antigua & Barbuda Falcons',
      'St Kitts & Nevis Patriots'
    ],
    scheduleWindow: 'August – October',
    trophyEmoji: '🌴',
    badgeColor: '#F43F5E'
  },
  {
    id: 'ilt20',
    name: 'International League T20 (ILT20)',
    country: 'United Arab Emirates 🇦🇪',
    format: 'T20 (20 Overs)',
    teamsCount: 6,
    foundedYear: 2023,
    currentChampion: 'MI Emirates',
    description: 'Dubai, Sharjah, and Abu Dhabi host this glamorous league which permits up to 9 overseas players per playing XI, creating mini World Cup lineups.',
    highlightFact: 'Granted official List A T20 status by the ICC, a historic milestone for an Associate-hosted franchise league.',
    teams: [
      'MI Emirates',
      'Dubai Capitals',
      'Gulf Giants',
      'Abu Dhabi Knight Riders',
      'Sharjah Warriors',
      'Desert Vipers'
    ],
    scheduleWindow: 'January – February',
    trophyEmoji: '🏙️',
    badgeColor: '#6366F1'
  },
  {
    id: 'sa20',
    name: 'SA20 League',
    country: 'South Africa 🇿🇦',
    format: 'T20 (20 Overs)',
    teamsCount: 6,
    foundedYear: 2023,
    currentChampion: 'Sunrisers Eastern Cape',
    description: 'South Africa’s premier tournament backed by top IPL franchise owners, revitalizing cricket in Cape Town, Durban, Centurion, and Johannesburg.',
    highlightFact: 'Introduced the innovative bonus point system and designated substitution sheets at the coin toss.',
    teams: [
      'Sunrisers Eastern Cape',
      'Durban’s Super Giants',
      'MI Cape Town',
      'Paarl Royals',
      'Joburg Super Kings',
      'Pretoria Capitals'
    ],
    scheduleWindow: 'January – February',
    trophyEmoji: '🇿🇦',
    badgeColor: '#EAB308'
  },
  {
    id: 'mlc',
    name: 'Major League Cricket (MLC)',
    country: 'United States 🇺🇸',
    format: 'T20 (20 Overs)',
    teamsCount: 6,
    foundedYear: 2023,
    currentChampion: 'Washington Freedom',
    description: 'America’s groundbreaking professional cricket championship with purpose-built stadiums in Grand Prairie Texas and Church Street Park, North Carolina.',
    highlightFact: 'Steve Smith, Pat Cummins, and Nicholas Pooran are headline marquee players driving cricket’s Olympic LA28 surge.',
    teams: [
      'Washington Freedom',
      'San Francisco Unicorns',
      'Texas Super Kings',
      'MI New York',
      'Seattle Orcas',
      'Los Angeles Knight Riders'
    ],
    scheduleWindow: 'July',
    trophyEmoji: '🗽',
    badgeColor: '#3B82F6'
  },
  {
    id: 'bpl',
    name: 'Bangladesh Premier League (BPL)',
    country: 'Bangladesh 🇧🇩',
    format: 'T20 (20 Overs)',
    teamsCount: 7,
    foundedYear: 2012,
    currentChampion: 'Fortune Barishal',
    description: 'Passionate cricket rivalry across Mirpur, Chittagong, and Sylhet. Known for low-spinning turners and passionate subcontinental cricket hysteria.',
    highlightFact: 'Hosts more than 45 matches in a packed month-long tournament with massive broadcast viewership.',
    teams: [
      'Fortune Barishal',
      'Comilla Victorians',
      'Rangpur Riders',
      'Sylhet Strikers',
      'Chattogram Challengers',
      'Khulna Tigers',
      'Dhaka Dominators'
    ],
    scheduleWindow: 'January – March',
    trophyEmoji: '🐯',
    badgeColor: '#10B981'
  }
];
