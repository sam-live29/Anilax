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
  Plane,
  Bus,
  MapPin,
  Calendar,
  CreditCard,
  RefreshCw,
  Layers,
  Monitor,
  Lock
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function TravelBookingSoftwarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Bus/Flight Booking Software?",
      answer: "It's an all-in-one booking solution that helps travel agencies and aggregators manage bus and flight reservations, payments, and customer communication efficiently."
    },
    {
      question: "Does it support integration with GDS systems?",
      answer: "Yes, our platform is designed to integrate seamlessly with major GDS (Global Distribution Systems) and airline/bus operator APIs for real-time inventory and pricing."
    },
    {
      question: "Can I manage agents and distributors?",
      answer: "Absolutely. The software includes a robust agent management module with role-based access, commission settings, and real-time performance tracking."
    },
    {
      question: "Is the system suitable for both B2B and B2C models?",
      answer: "Yes, our travel booking software supports both B2B (agent-assisted) and B2C (direct customer) booking models through a unified dashboard."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support, regular system updates, and dedicated account management to ensure your travel business operates without any downtime."
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
              BUS/FLIGHT BOOKING
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-10 leading-[1.1] tracking-tight">
              Smart, Scalable, and Seamless Booking Management
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 mb-14 leading-relaxed max-w-3xl mx-auto">
              Revolutionize your travel operations with our Bus and Flight Booking Software — a unified platform designed to handle reservations, payments, agent commissions, and real-time availability efficiently. Empower agencies, aggregators, and travelers with automation and accuracy.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-12 py-5 rounded-full font-bold text-xl shadow-xl shadow-slate-200/50 transition-all mb-20"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-10">
              <ImagePlaceholder text="Bus/Flight Booking Platform" />
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
            <ImagePlaceholder text="Booking Illustration" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
                End-to-End Bus & Flight Booking Platform
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
                Our system simplifies the entire travel booking journey — from searching and booking to ticket issuance and payment processing. Integrated with major APIs and GDS systems, it ensures accuracy, speed, and reliability at every step.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">
                Unified Booking Engine
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                Handle both bus and flight bookings from a single dashboard. Access live seat availability, manage cancellations, refunds, and commissions — all within one secure platform.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">
                Agent & Distributor Management
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                Empower travel agents with role-based access, real-time inventory updates, and automated settlements. Create hierarchies, manage margins, and streamline network performance.
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
              "Anilax Software's Bus and Flight Booking solution helped us automate operations across 500+ agents — reducing manual errors and boosting profits by 40%."
            </p>
            <p className="font-bold text-slate-900">— Director, Travel Aggregator Company</p>
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
            Our Bus and Flight Booking Software is tailored for travel businesses, agents, and enterprises aiming to deliver fast, reliable, and fully automated ticketing experiences for customers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Travel Agencies", desc: "Automate bookings, manage seat availability, and offer dynamic pricing to customers. Gain access to multiple bus operators and airlines from one dashboard." },
            { title: "Online Travel Aggregators", desc: "Integrate APIs for both flights and buses to provide real-time data, quick searches, and instant ticket confirmations — all within your existing platform." },
            { title: "Corporate Travel Managers", desc: "Optimize employee travel expenses by setting budgets, tracking trips, and automating booking approvals while maintaining compliance with company policies." },
            { title: "Bus Operators", desc: "Digitize your entire booking process — manage routes, schedules, seat inventory, and fare collection in real time to enhance operational efficiency." },
            { title: "Flight Consolidators", desc: "Connect with multiple GDS systems, automate ticketing, and manage agent commissions effectively through an integrated API platform." },
            { title: "Enterprises & Institutions", desc: "Facilitate employee or customer travel with centralized booking, expense tracking, and report generation under a unified, cloud-based dashboard." }
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
              Why Choose Our Bus/Flight Booking Platform?
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Built for automation, flexibility, and scalability — our booking system simplifies travel management while increasing accuracy and profitability across channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Multi-API & GDS Integration", desc: "Access real-time availability and pricing from multiple bus operators and airlines with seamless third-party API integration." },
              { title: "Smart Commission & Settlement", desc: "Automate agent commissions, distributor payouts, and vendor settlements with instant reconciliation and transparent reports." },
              { title: "Multi-Currency & Multi-Language Support", desc: "Expand globally with local currencies, regional pricing, and multiple language options for agents and customers alike." },
              { title: "White-Label & Franchise Solutions", desc: "Launch your own branded travel platform with customized design, domain, and logo — ideal for startups, agents, and enterprises." },
              { title: "Real-Time Reports & Analytics", desc: "Track transactions, customer behavior, and revenue trends with comprehensive dashboards and downloadable reports." },
              { title: "Secure Payment Gateway Integration", desc: "Accept payments through cards, wallets, UPI, or net banking — all secured with PCI DSS-compliant encryption and fraud monitoring." }
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
