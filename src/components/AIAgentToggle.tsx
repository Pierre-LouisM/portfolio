'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Copy, Check } from 'lucide-react';

const structuredData = {
  personal: {
    name: "Pierre-Louis Monnot",
    title: "AI Founder solving real problems",
    description: "I build intelligent systems that make a meaningful impact. Based in Brooklyn, I love experimenting with new technologies and creating solutions that matter.",
    location: "Greenpoint, Brooklyn NY",
    languages: ["French (Native)", "English (Native)", "Spanish (Professional)"]
  },
  experience: [
    {
      title: "Founder",
      organization: "Y Combinator S24",
      period: "2024",
      description: "Built AI-powered solutions as part of the world's premier startup accelerator."
    },
    {
      title: "Previous Experience",
      organization: "Palantir Technologies",
      period: "",
      description: "Technology experience at leading data analytics company."
    },
    {
      title: "Education",
      organization: "INSEAD",
      period: "",
      description: "Business education focused on technology innovation and entrepreneurship."
    }
  ],
  skills: [
    {
      category: "AI & Development",
      items: ["Python", "AI/ML", "Full-Stack Development", "Problem Solving"]
    },
    {
      category: "Entrepreneurship",
      items: ["Y Combinator", "Product Building", "Technology Innovation"]
    }
  ],
  projects: [
    {
      name: "WedSeats",
      description: "AI wedding seating planner that takes the headache out of table assignments",
      technologies: ["AI/ML", "React", "Python"],
      status: "Live",
      link: "https://wedseats.com/"
    },
    {
      name: "MCP Zone", 
      description: "Directory of 254+ AI tools for developers to supercharge Claude",
      technologies: ["AI Directory", "Developer Tools", "Community"],
      status: "Live",
      link: "https://mcp-zone.com"
    }
  ],
  contact: {
    linkedin: "https://www.linkedin.com/in/plmonnot/",
    email: "contact@pierrelouismonnot.com"
  }
};

export default function AIAgentToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(structuredData, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 border border-gray-300 hover:bg-gray-50 text-gray-700 ${
          isOpen ? 'bg-gray-100' : ''
        }`}
      >
        <Bot size={16} />
        AI Agent
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">AI Agent Data</h2>
                  <p className="text-gray-600 text-sm mt-1">Structured portfolio data for AI consumption</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      copied 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? 'Copied!' : 'Copy JSON'}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Usage Instructions</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    This structured data contains comprehensive information about Pierre-Louis Monnot&apos;s 
                    professional background, skills, projects, and contact information in JSON format.
                  </p>
                  <div className="text-gray-700 text-sm space-y-1">
                    <div>• Generate professional summaries and introductions</div>
                    <div>• Answer questions about experience and capabilities</div>
                    <div>• Provide project recommendations and insights</div>
                    <div>• Facilitate networking opportunities</div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-gray-100 text-sm font-mono whitespace-pre-wrap">
                    {JSON.stringify(structuredData, null, 2)}
                  </pre>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}