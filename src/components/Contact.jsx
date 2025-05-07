import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const itemVariants = {
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

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/Pavan3411",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/pavan-suthar99/",
      label: "LinkedIn"
    },
    {
      icon: <FaTwitter className="text-xl" />,
      url: "https://x.com/pavansu88072690",
      label: "Twitter"
    }
  ];

  return (
    <div id="contact" className="border-b border-neutral-800 pb-24 relative">
      {/* Background decoration */}
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-64 h-64 rounded-full bg-purple-900/20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.h1
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-50}}
          transition={{duration: 0.5}}
          className="my-10 text-center text-4xl font-bold"
        >
          Get in <span className="text-purple-500">Touch</span>
        </motion.h1>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
          className="max-w-2xl mx-auto text-center space-y-4"
        >
          <motion.div variants={itemVariants}>
            <div className="flex justify-center items-center gap-3">
              <FaMapMarkerAlt className="text-purple-500" />
              <p className="text-neutral-400">{CONTACT.address}</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex justify-center items-center gap-3">
              <FaPhone className="text-purple-500" />
              <a href="tel:+91 9328496120" className="text-neutral-400">{CONTACT.phoneNo}</a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <a 
              href={`mailto:${CONTACT.email}`} 
              className="inline-flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors border-b border-purple-500/30 hover:border-purple-400 pb-1"
            >
              <FaEnvelope className="text-purple-500" />
              {CONTACT.email}
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8">
            <p className="text-sm text-neutral-500">{CONTACT.copyright}</p>
          </motion.div>
        </motion.div>

        {/* Social links */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6 mt-12"
        >
          {socialLinks.map((social) => (
            <motion.a 
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-neutral-400 hover:text-white transition-colors p-3 rounded-full border border-neutral-800 hover:border-purple-500/30 hover:bg-neutral-900/50 relative group"
              aria-label={social.label}
            >
              {social.icon}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-neutral-100 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {social.label}
            </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;