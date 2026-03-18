import React, { useState, useEffect, useRef } from 'react';
import { 
  Map, 
  Headphones, 
  Sparkles, 
  Dices, 
  X,
  Quote,
  Linkedin,
  Instagram,
  Twitter
} from 'lucide-react';
import { privacyPolicyFR, privacyPolicyEN, termsOfUseFR, termsOfUseEN } from './legalTexts';



// --- Système de Traductions System ---
const translations = {
  fr: {
    nav: { features: "Fonctionnalités", stats: "Statistiques", getApp: "Obtenir l'App" },
    hero: {
      badge: "L'IA au service de l'exploration",
      title1: "Chaque trajet",
      title2: "devient une ",
      title3: "aventure",
      desc: "Planifiez vos trajets, explorez des villes avec des audioguides, trouvez des activités à proximité et laissez-vous surprendre — le tout dans une seule application.",
      appStore: "Télécharger dans l'App Store",
      googlePlay: "Disponible sur Google Play"
    },
    app: {
      greeting: "Salut 👋",
      question: "Que veux-tu faire aujourd'hui ?",
      plan: "Planifier",
      planDesc: "Crée ton itinéraire",
      tours: "Tours guidés",
      toursDesc: "Explore avec un guide",
      suggestions: "Suggestions",
      sugDesc: "Trouve une activité",
      adventure: "Aventure",
      advDesc: "Laisse-toi surprendre",
      footer: "Chaque trajet devient une aventure"
    },
    features: {
      title: "L'Exploration Réinventée",
      subtitle: "Un moteur d'exploration intelligent qui s'adapte à chaque instant de votre journée.",
      modes: [
        { id: 'planner', title: 'Le Planificateur', userView: '"Générez un itinéraire sur mesure en quelques secondes, parfaitement adapté à vos envies."', capabilities: 'Itinéraires optimisés (marche, voiture, transports). Cartes intégrées.' },
        { id: 'tours', title: 'Visites Guidées', userView: '"Plongez dans l\'histoire locale avec des audioguides immersifs qui s\'adaptent à votre rythme."', capabilities: 'Plus de 80 villes. Guides audio immersifs FR/EN.' },
        { id: 'suggestions', title: 'Suggestions Intelligentes', userView: '"Trouvez instantanément l\'activité idéale ou le restaurant parfait, peu importe où vous êtes."', capabilities: 'Filtres croisés intelligents. Sélectionnez le temps disponible.' },
        { id: 'adventure', title: 'Aventure', userView: '"Laissez l\'application choisir pour vous et vivez des découvertes spontanées et inattendues."', capabilities: 'Génération instantanée d\'une aventure basée sur votre position.' }
      ],
      capLabel: "Technologie :"
    },
    personas: {
      title: "Des milliers de voyageurs",
      subtitle: "Découvrez comment Itinerarly révolutionne l'exploration à travers le monde.",
      list: [
        { name: "Sophie", role: "L'Aventurière Spontanée", quote: "Je déteste tout planifier. Avec le Mode Aventure, Itinerarly m'a fait découvrir un café historique caché.", tag: "Utilise le Mode Aventure" },
        { name: "Marc & Léa", role: "Les Planificateurs", quote: "Gérer un voyage à deux n'a jamais été aussi simple. L'IA a optimisé notre trajet pour tout voir.", tag: "Utilisent Le Planificateur" },
        { name: "Thomas", role: "Le Passionné d'Histoire", quote: "Les guides audio interactifs sont incroyables. J'ai eu l'impression de me promener avec un historien.", tag: "Utilise les Visites Guidées" },
        { name: "Elena", role: "La Chasseuse de Pépites", quote: "Les Suggestions Intelligentes m'ont permis de trouver des spots incroyables en quelques secondes.", tag: "Utilise les Suggestions Intelligentes" }
      ]
    },
    stats: {
      title: "L'impact Itinerarly",
      items: [
        { value: "18 000+", label: "Destinations", sublabel: "sélectionnées avec soin" },
        { value: "80+", label: "Villes", sublabel: "totalement explorables" },
        { value: "∞", label: "Trajets", sublabel: "optimisés dynamiquement" },
        { value: "24/7", label: "Aventures", sublabel: "disponibles instantanément" }
      ]
    },
    footer: {
      privacy: "Politique de confidentialité", terms: "Conditions d'utilisation",
      contact: "Contactez-nous par email : itinerarly@gmail.com",
      made: "Fait avec", in: "en France", rights: "Itinerarly. Tous droits réservés."
    },
    legal: {
      privacyTitle: "Politique de confidentialité",
      privacyContent: privacyPolicyFR,
      termsTitle: "Conditions Générales d'Utilisation",
      termsContent: termsOfUseFR
    }
  },
  en: {
    nav: { features: "Features", stats: "Statistics", getApp: "Get the App" },
    hero: {
      badge: "AI powered exploration",
      title1: "Every journey",
      title2: "becomes an ",
      title3: "adventure",
      desc: "Plan your trips, explore cities with audio guides, find nearby activities and let yourself be surprised — all in one single app.",
      appStore: "Download on the App Store",
      googlePlay: "Get it on Google Play"
    },
    app: {
      greeting: "Hi 👋",
      question: "What do you want to do today?",
      plan: "Plan", planDesc: "Create your itinerary",
      tours: "Guided Tours", toursDesc: "Explore with a guide",
      suggestions: "Suggestions", sugDesc: "Find an activity",
      adventure: "Adventure", advDesc: "Let yourself be surprised",
      footer: "Every journey becomes an adventure"
    },
    features: {
      title: "Exploration Reinvented",
      subtitle: "An intelligent exploration engine that adapts to every moment of your day.",
      modes: [
        { id: 'planner', title: 'The Planner', userView: '"Generate a custom itinerary in seconds, perfectly tailored to your desires."', capabilities: 'Optimized routes. Integrated maps.' },
        { id: 'tours', title: 'Guided Tours', userView: '"Dive into local history with immersive audio guides that adapt to your pace."', capabilities: 'Over 80 cities worldwide. Audio guides in FR/EN.' },
        { id: 'suggestions', title: 'Smart Suggestions', userView: '"Instantly find the ideal activity or the perfect restaurant, no matter where you are."', capabilities: 'Intelligent filters. Instant results.' },
        { id: 'adventure', title: 'Adventure Mode', userView: '"Let the app decide for you and experience spontaneous, unexpected adventures."', capabilities: 'One click for a random adventure.' }
      ],
      capLabel: "Technology:"
    },
    personas: {
      title: "Thousands of travelers",
      subtitle: "Discover how Itinerarly is revolutionizing exploration around the world.",
      list: [
        { name: "Sophie", role: "The Spontaneous Adventurer", quote: "I hate planning everything. With Adventure Mode, Itinerarly helped me discover a hidden gem.", tag: "Uses Adventure Mode" },
        { name: "Marc & Léa", role: "The Planners", quote: "Managing a trip for two has never been easier. The AI optimized our route.", tag: "Uses The Planner" },
        { name: "Thomas", role: "The History Buff", quote: "The interactive audio guides are incredible. I felt like I was with a historian.", tag: "Uses Guided Tours" },
        { name: "Elena", role: "The Hidden Gem Hunter", quote: "Smart Suggestions helped me find incredible spots instantly without any research.", tag: "Uses Smart Suggestions" }
      ]
    },
    stats: {
      title: "The Itinerarly Impact",
      items: [
        { value: "18 000+", label: "Destinations", sublabel: "carefully selected" },
        { value: "80+", label: "Cities", sublabel: "fully explorable" },
        { value: "∞", label: "Routes", sublabel: "dynamically optimized" },
        { value: "24/7", label: "Adventures", sublabel: "instantly available" }
      ]
    },
    footer: {
      privacy: "Privacy Policy", terms: "Terms of Service",
      contact: "Contact us via email: itinerarly@gmail.com",
      made: "Made with", in: "in France", rights: "Itinerarly. All rights reserved."
    },
    legal: {
      privacyTitle: "Privacy Policy",
      privacyContent: privacyPolicyEN,
      termsTitle: "Terms of Service",
      termsContent: termsOfUseEN
    }
  }
};

