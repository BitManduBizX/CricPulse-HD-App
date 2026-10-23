import { NewsItem } from '../types/cricket';

export const CRICKET_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Nepal Premier League (NPL) Grand Launch: TU Cricket Ground Ready with Advanced Floodlights and रू 1.1 Crore Bounty',
    summary: 'The Cricket Association of Nepal (CAN) and NPL management unveil state-of-the-art digital scoreboards and floodlight installations at Kirtipur. Over 80 international cricketers arrive in Kathmandu.',
    category: 'NPL Exclusive',
    readTime: '4 min read',
    publishedAt: '2 hours ago',
    author: 'Sunil Pokharel',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'news-2',
    title: 'Tactical Masterclass: How Jasprit Bumrah and Sandeep Lamichhane Deconstruct T20 Death Overs',
    summary: 'An analytical deep dive examining release points, seam presentation, and dipping slower-ball physics that baffle the world’s most destructive top-order batsmen.',
    category: 'Tactical Analysis',
    readTime: '6 min read',
    publishedAt: '4 hours ago',
    author: 'Harsha M. Rao',
    imageUrl: 'https://images.unsplash.com/photo-1531415074868-836332ff4296?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'news-3',
    title: 'Border-Gavaskar Trophy Heat: Kohli vs Cummins Head-to-Head Decider at Melbourne',
    summary: 'With 85,000 spectators packing the MCG, India’s batting general faces Australia’s captain in a clash that could define the ICC World Test Championship final pathway.',
    category: 'Match Report',
    readTime: '5 min read',
    publishedAt: '6 hours ago',
    author: 'Brett Haddon',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'news-4',
    title: 'The Hundred’s 5th Season Expansion: New TV Rights and Multi-Million Dollar Private Equity Deals',
    summary: 'The England and Wales Cricket Board confirms unprecedented international investment into the 8 Hundred franchises, cementing the 100-ball tournament alongside the IPL and BBL.',
    category: 'Breaking',
    readTime: '3 min read',
    publishedAt: '12 hours ago',
    author: 'Fiona Campbell',
    imageUrl: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80'
  }
];

export const VIDEO_HIGHLIGHTS = [
  {
    id: 'vid-1',
    title: 'Karan KC 92m Monster Six: Decibel Meter Breaks at TU Cricket Ground',
    duration: '02:45',
    thumbnail: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80',
    views: '480K views',
    match: 'Kathmandu Gorkhas vs Janakpur Bolts'
  },
  {
    id: 'vid-2',
    title: 'Dipendra Singh Airee: The Iconic 6 Sixes in One Over Masterclass (Replay)',
    duration: '04:12',
    thumbnail: 'https://images.unsplash.com/photo-1531415074868-836332ff4296?auto=format&fit=crop&w=600&q=80',
    views: '1.2M views',
    match: 'Nepal International Archive'
  },
  {
    id: 'vid-3',
    title: 'Jasprit Bumrah Unplayable Inswinger Bamboozles Travis Head at MCG',
    duration: '01:58',
    thumbnail: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80',
    views: '890K views',
    match: 'India vs Australia 3rd ODI'
  }
];

export const FAN_POLL = {
  id: 'poll-npl-champion',
  question: 'Who will lift the inaugural Nepal Premier League (NPL) Trophy?',
  totalVotes: 42890,
  options: [
    { id: 'opt-kg', label: 'Kathmandu Gorkhas', votes: 14210, percentage: 33 },
    { id: 'opt-jb', label: 'Janakpur Bolts', votes: 11450, percentage: 27 },
    { id: 'opt-sr', label: 'Sudurpaschim Royals', votes: 8900, percentage: 21 },
    { id: 'opt-bk', label: 'Biratnagar Kings', votes: 8330, percentage: 19 }
  ]
};
