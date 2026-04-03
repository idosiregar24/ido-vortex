import { useState, useEffect, useRef } from "react";

// ─── Animasi CSS Global ────────────────────────────────────────────
const styles = `
  @keyframes fadeSlideDown {
    from { opacity: 0; transform: translateY(-20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.85); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes bounceIn {
    0%   { opacity: 0; transform: scale(0.3); }
    50%  { opacity: 1; transform: scale(1.1); }
    70%  { transform: scale(0.95); }
    100% { transform: scale(1); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-6px); }
  }
  @keyframes navLinkIn {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes widthExpand {
    from { width: 0; opacity: 0; }
    to   { width: 100%; opacity: 1; }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }

  .anim-fade-slide-down { animation: fadeSlideDown 0.5s ease both; }
  .anim-fade-slide-up   { animation: fadeSlideUp  0.55s ease both; }
  .anim-fade-in         { animation: fadeIn       0.6s ease both; }
  .anim-scale-in        { animation: scaleIn      0.45s cubic-bezier(.175,.885,.32,1.275) both; }
  .anim-slide-left      { animation: slideInLeft  0.5s ease both; }
  .anim-bounce-in       { animation: bounceIn     0.6s cubic-bezier(.175,.885,.32,1.275) both; }
  .anim-float           { animation: float        3s ease-in-out infinite; }

  .shimmer-btn {
    background: linear-gradient(90deg, #3b82f6 25%, #60a5fa 50%, #3b82f6 75%);
    background-size: 200% auto;
    animation: shimmer 2.2s linear infinite;
    color: white;
    border: none;
  }

  .nav-link-item { animation: navLinkIn 0.4s ease both; }
  .nav-link-item:nth-child(1) { animation-delay: 0.3s; }
  .nav-link-item:nth-child(2) { animation-delay: 0.45s; }
  .nav-link-item:nth-child(3) { animation-delay: 0.6s; }

  .section-line-expand {
    animation: widthExpand 0.6s ease both;
    animation-delay: 0.2s;
  }

  .stagger-1 { animation-delay: 0.05s !important; }
  .stagger-2 { animation-delay: 0.12s !important; }
  .stagger-3 { animation-delay: 0.19s !important; }
  .stagger-4 { animation-delay: 0.26s !important; }
  .stagger-5 { animation-delay: 0.33s !important; }
  .stagger-6 { animation-delay: 0.40s !important; }

  .hover-lift {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .hover-lift:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(0,0,0,0.12);
  }
  .btn-press:active { transform: scale(0.95) !important; }

  .underline-anim span {
    display: block;
    height: 1px;
    width: 0;
    background: white;
    transition: width 0.25s ease;
  }
  .underline-anim:hover span { width: 100%; }
`;

// ─── Hook: trigger animasi saat elemen masuk viewport ─────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Main ──────────────────────────────────────────────────────────
export default function TailwindShowcase() {
  return (
    <>
      <style>{styles}</style>
      <div className="bg-white min-h-screen font-sans">
        <FlexboxGrid />
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-10">
          <AnimatedSection title="Spacing"                 color="bg-blue-500">   <Spacing />         </AnimatedSection>
          <AnimatedSection title="Typography"              color="bg-purple-500"> <Typography />      </AnimatedSection>
          <AnimatedSection title="Buttons & Border Radius" color="bg-green-500">  <BorderRadius />    </AnimatedSection>
          <AnimatedSection title="Background Colors"       color="bg-amber-500">  <BackgroundColors /></AnimatedSection>
          <AnimatedSection title="Shadow Effects"          color="bg-rose-500">   <ShadowEffects />   </AnimatedSection>
          <AnimatedSection title="Color Palette"           color="bg-indigo-500"> <ColorPalette />    </AnimatedSection>
        </div>
      </div>
    </>
  );
}

// ─── Animated Section Wrapper ──────────────────────────────────────
function AnimatedSection({ title, color, children }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className="space-y-4">
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${color} ${visible ? "anim-bounce-in" : "opacity-0"}`} />
        <span className={`text-sm font-bold tracking-wide text-gray-800 ${visible ? "anim-slide-left" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}>
          {title}
        </span>
        <div className={`h-px bg-gray-200 ${visible ? "section-line-expand" : "opacity-0 w-0"}`} />
      </div>
      <div className={visible ? "anim-fade-slide-up" : "opacity-0"} style={{ animationDelay: "0.15s" }}>
        {children}
      </div>
    </div>
  );
}

