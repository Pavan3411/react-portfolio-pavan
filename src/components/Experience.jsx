import { EXPERIENCES } from '../constants';
import { motion } from "framer-motion";

const Experience = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      className='border-b border-neutral-800 pb-24'
      style={{
        background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.05) 0%, transparent 50%)"
      }}
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl font-bold'
      >
        Work <span className="text-neutral-500">Experience</span>
      </motion.h1>
      
      <div className="mx-auto max-w-5xl px-4">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="mb-12 flex flex-col lg:flex-row lg:gap-8"
          >
            {/* Year column */}
            <div className='lg:w-1/4 mb-4 lg:mb-0'>
              <p className='text-sm text-neutral-400'>{experience.year}</p>
            </div>
            
            {/* Experience card */}
            <div className="lg:w-3/4 relative">
              {/* Timeline dot */}
              <motion.div 
                className="hidden lg:block absolute left-[-35px] top-1 w-3 h-3 rounded-full bg-purple-500 border-2 border-purple-300"
                animate={{
                  scale: [1, 1.2, 1],
                  transition: { duration: 2, repeat: Infinity }
                }}
              />
              
              {/* Timeline line */}
              <div className="hidden lg:block absolute left-[-33px] top-4 bottom-0 w-px bg-gradient-to-b from-purple-500 to-transparent" />
              
              <motion.div 
                className="bg-neutral-900/50 hover:bg-neutral-900/70 transition-all duration-300 p-6 rounded-xl border border-neutral-800 hover:border-purple-500/30 shadow-lg"
                whileHover={{ 
                  y: -3,
                  boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.1)"
                }}
              >
                <h6 className='mb-2 text-lg font-semibold'>
                  {experience.role} - {' '}
                  <a 
                    href="http://www.enlighteninfosystems.com/" 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {experience.company}
                  </a>
                </h6>
                <p className='mb-4 text-neutral-400 leading-relaxed'>{experience.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.technologies.map((tech, index) => (
                    <motion.span 
                      key={index} 
                      className='px-3 py-1 rounded-full bg-neutral-800 text-sm font-medium text-purple-400 border border-neutral-700 hover:bg-purple-500/10 hover:border-purple-500/30 transition-all'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience;