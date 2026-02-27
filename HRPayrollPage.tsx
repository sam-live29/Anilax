import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Minus, BarChart3, Lock, Settings } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function HRPayrollPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the HR & Payroll Software platform?",
      answer: "Our platform integrates HR and payroll functions into a single solution, streamlining processes and ensuring compliance."
    },
    {
      question: "How does the platform ensure compliance?",
      answer: "We automate tax calculations, statutory deductions, and regulatory filings to ensure your payroll is always compliant with local laws."
    },
    {
      question: "Can the platform integrate with existing systems?",
      answer: "Yes, our software is designed to integrate seamlessly with your existing ERP, accounting, and time-tracking systems."
    },
    {
      question: "Is there a mobile application available?",
      answer: "Yes, we provide a mobile-friendly employee self-service portal and a dedicated app for on-the-go access to payslips and leave management."
    },
    {
      question: "What support options are available?",
      answer: "We offer 24/7 technical support, dedicated account managers, and a comprehensive knowledge base to help you at every step."
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
            HR & Payroll Management Software
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl leading-relaxed"
          >
            Streamline human resources, payroll processing, attendance tracking, and employee lifecycle management with a unified, automated system.
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

      {/* System Overview Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 text-slate-950 leading-tight">
            End-to-End HR & Payroll System
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Centralize employee data, simplify payroll, and automate HR workflows from hire to retire.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="border border-slate-200 rounded-[24px] p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-black mb-3 text-slate-950">Payroll Automation</h3>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Calculate salaries, taxes, deductions, and benefits with automated payroll runs and compliance ready outputs.
            </p>
          </div>

          <div className="bg-slate-50/50 border border-slate-100 rounded-[24px] p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-black mb-3 text-slate-950">Employee Self-Service Portal</h3>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Empower employees with access to payslips, leave balances, and personal profiles from any device.
            </p>
          </div>

          <div className="border border-slate-200 rounded-[24px] p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-black mb-3 text-slate-950">Attendance & Leave Tracking</h3>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Track attendance, shifts, time off requests, and approvals with configurable policies.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-4xl font-serif italic text-slate-800 leading-relaxed mb-12">
            "This HR & payroll system transformed our workforce management, reduced payroll errors, and gave employees access to their records instantly."
          </blockquote>
          <cite className="text-slate-500 text-lg not-italic">— HR Lead, Growing Tech Company</cite>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="py-24 px-6 bg-slate-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-8xl font-black mb-8 text-slate-950 leading-tight">
              Built for HR Efficiency & Payroll Accuracy
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A single platform to manage everything from onboarding to payouts with real-time analytics and compliance controls.
            </p>
          </div>

          <div className="space-y-32">
            {/* Employee Onboarding & Records */}
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-950">Employee Onboarding & Records</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Capture employee data, documents, and contracts with structured workflows and secure storage.
              </p>
              <a href="#" className="text-[#ff5722] font-bold text-lg hover:underline flex items-center gap-2">
                Explore onboarding →
              </a>
              <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <ImagePlaceholder text="Employee Onboarding System" />
              </div>
            </div>

            {/* Advanced Payroll Reports */}
            <div className="max-w-2xl ml-auto text-right">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-950">Advanced Payroll Reports</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Generate payroll journals, tax reports, payslips, and compliance summaries with exportable formats.
              </p>
              <a href="#" className="text-[#ff5722] font-bold text-lg hover:underline flex items-center gap-2 justify-end">
                Explore reporting →
              </a>
              <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <ImagePlaceholder text="Payroll Reports Dashboard" />
              </div>
            </div>

            {/* Leave & Shift Management */}
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-950">Leave & Shift Management</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Automate leave approval, shift scheduling, and attendance analytics for improved workforce oversight.
              </p>
              <a href="#" className="text-[#ff5722] font-bold text-lg hover:underline flex items-center gap-2">
                Explore leave tracking →
              </a>
              <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <ImagePlaceholder text="Leave and Shift Management" />
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
              <BarChart3 size={32} />
            </div>
            <h3 className="text-2xl font-black mb-4 text-slate-950">Real-Time Analytics</h3>
            <p className="text-slate-500 leading-relaxed">
              Dashboard insights for attendance, payroll costs, and HR effectiveness.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
              <Lock size={32} />
            </div>
            <h3 className="text-2xl font-black mb-4 text-slate-950">Secure & Compliant</h3>
            <p className="text-slate-500 leading-relaxed">
              Protect employee data with encrypted storage and regulatory compliance.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-emerald-500 mb-6">
              <Settings size={32} />
            </div>
            <h3 className="text-2xl font-black mb-4 text-slate-950">Configurable & Scalable</h3>
            <p className="text-slate-500 leading-relaxed">
              Flexible HR rules, payroll formulas, and workflows for any business size.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-8xl font-black mb-8 text-slate-950 leading-tight">
              Simplify HR & Payroll Today
            </h2>
            <p className="text-slate-500 text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed">
              A comprehensive HR & Payroll platform that reduces administrative burden and delivers timely, accurate payroll every cycle.
            </p>
            <a href="#" className="text-[#ff5722] font-bold text-xl hover:underline flex items-center gap-2">
              Talk to our experts →
            </a>
          </div>
          <div className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-xl">
            <ImagePlaceholder text="HR Payroll Management Software" />
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