// ─── Flexbox Grid (Navbar) ─────────────────────────────────────────
function FlexboxGrid() {
  return (
    <nav className="flex justify-between items-center bg-gray-900 px-6 py-4 text-white anim-fade-slide-down">
      <h1 className="text-lg font-extrabold tracking-tight anim-scale-in" style={{ animationDelay: "0.15s" }}>
        MyWebsite
      </h1>
      <ul className="flex space-x-6 text-sm text-gray-400">
        {["Home", "About", "Contact"].map((item) => (
          <li key={item} className="nav-link-item">
            <a href="#" className="underline-anim hover:text-white transition-colors">
              {item}
              <span />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─── Spacing ───────────────────────────────────────────────────────
function Spacing() {
  return (
    <div className="bg-gray-800 shadow-lg p-6 rounded-xl text-white hover-lift cursor-default">
      <h2 className="text-lg font-extrabold">Belajar Tailwind CSS 4</h2>
      <p className="mt-2 text-gray-400 text-sm">
        Ini adalah contoh paragraf dengan padding dan margin yang konsisten.
      </p>
    </div>
  );
}

// ─── Typography ────────────────────────────────────────────────────
function Typography() {
  const badges = [
    { label: "text-4xl",       cls: "text-blue-600   bg-blue-50" },
    { label: "font-extrabold", cls: "text-purple-600 bg-purple-50" },
    { label: "tracking-tight", cls: "text-gray-600   bg-gray-100" },
  ];
  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight leading-tight anim-slide-left">
        Tailwind Typography
      </h1>
      <p className="text-gray-500 text-base leading-relaxed anim-fade-in" style={{ animationDelay: "0.2s" }}>
        Belajar Tailwind sangat menyenangkan dan cepat! Dengan utility classes
        yang intuitif, kamu bisa membangun UI yang indah dalam hitungan menit.
      </p>
      <div className="flex gap-2 flex-wrap pt-1">
        {badges.map(({ label, cls }, i) => (
          <span
            key={label}
            className={`text-xs font-bold px-3 py-1 rounded-full anim-scale-in ${cls}`}
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Border Radius ─────────────────────────────────────────────────
function BorderRadius() {
  const [clicked, setClicked] = useState(null);
  const variants = [
    { label: "none", cls: "rounded-none" },
    { label: "sm",   cls: "rounded-sm" },
    { label: "md",   cls: "rounded-md" },
    { label: "lg",   cls: "rounded-lg" },
    { label: "2xl",  cls: "rounded-2xl" },
    { label: "full", cls: "rounded-full" },
  ];
  const buttons = [
    { label: "Click Me",  cls: "shimmer-btn" },
    { label: "Klik Saya", cls: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent" },
    { label: "Hover Me",  cls: "bg-violet-500 hover:bg-violet-600 text-white" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-3 flex-wrap items-center">
        {buttons.map(({ label, cls }, i) => (
          <button
            key={label}
            onClick={() => setClicked(label)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all btn-press hover-lift ${cls} anim-fade-slide-up`}
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            {label}
          </button>
        ))}
        {clicked && (
          <span className="text-xs text-gray-400 anim-fade-in">
            ✓ <span className="font-semibold text-gray-600">{clicked}</span> diklik!
          </span>
        )}
      </div>

      <div className="flex gap-4 flex-wrap items-center pt-2">
        {variants.map(({ label, cls }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center gap-1 anim-scale-in stagger-${i + 1}`}
          >
            <div
              className={`w-11 h-11 bg-indigo-100 border-2 border-indigo-500 flex items-center justify-center
                ${cls} hover:bg-indigo-300 hover:scale-110 transition-all duration-200 cursor-default`}
            >
              <span className="text-[9px] font-bold text-indigo-700">{label}</span>
            </div>
            <span className="text-[10px] text-gray-400">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Background Colors ─────────────────────────────────────────────
function BackgroundColors() {
  const cards = [
    { from: "#3b82f6", to: "#1e40af", text: "Tailwind Colors",  desc: "Hover untuk warna berubah!" },
    { from: "#8b5cf6", to: "#5b21b6", text: "Violet Shade",     desc: "Dari violet-500 ke violet-800!" },
    { from: "#10b981", to: "#065f46", text: "Emerald Shade",    desc: "Warna hijau yang segar!" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map(({ from, to, text, desc }, i) => (
        <div
          key={text}
          className={`text-white p-5 rounded-xl cursor-pointer relative overflow-hidden anim-fade-slide-up`}
          style={{
            background: from,
            transition: "background 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease",
            animationDelay: `${0.1 * i}s`,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = to;
            e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
            e.currentTarget.style.boxShadow = "0 18px 36px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = from;
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <span className="absolute top-2 right-3 text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">
            hover me
          </span>
          <div className="anim-float" style={{ animationDelay: `${0.4 * i}s` }}>
            <h3 className="text-base font-bold">{text}</h3>
            <p className="mt-1 text-sm text-white/80">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Shadow Effects ────────────────────────────────────────────────
function ShadowEffects() {
  const shadows = [
    { label: "shadow-sm",  cls: "shadow-sm" },
    { label: "shadow-md",  cls: "shadow-md" },
    { label: "shadow-lg",  cls: "shadow-lg" },
    { label: "shadow-xl",  cls: "shadow-xl" },
    { label: "shadow-2xl", cls: "shadow-2xl" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
      {shadows.map(({ label, cls }, i) => (
        <div
          key={label}
          className={`bg-white ${cls} p-4 rounded-xl transition-all duration-300 hover:-translate-y-2
            hover:shadow-2xl cursor-default group anim-scale-in`}
          style={{ animationDelay: `${0.08 * i}s` }}
        >
          <p className="text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
            {label}
          </p>
          <p className="text-[11px] text-gray-400 mt-1">Hover untuk float</p>
        </div>
      ))}
    </div>
  );
}

// ─── Color Palette ─────────────────────────────────────────────────
function ColorPalette() {
  const [selected, setSelected] = useState(null);

  const palette = [
    { name: "blue",    swatch: "bg-blue-500",    badge: "bg-blue-50    text-blue-800" },
    { name: "violet",  swatch: "bg-violet-500",  badge: "bg-violet-50  text-violet-800" },
    { name: "emerald", swatch: "bg-emerald-500", badge: "bg-emerald-50 text-emerald-800" },
    { name: "amber",   swatch: "bg-amber-400",   badge: "bg-amber-50   text-amber-800" },
    { name: "rose",    swatch: "bg-rose-500",    badge: "bg-rose-50    text-rose-800" },
    { name: "indigo",  swatch: "bg-indigo-500",  badge: "bg-indigo-50  text-indigo-800" },
    { name: "pink",    swatch: "bg-pink-500",    badge: "bg-pink-50    text-pink-800" },
    { name: "gray",    swatch: "bg-gray-800",    badge: "bg-gray-100   text-gray-800" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-3 flex-wrap">
        {palette.map(({ name, swatch }, i) => (
          <div
            key={name}
            className="flex flex-col items-center gap-1 cursor-pointer"
            onClick={() => setSelected(selected === name ? null : name)}
          >
            <div
              className={`w-9 h-9 rounded-lg ${swatch} transition-all duration-200 anim-bounce-in
                ${selected === name
                  ? "scale-125 ring-2 ring-offset-2 ring-gray-400"
                  : "hover:scale-110 hover:-translate-y-1"
                }`}
              style={{ animationDelay: `${0.06 * i}s` }}
            />
            <span className="text-[10px] text-gray-400">{name}</span>
          </div>
        ))}
      </div>

      {selected && (
        <p className="text-xs text-gray-500 anim-fade-in">
          Dipilih: <span className="font-bold text-gray-700">{selected}</span>
        </p>
      )}

      <div className="flex gap-2 flex-wrap">
        {palette.map(({ name, badge }, i) => (
          <span
            key={name}
            onClick={() => setSelected(selected === name ? null : name)}
            className={`text-xs font-medium px-3 py-1 rounded-full cursor-pointer transition-all duration-200
              anim-fade-slide-up ${badge}
              ${selected === name ? "scale-110 ring-1 ring-gray-300" : "hover:scale-105"}`}
            style={{ animationDelay: `${0.05 * i}s` }}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
