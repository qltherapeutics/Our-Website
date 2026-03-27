import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, Beaker, Users, ArrowRight, Leaf, Pill } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

const Home = () => {

  const { scrollYProgress, scrollY } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const videoScale = useTransform(scrollY, [0, 600], [1.15, 1]);
  const videoY = useTransform(scrollY, [0, 600], ["0%", "20%"]);

  // ✅ Mobile detection (CORRECT WAY)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // run on mount
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  

  const showPortfolioButton = false;

  return (
    <div>

{/* Hero Section */}
<section className="relative h-screen flex items-center overflow-hidden">

  {/* VIDEO BACKGROUND */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <motion.video
      autoPlay
      loop
      muted
      playsInline
      style={{ scale: videoScale, y: videoY }}
      className="w-full h-full object-cover"
    >
      <source src="https://res.cloudinary.com/dvlydjoke/video/upload/v1774483980/hero-video_d2rlo5.mp4" type="video/mp4" />
    </motion.video>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540]/95 via-[#0a2540]/60 to-transparent z-10" />
    <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ repeat: Infinity, duration: 6 }}
    className="absolute top-20 left-10 opacity-20 z-20"
   >
  <Beaker size={80} />
   </motion.div>
  </div>

  <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl"
    >
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        The Edge of Innovation.
        <br />
        <span className="text-accent">The Heart of Care.</span>
      </h1>

      <div className="text-xl text-white/80 mb-10 max-w-2xl leading-relaxed space-y-2">

  <p>
    Pharmaceuticals & Nutraceuticals. Contract Manufacturing & Licensing.
    </p>

  <p className="text-white/80">
    Serving India, Africa and Regulated Markets Worldwide
  </p>

</div>

      <div className="flex flex-wrap gap-4">
  <Link to="/capabilities" className="btn-accent">
    Explore Capabilities
  </Link>

  {showPortfolioButton && (
    <Link
      to="/portfolio"
      className="btn-outline border-white text-white hover:bg-white hover:text-primary"
    >
      View Product Portfolio
    </Link>
  )}
</div>
    </motion.div>
  </div>

  <motion.div
    style={{ opacity }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
  >
    <ChevronRight className="rotate-90" size={32} />
  </motion.div>

</section>


{/* ABOUT SECTION */}
<section className="section-padding bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* ✅ ATTACHED CONTAINER */}
    <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-lg items-stretch">

      {/* 🔴 LEFT VIDEO (NO STRETCH) */}
      {/* 🔴 LEFT VIDEO (FIXED & CLEAN) */}
<div className="relative h-full">

  <video
    src="https://res.cloudinary.com/dvlydjoke/video/upload/v1774485223/about-video_yj33wi.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/20"></div>

</div>

      {/* 🟢 RIGHT CONTENT (CONTROLS HEIGHT) */}
      <motion.div
        initial={{ opacity:0, x:30 }}
        whileInView={{ opacity:1, x:0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once:true }}
        className="group relative p-6 md:p-8 bg-white flex flex-col justify-center"
      >

        {/* Hover background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div className="relative z-10">
       
          <div className="group-hover:[&_h2]:text-white transition-colors duration-500">
  <SectionHeading
    subtitle="About QL Therapeutics"
    title="Building Accessible Healthcare for Emerging Markets"
  />
</div>

          <p className="text-base md:text-lg text-slate-600 mb-4 group-hover:text-white/90 transition duration-500">
            QL Therapeutics is a purpose-driven pharmaceutical and nutraceutical
            company committed to bridging the healthcare gap in emerging markets.
          </p>

          <p className="text-base md:text-lg text-slate-600 mb-6 group-hover:text-white/90 transition duration-500">
            Our focus spans branded generics, specialty pharmaceuticals and
            nutraceuticals supported by end-to-end product development and
            global distribution partnerships.
          </p>

          <Link
            to="/about"
            className="btn-primary inline-flex items-center gap-2 group-hover:bg-white group-hover:text-primary transition"
          >
            Learn More <ArrowRight size={18}/>
          </Link>

        </div>

      </motion.div>

    </div>

  </div>
</section>

{/* LEADERSHIP PREVIEW */}
<section className="section-padding bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <SectionHeading
      subtitle="Leadership"
      title="Experienced Healthcare Leaders"
      centered
    />

    <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-5xl mx-auto">
      
      {/* Card 1: Vineet Shiva */}
      <div className="group bg-white rounded-[2rem] shadow-md overflow-hidden border border-slate-100 flex flex-col">
        
    <motion.div 
  className="aspect-[4/5] overflow-hidden bg-slate-200 relative"
>
  {isMobile ? (
    // 📱 MOBILE → Scroll animation
    <motion.img
      src="/vineet.jpg"
      alt="Vineet Shiva"
      className="w-full h-full object-cover transition-all duration-500"
      initial={{ filter: "grayscale(100%)", scale: 1 }}
      whileInView={{ filter: "grayscale(0%)", scale: 1.05 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  ) : (
    // 💻 DESKTOP → Pure Tailwind hover
    <img
      src="/vineet.jpg"
      alt="Vineet Shiva"
      className="w-full h-full object-cover transition-all duration-500
        grayscale 
        group-hover:grayscale-0 
        group-hover:scale-105
        group-active:grayscale-0
        group-active:scale-105"
    />
  )}
</motion.div>

        <div className="p-8 pt-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-1">
            Mr. Vineet Shiva
          </h3>
          <p className="text-slate-500 font-medium ">
            Founder
          </p>

          <p className="text-slate-500 font-medium mb-6 ">
            Director, Commercial Expert
          </p>
          
          <div className="flex items-center justify-between">
            
            <Link 
              to="/leadership" 
              className="flex items-center gap-3 px-5 py-2.5 bg-slate-100  hover:text-white text-slate-700 rounded-full text-sm font-semibold transition-all group/btn"
            >
              View Full Bio 
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-600 text-white group-hover/btn:bg-white group-hover/btn:text-indigo-600 transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/vineet-shiva-7209076/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Card 2: Madhu Swarna */}
      <div className="group bg-white rounded-[2rem] shadow-md overflow-hidden border border-slate-100 flex flex-col">
        
        {/* ✅ UPDATED: motion div added */}
<motion.div 
  className="aspect-[4/5] overflow-hidden bg-slate-200 relative"
>
  {isMobile ? (
    // 📱 MOBILE → Scroll animation
    <motion.img
      src="/madhu.jpg"
      alt="Madhu Swarna"
      className="w-full h-full object-cover transition-all duration-500"
      initial={{ filter: "grayscale(100%)", scale: 1 }}
      whileInView={{ filter: "grayscale(0%)", scale: 1.05 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  ) : (
    // 💻 DESKTOP → Pure hover
    <img
      src="/madhu.jpg"
      alt="Madhu Swarna"
      className="w-full h-full object-cover transition-all duration-500
        grayscale 
        group-hover:grayscale-0 
        group-hover:scale-105
        group-active:grayscale-0
        group-active:scale-105"
    />
  )}
</motion.div>

        <div className="p-8 pt-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-1">
            Mr. Madhu Swarna
          </h3>
          <p className="text-slate-500 font-medium ">
            Founder
          </p>
          <p className="text-slate-500 font-medium mb-6">
            Director, Technical Expert
          </p>
          <div className="flex items-center justify-between">
            
            <Link 
              to="/leadership" 
              className="flex items-center gap-3 px-5 py-2.5 bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-700 rounded-full text-sm font-semibold transition-all group/btn"
            >
              View Full Bio 
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-600 text-white group-hover/btn:bg-white group-hover/btn:text-indigo-600 transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/madhu-babu-swarna-906ab425/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* CAPABILITIES */}
<section className="section-padding relative overflow-hidden">

  {/* 🎥 BACKGROUND VIDEO */}
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover opacity-60"
    >
      <source src="https://res.cloudinary.com/dvlydjoke/video/upload/v1774484371/capabilities-video1_hiamig.mp4" type="video/mp4" />
    </video>

    {/* LIGHT OVERLAY (so text is readable but video visible) */}
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
      Core Capabilities
    </h2>

    {/* ✅ ZIG-ZAG LAYOUT (UNCHANGED STYLE) */}
    <div className="flex flex-col gap-12 max-w-4xl mx-auto">

      {[
        {
          title:"Nutraceutical ",
          desc:"",
          icon:<Leaf/>,
          image:"/nutraceutical1.jpg"
        },
        {
          title:"Pharmaceutical ",
          desc:"",
          icon:<Pill/>,
          image:"/pharma1.jpg"
        }
      ].map((item,idx)=>(

        <motion.div
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.15 }}
          className={`group relative rounded-3xl overflow-hidden h-[320px] w-full md:w-[70%] ${
            idx % 2 !== 0 ? "ml-auto" : "mr-auto"
          }`}
        >
         
         
          

          <img
            src={item.image}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <div className="relative p-10 flex flex-col justify-end h-full text-left">

            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3 text-white">
              {item.title}
            </h3>

            <p className="text-white/80 text-sm mb-4">
              {item.desc}
            </p>

            <Link to="/capabilities" className="text-accent font-semibold">
              Learn More →
            </Link>

          </div>

        </motion.div>
      ))}

    </div>

  </div>

</section>




{/* CTA */}
<section className="section-padding bg-white">

  <div className="max-w-6xl mx-auto">

    <div className="relative overflow-hidden rounded-3xl px-12 py-16 text-center shadow-2xl">

      {/* BACKGROUND IMAGE */}
      <img
        src="/cta-bg.jpg"
        alt="CTA Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-white">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Partner with QL Therapeutics
        </h2>

        <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
          Collaborate with us for Pharmaceutical and Nutraceutical Development, Manufacturing, and Licensing 
        </p>

        <Link
          to="/contact"
          className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition duration-300"
        >
          START COLLABORATION
        </Link>

      </div>

    </div>

  </div>

</section>
</div>
  );
};

export default Home;
