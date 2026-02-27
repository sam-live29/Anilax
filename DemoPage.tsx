import React from 'react';
import { motion } from 'motion/react';
import { Check, Star, ChevronDown } from 'lucide-react';

export default function DemoPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Side: Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-display font-black text-slate-950 mb-4 leading-tight tracking-tight">
                Accelerate Your IT Solutions with Anilax
              </h1>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-6 font-medium">
                Discover how our cutting-edge software solutions empower teams to:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Build custom apps and integrations faster",
                  "Streamline business workflows securely",
                  "Scale technology with enterprise reliability"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-900 font-bold text-base md:text-lg">
                    <div className="bg-orange-50 p-1 rounded-md shrink-0">
                      <Check className="text-[#ff5722] stroke-[4px]" size={20} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-10 font-medium">
                Get your questions answered in a personalized demo.
              </p>

              {/* Reviews */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Star size={20} fill="currentColor" />
                    <span className="text-slate-900 font-black text-base">G2 Review</span>
                  </div>
                  <p className="text-slate-500 italic text-base md:text-lg leading-relaxed">
                    "Anilax simplified our integrations beyond expectations"
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Star size={20} fill="currentColor" />
                    <span className="text-slate-900 font-black text-base">Capterra</span>
                  </div>
                  <p className="text-slate-500 italic text-base md:text-lg leading-relaxed">
                    "With Anilax, we innovate smarter and faster"
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-slate-100 lg:sticky lg:top-28"
          >
            <form className="space-y-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-black text-slate-900 uppercase tracking-widest">Full Name*</label>
                <input 
                  type="text" 
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all bg-slate-50/50 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-black text-slate-900 uppercase tracking-widest">Business Email*</label>
                <input 
                  type="email" 
                  required
                  placeholder="Business Email"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all bg-slate-50/50 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-black text-slate-900 uppercase tracking-widest">Company / Organization*</label>
                <input 
                  type="text" 
                  required
                  placeholder="Company / Organization"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all bg-slate-50/50 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-black text-slate-900 uppercase tracking-widest">Industry*</label>
                  <div className="relative">
                    <select 
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all bg-slate-50/50 text-sm appearance-none pr-10"
                    >
                      <option value="">Select Industry</option>
                      <option value="fintech">Fintech</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-black text-slate-900 uppercase tracking-widest">Service Interested In*</label>
                  <div className="relative">
                    <select 
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all bg-slate-50/50 text-sm appearance-none pr-10"
                    >
                      <option value="">Select Service</option>
                      <option value="payments">Payments API</option>
                      <option value="banking">Banking Suite</option>
                      <option value="kyc">KYC Verification</option>
                      <option value="software">Custom Software</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-black text-slate-900 uppercase tracking-widest">Message / Requirements</label>
                <textarea 
                  rows={3}
                  placeholder="Tell us your specific needs..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all bg-slate-50/50 text-sm resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white py-3.5 rounded-xl font-black text-lg transition-all shadow-lg shadow-orange-500/20 active:scale-[0.98] hover:shadow-orange-500/30"
              >
                Request Demo
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
