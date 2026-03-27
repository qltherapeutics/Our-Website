import React from "react";
import { motion } from "motion/react";
import {
  Users,
  Globe,
  TrendingUp,
  CheckCircle2,
  Factory,
  FlaskConical,
  Pill,
  Leaf,
  Beaker,
  FileCheck,
  ShieldCheck

} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import StatCard from "../components/StatCard";

const About = () => {
  return (
    <div className="pt-20">

      {/* HERO VIDEO */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">

        <div className="absolute inset-0">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/dvlydjoke/video/upload/v1774484137/about-hero1_vxkark.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/65"></div>

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white ">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Building Accessible Healthcare
          </motion.h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Delivering Innovative Pharmaceutical and Nutraceutical Solutions for Emerging Markets Worldwide
          </p>

        </div>

      </section>



      {/* ABOUT OVERVIEW */}
<section className="section-padding bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >

        <SectionHeading
          subtitle="About QL Therapeutics"
          title="Building Accessible Healthcare for Emerging Markets"
        />

        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          QL Therapeutics was founded with a mission to bridge the healthcare
          gap in emerging markets by delivering accessible and high-quality
          pharmaceutical and nutraceutical solutions.
        </p>

        <div className="grid grid-cols-2 gap-6">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <CheckCircle2 size={20} />
            </div>
            <span className="font-semibold text-primary">
              Global Partnerships
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <CheckCircle2 size={20} />
            </div>
            <span className="font-semibold text-primary">
              Regulatory Expertise
            </span>
          </div>

        </div>

      </motion.div>


      {/* RIGHT SIDE - 2 IMAGES */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="grid gap-6"
      >

        {/* IMAGE (PRODUCTS ONLY) */}
<div className="group relative h-[260px] md:h-[320px] rounded-3xl overflow-hidden text-white flex items-end p-8 shadow-lg">

  <img
    src="/products.jpg"
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative">
    <h3 className="text-5xl md:text-6xl font-bold leading-none">300+</h3>
    <p className="text-base md:text-lg mt-2 opacity-90">Products</p>
  </div>

</div>

      </motion.div>

    </div>

  </div>

</section>

 {/* PURPOSE / VISION / MISSION */}
<section className="section-padding bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Purpose",
          content:
            "Patients first — delivering trusted healthcare solutions to improve lives across emerging markets.",
          icon: <Users className="text-accent group-hover:text-white transition-colors duration-500" size={32} />
        },
        {
          title: "Vision",
          content:
            "To become a trusted global healthcare partner delivering innovative pharmaceutical and nutraceutical solutions.",
          icon: <Globe className="text-accent group-hover:text-white transition-colors duration-500" size={32} />
        },
        {
          title: "Mission",
          content:
            "To empower health and well-being through end-to-end healthcare solutions and strategic partnerships.",
          icon: <TrendingUp className="text-accent group-hover:text-white transition-colors duration-500" size={32} />
        }
      ].map((item) => (

        <motion.div
          key={item.title}
          whileHover={{ y: -12, scale: 1.04 }}
          className="group relative bg-white p-10 rounded-3xl 
          shadow-2xl 
          hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)] 
          border border-slate-200 
          overflow-hidden transition-all duration-500"
        >

          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition duration-500 z-0"></div>

          {/* Content */}
          <div className="relative z-10 transition-colors duration-500">

            <div className="mb-6">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-white transition-colors duration-500">
              {item.title}
            </h3>

            <p className="text-slate-600 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
              {item.content}
            </p>

          </div>

        </motion.div>

      ))}

    </div>
  </div>
</section>

 {/* WHO WE ARE - PREMIUM */}
