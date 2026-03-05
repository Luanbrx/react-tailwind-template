import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Menu,
  X,
  Star,
  Shield,
  Zap,
  Sparkles,
  Clock,
} from "lucide-react";

const navLinks = [
  { href: "#features", label: "Recursos" },
  { href: "#testmonials", label: "Projetos" },
  { href: "#faq", label: "FAQ" },
];

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
      {/* 1️⃣ Navbar (Nome da marca) */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Sparkles className="size-5 text-fuchsia-400" />
            <span className="font-bold tracking-tight">Luan Menezes Dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="hover:text-fuchsia-300 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg" 
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden">
            <div className="fixed inset-0 bg-black/60 z-40" onClick={() => setOpen(false)}>
              <div className="fixed right-0 top-0 h-full w-80 bg-slate-900 border-l border-white/10 p-6 z-50">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-6 text-fuchsia-400" />
                    <span className="font-semibold">Luan Menezes Dev</span>
                  </div>
                  <button onClick={() => setOpen(false)}>
                    <X className="size-5" />
                  </button>
                </div>
                <div className="flex flex-col gap-4 p-4">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="text-slate-200"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2️⃣ Hero (título principal) & 3️⃣ Subtítulo */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold leading-tight"
          >
            Projetos Web{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-300">
              React + Tailwind • Node.js • JavaScript
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-slate-300 max-w-2xl text-lg"
          >
            Projetos desenvolvidos para praticar desenvolvimento moderno,
            componentes reutilizáveis e construção de APIs.
          </motion.p>
          
          {/* 4️⃣ Botões */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 flex flex-row gap-3"
          >
            <a href="#testimonials" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium hover:bg-fuchsia-700 transition">
              Ver Projetos <ArrowRight className="size-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-medium border border-white/10 hover:bg-white/5 transition">
              Tecnologias
            </a>
          </motion.div>

          {/* 5️⃣ Cards principais (habilidades) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              {
                title: "Node.js",
                description: "Desenvolvimento de APIs REST escaláveis utilizando Express e NestJS.",
                icon: <Zap className="size-5 text-emerald-400" />
              },
              {
                title: "Java + Spring Boot",
                description: "Criação de sistemas backend robustos utilizando arquitetura em camadas.",
                icon: <Shield className="size-5 text-sky-400" />
              },
              {
                title: "Docker",
                description: "Containerização de aplicações para ambientes consistentes de desenvolvimento e deploy.",
                icon: <Star className="size-5 text-amber-400" />
              }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <div className="font-semibold">{item.title}</div>
                </div>
                <p className="text-sm text-slate-400 mt-2">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ Seção "Tecnologias e boas práticas" */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-bold">Tecnologias e boas práticas</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Design Responsivo", icon: <Sparkles className="size-5 text-fuchsia-400" /> },
            { title: "SEO Básico", icon: <Star className="size-5 text-amber-400" /> },
            { title: "Performance", icon: <Zap className="size-5 text-emerald-400" /> },
            { title: "Acessibilidade", icon: <Shield className="size-5 text-sky-400" /> },
            { title: "Componentes Limpos", icon: <Sparkles className="size-5 text-fuchsia-400" /> },
            { title: "Sem dependências", icon: <Star className="size-5 text-amber-400" /> },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-center gap-3">
                {f.icon}
                <p className="font-semibold">{f.title}</p>
              </div>
              <p className="text-sm text-slate-400 mt-2">Praticado em todos os meus projetos.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7️⃣ Depoimentos → Projetos desenvolvidos */}
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Projetos desenvolvidos</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "API REST com NestJS",
              description: "CRUD completo com autenticação e integração com PostgreSQL usando Prisma ORM."
            },
            {
              title: "Sistema Backend Java",
              description: "Aplicação estruturada com Controller, Service e DTO utilizando Spring Boot."
            },
            {
              title: "Landing Page React",
              description: "Interface moderna utilizando React, Tailwind e animações com Framer Motion."
            }
          ].map((project, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/[0.01]">
              <div className="flex items-center gap-2 text-amber-400 mb-4">
                {[...Array(5)].map((_, starI) => <Star key={starI} className="size-4 fill-current" />)}
              </div>
              <p className="mt-3 text-slate-300">{project.description}</p>
              <footer className="mt-3 text-sm text-slate-400 font-medium">{project.title}</footer>
            </div>
          ))}
        </div>
      </section>

      {/* 9️⃣ Footer*/}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col items-center">
          <div className="mb-4 text-slate-400">
            © {new Date().getFullYear()} Luan Menezes Dev
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;