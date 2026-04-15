"use client"

import { ChevronRight, Zap } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import type { TabId } from "@/lib/data"

interface HomeSectionProps {
  onNavigate: (tab: TabId) => void
}

const stats = [
  { label: "Projetos Entregues", val: "50+" },
  { label: "Anos Exp.", val: "06" },
  { label: "Tecnologias", val: "15+" },
  { label: "Satisfação", val: "100%" },
]

export function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <SectionWrapper>
      <div className="items-center gap-12 grid lg:grid-cols-2 min-h-[70vh]">
        <div className="flex flex-col gap-8 order-2 lg:order-1 lg:text-left text-center">
          <div className="inline-flex items-center self-center lg:self-start gap-2 bg-emerald-500/10 px-3 py-1 border border-emerald-500/20 rounded-full font-bold text-emerald-500 text-xs animate-pulse">
            <div className="bg-emerald-500 rounded-full w-2 h-2"></div>
            <span>DISPONÍVEL PARA NOVOS PROJETOS</span>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-slate-400 text-lg lg:text-xl">
              Olá, eu sou o Gabriel.
            </h3>
            <h1 className="font-extrabold text-white text-4xl md:text-6xl leading-tight">
              Desenvolvedor Full Stack criando{" "}
              <span className="text-emerald-500">sistemas de alto valor.</span>
            </h1>
            <p className="mx-auto lg:mx-0 max-w-xl text-slate-400 text-lg leading-relaxed">
              Especialista em interfaces modernas, backend robusto e soluções
              escaláveis que transformam ideias em lucro e performance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button
              onClick={() => onNavigate("projetos")}
              className="group flex items-center bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30 shadow-lg px-8 py-4 rounded-xl font-bold text-white transition-all"
            >
              Ver Projetos{" "}
              <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavigate("contato")}
              className="bg-white/5 hover:bg-white/10 px-8 py-4 border border-white/10 rounded-xl font-bold text-white transition-all"
            >
              Falar Comigo
            </button>
          </div>

          <div className="gap-6 grid grid-cols-2 md:grid-cols-4 pt-10">
            {stats.map((stat, i) => (
              <div key={i} className="lg:text-left text-center">
                <div className="mb-1 font-bold text-white text-2xl">
                  {stat.val}
                </div>
                <div className="text-slate-500 text-xs uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full"></div>
            <div className="relative border-2 border-white/10 rounded-2xl w-64 md:w-80 h-64 md:h-80 overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Developer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="hidden md:block -bottom-6 -left-6 absolute bg-[#1a1d20] shadow-2xl backdrop-blur-md p-4 border border-white/10 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-emerald-500/20 rounded-lg w-10 h-10">
                  <Zap className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Fast Performance</p>
                  <p className="text-slate-500 text-xs">Vercel & Next.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
