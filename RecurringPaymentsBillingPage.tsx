import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  RefreshCw, 
  Plus, 
  Minus,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  UserCheck,
  Globe,
  Settings,
  Layers
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function RecurringPaymentsBillingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is a subscription billing system?",
      answer: "A subscription billing system automates recurring payments, invoicing, and subscription management, allowing businesses to handle monthly, yearly, or custom billing cycles efficiently."
    },
    {
      question: "Can I manage trial periods and upgrades?",
      answer: "Yes, our platform supports trial periods, prorated charges for upgrades or downgrades, and automated plan transitions to ensure a smooth customer experience."
    },
    {
      question: "Is this system secure?",
      answer: "Absolutely. All transactions are encrypted, and the system is PCI DSS compliant, ensuring that sensitive customer payment data is always protected."
    },
    {
      question: "Can it handle large subscriber bases?",
      answer: "Yes, our infrastructure is highly scalable and reliable, designed to handle growing subscriber bases and high volumes of recurring transactions seamlessly."
    },
    {
      question: "Does it provide reporting and analytics?",
      answer: "Yes, we offer comprehensive dashboards to track subscriptions, revenue, churn rates, and payment performance for better data-driven decision-making."
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
              RECURRING PAYMENTS & SUBSCRIPTION BILLING SYSTEMS
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight">
              From One-Time to<br />Lifetime Payments
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Automate and manage recurring payments effortlessly. Our Subscription Billing Systems enable businesses to collect one-time, recurring, and lifetime payments securely, with complete control over billing cycles, invoicing, and customer subscriptions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-slate-200/50 transition-all"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-20">
              <ImagePlaceholder text="Recurring Payments & Subscription Billing" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Streamlined Billing */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
            Streamlined Subscription Billing
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Manage recurring payments, automate invoicing, and reduce payment failures with our robust subscription billing platform, designed for SaaS companies, fintech, and any business with recurring revenue models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Automated Recurring Payments</h3>
            <p className="text-slate-500 leading-relaxed">
              Set up automated billing for subscriptions, memberships, or services to ensure timely collections and improved cash flow.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Flexible Billing Cycles</h3>
            <p className="text-slate-500 leading-relaxed">
              Offer customers monthly, quarterly, yearly, or custom billing cycles with support for prorated charges, trial periods, and plan upgrades.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Secure & Compliant</h3>
            <p className="text-slate-500 leading-relaxed">
              All transactions are encrypted and PCI DSS compliant, ensuring that customer payment data is safe and secure at all times.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50/50 border-l-4 border-[#ff5722] p-10 rounded-r-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed mb-6">
              "With Anilax Software's subscription billing system, we streamlined recurring payments, reduced failed transactions, and improved customer retention."
            </p>
            <p className="font-bold text-slate-900">— CFO, SaaS Startup</p>
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
            Our recurring payment and subscription billing platform is perfect for businesses across SaaS, fintech, eCommerce, and service industries looking to simplify revenue collection and manage subscriptions efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "SaaS & Software Companies", desc: "Manage monthly or annual subscription plans, automate renewals, and handle upgrades/downgrades seamlessly with minimal manual effort." },
            { title: "Fintech & Payment Platforms", desc: "Enable recurring bill payments, loan EMIs, and installment collections securely, while maintaining compliance with regulatory standards." },
            { title: "eCommerce & Membership Platforms", desc: "Offer subscription boxes, loyalty programs, or recurring memberships, and automate invoicing, reminders, and payments for better customer retention." },
            { title: "Service Providers", desc: "From gyms to telecom providers, automate recurring service charges, track billing history, and provide easy payment options for customers." },
            { title: "Startups & Small Businesses", desc: "Quickly implement subscription models without heavy backend development, allowing founders to focus on growth and customer experience." },
            { title: "Enterprises", desc: "Centralize subscription and recurring payment management across departments, improving cash flow, reporting, and operational efficiency." }
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
              Our recurring payment and subscription billing systems provide flexibility, security, and automation to support your business growth and customer retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Layers, title: "Flexible Billing Plans", desc: "Create and manage multiple billing plans, trial periods, discounts, and custom cycles to meet customer needs." },
              { icon: RefreshCw, title: "Automated Payment Collection", desc: "Reduce manual effort and failed payments with automatic billing, reminders, and retry logic for declined transactions." },
              { icon: ShieldCheck, title: "Secure Transactions", desc: "All transactions are encrypted, tokenized, and PCI DSS compliant, ensuring customer payment data remains safe." },
              { icon: BarChart3, title: "Analytics & Reporting", desc: "Track subscriptions, revenue, churn rates, and payment performance through comprehensive dashboards for better decision-making." },
              { icon: UserCheck, title: "Customer Management", desc: "Manage subscriber profiles, payment history, and plan upgrades/downgrades efficiently within the platform." },
              { icon: Globe, title: "Scalable & Reliable", desc: "Handle growing subscriber bases and recurring payments seamlessly with a highly available and scalable infrastructure." }
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
