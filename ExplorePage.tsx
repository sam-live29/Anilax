import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Lightbulb, 
  Fuel, 
  CreditCard,
  Menu,
  ArrowRight,
  X
} from 'lucide-react';

interface CategoryCardProps {
  icon: React.ReactNode;
  billers: string;
  title: string;
  description: string;
  volume: string;
  value: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, billers, title, description, volume, value }) => (
  <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 w-[320px] md:w-[460px] aspect-square snap-start flex flex-col shrink-0">
    <div className="flex justify-between items-start mb-6">
      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 scale-110 origin-left">
        {icon}
      </div>
      <div className="bg-[#ff9800] text-white px-5 py-1.5 rounded-full text-sm font-black tracking-tight">
        {billers}
      </div>
    </div>
    
    <h3 className="text-2xl md:text-3xl font-display font-black text-slate-950 mb-3 tracking-tight text-left line-clamp-1">{title}</h3>
    <p className="text-slate-500 text-base md:text-lg mb-4 leading-relaxed text-left line-clamp-2 min-h-[3.5rem]">
      {description}
    </p>
    
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="text-slate-950 font-black text-base md:text-lg flex items-center gap-2 mb-6 hover:gap-3 transition-all group w-fit"
    >
      View Billers <span className="group-hover:translate-x-1 transition-transform">→</span>
    </button>
    
    <div className="mt-auto bg-slate-50/80 rounded-2xl p-5 md:p-6 space-y-3 md:space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-slate-500 text-sm md:text-base font-medium">Transaction volume</span>
        <span className="text-slate-950 text-sm md:text-base font-black">{volume}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-slate-500 text-sm md:text-base font-medium">Transaction value</span>
        <span className="text-slate-950 text-sm md:text-base font-black">{value}</span>
      </div>
    </div>
  </div>
);

