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
  Users,
  Layout,
  Globe,
  Scale,
  Settings,
  SmartphoneCharging,
  RefreshCw,
  Layers,
  Monitor,
  Lock
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function RechargeSoftwarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Recharge Software?",
      answer: "Recharge Software enables businesses and agents to process prepaid recharges for mobile, DTH, data cards, and utility services through a unified online platform."
    },
    {
      question: "Does it support multiple operators and services?",
      answer: "Yes, our software is integrated with all major telecom and DTH operators in India, offering a wide range of recharge and utility payment options."
    },
    {
      question: "Can I launch my own white-label recharge portal?",
      answer: "Absolutely. We provide a fully customizable white-label solution that allows you to launch your own branded recharge platform with your logo and domain."
    },
    {
      question: "Is it scalable for enterprise-level operations?",
      answer: "Our platform is built on a high-performance architecture designed to handle millions of transactions with high uptime and speed."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support and monitoring to ensure your recharge services run smoothly without any interruptions."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center pt-20 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-sm md:text-base font-black text-slate-900 uppercase tracking-[0.3em] mb-8">
              RECHARGE SOFTWARE
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-10 leading-[1.1] tracking-tight">
              Spend Smart Across Entities, Networks & Currencies
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 mb-14 leading-relaxed max-w-3xl mx-auto">
              Empower your business with a high-performance Recharge Software that enables instant mobile, DTH, data card, and utility recharges. Our system is built for distributors, retailers, and aggregators who demand speed, security, and seamless integration.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-12 py-5 rounded-full font-bold text-xl shadow-xl shadow-slate-200/50 transition-all mb-20"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-10">
              <ImagePlaceholder text="Recharge Software Platform" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ImagePlaceholder text="Recharge Integration" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
                All-in-One Recharge Solution
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
                Our Recharge Software offers multi-operator, multi-service capabilities with advanced APIs for instant mobile, DTH, data card, and utility recharges. Designed for scalability and performance, it supports real-time transactions and reconciliation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">
                Multi-Operator, Multi-Service Platform
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                Seamlessly integrate recharge services from all major telecom operators and service providers. Expand your offerings with utility and data services under a single portal.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">
                High-Speed APIs & Real-Time Settlement
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                Experience instant recharge processing with our high-speed APIs, automated settlements, and detailed transaction tracking for every user tier — Admin, Distributor, and Retailer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50/50 border-l-4 border-[#ff5722] p-10 rounded-r-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed mb-6">
              "Anilax Recharge Software helped us scale from 500 to 10,000 daily recharges within weeks — a true backbone for our distribution network."
            </p>
            <p className="font-bold text-slate-900">— Managing Director, Recharge Aggregator</p>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8">
            Who Can Benefit?
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
            Our Recharge Software empowers a wide network of businesses — from small retailers to national aggregators — with the infrastructure needed to handle recharges at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Distributors & Aggregators", desc: "Manage a multi-level recharge ecosystem with advanced hierarchy controls, commission distribution, and transparent reporting." },
            { title: "Retailers & Agents", desc: "Offer instant mobile, DTH, and utility recharges to customers using a simple, user-friendly web or mobile interface. Earn commissions and track earnings in real-time." },
            { title: "Fintech Startups", desc: "Integrate recharge APIs into your fintech apps or wallets to expand user engagement and monetization channels effortlessly." },
            { title: "Payment Gateways", desc: "Leverage our robust recharge engine to add value-added services to your existing payment suite — boosting customer stickiness and retention." },
            { title: "Enterprises & Telecom Partners", desc: "Deploy private-label recharge portals and manage employee or partner recharges under a centralized, configurable system." },
            { title: "Government & Rural Projects", desc: "Empower rural agents with multi-service recharge tools to drive digital inclusion through simple, low-bandwidth portals." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50/30 p-10 rounded-[2.5rem] border border-slate-100 text-center">
              <h3 className="text-2xl font-black text-slate-950 mb-6">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="bg-black text-white py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl md:text-8xl font-display font-black mb-10">
              Why Choose Our Recharge Platform?
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Built to deliver unmatched speed, scalability, and control, our Recharge Software ensures a reliable digital ecosystem for every level of your distribution network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Universal API Support", desc: "Integrate multiple operators' APIs with our unified system that supports both direct and indirect connectivity, ensuring uptime and redundancy." },
              { title: "Smart Commission Engine", desc: "Set and manage flexible commissions for every user level — Admin, Distributor, and Retailer — with automated profit sharing." },
              { title: "Wallet & Ledger Management", desc: "Maintain real-time ledgers for every transaction and enable instant wallet top-ups, adjustments, and reporting with full transparency." },
              { title: "White Label Ready", desc: "Launch your own branded recharge platform with your logo, domain, and custom commission structure in just a few days." },
              { title: "24/7 Monitoring & Alerts", desc: "Real-time monitoring of all recharge activities, failed transactions, and operator downtime through detailed logs and instant notifications." },
              { title: "Data Security & Compliance", desc: "End-to-end encryption and secured API channels ensure that every transaction meets compliance and data protection standards." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] hover:bg-white/10 transition-colors text-center">
                <h3 className="text-2xl font-bold mb-6">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="section-container max-w-4xl">
          <h2 className="text-4xl md:text-7xl font-display font-black text-slate-950 text-center mb-24">
            Frequently<br />Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 ${openFaq === i ? 'border-[#ff5722] shadow-2xl shadow-orange-500/10' : 'border-slate-100 shadow-sm'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left"
                >
                  <span className={`text-xl md:text-2xl font-bold transition-colors ${openFaq === i ? 'text-slate-950' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                    {openFaq === i ? (
                      <Minus className="text-[#ff5722]" size={28} />
                    ) : (
                      <Plus className="text-[#ff5722]" size={28} />
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
                      <div className="px-10 pb-10 text-slate-500 text-xl leading-relaxed border-t border-slate-50 pt-6">
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
