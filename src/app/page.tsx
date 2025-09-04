'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import AIAgentToggle from '@/components/AIAgentToggle';
import ContactForm from '@/components/ContactForm';
import CredibilityBanner from '@/components/CredibilityBanner';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 z-40 w-full transition-all duration-500 ${
          isScrolled 
            ? 'py-2' 
            : 'py-4'
        }`}
        animate={{
          y: isScrolled ? 12 : 0,
        }}
      >
        <motion.div
          className={`mx-auto transition-all duration-500 ${
            isScrolled 
              ? 'max-w-md px-6 py-3 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-full shadow-lg shadow-gray-900/10' 
              : 'max-w-4xl px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-200/50'
          }`}
        >
          <div className="flex justify-between items-center">
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors cursor-pointer"
            >
              PLM
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`flex items-center transition-all duration-500 ${
                isScrolled ? 'gap-4' : 'gap-8'
              }`}
            >
              <a
                href="#projects"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Projects
              </a>
              <AIAgentToggle />
            </motion.div>
          </div>
        </motion.div>
      </motion.nav>
      
      {/* Spacer for fixed nav */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-indigo-50 via-white to-indigo-50/70">
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-black mb-6 leading-[0.9] tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
                Pierre-Louis
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
                Monnot
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl text-gray-600 mb-8 font-light"
            >
              AI Founder solving real problems
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              I build intelligent systems that make a meaningful impact. Based in Brooklyn, I love experimenting with new technologies and creating solutions that matter.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center justify-center gap-6"
            >
              <a
                href="#projects"
                className="group relative flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 font-medium"
              >
                View Projects
              </a>
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Credibility Banner */}
      <CredibilityBanner />


      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gradient-to-b from-white to-gray-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Things I&apos;ve Built
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Having fun experimenting with AI and building tools that solve real problems
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "WedSeats",
                description: "AI wedding seating planner that takes the headache out of table assignments",
                link: "https://wedseats.com/",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                title: "MCP Zone",
                description: "Directory of 254+ AI tools for developers to supercharge Claude",
                link: "https://mcp-zone.com",
                gradient: "from-blue-500 to-cyan-500"
              }
            ].map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative block"
              >
                <div className="relative p-8 bg-white rounded-3xl border border-gray-200/60 hover:border-gray-300/60 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-900/10 hover:-translate-y-2 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Status dot */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-500 font-medium">Live</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Link indicator */}
                  <div className="flex items-center gap-2 text-gray-800 font-medium group-hover:gap-3 transition-all">
                    <span>Visit site</span>
                    <ArrowUpRight size={20} className="group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
          
          {/* More projects teaser */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100/80 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600 font-medium">More projects cooking...</span>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-16 bg-gray-50/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-8 mb-6">
            <a
              href="https://www.linkedin.com/in/plmonnot/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-white/80 hover:bg-white border border-gray-200/60 hover:border-gray-300/60 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@pierrelouismonnot.com"
              className="group p-4 rounded-2xl bg-white/80 hover:bg-white border border-gray-200/60 hover:border-gray-300/60 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-500 font-light">
            Made in Brooklyn with curiosity and caffeine ☕
          </p>
        </div>
      </footer>
    </div>
  );
}
