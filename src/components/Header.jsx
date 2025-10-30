import React from 'react';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Resume/CV', href: '#resume' },
  { label: 'Blog', href: '#blog' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="w-full text-zinc-100">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="flex items-center justify-between rounded-full border border-zinc-800/60 bg-black/40 px-4 py-2 backdrop-blur-md">
          <div className="text-sm font-semibold tracking-wide text-amber-300">Chinmayi M. Gowda</div>
          <ul className="hidden gap-3 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:bg-amber-400/10 hover:text-amber-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-1.5 text-zinc-300 transition-all hover:bg-amber-400/10 hover:text-amber-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-1.5 text-zinc-300 transition-all hover:bg-amber-400/10 hover:text-amber-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-1.5 text-zinc-300 transition-all hover:bg-amber-400/10 hover:text-amber-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="#contact"
              className="rounded-full p-1.5 text-zinc-300 transition-all hover:bg-amber-400/10 hover:text-amber-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
