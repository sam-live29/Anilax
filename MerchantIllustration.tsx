import React from 'react';

export default function MerchantIllustration() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 620" className="w-full h-auto">
      <defs>
        {/* Dark card gradient */}
        <linearGradient id="darkCard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a4a4a"/>
          <stop offset="100%" stopColor="#2a2a2a"/>
        </linearGradient>

        {/* Light card gradient */}
        <linearGradient id="lightCard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d0d0d0"/>
          <stop offset="100%" stopColor="#b0b0b0"/>
        </linearGradient>

        {/* Gold chip gradient */}
        <linearGradient id="chipGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0c040"/>
          <stop offset="50%" stopColor="#d4a017"/>
          <stop offset="100%" stopColor="#e8b820"/>
        </linearGradient>

        {/* Mastercard red */}
        <radialGradient id="mcRed" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff3333"/>
          <stop offset="100%" stopColor="#cc0000"/>
        </radialGradient>

        {/* Mastercard orange */}
        <radialGradient id="mcOrange" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffaa00"/>
          <stop offset="100%" stopColor="#ff8800"/>
        </radialGradient>

        {/* Drop shadow filter */}
        <filter id="cardShadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="4" dy="12" stdDeviation="16" floodColor="#00000040"/>
        </filter>
        <filter id="softShadow" x="-5%" y="-5%" width="120%" height="130%">
          <feDropShadow dx="2" dy="6" stdDeviation="10" floodColor="#00000030"/>
        </filter>

        {/* Noise texture for cards */}
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
          <feBlend in="SourceGraphic" mode="multiply" result="blend"/>
          <feComposite in="blend" in2="SourceGraphic" operator="in"/>
        </filter>

        <clipPath id="darkCardClip">
          <rect x="60" y="90" width="380" height="240" rx="20"/>
        </clipPath>
        <clipPath id="lightCardClip">
          <rect x="200" y="40" width="320" height="200" rx="20"/>
        </clipPath>

        {/* Avatar 1: Blue shirt person */}
        <clipPath id="av1clip"><circle cx="392" cy="538" r="20"/></clipPath>
        <clipPath id="av2clip"><circle cx="414" cy="538" r="20"/></clipPath>
        <clipPath id="av3clip"><circle cx="436" cy="538" r="20"/></clipPath>
      </defs>

      {/* ═══════════════════════════════════════ */}
      {/* BACK CARD (light gray)                  */}
      {/* ═══════════════════════════════════════ */}
      <g filter="url(#softShadow)">
        <rect x="200" y="40" width="320" height="200" rx="20" fill="url(#lightCard)"/>
        {/* noise overlay */}
        <rect x="200" y="40" width="320" height="200" rx="20" fill="#ffffff" opacity="0.08"/>
      </g>

      {/* Back card: MERCHANT label */}
      <text x="226" y="80" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="14" fill="#333" letterSpacing="1.5">MERCHANT</text>
      {/* Back card: card number partial */}
      <text x="226" y="110" fontFamily="monospace" fontSize="14" fill="#444">* 2025</text>
      {/* Back card: NFC icon */}
      <g transform="translate(462,62)" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round">
        <path d="M0,16 A14,14 0 0,1 0,0"/>
        <path d="M6,13 A8,8 0 0,1 6,3"/>
        <path d="M12,11 A4,4 0 0,1 12,5"/>
      </g>
      {/* Back card: Mastercard */}
      <circle cx="450" cy="190" r="22" fill="url(#mcRed)" opacity="0.92"/>
      <circle cx="472" cy="190" r="22" fill="url(#mcOrange)" opacity="0.85"/>
      {/* overlap blend */}
      <path d="M461 172 A22 22 0 0 1 461 208 A22 22 0 0 1 461 172 Z" fill="#ff6600" opacity="0.6"/>


      {/* ═══════════════════════════════════════ */}
      {/* FRONT CARD (dark)                       */}
      {/* ═══════════════════════════════════════ */}
      <g filter="url(#cardShadow)">
        <rect x="60" y="90" width="380" height="240" rx="20" fill="url(#darkCard)"/>
        {/* subtle noise pattern on dark card */}
        <rect x="60" y="90" width="380" height="240" rx="20" fill="#ffffff" opacity="0.03"/>
        {/* diagonal light band (like the original) */}
        <polygon points="260,90 440,90 440,330 300,330" fill="#ffffff" opacity="0.04" clipPath="url(#darkCardClip)"/>
      </g>

      {/* MERCHANT label */}
      <text x="90" y="135" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="15" fill="#ffffff" letterSpacing="2">MERCHANT</text>

      {/* Card number */}
      <text x="90" y="168" fontFamily="monospace" fontSize="16" fill="#cccccc" letterSpacing="3">**** **** ****  2025</text>

      {/* ── Gold Chip ── */}
      <g transform="translate(90, 185)">
        <rect x="0" y="0" width="52" height="40" rx="5" fill="url(#chipGold)"/>
        {/* chip lines horizontal */}
        <line x1="0" y1="13" x2="52" y2="13" stroke="#b8860b" strokeWidth="1.2"/>
        <line x1="0" y1="27" x2="52" y2="27" stroke="#b8860b" strokeWidth="1.2"/>
        {/* chip lines vertical */}
        <line x1="17" y1="0" x2="17" y2="40" stroke="#b8860b" strokeWidth="1.2"/>
        <line x1="35" y1="0" x2="35" y2="40" stroke="#b8860b" strokeWidth="1.2"/>
        {/* center contact */}
        <rect x="17" y="13" width="18" height="14" rx="2" fill="#c8960a" opacity="0.6"/>
      </g>

      {/* Cardholder name */}
      <text x="90" y="270" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="14" fill="#ffffff" letterSpacing="1">ANILAX SOFTWARE</text>
      <text x="90" y="292" fontFamily="Arial" fontSize="12" fill="#aaaaaa" letterSpacing="1.5">VALID THRU   12/28</text>

      {/* Mastercard logo on dark card */}
      <circle cx="348" cy="275" r="26" fill="url(#mcRed)" opacity="0.95"/>
      <circle cx="376" cy="275" r="26" fill="url(#mcOrange)" opacity="0.88"/>
      <path d="M362 252 A26 26 0 0 1 362 298 A26 26 0 0 1 362 252 Z" fill="#ff6600" opacity="0.55"/>


      {/* ═══════════════════════════════════════ */}
      {/* Connector line                          */}
      {/* ═══════════════════════════════════════ */}
      <line x1="250" y1="330" x2="250" y2="380" stroke="#333" strokeWidth="2" strokeDasharray="0"/>


      {/* ═══════════════════════════════════════ */}
      {/* MERCHANT PILL                           */}
      {/* ═══════════════════════════════════════ */}
      <rect x="100" y="382" width="300" height="62" rx="31" fill="#111111" filter="url(#softShadow)"/>

      {/* Shop / store icon */}
      <g transform="translate(130, 398)" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* store front */}
        <rect x="2" y="12" width="26" height="18" rx="2" fill="none"/>
        {/* roof / awning */}
        <path d="M0,12 L5,2 L25,2 L30,12 Z" fill="none"/>
        {/* door */}
        <rect x="11" y="20" width="8" height="10" rx="1" fill="none"/>
        {/* window lines */}
        <line x1="5" y1="7" x2="5" y2="12"/>
        <line x1="25" y1="7" x2="25" y2="12"/>
      </g>

      {/* Merchant text */}
      <text x="178" y="420" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="17" fill="#ffffff">Merchant</text>

      {/* Rupee amount */}
      <text x="310" y="420" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="17" fill="#ffffff">₹ 0728</text>


      {/* ═══════════════════════════════════════ */}
      {/* TEAM PILL                               */}
      {/* ═══════════════════════════════════════ */}
      <rect x="130" y="472" width="240" height="58" rx="29" fill="#111111" filter="url(#softShadow)"/>

      {/* Team text */}
      <text x="160" y="507" fontFamily="Arial" fontSize="17" fill="#ffffff" fontWeight="500">Team</text>

      {/* Avatar 1 (blue shirt) */}
      <circle cx="312" cy="501" r="21" fill="#5b9bd5" stroke="#111" strokeWidth="2"/>
      {/* head */}
      <circle cx="312" cy="494" r="8" fill="#f5c5a3"/>
      {/* body */}
      <ellipse cx="312" cy="514" rx="10" ry="8" fill="#3a7abf"/>

      {/* Avatar 2 (red dress) */}
      <circle cx="334" cy="501" r="21" fill="#e8c47a" stroke="#111" strokeWidth="2"/>
      <circle cx="334" cy="494" r="8" fill="#f5c5a3"/>
      {/* hair */}
      <path d="M326,492 Q334,484 342,492" fill="#4a2800" stroke="none"/>
      <ellipse cx="334" cy="514" rx="10" ry="8" fill="#c0392b"/>

      {/* Avatar 3 (suit) */}
      <circle cx="356" cy="501" r="21" fill="#5a7a6a" stroke="#111" strokeWidth="2"/>
      <circle cx="356" cy="494" r="8" fill="#f5c5a3"/>
      <ellipse cx="356" cy="514" rx="10" ry="8" fill="#2c3e50"/>
      {/* tie */}
      <polygon points="356,506 353,512 356,516 359,512" fill="#c0392b"/>

    </svg>
  );
}
