import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Home, 
  LayoutGrid, 
  Zap, 
  Wallet, 
  FileText, 
  ChevronRight,
  ArrowLeft,
  Cpu,
  CreditCard,
  ShieldCheck,
  Users,
  Store,
  Database,
  GraduationCap,
  Smartphone,
  SmartphoneNfc,
  Globe,
  Shuffle,
  QrCode,
  RefreshCw,
  School,
  Briefcase,
  Utensils,
  Code2,
  ShoppingBag,
  Network,
  Stethoscope,
  Newspaper,
  Video,
  Fingerprint,
  Receipt,
  SmartphoneCharging,
  UserCircle,
  Plane,
  Layers,
  Bus,
  Send,
  UserCheck
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onLogoClick: () => void;
  onOpenContact: () => void;
  onOpenDemo: () => void;
  onOpenFintechInfrastructure: () => void;
  onOpenPaymentGateway: () => void;
  onOpenSecurityCompliance: () => void;
  onOpenHRPayroll: () => void;
  onOpenRetailFintech: () => void;
  onOpenSAPERP: () => void;
  onOpenMobileApp: () => void;
  onOpenEdTech: () => void;
  onOpenUPIApps: () => void;
  onOpenGatewayIntegration: () => void;
  onOpenPaymentSwitch: () => void;
  onOpenQRPOS: () => void;
  onOpenRecurringBilling: () => void;
  onOpenSchoolManagement: () => void;
  onOpenCRMHRMS: () => void;
  onOpenFoodDelivery: () => void;
  onOpenFintechDev: () => void;
  onOpenOnDemandDev: () => void;
  onOpenEcommerce: () => void;
  onOpenMLMPortal: () => void;
  onOpenHealthcare: () => void;
  onOpenNewsPortal: () => void;
  onOpenOnlineClass: () => void;
  onOpenAePSSoftware: () => void;
  onOpenBBPSSoftware: () => void;
  onOpenRechargeSoftware: () => void;
  onOpenB2CSoftware: () => void;
  onOpenTravelBooking: () => void;
  onOpenMultiPurposeAPI: () => void;
  onOpenBusFlightBooking: () => void;
  onOpenMoneyTransfer: () => void;
  onOpenKYCVerification: () => void;
  onOpenInsights: () => void;
}

const menuItems = [
  { id: 'home', icon: Home, label: 'Home', href: '#', hasChevron: false },
  { id: 'products', icon: LayoutGrid, label: 'Products', href: '#products', hasChevron: true },
  { id: 'solutions', icon: Zap, label: 'Solutions', href: '#solutions', hasChevron: true },
  { id: 'fintech', icon: Wallet, label: 'Fintech', href: '#fintech', hasChevron: true },
  { id: 'insights', icon: FileText, label: 'Our Insights', href: '#insights', hasChevron: false },
];

const industries = [
  { 
    icon: Cpu, 
    title: 'Fintech Infrastructure & Platform', 
    desc: 'Seamless infrastructure for payments',
    color: 'bg-blue-500'
  },
  { 
    icon: CreditCard, 
    title: 'Payment Gateways/Wallet Software', 
    desc: 'One platform for payments & wallets',
    color: 'bg-emerald-500'
  },
  { 
    icon: ShieldCheck, 
    title: 'Security & Compliance Software', 
    desc: 'Trusted security, seamless compliance',
    color: 'bg-purple-500'
  },
  { 
    icon: Users, 
    title: 'HR & Payroll Software', 
    desc: 'People. Payroll. Productivity',
    color: 'bg-orange-500'
  },
];

const partners = [
  { 
    icon: Store, 
    title: 'Retail-Fintech at Local Level', 
    desc: 'Turning small businesses into smart businesses',
    color: 'bg-pink-500'
  },
  { 
    icon: Database, 
    title: 'SAP ERP', 
    desc: 'Real-Time Insights. Real Business Impact',
    color: 'bg-indigo-500'
  },
  { 
    icon: GraduationCap, 
    title: 'EdTech & Learning Software', 
    desc: 'Education powered by technology',
    color: 'bg-amber-500'
  },
  { 
    icon: Smartphone, 
    title: 'Mobile App Development', 
    desc: 'Cross-Platform & Native Mobile Apps',
    color: 'bg-cyan-500'
  },
];

