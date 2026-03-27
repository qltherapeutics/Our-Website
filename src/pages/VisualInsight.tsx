import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const categories = [
   { name: "Manufacturing Plant", key: "m" },
   { name: "Tablets & Capsules Manufacturing", key: "t" },
    { name: "Liquid Manufacturing Lines", key: "l" },
    { name: "Research & Development", key: "r" },
  { name: "Chemical & Micro Lab", key: "c" },

];

const allImages = [
  "m1.jpg","m2.jpg",
  "t1.jpg","t2.jpg","t3.jpg","t4.jpg","t5.jpg","t6.jpg","t7.jpg",
  "l1.jpg","l2.jpg","l3.jpg","l4.jpg","l5.jpg","l6.jpg","l7.jpg","l8.jpg",
  "r1.jpg","r2.jpg","r5.jpg",
  "c1.jpg","c2.jpg","c3.jpg","c4.jpg","c5.jpg"
];

const VisualInsights = () => {
  const [active, setActive] = useState("m");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = allImages.filter(img => img.startsWith(active));

  return (
    <div className="pt-20">

     {/* 🔝 HERO */}
<section className="section-padding bg-primary text-white text-center">

  <div className="max-w-7xl mx-auto px-6">

    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-bold mb-6"
    >
      Visual Insights
    </motion.h1>

    <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
      Explore our world-class facilities, manufacturing excellence, and operations.
    </p>

  </div>

</section>
<section className="bg-white py-10 shadow-sm">

  <div className="max-w-7xl mx-auto px-6">

    <div className="flex flex-wrap justify-center gap-4">

      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => setActive(cat.key)}
          className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300
          ${
            active === cat.key
              ? "bg-accent text-white shadow-md"
              : "text-slate-600 hover:text-accent bg-slate-100 hover:bg-accent/10"
          }`}
        >
          {cat.name}
        </button>
      ))}

    </div>

  </div>

</section>

      {/* 🖼️ IMAGE GRID */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
          >

            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  key={img}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl cursor-pointer w-full max-w-[320px]"
                  onClick={() => setSelectedImage(img)}
                >

                  <img
                    src={`/Gallery/${img}`}
                    alt=""
                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>

                  {/* Hover Text */}
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition">
                    <p className="text-sm font-medium">View Image</p>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>

          </motion.div>

        </div>
      </section>

      {/* 🔍 LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >

            <motion.img
              src={`/Gallery/${selectedImage}`}
              className="max-h-[90vh] max-w-full rounded-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            />

            {/* Close Button */}
            <button className="absolute top-6 right-6 text-white">
              <X size={30} />
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default VisualInsights;
