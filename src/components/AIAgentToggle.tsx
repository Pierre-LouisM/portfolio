'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StructuredData {
  personal: {
    name: string;
    title: string;
    description: string;
    location: string;
    languages: string[];
  };
  experience: {
    title: string;
    organization: string;
    period: string;
    description: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
    status: string;
    link: string;
  }[];
  contact: {
    linkedin: string;
    email: string;
  };
}

const structuredData: StructuredData = {
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
  const [isToggled, setIsToggled] = useState(false);
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
        onClick={() => setIsToggled(!isToggled)}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200",
          isToggled 
            ? "bg-gray-900 text-white border border-gray-900" 
            : "border border-gray-300 hover:bg-gray-50 text-gray-700"
        )}
      >
        <Bot size={16} />
        AI Agent
      </button>

      <AnimatePresence>
        {isToggled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-16 p-4 overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsToggled(false);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[calc(100vh-8rem)] overflow-hidden shadow-2xl my-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h2 className="text-xl font-semibold">AI Agent Data</h2>
                  <p className="text-gray-600 mt-1">Structured portfolio data for AI consumption</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopy}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-lg transition-colors",
                      copied 
                        ? "bg-green-100 text-green-800" 
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    )}
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? "Copied!" : "Copy JSON"}
                  </button>
                  <button
                    onClick={() => setIsToggled(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6 overflow-auto max-h-[60vh]">
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Usage Instructions</h3>
                  <p className="text-gray-700 text-sm">
                    This structured data contains comprehensive information about Pierre-Louis Monnot&apos;s professional background, 
                    skills, projects, and contact information in a machine-readable JSON format. AI agents can use this data to:
                  </p>
                  <ul className="text-gray-700 text-sm mt-2 space-y-1">
                    <li>• Generate professional summaries and introductions</li>
                    <li>• Answer questions about experience and capabilities</li>
                    <li>• Provide project recommendations and technical insights</li>
                    <li>• Facilitate networking and collaboration opportunities</li>
                  </ul>
                </div>

                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto text-sm font-mono">
                  {JSON.stringify(structuredData, null, 2)}
                </pre>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}