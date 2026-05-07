import { motion } from 'motion/react';
import { Mail, Shield, User, LogOut } from 'lucide-react';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function MemberLounge() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
        <div className="text-center">
          <p className="text-white/40 mb-8 tracking-[0.3em] font-light">ENTRY RESTRICTED</p>
          <button 
            onClick={() => navigate('/login')}
            className="px-8 py-3 border border-gold-500 text-gold-400 rounded-full"
          >
            IDENTIFY YOURSELF
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Side Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="glass-morphism p-10 rounded-3xl border border-gold-500/10">
              <div className="w-24 h-24 rounded-full overflow-hidden border border-gold-500/20 mb-6 mx-auto">
                <img 
                  src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}&background=C5A059&color=fff`} 
                  alt={user.displayName || 'Member'} 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center">
                <h2 className="text-4xl font-serif font-light mb-1 italic text-prestige-text">{user.displayName}</h2>
                <p className="text-gold-500 text-[9px] tracking-[0.4em] uppercase mb-10 font-sans font-medium">Founding Member</p>
                <div className="flex justify-center space-x-10">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-serif font-light italic text-prestige-text">14,200</span>
                    <span className="text-[9px] text-prestige-text opacity-40 tracking-widest uppercase font-sans">Credits</span>
                  </div>
                  <div className="w-[1px] h-10 bg-gold-500/20" />
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-serif font-light italic text-prestige-text">08</span>
                    <span className="text-[9px] text-prestige-text opacity-40 tracking-widest uppercase font-sans">Residencies</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <button className="w-full py-4 border border-gold-500/20 rounded-xl flex items-center justify-center space-x-3 text-gold-500 hover:bg-gold-500 hover:text-black transition-all duration-500">
                <Mail size={14} />
                <span className="text-[10px] tracking-widest uppercase font-sans">Request Concierge</span>
              </button>
              <button 
                onClick={handleLogout}
                className="w-full py-4 border border-white/5 rounded-xl flex items-center justify-center space-x-3 text-prestige-text/40 hover:text-red-500/60 transition-all duration-500"
              >
                <LogOut size={14} />
                <span className="text-[10px] tracking-widest uppercase font-sans">Exit Lounge</span>
              </button>
            </div>
          </motion.div>

          {/* Feed / Content */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-5xl font-serif italic mb-4">Welcome back,</h1>
              <p className="text-white/40 font-light leading-relaxed">
                The world moves at your pace here. Your next sanctuary is awaiting your arrival.
              </p>
            </motion.div>

            {/* Exclusive Benefit Card */}
            <div className="luxury-border rounded-3xl overflow-hidden bg-white/[0.02]">
              <div className="p-12">
                <Shield className="text-gold-500 mb-6" size={32} />
                <h3 className="text-3xl font-serif mb-4">Current Exclusive Benefit</h3>
                <p className="text-white/60 leading-relaxed font-light mb-8 max-w-xl">
                  As a Founding Member, you have early access to the upcoming "Celestial Ridge" opening in Q4. 
                  Private walk-throughs can be arranged via your concierge.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="px-4 py-1 rounded-full bg-gold-950/30 text-gold-500 text-[9px] tracking-widest font-bold uppercase border border-gold-500/20">
                    EXPIRES IN 12 DAYS
                  </span>
                </div>
              </div>
            </div>

            {/* Itinerary Updates */}
            <div>
              <h3 className="text-[11px] tracking-[0.5em] text-white/40 uppercase mb-8 ml-2">Recent Collective Discovery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Deep Forest Ritual", date: "June 12-15", img: "https://images.unsplash.com/photo-1544200175-ca3e82737604?q=80&w=2070&auto=format&fit=crop" },
                  { title: "Lunar Solitude", date: "July 01-05", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop" }
                ].map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4 border border-white/5">
                      <img src={item.img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                    </div>
                    <p className="text-lg font-serif italic">{item.title}</p>
                    <p className="text-[10px] text-white/40 tracking-widest uppercase">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
