import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const techStack = [
  { icon: <RiReactjsLine className="text-5xl md:text-6xl text-cyan-400" />, name: "React", color: "border-cyan-400/20" },
  { icon: <TbBrandNextjs className="text-5xl md:text-6xl" />, name: "Next.js", color: "border-neutral-100/20" },
  { icon: <SiMongodb className="text-5xl md:text-6xl text-green-500" />, name: "MongoDB", color: "border-green-500/20" },
  { icon: <SiMysql className="text-5xl md:text-6xl text-orange-200" />, name: "MySQL", color: "border-orange-200/20" },
  { icon: <FaNodeJs className="text-5xl md:text-6xl text-green-500" />, name: "Node.js", color: "border-green-500/20" },
  { icon: <SiTailwindcss className="text-5xl md:text-6xl text-sky-500" />, name: "Tailwind CSS", color: "border-sky-500/20" },
];

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className='my-20 text-center text-4xl font-bold'
      >
        Tech <span className="text-neutral-500">Stack</span>
      </motion.h1>
      
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='flex flex-wrap items-center justify-center gap-8 px-4'
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={iconVariants(2 + index * 0.5)}
            initial="initial"
            animate="animate"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
              transition: { duration: 0.3 }
            }}
            className={`rounded-2xl border-2 ${tech.color} p-6 bg-neutral-900/50 backdrop-blur-sm relative overflow-hidden`}
          >
            {tech.icon}
            <motion.span 
              className="absolute bottom-2 left-0 right-0 text-center text-xs font-medium text-neutral-400"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {tech.name}
            </motion.span>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-neutral-800/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;