<section className="relative min-h-[70vh] lg:h-[90vh] overflow-hidden">

  {/* 🎥 BACKGROUND VIDEO */}
  <video
    src="https://res.cloudinary.com/dvlydjoke/video/upload/v1774518868/Untitled_design-3_rbsoow.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* CONTENT WRAPPER */}
  <div className="relative z-10 w-full h-full flex items-center justify-center lg:justify-end px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-0">

    {/* 🧾 RIGHT SIDE CARD (SLIGHTLY BIGGER) */}
    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 md:p-12 max-w-2xl shadow-xl text-left">

      <SectionHeading
        subtitle="Who We Are"
        title="Built by Healthcare Professionals"
      />

      {/* ✅ INCREASED TEXT SIZE */}
      <p className="text-lg md:text-xl text-slate-600 leading-relaxed mt-2">
        QLT was started by professionals who have spent decades working
        within the healthcare industry — not just discussing it but
        building, manufacturing, distributing and scaling healthcare
        businesses globally.
      </p>

    </div>

  </div>

</section>

{/* BUSINESS DIVISIONS */}
<section className="section-padding relative overflow-hidden bg-white">

  {/* 🌈 BACKGROUND DESIGN */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 relative">

    <SectionHeading
      subtitle="Our Businesses"
      title="Healthcare Across the Value Chain"
    />

    {/* 🔷 TOP 2 BIG CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-stretch">

      {[
        {
          title: "Pharmaceuticals",
          desc: "Manufacturing tablets, capsules, liquids and topicals to GMP standards.",
          icon: <Pill size={26} />
        },
        {
          title: "Nutraceuticals",
          desc: "Supplements, vitamins, herbal extracts and functional foods.",
          icon: <Leaf size={26} />
        }
      ].map((item, idx) => (

        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group relative bg-white p-10 rounded-3xl border-2 border-primary/40 shadow-lg overflow-hidden transition-all duration-500 cursor-default h-full flex flex-col"
        >

          {/* SAME HOVER EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent 
            opacity-0 group-hover:opacity-100 group-active:opacity-100 
            transition duration-500 z-0"
          ></div>

          <div className="relative z-10 transition-colors duration-500 text-center flex flex-col flex-grow justify-between">

            <div className="mb-6 flex justify-center">
              {React.cloneElement(item.icon, {
                className:
                  "text-accent group-hover:text-white group-active:text-white transition duration-500"
              })}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-primary 
              group-hover:text-white group-active:text-white transition duration-500">
              {item.title}
            </h3>

            <p className="text-slate-600 leading-relaxed 
              group-hover:text-white/90 group-active:text-white/90 transition duration-500">
              {item.desc}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

    {/* 🔶 BOTTOM 4 SMALL CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">

      {[
        {
          title: "Contract Manufacturing",
          desc: "End-to-end production support from formulation to export documentation.",
          icon: <Factory size={26} />
        },
        {
          title: "Contract Development",
          desc: "Custom formulation services for nutrition brands.",
          icon: <Beaker size={26} />
        },
        {
          title: "Dossier Licensing",
          desc: "Access to regulatory dossiers enabling faster market entry.",
          icon: <FileCheck size={26} />
        },
        {
          title: "Proprietary Nutition",
          desc: "Specialised nutritional formulations.",
          icon: <ShieldCheck size={26} />
        }
      ].map((item, idx) => (

        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group relative bg-white p-6 rounded-2xl border-2 border-primary/40 shadow-lg overflow-hidden transition-all duration-500 cursor-default h-full flex flex-col"
        >

          {/* SAME HOVER EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent 
            opacity-0 group-hover:opacity-100 group-active:opacity-100 
            transition duration-500 z-0"
          ></div>

          <div className="relative z-10 transition-colors duration-500 text-center flex flex-col flex-grow justify-between">

            <div className="mb-4 flex justify-center">
              {React.cloneElement(item.icon, {
                className:
                  "text-accent group-hover:text-white group-active:text-white transition duration-500"
              })}
            </div>

            <h3 className="text-lg font-bold mb-2 text-primary 
              group-hover:text-white group-active:text-white transition duration-500">
              {item.title}
            </h3>

            <p className="text-sm text-slate-600 
              group-hover:text-white/90 group-active:text-white/90 transition duration-500">
              {item.desc}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>
</section>

    </div>
  );
};

export default About;
