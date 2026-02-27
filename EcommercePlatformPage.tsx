import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Minus,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  ShoppingCart,
  Users,
  Layout,
  Globe,
  Scale,
  Settings,
  Package
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function EcommercePlatformPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the E-commerce Single/Multi Vendor platform?",
      answer: "It is a platform that allows businesses to manage online stores or multi-vendor marketplaces with integrated product, order, payment, and reward management."
    },
    {
      question: "Can I manage multiple vendors?",
      answer: "Yes, our multi-vendor platform allows you to onboard and manage multiple sellers, track their performance, and handle commissions automatically."
    },
    {
      question: "Does it support rewards and loyalty programs?",
      answer: "Absolutely. You can boost customer loyalty with integrated reward systems, discounts, and promotional campaigns for repeat purchases."
    },
    {
      question: "Can this platform handle international operations?",
      answer: "Yes, our platform supports international scaling with multi-currency support, regional compliance, and localized customer experiences."
    },
    {
      question: "Is it suitable for startups?",
      answer: "Our e-commerce solutions are perfect for startups and entrepreneurs looking to launch online stores or marketplaces quickly with integrated systems."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-sm md:text-base font-black text-slate-900 uppercase tracking-[0.3em] mb-6">
              E-COMMERCE SINGLE/MULTI VENDOR
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight">
              Simplify Sales<br />and Earn Rewards
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our E-commerce platform for single and multi-vendor marketplaces helps businesses manage products, sellers, and customers efficiently while maximizing revenue opportunities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-slate-200/50 transition-all"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-20">
              <ImagePlaceholder text="E-commerce Single/Multi Vendor" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* All-in-One Section */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
            All-in-One E-commerce Solutions
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Manage product catalogs, seller onboarding, orders, payments, and customer experience seamlessly in one platform designed for single or multi-vendor operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Vendor Management & Catalog</h3>
            <p className="text-slate-500 leading-relaxed">
              Onboard and manage multiple sellers, update product catalogs, and monitor inventory in real-time to ensure smooth marketplace operations.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Order Processing & Payments</h3>
            <p className="text-slate-500 leading-relaxed">
              Streamline order processing, payment collections, refunds, and commission management with automated and secure systems.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Customer Engagement & Rewards</h3>
            <p className="text-slate-500 leading-relaxed">
              Boost customer loyalty with integrated reward systems, discounts, and promotional campaigns for repeat purchases.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50/50 border-l-4 border-[#ff5722] p-10 rounded-r-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed mb-6">
              "Anilax Software helped us launch a multi-vendor marketplace quickly, managing sellers, orders, and rewards with ease."
            </p>
            <p className="font-bold text-slate-900">— Founder, Online Marketplace</p>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-black text-slate-950 mb-8">
            Who Can Benefit?
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Our e-commerce platform is ideal for businesses, startups, and entrepreneurs aiming to manage single or multi-vendor marketplaces efficiently while enhancing revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Retail Businesses", desc: "Manage your own online store with streamlined inventory, orders, and payments for a seamless shopping experience." },
            { title: "Marketplaces & Aggregators", desc: "Onboard multiple vendors, monitor performance, and ensure smooth transactions and logistics across the platform." },
            { title: "Startups & Entrepreneurs", desc: "Launch online stores or marketplaces quickly with integrated payment, delivery, and reward systems to attract and retain customers." },
            { title: "Global Businesses", desc: "Scale operations internationally with multi-currency support, regional compliance, and localized customer experiences." },
            { title: "Retail Chains", desc: "Manage multiple outlets under one unified system, synchronize inventories, and streamline online and offline sales." },
            { title: "Loyalty & Rewards Programs", desc: "Enhance customer retention with integrated reward points, cashback, and referral programs to boost engagement and sales." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50/50 p-10 rounded-[2rem] border border-slate-100">
              <h3 className="text-xl font-bold text-slate-950 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="bg-black text-white py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-7xl font-display font-black mb-8">
              Platform Capabilities<br />& Advantages
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Our E-commerce Single/Multi Vendor platform enables efficient management, scalability, and optimized customer experiences for online marketplaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Package, title: "Vendor & Product Management", desc: "Onboard vendors, manage product listings, monitor inventory, and track seller performance effortlessly." },
              { icon: Zap, title: "Order & Payment Automation", desc: "Process orders, payments, refunds, and commissions automatically, reducing manual effort and errors." },
              { icon: Users, title: "Customer Experience & Rewards", desc: "Enhance customer engagement with reward points, promotions, discounts, and personalized shopping experiences." },
              { icon: BarChart3, title: "Analytics & Insights", desc: "Generate reports on sales, vendor performance, and customer behavior to make data-driven decisions." },
              { icon: Scale, title: "Scalable Architecture", desc: "Support growing marketplaces with multiple vendors, high traffic, and complex transactions without performance issues." },
              { icon: ShieldCheck, title: "Security & Compliance", desc: "Ensure secure payments, data protection, and compliance with local and international regulations for online marketplaces." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors">
                <item.icon className="text-[#ff5722] mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="section-container max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-display font-black text-slate-950 text-center mb-20">
            Frequently<br />Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${openFaq === i ? 'border-[#ff5722] shadow-xl shadow-orange-500/5' : 'border-slate-100 shadow-sm'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className={`text-lg md:text-xl font-bold transition-colors ${openFaq === i ? 'text-slate-950' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                    {openFaq === i ? (
                      <Minus className="text-[#ff5722]" size={24} />
                    ) : (
                      <Plus className="text-[#ff5722]" size={24} />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-slate-500 text-lg leading-relaxed border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
