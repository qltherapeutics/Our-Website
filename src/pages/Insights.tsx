import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Insights = () => {
  return (
    <div className="pt-24">
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="Knowledge Hub" 
            title="Latest Insights" 
            centered 
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Pharmaceutical Manufacturing Standards", date: "Oct 12, 2025" },
              { title: "Nutraceutical Market Trends", date: "Nov 05, 2025" },
              { title: "GMP Compliance in Global Markets", date: "Dec 20, 2025" }
            ].map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md group cursor-pointer"
              >
                <div className="image-placeholder h-56 rounded-none">
                  Article Image
                </div>
                <div className="p-8">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest">{post.date}</span>
                  <h3 className="text-xl font-bold text-primary mt-2 mb-4 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                    Exploring the latest advancements and regulatory shifts in the global pharmaceutical landscape.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    Read More <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
