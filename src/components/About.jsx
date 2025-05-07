import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="border-b border-neutral-800 pb-24 lg:pb-32 relative mt-5"
    >
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 -z-10 opacity-20">
        <div className="w-64 h-64 rounded-full bg-purple-500 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.h1 
          variants={item}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20"
        >
          About <span className="text-neutral-500">Me</span>
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
{/* Image Section - Enhanced Square */}
<motion.div
  variants={item}
  className="w-full lg:w-2/5 flex justify-center"
>
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }}
    whileHover={{
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    }}
    className="relative overflow-hidden rounded-xl shadow-xl w-full max-w-md aspect-square"
  >
    {/* Main Image */}
    <img
      className="w-full h-full object-cover"
      src={aboutImg}
      alt="About me"
    />
    
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />
    
    {/* Animated Border */}
    <motion.div
      className="absolute inset-0 border-2 border-neutral-800/50 rounded-xl pointer-events-none"
      animate={{
        borderColor: ["rgba(39, 39, 42, 0.5)", "rgba(139, 92, 246, 0.3)", "rgba(39, 39, 42, 0.5)"],
        transition: {
          duration: 4,
          repeat: Infinity
        }
      }}
    />
  </motion.div>
</motion.div>

          {/* Text Section */}
          <motion.div
            variants={container}
            className="w-full lg:w-1/2 space-y-6"
          >
            <motion.p 
              variants={item}
              className="text-lg text-neutral-400 leading-relaxed"
            >
              {ABOUT_TEXT}
            </motion.p>
            
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-neutral-800 rounded-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Frontend Development
                </span>
              </div>
              <div className="px-4 py-2 bg-neutral-800 rounded-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Backend Development
                </span>
              </div>
              <div className="px-4 py-2 bg-neutral-800 rounded-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Problem Solving
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;