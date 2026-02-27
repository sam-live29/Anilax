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
  Network
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function MLMPortalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is a Multi-Level Marketing Portal?",
      answer: "It is a platform to manage MLM networks, automate commission payouts, track member activity, and integrate financial operations efficiently."
    },
    {
      question: "Can Brex cards be integrated?",
      answer: "Yes, our portal supports Brex card integration for seamless payouts, rewards distribution, and financial management within the platform."
    },
    {
      question: "Is it suitable for startups?",
      answer: "Absolutely. We help MLM startups launch their products or services quickly with automated member management and secure transaction systems."
    },
    {
      question: "Can this platform handle global MLM networks?",
      answer: "Yes, our scalable architecture supports growing MLM networks internationally with multi-currency support and real-time network tracking."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer continuous maintenance, updates, and technical support to ensure your MLM portal remains secure and efficient."
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
              MULTI-LEVEL MARKETING PORTAL
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight">
              Embed Brex Cards<br />in Your Products
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our Multi-Level Marketing (MLM) Portal helps businesses manage their network, commissions, and payments efficiently while integrating Brex cards for seamless financial operations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-slate-200/50 transition-all"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-20">
              <ImagePlaceholder text="Multi-Level Marketing Portal" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* All-in-One Section */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
            Complete MLM Management Solutions
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Manage members, track performance, handle commissions, and integrate Brex cards for payouts — all in one unified platform designed for MLM businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Network & Member Management</h3>
            <p className="text-slate-500 leading-relaxed">
              Efficiently manage your MLM network, monitor member activities, and streamline onboarding and hierarchy tracking.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Commission & Payment Automation</h3>
            <p className="text-slate-500 leading-relaxed">
              Automate commission calculations, payout processing, and reward distribution with integrated Brex card functionalities for fast and secure payments.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Real-Time Analytics & Reporting</h3>
            <p className="text-slate-500 leading-relaxed">
              Gain insights into member performance, network growth, and financial transactions with advanced analytics and reporting tools.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50/50 border-l-4 border-[#ff5722] p-10 rounded-r-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed mb-6">
              "Anilax Software helped us implement a fully functional MLM portal with integrated Brex cards, simplifying commission payouts and tracking."
            </p>
            <p className="font-bold text-slate-900">— CEO, MLM Startup</p>
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
            Our MLM Portal is ideal for businesses and startups seeking efficient network management, automated payouts, and enhanced financial operations with Brex card integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "MLM Companies", desc: "Manage distributors, track sales, and monitor network growth efficiently while automating commissions and rewards." },
            { title: "Startups & Entrepreneurs", desc: "Launch MLM-based products or services quickly with automated member management, secure transactions, and Brex card-enabled payouts." },
            { title: "Payment & Finance Teams", desc: "Streamline payment processing, Brex card issuance, and reward distribution with automated workflows and compliance controls." },
            { title: "Global MLM Networks", desc: "Expand operations internationally with multi-currency support, regional compliance, and real-time network tracking." },
            { title: "Retail & E-commerce Integration", desc: "Integrate MLM functionality into retail or e-commerce products to reward referrals and incentivize sales through embedded Brex cards." },
            { title: "Analytics & Compliance Teams", desc: "Monitor transactions, track commissions, and ensure regulatory compliance across your MLM network with comprehensive dashboards and reports." }
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
              Our MLM portal combines automation, analytics, and financial integration to create a robust platform for multi-level marketing businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Zap, title: "Automated Commission Management", desc: "Calculate commissions automatically for every level, ensuring accuracy and timely payouts to members." },
              { icon: CreditCard, title: "Brex Card Integration", desc: "Enable seamless payments and rewards distribution using embedded Brex cards for network members and distributors." },
              { icon: Network, title: "Network Hierarchy & Tracking", desc: "Visualize and manage your MLM network with easy-to-use tools for hierarchy tracking, member activity, and growth monitoring." },
              { icon: BarChart3, title: "Analytics & Reporting", desc: "Track network performance, sales metrics, and financial transactions with actionable insights and reports." },
              { icon: ShieldCheck, title: "Security & Compliance", desc: "Ensure secure transactions, data privacy, and regulatory compliance for your MLM operations and financial flows." },
              { icon: Scale, title: "Scalable Architecture", desc: "Support growing MLM networks with reliable and scalable technology to handle increasing members and transactions seamlessly." }
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
