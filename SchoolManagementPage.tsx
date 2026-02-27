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
  BookOpen,
  Layout,
  CreditCard
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function SchoolManagementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is School Management Software?",
      answer: "It's a powerful digital platform that enables educational institutions to manage administrative tasks, student data, and communication seamlessly."
    },
    {
      question: "Can it manage attendance and grades?",
      answer: "Yes, our system includes comprehensive modules for tracking daily attendance and managing examination results and grading systems."
    },
    {
      question: "Is it secure and compliant?",
      answer: "Absolutely. We prioritize data security with encrypted storage and ensure compliance with local educational regulations."
    },
    {
      question: "Can parents and students access the platform?",
      answer: "Yes, we provide dedicated portals for parents and students to track progress, view announcements, and access study materials."
    },
    {
      question: "Is it suitable for all types of schools?",
      answer: "Our software is scalable and customizable, making it ideal for primary schools, secondary schools, colleges, and coaching centers."
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
              SCHOOL MANAGEMENT SOFTWARE
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight">
              Simplifying Education<br />Administration
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our School Management Software streamlines administrative tasks, enhances communication, and improves overall operational efficiency for educational institutions of all sizes.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-slate-200/50 transition-all"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-20">
              <ImagePlaceholder text="School Management Software" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* All-in-One Section */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
            All-in-One School Management
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Manage admissions, attendance, exams, fees, and parent-teacher communication from a single unified platform designed to simplify school operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Student Information Management</h3>
            <p className="text-slate-500 leading-relaxed">
              Maintain comprehensive student records including personal details, academic performance, attendance, and disciplinary history in one secure system.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Fee & Financial Management</h3>
            <p className="text-slate-500 leading-relaxed">
              Automate fee collection, generate invoices, track payments, and manage scholarships or concessions seamlessly.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Communication & Collaboration</h3>
            <p className="text-slate-500 leading-relaxed">
              Enhance parent-teacher communication via real-time notifications, announcements, and messaging tools integrated within the platform.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50/50 border-l-4 border-[#ff5722] p-10 rounded-r-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed mb-6">
              "With Anilax Software's School Management System, we automated administrative tasks and improved communication between staff, students, and parents significantly."
            </p>
            <p className="font-bold text-slate-900">— Principal, International School</p>
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
            Our School Management Software is ideal for schools, colleges, coaching centers, and educational institutions aiming to improve administration and enhance the learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Primary & Secondary Schools", desc: "Manage student records, attendance, timetable scheduling, and parent communication efficiently, reducing administrative workload." },
            { title: "Colleges & Higher Education", desc: "Automate course enrollment, examination management, grading, and faculty scheduling while ensuring smooth student-teacher interactions." },
            { title: "Coaching & Training Centers", desc: "Track student progress, manage batch schedules, collect fees, and communicate effectively with learners and parents." },
            { title: "Administrators & Staff", desc: "Centralize administrative tasks, attendance tracking, and report generation to save time and improve operational efficiency." },
            { title: "Parents & Guardians", desc: "Receive real-time updates on student performance, attendance, and school announcements, ensuring better engagement with their children's education." },
            { title: "Students", desc: "Access study materials, grades, schedules, and performance reports in a single platform to track their learning journey efficiently." }
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
              Our School Management Software provides automation, security, and real-time insights to make school operations more effective and student-focused.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Layout, title: "Centralized Administration", desc: "Manage all administrative tasks from admissions to grading, fees, and attendance in one unified system." },
              { icon: CreditCard, title: "Digital Fee Management", desc: "Automate invoicing, track payments, and manage concessions or scholarships for accurate financial management." },
              { icon: BookOpen, title: "Exam & Academic Tracking", desc: "Organize exams, evaluate student performance, and generate comprehensive academic reports efficiently." },
              { icon: MessageSquare, title: "Enhanced Communication", desc: "Enable smooth communication between teachers, students, and parents through announcements, messaging, and notifications." },
              { icon: ShieldCheck, title: "Data Security & Compliance", desc: "Protect sensitive student data with encrypted storage and maintain compliance with local educational regulations." },
              { icon: BarChart3, title: "Analytics & Reporting", desc: "Access dashboards for attendance, performance, fees, and administrative efficiency to make informed decisions." }
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
