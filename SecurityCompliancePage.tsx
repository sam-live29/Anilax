import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Minus, Shield, ClipboardCheck, Settings } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function SecurityCompliancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the Security & Compliance Software platform?",
      answer: "Our platform provides integrated tools for data protection, risk management, and regulatory compliance across industries and geographies."
    },
    {
      question: "How does the platform ensure data security?",
      answer: "We use end-to-end encryption, tokenization, and multi-layer security engines to safeguard data at rest and in transit."
    },
    {
      question: "Is the platform compliant with global regulations?",
      answer: "Yes, our framework is designed to meet PCI-DSS, GDPR, and other major regulatory standards globally."
    },
    {
      question: "Can it integrate with existing systems?",
      answer: "Absolutely. Our unified system is designed to integrate seamlessly with your existing infrastructure and workflows."
    },
    {
      question: "What kind of support is provided?",
      answer: "We offer 24/7 technical support, dedicated compliance specialists, and comprehensive documentation for all our enterprise clients."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white min-h-[80vh] flex flex-col justify-center px-6 py-20 relative overflow-hidden">
        {/* Sea green glow diverging from the left - broad and circular */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_50%,rgba(16,185,129,0.4)_0%,rgba(16,185,129,0.1)_40%,transparent_80%)] pointer-events-none"></div>
        {/* Circular rays effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-[conic-gradient(from_270deg_at_0%_50%,transparent_0deg,rgba(16,185,129,0.1)_5deg,transparent_10deg,rgba(16,185,129,0.1)_15deg,transparent_20deg)] opacity-30 pointer-events-none"></div>
        {/* Extra black side on the right and bottom */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto w-full z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight"
          >
            Security & Compliance Software for Regulated Businesses
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl leading-relaxed"
          >
            Protect your platform with enterprise-grade security, automated compliance, and real-time risk monitoring built for financial and regulated ecosystems.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-orange-500/20 active:scale-95"
          >
            Get started
          </motion.button>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 text-slate-950 leading-tight">
            Built-In Security & Compliance Framework
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Automate regulatory compliance, reduce risk exposure, and maintain continuous security visibility across your platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="border border-slate-200 rounded-[24px] p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-black mb-3 text-slate-950">Regulatory Compliance Automation</h3>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Automate KYC, AML, PCI-DSS, and data protection requirements with configurable compliance workflows.
            </p>
          </div>

          <div className="bg-slate-50/50 border border-slate-100 rounded-[24px] p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-black mb-3 text-slate-950">Real-Time Risk Monitoring</h3>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Continuously monitor user activity, transactions, and system behavior to detect anomalies and threats early.
            </p>
          </div>

          <div className="border border-slate-200 rounded-[24px] p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-black mb-3 text-slate-950">Audit & Reporting Controls</h3>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Generate audit-ready logs, compliance reports, and activity trails for regulators and internal teams.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-4xl font-serif italic text-slate-800 leading-relaxed mb-12">
            "The security and compliance platform gave us confidence to scale globally while staying aligned with regulatory and data protection standards."
          </blockquote>
          <cite className="text-slate-500 text-lg not-italic">— CTO, Financial Services Company</cite>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-24 px-6 bg-slate-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-8xl font-black mb-8 text-slate-950 leading-tight">
              Enterprise-Grade Security Architecture
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A unified system designed to safeguard data, prevent fraud, and simplify compliance management.
            </p>
          </div>

          <div className="space-y-32">
            {/* Advanced Fraud & Threat Detection */}
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-950">Advanced Fraud & Threat Detection</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Multi-layer security engines analyze behavior patterns, transaction velocity, device fingerprinting, and IP intelligence to detect fraud in real time.
              </p>
              <a href="#" className="text-[#ff5722] font-bold text-lg hover:underline flex items-center gap-2">
                Explore fraud controls →
              </a>
              <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <ImagePlaceholder text="Fraud Detection System" />
              </div>
            </div>

            {/* Data Protection & Encryption */}
            <div className="max-w-2xl ml-auto text-right">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-950">Data Protection & Encryption</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                End-to-end encryption, tokenization, and access controls ensure sensitive data remains protected at rest and in transit.
              </p>
              <a href="#" className="text-[#ff5722] font-bold text-lg hover:underline flex items-center gap-2 justify-end">
                Explore data security →
              </a>
              <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <ImagePlaceholder text="Data Security and Encryption" />
              </div>
            </div>

            {/* Compliance Monitoring & Audits */}
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-950">Compliance Monitoring & Audits</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Maintain continuous compliance with automated alerts, audit logs, and configurable policy enforcement.
              </p>
              <a href="#" className="text-[#ff5722] font-bold text-lg hover:underline flex items-center gap-2">
                Explore compliance →
              </a>
              <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <ImagePlaceholder text="Compliance Monitoring Platform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-black mb-4 text-slate-950">Security by Design</h3>
            <p className="text-slate-500 leading-relaxed">
              Security embedded across infrastructure, applications, and user access layers.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
              <ClipboardCheck size={32} />
            </div>
            <h3 className="text-2xl font-black mb-4 text-slate-950">Audit-Ready Compliance</h3>
            <p className="text-slate-500 leading-relaxed">
              Always prepared for internal audits, external reviews, and regulatory inspections.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-emerald-500 mb-6">
              <Settings size={32} />
            </div>
            <h3 className="text-2xl font-black mb-4 text-slate-950">Scalable & Configurable</h3>
            <p className="text-slate-500 leading-relaxed">
              Adapt compliance rules and security controls as your business and regulations evolve.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-8xl font-black mb-8 text-slate-950 leading-tight">
              Secure Your Platform. Stay Compliant.
            </h2>
            <p className="text-slate-500 text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed">
              Our security and compliance software helps organizations reduce risk, protect data, and meet regulatory obligations without slowing growth.
            </p>
            <a href="#" className="text-[#ff5722] font-bold text-xl hover:underline flex items-center gap-2">
              Talk to our experts →
            </a>
          </div>
          <div className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-xl">
            <ImagePlaceholder text="Security Compliance Platform" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center text-slate-950">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-[32px] overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-[#ff5722] shadow-lg' : 'border-slate-200'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className="text-xl md:text-2xl font-bold text-slate-900 pr-8">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="text-[#ff5722] flex-shrink-0" size={24} />
                  ) : (
                    <Plus className="text-[#ff5722] flex-shrink-0" size={24} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-8">
                    <p className="text-slate-500 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
