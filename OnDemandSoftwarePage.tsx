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
  Smartphone,
  Layout,
  Scale,
  Users,
  Settings,
  Clock
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function OnDemandSoftwarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is On-Demand Software Development?",
      answer: "It is the creation of custom software applications designed to meet specific business or customer needs, delivered rapidly with high scalability and reliability."
    },
    {
      question: "Can you build mobile and web applications?",
      answer: "Yes, we develop responsive mobile apps and web platforms with seamless performance, intuitive UI/UX, and robust backend architecture."
    },
    {
      question: "Is the software secure?",
      answer: "Absolutely. We implement enterprise-grade security protocols, data encryption, and regulatory compliance for safe and reliable operations."
    },
    {
      question: "Is it suitable for startups?",
      answer: "Yes, we help startups build MVPs and prototype apps quickly to validate ideas, attract investors, and enter the market faster with minimal risk."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we provide ongoing support, updates, and monitoring to ensure the applications remain secure, efficient, and up-to-date."
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
              ON-DEMAND SOFTWARE DEVELOPMENT
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight">
              Seamless<br />Experiences, Built Fast
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our On-Demand Software Development services help businesses deliver custom applications quickly and efficiently. From mobile apps to web platforms, we provide scalable, reliable, and user-focused solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-slate-200/50 transition-all"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-20">
              <ImagePlaceholder text="On-Demand Software Development" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
            Custom Solutions for Your Needs
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We build tailored on-demand software solutions for various industries, enabling businesses to respond faster to customer demands and market changes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Mobile & Web Applications</h3>
            <p className="text-slate-500 leading-relaxed">
              Develop responsive mobile apps and web platforms with seamless performance, intuitive UI/UX, and robust backend architecture.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Rapid Development & Deployment</h3>
            <p className="text-slate-500 leading-relaxed">
              Accelerate delivery with agile methodologies, ensuring fast prototyping, iterative improvements, and timely releases.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Scalable & Secure Systems</h3>
            <p className="text-slate-500 leading-relaxed">
              Our solutions are designed for scalability and security, handling growing user bases while protecting sensitive data and ensuring compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50/50 border-l-4 border-[#ff5722] p-10 rounded-r-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed mb-6">
              "Anilax Software helped us quickly launch a mobile app that scaled seamlessly as our user base grew, providing a great on-demand experience."
            </p>
            <p className="font-bold text-slate-900">— CTO, On-Demand Services Startup</p>
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
            Our on-demand software development services are ideal for startups, enterprises, and service providers looking to deliver fast, reliable, and user-centric applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Startups", desc: "Build MVPs and prototype apps quickly to validate ideas, attract investors, and enter the market faster with minimal risk." },
            { title: "Enterprises", desc: "Modernize operations with custom applications, improve internal workflows, and deliver seamless customer experiences efficiently." },
            { title: "Service Providers", desc: "Create on-demand platforms for food delivery, ride-hailing, home services, and more, with robust backend management and real-time tracking." },
            { title: "E-commerce & Retail", desc: "Develop on-demand shopping apps, inventory management systems, and delivery tracking solutions to enhance customer convenience." },
            { title: "Healthcare & Wellness", desc: "Deliver telemedicine, appointment booking, and on-demand health service applications for patients and providers." },
            { title: "Logistics & Transportation", desc: "Optimize fleet management, delivery tracking, and real-time logistics platforms to provide seamless on-demand experiences." }
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
              Our on-demand software development ensures rapid deployment, scalability, and seamless user experiences across industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Clock, title: "Rapid Prototyping & MVPs", desc: "Quickly test and validate ideas with prototypes and minimum viable products built for speed and efficiency." },
              { icon: Smartphone, title: "Custom App Development", desc: "Develop feature-rich mobile and web applications tailored to specific business requirements." },
              { icon: Scale, title: "Scalable Architecture", desc: "Our software is built to handle growth, ensuring smooth performance even with increasing users and transactions." },
              { icon: Users, title: "User-Centric Design", desc: "Design interfaces and experiences focused on usability, engagement, and satisfaction for end-users." },
              { icon: ShieldCheck, title: "Security & Compliance", desc: "Implement enterprise-grade security protocols, data encryption, and regulatory compliance for safe and reliable operations." },
              { icon: Settings, title: "Maintenance & Support", desc: "Provide ongoing support, updates, and monitoring to ensure the applications remain secure, efficient, and up-to-date." }
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
