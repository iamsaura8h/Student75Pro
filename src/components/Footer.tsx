import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#E1E1E1] text-gray-600 py-2 "
    >
      <div className="max-w-screen mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <motion.img 
              src="logosvg.svg" 
              alt="logo" 
              className="h-4 w-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <span className="font-normal font-giest">Student75</span>
          </div>

          {/* Owner */}
          <div className='font-normal font-giest'>
            <h2>created by Saurabh</h2>
          </div>

          {/* Social Links and Copyright */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <motion.a
              href="https://github.com/iamsaura8h/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/saurabh-kumar-sk1107/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={18} />
            </motion.a>
            <span className="text-gray-500">|</span>
            <span>&copy; {currentYear}</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
