import React from "react";
import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const Leadership = () => {
  return (
    <div className="pt-20">

{/* HERO */}
<section className="section-padding bg-primary text-white text-center">

<div className="max-w-4xl mx-auto">

<h1 className="text-4xl md:text-5xl font-bold mb-6">
Our Leadership
</h1>

<p className="text-white/80 text-lg">
Experienced healthcare professionals guiding QL Therapeutics to expand access of high-quality pharmaceutical and nutraceutical solutions across emerging markets.
</p>

</div>

</section>



{/* LEADERSHIP PROFILES */}
<section className="section-padding bg-slate-50">

<div className="max-w-7xl mx-auto">

<SectionHeading
subtitle="Leadership Team"
title="Driving QL Therapeutics Forward"
centered
/>

<div className="grid md:grid-cols-2 gap-12 mt-16">

{/* Vineet Shiva */}
<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
whileHover={{y:-10}}
className="bg-white rounded-3xl shadow-xl overflow-hidden"
>

<div className="p-8 flex flex-col items-center text-center">

<img
src="/vineet.jpg"
alt="Vineet Shiva"
className="h-40 w-40 object-cover rounded-full mb-6"
/>

<h3 className="text-2xl font-bold text-primary">
Vineet Shiva
</h3>

<p className="text-accent font-semibold">
Founder
</p>
<p className="text-accent font-semibold mb-4">
Director, Commercial Expert
</p>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
30 Years of Global Pharmaceutical Experience Across India, Europe, and Africa.
Experienced in Leading and Scaling Businesses
</p>

<ul className="space-y-2 text-sm text-slate-600 text-left">
<li>• Built strong commercial & regulatory networks</li>
<li>• Deep expertise in African healthcare markets</li>
<li>• Strategic partnerships across emerging markets</li>
</ul>

<a
href="https://www.linkedin.com/in/vineet-shiva-7209076/"
target="_blank"
className="flex items-center gap-2 mt-6 text-primary font-semibold"
>
<Linkedin size={18}/>
LinkedIn Profile
</a>

</div>

</motion.div>



{/* Madhu Swarna */}
<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
whileHover={{y:-10}}
className="bg-white rounded-3xl shadow-xl overflow-hidden"
>

<div className="p-8 flex flex-col items-center text-center">

<img
src="/madhu.jpg"
alt="Madhu Swarna"
className="h-40 w-40 object-cover rounded-full mb-6"
/>

<h3 className="text-2xl font-bold text-primary">
Madhu Swarna
</h3>

<p className="text-accent font-semibold">
Founder
</p>
<p className="text-accent font-semibold mb-4">
Director, Technical Expert
</p>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
Over 23 Years of Global Healthcare Industry Experience
</p>

<ul className="space-y-2 text-sm text-slate-600 text-left">
<li>• Conducted 50+ global regulatory audits</li>
<li>• Expertise with SAHPRA, FDA & WHO standards</li>
<li>• Extensive compliance & regulatory experience</li>
<li>• Portfolio development & product launches</li>
</ul>

<a
href="https://www.linkedin.com/in/madhu-babu-swarna-906ab425/"
target="_blank"
className="flex items-center gap-2 mt-6 text-primary font-semibold"
>
<Linkedin size={18}/>
LinkedIn Profile
</a>

</div>

</motion.div>

</div>

</div>

</section>



{/* EXPERIENCE STATS */}
<section className="section-padding bg-white text-center">

<div className="max-w-6xl mx-auto">

<SectionHeading
subtitle="Leadership Experience"
title="Decades of Global Healthcare Expertise"
centered
/>

<div className="grid md:grid-cols-3 gap-10 mt-12">

<div>
<h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
<p className="text-slate-500">Regulatory Audits</p>
</div>

<div>
<h3 className="text-4xl font-bold text-primary mb-2">30+</h3>
<p className="text-slate-500">Years Industry Experience</p>
</div>

<div>
<h3 className="text-4xl font-bold text-primary mb-2">3</h3>
<p className="text-slate-500">Continents Experience</p>
</div>

</div>

</div>

</section>

</div>
  );
};

export default Leadership;