const Section = ({ title, categories }: { title: string, categories: CategoryCardProps[] }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-10 md:py-14 border-b border-slate-100 last:border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-2 tracking-tight">{title}</h2>
        <p className="text-slate-400 text-lg font-medium">{categories.length} Categories</p>
      </div>
      
      <div className="relative group max-w-[1440px] mx-auto">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-slate-400 hover:text-slate-950 transition-all border border-slate-100 font-bold text-xl"
        >
          &lt;
        </button>
        
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar px-4 md:px-20 pb-6 snap-x snap-mandatory"
        >
          {categories.map((cat, i) => (
            <CategoryCard 
              key={i} 
              icon={cat.icon}
              billers={cat.billers}
              title={cat.title}
              description={cat.description}
              volume={cat.volume}
              value={cat.value}
            />
          ))}
        </div>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-slate-400 hover:text-slate-950 transition-all border border-slate-100 font-bold text-xl"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default function ExplorePage({ onBack }: { onBack: () => void }) {
  const [searchQuery, setSearchQuery] = useState('');

  const paymentsCategories: CategoryCardProps[] = [
    { icon: <Lightbulb size={24} />, billers: "92 Billers", title: "UPI", description: "Electricity connection services.", volume: "79.70 Mn", value: "₹18.00 Cr" },
    { icon: <Fuel size={24} />, billers: "4 Billers", title: "Card Payments", description: "Booking, buying or refilling Liquefied Petroleum Gas cylinders.", volume: "10.77 Mn", value: "₹947.88 Cr" },
    { icon: <CreditCard size={24} />, billers: "12 Billers", title: "Net Banking", description: "Pay your credit card bills seamlessly.", volume: "25.40 Mn", value: "₹345.60 Cr" },
    { icon: <CreditCard size={24} />, billers: "12 Billers", title: "Wallet", description: "Pay your credit card bills seamlessly.", volume: "25.40 Mn", value: "₹345.60 Cr" },
    { icon: <CreditCard size={24} />, billers: "12 Billers", title: "Recurring Payments / Subscription", description: "Pay your credit card bills seamlessly.", volume: "25.40 Mn", value: "₹345.60 Cr" },
    { icon: <CreditCard size={24} />, billers: "12 Billers", title: "Payout", description: "Pay your credit card bills seamlessly.", volume: "25.40 Mn", value: "₹345.60 Cr" },
    { icon: <CreditCard size={24} />, billers: "12 Billers", title: "International Remittance", description: "Pay your credit card bills seamlessly.", volume: "25.40 Mn", value: "₹345.60 Cr" },
  ];

  const identityCategories: CategoryCardProps[] = [
    { icon: <Lightbulb size={24} />, billers: "92 Billers", title: "Aadhaar eKYC", description: "Electricity connection services.", volume: "79.70 Mn", value: "₹18.00 Cr" },
    { icon: <Fuel size={24} />, billers: "4 Billers", title: "PAN Verification", description: "Booking, buying or refilling Liquefied Petroleum Gas cylinders.", volume: "10.77 Mn", value: "₹947.88 Cr" },
    { icon: <CreditCard size={24} />, billers: "12 Billers", title: "GST Verification", description: "Pay your credit card bills seamlessly.", volume: "25.40 Mn", value: "₹345.60 Cr" },
    { icon: <CreditCard size={24} />, billers: "12 Billers", title: "CKYC / DigiLocker", description: "Pay your credit card bills seamlessly.", volume: "25.40 Mn", value: "₹345.60 Cr" },
    { icon: <CreditCard size={24} />, billers: "12 Billers", title: "eSign", description: "Pay your credit card bills seamlessly.", volume: "25.40 Mn", value: "₹345.60 Cr" },
    { icon: <CreditCard size={24} />, billers: "12 Billers", title: "Fraud & AML", description: "Pay your credit card bills seamlessly.", volume: "25.40 Mn", value: "₹345.60 Cr" },
  ];

  const insuranceCategories: CategoryCardProps[] = [
    { icon: <Lightbulb size={24} />, billers: "92 Billers", title: "Health Insurance", description: "Electricity connection services.", volume: "79.70 Mn", value: "₹18.00 Cr" },
    { icon: <Fuel size={24} />, billers: "4 Billers", title: "Life Insurance", description: "Booking, buying or refilling Liquefied Petroleum Gas cylinders.", volume: "10.77 Mn", value: "₹947.88 Cr" },
    { icon: <CreditCard size={24} />, billers: "12 Billers", title: "Vehicle Insurance", description: "Pay your credit card bills seamlessly.", volume: "25.40 Mn", value: "₹345.60 Cr" },
    { icon: <CreditCard size={24} />, billers: "12 Billers", title: "Embedded Insurance", description: "Pay your credit card bills seamlessly.", volume: "25.40 Mn", value: "₹345.60 Cr" },
  ];

  const filteredPayments = paymentsCategories.filter(cat => 
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredIdentity = identityCategories.filter(cat => 
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredInsurance = insuranceCategories.filter(cat => 
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasResults = filteredPayments.length > 0 || filteredIdentity.length > 0 || filteredInsurance.length > 0;

  return (
    <div className="bg-white min-h-screen">
      <main className="pt-10 pb-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center px-4 mb-6">
          <h1 className="text-4xl md:text-6xl font-display font-black text-slate-950 mb-4 tracking-tighter">Categories</h1>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Anilax's API supports payments and collections for the following list of services.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto px-4 mb-10">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
            <input 
              type="text"
              placeholder="Search by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all text-base"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Sections */}
        {hasResults ? (
          <>
            {filteredPayments.length > 0 && (
              <Section title="Payments & Money Movement" categories={filteredPayments} />
            )}
            {filteredIdentity.length > 0 && (
              <Section title="Identity, KYC & Compliance APIs" categories={filteredIdentity} />
            )}
            {filteredInsurance.length > 0 && (
              <Section title="Insurance (InsurTech) APIs" categories={filteredInsurance} />
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 rounded-full mb-4">
              <Search size={32} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No categories found</h3>
            <p className="text-slate-500">Try adjusting your search to find what you're looking for.</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-6 text-primary font-bold hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <h4 className="text-slate-400 font-bold uppercase tracking-wider text-sm">Product</h4>
              <ul className="space-y-4 text-slate-300">
                <li>Unified Payments & Payout Gateway</li>
                <li>Bharat BillPay Integration Suite</li>
                <li>Verification Engine</li>
                <li>Digital Wallet & Reseller System</li>
                <li>FASTag Recharge & Vehicle Bill System</li>
                <li>Fraud Detection + Risk</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-slate-400 font-bold uppercase tracking-wider text-sm">Solutions</h4>
              <ul className="space-y-4 text-slate-300">
                <li>NEO-Banking</li>
                <li>Education</li>
                <li>E-commerce</li>
                <li>Health Care</li>
                <li>Travel & Hospitality</li>
                <li>Cooperate</li>
                <li>Reselling</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
