import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, User, LogIn } from 'lucide-react';
import { useState, useEffect } from 'react';
import PangolinLogo from './PangolinLogo';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const navLinks = [
    { name: 'EXPERIENCES', path: '/itineraries' },
    { name: 'THE CLUB', path: '/club' },
    { name: 'LOUNGE', path: '/lounge' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled ? 'glass-morphism py-4 border-b border-prestige-text/10' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between font-sans">
        {/* Desktop Nav - Left */}
        <div className="hidden md:flex space-x-12 items-center flex-1">
          {navLinks.slice(0, 2).map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-[10px] tracking-[0.25em] transition-colors hover:text-gold-500 ${
                location.pathname === link.path ? 'text-gold-500' : 'text-prestige-text opacity-60'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="w-10 h-10 border border-gold-500 rounded-full flex items-center justify-center p-2 group-hover:bg-gold-500/5 transition-all">
            <PangolinLogo className="w-full h-full scale-125" />
          </div>
          <span className="text-[10px] tracking-[0.3em] font-sans font-medium text-gold-500 uppercase">
            Formosan Pangolin
          </span>
        </Link>

        {/* Desktop Nav - Right */}
        <div className="hidden md:flex space-x-12 items-center justify-end flex-1">
          <Link 
            to="/lounge"
            className={`text-[10px] tracking-[0.25em] transition-colors hover:text-gold-500 ${
              location.pathname === '/lounge' ? 'text-gold-500' : 'text-prestige-text opacity-60'
            }`}
          >
            LOUNGE
          </Link>
          {user ? (
            <Link to="/profile" className="flex items-center space-x-2 text-prestige-text opacity-60 hover:opacity-100 transition-opacity">
              <User size={14} className="text-gold-500" />
              <span className="text-[9px] tracking-[0.1em]">{user.displayName?.toUpperCase() || 'MEMBER'}</span>
            </Link>
          ) : (
            <Link 
              to="/login" 
              className="px-6 py-2 border border-gold-500 text-gold-500 text-[10px] tracking-[0.2em] hover:bg-gold-500 hover:text-black transition-all duration-500"
            >
              LEVEL ENTRY
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white/60 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-morphism py-12 flex flex-col items-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg tracking-[0.2em] font-serif hover:text-gold-400"
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <Link to="/profile" className="text-gold-400 tracking-[0.2em]">MY ACCOUNT</Link>
            ) : (
              <Link to="/login" className="px-8 py-3 bg-white text-black rounded-full tracking-[0.2em] text-sm">CLUB ENTRY</Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
