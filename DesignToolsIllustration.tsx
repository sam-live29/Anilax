import React from 'react';

export default function DesignToolsIllustration() {
  return (
    <div className="w-full max-w-[1100px] mx-auto">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatDesign {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes floatRDesign {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes pulseDesign {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.04); }
        }
        @keyframes screenGlowDesign {
          0%,100% { opacity:1; }
          50%      { opacity:0.85; }
        }
        @keyframes barGrowDesign {
          0%   { transform: scaleY(0.7); }
          50%  { transform: scaleY(1); }
          100% { transform: scaleY(0.7); }
        }
        .logo-box-anim { animation: floatDesign 3.5s ease-in-out infinite; }
        .logo-box-anim:nth-of-type(2n) { animation: floatRDesign 4s ease-in-out infinite 0.5s; }
        .logo-box-anim:nth-of-type(3n) { animation: floatDesign 3.8s ease-in-out infinite 1s; }
        
        .person-top-anim { animation: floatDesign 4s ease-in-out infinite; }
        .person-side-anim { animation: floatDesign 4.5s ease-in-out infinite 0.7s; }
        .screen-main-anim { animation: screenGlowDesign 3s ease-in-out infinite; }
        .bar1-anim { transform-origin: 0 100%; animation: barGrowDesign 2s ease-in-out infinite; }
        .bar2-anim { transform-origin: 0 100%; animation: barGrowDesign 2s ease-in-out infinite 0.4s; }
        .bar3-anim { transform-origin: 0 100%; animation: barGrowDesign 2s ease-in-out infinite 0.8s; }
      `}} />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 720" className="w-full h-auto">
        <defs>
          <filter id="softShadowDesign">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000018"/>
          </filter>
          <filter id="cardShadowDesign">
            <feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="#00000015"/>
          </filter>
          <linearGradient id="sketchGem" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#FBBF24"/>
            <stop offset="100%" stopColor="#F59E0B"/>
          </linearGradient>
          <linearGradient id="sketchGemTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#FDE68A"/>
            <stop offset="100%" stopColor="#FCD34D"/>
          </linearGradient>
          <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#00C4CC"/>
            <stop offset="100%" stopColor="#7B2D8B"/>
          </linearGradient>
          <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#FF7A30"/>
            <stop offset="100%" stopColor="#FF5500"/>
          </linearGradient>
        </defs>

        {/* ══════════════════════════════════ */}
        {/* LOGO BOXES                         */}
        {/* ══════════════════════════════════ */}

        {/* 1. Figma */}
        <g className="logo-box-anim" filter="url(#cardShadowDesign)">
          <rect x="280" y="70" width="148" height="148" rx="22" fill="white" stroke="#e5e5e5" strokeWidth="1.5"/>
          <g transform="translate(354,98)">
            <path d="M18,0 Q0,0 0,18 Q0,36 18,36 L36,36 L36,0 Z" fill="#F24E1E"/>
            <path d="M36,0 L36,36 Q54,36 54,18 Q54,0 36,0 Z" fill="#FF7262"/>
            <path d="M0,36 L0,72 Q0,90 18,90 Q36,90 36,72 Q36,54 18,54 L18,36 Z" fill="#A259FF"/>
            <circle cx="45" cy="54" r="18" fill="#1ABCFE"/>
            <path d="M0,72 L0,90 Q0,108 18,108 Q36,108 36,90 L36,72 Z" fill="#0ACF83"/>
          </g>
        </g>

        {/* 2. Sketch */}
        <g className="logo-box-anim" filter="url(#cardShadowDesign)">
          <rect x="666" y="70" width="148" height="148" rx="22" fill="white" stroke="#e5e5e5" strokeWidth="1.5"/>
          <g transform="translate(740,144)">
            <polygon points="-38,-18 0,-54 38,-18" fill="url(#sketchGemTop)"/>
            <polygon points="-54,0 -38,-18 0,50" fill="#FBBF24" opacity="0.85"/>
            <polygon points="54,0 38,-18 0,50" fill="#F59E0B" opacity="0.85"/>
            <polygon points="-54,0 54,0 0,50" fill="url(#sketchGem)"/>
            <polygon points="-54,0 -38,-18 0,-18" fill="#FDE68A"/>
            <polygon points="54,0 38,-18 0,-18" fill="#FDE68A"/>
            <polygon points="-38,-18 38,-18 0,-54" fill="#FCD34D"/>
          </g>
        </g>

        {/* 3. Adobe XD */}
        <g className="logo-box-anim" filter="url(#cardShadowDesign)">
          <rect x="90" y="280" width="148" height="148" rx="22" fill="white" stroke="#e5e5e5" strokeWidth="1.5"/>
          <text x="130" y="382" fontFamily="'Times New Roman', serif" fontSize="68" fontWeight="900" fill="#FF26BE" fontStyle="italic">Xd</text>
        </g>

        {/* 4. Canva */}
        <g className="logo-box-anim" filter="url(#cardShadowDesign)">
          <rect x="858" y="280" width="200" height="148" rx="22" fill="white" stroke="#e5e5e5" strokeWidth="1.5"/>
          <text x="958" y="372" textAnchor="middle" fontFamily="'Georgia', serif" fontSize="46" fontWeight="700" fill="url(#canvaGrad)" fontStyle="italic">Canva</text>
        </g>

        {/* 5. InVision */}
        <g className="logo-box-anim" filter="url(#cardShadowDesign)">
          <rect x="220" y="510" width="148" height="148" rx="22" fill="white" stroke="#e5e5e5" strokeWidth="1.5"/>
          <text x="294" y="614" textAnchor="middle" fontFamily="Georgia, serif" fontSize="72" fontWeight="900" fill="#FF3366" fontStyle="italic">in</text>
        </g>

        {/* 6. Framer */}
        <g className="logo-box-anim" filter="url(#cardShadowDesign)">
          <rect x="730" y="510" width="148" height="148" rx="22" fill="white" stroke="#e5e5e5" strokeWidth="1.5"/>
          <g transform="translate(804,584)">
            <polygon points="-34,-48 34,-48 34,10" fill="#111"/>
            <polygon points="-34,10 34,10 34,68" fill="#555"/>
            <polygon points="-34,10 0,68 34,10" fill="#888"/>
          </g>
        </g>

        {/* ══════════════════════════════════ */}
        {/* CENTRAL ILLUSTRATION               */}
        {/* ══════════════════════════════════ */}

        <g filter="url(#softShadowDesign)">
          <rect x="430" y="210" width="360" height="260" rx="16" fill="#FF5500"/>
          <rect x="430" y="210" width="360" height="32" rx="16" fill="#FF6A1A"/>
          <rect x="430" y="226" width="360" height="16" fill="#FF6A1A"/>
          <circle cx="458" cy="226" r="6" fill="#FF8C00" opacity="0.7"/>
          <circle cx="476" cy="226" r="6" fill="#FF8C00" opacity="0.7"/>
          <circle cx="494" cy="226" r="6" fill="#FF8C00" opacity="0.7"/>

          <rect x="440" y="248" width="340" height="210" rx="8" fill="white" opacity="0.12"/>

          <rect x="448" y="255" width="95" height="130" rx="8" fill="#FF8C00" opacity="0.85"/>
          <rect x="458" y="268" width="70" height="6" rx="3" fill="white" opacity="0.7"/>
          <rect x="458" y="280" width="55" height="5" rx="2.5" fill="white" opacity="0.5"/>
          <rect x="458" y="292" width="65" height="5" rx="2.5" fill="white" opacity="0.5"/>
          <rect x="458" y="304" width="50" height="5" rx="2.5" fill="white" opacity="0.5"/>
          <path d="M448,350 Q480,335 510,350 Q525,358 543,352 L543,385 L448,385 Z" fill="#FF7A00" opacity="0.6"/>

          <rect x="560" y="258" width="100" height="8" rx="4" fill="white" opacity="0.7"/>
          <rect x="560" y="272" width="75" height="6" rx="3" fill="white" opacity="0.5"/>
          <rect x="560" y="284" width="90" height="6" rx="3" fill="white" opacity="0.5"/>
          <rect x="560" y="310" width="140" height="6" rx="3" fill="white" opacity="0.4"/>
          <rect x="560" y="322" width="110" height="6" rx="3" fill="white" opacity="0.4"/>
          <rect x="560" y="334" width="130" height="6" rx="3" fill="white" opacity="0.4"/>
          <rect x="560" y="346" width="80" height="6" rx="3" fill="white" opacity="0.4"/>
        </g>

        <g transform="translate(410,230)">
          <rect x="0" y="20" width="75" height="95" rx="6" fill="#FF5500"/>
          <rect x="8" y="34" width="58" height="5" rx="2.5" fill="white" opacity="0.8"/>
          <rect x="8" y="44" width="50" height="5" rx="2.5" fill="white" opacity="0.6"/>
          <rect x="8" y="54" width="55" height="5" rx="2.5" fill="white" opacity="0.6"/>
          <rect x="8" y="64" width="45" height="5" rx="2.5" fill="white" opacity="0.6"/>
          <rect x="8" y="74" width="52" height="5" rx="2.5" fill="white" opacity="0.6"/>
          <rect x="8" y="84" width="40" height="5" rx="2.5" fill="white" opacity="0.6"/>
          <rect x="8" y="94" width="58" height="5" rx="2.5" fill="white" opacity="0.6"/>
        </g>

        <g filter="url(#softShadowDesign)">
          <rect x="420" y="370" width="210" height="145" rx="12" fill="white" stroke="#eee" strokeWidth="1.5"/>
          <rect x="420" y="370" width="210" height="24" rx="12" fill="#f5f5f5"/>
          <rect x="420" y="382" width="210" height="12" fill="#f5f5f5"/>
          <circle cx="433" cy="382" r="4" fill="#ff5f57"/>
          <circle cx="444" cy="382" r="4" fill="#febc2e"/>
          <circle cx="455" cy="382" r="4" fill="#28c840"/>
          <circle cx="560" cy="382" r="6" fill="#FF5500"/>

          <g className="bar1-anim"><rect x="435" y="440" width="18" height="38" rx="3" fill="#FF5500"/></g>
          <g className="bar2-anim"><rect x="460" y="430" width="18" height="48" rx="3" fill="#FF5500" opacity="0.7"/></g>
          <g className="bar3-anim"><rect x="485" y="445" width="18" height="33" rx="3" fill="#FF5500" opacity="0.85"/></g>

          <circle cx="534" cy="410" r="5" fill="#FF5500"/>
          <rect x="544" y="407" width="70" height="6" rx="3" fill="#ddd"/>
          <circle cx="534" cy="425" r="5" fill="#FF5500" opacity="0.6"/>
          <rect x="544" y="422" width="55" height="6" rx="3" fill="#ddd"/>
          <circle cx="534" cy="440" r="5" fill="#FF5500" opacity="0.4"/>
          <rect x="544" y="437" width="62" height="6" rx="3" fill="#ddd"/>

          <rect x="430" y="458" width="190" height="7" rx="3.5" fill="#FF5500" opacity="0.8"/>
          <rect x="430" y="470" width="160" height="7" rx="3.5" fill="#FF5500" opacity="0.6"/>
          <rect x="430" y="482" width="175" height="7" rx="3.5" fill="#FF5500" opacity="0.4"/>
          <rect x="430" y="494" width="145" height="7" rx="3.5" fill="#FF5500" opacity="0.3"/>
        </g>

        <g filter="url(#softShadowDesign)">
          <rect x="636" y="350" width="210" height="150" rx="12" fill="white" stroke="#ddd" strokeWidth="1.5"/>
          <rect x="636" y="350" width="210" height="22" rx="12" fill="#f5f5f5"/>
          <rect x="636" y="362" width="210" height="10" fill="#f5f5f5"/>
          <rect x="646" y="358" width="80" height="6" rx="3" fill="#FF5500"/>
          <rect x="646" y="378" width="190" height="100" rx="6" fill="#111"/>
          <circle cx="741" cy="428" r="22" fill="white" opacity="0.15"/>
          <polygon points="730,416 758,428 730,440" fill="white"/>
        </g>

        <g transform="translate(590,460)">
          <rect x="0" y="0" width="55" height="42" rx="6" fill="#FF5500"/>
          <path d="M0,0 L27,22 L55,0" fill="none" stroke="white" strokeWidth="2.5" opacity="0.7"/>
        </g>

        {/* ══════════════════════════════════ */}
        {/* PEOPLE                             */}
        {/* ══════════════════════════════════ */}

        <g className="person-top-anim" transform="translate(575,125)">
          <path d="M12,78 Q8,95 5,108" stroke="#FF5500" strokeWidth="9" fill="none" strokeLinecap="round"/>
          <path d="M24,78 Q28,95 32,108" stroke="#FF5500" strokeWidth="9" fill="none" strokeLinecap="round"/>
          <ellipse cx="3" cy="112" rx="9" ry="4" fill="#111"/>
          <ellipse cx="34" cy="112" rx="9" ry="4" fill="#111"/>
          <rect x="4" y="42" width="30" height="40" rx="8" fill="#FF5500"/>
          <rect x="-4" y="68" width="44" height="28" rx="4" fill="#e0e0e0"/>
          <rect x="-1" y="70" width="38" height="20" rx="2" fill="#c8e6ff"/>
          <path d="M4,55 Q-5,65 -2,75" stroke="#FF5500" strokeWidth="8" fill="none" strokeLinecap="round"/>
          <path d="M34,55 Q43,65 40,75" stroke="#FF5500" strokeWidth="8" fill="none" strokeLinecap="round"/>
          <circle cx="19" cy="30" r="18" fill="#F5C5A3"/>
          <path d="M3,26 Q10,8 19,10 Q28,8 35,26 Q30,18 19,18 Q8,18 3,26 Z" fill="#1a1008"/>
          <circle cx="13" cy="28" r="2.5" fill="#2a1808"/>
          <circle cx="25" cy="28" r="2.5" fill="#2a1808"/>
          <path d="M13,36 Q19,41 25,36" stroke="#c88" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <rect x="13" y="44" width="12" height="8" rx="3" fill="#F0B896"/>
        </g>

        <g className="person-top-anim" transform="translate(700,132)">
          <path d="M10,50 Q25,42 40,50 L40,78 L10,78 Z" fill="#FF5500"/>
          <rect x="30" y="55" width="75" height="50" rx="5" fill="#e0e0e0"/>
          <rect x="33" y="58" width="69" height="40" rx="3" fill="#d0d8ff"/>
          <path d="M40,60 Q60,52 78,58" stroke="#FF5500" strokeWidth="8" fill="none" strokeLinecap="round"/>
          <path d="M10,60 Q0,72 2,80" stroke="#FF5500" strokeWidth="8" fill="none" strokeLinecap="round"/>
          <circle cx="15" cy="38" r="16" fill="#F5C5A3"/>
          <path d="M0,35 Q4,16 15,16 Q26,16 30,32" fill="#1a1008"/>
          <path d="M0,35 Q-2,50 4,55" fill="#1a1008"/>
          <circle cx="10" cy="36" r="2" fill="#2a1808"/>
          <circle cx="20" cy="36" r="2" fill="#2a1808"/>
          <path d="M10,78 L8,100" stroke="#222" strokeWidth="8" fill="none" strokeLinecap="round"/>
          <path d="M35,78 L33,100" stroke="#222" strokeWidth="8" fill="none" strokeLinecap="round"/>
          <rect x="9" y="50" width="10" height="8" rx="3" fill="#F0B896"/>
        </g>

        <g className="person-side-anim" transform="translate(460,400)">
          <path d="M18,50 Q6,34 2,20" stroke="#FF5500" strokeWidth="9" fill="none" strokeLinecap="round"/>
          <rect x="8" y="48" width="26" height="55" rx="8" fill="#FF5500"/>
          <path d="M34,55 Q44,65 42,78" stroke="#FF5500" strokeWidth="9" fill="none" strokeLinecap="round"/>
          <path d="M12,100 L10,135" stroke="#222" strokeWidth="10" fill="none" strokeLinecap="round"/>
          <path d="M28,100 L30,135" stroke="#222" strokeWidth="10" fill="none" strokeLinecap="round"/>
          <ellipse cx="9" cy="138" rx="10" ry="4" fill="#111"/>
          <ellipse cx="31" cy="138" rx="10" ry="4" fill="#111"/>
          <circle cx="21" cy="36" r="17" fill="#F5C5A3"/>
          <path d="M5,32 Q8,16 21,16 Q34,16 37,32 Q32,24 21,24 Q10,24 5,32 Z" fill="#1a1008"/>
          <circle cx="15" cy="35" r="2.5" fill="#2a1808"/>
          <circle cx="27" cy="35" r="2.5" fill="#2a1808"/>
          <rect x="15" y="50" width="12" height="8" rx="3" fill="#F0B896"/>
        </g>

        <g className="person-side-anim" transform="translate(778,390)">
          <path d="M8,52 Q-4,62 -6,70" stroke="#FF5500" strokeWidth="9" fill="none" strokeLinecap="round"/>
          <rect x="6" y="48" width="26" height="58" rx="8" fill="#FF5500"/>
          <path d="M32,52 Q44,42 46,30" stroke="#FF5500" strokeWidth="9" fill="none" strokeLinecap="round"/>
          <circle cx="19" cy="34" r="17" fill="#F5C5A3"/>
          <ellipse cx="19" cy="22" rx="17" ry="12" fill="#1a1008"/>
          <path d="M2,30 Q19,12 36,30" fill="none" stroke="#111" strokeWidth="5"/>
          <rect x="-1" y="26" width="8" height="12" rx="4" fill="#111"/>
          <rect x="31" y="26" width="8" height="12" rx="4" fill="#111"/>
          <circle cx="13" cy="34" r="2.5" fill="#2a1808"/>
          <circle cx="25" cy="34" r="2.5" fill="#2a1808"/>
          <path d="M13,41 Q19,46 25,41" stroke="#c88" strokeWidth="1.5" fill="none"/>
          <path d="M10,103 L8,138" stroke="#222" strokeWidth="10" fill="none" strokeLinecap="round"/>
          <path d="M26,103 L28,138" stroke="#222" strokeWidth="10" fill="none" strokeLinecap="round"/>
          <ellipse cx="7" cy="141" rx="10" ry="4" fill="#111"/>
          <ellipse cx="29" cy="141" rx="10" ry="4" fill="#111"/>
          <rect x="13" y="48" width="12" height="8" rx="3" fill="#F0B896"/>
        </g>

        <ellipse cx="620" cy="585" rx="250" ry="14" fill="#00000010"/>
      </svg>
    </div>
  );
}
