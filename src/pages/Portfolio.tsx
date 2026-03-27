import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Portfolio = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    "Tablets", "Capsules", "Liquids", "Powders", 
    "Spreads", "Sports Nutrition", "Personal Care", "Plant Based Nutrition"
  ];

  return (
    <div className="pt-24">
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="Our Products" 
            title="Product Portfolio" 
            centered 
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((cat, idx) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md group"
              >
                <div className="image-placeholder h-48 rounded-none">
                  {cat} Image
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{cat}</h3>
                  <p className="text-slate-500 text-sm mb-6">High-quality {cat.toLowerCase()} formulations for global markets.</p>
                  <button 
                    onClick={() => setSelectedProduct(cat)}
                    className="flex items-center gap-2 text-accent font-bold text-sm group-hover:gap-3 transition-all"
                  >
                    Inquire Now <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 md:p-12 overflow-hidden"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold text-primary mb-2">Product Inquiry</h3>
              <p className="text-slate-500 mb-8">Inquiring about: <span className="text-accent font-bold">{selectedProduct}</span></p>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSelectedProduct(null); alert('Thank you for your inquiry! We will get back to you soon.'); }}>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary uppercase">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-accent" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary uppercase">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-accent" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary uppercase">Message</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-accent" placeholder="Tell us more about your requirements..."></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-4 mt-4">Submit Inquiry</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
