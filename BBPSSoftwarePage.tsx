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
  CreditCard,
  FileText,
  Wallet,
  Receipt,
  SmartphoneCharging,
  UserCheck,
  RefreshCw
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function BBPSSoftwarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is BBPS Software?",
      answer: "BBPS (Bharat Bill Payment System) software allows businesses and agents to accept bill payments for utilities, telecom, insurance, and more through a unified NPCI-authorized platform."
    },
    {
      question: "Is your BBPS solution NPCI certified?",
      answer: "Yes, our BBPS platform is built on NPCI-certified modules, ensuring full compliance with Bharat BillPay standards and regulations."
    },
    {
      question: "Can it be white-labeled?",
      answer: "Absolutely. We offer a white-label BBPS solution that can be fully branded with your logo, colors, and domain name."
    },
    {
      question: "What types of bills can be paid through BBPS?",
      answer: "Our platform supports all BBPS categories including electricity, water, gas, DTH, mobile postpaid, insurance, loan repayments, and more."
    },
    {
      question: "Do you provide agent management features?",
      answer: "Yes, our software includes a comprehensive agent management system for onboarding, commission tracking, and performance monitoring."
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
              BBPS SOFTWARE
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-950 mb-8 leading-[1.1] tracking-tight">
              Unified Bharat Bill Payment Solution for Every Business
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Empower your business to process utility and recurring bill payments effortlessly with our advanced BBPS Software. Built for banks, fintechs, and agents, it ensures secure, fast, and compliant bill collections across India under the NPCI framework.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-12 py-5 rounded-full font-bold text-xl shadow-xl shadow-slate-200/50 transition-all mb-20"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-10">
              <ImagePlaceholder text="BBPS Software Platform" />
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
            <ImagePlaceholder text="BBPS Integration" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
                Comprehensive BBPS Platform
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
                Our BBPS (Bharat Bill Payment System) software simplifies bill payments by connecting multiple billers and payment channels under one secure, scalable platform. It's perfect for institutions looking to expand their digital payment ecosystem.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">
                Seamless Integration for All Bill Categories
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                Enable payments for electricity, water, gas, telecom, DTH, insurance, credit cards, and more. Our BBPS APIs support both agent-assisted and self-service models.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">
                Compliant & Secure by Design
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                Fully compliant with NPCI and RBI regulations, our platform ensures data integrity, transaction encryption, and real-time reconciliation through BBPS-certified modules.
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
              "The Anilax BBPS platform made it easy to integrate multiple billers and launch a robust digital payment service for our agents — smooth, secure, and scalable."
            </p>
            <p className="font-bold text-slate-900">— Product Head, Fintech Aggregator</p>
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
            Our BBPS software empowers a wide range of financial and payment players — from banks and fintechs to retail agents and enterprises — enabling them to accept and manage bill payments efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Banks & Payment Institutions", desc: "Integrate BBPS modules to provide bill payment services directly from your banking portal, app, or kiosk with real-time settlement and detailed reporting." },
            { title: "Fintech Aggregators", desc: "Offer your users multi-category bill payment options using our unified BBPS APIs. Increase retention and revenue by providing fast and reliable payment experiences." },
            { title: "Retailers & Agents", desc: "Enable over-the-counter bill payments for customers in your locality. Earn commissions and boost engagement through simplified service offerings." },
            { title: "Utility Companies", desc: "Connect to the BBPS network to make your services payable nationwide. Ensure faster collection, reduced reconciliation time, and enhanced customer convenience." },
            { title: "Corporates & Enterprises", desc: "Use our BBPS solution to manage large-scale payments such as employee utilities, subscriptions, or vendor settlements under a unified, auditable system." },
            { title: "Government Organizations", desc: "Offer citizens easy access to pay taxes, fees, and government utilities using a secure and compliant bill payment infrastructure." }
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
              Why Choose Our BBPS Software?
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Built with high performance, compliance, and scalability in mind, our BBPS Software ensures a seamless payment journey for every stakeholder in the ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Full BBPS Integration", desc: "Our platform supports all BBPS categories with APIs ready for quick deployment and customizable integration with your existing systems." },
              { title: "Instant Bill Validation", desc: "Validate and fetch bill details in real time from the BBPS central system to ensure error-free and transparent transactions." },
              { title: "Real-Time Settlement & Reports", desc: "Access live settlement data, transaction summaries, and agent performance reports directly from the admin dashboard." },
              { title: "White-Label Ready", desc: "Launch your own BBPS-branded platform for agents and end-users, complete with custom UI and billing modules." },
              { title: "Comprehensive Admin Controls", desc: "Manage agents, commissions, transactions, and compliance reports efficiently with role-based access and audit-ready data exports." },
              { title: "Advanced Security", desc: "End-to-end encryption, PCI DSS compliance, and real-time fraud monitoring ensure safe and secure transactions every time." }
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
