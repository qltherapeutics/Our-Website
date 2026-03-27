import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const FEATURES = {
  portfolio: false,
  global: false,
  insights: false,
};
  

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'Visual Insights', href: '/VisualInsight' },

  FEATURES.portfolio && { name: 'Portfolio', href: '/portfolio' },
  FEATURES.global && { name: 'Global Presence', href: '/global' },
  FEATURES.insights && { name: 'Insights', href: '/insights' },

].filter(Boolean); // 🔥 IMPORTANT
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300 py-2`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo Only */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo1.png"
            alt="QL Therapeutics Logo"
            className="h-16 md:h-18 w-auto object-contain"
          />
        </Link>

  {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive(link.href) 
                  ? 'text-accent' 
                  : isScrolled ? 'text-text' : 'text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-sm px-5 py-2">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`text-lg font-medium hover:text-accent ${isActive(link.href) ? 'text-accent' : 'text-text'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="btn-primary w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
