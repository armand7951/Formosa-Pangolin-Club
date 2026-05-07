/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Itineraries from './pages/Itineraries';
import MemberLounge from './pages/MemberLounge';
import Login from './pages/Login';

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#050505]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<PageTransition><Landing /></PageTransition>} />
            <Route path="/itineraries" element={<PageTransition><Itineraries /></PageTransition>} />
            <Route path="/lounge" element={<PageTransition><MemberLounge /></PageTransition>} />
            <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
            {/* Fallback to home */}
            <Route path="*" element={<Landing />} />
          </Routes>
        </main>
        
        {/* Persistent background texture/noise */}
        <div className="noise-overlay"></div>
      </div>
    </Router>
  );
}

