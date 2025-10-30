import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white">
      {/* Liquid gold background accents */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_600px_at_-10%_-10%,rgba(212,175,55,0.06),transparent_60%),radial-gradient(900px_700px_at_110%_-20%,rgba(255,215,128,0.05),transparent_60%),radial-gradient(800px_500px_at_50%_120%,rgba(212,175,55,0.05),transparent_60%)]" />

      <div className="relative z-10 space-y-10">
        <Header />
        <Hero />
        <Sections />
        <Footer />
      </div>
    </div>
  );
}

export default App;
