import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  Plus, 
  Minus,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Bell,
  Scale,
  Settings,
  UserCheck
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function UPIPaymentAppsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is a UPI payment app?",
      answer: "A UPI payment app is a mobile application that allows users to send and receive money, pay bills, and perform other financial transactions using the Unified Payments Interface (UPI) system."
    },
    {
      question: "How secure are UPI payment apps?",
      answer: "UPI payment apps use multi-factor authentication, including a secure UPI PIN, and are built on highly secure infrastructure with bank-level encryption to ensure every transaction is protected."
    },
    {
      question: "Can UPI payment apps be integrated with existing systems?",
      answer: "Yes, our UPI solutions are designed with robust APIs that allow for seamless integration with existing ERPs, CRMs, and other business management systems."
    },
    {
      question: "Are UPI payment apps compliant with regulations?",
      answer: "Absolutely. Our applications are built to adhere to all NPCI guidelines and relevant financial regulations to ensure complete compliance and security."
    },
    {
      question: "What features do UPI payment apps offer?",
      answer: "Key features include instant money transfers, bill payments, QR code scanning, multi-bank account linking, transaction history, and real-time notifications."
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
              UPI Payment Apps
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight">
              Empowering Seamless<br />Digital Transactions with UPI
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              At Anilax Software, we specialize in developing secure, scalable, and user-friendly UPI payment applications that enable businesses to offer seamless digital payment experiences. Our solutions are designed to enhance user engagement, drive financial inclusion, and ensure compliance with industry standards.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-slate-200/50 transition-all"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-20">
              <ImagePlaceholder text="UPI Payment Apps" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Solutions */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
            Comprehensive UPI<br />Payment Solutions
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Our UPI payment applications are built to handle a wide range of financial transactions, providing users with a secure and efficient platform for their digital payment needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Instant Money Transfers</h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Enable users to send and receive money instantly between bank accounts, facilitating quick and hassle-free transactions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Bill Payments</h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Allow users to pay utility bills, recharge mobile phones, and settle other recurring payments directly through the app.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">QR Code Payments</h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Integrate QR code scanning functionality to facilitate easy payments at retail stores, restaurants, and other merchant locations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Multi-Bank Account Linking</h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Support linking multiple bank accounts to a single UPI ID, providing users with flexibility in managing their finances.
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
              "Anilax Software's UPI payment solution transformed our digital payment experience, offering our customers a seamless and secure platform."
            </p>
            <p className="font-bold text-slate-900">— CEO, Digital Wallet Startup</p>
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
            Our UPI payment applications cater to a diverse range of industries, providing tailored solutions to meet specific business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Fintech Startups", desc: "Develop innovative payment solutions that attract users and investors alike, driving growth in the competitive fintech landscape." },
            { title: "Retailers & Merchants", desc: "Offer customers a convenient and secure way to make payments, enhancing the shopping experience and increasing sales." },
            { title: "Utility Service Providers", desc: "Streamline bill collection processes by providing customers with an easy-to-use platform for paying utility bills." },
            { title: "Educational Institutions", desc: "Facilitate fee payments and other financial transactions, improving administrative efficiency and student satisfaction." },
            { title: "Government Services", desc: "Enable citizens to make payments for various government services, promoting transparency and reducing administrative overhead." },
            { title: "Healthcare Providers", desc: "Simplify billing processes and enable patients to make payments for medical services, enhancing the overall healthcare experience." }
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
              Platform Capabilities<br />& Benefits
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Our UPI payment applications are designed to offer a range of features that enhance functionality, security, and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: ShieldCheck, title: "Bank-Level Security", desc: "Implement advanced encryption and authentication mechanisms to ensure the safety and privacy of user data and transactions." },
              { icon: Zap, title: "Seamless User Experience", desc: "Design intuitive interfaces that make it easy for users to navigate the app and complete transactions with minimal effort." },
              { icon: Bell, title: "Real-Time Notifications", desc: "Keep users informed about transaction statuses, promotions, and other relevant updates through timely notifications." },
              { icon: Scale, title: "Regulatory Compliance", desc: "Ensure the app adheres to all relevant regulations and standards, including those set by the National Payments Corporation of India (NPCI)." },
              { icon: Smartphone, title: "Scalability", desc: "Build applications that can handle increasing numbers of users and transactions as your business grows." },
              { icon: Settings, title: "Customizable Features", desc: "Offer a range of customizable options to meet the specific needs of different industries and user groups." }
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
