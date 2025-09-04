'use client';

import { motion } from 'framer-motion';

const companies = [
  {
    name: 'Y Combinator',
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-orange-500 rounded-sm flex items-center justify-center">
          <span className="text-white font-bold text-sm">Y</span>
        </div>
        <span className="text-gray-700 font-medium hidden sm:block">Y Combinator</span>
      </div>
    )
  },
  {
    name: 'Palantir',
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-sm flex items-center justify-center">
          <span className="text-white font-bold text-xs">P</span>
        </div>
        <span className="text-gray-700 font-medium hidden sm:block">Palantir</span>
      </div>
    )
  },
  {
    name: 'INSEAD',
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
          <span className="text-white font-bold text-xs">I</span>
        </div>
        <span className="text-gray-700 font-medium hidden sm:block">INSEAD</span>
      </div>
    )
  }
];

export default function CredibilityBanner() {
  return (
    <section className="py-16 border-b border-gray-200/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-8 font-medium tracking-wide uppercase">
            Previously at
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-16">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-gray-50/80 hover:scale-105 cursor-default"
              >
                {company.logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}