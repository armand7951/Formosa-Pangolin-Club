import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image / Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')`, // Luxury Villa
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 text-center px-12 max-w-7xl mx-auto w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full"
          >
            <span className="text-gold-500 text-[10px] uppercase tracking-[0.4em] font-sans font-medium mb-6 block">
              EST. 2024 • INVITATION ONLY
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-serif font-extralight tracking-tight leading-[0.9] mb-10 text-prestige-text">
              Formosan <br/>
              <span className="italic">Pangolin Club</span>
            </h1>
            <p className="text-prestige-text/60 text-sm md:text-base font-sans tracking-wide max-w-xl mx-auto mb-12 leading-relaxed opacity-80">
              A private collective for connoisseurs of architectural rarity. 
              Find resonance found in salt, stone, and the distant hum of night jazz.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
              <Link 
                to="/itineraries" 
                className="group px-12 py-4 border border-gold-500 text-gold-500 text-[10px] uppercase tracking-[0.25em] font-sans hover:bg-gold-500 hover:text-black transition-all duration-500"
              >
                Inquire Availability
              </Link>
              <Link 
                to="/club" 
                className="text-prestige-text/40 hover:text-prestige-text text-[10px] uppercase tracking-[0.25em] font-sans border-b border-white/5 pb-1 transition-all"
              >
                The Manifesto
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />
          <span className="text-[9px] tracking-[0.3em] font-light text-white/40 uppercase">Scroll to Discover</span>
        </motion.div>
      </section>

      {/* Feature Grid - The Three Pillars */}
      <section className="py-32 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Star className="text-gold-500" size={32} />,
                title: "Rare Sanctuary",
                desc: "Access to private villas that are never listed on public platforms. Authenticity is our highest luxury."
              },
              {
                icon: <ShieldCheck className="text-gold-500" size={32} />,
                title: "Curated Rhythm",
                desc: "Every journey is paced like a jazz improvisation. Relaxed, unexpected, and perfectly resonant."
              },
              {
                icon: <Users className="text-gold-500" size={32} />,
                title: "Elite Kinship",
                desc: "Connect with individuals of shared stature. Our shared values are the foundation of every dialogue."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="luxury-border p-12 rounded-2xl bg-white/[0.02]"
              >
                <div className="mb-8">{feature.icon}</div>
                <h3 className="text-2xl font-serif mb-4 italic">{feature.title}</h3>
                <p className="text-white/40 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1]">
              The Elegance of <br/>
              <span className="text-gold-400 italic">Patience</span>
            </h2>
            <p className="text-white/60 mb-8 leading-loose font-light">
              Like the pangolin, we value depth over speed. Our club is not for the hurried, 
              but for those who understand that the finest experiences require time, intention, and a sense of stillness.
            </p>
            <Link to="/club" className="text-gold-500 text-sm tracking-[0.2em] font-medium border-b border-gold-500/30 pb-2 hover:border-gold-500 transition-all">
              DISCOVER OUR PHILOSOPHY
            </Link>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-gold-500/10">
              <img 
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Interior" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold-950/20 glass-morphism rounded-full p-8 flex flex-col justify-center border border-gold-500/20">
              <span className="text-gold-500 font-serif text-4xl mb-1 italic">98%</span>
              <span className="text-white/40 text-[9px] tracking-widest uppercase">Member Retention</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
