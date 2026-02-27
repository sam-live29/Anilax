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
  BarChart3,
  Globe,
  Settings,
  CreditCard,
  Layers
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function QRCodePOSSolutionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is SoftPOS and SmartPOS?",
      answer: "SoftPOS allows any NFC-enabled smartphone to act as a payment terminal, while SmartPOS refers to dedicated, feature-rich hardware devices capable of handling multiple payment methods and business applications."
    },
    {
      question: "How do QR Code payments work?",
      answer: "QR Code payments work by scanning a static or dynamic code using a payment app (like UPI or a wallet), which then initiates a secure transfer of funds from the customer's account to the merchant."
    },
    {
      question: "Are these POS solutions secure?",
      answer: "Yes, our solutions are PCI DSS compliant and use end-to-end encryption and tokenization to ensure that every transaction and sensitive data point is fully protected."
    },
    {
      question: "Can these solutions be scaled for large merchants?",
      answer: "Absolutely. Our POS infrastructure is designed to scale across thousands of locations, providing centralized management and real-time reporting for large-scale operations."
    },
    {
      question: "What types of businesses can use these POS solutions?",
      answer: "Our solutions are ideal for retail stores, restaurants, cafes, transportation services, event organizers, hospitality providers, and SMEs looking to modernize their payment acceptance."
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
              QR Code & POS (SoftPOS, SmartPOS) Solutions
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight">
              Future-Ready POS<br />for Every Merchant
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Empower your business with next-generation payment solutions. Our QR Code and POS systems, including SoftPOS and SmartPOS, enable merchants to accept payments anytime, anywhere, securely and efficiently.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-slate-200/50 transition-all"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-20">
              <ImagePlaceholder text="QR Code & POS Solutions" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Solutions */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
            Comprehensive POS &<br />QR Payment Solutions
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            From small retailers to large merchants, our POS and QR code solutions offer fast, secure, and versatile payment acceptance, improving customer experience and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">SoftPOS Solutions</h3>
            <p className="text-slate-500 leading-relaxed">
              Transform any NFC-enabled smartphone or tablet into a contactless payment terminal without extra hardware, enabling quick and convenient transactions.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">SmartPOS Devices</h3>
            <p className="text-slate-500 leading-relaxed">
              Deploy feature-rich POS devices capable of handling multiple payment methods, loyalty programs, and real-time transaction reporting for enhanced merchant operations.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">QR Code Payments</h3>
            <p className="text-slate-500 leading-relaxed">
              Allow customers to pay instantly using UPI, wallets, or banking apps by scanning dynamic or static QR codes, reducing cash dependency and improving convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50/50 border-l-4 border-[#ff5722] p-10 rounded-r-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed mb-6">
              "Anilax Software helped us deploy SmartPOS and QR Code payment solutions across our retail outlets, dramatically improving transaction speed and customer satisfaction."
            </p>
            <p className="font-bold text-slate-900">— CEO, Retail Chain</p>
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
            Our QR Code & POS solutions are ideal for merchants across retail, hospitality, transportation, and service industries looking to modernize payment acceptance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Retail Stores", desc: "Accept multiple payment methods including contactless, card, and QR payments, streamlining checkout and improving customer experience." },
            { title: "Restaurants & Cafes", desc: "Enable fast bill payments and table-side ordering through SoftPOS or SmartPOS devices, improving service efficiency." },
            { title: "Transportation & Mobility", desc: "Facilitate cashless ticketing and fare collection with QR code scanning and mobile POS devices, enhancing commuter convenience." },
            { title: "Event & Hospitality", desc: "Enable seamless payments for ticketing, merchandise, and food & beverages at events, hotels, and resorts." },
            { title: "Service Providers", desc: "Offer mobile and contactless payment options for field services, salons, and service-based businesses, increasing payment efficiency." },
            { title: "SMEs & Micro Merchants", desc: "Adopt cost-effective SoftPOS solutions to accept digital payments without investing in expensive hardware, ensuring financial inclusion and convenience." }
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
              Our solutions combine the latest technology with ease of use, security, and scalability to create a seamless payment ecosystem for all merchants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: CreditCard, title: "Contactless Payments", desc: "Enable NFC and QR-based payments for fast, secure, and hygienic transactions across all merchant touchpoints." },
              { icon: BarChart3, title: "Real-Time Transaction Monitoring", desc: "Access detailed dashboards and analytics to monitor transactions, settlement status, and payment trends in real-time." },
              { icon: Layers, title: "Multi-Payment Acceptance", desc: "Support cards, UPI, wallets, and other digital payment methods, providing flexibility to merchants and convenience to customers." },
              { icon: Globe, title: "Scalability & Flexibility", desc: "Scale POS deployments across multiple locations and integrate additional features like loyalty programs and promotions easily." },
              { icon: ShieldCheck, title: "Secure & Compliant", desc: "Ensure PCI DSS compliance, end-to-end encryption, and tokenization to protect transactions and sensitive data." },
              { icon: Settings, title: "Customizable Workflows", desc: "Tailor payment flows, settlement schedules, and reporting to match merchant operational needs." }
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
