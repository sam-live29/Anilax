import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Zap, 
  Globe, 
  Database, 
  Layout, 
  BarChart3, 
  Plus, 
  Minus,
  CheckCircle2,
  ArrowRight,
  Server,
  Code2,
  RefreshCw,
  Store,
  Monitor,
  Handshake,
  CloudCog,
  ShieldEllipsis
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

interface FAQItemProps {
  key?: any;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
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

export default function FintechInfrastructurePage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "What type of businesses can use this fintech infrastructure platform?",
      answer: "This platform is built for fintech startups, payment aggregators, marketplaces, enterprises, and regulated financial businesses that require secure, scalable payment and settlement infrastructure."
    },
    {
      question: "How secure is the software for handling financial transactions?",
      answer: "Security is embedded at every layer. We use end-to-end encryption, multi-factor authentication, and comply with global financial security standards to protect all transactions and data."
    },
    {
      question: "How easy is it to integrate this platform with existing systems?",
      answer: "Our API-first approach ensures seamless integration. We provide clean, well-documented APIs and dedicated onboarding support to help you go live in record time."
    },
    {
      question: "Does the platform support scalability and high transaction volumes?",
      answer: "Yes, our enterprise-grade architecture is designed to support millions of transactions without performance loss, built on modular, cloud-ready infrastructure."
    },
    {
      question: "What kind of support and onboarding is provided?",
      answer: "We offer a structured onboarding process, technical documentation, and dedicated support teams to ensure a smooth implementation and ongoing operational success."
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white pt-24 pb-48 overflow-hidden">
        {/* Dynamic Sea green glow diverging from the left */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-20%] left-[-10%] w-[120%] h-[140%] bg-[radial-gradient(circle_at_0%_50%,rgba(16,185,129,0.4)_0%,rgba(16,185,129,0.1)_40%,transparent_80%)] pointer-events-none"
        ></motion.div>

        {/* Dynamic Circular rays effect with rotation */}
        <motion.div 
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_270deg_at_25%_50%,transparent_0deg,rgba(16,185,129,0.1)_5deg,transparent_10deg,rgba(16,185,129,0.1)_15deg,transparent_20deg)] opacity-30 pointer-events-none hidden md:block"
        ></motion.div>

        {/* Mobile-specific dynamic glow */}
        <motion.div 
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.3)_0%,transparent_70%)] md:hidden pointer-events-none"
        ></motion.div>

        {/* Extra black side on the right and bottom */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl lg:text-9xl font-display font-bold mb-8 leading-[0.9] tracking-tighter"
            >
              Optimize your<br />spend on a<br />global scale.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-base md:text-xl mb-10 leading-relaxed max-w-2xl font-medium"
            >
              Global travel and spend management for unmatched efficiency and control in any market.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-orange-500/20 active:scale-[0.98]"
            >
              Get started
            </motion.button>
          </div>

          {/* Icon Grid - 2 rows, 3 columns - Chronological Order from Screenshot */}
          <div className="grid grid-cols-3 gap-x-2 gap-y-8 md:gap-x-12 md:gap-y-16 bg-gradient-to-br from-[#064e3b] via-[#022c22] to-black backdrop-blur-xl rounded-[20px] md:rounded-[40px] px-8 py-6 md:px-32 md:py-20 border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)] w-full max-w-6xl mx-auto">
            {[
              { icon: Server, title: "Unified Payment Infrastructure" },
              { icon: ShieldEllipsis, title: "Secure & Compliant Architecture" },
              { icon: Code2, title: "Developer-First API Ecosystem" },
              { icon: Handshake, title: "Smart Transaction & Reconciliation Engine" },
              { icon: Store, title: "Scalable Merchant & Partner Management" },
              { icon: Monitor, title: "Actionable Insights & Analytics Dashboard" }
            ].map((item, i) => (
              <div key={i} className="text-center group flex flex-col items-center">
                <div className="mb-3 md:mb-8 flex justify-center">
                  <div className="transition-transform duration-500 group-hover:scale-110">
                    <item.icon className="text-white w-9 h-9 md:w-28 md:h-28" strokeWidth={2.5} />
                  </div>
                </div>
                <p className="text-[10px] md:text-4xl font-bold text-white leading-none md:leading-[1.1] max-w-[100px] md:max-w-[450px] mx-auto tracking-tighter uppercase">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full"></div>
      </section>

      {/* Gap before next section */}
      <div className="h-16 md:h-24 bg-white"></div>

      {/* Multi-Bank Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-9xl lg:text-[140px] font-display font-black mb-10 leading-[0.85] tracking-tighter text-slate-950">
            Multi-Bank <br />
            & Multi-PSP <br />
            Routing.
          </h2>
          <p className="text-slate-500 text-base md:text-lg mb-12 leading-relaxed">
            Smart routing across multiple banks and payment partners to maximize success rates and reduce downtime.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="border border-slate-200 p-8 md:p-12 text-left rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-950">White-Label & Custom Branding</h3>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
                Launch under your own brand with customizable dashboards, URLs, invoices, and merchant interfaces.
              </p>
            </div>

            <div className="border border-slate-200 p-8 md:p-12 text-left rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-950">Instant Settlements & Flexible T+ Cycles</h3>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
                Enable same-day or configurable settlement cycles to improve merchant cash flow and operational efficiency.
              </p>
            </div>

            <div className="border border-slate-200 p-8 md:p-12 text-left rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-950">Refunds, Chargebacks & Dispute Management</h3>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
                Seamlessly handle refunds, reversals, and disputes with real-time tracking and status visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-4xl font-serif italic text-slate-900 leading-snug mb-10">
            "This platform transformed how we manage payments and settlements. The unified infrastructure, real-time reconciliation, and multi-bank routing significantly improved our success rates and reduced operational overhead."
          </p>
          <p className="text-slate-500 font-bold">— Founder & CEO, India Pay Now Company (India)</p>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-9xl lg:text-[140px] font-display font-black mb-14 leading-[0.85] tracking-tighter text-slate-950">
            Build on <br />
            Infrastructure <br />
            You Can Trust
          </h2>
          <p className="text-slate-500 text-base md:text-lg mb-16 leading-relaxed">
            Power payments, settlements, and compliance from one unified system. Real-time visibility across transactions, settlements, and operations.
          </p>

          <div className="space-y-32">
            {/* Risk Management */}
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-950">Advanced Risk & Fraud Management</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                A multi-layer risk engine continuously evaluates transactions using behavioral patterns, velocity checks, device fingerprinting, IP analysis, and rule-based scoring. This proactive approach minimizes fraud, reduces chargebacks, and protects both merchants and the platform ecosystem.
              </p>
              <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg mb-12">Explore controls →</a>
              
              <div className="bg-emerald-50/30 rounded-sm p-8 flex flex-wrap gap-4 md:gap-6 items-center justify-center border border-emerald-100/30">
                <div className="bg-emerald-100/50 w-[140px] h-[70px] md:w-[190px] md:h-[90px] rounded-sm shadow-sm border border-emerald-200/50 font-bold text-slate-700 text-xs md:text-base flex items-center justify-center text-center px-4">Approval • Manager</div>
                <div className="bg-emerald-100/50 w-[140px] h-[70px] md:w-[190px] md:h-[90px] rounded-sm shadow-sm border border-emerald-200/50 font-bold text-slate-700 text-xs md:text-base flex items-center justify-center text-center px-4">Approval • Director</div>
                <div className="bg-emerald-100/50 w-[140px] h-[70px] md:w-[190px] md:h-[90px] rounded-sm shadow-sm border border-emerald-200/50 font-bold text-slate-700 text-xs md:text-base flex items-center justify-center text-center px-4 gap-2">Approved ✓</div>
              </div>
            </div>

            {/* Refunds Section */}
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-950">Refunds, Chargebacks & Dispute Management</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                The platform provides a centralized system to manage refunds, reversals, disputes, and chargebacks. Real-time status updates, automated notifications, and detailed case histories reduce resolution time and improve merchant transparency.
              </p>
              <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg mb-12">Explore management →</a>
              
              <div className="bg-blue-50/30 rounded-sm p-8 flex flex-wrap gap-4 md:gap-6 items-center justify-center border border-blue-100/30">
                <div className="bg-blue-100/50 w-[140px] h-[70px] md:w-[190px] md:h-[90px] rounded-sm shadow-sm border border-blue-200/50 font-bold text-slate-700 text-xs md:text-base flex items-center justify-center text-center px-4">
                  $2,362.04 spent
                </div>
                <div className="bg-blue-100/50 w-[140px] h-[70px] md:w-[190px] md:h-[90px] rounded-sm shadow-sm border border-blue-200/50 font-bold text-slate-700 text-xs md:text-base flex items-center justify-center text-center px-4">
                  ₹208,241.88 limit
                </div>
                <div className="bg-blue-100/50 w-[140px] h-[70px] md:w-[190px] md:h-[90px] rounded-sm shadow-sm border border-blue-200/50 font-bold text-slate-700 text-xs md:text-base flex items-center justify-center text-center px-4">
                  A$3,926.16 limit
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-950">Dedicated Support & Onboarding Assistance</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                A structured onboarding process, technical documentation, and dedicated support ensure smooth implementation. From API integration to compliance readiness, the support framework helps clients go live faster and operate with confidence.
              </p>
              <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg mb-12">Explore automations →</a>
              
              <div className="bg-orange-50/30 rounded-sm p-8 flex flex-wrap gap-4 md:gap-6 items-center justify-center border border-orange-100/30">
                <div className="bg-orange-100/50 w-[140px] h-[70px] md:w-[190px] md:h-[90px] rounded-sm shadow-sm border border-orange-200/50 font-bold text-slate-700 text-xs md:text-base flex items-center justify-center text-center px-4">Brex Canada</div>
                <div className="bg-orange-100/50 w-[140px] h-[70px] md:w-[190px] md:h-[90px] rounded-sm shadow-sm border border-orange-200/50 font-bold text-slate-700 text-xs md:text-base flex items-center justify-center text-center px-4">Brex Germany</div>
                <div className="bg-orange-100/50 w-[140px] h-[70px] md:w-[190px] md:h-[90px] rounded-sm shadow-sm border border-orange-200/50 font-bold text-slate-700 text-xs md:text-base flex items-center justify-center text-center px-4">Brex Japan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ai logo separator */}
      <div className="py-12 flex justify-center">
        <span className="text-4xl font-display font-bold text-slate-200">ai</span>
      </div>

      {/* Architecture Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-20">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-950">Enterprise-Grade, Scalable Architecture</h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Designed to support millions of transactions without performance loss. Built on modular, cloud-ready infrastructure for seamless expansion.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <ShieldCheck className="text-slate-400" size={48} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-950">Secure, Compliant & Reliable by Design</h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Security embedded at every layer of the platform. End-to-end encryption protects all transactions and data.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Layout className="text-slate-400" size={48} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-950">API-First, Developer-Friendly Platform</h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Designed for fast, seamless integration. Clean, well-documented APIs reduce development time. Webhooks for real-time event handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] text-slate-950 mb-10">
            One Core, <br />
            Powerful <br />
            <span className="text-6xl md:text-[120px]">Differentiator</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl mb-12 leading-relaxed">
            This platform brings together scalability, security, and developer-first design into one unified system—eliminating fragmentation, reducing operational risk, and enabling businesses to grow faster with confidence.
          </p>
          <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg mb-20">See our process →</a>

          {/* Implementation Team Image Placeholder */}
          <div className="w-full">
            <ImagePlaceholder text="Merchant Implementation Team" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-slate-50/30">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center text-slate-950">Frequently Asked Questions</h2>
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
