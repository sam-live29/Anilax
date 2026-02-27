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
  Globe,
  Database,
  Layers,
  Code,
  Smartphone,
  Scale
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function FintechDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Fintech Software Development?",
      answer: "It is the process of designing, building, and maintaining secure, scalable, and compliant financial applications and platforms for banks, startups, and enterprises."
    },
    {
      question: "Can you develop payment gateways and wallets?",
      answer: "Yes, we design secure, scalable payment platforms supporting multiple channels, real-time settlements, and compliance with global standards."
    },
    {
      question: "Is the software secure and compliant?",
      answer: "We prioritize enterprise-grade security and regulatory compliance (PCI DSS, GDPR, RBI) to protect data while building fintech software for global and local markets."
    },
    {
      question: "Can startups use this service?",
      answer: "Absolutely. We help fintech startups develop digital wallets, neobanks, and payment solutions quickly with scalable architecture and sandbox testing environments."
    },
    {
      question: "Do you provide end-to-end support?",
      answer: "Yes, from concept and design to development, deployment, and maintenance, we provide complete end-to-end support for fintech software projects."
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
              FINTECH SOFTWARE DEVELOPMENT
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight">
              Building the Future<br />of Finance with Code
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our Fintech Software Development services help businesses create innovative, secure, and scalable financial solutions. From digital banking to payment platforms, we turn ideas into reliable fintech products.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-slate-200/50 transition-all"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-20">
              <ImagePlaceholder text="Fintech Software Development" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Solutions */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
            Comprehensive Fintech Solutions
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We design and develop custom fintech applications including payment systems, digital wallets, lending platforms, and banking software — all built to scale and comply with industry regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Custom Development & APIs</h3>
            <p className="text-slate-500 leading-relaxed">
              Build tailored financial solutions with secure, modular APIs for payments, KYC, lending, compliance, and banking operations, enabling seamless integrations and innovation.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Security & Compliance First</h3>
            <p className="text-slate-500 leading-relaxed">
              We prioritize enterprise-grade security, regulatory compliance (PCI DSS, GDPR, RBI), and data protection while building fintech software for global and local markets.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">End-to-End Product Support</h3>
            <p className="text-slate-500 leading-relaxed">
              From concept and design to development, deployment, and maintenance, we provide complete end-to-end support for fintech software projects.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50/50 border-l-4 border-[#ff5722] p-10 rounded-r-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed mb-6">
              "Anilax Software helped us develop a full-scale digital banking platform in months, ensuring compliance, scalability, and top-notch security."
            </p>
            <p className="font-bold text-slate-900">— CTO, Fintech Startup</p>
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
            Our Fintech Software Development services empower financial institutions, startups, and payment companies to innovate, scale, and secure their digital finance solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Banks & NBFCs", desc: "Modernize banking operations with digital core systems, mobile banking apps, lending platforms, and secure transaction management solutions." },
            { title: "Fintech Startups", desc: "Develop digital wallets, neobanks, peer-to-peer lending apps, and payment solutions quickly, with scalable architecture and sandbox testing environments." },
            { title: "Payment Processors & PSPs", desc: "Integrate multi-rail payment gateways, handle settlements, chargebacks, and compliance workflows efficiently with our software solutions." },
            { title: "Global Enterprises", desc: "Enable cross-border payments, FX conversion, and multi-currency transaction processing while ensuring regulatory compliance across regions." },
            { title: "Government & Public Sector", desc: "Develop secure platforms for digital payments, grants, subsidies, and citizen-facing financial services with audit-ready transparency." },
            { title: "Retail & E-commerce Businesses", desc: "Integrate advanced payment solutions, recurring billing systems, and wallets to enhance customer experience and payment convenience." }
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
              Our fintech software development combines security, scalability, and innovation to create robust solutions for the modern financial ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Smartphone, title: "Digital Banking Solutions", desc: "Custom apps for mobile and web banking, account management, card issuing, and lending platforms tailored to your business needs." },
              { icon: Layers, title: "Payment Gateways & Wallets", desc: "Design secure, scalable payment platforms supporting multiple channels, real-time settlements, and compliance with global standards." },
              { icon: Database, title: "Lending & Credit Platforms", desc: "Develop end-to-end lending solutions, including digital KYC, risk scoring, loan management, and automated disbursal systems." },
              { icon: Code, title: "API & Integration Services", desc: "Seamlessly integrate with existing financial systems, third-party APIs, and fintech partners for enhanced service offerings." },
              { icon: ShieldCheck, title: "Security & Compliance", desc: "Ensure regulatory adherence, secure transactions, encrypted data storage, and protection against fraud and cyber threats." },
              { icon: BarChart3, title: "Analytics & Insights", desc: "Monitor performance, generate reports, and gain actionable insights into transactions, customer behavior, and system efficiency." }
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
