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
  MessageSquare,
  Layout,
  RefreshCw,
  Scale,
  UserCheck
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function CRMHRMSPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is CRM/HRMS software?",
      answer: "CRM/HRMS software integrates customer relationship management and human resource management to streamline employee and customer workflows in one platform."
    },
    {
      question: "Can it manage employee payroll and attendance?",
      answer: "Yes, our HRMS module includes automated payroll processing, attendance tracking, and leave management to ensure accurate and timely operations."
    },
    {
      question: "Does it help with sales and customer management?",
      answer: "Absolutely. The CRM module allows you to track leads, manage sales pipelines, and monitor customer interactions to improve conversions and retention."
    },
    {
      question: "Is the platform secure?",
      answer: "We prioritize data security with encrypted storage, role-based access control, and compliance with industry regulations to protect sensitive information."
    },
    {
      question: "Is it suitable for all business sizes?",
      answer: "Our scalable solution is designed to grow with your business, making it ideal for startups, mid-sized enterprises, and large organizations."
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
              CRM/HRMS SOFTWARE
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight">
              Stronger Relationships,<br />Smarter Growth
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our CRM and HRMS software helps businesses streamline employee management and customer relationships. Drive productivity, improve engagement, and make data-driven decisions for sustainable growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-slate-200/50 transition-all"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-20">
              <ImagePlaceholder text="CRM/HRMS Software" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* All-in-One Section */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
            All-in-One CRM & HRMS Platform
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Manage employees, track performance, and nurture customer relationships from a single unified platform designed for modern enterprises and growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Customer Relationship Management (CRM)</h3>
            <p className="text-slate-500 leading-relaxed">
              Track leads, manage sales pipelines, automate marketing campaigns, and monitor customer interactions to improve conversions and retention.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Human Resource Management System (HRMS)</h3>
            <p className="text-slate-500 leading-relaxed">
              Manage employee data, attendance, payroll, performance reviews, recruitment, and leave management efficiently in one system.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Analytics & Reporting</h3>
            <p className="text-slate-500 leading-relaxed">
              Gain actionable insights with dashboards and reports on sales performance, employee productivity, and organizational health.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50/50 border-l-4 border-[#ff5722] p-10 rounded-r-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed mb-6">
              "With Anilax Software's CRM/HRMS platform, we streamlined HR processes and strengthened our customer relationships, resulting in improved growth and efficiency."
            </p>
            <p className="font-bold text-slate-900">— CEO, Mid-Sized Enterprise</p>
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
            Our CRM/HRMS platform empowers businesses of all sizes to manage employees, streamline operations, and enhance customer engagement effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Small & Medium Businesses", desc: "Centralize employee management, track attendance, automate payroll, and maintain a complete record of customer interactions to improve efficiency and growth." },
            { title: "Large Enterprises", desc: "Coordinate HR processes across multiple departments, manage employee lifecycle, and leverage CRM data for strategic decision-making and improved customer relationships." },
            { title: "Sales & Marketing Teams", desc: "Track leads, opportunities, campaigns, and customer interactions efficiently, enabling data-driven decisions that enhance sales performance and customer satisfaction." },
            { title: "HR & Payroll Departments", desc: "Streamline recruitment, payroll, attendance, leave management, and employee performance evaluations to save time and reduce errors." },
            { title: "Customer Support Teams", desc: "Enhance customer service with real-time data on customer interactions, issue tracking, and feedback management for better relationships and loyalty." },
            { title: "Startups & Growing Companies", desc: "Implement a scalable CRM/HRMS solution to manage employees, automate workflows, and track customer relationships efficiently as your business grows." }
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
              Our CRM/HRMS software offers automation, analytics, and secure management tools to boost productivity and drive smarter growth across your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Users, title: "Employee Management", desc: "Centralize employee records, track attendance, and manage leaves, performance reviews, and payroll efficiently." },
              { icon: BarChart3, title: "Lead & Sales Tracking", desc: "Monitor leads, sales pipelines, and customer interactions to maximize revenue and retention rates." },
              { icon: RefreshCw, title: "Automated Workflows", desc: "Reduce manual tasks with automated HR and CRM workflows, saving time and improving operational efficiency." },
              { icon: Zap, title: "Analytics & Insights", desc: "Gain actionable insights through dashboards and reports for HR metrics, sales performance, and customer behavior." },
              { icon: ShieldCheck, title: "Secure & Compliant", desc: "Ensure employee and customer data security with encrypted storage, role-based access, and compliance with regulations." },
              { icon: Scale, title: "Scalable Solution", desc: "Our platform grows with your business, allowing seamless onboarding of new employees, customers, and departments without disruption." }
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
