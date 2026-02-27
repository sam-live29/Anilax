import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import ExplorePage from './components/ExplorePage';
import TypewriterCode from './components/TypewriterCode';
import BlogSlider from './components/BlogSlider';
import DemoPage from './components/DemoPage';
import FintechInfrastructurePage from './components/FintechInfrastructurePage';
import PaymentGatewayPage from './components/PaymentGatewayPage';
import SecurityCompliancePage from './components/SecurityCompliancePage';
import HRPayrollPage from './components/HRPayrollPage';
import RetailFintechPage from './components/RetailFintechPage';
import SAPERPPage from './components/SAPERPPage';
import MobileAppDevelopmentPage from './components/MobileAppDevelopmentPage';
import EdTechLearningPage from './components/EdTechLearningPage';
import UPIPaymentAppsPage from './components/UPIPaymentAppsPage';
import PaymentGatewayIntegrationPage from './components/PaymentGatewayIntegrationPage';
import PaymentSwitchProcessorPage from './components/PaymentSwitchProcessorPage';
import QRCodePOSSolutionsPage from './components/QRCodePOSSolutionsPage';
import RecurringPaymentsBillingPage from './components/RecurringPaymentsBillingPage';
import SchoolManagementPage from './components/SchoolManagementPage';
import CRMHRMSPage from './components/CRMHRMSPage';
import RestaurantFoodDeliveryPage from './components/RestaurantFoodDeliveryPage';
import FintechDevelopmentPage from './components/FintechDevelopmentPage';
import OnDemandSoftwarePage from './components/OnDemandSoftwarePage';
import EcommercePlatformPage from './components/EcommercePlatformPage';
import MLMPortalPage from './components/MLMPortalPage';
import HealthcareManagementPage from './components/HealthcareManagementPage';
import SmartNewsPortalPage from './components/SmartNewsPortalPage';
import OnlineClassPortalPage from './components/OnlineClassPortalPage';
import AePSSoftwarePage from './components/AePSSoftwarePage';
import BBPSSoftwarePage from './components/BBPSSoftwarePage';
import RechargeSoftwarePage from './components/RechargeSoftwarePage';
import B2CSoftwarePage from './components/B2CSoftwarePage';
import TravelBookingSoftwarePage from './components/TravelBookingSoftwarePage';
import MultiPurposeAPIPage from './components/MultiPurposeAPIPage';
import MoneyTransferPage from './components/MoneyTransferPage';
import KYCVerificationPage from './components/KYCVerificationPage';
import OurInsightsPage from './components/OurInsightsPage';
import BlogPostAPIDrivenPage from './components/BlogPostAPIDrivenPage';
import BlogPostEcommercePage from './components/BlogPostEcommercePage';
import HeroIllustration from './components/HeroIllustration';
import MerchantIllustration from './components/MerchantIllustration';
import DeveloperIllustration from './components/DeveloperIllustration';
import SDLCIllustration from './components/SDLCIllustration';
import DesignToolsIllustration from './components/DesignToolsIllustration';
import ImagePlaceholder from './components/ImagePlaceholder';
import BlogPostScalableAppsPage from './components/BlogPostScalableAppsPage';
import BlogPostBlockchainPage from './components/BlogPostBlockchainPage';
import BlogPostFintechRevolutionPage from './components/BlogPostFintechRevolutionPage';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, useSpring } from 'motion/react';
import { 
  ArrowRight,
  Building2, 
  Globe, 
  UserCheck, 
  Zap, 
  Wallet, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [view, setView] = useState<'landing' | 'contact' | 'explore' | 'demo' | 'fintech-infrastructure' | 'payment-gateway' | 'security-compliance' | 'hr-payroll' | 'retail-fintech' | 'saperp' | 'mobile-app' | 'edtech' | 'upi-apps' | 'gateway-integration' | 'payment-switch' | 'qr-pos' | 'recurring-billing' | 'school-mgmt' | 'crm-hrms' | 'food-delivery' | 'fintech-dev' | 'ondemand-dev' | 'ecommerce' | 'mlm-portal' | 'healthcare' | 'news-portal' | 'online-class' | 'aeps-software' | 'bbps-software' | 'recharge-software' | 'b2c-software' | 'travel-booking' | 'multi-purpose-api' | 'bus-flight-booking' | 'money-transfer' | 'kyc-verification' | 'insights' | 'blog-api-driven' | 'blog-ecommerce' | 'blog-scalable-apps' | 'blog-blockchain' | 'blog-fintech-revolution'>('landing');
  const featuresRef = useRef(null);

  // Scroll to top on view change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);
  
  const { scrollYProgress: pageScrollY } = useScroll();
  
  const { scrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start 80%", "end 20%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.001
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const incompleteTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const jsonCode = `{
  "transaction_id": "txn_8234ff3c-9a7b-4d2a-91d0d3218c4e",
  "timestamp": "2025-04-30T12:00:26Z",
  "amount": 249.99,
  "currency": "USD",
  "merchant": {
    "id": "mrc_4567ff2b-1c92-43f8-a3f1-8273e2a5e812",
    "name": "Amazon Marketplace",
    "category": "ecommerce"
  },
  "customer": {
    "id": "cus_1327f03a-80e1-5f96-ac8b-abb2da42fa67",
    "name": "John Doe",
    "account_number": "****5678",
    "country": "US"
  },
  "payment_method": "credit_card",
  "status": "completed",
  "fx": {
    "original_amount": 210.50,
    "original_currency": "EUR",
    "conversion_rate": 1.187,
    "fee": 1.99
  },
  "risk_score": 12,
  "tags": ["online_purchase", "cross_border"]
}`.trim();

  return (
    <div className="min-h-screen flex flex-col">
        {/* Top Banner */}
        <div className="bg-[#0a0f1a] text-white py-3 text-center text-xs sm:text-sm px-4">
          <p className="flex items-center justify-center gap-2">
            ☀️ Our mission is to make financial services accessible, innovative, and future-ready. →
          </p>
        </div>

        <Header 
          onOpenContact={() => setView('contact')} 
          onLogoClick={() => setView('landing')} 
          onOpenDemo={() => setView('demo')}
          onOpenFintechInfrastructure={() => setView('fintech-infrastructure')}
          onOpenPaymentGateway={() => setView('payment-gateway')}
          onOpenSecurityCompliance={() => setView('security-compliance')}
          onOpenHRPayroll={() => setView('hr-payroll')}
          onOpenRetailFintech={() => setView('retail-fintech')}
          onOpenSAPERP={() => setView('saperp')}
          onOpenMobileApp={() => setView('mobile-app')}
          onOpenEdTech={() => setView('edtech')}
          onOpenUPIApps={() => setView('upi-apps')}
          onOpenGatewayIntegration={() => setView('gateway-integration')}
          onOpenPaymentSwitch={() => setView('payment-switch')}
          onOpenQRPOS={() => setView('qr-pos')}
          onOpenRecurringBilling={() => setView('recurring-billing')}
          onOpenSchoolManagement={() => setView('school-mgmt')}
          onOpenCRMHRMS={() => setView('crm-hrms')}
          onOpenFoodDelivery={() => setView('food-delivery')}
          onOpenFintechDev={() => setView('fintech-dev')}
          onOpenOnDemandDev={() => setView('ondemand-dev')}
          onOpenEcommerce={() => setView('ecommerce')}
          onOpenMLMPortal={() => setView('mlm-portal')}
          onOpenHealthcare={() => setView('healthcare')}
          onOpenNewsPortal={() => setView('news-portal')}
          onOpenOnlineClass={() => setView('online-class')}
          onOpenAePSSoftware={() => setView('aeps-software')}
          onOpenBBPSSoftware={() => setView('bbps-software')}
          onOpenRechargeSoftware={() => setView('recharge-software')}
          onOpenB2CSoftware={() => setView('b2c-software')}
          onOpenTravelBooking={() => setView('travel-booking')}
          onOpenMultiPurposeAPI={() => setView('multi-purpose-api')}
          onOpenBusFlightBooking={() => setView('bus-flight-booking')}
          onOpenMoneyTransfer={() => setView('money-transfer')}
          onOpenKYCVerification={() => setView('kyc-verification')}
          onOpenInsights={() => setView('insights')}
        />

        <main className="flex-grow">
          {view === 'landing' ? (
            <>
              {/* Hero Section */}
              <section className="section-container text-center relative overflow-hidden pt-8 md:pt-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="max-w-4xl lg:max-w-5xl mx-auto"
                >
                  <div className="mb-4 md:mb-8">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.2 }}
                    >
                      <HeroIllustration />
                    </motion.div>
                  </div>
                
                <h1 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-3xl md:text-5xl lg:text-6xl font-display font-black mb-3 md:mb-5 tracking-tight text-slate-950 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  Connect smarter.<br />Integrate faster.
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-slate-500 mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed px-4">
                  Power your growth with <i>finance payments</i>, banking, expense tracking, and accounting — available in 28 states and 8 union territories.
                </p>

                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setView('contact');
                  }}
                  className="flex flex-row gap-2 max-w-lg mx-auto mb-6 px-4"
                >
                  <input 
                    type="email" 
                    placeholder="Work email" 
                    required
                    className="flex-grow min-w-0 px-4 py-3 md:py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-xs md:text-base"
                  />
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-4 md:px-8 py-3 md:py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/20 text-xs md:text-base whitespace-nowrap"
                  >
                    Get started
                  </motion.button>
                </form>
                
                <div className="max-w-lg mx-auto text-left px-4">
                  <motion.button 
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 text-[#ff5722] font-bold transition-all mb-6 md:mb-8"
                  >
                    <span className="text-lg md:text-xl">▶</span> See in action
                  </motion.button>
                </div>

                <p className="text-[10px] md:text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed mb-6 md:mb-8 px-4">
                  Anilax Software Private Limited is a financial technology company, not a bank. Banking and payment services are provider.
                </p>

                  <div className="relative overflow-hidden py-8 md:py-12 border-y border-slate-100 bg-slate-50/30">
                    <motion.div 
                      className="flex items-center gap-12 md:gap-24 whitespace-nowrap"
                      animate={{ x: [0, -2000] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 60, 
                        ease: "linear" 
                      }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12 md:gap-24">
                          {[
                            { icon: Building2, name: "YES BANK", slogan: "Experience Our Expertise" },
                            { icon: Globe, name: "HSBC", slogan: "Together we thrive" },
                            { icon: UserCheck, name: "IDFC FIRST", slogan: "Always You First" },
                            { icon: Zap, name: "NPCI", slogan: "Touching every Indian" },
                            { icon: Wallet, name: "Fino", slogan: "Qadar Aapki Mehnat Ki" },
                            { icon: ShieldCheck, name: "NSDL", slogan: "Technology, Trust & Reach" }
                          ].map((partner, j) => (
                            <div key={j} className="flex flex-col items-center gap-1 group">
                              <div className="flex items-center gap-2 text-slate-400 group-hover:text-primary transition-colors">
                                <partner.icon size={20} className="md:size-6" />
                                <span className="text-sm md:text-lg font-bold">{partner.name}</span>
                              </div>
                              <span className="text-[8px] md:text-[10px] text-slate-400 uppercase tracking-widest font-medium">{partner.slogan}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </section>

              {/* Next-Gen APIs Section */}
              <section id="products" className="section-container">
                <div className="text-center mb-8 md:mb-12">
                  <h2 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-2 md:mb-3 text-slate-950 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    Next-Gen APIs for<br />Smarter Finance
                  </h2>
                  <p className="text-slate-500 text-xs md:text-base max-w-xl mx-auto px-4">
                    Seamlessly connect payments, banking, and compliance with our powerful API suite.
                  </p>
                  <button 
                    onClick={() => setView('explore')}
                    className="text-primary font-bold mt-4 inline-block border-b-2 border-primary pb-1 hover:text-primary-dark transition-colors"
                  >
                    Explore More →
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { title: "BBPS/AePS API", desc: "Simplify bill payments for utilities, DTH, telecom, FASTag, and more. One API for all recurring payments." },
                    { title: "UPI Payment API", desc: "Payments with QR codes, collect requests, and real-time settlements. Power your app with NPCI's." },
                    { title: "Multi-Modal Travel Booking API", desc: "All-in-One Travel Booking API Multi-Modal Travel Made Simple-One API for Every Mode of Travel" },
                    { title: "KYC & Verification API", desc: "Secure digital onboarding with eKYC, PAN verification, CKYC fetch, document OCR, and face recognition." },
                    { title: "Chat & Messaging API", desc: "Connect Smarter with Chat & Messaging APIs WhatsApp, Telegram & In-App Chat – All in One API" }
                  ].map((api, i) => (
                    <div 
                      key={i}
                      className="card-shadow transition-all cursor-pointer text-center"
                    >
                      <h3 className="text-xl font-bold mb-4">{api.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{api.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

            {/* Unified API Section */}
            <section className="bg-[#0a0f1a] text-white py-12 md:py-16 overflow-hidden">
              <div className="max-w-4xl mx-auto px-4">
                {/* 1st Part: Headlines + Code */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-8 md:mb-12"
                >
                  <p className="text-slate-400 font-bold mb-2 md:mb-3 uppercase tracking-wider text-[10px] md:text-xs">Access financial data from all major providers</p>
                  <h2 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-2xl md:text-4xl lg:text-5xl font-display font-black mb-4 md:mb-8 text-white cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    Launch faster with one unified API
                  </h2>
                  
                  <div className="bg-[#1a2233] rounded-xl p-3 md:p-5 border border-white/10 shadow-2xl font-mono text-[7px] md:text-[10px] overflow-hidden min-h-[120px] md:min-h-[180px] text-left max-w-sm mx-auto">
                    <div className="flex gap-1.5 mb-3 md:mb-4">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500/80"></div>
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-500/80"></div>
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500/80"></div>
                    </div>
                    <TypewriterCode code={jsonCode} />
                  </div>
                </motion.div>

                {/* 2nd Part: Features + Button */}
                <div className="max-w-3xl mx-auto mt-16 md:mt-24">
                  <div className="relative pl-8 md:pl-12" ref={featuresRef}>
                    {/* Progress Line Background */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 rounded-full overflow-hidden">
                      {/* Particles in the incomplete path */}
                      <motion.div
                        style={{ top: incompleteTop }}
                        className="absolute left-0 right-0 bottom-0 overflow-hidden pointer-events-none"
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              top: ["0%", "100%"],
                              opacity: [0, 1, 0]
                            }}
                            transition={{ 
                              duration: 1.5 + Math.random(), 
                              repeat: Infinity, 
                              delay: i * 0.4,
                              ease: "linear" 
                            }}
                            className="absolute left-1/2 -translate-x-1/2 w-1 h-1 bg-[#3572A5]/40 rounded-full"
                          />
                        ))}
                      </motion.div>
                      
                      {/* Continuous Scanner Effect */}
                      <div className="absolute left-0 w-full h-full">
                        <motion.div
                          animate={{ 
                            top: ["-10%", "110%"]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            repeatType: "reverse",
                            ease: "easeInOut" 
                          }}
                          className="absolute left-0 w-full h-24 bg-gradient-to-b from-transparent via-[#3572A5]/20 to-transparent"
                        />
                      </div>
                    </div>
                    {/* Animated Progress Line (Scroll-based) */}
                    <motion.div 
                      style={{ height: progressHeight }}
                      className="absolute left-0 top-0 w-1 bg-[#3572A5] rounded-full origin-top"
                    >
                      {/* Glowing Tip */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#3572A5] rounded-full blur-[2px] shadow-[0_0_15px_#3572A5]"></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    </motion.div>

                    <div className="space-y-12 md:space-y-20">
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="flex flex-col sm:flex-row gap-5 md:gap-8">
                          <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-white/20">
                            <Zap className="text-white w-6 h-6 md:w-8 md:h-8" />
                          </div>
                          <div>
                            <h4 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-white">Seamless Integration with Expert Support</h4>
                            <p className="text-slate-400 text-sm md:text-lg leading-relaxed">Start testing immediately with our easy-to-implement API. Every client is paired with a dedicated integration specialist to shorten dev cycles.</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="flex flex-col sm:flex-row gap-5 md:gap-8">
                          <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-white/20">
                            <Globe className="text-white w-6 h-6 md:w-8 md:h-8" />
                          </div>
                          <div>
                            <h4 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-white">Connect with Any Financial Institution</h4>
                            <p className="text-slate-400 text-sm md:text-lg leading-relaxed">From banks and payment gateways to KYC providers and lending platforms — connect once and access them all.</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="flex flex-col sm:flex-row gap-5 md:gap-8">
                          <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-white/20">
                            <ShieldCheck className="text-white w-6 h-6 md:w-8 md:h-8" />
                          </div>
                          <div>
                            <h4 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-white">Unlock AI-Ready Financial Insights</h4>
                            <p className="text-slate-400 text-sm md:text-lg leading-relaxed">Standardized and enriched financial data that fuels smarter risk models, fraud detection, and personalized financial services.</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="mt-12 md:mt-20 pl-8 md:pl-12">
                    <button 
                      onClick={() => setView('demo')}
                      className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg transition-all w-full sm:w-auto"
                    >
                      Book a demo
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Driving the Future Section */}
            <section id="solutions" className="section-container">
              <div className="text-center mb-8 md:mb-12">
                <h2 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-2 md:mb-3 text-slate-950 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  Driving the<br />Future of Finance
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <ImagePlaceholder text="Emerging Businesses" className="rounded-3xl shadow-lg" />
                  <h3 className="text-2xl font-bold">Solutions for Emerging Businesses</h3>
                  <p className="text-slate-500">Anilax Software builds modern fintech platforms that simplify finance for businesses and individuals alike.</p>
                  <a href="#" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">Learn more →</a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold">Fintech for Early-Stage Companies</h3>
                  <p className="text-slate-500">Power your growth journey with AI-powered fintech tools for payments, lending, and expense control.</p>
                  <a href="#" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">Learn more →</a>
                  <ImagePlaceholder text="Growth Ventures" className="rounded-3xl shadow-lg" />
                  <h3 className="text-2xl font-bold">Support for Growth Ventures</h3>
                  <p className="text-slate-500">Unify global payments, lending, and compliance under one powerful fintech platform for enterprises.</p>
                  <a href="#" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">Learn more →</a>
                </motion.div>
              </div>
            </section>

            {/* Revolutionize Section */}
            <section id="fintech" className="bg-slate-50 py-12 md:py-16">
              <div className="section-container">
                <div className="text-center mb-8 md:mb-12">
                  <h2 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-2xl md:text-3xl lg:text-4xl font-display font-black mb-2 md:mb-3 text-slate-950 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    Revolutionize your<br />financial operations
                  </h2>
                  <p className="text-slate-500 text-xs md:text-base px-4">Maximize every resource with AI-powered controls, payments, and accounting.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <DeveloperIllustration />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h3 
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="text-3xl font-bold mb-6 cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      Mobile App Development
                    </h3>
                    <p className="text-slate-500 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                      At Anilax Software, we specialize in building secure, scalable, and user-friendly mobile applications that empower businesses to grow in the digital age. Our expert team designs and develops apps tailored to your unique needs—whether for fintech, eCommerce, banking, or enterprise solutions. We focus on speed, security, and seamless user experience, ensuring every app meets the highest industry standards.
                    </p>
                    <a href="#" className="text-primary font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all text-lg">Explore Mobile Apps →</a>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-1 text-center"
                  >
                    <h3 
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="text-3xl font-bold mb-6 cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      Large Scale Web Applications/Software
                    </h3>
                    <p className="text-slate-500 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                      we design and develop high-performance, enterprise-grade web applications that handle millions of users and complex operations with ease. Our expertise lies in building scalable, secure, and reliable systems tailored for fintech, banking, eCommerce, and enterprise industries. Using modern frameworks, cloud-native architectures, and robust API integrations, we ensure seamless performance even at peak demand. From advanced dashboards to multi-tenant platforms, our large-scale solutions empower businesses to innovate faster and operate smarter.
                    </p>
                    <a href="#" className="text-primary font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all text-lg">Discover More →</a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2"
                  >
                    <SDLCIllustration />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <DesignToolsIllustration />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h3 
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="text-3xl font-bold mb-6 cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      UI and UX Design
                    </h3>
                    <p className="text-slate-500 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                      we create intuitive, engaging, and visually stunning user interfaces that elevate customer experiences across fintech, eCommerce, and enterprise platforms. Our UI and UX design services focus on simplicity, usability, and seamless interactions, ensuring that every click adds value. We blend creativity with research-driven design principles to craft interfaces that not only look great but also perform flawlessly.
                    </p>
                    <a href="#" className="text-primary font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all text-lg">Explore Design →</a>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="section-container text-center">
              <h2 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-2xl md:text-4xl font-display font-black mb-8 md:mb-12 text-slate-950 cursor-pointer hover:opacity-80 transition-opacity"
              >
                Smart finance,<br />bigger returns —<br />Anilax advantage
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-slate-500 font-bold mb-3 md:mb-4 text-sm md:text-base">Automation, powered by intelligence</p>
                  <h3 className="text-4xl md:text-6xl font-black text-primary mb-3 md:mb-4">35,040 hours</h3>
                  <p className="text-slate-500 text-sm md:text-base max-w-xs mx-auto">Unlock growth with intelligent fintech solutions that save costs, increase efficiency, and maximize profitability.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="text-slate-500 font-bold mb-3 md:mb-4 text-sm md:text-base">Smarter Treasury Solutions</p>
                  <h3 className="text-4xl md:text-6xl font-black text-primary mb-3 md:mb-4">Up to 7.28%+</h3>
                  <p className="text-slate-500 text-sm md:text-base max-w-xs mx-auto">From startups to enterprises, we empower businesses with scalable financial technology built for smarter spending and higher returns.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-slate-500 font-bold mb-3 md:mb-4 text-sm md:text-base">Stronger Policy Controls</p>
                  <h3 className="text-4xl md:text-6xl font-black text-primary mb-3 md:mb-4">99.99%</h3>
                  <p className="text-slate-500 text-sm md:text-base max-w-xs mx-auto">Future-ready fintech software that streamlines payments, automates workflows, and drives long-term financial growth.</p>
                </motion.div>
              </div>

              <div className="mt-24 max-w-3xl mx-auto text-slate-400 text-sm leading-relaxed">
                Enterprise compliance and timing metrics (July 2024) are illustrative in nature. The 99% compliance rate reflects performance of top-tier customers adopting our best practices. Yield information is accurate as of 17/7/24. Historical results are not guarantees of future performance.
              </div>
            </section>

            {/* Merchants Section */}
            <section className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0a0f1a] rounded-2xl md:rounded-[32px] p-6 md:p-12 text-white flex flex-col lg:flex-row items-center gap-8 md:gap-12 overflow-hidden relative"
              >
                <div className="flex-grow z-10">
                  <h2 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-2xl md:text-5xl font-display font-black mb-3 md:mb-6 leading-tight text-white cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    Built for Merchants<br />Who Want to Grow
                  </h2>
                  <div className="space-y-2 mb-6 md:mb-10">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-primary/20 p-1 rounded-full">
                        <CheckCircle2 size={14} className="text-primary md:size-[16px]" />
                      </div>
                      <p className="text-slate-300 text-xs md:text-lg">Enable quick and secure payment acceptance across channels</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-primary/20 p-1 rounded-full">
                        <CheckCircle2 size={14} className="text-primary md:size-[16px]" />
                      </div>
                      <p className="text-slate-300 text-xs md:text-lg">Support UPI, cards, net banking, and more in one place</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setView('contact')}
                    className="bg-primary hover:bg-primary-dark text-white px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold transition-all text-sm md:text-base shadow-xl shadow-primary/20"
                  >
                    Talk to Sales
                  </button>
                </div>
                <div className="relative w-full lg:w-1/2">
                  <MerchantIllustration />
                  {/* Decorative glow */}
                  <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10 opacity-50"></div>
                </div>
              </motion.div>
            </section>

            {/* Insights Section */}
            <section id="insights" className="section-container">
              <div className="text-center mb-6 md:mb-10">
                <h2 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-2xl md:text-4xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
                >
                  Insights on AI-powered<br />spend management.
                </h2>
              </div>

              <BlogSlider onOpenBlog={(id) => {
                if (id === 1) setView('blog-api-driven');
                if (id === 2) setView('blog-ecommerce');
                if (id === 3) setView('blog-scalable-apps');
                if (id === 4) setView('blog-fintech-revolution');
                if (id === 6) setView('blog-blockchain');
              }} />
            </section>
            </>
          ) : view === 'contact' ? (
            <ContactPage />
          ) : view === 'demo' ? (
            <DemoPage />
          ) : view === 'fintech-infrastructure' ? (
            <FintechInfrastructurePage />
          ) : view === 'payment-gateway' ? (
            <PaymentGatewayPage />
          ) : view === 'security-compliance' ? (
            <SecurityCompliancePage />
          ) : view === 'hr-payroll' ? (
            <HRPayrollPage />
          ) : view === 'retail-fintech' ? (
            <RetailFintechPage />
          ) : view === 'saperp' ? (
            <SAPERPPage />
          ) : view === 'mobile-app' ? (
            <MobileAppDevelopmentPage />
          ) : view === 'edtech' ? (
            <EdTechLearningPage />
          ) : view === 'upi-apps' ? (
            <UPIPaymentAppsPage />
          ) : view === 'gateway-integration' ? (
            <PaymentGatewayIntegrationPage />
          ) : view === 'payment-switch' ? (
            <PaymentSwitchProcessorPage />
          ) : view === 'qr-pos' ? (
            <QRCodePOSSolutionsPage />
          ) : view === 'recurring-billing' ? (
            <RecurringPaymentsBillingPage />
          ) : view === 'school-mgmt' ? (
            <SchoolManagementPage />
          ) : view === 'crm-hrms' ? (
            <CRMHRMSPage />
          ) : view === 'food-delivery' ? (
            <RestaurantFoodDeliveryPage />
          ) : view === 'fintech-dev' ? (
            <FintechDevelopmentPage />
          ) : view === 'ondemand-dev' ? (
            <OnDemandSoftwarePage />
          ) : view === 'ecommerce' ? (
            <EcommercePlatformPage />
          ) : view === 'mlm-portal' ? (
            <MLMPortalPage />
          ) : view === 'healthcare' ? (
            <HealthcareManagementPage />
          ) : view === 'news-portal' ? (
            <SmartNewsPortalPage />
          ) : view === 'online-class' ? (
            <OnlineClassPortalPage />
          ) : view === 'aeps-software' ? (
            <AePSSoftwarePage />
          ) : view === 'bbps-software' ? (
            <BBPSSoftwarePage />
          ) : view === 'recharge-software' ? (
            <RechargeSoftwarePage />
          ) : view === 'b2c-software' ? (
            <B2CSoftwarePage />
          ) : view === 'travel-booking' ? (
            <TravelBookingSoftwarePage />
          ) : view === 'multi-purpose-api' ? (
            <MultiPurposeAPIPage />
          ) : view === 'bus-flight-booking' ? (
            <TravelBookingSoftwarePage />
          ) : view === 'money-transfer' ? (
            <MoneyTransferPage />
          ) : view === 'kyc-verification' ? (
            <KYCVerificationPage />
          ) : view === 'insights' ? (
            <OurInsightsPage onOpenBlog={(id) => {
              if (id === 1) setView('blog-api-driven');
              if (id === 2) setView('blog-ecommerce');
              if (id === 3) setView('blog-scalable-apps');
              if (id === 4) setView('blog-blockchain');
              if (id === 5) setView('blog-fintech-revolution');
            }} />
          ) : view === 'blog-api-driven' ? (
            <BlogPostAPIDrivenPage onBack={() => setView('insights')} onHome={() => setView('landing')} />
          ) : view === 'blog-ecommerce' ? (
            <BlogPostEcommercePage onBack={() => setView('insights')} onHome={() => setView('landing')} />
          ) : view === 'blog-scalable-apps' ? (
            <BlogPostScalableAppsPage onBack={() => setView('insights')} onHome={() => setView('landing')} />
          ) : view === 'blog-blockchain' ? (
            <BlogPostBlockchainPage onBack={() => setView('insights')} onHome={() => setView('landing')} />
          ) : view === 'blog-fintech-revolution' ? (
            <BlogPostFintechRevolutionPage onBack={() => setView('insights')} onHome={() => setView('landing')} />
          ) : (
            <ExplorePage onBack={() => setView('landing')} />
          )}
        </main>

        <Footer onHome={() => {
          setView('landing');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />

    </div>
  );
}
