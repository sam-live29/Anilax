import React, { useState } from 'react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Twitter, 
  Wifi 
} from 'lucide-react';

interface FooterProps {
  onHome?: () => void;
}

export default function Footer({ onHome }: FooterProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onHome) {
      onHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const linkClass = "text-slate-400 hover:text-white active:text-primary active:font-bold transition-colors";
  const socialClass = "text-slate-400 hover:text-white active:text-primary active:scale-110 transition-all hover:scale-110";

  return (
    <footer className="bg-[#0a0f1a] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-white font-bold mb-8 text-lg">Product</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" onClick={handleClick} className={linkClass}>Unified Payments & Payout Gateway</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>Bharat BillPay Integration Suite</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>Verification Engine</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>Digital Wallet & Reseller System</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>FASTag Recharge & Vehicle Bill System</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>Fraud Detection + Risk Management AI Tool</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>Dynamic & Static QR Management</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-8 text-lg">Solutions</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" onClick={handleClick} className={linkClass}>NEO-Banking</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>Education</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>E-commerce</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>Health Care</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>Travel & Hospitality</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>Cooperate</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>Reselling</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-8 text-lg">Fintech</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" onClick={handleClick} className={linkClass}>AePS Software</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>Recharge Software</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>BBPS Software</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>Travel Software</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>DMT Software</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>Bus Booking Software</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>Hotel Software</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-8 text-lg">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" onClick={handleClick} className={linkClass}>B2B Silver Package</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>B2B Bold Package</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>Reseller Silver Package</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>Reseller Gold Package</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>B2B Software</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>B2C Software</a></li>
              <li><a href="#" onClick={handleClick} className={linkClass}>B2B2C Software Combo</a></li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-white font-bold mb-8 text-lg">Company</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" onClick={handleClick} className={linkClass}>About Us</a></li>
            <li><a href="#" onClick={handleClick} className={linkClass}>Careers</a></li>
            <li><a href="#" onClick={handleClick} className={linkClass}>Contact</a></li>
            <li><a href="#" onClick={handleClick} className={linkClass}>Partner portal</a></li>
            <li><a href="#" onClick={handleClick} className={linkClass}>Press</a></li>
            <li><a href="#" onClick={handleClick} className={linkClass}>Security</a></li>
          </ul>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex gap-6">
            <a href="#" onClick={handleClick} className={socialClass} aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" onClick={handleClick} className={socialClass} aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" onClick={handleClick} className={socialClass} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" onClick={handleClick} className={socialClass} aria-label="YouTube">
              <Youtube size={20} />
            </a>
            <a href="#" onClick={handleClick} className={socialClass} aria-label="X (Twitter)">
              <Twitter size={20} />
            </a>
            <a href="#" onClick={handleClick} className={socialClass} aria-label="RSS/WiFi">
              <Wifi size={20} />
            </a>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs">
            <a href="#" onClick={handleClick} className={linkClass}>Privacy and Security</a>
            <a href="#" onClick={handleClick} className={linkClass}>Terms of Use</a>
            <a href="#" onClick={handleClick} className={linkClass}>Legal Terms</a>
            <span className="text-slate-500">Developed And drive With © Anilax Software</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