// --- Composants de décoration & LOGO INTERNE ---

const Logo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="logo-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.15" />
      </filter>
      <radialGradient id="bg-grad" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
        <stop offset="0%" stopColor="#F8F6F2" />
        <stop offset="100%" stopColor="#E5DFD6" />
      </radialGradient>
    </defs>

    {/* Bezel / Background */}
    <circle cx="50" cy="50" r="48" fill="#EAE5DF" stroke="#F1EDE7" strokeWidth="2"/>
    <circle cx="50" cy="50" r="43.5" fill="none" stroke="#D1CCC5" strokeWidth="1.5"/>
    <circle cx="50" cy="50" r="42.5" fill="url(#bg-grad)" />

    {/* Background Decorative Dots */}
    <circle cx="41" cy="62" r="1.8" fill="#AA9E95" />
    <circle cx="49" cy="55" r="1.5" fill="#AA9E95" />
    <circle cx="54" cy="60" r="1.8" fill="#AA9E95" />
    <circle cx="62" cy="64" r="2.2" fill="#AA9E95" />

    {/* Shadow Group for Pin & Path */}
    <g filter="url(#logo-shadow)">
      {/* Dashed Path */}
      <path 
        d="M 28 68 Q 38 54, 52 56 T 66 56" 
        stroke="#3A3840" 
        strokeWidth="4.5" 
        strokeLinecap="round" 
        strokeDasharray="0 8.5"
      />
      
      {/* Start Point */}
      <circle cx="28" cy="68" r="4.5" fill="#3A3840" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" />
      
      {/* Location Pin */}
      <g transform="translate(66, 56) scale(1) translate(-14, -38)">
        <path d="M14 0C6.27 0 0 6.27 0 14c0 10.5 14 24 14 24s14-13.5 14-24c0-7.73-6.27-14-14-14z" fill="#3A3840"/>
        <path d="M14 2C7.37 2 2 7.37 2 14c0 9.2 11 21 12 22.21C14 21 26 9.2 26 14 26 7.37 20.63 2 14 2z" fill="none" stroke="#5E5C64" strokeWidth="1"/>
        <circle cx="14" cy="13" r="5" fill="white"/>
        <circle cx="14" cy="31" r="1.5" fill="#242228" opacity="0.6"/>
      </g>
    </g>
  </svg>
);

const GrainOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]" style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}></div>
);

const LandmarkDecor = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
    <div className="absolute top-[15%] left-[5%] opacity-[0.07] animate-float text-6xl">🗼</div>
    <div className="absolute top-[40%] right-[3%] opacity-[0.07] animate-float-delayed text-7xl">🗽</div>
    <div className="absolute bottom-[20%] left-[2%] opacity-[0.07] animate-float text-8xl rotate-12">🗿</div>
    <div className="absolute bottom-[40%] right-[8%] opacity-[0.05] animate-float-delayed text-5xl">⛩️</div>
    <div className="absolute top-[30%] left-4 text-[10px] font-mono tracking-widest text-gray-400 rotate-90 origin-left uppercase font-bold">LAT 48.8566 | LON 2.3522 // PARIS.FR</div>
    <div className="absolute bottom-[30%] right-4 text-[10px] font-mono tracking-widest text-gray-400 -rotate-90 origin-right uppercase font-bold">LAT 35.6762 | LON 139.6503 // TOKYO.JP</div>
  </div>
);

const AnimatedPath = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
    <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 1000">
      <path d="M -100 100 C 200 50, 300 300, 500 200 S 800 400, 1100 300" fill="none" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="5 10" className="animate-dash opacity-30"/>
      <path d="M -100 600 C 200 700, 400 400, 700 600 S 900 800, 1100 700" fill="none" stroke="#B86F52" strokeWidth="1" strokeDasharray="5 10" className="animate-dash opacity-30"/>
    </svg>
  </div>
);

const LegalModal = ({ title, content, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-beige w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-[2rem] p-6 md:p-12 shadow-2xl relative border border-white" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/80 backdrop-blur rounded-full shadow-sm hover:bg-white transition-colors"><X size={24} className="text-gray-600" /></button>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-brand-text mb-6 md:mb-8 tracking-tight">{title}</h2>
        <div className="text-gray-700 whitespace-pre-line leading-relaxed font-medium">{content}</div>
      </div>
    </div>
  );
};

