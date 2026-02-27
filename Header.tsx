import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar from './Sidebar';

interface HeaderProps {
  onOpenContact: () => void;
  onLogoClick: () => void;
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

export default function Header({ onOpenContact, onLogoClick, onOpenDemo, onOpenFintechInfrastructure, onOpenPaymentGateway, onOpenSecurityCompliance, onOpenHRPayroll, onOpenRetailFintech, onOpenSAPERP, onOpenMobileApp, onOpenEdTech, onOpenUPIApps, onOpenGatewayIntegration, onOpenPaymentSwitch, onOpenQRPOS, onOpenRecurringBilling, onOpenSchoolManagement, onOpenCRMHRMS, onOpenFoodDelivery, onOpenFintechDev, onOpenOnDemandDev, onOpenEcommerce, onOpenMLMPortal, onOpenHealthcare, onOpenNewsPortal, onOpenOnlineClass, onOpenAePSSoftware, onOpenBBPSSoftware, onOpenRechargeSoftware, onOpenB2CSoftware, onOpenTravelBooking, onOpenMultiPurposeAPI, onOpenBusFlightBooking, onOpenMoneyTransfer, onOpenKYCVerification, onOpenInsights }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="p-2 lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={onLogoClick}
            >
              <span className="text-xl font-bold tracking-tight">Anilax Software</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <div className="relative group">
              <button className="hover:text-primary transition-colors flex items-center gap-1 py-4">
                Product
                <ChevronRight size={14} className="rotate-90 group-hover:text-primary transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-[560px] bg-white shadow-2xl rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-slate-100 translate-y-2 group-hover:translate-y-0">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">For Industries</p>
                    <div className="space-y-1">
                      <button 
                        onClick={onOpenFintechInfrastructure}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">Fintech Infrastructure</p>
                        <p className="text-[10px] text-slate-500">Seamless infrastructure for payments</p>
                      </button>
                      <button 
                        onClick={onOpenPaymentGateway}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">Payment Gateways</p>
                        <p className="text-[10px] text-slate-500">One platform for payments & wallets</p>
                      </button>
                      <button 
                        onClick={onOpenSecurityCompliance}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">Security & Compliance</p>
                        <p className="text-[10px] text-slate-500">Trusted security, seamless compliance</p>
                      </button>
                      <button 
                        onClick={onOpenHRPayroll}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">HR & Payroll Software</p>
                        <p className="text-[10px] text-slate-500">People. Payroll. Productivity</p>
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">For Partners</p>
                    <div className="space-y-1">
                      <button 
                        onClick={onOpenRetailFintech}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">Retail-Fintech</p>
                        <p className="text-[10px] text-slate-500">Turning small businesses smart</p>
                      </button>
                      <button 
                        onClick={onOpenSAPERP}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">SAP ERP</p>
                        <p className="text-[10px] text-slate-500">Real-Time Insights. Real Impact</p>
                      </button>
                      <button 
                        onClick={onOpenEdTech}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">EdTech & Learning</p>
                        <p className="text-[10px] text-slate-500">Education powered by technology</p>
                      </button>
                      <button 
                        onClick={onOpenMobileApp}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">Mobile App Development</p>
                        <p className="text-[10px] text-slate-500">Cross-Platform & Native Mobile Apps</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-primary transition-colors flex items-center gap-1 py-4">
                Fintech
                <ChevronRight size={14} className="rotate-90 group-hover:text-primary transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-[560px] bg-white shadow-2xl rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-slate-100 translate-y-2 group-hover:translate-y-0">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">#Software</p>
                    <div className="space-y-1">
                      <button 
                        onClick={onOpenAePSSoftware}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">AePS Software</p>
                        <p className="text-[10px] text-slate-500">#1 financial stack for startups</p>
                      </button>
                      <button 
                        onClick={onOpenBBPSSoftware}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">BBPS Software</p>
                        <p className="text-[10px] text-slate-500">Scale with smart cards & controls</p>
                      </button>
                      <button 
                        onClick={onOpenRechargeSoftware}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">Recharge Software</p>
                        <p className="text-[10px] text-slate-500">Spend smart across entities</p>
                      </button>
                      <button 
                        onClick={onOpenB2CSoftware}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">B2C Software</p>
                        <p className="text-[10px] text-slate-500">Consumer focused financial tools</p>
                      </button>
                      <button 
                        onClick={onOpenTravelBooking}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">Travel Software</p>
                        <p className="text-[10px] text-slate-500">Booking & management solutions</p>
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">#API Banking Suite</p>
                    <div className="space-y-1">
                      <button 
                        onClick={onOpenMultiPurposeAPI}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">Multi-Purpose API</p>
                        <p className="text-[10px] text-slate-500">Simplify close and earn rewards</p>
                      </button>
                      <button 
                        onClick={onOpenBusFlightBooking}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">Bus/Flight Booking</p>
                        <p className="text-[10px] text-slate-500">Manage spend for your firm</p>
                      </button>
                      <button 
                        onClick={onOpenMoneyTransfer}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">Money Transfer (DMT)</p>
                        <p className="text-[10px] text-slate-500">Secure domestic money transfer</p>
                      </button>
                      <button 
                        onClick={onOpenKYCVerification}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">KYC Verification</p>
                        <p className="text-[10px] text-slate-500">Instant identity verification</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-primary transition-colors flex items-center gap-1 py-4">
                Solutions
                <ChevronRight size={14} className="rotate-90 group-hover:text-primary transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-[560px] bg-white shadow-2xl rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-slate-100 translate-y-2 group-hover:translate-y-0">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Payment Solutions</p>
                    <div className="space-y-1">
                      <button 
                        onClick={onOpenUPIApps}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">UPI Payment Apps</p>
                        <p className="text-[10px] text-slate-500">Cashless convenience, powered by UPI</p>
                      </button>
                      <button 
                        onClick={onOpenGatewayIntegration}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">Gateway Integration</p>
                        <p className="text-[10px] text-slate-500">Building bridges for digital payments</p>
                      </button>
                      <button 
                        onClick={onOpenPaymentSwitch}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">Payment Switch</p>
                        <p className="text-[10px] text-slate-500">Routing payments the smart way</p>
                      </button>
                      <button 
                        onClick={onOpenQRPOS}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">QR Code & POS</p>
                        <p className="text-[10px] text-slate-500">Future-ready POS solutions</p>
                      </button>
                      <button 
                        onClick={onOpenRecurringBilling}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">Recurring Payments</p>
                        <p className="text-[10px] text-slate-500">Subscription billing systems</p>
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Software Solutions</p>
                    <div className="space-y-1">
                      <button 
                        onClick={onOpenSchoolManagement}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">School Management</p>
                        <p className="text-[10px] text-slate-500">Simplifying education administration</p>
                      </button>
                      <button 
                        onClick={onOpenCRMHRMS}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">CRM/HRMS Software</p>
                        <p className="text-[10px] text-slate-500">Stronger relationships, smarter growth</p>
                      </button>
                      <button 
                        onClick={onOpenFoodDelivery}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">Food Delivery</p>
                        <p className="text-[10px] text-slate-500">From kitchen to customer, simplified</p>
                      </button>
                      <button 
                        onClick={onOpenFintechDev}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">Fintech Software Dev</p>
                        <p className="text-[10px] text-slate-500">Building the future of finance</p>
                      </button>
                      <button 
                        onClick={onOpenOnDemandDev}
                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <p className="font-bold text-slate-900 group-hover/item:text-primary">On-Demand Software</p>
                        <p className="text-[10px] text-slate-500">Seamless experiences, built fast</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={onOpenInsights}
              className="hover:text-primary transition-colors"
            >
              Insights
            </button>
            <a href="#" className="hover:text-primary transition-colors">Company</a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenContact}
              className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-orange-500/20 active:scale-95"
            >
              Get started
            </button>
          </div>
        </div>
      </header>
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onLogoClick={onLogoClick}
        onOpenContact={onOpenContact}
        onOpenDemo={onOpenDemo}
        onOpenFintechInfrastructure={onOpenFintechInfrastructure}
        onOpenPaymentGateway={onOpenPaymentGateway}
        onOpenSecurityCompliance={onOpenSecurityCompliance}
        onOpenHRPayroll={onOpenHRPayroll}
        onOpenRetailFintech={onOpenRetailFintech}
        onOpenSAPERP={onOpenSAPERP}
        onOpenMobileApp={onOpenMobileApp}
        onOpenEdTech={onOpenEdTech}
        onOpenUPIApps={onOpenUPIApps}
        onOpenGatewayIntegration={onOpenGatewayIntegration}
        onOpenPaymentSwitch={onOpenPaymentSwitch}
        onOpenQRPOS={onOpenQRPOS}
        onOpenRecurringBilling={onOpenRecurringBilling}
        onOpenSchoolManagement={onOpenSchoolManagement}
        onOpenCRMHRMS={onOpenCRMHRMS}
        onOpenFoodDelivery={onOpenFoodDelivery}
        onOpenFintechDev={onOpenFintechDev}
        onOpenOnDemandDev={onOpenOnDemandDev}
        onOpenEcommerce={onOpenEcommerce}
        onOpenMLMPortal={onOpenMLMPortal}
        onOpenHealthcare={onOpenHealthcare}
        onOpenNewsPortal={onOpenNewsPortal}
        onOpenOnlineClass={onOpenOnlineClass}
        onOpenAePSSoftware={onOpenAePSSoftware}
        onOpenBBPSSoftware={onOpenBBPSSoftware}
        onOpenRechargeSoftware={onOpenRechargeSoftware}
        onOpenB2CSoftware={onOpenB2CSoftware}
        onOpenTravelBooking={onOpenTravelBooking}
        onOpenMultiPurposeAPI={onOpenMultiPurposeAPI}
        onOpenBusFlightBooking={onOpenBusFlightBooking}
        onOpenMoneyTransfer={onOpenMoneyTransfer}
        onOpenKYCVerification={onOpenKYCVerification}
        onOpenInsights={onOpenInsights}
      />
    </>
  );
}
