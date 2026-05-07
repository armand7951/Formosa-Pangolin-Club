import { motion } from 'motion/react';
import { MapPin, Users, Calendar, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VillaCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  guests: number;
  key?: string | number | null;
}

export default function VillaCard({ id, title, location, price, image, guests }: VillaCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative h-[500px] rounded-2xl overflow-hidden luxury-border"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-[9px] uppercase tracking-[0.4em] mb-4 text-gold-500 font-sans">Featured residency</p>
            <h3 className="text-4xl font-light font-serif text-prestige-text italic leading-tight group-hover:text-gold-500 transition-colors">
              {title}
            </h3>
          </div>
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center grayscale group-hover:grayscale-0"
          >
            <ArrowUpRight size={18} className="text-gold-500" />
          </motion.div>
        </div>

        <p className="text-xs opacity-60 leading-relaxed font-sans mb-8 group-hover:opacity-100 transition-opacity">
          A cliffside sanctuary. Resonance found in salt, stone, and the distant hum of night jazz.
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-prestige-text/10">
          <div className="flex flex-col">
            <p className="text-[9px] uppercase tracking-widest opacity-40 mb-2 font-sans">Travel Credits</p>
            <p className="text-lg italic font-serif text-prestige-text">
              {price.replace('$', '')} <span className="text-xs not-italic opacity-40">m</span>
            </p>
          </div>
          <Link 
            to={`/itinerary/${id}`}
            className="px-8 py-3 border border-gold-500 text-gold-500 text-[10px] uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-all duration-500"
          >
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function Star({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}
