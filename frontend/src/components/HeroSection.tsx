import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import SuccessPopup from './SuccessPopup';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      try {
        const response = await fetch(import.meta.env.VITE_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            user_agent: navigator.userAgent,
          }),
        });

        if (response.ok) {
          setShowPopup(true);
          setEmail('');
        } else {
          console.error('Registration failed');
          // Optional: Show error toast
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#E0F7FA] via-[#F0F8FF] to-[#FFFEF7] min-h-[95vh] flex items-center pt-20 pb-10 scroll-mt-24">
      <SuccessPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 text-white opacity-60"
        >
          <svg width="100" height="60" viewBox="0 0 100 60" fill="currentColor">
            <path d="M20,40 Q30,20 50,40 T90,40 Q100,60 80,60 H20 Q0,60 20,40" />
          </svg>
        </motion.div>
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 text-white opacity-50"
        >
          <svg width="120" height="70" viewBox="0 0 120 70" fill="currentColor">
            <path d="M25,45 Q40,20 65,45 T110,45 Q120,70 95,70 H25 Q0,70 25,45" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6 border border-white">
            <span className="text-sm font-bold text-[var(--color-primary)] tracking-wide uppercase">Coming Soon</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-[#333] tracking-tight">
            Stop Overthinking <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-blue-400">Baby Gear.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            AI-powered advice that cuts through the hype. Shop smarter, not harder.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0 relative z-20">
            <input
              type="email"
              placeholder="Enter your email for early access"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="flex-1 px-6 py-4 rounded-full border-2 border-white focus:border-[var(--color-primary)] focus:outline-none shadow-lg text-lg bg-white/90 backdrop-blur-sm transition-all disabled:opacity-70"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-premium text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 size={20} className="animate-spin" /> : <>Get Early Access <ArrowRight size={20} /></>}
            </button>
          </form>

          <div className="mt-10 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500 font-medium">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p>Join <span className="text-[var(--color-primary)] font-bold">2,000+</span> waiting parents</p>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-soft animate-float">
            <img
              src="https://kidioz.com/wp-content/uploads/2025/05/banner-8-5.avif"
              alt="Happy mom with baby"
              className="w-full h-auto object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
              }}
            />

            {/* Floating Cards */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-[220px] border border-white/50"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-sm">
                  <Check size={16} strokeWidth={3} />
                </div>
                <span className="font-bold text-sm text-green-800">Great Choice!</span>
              </div>
              <p className="text-xs text-gray-600 font-medium">"Fits perfectly in your trunk."</p>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute top-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-[180px] border border-white/50"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 shadow-sm">
                  <span className="font-bold text-xs">X</span>
                </div>
                <span className="font-bold text-sm text-red-800">Skip It</span>
              </div>
              <p className="text-xs text-gray-600 font-medium">"Overpriced & hard to clean."</p>
            </motion.div>
          </div>

          {/* Decorative Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[var(--color-primary)]/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