const paymentSolutions = [
  { 
    icon: SmartphoneNfc, 
    title: 'UPI Payment Apps & APIs', 
    desc: 'Cashless convenience, powered by UPI',
    color: 'bg-violet-500'
  },
  { 
    icon: Globe, 
    title: 'Payment Gateway Integration & Development', 
    desc: 'Building bridges for digital payments',
    color: 'bg-sky-500'
  },
  { 
    icon: Shuffle, 
    title: 'Payment Switch & Processor', 
    desc: 'Routing payments the smart way',
    color: 'bg-rose-500'
  },
  { 
    icon: QrCode, 
    title: 'QR Code & POS (SoftPOS, SmartPOS) Solutions', 
    desc: 'Future-ready POS for every merchant',
    color: 'bg-teal-500'
  },
  { 
    icon: RefreshCw, 
    title: 'Recurring Payments & Subscription Billing Systems', 
    desc: 'From one-time to lifetime payments',
    color: 'bg-lime-500'
  },
];

const softwareSolutions = [
  { 
    icon: School, 
    title: 'School Management Software', 
    desc: 'Simplifying education administration',
    color: 'bg-indigo-600'
  },
  { 
    icon: Briefcase, 
    title: 'CRM/HRMS Software', 
    desc: 'Stronger relationships, smarter growth',
    color: 'bg-orange-600'
  },
  { 
    icon: Utensils, 
    title: 'Resturant/Food Delivery Software', 
    desc: 'From kitchen to customer, simplified !',
    color: 'bg-red-500'
  },
  { 
    icon: Code2, 
    title: 'Fintech Software Development', 
    desc: 'Building the future of finance with code',
    color: 'bg-blue-600'
  },
  { 
    icon: Zap, 
    title: 'On-Demand Software Development', 
    desc: 'Seamless experiences, built fast',
    color: 'bg-yellow-500'
  },
  { 
    icon: ShoppingBag, 
    title: 'E-commerce Single/Multi Vender', 
    desc: 'Simplify close and earn rewards',
    color: 'bg-fuchsia-500'
  },
  { 
    icon: Network, 
    title: 'Multi-Level Marketing Portel', 
    desc: 'Smarter growth with Future vision',
    color: 'bg-violet-600'
  },
  { 
    icon: Stethoscope, 
    title: 'Pharmacy/Hospital Management Software', 
    desc: 'Manage spend for your firm & portfolio',
    color: 'bg-emerald-600'
  },
  { 
    icon: Newspaper, 
    title: 'Smart News Portal', 
    desc: 'Manage spend for your firm & portfolio',
    color: 'bg-slate-700'
  },
  { 
    icon: Video, 
    title: 'Online Class/Tutorial Portal', 
    desc: 'Manage spend for your firm & portfolio',
    color: 'bg-rose-600'
  },
];

const fintechSoftware = [
  { 
    icon: Fingerprint, 
    title: 'AePS Software', 
    desc: 'Get the #1 financial stack for startups',
    color: 'bg-indigo-500'
  },
  { 
    icon: Receipt, 
    title: 'BBPS Software', 
    desc: 'Scale faster with smart cards & controls',
    color: 'bg-blue-600'
  },
  { 
    icon: SmartphoneCharging, 
    title: 'Recharge Software', 
    desc: 'Spend smart across entities, currencies',
    color: 'bg-amber-500'
  },
  { 
    icon: UserCircle, 
    title: 'B2C Software', 
    desc: 'Spend smart across entities, currencies',
    color: 'bg-emerald-500'
  },
  { 
    icon: Plane, 
    title: 'Travel/Booking Software', 
    desc: 'Spend smart across entities, currencies',
    color: 'bg-sky-500'
  },
];

