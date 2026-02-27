import React from 'react';
import { motion } from 'motion/react';
import { 
  Plus, 
  Minus,
  Building2,
  CreditCard,
  BarChart3,
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

export default function RetailFintechPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "What is the Retail-Fintech Local platform?",
      answer: "It is a platform designed to digitize payments, manage finances, and streamline operations for small and medium local businesses."
    },
    {
      question: "Can it handle multiple payment methods?",
      answer: "Yes, it supports UPI, cards, wallets, and contactless payments through integrated POS and QR systems."
    },
    {
      question: "Is it suitable for e-commerce startups?",
      answer: "While optimized for local retail, its multi-channel checkout capabilities make it highly effective for hybrid and online-first businesses as well."
    },
    {
      question: "Does it provide real-time analytics?",
      answer: "Absolutely. You get real-time sales data, trend tracking, and detailed reports to help you make informed business decisions."
    },
    {
      question: "What support is provided?",
      answer: "We offer dedicated onboarding, technical documentation, and 24/7 support to ensure your business operations run smoothly."
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
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1] tracking-tight"
          >
            Retail Fintech &<br />Local Payment<br />Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl leading-relaxed"
          >
            Empower retailers, local merchants, and small businesses with next-generation fintech solutions for payments, POS, and digital checkout experiences.
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

      {/* Capabilities Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-6xl font-display font-black mb-6 leading-tight text-slate-950">
            Local Retail <br />
            Fintech <br />
            Capabilities
          </h2>
          <p className="text-slate-500 text-base md:text-lg mb-16 leading-relaxed max-w-3xl mx-auto">
            Solutions tailored for modern retailers and neighborhood businesses to accept digital payments, manage sales, and improve customer commerce experiences.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="border border-slate-100 p-6 md:p-10 text-left rounded-[24px] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-black mb-3 text-slate-950">Point-of-Sale Integration</h3>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                Accept contactless, card, UPI, and wallet payments with smart POS and QR-based checkout systems.
              </p>
            </div>

            <div className="border border-slate-100 p-6 md:p-10 text-left rounded-[24px] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-black mb-3 text-slate-950">Retail Digital Wallets</h3>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                Enable wallet loading, spending analytics, loyalty incentives, and consumer engagement via digital wallets.
              </p>
            </div>

            <div className="border border-slate-100 p-6 md:p-10 text-left rounded-[24px] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-black mb-3 text-slate-950">Multi-Channel Checkout</h3>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                Support online, in-store, and mobile checkout experiences with seamless payment acceptance across all touchpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-4xl font-serif italic text-slate-900 leading-snug mb-10">
            “Our retail locations adopted the fintech stack with ease. Transactions are faster, customer experience is smooth, and checkout conversions have grown month over month.”
          </p>
          <p className="text-slate-500 font-bold">— Owner, Local Retail Chain</p>
        </div>
      </section>

      {/* Powerful Capabilities Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-8xl font-display font-black mb-10 leading-tight text-slate-950">
            Powerful <br />
            Retail Fintech <br />
            Capabilities
          </h2>
          <p className="text-slate-500 text-lg md:text-xl mb-24 leading-relaxed max-w-3xl mx-auto">
            A unified system for payments, sales analytics, QR payments, and merchant reporting built specifically for local and small retailers.
          </p>

          <div className="space-y-32">
            {/* Smart POS */}
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-950">Smart POS & QR Systems</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Configure SoftPOS/SmartPOS to accept card, contactless, UPI, and wallet payments in-store without extra hardware.
              </p>
              <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg mb-12">Explore POS Solutions →</a>
              <div className="w-full bg-slate-100 rounded-[32px] h-64 md:h-96 flex items-center justify-center">
                <span className="text-slate-400 font-medium">Retail POS and QR Payments Illustration</span>
              </div>
            </div>

            {/* Local Wallet */}
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-950">Local Wallet & Loyalty Tools</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Offer customers digital wallets, reward points, and loyalty-driven checkout flows to boost repeat purchases.
              </p>
              <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg mb-12">Explore Wallet Features →</a>
              <div className="w-full bg-slate-100 rounded-[32px] h-64 md:h-96 flex items-center justify-center">
                <span className="text-slate-400 font-medium">Retail Digital Wallet Features Illustration</span>
              </div>
            </div>

            {/* Sales Analytics */}
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-950">Sales Analytics & Insights</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Track in-store performance, transaction trends, and customer purchase patterns with detailed dashboards.
              </p>
              <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg mb-12">Explore Analytics →</a>
              <div className="w-full bg-slate-100 rounded-[32px] h-64 md:h-96 flex items-center justify-center">
                <span className="text-slate-400 font-medium">Retail Sales Analytics Illustration</span>
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
              <h3 className="text-2xl font-black mb-4 text-slate-950">Built for Retail Ecosystems</h3>
              <p className="text-slate-500 leading-relaxed">
                Designed for neighborhood stores, chains, and local merchant networks with scalable fintech tools.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-6">
                <CreditCard size={48} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-950">Seamless Payments</h3>
              <p className="text-slate-500 leading-relaxed">
                Accept all leading digital payments including UPI, cards, wallets, and QR-based transactions.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-6">
                <BarChart3 size={48} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-950">Actionable Insights</h3>
              <p className="text-slate-500 leading-relaxed">
                Real-time sales data with trend tracking and reports you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-6xl md:text-[120px] font-display font-black leading-[0.9] text-slate-950 mb-10">
            Bring Digital <br />
            Retail <br />
            Experiences <br />
            to Life
          </h2>
          <p className="text-slate-500 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl">
            Leverage local fintech tools to transform in-store payments, boost customer loyalty, and drive retail growth.
          </p>
          <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg mb-20">Talk to our experts →</a>
          <div className="w-full bg-slate-100 rounded-[32px] h-64 md:h-96 flex items-center justify-center">
            <span className="text-slate-400 font-medium">Retail Fintech Local Solutions Illustration</span>
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
