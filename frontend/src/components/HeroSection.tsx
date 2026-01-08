import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('babywise_email', email);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000); // Reset after 5s
      setEmail('');
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E0F7FA] to-[#FFFEF7] pt-20 pb-32 md:pt-32 md:pb-48">
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
          <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-6">
            <span className="text-sm font-bold text-[var(--color-primary)] tracking-wide uppercase">Coming Soon</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-[#333]">
            Stop Overthinking <br />
            <span className="text-[var(--color-primary)]">Baby Gear.</span> <br />
            Start Shopping <span className="text-[var(--color-secondary)]">Smarter.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            AI-powered advice that cuts through the hype and tells you exactly what to buy (and what to skip) for your baby.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email for early access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-full border-2 border-transparent focus:border-[var(--color-primary)] focus:outline-none shadow-sm text-lg bg-white"
              />
              <button type="submit" className="bg-gradient-to-r from-[var(--color-primary)] to-[#A8D8EA] text-white px-8 py-4 rounded-full font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
                Get Early Access <ArrowRight size={20} />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl inline-flex items-center gap-3"
            >
              <div className="bg-green-100 p-2 rounded-full">
                <Check size={20} className="text-green-600" />
              </div>
              <div>
                <p className="font-bold">You're on the list!</p>
                <p className="text-sm">Check your inbox for confirmation.</p>
              </div>
            </motion.div>
          )}

          <div className="mt-8 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p>Join 2,000+ waiting parents</p>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl animate-float">
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
              className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Check size={16} />
                </div>
                <span className="font-bold text-sm text-green-800">Great Choice!</span>
              </div>
              <p className="text-xs text-gray-600">"This stroller fits perfectly in your trunk."</p>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-[180px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  <span className="font-bold text-xs">X</span>
                </div>
                <span className="font-bold text-sm text-red-800">Skip It</span>
              </div>
              <p className="text-xs text-gray-600">"Overpriced and hard to clean."</p>
            </motion.div>
          </div>

          {/* Decorative Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