const apiBankingSuite = [
  { 
    icon: Layers, 
    title: 'Multi-Purpose API', 
    desc: 'Simplify close and earn rewards',
    color: 'bg-rose-500'
  },
  { 
    icon: Bus, 
    title: 'Bus/Flight Booking', 
    desc: 'Manage spend for your firm & portfolio',
    color: 'bg-cyan-500'
  },
  { 
    icon: Send, 
    title: 'Money Transfer(DMT)', 
    desc: 'Manage spend for your firm & portfolio',
    color: 'bg-violet-500'
  },
  { 
    icon: UserCheck, 
    title: 'KYC Verification', 
    desc: 'Manage spend for your firm & portfolio',
    color: 'bg-teal-500'
  },
];

export default function Sidebar({ isOpen, onClose, onLogoClick, onOpenContact, onOpenDemo, onOpenFintechInfrastructure, onOpenPaymentGateway, onOpenSecurityCompliance, onOpenHRPayroll, onOpenRetailFintech, onOpenSAPERP, onOpenMobileApp, onOpenEdTech, onOpenUPIApps, onOpenGatewayIntegration, onOpenPaymentSwitch, onOpenQRPOS, onOpenRecurringBilling, onOpenSchoolManagement, onOpenCRMHRMS, onOpenFoodDelivery, onOpenFintechDev, onOpenOnDemandDev, onOpenEcommerce, onOpenMLMPortal, onOpenHealthcare, onOpenNewsPortal, onOpenOnlineClass, onOpenAePSSoftware, onOpenBBPSSoftware, onOpenRechargeSoftware, onOpenB2CSoftware, onOpenTravelBooking, onOpenMultiPurposeAPI, onOpenBusFlightBooking, onOpenMoneyTransfer, onOpenKYCVerification, onOpenInsights }: SidebarProps) {
  const [view, setView] = useState<'main' | 'products' | 'solutions' | 'fintech'>('main');

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset view when closing
      setTimeout(() => setView('main'), 300);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleItemClick = (e: React.MouseEvent, item: typeof menuItems[0]) => {
    if (item.id === 'products') {
      e.preventDefault();
      setView('products');
    } else if (item.id === 'solutions') {
      e.preventDefault();
      setView('solutions');
    } else if (item.id === 'fintech') {
      e.preventDefault();
      setView('fintech');
    } else if (item.id === 'home') {
      e.preventDefault();
      onLogoClick();
      onClose();
    } else if (item.id === 'demo') {
      e.preventDefault();
      onOpenDemo();
      onClose();
    } else if (item.id === 'insights') {
      e.preventDefault();
      onOpenInsights();
      onClose();
    } else {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-[320px] bg-white z-[70] lg:hidden flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 flex items-center justify-between border-b border-slate-100">
              {view === 'main' ? (
                <div 
                  onClick={() => {
                    onLogoClick();
                    onClose();
                  }} 
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">A</div>
                  <span className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">Anilax</span>
                </div>
              ) : (
                <button 
                  onClick={() => setView('main')}
                  className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-bold"
                >
                  <ArrowLeft size={20} />
                  <span>Back</span>
                </button>
              )}
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X size={24} className="text-slate-600" />
              </button>
            </div>

            {/* Content Area with Animation */}
            <div className="flex-grow relative overflow-hidden">
              <AnimatePresence mode="wait">
                {view === 'main' && (
                  <motion.nav
                    key="main"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    className="py-8 px-4 h-full overflow-y-auto"
                  >
                    <ul className="space-y-2">
                      {menuItems.map((item, index) => (
                        <li key={index}>
                          <a
                            href={item.href}
                            onClick={(e) => handleItemClick(e, item)}
                            className="flex items-center justify-between px-4 py-4 text-slate-700 hover:bg-primary/5 hover:text-primary rounded-2xl transition-all group"
                          >
                            <div className="flex items-center gap-4">
                              <item.icon size={22} className="text-slate-400 group-hover:text-primary transition-colors" />
                              <span className="font-semibold text-base">{item.label}</span>
                            </div>
                            {item.hasChevron && (
                              <ChevronRight size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.nav>
                )}

                {view === 'products' && (
                  <motion.div
                    key="products"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    className="py-8 px-6 h-full overflow-y-auto no-scrollbar"
                  >
                    <div className="mb-10">
                      <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <span className="w-1 h-4 bg-primary rounded-full"></span>
                        For Industries
                      </h3>
                      <div className="space-y-6">
                        {industries.map((item, i) => (
                          <a 
                            key={i} 
                            href="#" 
                            onClick={(e) => {
                              e.preventDefault();
                              if (item.title === 'Fintech Infrastructure & Platform') {
                                onOpenFintechInfrastructure();
                              } else if (item.title === 'Payment Gateways/Wallet Software') {
                                onOpenPaymentGateway();
                              } else if (item.title === 'Security & Compliance Software') {
                                onOpenSecurityCompliance();
                              } else if (item.title === 'HR & Payroll Software') {
                                onOpenHRPayroll();
                              }
                              onClose();
                            }} 
                            className="flex gap-4 group"
                          >
                            <div className={`flex-shrink-0 w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg shadow-current/20 group-hover:scale-110 transition-transform`}>
                              <item.icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-1">{item.title}</h4>
                              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <span className="w-1 h-4 bg-primary rounded-full"></span>
                        For Partners
                      </h3>
                      <div className="space-y-6">
                        {partners.map((item, i) => (
                          <a 
                            key={i} 
                            href="#" 
                            onClick={(e) => {
                              e.preventDefault();
                              if (item.title === 'Retail-Fintech at Local Level') {
                                onOpenRetailFintech();
                              } else if (item.title === 'SAP ERP') {
                                onOpenSAPERP();
                              } else if (item.title === 'EdTech & Learning Software') {
                                onOpenEdTech();
                              } else if (item.title === 'Mobile App Development') {
                                onOpenMobileApp();
                              }
                              onClose();
                            }} 
                            className="flex gap-4 group"
                          >
                            <div className={`flex-shrink-0 w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg shadow-current/20 group-hover:scale-110 transition-transform`}>
                              <item.icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-1">{item.title}</h4>
                              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {view === 'solutions' && (
                  <motion.div
                    key="solutions"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    className="py-8 px-6 h-full overflow-y-auto no-scrollbar"
                  >
                    <div className="mb-10">
                      <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <span className="w-1 h-4 bg-primary rounded-full"></span>
                        Payment Solutions
                      </h3>
                      <div className="space-y-6">
                        {paymentSolutions.map((item, i) => (
                          <a 
                            key={i} 
                            href="#" 
                            onClick={(e) => {
                              e.preventDefault();
                              if (item.title === 'UPI Payment Apps & APIs') {
                                onOpenUPIApps();
                              } else if (item.title === 'Payment Gateway Integration & Development') {
                                onOpenGatewayIntegration();
                              } else if (item.title === 'Payment Switch & Processor') {
                                onOpenPaymentSwitch();
                              } else if (item.title === 'QR Code & POS (SoftPOS, SmartPOS) Solutions') {
                                onOpenQRPOS();
                              } else if (item.title === 'Recurring Payments & Subscription Billing Systems') {
                                onOpenRecurringBilling();
                              }
                              onClose();
                            }} 
                            className="flex gap-4 group"
                          >
                            <div className={`flex-shrink-0 w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg shadow-current/20 group-hover:scale-110 transition-transform`}>
                              <item.icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-1">{item.title}</h4>
                              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <span className="w-1 h-4 bg-primary rounded-full"></span>
                        Software Solutions
                      </h3>
                      <div className="space-y-6">
                        {softwareSolutions.map((item, i) => (
                          <a 
                            key={i} 
                            href="#" 
                            onClick={(e) => {
                              e.preventDefault();
                              if (item.title === 'School Management Software') {
                                onOpenSchoolManagement();
                              } else if (item.title === 'CRM/HRMS Software') {
                                onOpenCRMHRMS();
                              } else if (item.title === 'Resturant/Food Delivery Software') {
                                onOpenFoodDelivery();
                              } else if (item.title === 'Fintech Software Development') {
                                onOpenFintechDev();
                              } else if (item.title === 'On-Demand Software Development') {
                                onOpenOnDemandDev();
                              } else if (item.title === 'E-commerce Single/Multi Vender') {
                                onOpenEcommerce();
                              } else if (item.title === 'Multi-Level Marketing Portel') {
                                onOpenMLMPortal();
                              } else if (item.title === 'Pharmacy/Hospital Management Software') {
                                onOpenHealthcare();
                              } else if (item.title === 'Smart News Portal') {
                                onOpenNewsPortal();
                              } else if (item.title === 'Online Class/Tutorial Portal') {
                                onOpenOnlineClass();
                              }
                              onClose();
                            }} 
                            className="flex gap-4 group"
                          >
                            <div className={`flex-shrink-0 w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg shadow-current/20 group-hover:scale-110 transition-transform`}>
                              <item.icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-1">{item.title}</h4>
                              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {view === 'fintech' && (
                  <motion.div
                    key="fintech"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    className="py-8 px-6 h-full overflow-y-auto no-scrollbar"
                  >
                    <div className="mb-10">
                      <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <span className="w-1 h-4 bg-primary rounded-full"></span>
                        Software
                      </h3>
                      <div className="space-y-6">
                        {fintechSoftware.map((item, i) => (
                          <a 
                            key={i} 
                            href="#" 
                            onClick={(e) => {
                              e.preventDefault();
                              if (item.title === 'AePS Software') {
                                onOpenAePSSoftware();
                              } else if (item.title === 'BBPS Software') {
                                onOpenBBPSSoftware();
                              } else if (item.title === 'Recharge Software') {
                                onOpenRechargeSoftware();
                              } else if (item.title === 'B2C Software') {
                                onOpenB2CSoftware();
                              } else if (item.title === 'Travel/Booking Software') {
                                onOpenTravelBooking();
                              }
                              onClose();
                            }} 
                            className="flex gap-4 group"
                          >
                            <div className={`flex-shrink-0 w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg shadow-current/20 group-hover:scale-110 transition-transform`}>
                              <item.icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-1">{item.title}</h4>
                              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <span className="w-1 h-4 bg-primary rounded-full"></span>
                        API Banking Suite
                      </h3>
                      <div className="space-y-6">
                        {apiBankingSuite.map((item, i) => (
                          <a 
                            key={i} 
                            href="#" 
                            onClick={(e) => {
                              e.preventDefault();
                              if (item.title === 'Multi-Purpose API') {
                                onOpenMultiPurposeAPI();
                              } else if (item.title === 'Bus/Flight Booking') {
                                onOpenBusFlightBooking();
                              } else if (item.title === 'Money Transfer(DMT)') {
                                onOpenMoneyTransfer();
                              } else if (item.title === 'KYC Verification') {
                                onOpenKYCVerification();
                              }
                              onClose();
                            }} 
                            className="flex gap-4 group"
                          >
                            <div className={`flex-shrink-0 w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg shadow-current/20 group-hover:scale-110 transition-transform`}>
                              <item.icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-1">{item.title}</h4>
                              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-slate-50 bg-slate-50/50">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onClose();
                }}
                className="block group"
              >
                <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3 group-hover:text-primary transition-colors">
                  Innovating Finance
                </div>
                <div className="text-2xl font-black text-slate-900 tracking-tighter group-hover:text-primary transition-colors">
                  Anilax Software
                </div>
                <div className="mt-2 text-sm text-slate-500 font-medium">
                  Empowering the future of payments.
                </div>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
