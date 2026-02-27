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
  Stethoscope,
  Activity,
  ClipboardList
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function HealthcareManagementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Pharmacy/Hospital Management Software?",
      answer: "It is an integrated system for hospitals, clinics, and pharmacies to manage patient records, inventory, billing, and operations efficiently."
    },
    {
      question: "Can it handle multi-branch operations?",
      answer: "Yes, our software supports multi-branch operations with centralized control and synchronized data management across all locations."
    },
    {
      question: "Does it support pharmacy inventory management?",
      answer: "Absolutely. You can track medicines, medical equipment, and consumables in real-time with automated reorder alerts and wastage reduction."
    },
    {
      question: "Can it integrate with insurance providers?",
      answer: "Yes, our platform facilitates claims processing and billing integration with insurance providers for faster reimbursement cycles."
    },
    {
      question: "Is it secure and compliant?",
      answer: "We prioritize patient data privacy and ensure regulatory compliance with healthcare standards, providing secure handling of medical and financial records."
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
              PHARMACY/HOSPITAL MANAGEMENT SOFTWARE
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight">
              Manage Spend for<br />Your Firm & Portfolio
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our Pharmacy and Hospital Management Software helps healthcare providers streamline operations, optimize costs, and manage resources efficiently for better patient care.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-slate-200/50 transition-all"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-20">
              <ImagePlaceholder text="Pharmacy/Hospital Management Software" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* All-in-One Section */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
            Comprehensive Healthcare Management
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Manage pharmacy inventory, hospital operations, patient records, billing, and analytics all in one unified system designed for modern healthcare providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Inventory & Resource Management</h3>
            <p className="text-slate-500 leading-relaxed">
              Track medicines, medical equipment, and consumables in real-time. Optimize stock levels, automate reorder alerts, and reduce wastage.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Patient & Billing Management</h3>
            <p className="text-slate-500 leading-relaxed">
              Maintain electronic medical records, streamline billing, and handle insurance claims efficiently to improve administrative accuracy.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Reporting & Compliance</h3>
            <p className="text-slate-500 leading-relaxed">
              Generate detailed reports on inventory, expenditures, patient care, and regulatory compliance to ensure operational efficiency and adherence to healthcare standards.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50/50 border-l-4 border-[#ff5722] p-10 rounded-r-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed mb-6">
              "Anilax Software helped us streamline hospital operations, manage pharmacy inventory, and optimize expenses across multiple departments."
            </p>
            <p className="font-bold text-slate-900">— Director, Multi-Branch Hospital</p>
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
            Our software is ideal for hospitals, clinics, pharmacies, and healthcare providers looking to optimize operations, manage costs, and improve patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Hospitals & Clinics", desc: "Manage patient records, appointments, billing, and departments efficiently, ensuring seamless hospital operations." },
            { title: "Pharmacies", desc: "Track inventory, sales, and supplier orders in real-time while managing prescriptions and ensuring compliance with regulations." },
            { title: "Healthcare Administrators", desc: "Optimize staff allocation, monitor resource usage, and track operational costs for improved efficiency and profitability." },
            { title: "Medical Suppliers & Distributors", desc: "Integrate with pharmacies and hospitals to streamline supply chains, manage orders, and reduce delivery delays." },
            { title: "Insurance Providers", desc: "Facilitate claims processing and billing integration with hospitals and pharmacies for faster reimbursement cycles." },
            { title: "Analytics & Compliance Teams", desc: "Monitor key performance indicators, ensure regulatory compliance, and generate actionable insights for healthcare operations." }
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
              Our Pharmacy/Hospital Management Software ensures operational efficiency, cost control, and better patient outcomes with integrated solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: ClipboardList, title: "Inventory & Resource Optimization", desc: "Manage stock, reduce waste, and automate replenishment for pharmacies and medical departments." },
              { icon: Users, title: "Patient & Billing Management", desc: "Handle patient records, billing, appointments, and insurance claims efficiently in one platform." },
              { icon: BarChart3, title: "Analytics & Reporting", desc: "Generate comprehensive reports on operations, finances, and compliance to support data-driven decisions." },
              { icon: ShieldCheck, title: "Compliance & Security", desc: "Ensure patient data privacy, regulatory compliance, and secure handling of medical and financial records." },
              { icon: Scale, title: "Scalable & Multi-Branch Support", desc: "Operate across multiple branches or hospitals with centralized control and synchronized data management." },
              { icon: Zap, title: "Automation & Workflow Efficiency", desc: "Automate recurring processes such as inventory alerts, billing cycles, and reporting to save time and reduce errors." }
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
