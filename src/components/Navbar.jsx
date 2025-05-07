import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/pavanlogo.png";
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from 'react-icons/fa6';

const Navbar = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/pavan-suthar99/',
      label: 'LinkedIn',
      color: 'text-blue-500 hover:text-blue-400'
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/Pavan3411',
      label: 'GitHub',
      color: 'text-gray-100 hover:text-gray-300'
    },
    {
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/_mr_honest.00?igsh=MWJkeDZxdm12enNnMQ==',
      label: 'Instagram',
      color: 'text-pink-500 hover:text-pink-400'
    },
    {
      icon: <FaSquareXTwitter />,
      url: 'https://x.com/pavansu88072690?t=w7fSjBRBjQM93bZTu0yUcQ&s=08',
      label: 'Twitter',
      color: 'text-gray-100 hover:text-gray-300'
    }
  ];

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 mb-20 flex items-center justify-between py-6 px-6 lg:px-12 backdrop-blur-sm bg-neutral-900/50 border-b border-neutral-800"
    >
      <motion.div 
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-shrink-0 items-center"
      >
        <motion.img 
          whileHover={{ rotate: 15, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=""
          src={logo} 
          alt="Pavan Suthar Logo" 
        />
        <span className="ml-3 text-xl font-medium hidden md:block">Pavan Suthar</span>
      </motion.div>

      <div className="flex items-center gap-4 lg:gap-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            custom={index}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${link.color} transition-colors duration-300 relative group`}
            aria-label={link.label}
          >
            {link.icon}
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-neutral-100 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {link.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;