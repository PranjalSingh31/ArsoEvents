import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Star } from "lucide-react";
import logo from "figma:asset/65d2783b9e3d1ff479a4c42edb0f516e925bc41f.png";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1724847664518-c62583f1bf69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NjM3MDMwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury Event Decoration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star className="w-4 h-4 text-amber-400/30" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={logo} 
              alt="ARSO Events Logo" 
              className="h-24 md:h-32 w-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white mb-6 relative"
        >
          <span className="inline-block relative">
            Turning Dreams into Reality
            <motion.div
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-rose-400 origin-left"
            ></motion.div>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/90 text-xl md:text-2xl mb-8 italic"
        >
          Because life should be celebrated!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-amber-500 to-rose-500 p-[2px] rounded-2xl inline-block mb-12"
        >
          <div className="bg-black/80 backdrop-blur-sm px-8 py-6 rounded-2xl">
            <p className="text-white text-2xl md:text-3xl">
              We Make Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">EVENT</span>
            </p>
            <p className="text-white text-2xl md:text-3xl">Stand Out From The Rest</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-full hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
            Plan Your Event
          </a>
          <a href="#about" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full hover:bg-white/20 transition-all duration-300">
            Learn More
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}