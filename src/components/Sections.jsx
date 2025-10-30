import React, { useEffect, useRef } from 'react';
import { ExternalLink, GraduationCap, Briefcase, Star } from 'lucide-react';

function SectionWrapper({ id, title, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('opacity-0', 'translate-y-8');
          el.classList.add('opacity-100', 'translate-y-0');
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} className="scroll-mt-24">
      <div
        ref={ref}
        className="opacity-0 translate-y-8 transition-all duration-700"
      >
        <h2 className="mb-6 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default function Sections() {
  return (
    <main className="relative z-10 mx-auto max-w-7xl px-6 text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-[1] bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(212,175,55,0.07),transparent_60%),radial-gradient(800px_400px_at_90%_10%,rgba(255,215,128,0.06),transparent_60%),radial-gradient(900px_900px_at_50%_120%,rgba(212,175,55,0.05),transparent_60%)]" />

      <SectionWrapper id="about" title="About">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-zinc-300">
              I am a computer science student specializing in data science, focused on building data-driven
              products and delightful user experiences. I enjoy solving problems with clean code,
              thoughtful design, and a curiosity-first mindset.
            </p>
            <p className="mt-3 text-zinc-300">
              Currently exploring machine learning, statistical modeling, and full‑stack JavaScript.
              I love hackathons, open-source, and sharing knowledge with peers.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-black/40 to-black/20 p-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-amber-300" size={20} />
              <div>
                <div className="text-sm font-semibold">Acharya Institute of Technology</div>
                <div className="text-xs text-zinc-400">B.E. in Computer Science (Data Science)</div>
              </div>
            </div>
            <div className="mt-3 text-xs text-zinc-400">
              Bangalore, India • Expected Graduation: 2026
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="skills" title="Skills">
        <div className="flex flex-wrap gap-2">
          {[
            'Python','Java','C++','C','JavaScript','TypeScript','React','Node.js','Express','MongoDB','SQL','PostgreSQL','Pandas','NumPy','scikit-learn','Matplotlib','TailwindCSS','Git','Docker','Linux','REST APIs','Data Visualization','EDA','OOP','DSA','PowerBI','TensorFlow (Basics)','Kaggle','Unit Testing',
          ].map((s) => (
            <span key={s} className="rounded-full border border-amber-400/20 bg-black/30 px-3 py-1 text-xs text-amber-100 shadow-[0_0_10px_rgba(212,175,55,0.12)] transition hover:border-amber-300/40 hover:text-amber-200">
              {s}
            </span>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="projects" title="Projects (Mock Portfolio)">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'PulseSight — Health Analytics Dashboard',
              img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
              desc: 'Interactive health metrics visualizer with anomaly detection and cohort analysis.',
              stack: ['React','D3','Python','Flask'],
            },
            {
              title: 'ShopLens — E‑commerce Insights Engine',
              img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
              desc: 'Customer segmentation and demand forecasting with dashboards.',
              stack: ['Pandas','scikit-learn','FastAPI','MongoDB'],
            },
            {
              title: 'TweetGuard — Toxicity Classifier',
              img: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop',
              desc: 'NLP pipeline to flag hate speech and harassment in real-time streams.',
              stack: ['Python','scikit-learn','NLP'],
            },
            {
              title: 'CityFlow — Traffic Pattern Explorer',
              img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
              desc: 'Geo visualizations for congestion heatmaps and route optimization.',
              stack: ['Leaflet','React','Node.js'],
            },
            {
              title: 'EduScope — Student Outcomes Tracker',
              img: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop',
              desc: 'Predictive analytics for grades, attendance, and at‑risk identification.',
              stack: ['Python','XGBoost','Plotly'],
            },
            {
              title: 'VisionX — Image Search with Embeddings',
              img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
              desc: 'Similarity search using CNN features and vector indices.',
              stack: ['TensorFlow','Faiss','FastAPI'],
            },
          ].map((p, idx) => (
            <a
              key={p.title}
              href="#"
              className="group relative overflow-hidden rounded-2xl border border-amber-400/20 bg-black/40 shadow-[0_0_30px_rgba(212,175,55,0.08)] transition-transform hover:-translate-y-1"
            >
              <img src={p.img} alt={p.title} className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-amber-100">{p.title}</h3>
                  <ExternalLink size={16} className="text-amber-300 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-1 text-xs text-zinc-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-amber-400/20 bg-black/30 px-2 py-0.5 text-[10px] text-amber-200">{s}</span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="experience" title="Experience">
        <div className="grid gap-4 md:grid-cols-2">
          {[{
            role: 'Data Science Intern', company: 'InnovaTech Labs', time: 'Jun 2024 – Aug 2024',
            points: ['Built ETL pipelines for customer data','Created churn prediction model with 85% F1','Presented dashboards to stakeholders']
          },{
            role: 'Open-Source Contributor', company: 'Analytics JS', time: 'Remote, Ongoing',
            points: ['Fixed performance issues in chart rendering','Improved docs and added unit tests']
          }].map((e) => (
            <div key={e.role} className="rounded-2xl border border-amber-400/20 bg-black/30 p-4">
              <div className="flex items-center gap-2 text-amber-200">
                <Briefcase size={18} />
                <div className="font-semibold">{e.role}</div>
              </div>
              <div className="mt-1 text-sm text-zinc-300">{e.company} • {e.time}</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-zinc-400">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="resume" title="Resume / CV">
        <div className="rounded-2xl border border-amber-400/20 bg-black/30 p-4">
          <p className="text-sm text-zinc-300">
            Download my latest resume and feel free to reach out for opportunities.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a href="#" className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-2 text-sm font-semibold text-black transition hover:from-amber-300 hover:to-yellow-400">Download PDF</a>
            <a href="#contact" className="rounded-full border border-amber-300/40 px-4 py-2 text-sm text-amber-100 hover:border-amber-200">Contact Me</a>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="blog" title="Blog">
        <div className="rounded-2xl border border-amber-400/20 bg-black/30 p-6 text-center">
          <Star className="mx-auto text-amber-300" />
          <p className="mt-2 text-sm text-zinc-300">No posts yet. Stay tuned — writing in progress!</p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="gallery" title="Gallery">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1551281044-8d8d0d8d3f38?q=80&w=1200&auto=format&fit=crop',
          ].map((src, i) => (
            <div key={src} className="group relative overflow-hidden rounded-2xl border border-amber-400/20 bg-black/30">
              <img src={src} alt={`Gallery ${i+1}`} className="h-56 w-full object-cover transition-all duration-700 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact" title="Contact">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-amber-400/20 bg-black/30 p-4">
            <div className="text-sm text-zinc-300">Feel free to say hi! I’m open to internships and entry‑level roles.</div>
            <div className="mt-3 space-y-2 text-sm">
              <a href="mailto:chinmayi@example.com" className="block text-amber-200 hover:underline">chinmayi@example.com</a>
              <div className="flex flex-wrap gap-3 text-xs text-amber-200/90">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
                <a href="https://leetcode.com/" target="_blank" rel="noreferrer" className="hover:underline">LeetCode</a>
                <a href="https://kaggle.com/" target="_blank" rel="noreferrer" className="hover:underline">Kaggle</a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
                <a href="https://hackerrank.com/" target="_blank" rel="noreferrer" className="hover:underline">HackerRank</a>
              </div>
            </div>
          </div>
          <form
            action="mailto:chinmayi@example.com"
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-amber-400/20 bg-black/30 p-4"
          >
            <div className="grid gap-3">
              <input className="rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm outline-none transition focus:border-amber-300" placeholder="Your name" name="name" />
              <input className="rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm outline-none transition focus:border-amber-300" placeholder="Email" type="email" name="email" />
              <textarea className="min-h-[120px] rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm outline-none transition focus:border-amber-300" placeholder="Message" name="message" />
              <button className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-2 text-sm font-semibold text-black transition hover:from-amber-300 hover:to-yellow-400" type="submit">Send</button>
            </div>
          </form>
        </div>
      </SectionWrapper>

      <div className="my-10 text-center text-xs text-zinc-500">Designed with a dark, liquid‑gold aesthetic ✨</div>
    </main>
  );
}
