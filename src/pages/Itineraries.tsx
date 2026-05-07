import { motion } from 'motion/react';
import VillaCard from '../components/VillaCard';

const ITINERARIES_DATA = [
  {
    id: '1',
    title: 'The Cloud Residence',
    location: 'Ali Mountain, Taiwan',
    price: '$4,200',
    guests: 4,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Oceanic Serenity',
    location: 'Hualien Coast, Taiwan',
    price: '$5,800',
    guests: 6,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Minimalist Sanctuary',
    location: 'Taichung Hills',
    price: '$3,500',
    guests: 2,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Bamboo Grove Villa',
    location: 'Nantou Valley',
    price: '$4,900',
    guests: 8,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Obsidian Retreat',
    location: 'Taitung Ridge',
    price: '$7,200',
    guests: 4,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Itineraries() {
  return (
    <div className="pt-40 pb-32 px-6 min-h-screen luxury-gradient">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32 text-center"
        >
          <span className="text-gold-500 text-[10px] tracking-[0.6em] font-sans font-medium uppercase mb-6 block">
            Seasonal Collections
          </span>
          <h2 className="text-6xl md:text-8xl font-serif font-light italic mb-8 text-prestige-text">
            Private Sanctuaries
          </h2>
          <p className="text-prestige-text/40 max-w-2xl mx-auto font-sans text-sm tracking-wide leading-relaxed">
            Exclusive residences curated for their architectural significance and unmatched intimacy. 
            Reservations are processed with absolute discretion via our secure member portal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ITINERARIES_DATA.map((v) => (
            <VillaCard 
              key={v.id} 
              id={v.id}
              title={v.title}
              location={v.location}
              price={v.price}
              image={v.image}
              guests={v.guests}
            />
          ))}
          
          {/* Invitation Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="h-[500px] flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-white/10 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
          >
            <div className="w-20 h-20 rounded-full border border-gold-500/30 flex items-center justify-center mb-8">
              <span className="text-gold-500 font-serif text-3xl">P</span>
            </div>
            <h3 className="text-2xl font-serif mb-4">Request a Location</h3>
            <p className="text-white/40 text-sm mb-8 font-light leading-relaxed">
              Seeking a destination not listed in our standard collection? 
              Our concierge can curate a private residence specifically for your needs.
            </p>
            <button className="px-8 py-3 border border-gold-500/50 text-gold-400 rounded-full text-[10px] tracking-[0.2em] font-bold hover:bg-gold-500 hover:text-white transition-all">
              CONTACT CONCIERGE
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
