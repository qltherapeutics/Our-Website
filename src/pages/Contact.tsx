import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import emailjs from 'emailjs-com';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';

const Contact = () => {

  
const [phone, setPhone] = useState("");
  return (
    <div className="pt-20">
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* ================= LEFT (FORM) ================= */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                subtitle="Connect With Us" 
                title="Get In Touch" 
              />

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();

                  emailjs.sendForm(
  import.meta.env.VITE_EMAIL_SERVICE_ID,
  import.meta.env.VITE_EMAIL_TEMPLATE_ID,
  e.target,
  import.meta.env.VITE_EMAIL_PUBLIC_KEY
).then(
                    () => {
                      alert('Thank you! Your message has been sent.');
                    },
                    () => {
                      alert('Failed to send message. Please try again.');
                    }
                  );
                }}
              >

                <div className="grid md:grid-cols-2 gap-6">

                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      name="user_name"
                      required
                      type="text"
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent outline-none"
                      placeholder=""
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      name="user_email"
                      required
                      type="email"
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent outline-none"
                      placeholder=""
                    />
                  </div>

                </div>

   <PhoneInput
  country={"in"}
  value={phone}

  onChange={(value) => {
    setPhone(value); // ✅ keep raw value
  }}

  enableSearch

  inputProps={{
    name: "user_phone", // ✅ VERY IMPORTANT
    required: true,
    autoFocus: false
  }}

  containerClass="w-full"

  inputStyle={{
    width: "100%",
    height: "56px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    backgroundColor: "#f8fafc",
    paddingLeft: "60px",
    fontSize: "16px",
  }}

  buttonStyle={{
    border: "1px solid #e2e8f0",
    borderRadius: "12px 0 0 12px",
    backgroundColor: "#f1f5f9",
  }}
/>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent outline-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-4">
                  Send Message
                </button>
              </form>
              {/* ===== EMAIL BELOW FORM ===== */}
<div className="mt-10 flex gap-4 items-start bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
  
  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
    <Mail size={22} />
  </div>

  <div>
    <h4 className="text-lg font-bold text-primary mb-1">
      Email Us
    </h4>
    <p className="text-slate-500 text-sm">
      Reach out anytime — we usually respond within 24 hours.
    </p>

    <a
      href="mailto:info@qltherapeutics.com"
      className="inline-block mt-2 text-accent font-medium hover:underline"
    >
      info@qltherapeutics.com
    </a>
  </div>

</div>
            </motion.div>

{/* ================= RIGHT (OFFICES) ================= */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="space-y-10"
>

  {/* ===== HEADQUARTERS ===== */}
  <div className="bg-white p-6 rounded-3xl shadow-md space-y-4">

    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
        <MapPin size={22} />
      </div>

      <div>
        <h4 className="text-lg font-bold text-primary">
          Headquarters
        </h4>
        <p className="text-slate-500 text-sm leading-relaxed">
          Headquarters- 716, Ganesh Glory, Jagatpur Road<br/>
Gota, Ahmedabad 382470, India
        </p>
      </div>
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7515220.527268085!2d62.785419925!3d23.113882599999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e830065f642f9%3A0x47fa0a1ca6caf472!2sQL%20Therapeutics%20-%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1773338812343!5m2!1sen!2sin"
      className="w-full h-[260px] rounded-2xl border-0"
      loading="lazy"
    ></iframe>

  </div>


  {/* ===== SECOND OFFICE ===== */}
  <div className="bg-white p-6 rounded-3xl shadow-md space-y-4">

    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
        <MapPin size={22} />
      </div>

      <div>
        <h4 className="text-lg font-bold text-primary">
          Manufacturing Plant
        </h4>
        <p className="text-slate-500 text-sm leading-relaxed">
          Manufacturing Plant- Phase III, Bio Tech Park, Plot No: 49, SEZ
Karkapatla, Telangana 502279, India
        </p>
      </div>
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.562339694528!2d78.7126548!3d17.684853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb7f004aba6951%3A0xb8e1809ab4df77ae!2sQL%20Therapeutics%20-%20Nutraceutical%20Manufacturing%20Plant!5e1!3m2!1sen!2sin!4v1774427279824!5m2!1sen!2sin"
      className="w-full h-[260px] rounded-2xl border-0"
      loading="lazy"
    ></iframe>

  </div>


  

</motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;