import React from 'react';

export default function DeveloperIllustration() {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spinR {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes pulse {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.6; }
        }
        @keyframes slideCode {
          0%   { transform: translateX(0); opacity: 1; }
          50%  { transform: translateX(4px); opacity: 0.8; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes arrowBounce {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(5px); }
        }

        .gear-bg1 { transform-origin: 870px 80px; animation: spin 12s linear infinite; }
        .gear-bg2 { transform-origin: 810px 130px; animation: spinR 9s linear infinite; }
        .gear-bg3 { transform-origin: 50px 430px; animation: spin 14s linear infinite; }
        .phone-float { animation: float 4s ease-in-out infinite; }
        .arrow-anim { animation: arrowBounce 1.8s ease-in-out infinite; }
        .code-line-anim { animation: slideCode 3s ease-in-out infinite; }
        .settings-icon-anim { animation: float 3.5s ease-in-out infinite 0.5s; }
      `}} />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 560" className="w-full h-auto">
        <defs>
          <linearGradient id="monitorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8f8f8"/>
            <stop offset="100%" stopColor="#eeeeee"/>
          </linearGradient>
          <linearGradient id="deskGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5E3C"/>
            <stop offset="100%" stopColor="#6B4226"/>
          </linearGradient>
          <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a"/>
            <stop offset="100%" stopColor="#111111"/>
          </linearGradient>
          <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b35"/>
            <stop offset="100%" stopColor="#e84c00"/>
          </linearGradient>
          <linearGradient id="settingsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff7a30"/>
            <stop offset="100%" stopColor="#e85500"/>
          </linearGradient>
          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff7a30"/>
            <stop offset="100%" stopColor="#e84c00"/>
          </linearGradient>
          <filter id="dropShadowDev">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#00000020"/>
          </filter>
          <filter id="lightShadowDev">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#00000015"/>
          </filter>
          <clipPath id="monitorClip">
            <rect x="152" y="68" width="500" height="320" rx="10"/>
          </clipPath>
          <clipPath id="phoneScreenClip">
            <rect x="668" y="178" width="152" height="300" rx="4"/>
          </clipPath>
        </defs>

        {/* ═══════════════════════ BACKGROUND GEARS ═══════════════════════ */}
        <g className="gear-bg1" opacity="0.12">
          <circle cx="870" cy="80" r="55" fill="none" stroke="#888" strokeWidth="10"/>
          <circle cx="870" cy="80" r="35" fill="none" stroke="#888" strokeWidth="3"/>
          <g fill="#888">
            <rect x="862" y="18" width="16" height="18" rx="3" transform="rotate(0,870,80)"/>
            <rect x="862" y="18" width="16" height="18" rx="3" transform="rotate(45,870,80)"/>
            <rect x="862" y="18" width="16" height="18" rx="3" transform="rotate(90,870,80)"/>
            <rect x="862" y="18" width="16" height="18" rx="3" transform="rotate(135,870,80)"/>
            <rect x="862" y="18" width="16" height="18" rx="3" transform="rotate(180,870,80)"/>
            <rect x="862" y="18" width="16" height="18" rx="3" transform="rotate(225,870,80)"/>
            <rect x="862" y="18" width="16" height="18" rx="3" transform="rotate(270,870,80)"/>
            <rect x="862" y="18" width="16" height="18" rx="3" transform="rotate(315,870,80)"/>
          </g>
        </g>
        <g className="gear-bg2" opacity="0.1">
          <circle cx="810" cy="130" r="34" fill="none" stroke="#888" strokeWidth="7"/>
          <circle cx="810" cy="130" r="20" fill="none" stroke="#888" strokeWidth="2"/>
          <g fill="#888">
            <rect x="804" y="90" width="12" height="14" rx="2" transform="rotate(0,810,130)"/>
            <rect x="804" y="90" width="12" height="14" rx="2" transform="rotate(60,810,130)"/>
            <rect x="804" y="90" width="12" height="14" rx="2" transform="rotate(120,810,130)"/>
            <rect x="804" y="90" width="12" height="14" rx="2" transform="rotate(180,810,130)"/>
            <rect x="804" y="90" width="12" height="14" rx="2" transform="rotate(240,810,130)"/>
            <rect x="804" y="90" width="12" height="14" rx="2" transform="rotate(300,810,130)"/>
          </g>
        </g>
        <g className="gear-bg3" opacity="0.08">
          <circle cx="50" cy="430" r="42" fill="none" stroke="#888" strokeWidth="8"/>
          <g fill="#888">
            <rect x="44" y="382" width="12" height="14" rx="2" transform="rotate(0,50,430)"/>
            <rect x="44" y="382" width="12" height="14" rx="2" transform="rotate(45,50,430)"/>
            <rect x="44" y="382" width="12" height="14" rx="2" transform="rotate(90,50,430)"/>
            <rect x="44" y="382" width="12" height="14" rx="2" transform="rotate(135,50,430)"/>
            <rect x="44" y="382" width="12" height="14" rx="2" transform="rotate(180,50,430)"/>
            <rect x="44" y="382" width="12" height="14" rx="2" transform="rotate(225,50,430)"/>
            <rect x="44" y="382" width="12" height="14" rx="2" transform="rotate(270,50,430)"/>
            <rect x="44" y="382" width="12" height="14" rx="2" transform="rotate(315,50,430)"/>
          </g>
        </g>

        <rect x="42" y="88" width="20" height="20" rx="3" fill="#e0e0e0" opacity="0.6"/>
        <rect x="56" y="102" width="12" height="12" rx="2" fill="#d0d0d0" opacity="0.4"/>

        <g opacity="0.25" stroke="#666" strokeWidth="1.5" fill="none">
          <path d="M78,500 L100,540 L56,540 Z"/>
          <path d="M78,500 Q70,470 55,455"/>
          <path d="M78,500 Q85,465 100,448"/>
          <path d="M78,500 Q78,475 78,450"/>
          <path d="M55,455 Q42,440 48,425"/>
          <path d="M100,448 Q115,433 108,418"/>
        </g>

        {/* ═══════════════════════ MONITOR ═══════════════════════ */}
        <rect x="370" y="388" width="64" height="14" rx="4" fill="#cccccc"/>
        <rect x="388" y="382" width="28" height="20" rx="3" fill="#bbbbbb"/>
        <rect x="148" y="58" width="508" height="338" rx="16" fill="#1a1a1a" filter="url(#dropShadowDev)"/>
        <rect x="152" y="68" width="500" height="320" rx="10" fill="url(#monitorGrad)"/>

        <rect x="152" y="68" width="500" height="28" rx="10" fill="#f0f0f0"/>
        <rect x="152" y="82" width="500" height="14" fill="#f0f0f0"/>
        <circle cx="176" cy="82" r="5" fill="#ff5f57"/>
        <circle cx="194" cy="82" r="5" fill="#febc2e"/>
        <circle cx="212" cy="82" r="5" fill="#28c840"/>

        <rect x="152" y="96" width="85" height="292" rx="0" fill="#f2f2f2"/>

        <g fill="#d0d0d0">
          <rect x="162" y="112" width="55" height="7" rx="3"/>
          <rect x="162" y="126" width="45" height="7" rx="3"/>
          <rect x="162" y="140" width="60" height="7" rx="3"/>
          <rect x="162" y="154" width="40" height="7" rx="3"/>
          <rect x="162" y="168" width="55" height="7" rx="3"/>
          <rect x="162" y="182" width="50" height="7" rx="3"/>
          <rect x="162" y="196" width="42" height="7" rx="3"/>
          <rect x="162" y="210" width="58" height="7" rx="3"/>
          <rect x="162" y="224" width="35" height="7" rx="3"/>
          <rect x="162" y="238" width="52" height="7" rx="3"/>
          <rect x="162" y="252" width="44" height="7" rx="3"/>
          <rect x="162" y="266" width="60" height="7" rx="3"/>
          <rect x="162" y="280" width="38" height="7" rx="3"/>
          <rect x="162" y="294" width="54" height="7" rx="3"/>
          <rect x="162" y="308" width="46" height="7" rx="3"/>
          <rect x="162" y="322" width="42" height="7" rx="3"/>
        </g>
        <rect x="158" y="151" width="72" height="13" rx="4" fill="#ff7a30" opacity="0.2"/>
        <rect x="158" y="193" width="72" height="13" rx="4" fill="#ff7a30" opacity="0.15"/>

        <g fill="#ff7a30">
          <circle cx="252" cy="116" r="3.5"/>
          <circle cx="252" cy="134" r="3.5"/>
          <circle cx="252" cy="152" r="3.5"/>
          <circle cx="252" cy="170" r="3.5"/>
          <circle cx="252" cy="188" r="3.5"/>
          <circle cx="252" cy="206" r="3.5"/>
          <circle cx="252" cy="224" r="3.5"/>
          <circle cx="252" cy="242" r="3.5"/>
          <circle cx="252" cy="260" r="3.5"/>
          <circle cx="252" cy="278" r="3.5"/>
          <circle cx="252" cy="296" r="3.5"/>
          <circle cx="252" cy="314" r="3.5"/>
          <circle cx="252" cy="332" r="3.5"/>
          <circle cx="252" cy="350" r="3.5"/>
        </g>

        <g className="code-line-anim">
          <rect x="266" y="111" width="80" height="9" rx="4" fill="#2a2a2a"/>
          <rect x="358" y="111" width="60" height="9" rx="4" fill="#2a2a2a" opacity="0.7"/>
          <rect x="430" y="111" width="110" height="9" rx="4" fill="#d0d0d0"/>
          
          <rect x="266" y="129" width="50" height="9" rx="4" fill="#2a2a2a"/>
          <rect x="326" y="129" width="90" height="9" rx="4" fill="#d8d8d8"/>
          <rect x="428" y="129" width="70" height="9" rx="4" fill="#d0d0d0"/>
          
          <rect x="266" y="147" width="70" height="9" rx="4" fill="#ff7a30"/>
          <rect x="348" y="147" width="40" height="9" rx="4" fill="#d0d0d0"/>
          <rect x="400" y="147" width="120" height="9" rx="4" fill="#d0d0d0"/>
          
          <rect x="266" y="165" width="100" height="9" rx="4" fill="#2a2a2a" opacity="0.8"/>
          <rect x="378" y="165" width="55" height="9" rx="4" fill="#ff7a30"/>
          <rect x="445" y="165" width="80" height="9" rx="4" fill="#d0d0d0"/>
          
          <rect x="266" y="183" width="45" height="9" rx="4" fill="#2a2a2a"/>
          <rect x="322" y="183" width="75" height="9" rx="4" fill="#d0d0d0"/>
          
          <rect x="266" y="201" width="55" height="9" rx="4" fill="#ff7a30"/>
          <rect x="333" y="201" width="35" height="9" rx="4" fill="#2a2a2a" opacity="0.6"/>
          <rect x="380" y="201" width="95" height="9" rx="4" fill="#d0d0d0"/>
          
          <rect x="266" y="219" width="85" height="9" rx="4" fill="#2a2a2a"/>
          <rect x="362" y="219" width="110" height="9" rx="4" fill="#d8d8d8"/>
          
          <rect x="266" y="237" width="40" height="9" rx="4" fill="#2a2a2a" opacity="0.7"/>
          <rect x="318" y="237" width="60" height="9" rx="4" fill="#ff7a30"/>
          <rect x="390" y="237" width="80" height="9" rx="4" fill="#d0d0d0"/>
          
          <rect x="266" y="255" width="120" height="9" rx="4" fill="#d0d0d0"/>
          
          <rect x="266" y="273" width="65" height="9" rx="4" fill="#ff7a30"/>
          <rect x="343" y="273" width="90" height="9" rx="4" fill="#2a2a2a" opacity="0.8"/>
          
          <rect x="266" y="291" width="50" height="9" rx="4" fill="#2a2a2a"/>
          <rect x="328" y="291" width="130" height="9" rx="4" fill="#d0d0d0"/>
          
          <rect x="266" y="309" width="75" height="9" rx="4" fill="#d0d0d0"/>
          <rect x="353" y="309" width="55" height="9" rx="4" fill="#ff7a30"/>
          
          <rect x="266" y="327" width="180" height="9" rx="4" fill="#d0d0d0"/>
          
          <rect x="266" y="345" width="55" height="7" rx="3" fill="#2a2a2a"/>
          <rect x="332" y="345" width="100" height="7" rx="3" fill="#ff7a30"/>
        </g>

        {/* ═══════════════════════ ORANGE SYNC ARROW ═══════════════════════ */}
        <g className="arrow-anim">
          <path d="M652,38 Q780,38 780,130 L780,180" 
                fill="none" stroke="url(#arrowGrad)" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round"/>
          <polygon points="758,180 802,180 780,215" fill="url(#arrowGrad)"/>
        </g>

        {/* ═══════════════════════ MOBILE PHONE ═══════════════════════ */}
        <g className="phone-float" filter="url(#dropShadowDev)">
          <rect x="656" y="155" width="176" height="360" rx="28" fill="url(#phoneGrad)"/>
          <rect x="668" y="178" width="152" height="300" rx="6" fill="#f8f8f8"/>
          <rect x="710" y="155" width="68" height="20" rx="10" fill="#1a1a1a"/>
          <circle cx="744" cy="165" r="4" fill="#333"/>
          <rect x="720" y="504" width="48" height="4" rx="2" fill="#555"/>

          <rect x="668" y="178" width="152" height="22" rx="4" fill="#f0f0f0"/>
          <circle cx="690" cy="189" r="3" fill="#d0d0d0"/>
          <circle cx="700" cy="189" r="3" fill="#d0d0d0"/>
          <circle cx="710" cy="189" r="3" fill="#d0d0d0"/>
          <circle cx="796" cy="189" r="5" fill="#d0d0d0"/>

          <g fill="#ff7a30" opacity="0.9">
            <circle cx="680" cy="218" r="2.5"/>
            <circle cx="680" cy="234" r="2.5"/>
            <circle cx="680" cy="250" r="2.5"/>
            <circle cx="680" cy="266" r="2.5"/>
            <circle cx="680" cy="282" r="2.5"/>
            <circle cx="680" cy="298" r="2.5"/>
            <circle cx="680" cy="314" r="2.5"/>
            <circle cx="680" cy="330" r="2.5"/>
            <circle cx="680" cy="346" r="2.5"/>
            <circle cx="680" cy="362" r="2.5"/>
            <circle cx="680" cy="378" r="2.5"/>
            <circle cx="680" cy="394" r="2.5"/>
            <circle cx="680" cy="410" r="2.5"/>
            <circle cx="680" cy="426" r="2.5"/>
            <circle cx="680" cy="442" r="2.5"/>
            <circle cx="680" cy="458" r="2.5"/>
          </g>

          <rect x="690" y="213" width="55" height="7" rx="3" fill="#2a2a2a"/>
          <rect x="752" y="213" width="30" height="7" rx="3" fill="#bbb"/>

          <rect x="690" y="229" width="35" height="7" rx="3" fill="#ff7a30"/>
          <rect x="732" y="229" width="50" height="7" rx="3" fill="#bbb"/>

          <rect x="690" y="245" width="60" height="7" rx="3" fill="#bbb"/>
          <rect x="757" y="245" width="25" height="7" rx="3" fill="#aaa"/>

          <rect x="690" y="261" width="42" height="7" rx="3" fill="#2a2a2a" opacity="0.8"/>
          <rect x="738" y="261" width="38" height="7" rx="3" fill="#ff7a30"/>

          <rect x="690" y="277" width="70" height="7" rx="3" fill="#bbb"/>

          <rect x="690" y="293" width="38" height="7" rx="3" fill="#ff7a30"/>
          <rect x="734" y="293" width="28" height="7" rx="3" fill="#bbb"/>
          <rect x="768" y="293" width="18" height="7" rx="3" fill="#aaa"/>

          <rect x="690" y="309" width="55" height="7" rx="3" fill="#2a2a2a" opacity="0.7"/>
          <rect x="752" y="309" width="32" height="7" rx="3" fill="#bbb"/>

          <rect x="690" y="325" width="44" height="7" rx="3" fill="#bbb"/>
          <rect x="740" y="325" width="18" height="7" rx="3" fill="#ff7a30"/>

          <rect x="690" y="341" width="62" height="7" rx="3" fill="#ff7a30"/>
          <rect x="758" y="341" width="24" height="7" rx="3" fill="#bbb"/>

          <rect x="690" y="357" width="35" height="7" rx="3" fill="#2a2a2a" opacity="0.8"/>
          <rect x="732" y="357" width="50" height="7" rx="3" fill="#bbb"/>

          <rect x="690" y="373" width="48" height="7" rx="3" fill="#bbb"/>
          <rect x="744" y="373" width="20" height="7" rx="3" fill="#aaa"/>

          <rect x="690" y="389" width="40" height="7" rx="3" fill="#ff7a30"/>
          <rect x="736" y="389" width="44" height="7" rx="3" fill="#bbb"/>

          <rect x="690" y="405" width="58" height="7" rx="3" fill="#2a2a2a" opacity="0.7"/>

          <rect x="690" y="421" width="32" height="7" rx="3" fill="#bbb"/>
          <rect x="728" y="421" width="40" height="7" rx="3" fill="#ff7a30"/>

          <rect x="690" y="437" width="66" height="7" rx="3" fill="#bbb"/>

          <rect x="690" y="453" width="44" height="7" rx="3" fill="#ff7a30"/>
          <rect x="740" y="453" width="30" height="7" rx="3" fill="#bbb"/>
        </g>

        {/* ═══════════════════════ SETTINGS BOX (top-left) ═══════════════════════ */}
        <g className="settings-icon-anim" filter="url(#lightShadowDev)">
          <rect x="68" y="178" width="90" height="90" rx="18" fill="url(#settingsGrad)"/>
          <g transform="translate(113,223)">
            <g fill="white" opacity="0.9">
              <rect x="-5" y="-30" width="10" height="12" rx="2"/>
              <rect x="-5" y="-30" width="10" height="12" rx="2" transform="rotate(45)"/>
              <rect x="-5" y="-30" width="10" height="12" rx="2" transform="rotate(90)"/>
              <rect x="-5" y="-30" width="10" height="12" rx="2" transform="rotate(135)"/>
              <rect x="-5" y="-30" width="10" height="12" rx="2" transform="rotate(180)"/>
              <rect x="-5" y="-30" width="10" height="12" rx="2" transform="rotate(225)"/>
              <rect x="-5" y="-30" width="10" height="12" rx="2" transform="rotate(270)"/>
              <rect x="-5" y="-30" width="10" height="12" rx="2" transform="rotate(315)"/>
            </g>
            <circle r="20" fill="none" stroke="white" strokeWidth="4" opacity="0.9"/>
            <circle r="8" fill="white" opacity="0.85"/>
          </g>
          <g transform="translate(148,205)">
            <g fill="white" opacity="0.7">
              <rect x="-3" y="-16" width="6" height="7" rx="1.5"/>
              <rect x="-3" y="-16" width="6" height="7" rx="1.5" transform="rotate(60)"/>
              <rect x="-3" y="-16" width="6" height="7" rx="1.5" transform="rotate(120)"/>
              <rect x="-3" y="-16" width="6" height="7" rx="1.5" transform="rotate(180)"/>
              <rect x="-3" y="-16" width="6" height="7" rx="1.5" transform="rotate(240)"/>
              <rect x="-3" y="-16" width="6" height="7" rx="1.5" transform="rotate(300)"/>
            </g>
            <circle r="10" fill="none" stroke="white" strokeWidth="2.5" opacity="0.7"/>
            <circle r="4" fill="white" opacity="0.6"/>
          </g>
        </g>

        {/* ═══════════════════════ DESK ═══════════════════════ */}
        <rect x="82" y="400" width="560" height="20" rx="5" fill="url(#deskGrad)"/>
        <rect x="556" y="420" width="22" height="120" rx="4" fill="#7a4f35"/>
        <rect x="148" y="420" width="22" height="120" rx="4" fill="#7a4f35"/>
        <rect x="136" y="530" width="48" height="12" rx="4" fill="#6B4226"/>
        <rect x="544" y="530" width="48" height="12" rx="4" fill="#6B4226"/>
        <rect x="170" y="480" width="390" height="10" rx="4" fill="#8B5E3C" opacity="0.5"/>

        {/* ═══════════════════════ CACTUS ═══════════════════════ */}
        <g transform="translate(120,340)">
          <rect x="-18" y="42" width="36" height="26" rx="3" fill="#c0694a"/>
          <rect x="-15" y="39" width="30" height="8" rx="3" fill="#d4785a"/>
          <rect x="-7" y="0" width="14" height="50" rx="7" fill="#4a8c3f"/>
          <rect x="-24" y="16" width="20" height="10" rx="5" fill="#4a8c3f"/>
          <rect x="-30" y="4" width="10" height="24" rx="5" fill="#4a8c3f"/>
          <rect x="4" y="22" width="22" height="10" rx="5" fill="#4a8c3f"/>
          <rect x="20" y="10" width="10" height="24" rx="5" fill="#4a8c3f"/>
          <g stroke="#2d5c28" strokeWidth="1" opacity="0.6">
            <line x1="-7" y1="10" x2="-12" y2="8"/>
            <line x1="7" y1="10" x2="12" y2="8"/>
            <line x1="-7" y1="25" x2="-12" y2="23"/>
            <line x1="7" y1="25" x2="12" y2="23"/>
          </g>
        </g>
      </svg>
    </div>
  );
}
