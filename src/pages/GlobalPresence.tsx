import React from "react";
import { Globe, MapPin } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading";

const GlobalPresence = () => {
  return (
    <div className="pt-24">

{/* HERO SECTION */}
<section className="section-padding bg-primary text-white text-center">

<div className="max-w-4xl mx-auto">

<h1 className="text-4xl md:text-5xl font-bold mb-6">
Global Presence
</h1>

<p className="text-white/80 text-lg leading-relaxed">
QL Therapeutics is expanding across emerging markets with
strategic manufacturing partnerships, distribution networks,
and regulatory expertise across India and Africa.
</p>

</div>

</section>



{/* GOOGLE MAP LOCATION */}
<section className="section-padding bg-white">

<div className="max-w-7xl mx-auto">

<SectionHeading
subtitle="Headquarters"
title="QL Therapeutics Corporate Office"
centered
/>

<div className="rounded-3xl overflow-hidden shadow-xl mt-12">

<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7515220.527268085!2d62.785419925!3d23.113882599999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e830065f642f9%3A0x47fa0a1ca6caf472!2sQL%20Therapeutics%20-%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1773338812343!5m2!1sen!2sin"
className="w-full h-[450px]"
style={{ border: 0 }}
allowFullScreen=""
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
title="QL Therapeutics Location"
></iframe>

</div>

</div>

</section>



{/* REGIONAL PRESENCE */}
<section className="section-padding bg-slate-50">

<div className="max-w-7xl mx-auto">

<SectionHeading
subtitle="Regional Presence"
title="Growing Across Emerging Markets"
centered
/>

<div className="grid md:grid-cols-3 gap-8 mt-12">

{[
{
region: "Gandhinagar, India",
status: "Headquarters",
desc: "Strategic headquarters supporting manufacturing, regulatory strategy and global operations."
},
{
region: "South Africa",
status: "Established Hub",
desc: "Regional commercial hub supporting partnerships and healthcare distribution across Africa."
},
{
region: "Pan-Africa",
status: "Rapid Expansion",
desc: "Expanding distribution networks and healthcare collaborations across emerging African markets."
}
].map((item, idx) => (

<motion.div
key={idx}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: idx * 0.1 }}
whileHover={{ y: -8, scale: 1.03 }}
className="bg-white p-8 rounded-3xl shadow-lg flex gap-4 items-start"
>

<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<MapPin size={22}/>
</div>

<div>

<h4 className="font-bold text-primary text-lg">
{item.region}
</h4>

<p className="text-xs text-accent uppercase font-bold mb-2">
{item.status}
</p>

<p className="text-slate-500 text-sm leading-relaxed">
{item.desc}
</p>

</div>

</motion.div>

))}

</div>

</div>

</section>



{/* GLOBAL EXPANSION */}
<section className="section-padding bg-white">

<div className="max-w-7xl mx-auto text-center">

<SectionHeading
subtitle="International Reach"
title="Expanding Global Healthcare Access"
/>

<p className="text-slate-600 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
QL Therapeutics is actively building partnerships across emerging markets
with a focus on Africa and Asia. Through strong manufacturing capabilities,
regulatory expertise and global partnerships, we enable faster healthcare
product access and sustainable growth in underserved markets.
</p>

<div className="grid md:grid-cols-3 gap-10 mt-14">

{[
"India Manufacturing Base",
"Africa Distribution Network",
"Emerging Market Expansion"
].map((item, idx) => (

<motion.div
key={idx}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: idx * 0.1 }}
className="p-8 rounded-2xl bg-slate-50"
>

<Globe className="mx-auto text-primary mb-4" size={32}/>

<p className="font-semibold text-primary">
{item}
</p>

</motion.div>

))}

</div>

</div>

</section>

</div>
  );
};

export default GlobalPresence;