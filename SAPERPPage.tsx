import React from 'react';
import { motion } from 'motion/react';
import { 
  Plus, 
  Minus,
  Building2,
  Link as LinkIcon,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  key?: React.Key;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className={`border rounded-2xl mb-4 transition-all ${isOpen ? 'border-orange-500 shadow-lg shadow-orange-500/5' : 'border-slate-100'}`}>
      <button 
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <span className="font-bold text-slate-900 md:text-lg">{question}</span>
        {isOpen ? <Minus className="text-orange-500 shrink-0" size={20} /> : <Plus className="text-orange-500 shrink-0" size={20} />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-500 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function SAPERPPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "What is SAP ERP?",
      answer: "SAP ERP is a comprehensive software system that integrates core business processes, providing real-time insights and automation across various departments."
    },
    {
      question: "What are the deployment options for SAP ERP?",
      answer: "SAP ERP can be deployed on-premise, in the cloud, or as a hybrid solution, depending on your business needs and infrastructure."
    },
    {
      question: "How can SAP ERP benefit my business?",
      answer: "It streamlines operations, improves data accuracy, enhances reporting, and provides a unified view of your entire business."
    },
    {
      question: "Is SAP ERP suitable for small businesses?",
      answer: "Yes, SAP offers solutions like SAP Business One specifically designed for small and medium-sized enterprises."
    },
    {
      question: "How do I get started with SAP ERP?",
      answer: "Contact our experts for a consultation and assessment of your business requirements to develop a tailored implementation roadmap."
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
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
            className="text-5xl md:text-8xl font-black mb-8 leading-[1] tracking-tight"
          >
            SAP ERP Solutions<br />for Enterprise<br />Digital Transformation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed"
          >
            Implement, customize, and optimize SAP ERP systems to streamline operations, improve visibility, and drive scalable business growth.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-orange-500/20 active:scale-[0.98]"
          >
            Get started
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-8xl font-display font-black mb-8 leading-tight text-slate-950">
            End-to-<br />
            End SAP <br />
            ERP Services
          </h2>
          <p className="text-slate-500 text-lg md:text-xl mb-20 leading-relaxed max-w-3xl mx-auto">
            From SAP implementation to optimization and support, we help enterprises unlock the full value of SAP ERP platforms.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="border border-slate-100 p-8 md:p-12 text-left rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-slate-950">SAP Implementation & Deployment</h3>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
                End-to-end SAP ERP implementation aligned with your business processes, industry requirements, and growth plans.
              </p>
            </div>

            <div className="border border-slate-100 p-8 md:p-12 text-left rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-slate-950">SAP Customization & Integration</h3>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
                Tailor SAP modules and integrate seamlessly with third-party systems, legacy platforms, and cloud applications.
              </p>
            </div>

            <div className="border border-slate-100 p-8 md:p-12 text-left rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-slate-950">Real-Time Business Insights</h3>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
                Gain actionable insights with real-time reporting, dashboards, and analytics across finance, supply chain, and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-4xl font-serif italic text-slate-900 leading-snug mb-10">
            “The SAP ERP implementation improved our operational efficiency, unified our data, and gave leadership real-time visibility into business performance.”
          </p>
          <p className="text-slate-500 font-bold">— CIO, Enterprise Manufacturing Company</p>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-8xl font-display font-black mb-10 leading-tight text-slate-950">
            Scalable & <br />
            Intelligent <br />
            SAP ERP <br />
            Architecture
          </h2>
          <p className="text-slate-500 text-lg md:text-xl mb-24 leading-relaxed max-w-3xl mx-auto">
            A future-ready ERP foundation designed to support complex enterprise operations and digital transformation initiatives.
          </p>

          <div className="space-y-32">
            {/* S/4HANA */}
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-950">SAP S/4HANA Implementation</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Modernize your ERP landscape with SAP S/4HANA to enable faster processing, simplified data models, and real-time insights.
              </p>
              <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg mb-12">Explore S/4HANA →</a>
              <div className="w-full bg-slate-100 rounded-[32px] h-64 md:h-96 flex items-center justify-center">
                <span className="text-slate-400 font-medium">SAP S/4HANA Implementation Illustration</span>
              </div>
            </div>

            {/* Modules */}
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-950">Finance, Supply Chain & HR Modules</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Integrate core SAP modules including Finance (FI/CO), Supply Chain (MM/SD), and HR (HCM) for unified operations.
              </p>
              <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg mb-12">Explore SAP modules →</a>
              <div className="w-full bg-slate-100 rounded-[32px] h-64 md:h-96 flex items-center justify-center">
                <span className="text-slate-400 font-medium">SAP Business Modules Illustration</span>
              </div>
            </div>

            {/* Support */}
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-950">SAP Support & Optimization</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Ongoing support, performance tuning, and process optimization to ensure maximum ROI from your SAP investment.
              </p>
              <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg mb-12">Explore support →</a>
              <div className="w-full bg-slate-100 rounded-[32px] h-64 md:h-96 flex items-center justify-center">
                <span className="text-slate-400 font-medium">SAP ERP Support Services Illustration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <Building2 size={48} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-950">Enterprise-Grade ERP</h3>
              <p className="text-slate-500 leading-relaxed">
                Designed to handle complex business processes and large-scale enterprise environments.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-6">
                <LinkIcon size={48} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-950">Seamless Integration</h3>
              <p className="text-slate-500 leading-relaxed">
                Connect SAP ERP with CRM, fintech, eCommerce, and third-party platforms.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-6">
                <TrendingUp size={48} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-950">Scalable & Future-Ready</h3>
              <p className="text-slate-500 leading-relaxed">
                Built to evolve with your organization and support long-term digital transformation goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-6xl md:text-[120px] font-display font-black leading-[0.9] text-slate-950 mb-10">
            Transform <br />
            Your Business <br />
            with SAP ERP
          </h2>
          <p className="text-slate-500 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl">
            Leverage SAP ERP solutions to improve efficiency, enhance decision-making, and build a resilient enterprise foundation.
          </p>
          <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg mb-20">Talk to our SAP experts →</a>
          <div className="w-full bg-slate-100 rounded-[32px] h-64 md:h-96 flex items-center justify-center">
            <span className="text-slate-400 font-medium">SAP ERP Platform Illustration</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-slate-50/30">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-16 text-center text-slate-950">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem 
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
