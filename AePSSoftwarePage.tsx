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
  Fingerprint,
  Receipt,
  SmartphoneCharging,
  UserCircle,
  Plane,
  Layers,
  Bus,
  Send,
  UserCheck,
  CreditCard,
  FileText,
  Wallet
} from 'lucide-react';

export default function AePSSoftwarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is AePS Software?",
      answer: "AePS (Aadhaar Enabled Payment System) software enables biometric-based banking services like cash withdrawal, deposit, and balance inquiry using Aadhaar authentication."
    },
    {
      question: "How secure is your AePS platform?",
      answer: "Our platform is built with enterprise-grade security, featuring end-to-end encryption, biometric authentication, and full compliance with UIDAI and NPCI standards."
    },
    {
      question: "Who can use this AePS solution?",
      answer: "It is designed for banks, fintech startups, BC agents, and retailers who want to provide banking services to their customers."
    },
    {
      question: "Does it support multi-bank integration?",
      answer: "Yes, our AePS solution connects to multiple banking networks to ensure high success rates and extended coverage across India."
    },
    {
      question: "Do you offer white-label AePS solutions?",
      answer: "Absolutely. We provide fully customizable white-label solutions that allow you to launch your own branded AePS platform quickly."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center pt-20 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-sm md:text-base font-black text-slate-900 uppercase tracking-[0.3em] mb-8">
              AEPS SOFTWARE
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-950 mb-8 leading-[1.1] tracking-tight">
              Empowering Financial Inclusion Through Aadhaar-Enabled Payments
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Enable instant banking and secure cashless transactions with our advanced AePS Software solution. Designed for fintechs, BC agents, and enterprises — our platform delivers seamless Aadhaar-based withdrawals, deposits, and balance inquiries with enterprise-grade security.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-12 py-5 rounded-full font-bold text-xl shadow-xl shadow-slate-200/50 transition-all mb-20"
            >
              Request a Demo
            </motion.button>
            
            {/* Feature Grid Icons */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-20">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-50 flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-[#ff5722]">
                  <Wallet size={32} />
                </div>
                <span className="font-bold text-slate-900">Cash Withdrawal</span>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-50 flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-[#ff5722]">
                  <FileText size={32} />
                </div>
                <span className="font-bold text-slate-900">Mini Statement</span>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-50 flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-[#ff5722]">
                  <Send size={32} />
                </div>
                <span className="font-bold text-slate-900">Fund Transfer</span>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-50 flex flex-col items-center gap-4 md:col-start-2">
                <div className="w-20 h-20 bg-orange-50 rounded-full flex flex-col items-center justify-center text-[#ff5722] border-2 border-orange-100">
                  <Fingerprint size={32} />
                  <span className="text-[10px] font-black mt-1 uppercase">Aeps</span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-50 flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-[#ff5722]">
                  <BarChart3 size={32} />
                </div>
                <span className="font-bold text-slate-900">Balance Inquiries</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[40%] bg-blue-100/30 rounded-[100%] blur-3xl -z-10"></div>
      </section>

      {/* Feature List Section */}
      <section className="section-container py-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-slate-50/50 p-6 rounded-full flex items-center gap-4 border border-slate-100">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-[#ff5722]">
              <Fingerprint size={20} />
            </div>
            <p className="font-bold text-slate-800">Cash withdrawal, balance enquiry, mini statement, fund transfer</p>
          </div>
          
          <div className="bg-slate-50/50 p-6 rounded-full flex items-center gap-4 border border-slate-100">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-[#ff5722]">
              <CheckCircle2 size={20} />
            </div>
            <p className="font-bold text-slate-800">No Cash, No Card, No Worries — Aadhaar Pay Makes Every Payment Easy!</p>
          </div>

          <div className="bg-slate-50/50 p-6 rounded-full flex items-center gap-4 border border-slate-100">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-[#ff5722]">
              <Layout size={20} />
            </div>
            <p className="font-bold text-slate-800">Track Your Last Transactions Instantly with Mini Statement</p>
          </div>

          <div className="bg-slate-50/50 p-6 rounded-full flex items-center gap-4 border border-slate-100">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-[#ff5722]">
              <Zap size={20} />
            </div>
            <p className="font-bold text-slate-800">No Internet? No Problem — Get Your Bank Balance Instantly!</p>
          </div>

          <div className="bg-slate-50/50 p-6 rounded-full flex items-center gap-4 border border-slate-100">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-[#ff5722]">
              <Scale size={20} />
            </div>
            <p className="font-bold text-slate-800">Smart Earnings Made Simple — Instant Commission. Instant Trust</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-container py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-black text-slate-950 mb-12">
            Next-Gen AePS Platform
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-20">
            Our AePS (Aadhaar Enabled Payment System) software helps financial institutions, microbanks, and fintech service providers extend digital banking services to every corner of the country — securely and efficiently.
          </p>

          <div className="space-y-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-950 mb-8">Complete AePS Functionality</h3>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
                Enable Aadhaar-based cash withdrawals, balance inquiries, mini statements, and fund transfers directly linked to customers' bank accounts. Our APIs ensure high uptime and instant response times.
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-950 mb-8">Built for Scale & Security</h3>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
                Engineered with enterprise-grade security, PCI DSS compliance, and Aadhaar data protection protocols, our AePS solution ensures reliability for both rural agents and large-scale payment networks.
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
              "Anilax Software helped us deploy a nationwide AePS network serving thousands of customers daily — reliable, fast, and fully compliant."
            </p>
            <p className="font-bold text-slate-900">— Founder, NeoBanking Startup</p>
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
            Our AePS Software empowers banks, fintech startups, and payment service providers to extend banking services to underserved areas and offer seamless Aadhaar-based financial solutions across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Banks & NBFCs", desc: "Integrate Aadhaar-enabled banking services with your existing infrastructure. Enable rural access, reduce operational overhead, and extend reach with minimal setup costs." },
            { title: "Fintech Startups", desc: "Leverage AePS APIs to build inclusive financial products such as cash-out agents, balance checks, and domestic remittance systems — all with instant authentication and secure biometrics." },
            { title: "Micro ATMs & CSPs", desc: "Use AePS to provide ATM-like services in remote locations. Agents can perform withdrawals, deposits, and fund transfers for any bank linked with Aadhaar authentication." },
            { title: "Payment Service Providers (PSPs)", desc: "Integrate AePS within your transaction network to expand offerings, manage real-time settlements, and provide a unified agent dashboard with instant KYC verification." },
            { title: "Government & Public Sector", desc: "Empower financial inclusion programs by enabling AePS-based benefit disbursements, pension withdrawals, and subsidy transfers securely and transparently." },
            { title: "BC Agents & Retailers", desc: "Offer banking services directly from your store — earn commissions on each transaction and provide convenience to customers with instant Aadhaar-based transactions." }
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
              Why Choose Our AePS Platform?
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Our platform ensures high-performance Aadhaar-enabled transactions with a secure, scalable, and API-driven architecture built for real-world fintech operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Seamless API Integration", desc: "Integrate AePS services quickly with your app or portal using our secure, developer-friendly REST APIs and detailed documentation." },
              { title: "Multi-Bank Connectivity", desc: "Connect to multiple banking networks for faster settlements and extended coverage across regions with a single integration point." },
              { title: "Real-Time Transaction Monitoring", desc: "Get instant visibility on transactions, settlements, and agent performance through our centralized admin and analytics dashboard." },
              { title: "High Security & Compliance", desc: "Compliant with UIDAI, NPCI, and RBI norms, ensuring all Aadhaar data is encrypted and securely processed through verified endpoints." },
              { title: "Agent Management System", desc: "Manage agent onboarding, commissions, KYC, and real-time performance insights through a single dashboard." },
              { title: "Scalable Infrastructure", desc: "Handle millions of transactions seamlessly with high uptime, redundant servers, and cloud-native architecture designed for fintech growth." }
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
