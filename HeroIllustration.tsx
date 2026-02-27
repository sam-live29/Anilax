import React from 'react';

export default function HeroIllustration() {
  return (
    <div className="mx-auto w-full max-w-[400px] md:max-w-[520px] lg:max-w-[600px] bg-[#f0f4f8] rounded-[24px] p-6 md:p-12 pb-8 md:pb-10 shadow-[0_8px_40px_rgba(0,0,0,0.10)] flex flex-col items-center gap-8">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes coinFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .coin1 { animation: coinFloat 2.6s ease-in-out infinite; }
        .coin2 { animation: coinFloat 2.0s ease-in-out infinite 0.4s; }
        .coin3 { animation: coinFloat 2.3s ease-in-out infinite 0.8s; }

        @keyframes checkPop {
          0%   { transform: scale(0.8); opacity: 0.5; }
          60%  { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .check-circle { animation: checkPop 0.7s ease-out forwards; }

        @keyframes planeFly {
          0%   { transform: translate(0,0) rotate(0deg); }
          50%  { transform: translate(10px,-10px) rotate(5deg); }
          100% { transform: translate(0,0) rotate(0deg); }
        }
        .plane { animation: planeFly 2.5s ease-in-out infinite; }
      `}} />

      {/* Illustration SVG */}
      <div className="w-full flex justify-center">
        <svg className="w-full max-w-[520px] h-auto overflow-visible" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Red Credit Card (bottom) */}
          <g transform="translate(60,90)">
            <rect x="0" y="0" width="200" height="120" rx="14" fill="#E8610C" opacity="0.15"/>
            <path d="M10 10 L210 10 L210 100 L10 100 Z" rx="10" fill="#FFFFFF" stroke="#e0e0e0" strokeWidth="1"/>
            <rect x="10" y="10" width="200" height="100" rx="10" fill="white"/>
            <rect x="10" y="35" width="200" height="22" fill="#E8610C"/>
            <rect x="22" y="62" width="30" height="24" rx="4" fill="#BDBDBD"/>
            <rect x="24" y="64" width="26" height="20" rx="3" fill="#D4A833" opacity="0.7"/>
            <line x1="29" y1="70" x2="29" y2="78" stroke="#a08020" strokeWidth="1.2"/>
            <line x1="35" y1="70" x2="35" y2="78" stroke="#a08020" strokeWidth="1.2"/>
            <line x1="41" y1="70" x2="41" y2="78" stroke="#a08020" strokeWidth="1.2"/>
            <line x1="22" y1="74" x2="52" y2="74" stroke="#a08020" strokeWidth="1"/>
          </g>

          {/* POS Terminal (center-left) */}
          <g transform="translate(18, 40)">
            <rect x="0" y="20" width="95" height="140" rx="12" fill="white" stroke="#d0d0d0" strokeWidth="1.5"/>
            <rect x="0" y="140" width="95" height="20" rx="4" fill="#e0e0e0"/>
            <path d="M20 160 L75 160 L78 200 L17 200 Z" fill="white" stroke="#d0d0d0" strokeWidth="1"/>
            <line x1="25" y1="170" x2="70" y2="170" stroke="#e0e0e0" strokeWidth="1.5"/>
            <line x1="25" y1="178" x2="60" y2="178" stroke="#e0e0e0" strokeWidth="1.5"/>
            <line x1="25" y1="186" x2="65" y2="186" stroke="#e0e0e0" strokeWidth="1.5"/>
            <rect x="10" y="28" width="75" height="55" rx="6" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1"/>
            <circle cx="30" cy="105" r="5" fill="#ccc"/>
            <circle cx="47" cy="105" r="5" fill="#ccc"/>
            <circle cx="64" cy="105" r="5" fill="#ccc"/>
            <circle cx="30" cy="120" r="5" fill="#ccc"/>
            <circle cx="47" cy="120" r="5" fill="#ccc"/>
            <circle cx="64" cy="120" r="5" fill="#ccc"/>
            <circle cx="47" cy="55" r="20" fill="white" stroke="#2980D8" strokeWidth="2"/>
            <text x="47" y="50" textAnchor="middle" fontSize="13" fontWeight="900" fill="#2980D8" fontFamily="Arial">R2</text>
            <text x="47" y="63" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#E8610C" fontFamily="Arial" letterSpacing="1">ASSURED</text>
          </g>

          {/* White/Salmon card (top, tilted) */}
          <g transform="translate(110, 30) rotate(-8)">
            <rect x="0" y="0" width="185" height="108" rx="12" fill="white" stroke="#ddd" strokeWidth="1.5" filter="url(#shadow)"/>
            <rect x="0" y="0" width="185" height="28" rx="12" fill="#FADADC"/>
            <rect x="0" y="14" width="185" height="14" fill="#FADADC"/>
            <rect x="0" y="32" width="185" height="18" fill="#E8610C"/>
            <circle className="check-circle" cx="132" cy="70" r="22" fill="#FADADC" stroke="#E8610C" strokeWidth="2"/>
            <path d="M121 70 L129 78 L143 62" stroke="#E8610C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </g>

          {/* Rupee speech bubble */}
          <g transform="translate(238, 18)">
            <rect x="0" y="0" width="38" height="30" rx="6" fill="white" stroke="#ddd" strokeWidth="1.5"/>
            <polygon points="10,30 18,42 26,30" fill="white" stroke="#ddd" strokeWidth="1.5" strokeLinejoin="round"/>
            <text x="19" y="20" textAnchor="middle" fontSize="16" fill="#555" fontFamily="Arial">₹</text>
          </g>

          {/* Paper plane */}
          <g className="plane" transform="translate(232, 110)">
            <polygon points="0,0 36,18 0,36 10,18" fill="white" stroke="#E8610C" strokeWidth="1.5" strokeLinejoin="round"/>
            <line x1="0" y1="36" x2="10" y2="18" stroke="#E8610C" strokeWidth="1"/>
          </g>

          {/* Coins */}
          <g className="coin1" transform="translate(30, 160)">
            <ellipse cx="22" cy="10" rx="22" ry="10" fill="#e0e0e0"/>
            <ellipse cx="22" cy="4" rx="22" ry="10" fill="#f5f5f5" stroke="#d0d0d0" strokeWidth="1"/>
            <text x="22" y="8" textAnchor="middle" fontSize="11" fill="#888" fontFamily="Arial">₹</text>
          </g>

          <g className="coin2" transform="translate(130, 175)">
            <ellipse cx="18" cy="8" rx="18" ry="8" fill="#c0392b" opacity="0.15"/>
            <ellipse cx="18" cy="4" rx="18" ry="8" fill="#e74c3c" opacity="0.85" stroke="#c0392b" strokeWidth="1"/>
            <text x="18" y="8" textAnchor="middle" fontSize="9" fill="white" fontFamily="Arial" fontWeight="bold">1</text>
          </g>

          <g className="coin3" transform="translate(228, 152)">
            <ellipse cx="22" cy="10" rx="22" ry="10" fill="#e0e0e0"/>
            <ellipse cx="22" cy="4" rx="22" ry="10" fill="#f5f5f5" stroke="#d0d0d0" strokeWidth="1"/>
            <text x="22" y="8" textAnchor="middle" fontSize="11" fill="#888" fontFamily="Arial">₹</text>
          </g>

          <defs>
            <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#00000018"/>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Logos */}
      <div className="flex items-center justify-center gap-0 w-full border-t border-[#d6dce6] pt-6">
        {/* Bharat BillPay */}
        <div className="flex items-center gap-2 px-5">
          <svg className="w-[30px] h-[30px]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#E8610C"/>
            <text x="10" y="27" fontSize="20" fontWeight="900" fill="white" fontFamily="Arial">B</text>
          </svg>
          <div className="text-[11px] font-[800] leading-[1.2] text-[#222] tracking-[0.5px] uppercase">
            BHARAT<br/><span className="text-[#e8610c]">BILLPAY</span>
          </div>
        </div>

        {/* BHIM */}
        <div className="flex items-center gap-2 px-5 border-l border-[#d6dce6]">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1.5">
              <span className="text-[22px] font-[900] italic tracking-[-1px] text-[#222] leading-[1]">BHIM</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 215" width="28" height="28">
                <polygon points="32,16  138,106  88,106  32,196" fill="#F47920"/>
                <polygon points="90,12  190,106  140,106  90,200" fill="#1E6B30"/>
              </svg>
            </div>
            <div className="text-[7px] tracking-[1.2px] text-[#555] uppercase mt-[2px]">Bharat Interface For Money</div>
          </div>
        </div>

        {/* UPI */}
        <div className="flex items-center gap-2 px-5 border-l border-[#d6dce6]">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1.5">
              <span className="text-[22px] font-[900] italic tracking-[-1px] text-[#222] leading-[1]">UPI</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 215" width="28" height="28">
                <polygon points="32,16  138,106  88,106  32,196" fill="#F47920"/>
                <polygon points="90,12  190,106  140,106  90,200" fill="#1E6B30"/>
              </svg>
            </div>
            <div className="text-[6.5px] tracking-[1px] text-[#555] uppercase mt-[2px]">Unified Payments Interface</div>
          </div>
        </div>
      </div>
    </div>
  );
}
