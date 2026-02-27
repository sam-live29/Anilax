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
  Layers,
  Monitor,
  Lock,
  RefreshCw,
  Code2,
  Database
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function MultiPurposeAPIPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is a Multi-Purpose API?",
      answer: "A Multi-Purpose API allows you to access multiple services like recharges, bill payments, UPI, BBPS, DMT, and more through one secure integration."
    },
    {
      question: "How secure is the integration?",
      answer: "Our API suite is built with enterprise-grade security, including PCI DSS compliance, tokenized authentication, and encrypted data handling."
    },
    {
      question: "Can I integrate it into my existing software?",
      answer: "Yes, our developer-friendly REST APIs are designed for easy integration into web, mobile, or enterprise systems with minimal coding effort."
    },
    {
      question: "Does it support white-label solutions?",
      answer: "Absolutely. You can launch your own branded API portal or service aggregator using our customizable white-label options."
    },
    {
      question: "What support is provided for developers?",
      answer: "We provide a comprehensive developer sandbox, detailed documentation, sample code, and 24/7 technical support to ensure smooth integration."
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
              MULTI-PURPOSE API
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-10 leading-[1.1] tracking-tight">
              Simplify Integrations and Unlock New Business Opportunities
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 mb-14 leading-relaxed max-w-3xl mx-auto">
              Empower your platform with a unified Multi-Purpose API that connects payment systems, utilities, telecoms, and financial services — all through a single, secure interface. Simplify integrations, accelerate go-to-market, and earn rewards with every transaction.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-12 py-5 rounded-full font-bold text-xl shadow-xl shadow-slate-200/50 transition-all mb-20"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-10">
              <ImagePlaceholder text="Multi-Purpose API Platform" />
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
            <ImagePlaceholder text="API Integration" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
                One API, Endless Possibilities
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
                Integrate diverse services like bill payments, recharges, banking, insurance, ticket booking, and financial APIs into one ecosystem. Our Multi-Purpose API allows developers and businesses to connect multiple services seamlessly with modular and scalable architecture.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">
                Unified API Infrastructure
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                Skip the complexity of multiple vendors. Access a single API gateway that brings together BBPS, AEPS, UPI, Recharge, PAN, DMT, and more — with real-time reporting and reconciliation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">
                Plug-and-Play Architecture
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                Our developer-friendly APIs are easy to integrate into web, mobile, or enterprise systems. Start small and scale fast as your business grows, without rewriting integrations.
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
              "Anilax Software's Multi-Purpose API allowed us to integrate 10+ services into our fintech app within weeks — saving development time and boosting engagement instantly."
            </p>
            <p className="font-bold text-slate-900">— Product Head, Fintech Company</p>
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
            Our Multi-Purpose API is designed for fintech innovators, service providers, developers, and aggregators looking to deliver multiple financial and digital services under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Fintech Startups", desc: "Quickly launch digital payment, recharge, or AEPS-based services without heavy infrastructure. Focus on customer acquisition while we handle the backend integrations." },
            { title: "Developers & SaaS Platforms", desc: "Embed financial, utility, and service APIs directly into your software or apps. Simplify integration with unified documentation and RESTful APIs." },
            { title: "Enterprise Solutions", desc: "Incorporate multiple digital services like BBPS, insurance, DMT, or PAN verification into enterprise workflows securely using modular APIs." },
            { title: "Government & Public Projects", desc: "Enable secure citizen services such as bill payments, document verification, and benefit transfers with a single, standardized API system." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50/30 p-12 rounded-[3rem] border border-slate-100 text-center">
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
              Why Choose Our Multi-Purpose API?
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Our API suite offers simplicity, speed, and scalability. Whether you're building a fintech platform, e-commerce app, or enterprise tool, integrate multiple services in just a few steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Unified Integration Layer", desc: "Access all essential APIs from a single platform — payments, recharges, UPI, BBPS, DMT, and more — managed under one dashboard." },
              { title: "Instant Commission & Reward Management", desc: "Earn commissions and rewards automatically on every transaction. The system tracks margins and settlements in real time." },
              { title: "Enterprise-Grade Security", desc: "Built with PCI DSS compliance, tokenized authentication, and encrypted APIs to ensure secure transactions and data handling." },
              { title: "Custom Branding & White Label Options", desc: "Launch your own branded API portal or service aggregator without starting from scratch — full customization available." },
              { title: "24/7 Uptime & Monitoring", desc: "Experience zero downtime with our high-availability servers and real-time monitoring systems ensuring continuous service." },
              { title: "Developer-Friendly Sandbox", desc: "Test and build confidently in our sandbox environment with full API documentation, sample requests, and version control." }
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
