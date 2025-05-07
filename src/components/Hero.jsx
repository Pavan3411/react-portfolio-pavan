import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/kevinRushProfile.png';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiDownload, FiMail } from 'react-icons/fi';
import Typewriter from 'typewriter-effect';

// Animation variants
const container = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { 
      duration: 0.5, 
      delay: delay,
      ease: [0.25, 0.1, 0.25, 1] 
    },
  },
});

const imageAnimation = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "backOut"
    }
  }
};

const gradientText = {
  background: "linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent"
};

const Hero = () => {
  return (
    <div className="relative border-b border-neutral-800 pb-24 lg:pb-36">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-[url('../assets/grid.svg')]"></div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mx-auto max-w-7xl px-6">
        <div className="w-full lg:w-1/2 space-y-8">
        <motion.h1
  variants={container(0)}
  initial="hidden"
  animate="visible"
  className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
>
  <span className="inline-flex flex-col sm:flex-row sm:whitespace-nowrap gap-x-2">
    <span>Hi, I'm</span>
    <span style={gradientText}>Pavan Suthar</span>
  </span>
</motion.h1>
          
          <motion.div
  variants={container(0.3)}
  initial="hidden"
  animate="visible"
  className="flex items-center gap-4"
>
  <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-purple-600"></div>
  <div className="text-xl md:text-2xl font-medium tracking-tight" style={gradientText}>
    <Typewriter
      options={{
        strings: ['Mern Stack Developer', 'React.js Developer', 'Node.js Developer', 'Next.js Developer'],
        autoStart: true,
        loop: true,
        delay: 30,
        deleteSpeed: 30,
      }}
    />
  </div>
</motion.div>
          
          <motion.p
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className="text-lg text-neutral-400 max-w-xl leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>
          
          <motion.div
      variants={container(0.9)}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap gap-4 mt-8"
    >
      {/* Updated Email Button with Fallback */}
<button
  onClick={() => {
    try {
      window.location.href = "mailto:sutharpavan9153@gmail.com";
      console.log("clicked email")
    } catch (e) {
      navigator.clipboard.writeText("sutharpavan9153@gmail.com");
      alert("Email copied to clipboard!");
    }
  }}
  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
>
  <FiMail />
  Get In Touch
</button>
      {/* Resume Download Button */}
      <a 
    href="/Resume.pdf" 
    download="Pavan_Suthar_Resume.pdf"
    rel="noopener noreferrer"
    className="px-6 py-3 border border-neutral-700 rounded-lg font-medium flex items-center gap-2 hover:bg-neutral-800 transition-colors"
  >
    <FiDownload />
    Download Resume
  </a>
    </motion.div>
          
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
        <motion.div
  initial="hidden"
  animate="visible"
  variants={imageAnimation}
  className="relative"
  whileHover={{ scale: 1.05 }}
>
  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-600/20 blur-xl animate-pulse"></div>
  <motion.img 
    src={profilePic} 
    alt="Pavan Suthar" 
    className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-neutral-800 shadow-xl"
    animate={{
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
  />
</motion.div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Hero;