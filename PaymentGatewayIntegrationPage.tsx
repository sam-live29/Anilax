import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CreditCard, 
  Plus, 
  Minus,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layout,
  BarChart3,
  Globe,
  HeadphonesIcon,
  Layers
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function PaymentGatewayIntegrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Payment Gateway Integration?",
      answer: "Payment Gateway Integration is the process of connecting a website or application with a payment processor to enable secure online transactions."
    },
    {
      question: "How secure are your payment integrations?",
      answer: "We follow industry standards like PCI DSS and implement advanced encryption, tokenization, and fraud detection to ensure all transactions are secure and compliant."
    },
    {
      question: "Can this integrate with multiple payment gateways?",
      answer: "Yes, our solutions support integration with multiple payment providers and gateways to offer users a variety of payment options and ensure high availability."
    },
    {
      question: "What kind of businesses can benefit?",
      answer: "Businesses of all sizes, from eCommerce stores and fintech startups to large enterprises and government agencies, can benefit from our scalable payment processing solutions."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer continuous maintenance, updates, and technical support to ensure smooth operations and quick resolution of any issues."
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
              Payment Gateway Integration & Development
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight">
              Building Bridges for<br />Seamless Digital Payments
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Enable businesses to process payments securely, efficiently, and at scale. Our Payment Gateway Integration & Development services provide a reliable infrastructure to accept online payments, manage transactions, and optimize user experience across platforms.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-slate-200/50 transition-all"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-20">
              <ImagePlaceholder text="Payment Gateway Integration" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Solutions */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
            Comprehensive Payment<br />Gateway Solutions
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            From eCommerce stores to fintech platforms, our services ensure seamless integration of multiple payment methods including cards, UPI, wallets, and net banking. We build scalable and secure systems for fast and reliable transaction processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Flexible Integrations</h3>
            <p className="text-slate-500 leading-relaxed">
              Integrate with multiple payment providers, gateways, and third-party services to offer users a variety of payment options and streamline backend operations.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Secure & Compliant</h3>
            <p className="text-slate-500 leading-relaxed">
              We follow industry standards like PCI DSS and implement encryption, fraud detection, and tokenization to ensure all transactions are secure and compliant with regulations.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Optimized for Performance</h3>
            <p className="text-slate-500 leading-relaxed">
              Our solutions are designed for high availability and low latency, providing users with fast transaction processing and reliable payment experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50/50 border-l-4 border-[#ff5722] p-10 rounded-r-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed mb-6">
              "Anilax Software's gateway integration accelerated our online payments while ensuring security and compliance."
            </p>
            <p className="font-bold text-slate-900">— CTO, eCommerce Platform</p>
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
            Our Payment Gateway Integration & Development services are ideal for businesses of all sizes that require seamless, secure, and scalable payment processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "eCommerce Platforms", desc: "Enable fast and reliable payments, multiple gateways, and automated reconciliation for enhanced customer experience and operational efficiency." },
            { title: "Fintech Startups", desc: "Build secure payment infrastructure to process transactions efficiently while offering innovative financial products like wallets, lending, and digital banking." },
            { title: "Retailers & Merchants", desc: "Offer customers multiple payment options, including UPI, wallets, and cards, with quick settlement and low transaction friction." },
            { title: "Enterprises", desc: "Integrate payments across multiple business units, automate collections, and monitor transactions in real-time with secure dashboards." },
            { title: "Government & Public Sector", desc: "Enable secure digital payments for public services, citizen benefit programs, and utility collections with audit-ready systems." },
            { title: "Payment Service Providers", desc: "Enhance payment routing, settlements, and merchant onboarding with advanced integrations, analytics, and compliance-ready systems." }
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
              Our solutions are designed to provide secure, efficient, and scalable payment processing while enhancing customer experience and reducing operational overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Layers, title: "Multiple Gateway Support", desc: "Integrate several payment gateways to increase transaction success rates and provide redundancy for uninterrupted payment processing." },
              { icon: ShieldCheck, title: "Fraud Prevention & Security", desc: "Implement advanced encryption, tokenization, and real-time fraud detection to protect transactions and customer data." },
              { icon: Layout, title: "Customizable Workflows", desc: "Configure payment workflows, routing logic, and notifications to match your business model and operational requirements." },
              { icon: BarChart3, title: "Analytics & Reporting", desc: "Monitor transaction patterns, settlements, and user behavior with detailed analytics dashboards for data-driven decision-making." },
              { icon: Globe, title: "Scalability", desc: "Our solutions are built to handle growing transaction volumes and user bases while maintaining performance and reliability." },
              { icon: HeadphonesIcon, title: "Ongoing Support", desc: "Receive continuous maintenance, updates, and technical support to ensure smooth operations and quick resolution of issues." }
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