const IPhone16 = ({ t }) => (
  <div className="relative w-[300px] lg:w-[330px] h-[620px] lg:h-[680px] mx-auto z-10" style={{ transformStyle: 'preserve-3d' }}>
    <div className="absolute inset-0 rounded-[50px] bg-[#2a2b2e] shadow-[-30px_30px_50px_rgba(0,0,0,0.6)]" style={{ transform: 'translateZ(-15px) translateX(8px) translateY(5px)', boxShadow: 'inset -5px 0px 15px rgba(255,255,255,0.1), -30px 30px 50px rgba(0,0,0,0.6)' }}></div>
    <div className="absolute inset-0 rounded-[50px] bg-black p-[10px]" style={{ transform: 'translateZ(0px)' }}>
      <div className="w-full h-full bg-[#FCF8F0] rounded-[40px] overflow-hidden relative flex flex-col font-sans">
        <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-gradient-to-br from-white/30 via-white/5 to-transparent -translate-x-1/4 -translate-y-1/4 -rotate-12 pointer-events-none z-30"></div>
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[32px] bg-black rounded-full z-20"></div>
        <div className="flex justify-between items-center px-6 pt-5 pb-2 text-[12px] font-bold text-black z-10 relative">
          <span>14:10</span>
          <div className="flex gap-1.5 items-center">
            <svg className="w-4 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21L23.6 6C23 5.5 18.5 2 12 2C5.5 2 1 5.5 .4 6L12 21Z"/></svg>
            <svg className="w-4 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22V1Z"/></svg>
            <svg className="w-5 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H2v16h18V4zM22 10v4h2v-4h-2z"/></svg>
          </div>
        </div>
        <div className="flex-1 flex flex-col px-5 pt-8 relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex-1 text-center"><span className="text-gray-500 font-medium ml-10 text-lg">{t.app.greeting}</span></div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm p-1.5 overflow-hidden">
               <Logo className="w-full h-full" />
            </div>
          </div>
          <h1 className="text-[26px] font-extrabold text-center text-[#1A1A1A] mb-8 px-2 leading-tight">{t.app.question}</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-[1.5rem] p-4 flex flex-col items-center justify-center text-center shadow-sm h-40">
              <div className="w-14 h-14 bg-blue-100/50 rounded-full flex items-center justify-center mb-3 text-3xl">🗺️</div>
              <h3 className="font-bold text-[#1A1A1A] text-[15px] mb-1">{t.app.plan}</h3>
              <p className="text-gray-400 text-[11px] leading-tight">{t.app.planDesc}</p>
            </div>
            <div className="bg-white rounded-[1.5rem] p-4 flex flex-col items-center justify-center text-center shadow-sm h-40">
              <div className="w-14 h-14 bg-teal-100/50 rounded-full flex items-center justify-center mb-3 text-3xl">🎧</div>
              <h3 className="font-bold text-[#1A1A1A] text-[15px] mb-1">{t.app.tours}</h3>
              <p className="text-gray-400 text-[11px] leading-tight">{t.app.toursDesc}</p>
            </div>
            <div className="bg-white rounded-[1.5rem] p-4 flex flex-col items-center justify-center text-center shadow-sm h-40">
              <div className="w-14 h-14 bg-orange-100/50 rounded-full flex items-center justify-center mb-3 text-3xl">💡</div>
              <h3 className="font-bold text-[#1A1A1A] text-[15px] mb-1">{t.app.suggestions}</h3>
              <p className="text-gray-400 text-[11px] leading-tight">{t.app.sugDesc}</p>
            </div>
            <div className="bg-white rounded-[1.5rem] p-4 flex flex-col items-center justify-center text-center shadow-sm h-40">
              <div className="w-14 h-14 bg-purple-100/50 rounded-full flex items-center justify-center mb-3 text-3xl">🎲</div>
              <h3 className="font-bold text-[#1A1A1A] text-[15px] mb-1">{t.app.adventure}</h3>
              <p className="text-gray-400 text-[11px] leading-tight">{t.app.advDesc}</p>
            </div>
          </div>
          <div className="mt-auto mb-10 text-center">
             <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-1 flex items-center justify-center gap-2 uppercase font-mono">ITINERARLY</p>
             <p className="text-xs text-gray-500 font-medium">{t.app.footer}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const InteractiveFeatures = ({ t }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const iconMap = [<Map className="text-ocean w-20 h-20" />, <Headphones className="text-turquoise w-20 h-20" />, <Sparkles className="text-coral w-20 h-20" />, <Dices className="text-violet w-20 h-20" />];
  const colorMap = ['ocean', 'turquoise', 'coral', 'violet'];
  const activeColor = colorMap[activeIdx];
  return (
    <section id="features" className="py-24 px-6 relative z-10 bg-white/30 backdrop-blur-md border-y border-white/40">
      <LandmarkDecor />
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col xl:flex-row items-center gap-16 xl:gap-24">
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <h2 className="text-4xl lg:text-5xl font-black text-brand-text mb-2 uppercase tracking-tighter leading-tight">{t.features.title}</h2>
          <p className="text-xl text-gray-500 mb-8 font-medium">{t.features.subtitle}</p>
          {t.features.modes.map((f, idx) => {
            const isActive = idx === activeIdx;
            return (
              <div key={f.id} onClick={() => setActiveIdx(idx)} className={`cursor-pointer transition-all duration-500 rounded-[2rem] p-6 border-l-8 group relative overflow-hidden ${isActive ? `border-${colorMap[idx]} bg-white/90 shadow-xl scale-[1.02]` : `border-transparent bg-white/30 hover:bg-white/60 hover:border-${colorMap[idx]}/40 hover:shadow-md opacity-75 hover:opacity-100`}`}>
                <div className="flex items-center justify-between relative z-10">
                  <h3 className={`text-2xl font-bold uppercase tracking-wide transition-colors ${isActive ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>{f.title}</h3>
                  {!isActive && <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-${colorMap[idx]}/10 text-${colorMap[idx]} opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 font-black`}>→</div>}
                </div>
                {isActive && (
                  <div className="space-y-3 mt-4 relative z-10">
                    <p className="text-gray-700 italic border-l-2 border-gray-300 pl-4 py-1">{f.userView}</p>
                    <p className="text-sm text-gray-600 font-bold uppercase tracking-widest">{t.features.capLabel} {f.capabilities}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="w-full lg:w-1/2 relative h-[350px] md:h-[500px] flex items-center justify-center mt-12 lg:mt-0">
           <div className={`absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 bg-${activeColor} transition-colors duration-1000 animate-pulse-slow`}></div>
           <div className={`relative z-10 border border-white w-full max-sm:max-w-[280px] max-w-sm aspect-square rounded-[4rem] shadow-2xl shadow-${activeColor}/20 flex flex-col items-center justify-center p-8 transition-all duration-700 hover:scale-105 bg-gradient-to-br from-white/90 via-white/80 to-${activeColor}/10 backdrop-blur-2xl`}>
              <div className={`w-36 h-36 rounded-full bg-${activeColor}/10 flex items-center justify-center mb-8 animate-float shadow-inner text-${activeColor}`}>{iconMap[activeIdx]}</div>
              <h4 className={`text-4xl font-black text-${activeColor} uppercase tracking-tighter`}>{t.features.modes[activeIdx].title}</h4>
           </div>
        </div>
      </div>
    </section>
  );
};

const Personas = ({ t }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const imageMap = ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200", "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=200", "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200", "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"];
  const colorMap = ["violet", "ocean", "turquoise", "coral"];
  return (
    <section className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-gray-100 opacity-20 select-none pointer-events-none uppercase">EXPLORERS</div>
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 text-center relative z-10">
        <h2 className="text-sm font-bold tracking-[0.3em] text-gray-400 uppercase mb-4 opacity-60">{t.personas.title}</h2>
        <div className="relative min-h-[300px] flex flex-col items-center justify-center mb-16">
          <Quote className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 text-brand-gradientStart opacity-[0.03] z-0" />
          <p className="text-3xl md:text-5xl font-medium text-brand-text leading-tight mb-12 italic tracking-tight">"{t.personas.list[activeIdx].quote}"</p>
          <div>
            <p className="text-2xl font-black text-brand-text uppercase tracking-widest leading-tight">{t.personas.list[activeIdx].name}</p>
            <span className={`inline-block mt-3 px-6 py-2 rounded-full text-xs font-bold bg-${colorMap[activeIdx]}/10 text-${colorMap[activeIdx]} uppercase tracking-[0.2em]`}>{t.personas.list[activeIdx].tag}</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {t.personas.list.map((_, idx) => (
            <button key={idx} onClick={() => setActiveIdx(idx)} className={`relative transition-all duration-500 rounded-full overflow-hidden ${idx === activeIdx ? `w-24 h-24 ring-8 ring-${colorMap[idx]}/10 ring-offset-4 ring-offset-beige shadow-2xl` : 'w-16 h-16 opacity-30 grayscale hover:opacity-100 hover:grayscale-0'}`}>
              <img src={imageMap[idx]} alt="Avatar" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const FluidStats = ({ t }) => {
  const textColorMap = ["text-coral", "text-turquoise", "text-ocean", "text-violet"];
  return (
    <section id="stats" className="py-24 px-6 bg-white/60 backdrop-blur-xl border-y border-white relative z-10">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-24">
        <div className="lg:w-1/3 text-center lg:text-left">
          <h2 className="text-5xl font-black mb-4 text-brand-text uppercase tracking-tighter leading-[0.9]">{t.stats.title}</h2>
          <div className="w-20 h-2 bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd mx-auto lg:mx-0 rounded-full"></div>
        </div>
        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-md:divide-y md:divide-x divide-gray-100">
          {t.stats.items.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center pt-4 md:pt-0">
              <span className={`text-5xl md:text-6xl font-black ${textColorMap[idx]} mb-4 transition-transform duration-700`}>{stat.value}</span>
              <span className="text-xs font-black tracking-[0.2em] uppercase text-brand-text opacity-40 text-center">{stat.label}</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase mt-1 text-center">{stat.sublabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [lang, setLang] = useState('fr');
  const [legalModal, setLegalModal] = useState(null);
  const [highlight, setHighlight] = useState(false);
  const downloadRef = useRef(null);
  const t = translations[lang];

  const handleGetApp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setHighlight(true);
      setTimeout(() => setHighlight(false), 2000);
    }, 400);
  };



  return (
    <div className="min-h-screen bg-beige font-sans text-brand-text selection:bg-brand-gradientStart selection:text-white overflow-x-hidden">
      <GrainOverlay />
      {legalModal === 'privacy' && <LegalModal title={t.legal.privacyTitle} content={t.legal.privacyContent} onClose={() => setLegalModal(null)} />}
      {legalModal === 'terms' && <LegalModal title={t.legal.termsTitle} content={t.legal.termsContent} onClose={() => setLegalModal(null)} />}
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 px-6 py-4">
        <div className="w-full max-w-[1600px] mx-auto bg-white/70 backdrop-blur-md border border-white/50 rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <Logo className="w-10 h-10 drop-shadow-sm" />
            <span className="text-xl font-bold tracking-widest text-brand-text uppercase">Itinerarly</span>
          </div>
          <div className="flex items-center gap-4 md:gap-8 text-sm font-medium text-gray-600 flex-shrink-0">
            <div className="hidden md:flex gap-8">
              <a href="#features" className="hover:text-brand-text transition-colors font-semibold">{t.nav.features}</a>
              <a href="#stats" className="hover:text-brand-text transition-colors font-semibold">{t.nav.stats}</a>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 bg-gray-100 md:bg-beige-dark/50 px-2 lg:px-3 py-1.5 rounded-full text-[10px] lg:text-xs font-bold">
              <span onClick={() => setLang('fr')} className={`cursor-pointer transition-colors ${lang === 'fr' ? 'text-brand-text' : 'text-gray-400'}`}>FR</span>
              <span className="text-gray-300">/</span>
              <span onClick={() => setLang('en')} className={`cursor-pointer transition-colors ${lang === 'en' ? 'text-brand-text' : 'text-gray-400'}`}>EN</span>
            </div>
            <button onClick={handleGetApp} className="bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white px-4 md:px-8 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-xs md:text-sm whitespace-nowrap">
              {t.nav.getApp}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
          <LandmarkDecor />
          <AnimatedPath />
          <div className="relative z-10 w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 xl:gap-32 items-center">
            <div className="text-left relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/80 shadow-sm mb-6 animate-float">
                <Sparkles size={16} className="text-brand-gradientStart" />
                <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">{t.hero.badge}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-[7rem] font-black text-brand-text tracking-tight leading-[1] mb-6">
                {t.hero.title1} <br />
                {t.hero.title2} <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd">{t.hero.title3}</span>.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed mb-10 font-medium opacity-80">{t.hero.desc}</p>
              <div ref={downloadRef} className={`relative group transition-all duration-500 ${highlight ? 'animate-highlight' : ''} inline-block`}>
                <div className={`relative flex items-center gap-4 bg-white/90 backdrop-blur-xl p-4 rounded-3xl border shadow-xl transition-all duration-500 ${highlight ? 'border-brand-gradientStart scale-105' : 'border-white'}`}>
                  <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 hover:scale-105 transition" /></a>
                  <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10 hover:scale-105 transition" /></a>
                </div>
              </div>
            </div>
            <div className="relative w-full py-16 lg:py-0 block mt-8 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[500px] w-full aspect-square bg-gradient-to-tr from-ocean/10 to-coral/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow z-0"></div>
              <div className="absolute -top-4 md:top-0 right-0 md:right-4 w-14 h-14 md:w-20 md:h-20 bg-white/80 backdrop-blur-xl border border-white rounded-2xl md:rounded-3xl animate-float-delayed flex items-center justify-center text-coral shadow-lg md:shadow-2xl z-0"><Sparkles className="w-6 h-6 md:w-10 md:h-10" /></div>
              <div className="absolute bottom-4 md:bottom-10 left-0 md:-left-4 w-12 h-12 md:w-16 md:h-16 bg-white/80 backdrop-blur-xl border border-white rounded-full animate-float flex items-center justify-center text-turquoise shadow-lg md:shadow-2xl z-0"><Headphones className="w-5 h-5 md:w-8 md:h-8" /></div>
              <div className="absolute top-[10%] md:top-[20%] left-[2%] md:left-[5%] w-12 h-12 md:w-16 md:h-16 bg-white/90 backdrop-blur-xl border border-white rounded-xl md:rounded-2xl animate-float flex items-center justify-center text-ocean shadow-lg md:shadow-2xl z-20"><Map className="w-6 h-6 md:w-8 md:h-8" /></div>
              <div className="absolute bottom-[5%] md:bottom-[15%] right-[2%] md:right-[5%] w-12 h-12 md:w-16 md:h-16 bg-white/90 backdrop-blur-xl border border-white rounded-xl md:rounded-2xl animate-float-delayed flex items-center justify-center text-violet shadow-lg md:shadow-2xl z-20"><Dices className="w-6 h-6 md:w-8 md:h-8" /></div>
              <div className="animate-float relative flex justify-center w-full z-10 scale-[0.85] sm:scale-95 lg:scale-[1.15] xl:scale-[1.35] origin-center" style={{ perspective: '2000px' }}>
                <div style={{ transform: 'rotateY(-15deg) rotateX(10deg) rotateZ(-3deg)', transformStyle: 'preserve-3d' }}>
                  <IPhone16 t={t} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <InteractiveFeatures t={t} />
        <Personas t={t} />
        <FluidStats t={t} />
      </main>

      {/* Footer */}
      <footer className="bg-beige pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col items-center text-center relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <Logo className="w-12 h-12" />
            <span className="text-3xl font-black tracking-[0.3em] text-brand-text uppercase font-sans">Itinerarly</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <button onClick={() => setLegalModal('privacy')} className="hover:text-brand-text transition-colors cursor-pointer font-bold">{t.footer.privacy}</button>
            <button onClick={() => setLegalModal('terms')} className="hover:text-brand-text transition-colors cursor-pointer font-bold">{t.footer.terms}</button>
            <a href="mailto:itinerarly@gmail.com" className="hover:text-brand-text transition-colors font-bold uppercase">{t.footer.contact}</a>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-12"></div>
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 px-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] text-center md:text-left">
              Fait avec <span className="text-coral">❤️</span> en France // © {new Date().getFullYear()} Itinerarly. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-gray-400">
              <a href="https://www.linkedin.com/company/itinerarly/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gradientStart transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/itinerarly.app/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gradientStart transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-gradientStart transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
