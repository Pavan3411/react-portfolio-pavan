import React from 'react'
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Identify internship projects
  const internshipProjects = ["Sports Website-SportSpark", "Customer-Centric B2B Product Platform"];
  
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-50}}
        transition={{duration: 0.5}}
        className='my-20 text-center text-4xl font-bold'
      >
        My <span className="text-neutral-500">Projects</span>
      </motion.h1>
      
      <div className="mx-auto max-w-5xl px-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className={`mb-16 flex flex-col lg:flex-row gap-8 items-start ${internshipProjects.includes(project.title) ? "border-l-4 border-purple-500 pl-4" : ""}`}
          >
            {/* Project Image */}
            <motion.div 
              className={`w-full lg:w-1/3 relative group ${internshipProjects.includes(project.title) ? "mt-2" : ""}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={project.image} 
                className="w-full h-48 object-cover rounded-lg shadow-lg border border-neutral-800"
                alt={project.title}
              />
              {internshipProjects.includes(project.title) && (
                <div className="absolute -top-3 -left-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                  Professional Experience
                </div>
              )}
            </motion.div>

            {/* Project Content */}
            <div className="w-full lg:w-2/3">
              <h6 className='mb-2 text-xl font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-2 py-1 text-xs rounded ${internshipProjects.includes(project.title) ? "bg-purple-900/30 text-purple-300 border border-purple-800" : "bg-neutral-800 text-neutral-300"}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {/* Show GitHub for all projects */}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors px-3 py-1.5 bg-neutral-900/50 rounded-lg border border-neutral-800 hover:border-purple-500/30"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </a>
                )}

                {/* Show live demo for specific projects */}
                {(project.title === "Customer-Centric B2B Product Platform" || 
                  project.title === "Food Delivery Website- Eatsify" ||
                  project.title === "Podcast Platform - VoiceCast" ||
                  project.title === "VES Business Website"
                  
                ) && project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-white bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-1.5 rounded-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects;