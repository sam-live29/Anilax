import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shuffle, 
  Plus, 
  Minus,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  BarChart3,
  Scale,
  Settings,
  Network
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function PaymentSwitchProcessorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is a Payment Switch Processor?",
      answer: "A Payment Switch Processor is a software system that routes electronic payment transactions between various payment networks, ensuring secure and efficient processing across multiple financial institutions."
    },
    {
      question: "How does a Payment Switch Processor differ from a Payment Gateway?",
      answer: "While a gateway is the front-end interface for accepting payments, a switch is the back-end hub that routes those transactions to the appropriate network or bank based on predefined rules like cost, speed, or geography."
    },
    {
      question: "What standards does the Payment Switch Processor comply with?",
      answer: "Our switch complies with international messaging standards like ISO 8583 and ISO 20022, as well as security standards like PCI DSS."
    },
    {
      question: "Can the Payment Switch Processor handle high transaction volumes?",
      answer: "Yes, our solution is built on a highly scalable architecture designed to handle millions of transactions with low latency and high availability."
    },
    {
      question: "Is the Payment Switch Processor customizable?",
      answer: "Absolutely. We offer customizable routing logic, workflows, and reporting to meet the unique operational requirements of financial institutions and enterprises."
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
              Payment Switch Processor
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight">
              Empowering Seamless<br />Payment Ecosystems
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our Payment Switch Processor enables secure, scalable, and efficient routing of transactions across multiple payment networks, ensuring seamless connectivity between merchants, acquirers, issuers, and payment service providers.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-slate-200/50 transition-all"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-20">
              <ImagePlaceholder text="Payment Switch Processor" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Solutions */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
            Comprehensive Payment<br />Routing Solutions
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Our Payment Switch Processor acts as the central hub for processing and routing electronic payment transactions, ensuring high availability, low latency, and compliance with global standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Dynamic Transaction Routing</h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Utilize intelligent routing algorithms to direct transactions to the most appropriate payment network based on factors such as cost, geography, and risk parameters.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Real-Time Authorization</h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Ensure immediate transaction authorization with real-time processing capabilities, reducing transaction times and enhancing user experience.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Multi-Network Connectivity</h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Integrate seamlessly with domestic and international card schemes, clearing houses, and issuing banks, facilitating a wide range of payment methods.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Comprehensive Reporting</h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Access detailed transaction logs, settlement reports, and performance analytics through intuitive dashboards, aiding in reconciliation and decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50/50 border-l-4 border-[#ff5722] p-10 rounded-r-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed mb-6">
              "Anilax Software's Payment Switch Processor streamlined our payment operations, enabling efficient routing of transactions across multiple networks."
            </p>
            <p className="font-bold text-slate-900">— CTO, Global Payment Solutions Provider</p>
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
            Our Payment Switch Processor is designed for financial institutions, payment service providers, and enterprises requiring robust, scalable, and secure payment transaction routing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Financial Institutions", desc: "Enhance transaction processing capabilities, ensuring compliance with regulatory standards and improving operational efficiency." },
            { title: "Payment Service Providers", desc: "Offer seamless integration with multiple payment networks, enabling diverse payment options for merchants and consumers." },
            { title: "Enterprises", desc: "Implement centralized payment processing systems to manage transactions across various business units and geographies." },
            { title: "Card Networks", desc: "Facilitate efficient transaction routing and settlement processes, supporting a wide range of payment methods." },
            { title: "Clearing Houses", desc: "Streamline transaction clearing and settlement operations, ensuring timely and accurate fund transfers." },
            { title: "Merchants", desc: "Integrate with multiple payment networks to offer customers a variety of payment options, enhancing the shopping experience." }
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
              Our Payment Switch Processor offers a range of features designed to optimize transaction processing, enhance security, and support business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Database, title: "ISO 8583 & ISO 20022 Compliance", desc: "Ensure interoperability with global payment networks through adherence to international messaging standards." },
              { icon: ShieldCheck, title: "PCI DSS Compliance", desc: "Protect sensitive payment data and maintain secure transaction environments by adhering to industry security standards." },
              { icon: Network, title: "Tokenization & Encryption", desc: "Safeguard payment information through advanced tokenization and encryption techniques, reducing the risk of data breaches." },
              { icon: Scale, title: "High Availability & Scalability", desc: "Support growing transaction volumes and ensure continuous service availability with scalable infrastructure solutions." },
              { icon: Zap, title: "Fraud Detection & Prevention", desc: "Implement real-time monitoring and analytics to identify and mitigate fraudulent activities, protecting both merchants and consumers." },
              { icon: Settings, title: "Customizable Workflows", desc: "Adapt transaction processing workflows to meet specific business requirements, enhancing operational flexibility." }
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
