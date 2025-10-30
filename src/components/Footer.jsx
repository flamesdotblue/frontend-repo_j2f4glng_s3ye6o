import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-10 border-t border-zinc-800/60 bg-black/40 py-6 text-center text-xs text-zinc-400">
      © {new Date().getFullYear()} Chinmayi M. Gowda — All rights reserved.
    </footer>
  );
}
