import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Premium liquid gold glow overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.15),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(255,215,128,0.12),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(212,175,55,0.1),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>

      {/* Glitter particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <span
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-amber-300/70 blur-[0.5px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.4 + Math.random() * 0.6,
              animation: `twinkle ${3 + Math.random() * 5}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </div>

      <style>
        {`@keyframes twinkle { 0%, 100% { transform: scale(0.8); opacity: 0.4;} 50% { transform: scale(1.3); opacity: 1;} }`}
      </style>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-black/40 px-3 py-1 text-xs text-amber-200/90 shadow-[0_0_30px_rgba(212,175,55,0.15)] backdrop-blur">
            <Rocket size={14} className="text-amber-300" />
            Data Science Student • Acharya Institute of Technology, Bangalore
          </div>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Chinmayi M. Gowda
          </h1>
          <p className="mt-4 max-w-xl text-sm text-zinc-300 md:text-base">
            Passionate about data, algorithms, and building intelligent systems. I love turning
            raw data into elegant insights and interactive experiences.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#resume"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-5 py-2 text-sm font-semibold text-black transition hover:from-amber-300 hover:to-yellow-400"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-black/30 px-5 py-2 text-sm font-semibold text-amber-200 transition hover:border-amber-200 hover:bg-black/50"
            >
              Contact
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-amber-200/90">
            {['Python','Java','C++','C','JavaScript','React','Node.js','MongoDB','SQL','Pandas','NumPy','scikit-learn','TailwindCSS'].map((s) => (
              <span key={s} className="rounded-full border border-amber-300/30 bg-black/40 px-3 py-1">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
