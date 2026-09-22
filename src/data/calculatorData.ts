import { ExpenseOption } from '../types';

export const LIVE365_PRICE = 65.0; // $65/month all-inclusive

export const ZENO_FM_BASE_STARTING_PRICE = 35.0; // Zeno.fm baseline starting host price ($35/mo)

export const EXPENSE_OPTIONS: ExpenseOption[] = [
  {
    id: 'music-licensing',
    name: 'Blanket Music Licensing',
    category: 'licensing',
    cost: 205.83,
    description: 'Statutory PROs & sound recording coverage (SoundExchange, ASCAP, BMI, SESAC, SOCAN)',
    color: '#f43f5e', // Rose / Red
    badgeBg: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    textColor: 'text-rose-400',
    borderColor: 'border-rose-500',
    details: 'Legally required by US copyright law to stream commercial music without copyright infringement penalties.',
  },
  {
    id: 'royalty-reporting',
    name: 'Monthly Royalty Reporting',
    category: 'reporting',
    cost: 150.0,
    description: 'The time it costs you to manage mandatory reporting',
    color: '#f59e0b', // Amber / Gold
    badgeBg: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-500',
    details: 'Tracks every song play, timestamp, and listener count into mandatory regulatory monthly report formats.',
  },
];
