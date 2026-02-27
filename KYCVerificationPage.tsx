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
  UserCheck,
  RefreshCw,
  Layers,
  Monitor,
  Lock,
  FileSearch,
  Fingerprint,
  Scan
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function KYCVerificationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is KYC Verification Software?",
      answer: "Our software automates identity verification, KYC checks, and AML compliance to help businesses onboard customers efficiently and securely."
    },
    {
      question: "Is it compliant with regulatory standards?",
      answer: "Yes, our KYC solution is built to meet the latest regulatory standards, including RBI, SEBI, and global AML/CTF guidelines."
    },
    {
      question: "Can I integrate it into my existing system?",
      answer: "Absolutely. We provide developer-friendly APIs and SDKs that allow you to embed KYC verification directly into your web or mobile applications."
    },
    {
      question: "Does it support multi-channel onboarding?",
      answer: "Yes, our platform supports onboarding across web, mobile, and offline channels, providing a seamless experience for your customers."
    },
    {
      question: "What support do you offer?",
      answer: "We provide comprehensive technical support, implementation assistance, and regular updates to ensure your KYC processes remain compliant and efficient."
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
              KYC VERIFICATION
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-10 leading-[1.1] tracking-tight">
              Streamlined, Secure, and Compliance-Ready Identity Verification
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 mb-14 leading-relaxed max-w-3xl mx-auto">
              Ensure seamless customer onboarding and compliance with our KYC Verification software. Automate identity checks, document verification, and AML screening while reducing operational overhead and maintaining regulatory compliance.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-12 py-5 rounded-full font-bold text-xl shadow-xl shadow-slate-200/50 transition-all mb-20"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-10">
              <ImagePlaceholder text="KYC Verification Platform" />
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
            <ImagePlaceholder text="KYC Illustration" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
                Comprehensive KYC Verification Solutions
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
                Our platform simplifies the verification of identity, address, and compliance checks for individuals and businesses. Integrate seamlessly with banks, fintechs, and digital service providers to accelerate onboarding and reduce fraud risk.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">
                Automated Identity Verification
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                Validate government IDs, passports, and other documents with AI-powered OCR and facial recognition for accurate, instant verification.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">
                AML & Compliance Checks
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                Perform background checks, PEP/blacklist screening, and regulatory compliance verification in real time to prevent fraud and adhere to guidelines.
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
              "Using Anilax Software's KYC Verification system, we onboarded thousands of customers in days rather than weeks, while maintaining full regulatory compliance."
            </p>
            <p className="font-bold text-slate-900">— Head of Operations, Fintech Startup</p>
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
            Our KYC Verification platform is ideal for banks, fintechs, NBFCs, payment service providers, and enterprises seeking secure, fast, and compliant identity verification solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Banks & NBFCs", desc: "Digitize account opening and loan processing with automated identity verification and compliance checks, reducing manual workloads and errors." },
            { title: "Fintech Startups", desc: "Integrate plug-and-play KYC APIs to onboard users faster while maintaining full compliance with AML and regulatory standards." },
            { title: "Payment Service Providers", desc: "Verify merchants and customers quickly with real-time ID checks, reducing onboarding friction and preventing fraudulent activities." },
            { title: "Enterprises & Corporates", desc: "Streamline employee onboarding and vendor verification processes with secure and auditable KYC procedures." },
            { title: "Government & Public Sector", desc: "Enable secure citizen identity verification for subsidies, benefits, and public services while ensuring regulatory compliance." },
            { title: "Agents & Distributors", desc: "Quickly verify customer identities before transactions, reducing risk and improving service reliability across networks." }
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
              Why Choose Our KYC Verification Platform?
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Our solution combines automation, security, and regulatory compliance to help businesses onboard customers faster, reduce fraud, and maintain trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Automated ID & Document Checks", desc: "Verify IDs, passports, and government-issued documents with AI-based OCR and facial recognition technology." },
              { title: "AML & Risk Screening", desc: "Perform background checks, PEP/blacklist screenings, and transaction risk assessments for full compliance." },
              { title: "Multi-Channel Integration", desc: "Integrate with web, mobile, or enterprise platforms for seamless KYC verification across channels." },
              { title: "White-Label & API Access", desc: "Launch your own branded KYC verification solution or embed our APIs into your existing platform with full customization." },
              { title: "Real-Time Reporting", desc: "Monitor verification status, exceptions, and compliance metrics with comprehensive dashboards and downloadable reports." },
              { title: "Secure & Compliant", desc: "Ensure data privacy and security with PCI DSS, ISO 27001 compliance, and encrypted data storage for all KYC processes." }
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
