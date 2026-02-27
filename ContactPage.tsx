import React from 'react';
import { motion } from 'motion/react';

const VerifiedIcon = () => (
  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14.5 4.5L18 5L18.5 8.5L21 11L18.5 13.5L18 17L14.5 17.5L12 20L9.5 17.5L6 17L5.5 13.5L3 11L5.5 8.5L6 5L9.5 4.5L12 2Z" fill="#0F172A" />
      <path d="M8.5 11.5L11 14L15.5 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-950 leading-[1.1] tracking-tighter">
              Talk to Sales<br />Consultant Too..
            </h1>

            <div className="space-y-6">
              {[
                "Unlock how Anilax’s fintech infrastructure empowers businesses to streamline payments, banking workflows, real-time verifications, and financial automation with unmatched reliability and speed.",
                "Discover enterprise-grade APIs engineered to handle high-volume transactions, enabling you to integrate AEPS, BBPS, UPI, KYC, and digital services seamlessly into your product ecosystem.",
                "Experience scalable software solutions designed to support millions of users—offering secure onboarding, automated settlements, intelligent routing, and compliance-ready architecture for growth-focused businesses.",
                "Collaborate with our experts to build custom fintech systems, tailored API layers, and future-ready platforms that adapt to your team’s operational needs and accelerate your market expansion."
              ].map((text, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <VerifiedIcon />
                  <p className="text-base md:text-lg text-slate-900 leading-relaxed font-bold">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-10"
          >
            <div className="mb-8">
              <p className="text-slate-600 font-bold mb-2">Get your questions answered in a personalized demo.</p>
            </div>
            
            <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.1)] border border-slate-100">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-black text-slate-950 leading-tight mb-8 tracking-tighter">
                Onboarding a large team? Get a custom 30-minute demo.
              </h2>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <label className="block text-xs font-black text-slate-900 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400 font-semibold text-slate-900"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-black text-slate-900 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    placeholder="Work Email (name@company.com)"
                    className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400 font-semibold text-slate-900"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-black text-slate-900 uppercase tracking-wider">Phone</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400 font-semibold text-slate-900"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-black text-slate-900 uppercase tracking-wider">Details</label>
                  <textarea
                    placeholder="Describe in detail.."
                    rows={3}
                    className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-slate-400 font-semibold text-slate-900"
                  ></textarea>
                </div>
                <button className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white py-4 rounded-xl font-black text-lg transition-all shadow-xl shadow-orange-500/30 mt-4 active:scale-[0.98] uppercase tracking-wide">
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
