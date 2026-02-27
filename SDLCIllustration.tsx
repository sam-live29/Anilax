import React from 'react';

export default function SDLCIllustration() {
  return (
    <div className="w-full max-w-[1100px] mx-auto bg-white p-4 md:p-8 rounded-3xl shadow-sm border border-slate-100">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes dashMove {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -20; }
        }
        @keyframes iconPop {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.05); }
        }
        @keyframes arrowPulse {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.5; }
        }

        .dashed-arrow { animation: dashMove 1.5s linear infinite; }
        .icon-box-anim { animation: iconPop 3s ease-in-out infinite; }
        .arrow-head-anim { animation: arrowPulse 1.5s ease-in-out infinite; }
      `}} />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 580" className="w-full h-auto">
        <defs>
          <filter id="boxShadowSDLC">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#00000012"/>
          </filter>
        </defs>

        {/* ══════════════════════════════════════════════════ */}
        {/* STEP LABELS (top)                                  */}
        {/* ══════════════════════════════════════════════════ */}
        <text x="90"  y="62" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11.5" fill="#333" letterSpacing="0.5">REQUIREMENTS</text>
        <text x="90"  y="77" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11.5" fill="#333" letterSpacing="0.5">ANALYSIS &amp;</text>
        <text x="90"  y="92" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11.5" fill="#333" letterSpacing="0.5">RESOURCE</text>
        <text x="90"  y="107" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11.5" fill="#333" letterSpacing="0.5">PLANNING</text>

        <text x="310" y="77" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11.5" fill="#333" letterSpacing="0.5">DESIGN &amp;</text>
        <text x="310" y="92" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11.5" fill="#333" letterSpacing="0.5">PROTOTYPING</text>

        <text x="550" y="77" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11.5" fill="#333" letterSpacing="0.5">SOFTWARE</text>
        <text x="550" y="92" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11.5" fill="#333" letterSpacing="0.5">DEVELOPMENT</text>

        <text x="780" y="84" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11.5" fill="#333" letterSpacing="0.5">TESTING</text>

        <text x="1008" y="84" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11.5" fill="#333" letterSpacing="0.5">DEPLOYMENT</text>

        {/* ══════════════════════════════════════════════════ */}
        {/* ICON BOXES ROW 1                                   */}
        {/* ══════════════════════════════════════════════════ */}

        {/* 1. Requirements (beige) */}
        <g className="icon-box-anim" filter="url(#boxShadowSDLC)">
          <rect x="36" y="118" width="108" height="108" rx="22" fill="#F5E6C8"/>
          <rect x="62" y="135" width="56" height="68" rx="6" fill="none" stroke="#111" strokeWidth="4"/>
          <rect x="72" y="128" width="36" height="14" rx="4" fill="#111"/>
          <line x1="72" y1="158" x2="108" y2="158" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
          <line x1="72" y1="170" x2="108" y2="170" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
          <line x1="72" y1="182" x2="100" y2="182" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
          <line x1="72" y1="194" x2="96" y2="194" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
        </g>

        {/* 2. Design & Prototyping (pink) */}
        <g className="icon-box-anim" filter="url(#boxShadowSDLC)" style={{ animationDelay: '0.4s' }}>
          <rect x="256" y="118" width="108" height="108" rx="22" fill="#FECDD3"/>
          <rect x="272" y="138" width="52" height="38" rx="5" fill="#111"/>
          <rect x="275" y="141" width="46" height="30" rx="3" fill="#FECDD3"/>
          <rect x="285" y="176" width="22" height="5" rx="2" fill="#111"/>
          <rect x="306" y="163" width="26" height="40" rx="5" fill="#111"/>
          <rect x="309" y="168" width="20" height="28" rx="2" fill="#FECDD3"/>
          <circle cx="319" cy="200" r="2.5" fill="#FECDD3"/>
        </g>

        {/* 3. Software Development (light blue) */}
        <g className="icon-box-anim" filter="url(#boxShadowSDLC)" style={{ animationDelay: '0.8s' }}>
          <rect x="496" y="118" width="108" height="108" rx="22" fill="#BAE6FD"/>
          <rect x="514" y="138" width="72" height="56" rx="7" fill="none" stroke="#111" strokeWidth="4"/>
          <line x1="514" y1="154" x2="586" y2="154" stroke="#111" strokeWidth="3.5"/>
          <circle cx="525" cy="147" r="3" fill="#111"/>
          <circle cx="536" cy="147" r="3" fill="#111"/>
          <path d="M534,165 L526,172 L534,179" stroke="#111" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M566,165 L574,172 L566,179" stroke="#111" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="553" y1="163" x2="547" y2="181" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
        </g>

        {/* 4. Testing (teal/cyan) */}
        <g className="icon-box-anim" filter="url(#boxShadowSDLC)" style={{ animationDelay: '1.2s' }}>
          <rect x="726" y="118" width="108" height="108" rx="22" fill="#A7F3D0"/>
          <circle cx="780" cy="172" r="34" fill="#111"/>
          <line x1="762" y1="164" x2="798" y2="164" stroke="#A7F3D0" strokeWidth="4" strokeLinecap="round"/>
          <line x1="762" y1="175" x2="798" y2="175" stroke="#A7F3D0" strokeWidth="4" strokeLinecap="round"/>
          <line x1="762" y1="186" x2="790" y2="186" stroke="#A7F3D0" strokeWidth="4" strokeLinecap="round"/>
        </g>

        {/* 5. Deployment (purple) */}
        <g className="icon-box-anim" filter="url(#boxShadowSDLC)" style={{ animationDelay: '1.6s' }}>
          <rect x="956" y="118" width="108" height="108" rx="22" fill="#DDD6FE"/>
          <path d="M996,190 Q988,190 986,182 Q982,175 990,170 Q990,155 1010,153 Q1024,150 1030,163 Q1040,162 1040,172 Q1044,182 1036,186 Q1030,190 1020,190 Z" fill="none" stroke="#111" strokeWidth="4"/>
          <path d="M1001,176 L996,182 L1001,188" stroke="#111" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1019,176 L1024,182 L1019,188" stroke="#111" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="1012" y1="174" x2="1008" y2="190" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
        </g>

        {/* ══════════════════════════════════════════════════ */}
        {/* DASHED ARROWS BETWEEN TOP BOXES                    */}
        {/* ══════════════════════════════════════════════════ */}
        <line className="dashed-arrow" x1="148" y1="172" x2="248" y2="172" stroke="#999" strokeWidth="2" strokeDasharray="6,4"/>
        <polygon className="arrow-head-anim" points="248,167 262,172 248,177" fill="#888"/>

        <line className="dashed-arrow" x1="368" y1="172" x2="488" y2="172" stroke="#999" strokeWidth="2" strokeDasharray="6,4"/>
        <polygon className="arrow-head-anim" points="488,167 502,172 488,177" fill="#888"/>

        <line className="dashed-arrow" x1="608" y1="172" x2="718" y2="172" stroke="#999" strokeWidth="2" strokeDasharray="6,4"/>
        <polygon className="arrow-head-anim" points="718,167 732,172 718,177" fill="#888"/>

        <line className="dashed-arrow" x1="838" y1="172" x2="948" y2="172" stroke="#999" strokeWidth="2" strokeDasharray="6,4"/>
        <polygon className="arrow-head-anim" points="948,167 962,172 948,177" fill="#888"/>

        {/* ══════════════════════════════════════════════════ */}
        {/* LARGE CENTER TEXT                                  */}
        {/* ══════════════════════════════════════════════════ */}
        <text x="546" y="340" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="32" fontWeight="bold" fill="#111" letterSpacing="-0.5">Large Scale Web Applications/Software</text>

        {/* ══════════════════════════════════════════════════ */}
        {/* MAINTENANCE BOX (bottom center)                    */}
        {/* ══════════════════════════════════════════════════ */}
        <g className="icon-box-anim" filter="url(#boxShadowSDLC)">
          <rect x="492" y="416" width="108" height="108" rx="22" fill="#D1FAE5"/>
          <g transform="translate(546,470)">
            <circle r="14" fill="none" stroke="#111" strokeWidth="4.5"/>
            <circle r="5" fill="#111"/>
            <g fill="#111">
              <rect x="-5" y="-28" width="10" height="11" rx="2.5"/>
              <rect x="-5" y="-28" width="10" height="11" rx="2.5" transform="rotate(45)"/>
              <rect x="-5" y="-28" width="10" height="11" rx="2.5" transform="rotate(90)"/>
              <rect x="-5" y="-28" width="10" height="11" rx="2.5" transform="rotate(135)"/>
              <rect x="-5" y="-28" width="10" height="11" rx="2.5" transform="rotate(180)"/>
              <rect x="-5" y="-28" width="10" height="11" rx="2.5" transform="rotate(225)"/>
              <rect x="-5" y="-28" width="10" height="11" rx="2.5" transform="rotate(270)"/>
              <rect x="-5" y="-28" width="10" height="11" rx="2.5" transform="rotate(315)"/>
            </g>
          </g>
        </g>

        <text x="546" y="544" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11.5" fill="#333" letterSpacing="0.5">MAINTENANCE</text>
        <text x="546" y="560" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11.5" fill="#333" letterSpacing="0.5">&amp; UPDATES</text>

        {/* ══════════════════════════════════════════════════ */}
        {/* OUTER DASHED LOOP (box connecting flow back)       */}
        {/* ══════════════════════════════════════════════════ */}
        <line className="dashed-arrow" x1="90"  y1="226" x2="90"  y2="460" stroke="#999" strokeWidth="2" strokeDasharray="6,4"/>
        <line className="dashed-arrow" x1="90"  y1="460" x2="486" y2="460" stroke="#999" strokeWidth="2" strokeDasharray="6,4"/>
        <polygon className="arrow-head-anim" points="486,455 500,460 486,465" fill="#888"/>

        <line className="dashed-arrow" x1="1010" y1="226" x2="1010" y2="460" stroke="#999" strokeWidth="2" strokeDasharray="6,4"/>
        <line className="dashed-arrow" x1="606" y1="460" x2="1010" y2="460" stroke="#999" strokeWidth="2" strokeDasharray="6,4"/>
        <polygon className="arrow-head-anim" points="612,455 598,460 612,465" fill="#888"/>
      </svg>
    </div>
  );
}
