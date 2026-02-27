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
  Send,
  RefreshCw,
  Layers,
  Monitor,
  Lock,
  UserCheck,
  CreditCard
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function MoneyTransferPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is DMT Software?",
      answer: "Our Domestic Money Transfer Software enables agents, retailers, and financial institutions to facilitate secure, fast, and compliant transfers across India."
    },
    {
      question: "Is it compliant with RBI guidelines?",
      answer: "Yes, our DMT platform is fully compliant with RBI regulations, featuring integrated KYC/AML verification and PCI DSS security standards."
    },
    {
      question: "Can I integrate it with my existing portal or app?",
      answer: "Absolutely. We provide plug-and-play DMT APIs that can be easily integrated into your existing fintech platform or mobile application."
    },
    {
      question: "Does it support real-time transactions?",
      answer: "Yes, our software supports instant money transfers through IMPS, NEFT, and UPI, ensuring real-time transaction confirmations for your customers."
    },
    {
      question: "What type of support do you offer?",
      answer: "We provide 24/7 technical support, real-time monitoring, and dedicated account management to ensure your money transfer services run smoothly."
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
              MONEY TRANSFER (DMT)
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-10 leading-[1.1] tracking-tight">
              Seamless, Secure, and Scalable Money Transfer Solutions
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 mb-14 leading-relaxed max-w-3xl mx-auto">
              Empower your business or customers with instant domestic money transfer capabilities. Our DMT software ensures real-time transactions, multi-bank connectivity, and compliance with the latest financial regulations — all through a single, secure platform.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-12 py-5 rounded-full font-bold text-xl shadow-xl shadow-slate-200/50 transition-all mb-20"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-10">
              <ImagePlaceholder text="Money Transfer (DMT) Platform" />
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
            <ImagePlaceholder text="Money Transfer Illustration" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
                End-to-End DMT Infrastructure
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
                Our Domestic Money Transfer Software enables agents, retailers, and financial institutions to facilitate secure, fast, and compliant transfers across India. Built on robust APIs and advanced encryption, it offers a scalable foundation for financial inclusion and digital banking innovation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">
                Instant Transfers with Multi-Bank Integration
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                Connect seamlessly with leading banks and payment networks for instant money transfers. Support for IMPS, NEFT, and UPI ensures your customers never face transaction delays.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">
                Compliant, Secure, and Reliable
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                Integrated KYC/AML verification, PCI DSS compliance, and real-time fraud detection ensure every transfer is secure and regulatory-ready — giving you complete peace of mind.
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
              "Anilax Software helped us launch a nationwide DMT service that processes over 1 million transactions monthly — with zero downtime and full compliance."
            </p>
            <p className="font-bold text-slate-900">— CEO, Fintech Aggregator</p>
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
            Our DMT platform empowers financial service providers, fintech startups, and enterprises to deliver reliable, compliant, and instant domestic money transfer services across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Retailers & Agents", desc: "Offer money transfer services to customers with minimal setup. Enable instant IMPS/NEFT transfers directly from your outlet, increasing revenue and customer trust." },
            { title: "Fintech Startups", desc: "Integrate plug-and-play DMT APIs to quickly launch remittance services. Focus on customer experience while we handle backend processing, compliance, and uptime." },
            { title: "NBFCs & Banks", desc: "Digitize branch operations with a unified DMT engine that manages agents, reconciliations, settlements, and real-time monitoring across regions." },
            { title: "Payment Service Providers", desc: "Expand your portfolio by adding DMT services to your payment suite. Our APIs support multi-channel transfers, secure validations, and complete reporting." },
            { title: "Corporate Businesses", desc: "Use DMT capabilities to manage payouts, employee disbursements, and vendor payments — securely and instantly through integrated APIs." },
            { title: "Government & NGOs", desc: "Facilitate direct benefit transfers (DBTs), subsidies, and welfare payments to beneficiaries quickly and securely with audit-ready compliance features." }
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
              Why Choose Our DMT Platform?
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              From retailers to financial institutions, our Money Transfer Software offers unmatched reliability, speed, and compliance — designed for India's evolving digital economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Real-Time Transfers", desc: "Enable 24/7 money transfers through IMPS, NEFT, and UPI with instant transaction confirmations and detailed receipts for customers." },
              { title: "Advanced KYC & Fraud Detection", desc: "Automated KYC verification, transaction monitoring, and risk scoring protect your ecosystem from fraud and misuse." },
              { title: "Comprehensive Reporting Dashboard", desc: "Gain insights with real-time dashboards, transaction logs, and settlement summaries to simplify reconciliation and compliance audits." },
              { title: "White-Label & API Integration", desc: "Launch your own branded DMT service with custom domain, logo, and color themes — or integrate APIs into your existing fintech platform." },
              { title: "Agent & Distributor Network Management", desc: "Manage multi-level agents, commissions, and performance tracking through a robust backend control panel." },
              { title: "Security & Compliance", desc: "Ensure every transaction meets PCI DSS and RBI standards with encrypted communication, OTP validation, and 2FA authentication." }
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
