import { FlaskConical, Sparkles } from "lucide-react";

export function ScienceIllustration() {
  return (
    <div className="science-illustration" aria-hidden="true">
      <div className="science-grid" />
      <div className="science-halo" />
      <svg className="molecule" viewBox="0 0 460 380" fill="none">
        <defs>
          <radialGradient id="atom-main" cx="32%" cy="25%" r="75%">
            <stop stopColor="#9cdfbd" />
            <stop offset=".55" stopColor="#369774" />
            <stop offset="1" stopColor="#17664f" />
          </radialGradient>
          <radialGradient id="atom-light" cx="30%" cy="25%" r="80%">
            <stop stopColor="#f4fff9" />
            <stop offset=".55" stopColor="#c5e8d7" />
            <stop offset="1" stopColor="#86bda5" />
          </radialGradient>
          <radialGradient id="atom-small" cx="30%" cy="25%" r="80%">
            <stop stopColor="#7ecba1" />
            <stop offset="1" stopColor="#338365" />
          </radialGradient>
          <filter id="atom-shadow" x="-60%" y="-60%" width="220%" height="240%">
            <feDropShadow
              dx="0"
              dy="12"
              stdDeviation="10"
              floodColor="#19553b"
              floodOpacity=".15"
            />
          </filter>
          <linearGradient id="bond" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#afcebd" />
            <stop offset=".5" stopColor="#e6f2eb" />
            <stop offset="1" stopColor="#94bda7" />
          </linearGradient>
        </defs>
        <ellipse
          cx="232"
          cy="194"
          rx="165"
          ry="108"
          stroke="#94bca5"
          strokeOpacity=".35"
          strokeDasharray="4 7"
          transform="rotate(-28 232 194)"
        />
        <ellipse
          cx="232"
          cy="194"
          rx="159"
          ry="100"
          stroke="#94bca5"
          strokeOpacity=".3"
          transform="rotate(48 232 194)"
        />
        <g stroke="url(#bond)" strokeWidth="14" strokeLinecap="round">
          <path d="M228 197 146 121M228 197 320 130M228 197 322 265M228 197 145 274M146 121 105 68M320 130 356 71M145 274 88 289M322 265 367 299" />
        </g>
        <g filter="url(#atom-shadow)">
          <circle cx="228" cy="197" r="52" fill="url(#atom-main)" />
          <circle cx="146" cy="121" r="31" fill="url(#atom-light)" />
          <circle cx="320" cy="130" r="37" fill="url(#atom-light)" />
          <circle cx="322" cy="265" r="29" fill="url(#atom-small)" />
          <circle cx="145" cy="274" r="35" fill="url(#atom-light)" />
          <circle cx="105" cy="68" r="14" fill="url(#atom-small)" />
          <circle cx="356" cy="71" r="16" fill="url(#atom-small)" />
          <circle cx="88" cy="289" r="13" fill="url(#atom-small)" />
          <circle cx="367" cy="299" r="16" fill="url(#atom-light)" />
        </g>
        <circle cx="201" cy="171" r="10" fill="white" opacity=".18" />
        <circle cx="71" cy="164" r="4" fill="#79b39a" />
        <circle cx="386" cy="212" r="5" fill="#79b39a" />
        <path
          d="M377 114h10m-5-5v10M106 224h10m-5-5v10M255 53h8m-4-4v8"
          stroke="#7da991"
          strokeWidth="1.5"
        />
      </svg>
      <div className="science-label label-top">
        <span className="science-label-icon">
          <FlaskConical size={18} />
        </span>
        <div>
          <strong>Da molécula à prática.</strong>
          <span>Conhecimento que conecta.</span>
        </div>
      </div>
      <div className="science-label label-bottom">
        <Sparkles size={16} />
        <span>Pequenas revisões. Grandes descobertas.</span>
      </div>
      <span className="formula formula-one">NH₂</span>
      <span className="formula formula-two">C₆H₁₂O₆</span>
    </div>
  );
}
