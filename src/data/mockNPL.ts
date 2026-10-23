import { NPLFranchise } from '../types/cricket';

export const NPL_TEAMS: NPLFranchise[] = [
  {
    id: 'biratnagar-kings',
    name: 'Biratnagar Kings',
    shortName: 'BK',
    city: 'Biratnagar, Koshi Province',
    owner: 'Madhesi & Koshi Sports Consortium',
    primaryColor: '#0284C7',
    secondaryColor: '#0369A1',
    marqueePlayer: 'Sandeep Lamichhane',
    iconicOverseas: ['Martin Guptill (NZ)', 'Aqib Ilyas (OMA)', 'Chris Sole (SCO)'],
    headCoach: 'Kevin O’Brien (IRE)',
    squadSize: 16,
    championshipOdds: '3.75',
    logoEmoji: '👑',
    description: 'The powerhouse of Koshi Province, headlined by global mystery spin sensation Sandeep Lamichhane and explosive Kiwi opener Martin Guptill.',
    squad: [
      { name: 'Sandeep Lamichhane', role: 'Spinner', category: 'Marquee', nationality: 'Nepal' },
      { name: 'Martin Guptill', role: 'Batter', category: 'Foreign / Overseas', nationality: 'New Zealand' },
      { name: 'Aqib Ilyas', role: 'All-rounder', category: 'Foreign / Overseas', nationality: 'Oman' },
      { name: 'Lokesh Bam', role: 'Batter', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Pratish GC', role: 'Pacer', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Basir Ahamad', role: 'All-rounder', category: 'Grade B', nationality: 'Nepal' },
      { name: 'Subash Bhandari', role: 'Spinner', category: 'Grade B', nationality: 'Nepal' },
      { name: 'Dipak Paswan', role: 'Bowler', category: 'Talent Hunt', nationality: 'Nepal' }
    ]
  },
  {
    id: 'chitwan-rhinos',
    name: 'Chitwan Rhinos',
    shortName: 'CR',
    city: 'Bharatpur, Chitwan',
    owner: 'Chitwan Medical College & Sports',
    primaryColor: '#059669',
    secondaryColor: '#047857',
    marqueePlayer: 'Kushal Malla',
    iconicOverseas: ['Marchant de Lange (SA)', 'Luc Benkenstein (ENG)', 'Hassan Eisakhil (AFG)'],
    headCoach: 'Umesh Patwal (IND)',
    squadSize: 16,
    championshipOdds: '4.20',
    logoEmoji: '🦏',
    description: 'Fierce and unstoppable like the one-horned rhino of Chitwan National Park. Armed with world-record power hitter Kushal Malla and South African rocket pacer Marchant de Lange.',
    squad: [
      { name: 'Kushal Malla', role: 'All-rounder', category: 'Marquee', nationality: 'Nepal' },
      { name: 'Marchant de Lange', role: 'Pacer', category: 'Foreign / Overseas', nationality: 'South Africa' },
      { name: 'Luc Benkenstein', role: 'All-rounder', category: 'Foreign / Overseas', nationality: 'England' },
      { name: 'Rijan Dhakal', role: 'Pacer', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Kamal Singh Airee', role: 'Pacer', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Bipin Rawal', role: 'Wicketkeeper', category: 'Grade B', nationality: 'Nepal' },
      { name: 'Santosh Karki', role: 'Batter', category: 'Grade B', nationality: 'Nepal' },
      { name: 'Amar Singh Routela', role: 'All-rounder', category: 'Grade B', nationality: 'Nepal' }
    ]
  },
  {
    id: 'janakpur-bolts',
    name: 'Janakpur Bolts',
    shortName: 'JB',
    city: 'Janakpurdham, Madhesh Province',
    owner: 'Dream Sports Nepal',
    primaryColor: '#F59E0B',
    secondaryColor: '#D97706',
    marqueePlayer: 'Aasif Sheikh',
    iconicOverseas: ['James Neesham (NZ)', 'Lahiru Milantha (USA/SL)', 'Ben Mike (ENG)'],
    headCoach: 'Pubudu Dassanayake (CAN/SL)',
    squadSize: 16,
    championshipOdds: '3.40',
    logoEmoji: '⚡',
    description: 'Electric and high-voltage, representing the sacred heritage of Mithila and Janakpur. Blending ICC Spirit of Cricket winner Aasif Sheikh with Kiwi powerhouse Jimmy Neesham.',
    squad: [
      { name: 'Aasif Sheikh', role: 'Wicketkeeper', category: 'Marquee', nationality: 'Nepal' },
      { name: 'James Neesham', role: 'All-rounder', category: 'Foreign / Overseas', nationality: 'New Zealand' },
      { name: 'Lahiru Milantha', role: 'Batter', category: 'Foreign / Overseas', nationality: 'Sri Lanka / USA' },
      { name: 'Ben Mike', role: 'All-rounder', category: 'Foreign / Overseas', nationality: 'England' },
      { name: 'Anil Kumar Sah', role: 'Batter', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Lalit Rajbanshi', role: 'Spinner', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Kishore Mahato', role: 'Pacer', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Mohammad Mohsin', role: 'Spinner', category: 'Foreign / Overseas', nationality: 'Pakistan' }
    ]
  },
  {
    id: 'kathmandu-gorkhas',
    name: 'Kathmandu Gorkhas',
    shortName: 'KG',
    city: 'Kathmandu Valley, Bagmati Province',
    owner: 'Kantipur Media Group',
    primaryColor: '#EF4444',
    secondaryColor: '#B91C1C',
    marqueePlayer: 'Karan KC',
    iconicOverseas: ['Michael Levitt (NED)', 'Gerhard Erasmus (NAM)', 'Dan Douthwaite (WAL)'],
    headCoach: 'Monty Desai',
    squadSize: 16,
    championshipOdds: '3.10',
    logoEmoji: '🛡️',
    description: 'The capital warriors infused with the fearless spirit of the Gorkhas. Led by death-overs specialist Karan KC and ICC Associate Cricketer of the Year Gerhard Erasmus.',
    squad: [
      { name: 'Karan KC', role: 'All-rounder', category: 'Marquee', nationality: 'Nepal' },
      { name: 'Gerhard Erasmus', role: 'All-rounder', category: 'Foreign / Overseas', nationality: 'Namibia' },
      { name: 'Michael Levitt', role: 'Batter', category: 'Foreign / Overseas', nationality: 'Netherlands' },
      { name: 'Bhim Sharki', role: 'Batter', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Shahab Alam', role: 'Spinner', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Rashid Khan', role: 'Pacer', category: 'Grade B', nationality: 'Nepal' },
      { name: 'Sumit Maharjan', role: 'Batter', category: 'Grade B', nationality: 'Nepal' },
      { name: 'Raju Rijal', role: 'Wicketkeeper', category: 'Grade B', nationality: 'Nepal' }
    ]
  },
  {
    id: 'karnali-yaks',
    name: 'Karnali Yaks',
    shortName: 'KY',
    city: 'Birendranagar, Karnali Province',
    owner: 'Himalayan Cricket Ventures',
    primaryColor: '#6366F1',
    secondaryColor: '#4F46E5',
    marqueePlayer: 'Sompal Kami',
    iconicOverseas: ['Shikhar Dhawan (IND)', 'Chadwick Walton (WI)', 'Hussain Talat (PAK)'],
    headCoach: 'Gyanendra Malla (NEP)',
    squadSize: 16,
    championshipOdds: '3.25',
    logoEmoji: '🦬',
    description: 'Representing the rugged mountainous resilience of Karnali. Stunned the cricket world by signing Indian legendary opener "Gabbar" Shikhar Dhawan alongside national pace ace Sompal Kami.',
    squad: [
      { name: 'Sompal Kami', role: 'Pacer', category: 'Marquee', nationality: 'Nepal' },
      { name: 'Shikhar Dhawan', role: 'Batter', category: 'Foreign / Overseas', nationality: 'India' },
      { name: 'Chadwick Walton', role: 'Wicketkeeper', category: 'Foreign / Overseas', nationality: 'West Indies' },
      { name: 'Hussain Talat', role: 'All-rounder', category: 'Foreign / Overseas', nationality: 'Pakistan' },
      { name: 'Gulshan Jha', role: 'All-rounder', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Nandan Yadav', role: 'Pacer', category: 'Grade B', nationality: 'Nepal' },
      { name: 'Dev Khanal', role: 'Batter', category: 'Grade B', nationality: 'Nepal' },
      { name: 'Bipin Prasad', role: 'Spinner', category: 'Talent Hunt', nationality: 'Nepal' }
    ]
  },
  {
    id: 'lumbini-lions',
    name: 'Lumbini Lions',
    shortName: 'LL',
    city: 'Butwal & Bhairahawa, Lumbini Province',
    owner: 'Fortuna Sports',
    primaryColor: '#F97316',
    secondaryColor: '#EA580C',
    marqueePlayer: 'Rohit Paudel',
    iconicOverseas: ['Ben Cutting (AUS)', 'Tom Moores (ENG)', 'Unmukt Chand (USA)'],
    headCoach: 'Tom Moody (Consultant) / Nandan Phadnis',
    squadSize: 16,
    championshipOdds: '3.50',
    logoEmoji: '🦁',
    description: 'Proud representatives of the birth place of Lord Buddha. Captained by the national team skipper Rohit Paudel and boosted by Australian IPL champion all-rounder Ben Cutting.',
    squad: [
      { name: 'Rohit Paudel', role: 'Batter', category: 'Marquee', nationality: 'Nepal' },
      { name: 'Ben Cutting', role: 'All-rounder', category: 'Foreign / Overseas', nationality: 'Australia' },
      { name: 'Tom Moores', role: 'Wicketkeeper', category: 'Foreign / Overseas', nationality: 'England' },
      { name: 'Unmukt Chand', role: 'Batter', category: 'Foreign / Overseas', nationality: 'USA / India' },
      { name: 'Surya Tamang', role: 'Spinner', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Bibek Yadav', role: 'All-rounder', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Sundeep Jora', role: 'Batter', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Durgesh Gupta', role: 'Pacer', category: 'Grade B', nationality: 'Nepal' }
    ]
  },
  {
    id: 'pokhara-avengers',
    name: 'Pokhara Avengers',
    shortName: 'PA',
    city: 'Pokhara, Gandaki Province',
    owner: 'Pokhara Tourism & Sports Hub',
    primaryColor: '#A855F7',
    secondaryColor: '#9333EA',
    marqueePlayer: 'Kushal Bhurtel',
    iconicOverseas: ['Michael Leask (SCO)', 'Matt Critchley (ENG)', 'Andres Gous (USA)'],
    headCoach: 'Rajiv Kumar',
    squadSize: 16,
    championshipOdds: '4.50',
    logoEmoji: '⚔️',
    description: 'Nestled under the Annapurna mountain range, Pokhara Avengers boast fearless 360-degree strokeplay anchored by national stalwart Kushal Bhurtel.',
    squad: [
      { name: 'Kushal Bhurtel', role: 'Batter', category: 'Marquee', nationality: 'Nepal' },
      { name: 'Michael Leask', role: 'All-rounder', category: 'Foreign / Overseas', nationality: 'Scotland' },
      { name: 'Matt Critchley', role: 'All-rounder', category: 'Foreign / Overseas', nationality: 'England' },
      { name: 'Andres Gous', role: 'Batter', category: 'Foreign / Overseas', nationality: 'USA' },
      { name: 'Bipin Khatri', role: 'Pacer', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Dinesh Kharel', role: 'Batter', category: 'Grade B', nationality: 'Nepal' },
      { name: 'Trit Raj Das', role: 'Batter', category: 'Grade B', nationality: 'Nepal' },
      { name: 'Amrit Gurung', role: 'Pacer', category: 'Talent Hunt', nationality: 'Nepal' }
    ]
  },
  {
    id: 'sudurpaschim-royals',
    name: 'Sudurpaschim Royals',
    shortName: 'SR',
    city: 'Dhangadhi, Sudurpashchim Province',
    owner: 'Far West Sports & Education',
    primaryColor: '#10B981',
    secondaryColor: '#059669',
    marqueePlayer: 'Dipendra Singh Airee',
    iconicOverseas: ['Brandon McMullen (SCO)', 'Saif Zaib (ENG)', 'Scott Kuggeleijn (NZ)'],
    headCoach: 'Jagat Tamata (NEP)',
    squadSize: 16,
    championshipOdds: '3.20',
    logoEmoji: '🦅',
    description: 'The roaring pride of Far Western Nepal! Powered by world record-holder Dipendra Singh Airee (9-ball 50, 6 sixes in an over) and fiery Kiwi pacer Scott Kuggeleijn.',
    squad: [
      { name: 'Dipendra Singh Airee', role: 'All-rounder', category: 'Marquee', nationality: 'Nepal' },
      { name: 'Brandon McMullen', role: 'All-rounder', category: 'Foreign / Overseas', nationality: 'Scotland' },
      { name: 'Saif Zaib', role: 'All-rounder', category: 'Foreign / Overseas', nationality: 'England' },
      { name: 'Scott Kuggeleijn', role: 'Pacer', category: 'Foreign / Overseas', nationality: 'New Zealand' },
      { name: 'Abinash Bohara', role: 'Pacer', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Binod Bhandari', role: 'Wicketkeeper', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Arif Sheikh', role: 'All-rounder', category: 'Grade A', nationality: 'Nepal' },
      { name: 'Naren Saud', role: 'Spinner', category: 'Talent Hunt', nationality: 'Nepal' }
    ]
  }
];

export const NPL_PRIZE_MONEY = {
  currency: 'NPR (रू)',
  totalPool: 'रू 2.5 Crore (NPR 25 Million+)',
  winner: {
    amount: 'रू 1,10,00,000',
    formatted: 'रू 1.1 Crore (NPR 11 Million)',
    trophy: 'Championship Trophy + Gold Medals'
  },
  runnerUp: {
    amount: 'रू 51,00,000',
    formatted: 'रू 51 Lakh (NPR 5.1 Million)',
    trophy: 'Silver Trophy + Medals'
  },
  thirdPlace: {
    amount: 'रू 25,00,000',
    formatted: 'रू 25 Lakh (NPR 2.5 Million)',
    trophy: 'Bronze Plaque'
  },
  fourthPlace: {
    amount: 'रू 15,00,000',
    formatted: 'रू 15 Lakh (NPR 1.5 Million)',
    trophy: 'Certificate of Excellence'
  },
  individualAwards: [
    { title: 'Player of the Tournament (MVP)', reward: 'Brand New Car + रू 5,00,000' },
    { title: 'Best Batsman (Orange Cap)', reward: 'Pulsar Motorbike + रू 2,50,000' },
    { title: 'Best Bowler (Purple Cap)', reward: 'Pulsar Motorbike + रू 2,50,000' },
    { title: 'Emerging Player of NPL', reward: 'Electric Scooter + रू 2,00,000' }
  ]
};

export const NPL_STANDINGS = [
  { rank: 1, team: 'Janakpur Bolts', short: 'JB', played: 5, won: 4, lost: 1, nr: 0, nrr: '+0.892', points: 8, form: ['W', 'W', 'W', 'L', 'W'] },
  { rank: 2, team: 'Sudurpaschim Royals', short: 'SR', played: 5, won: 4, lost: 1, nr: 0, nrr: '+0.675', points: 8, form: ['W', 'L', 'W', 'W', 'W'] },
  { rank: 3, team: 'Kathmandu Gorkhas', short: 'KG', played: 5, won: 3, lost: 2, nr: 0, nrr: '+0.340', points: 6, form: ['L', 'W', 'W', 'L', 'W'] },
  { rank: 4, team: 'Chitwan Rhinos', short: 'CR', played: 5, won: 3, lost: 2, nr: 0, nrr: '+0.128', points: 6, form: ['W', 'W', 'L', 'W', 'L'] },
  { rank: 5, team: 'Biratnagar Kings', short: 'BK', played: 5, won: 2, lost: 3, nr: 0, nrr: '-0.145', points: 4, form: ['L', 'L', 'W', 'W', 'L'] },
  { rank: 6, team: 'Lumbini Lions', short: 'LL', played: 5, won: 2, lost: 3, nr: 0, nrr: '-0.380', points: 4, form: ['L', 'W', 'L', 'L', 'W'] },
  { rank: 7, team: 'Pokhara Avengers', short: 'PA', played: 5, won: 1, lost: 4, nr: 0, nrr: '-0.620', points: 2, form: ['L', 'L', 'L', 'W', 'L'] },
  { rank: 8, team: 'Karnali Yaks', short: 'KY', played: 5, won: 1, lost: 4, nr: 0, nrr: '-0.890', points: 2, form: ['W', 'L', 'L', 'L', 'L'] }
];
