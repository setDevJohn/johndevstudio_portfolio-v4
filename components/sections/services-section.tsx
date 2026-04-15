"use client"

import { ChevronRight, Layers, Zap, MessageSquare } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { SectionTitle } from "@/components/section-title"
import { SERVICES, type Service } from "@/lib/data"

const iconMap = {
  Layers,
  Zap,
  MessageSquare,
}

function ServiceIcon({ iconName }: { iconName: Service["iconName"] }) {
  const Icon = iconMap[iconName]
  return <Icon className="w-8 h-8" />
}

export function ServicesSection() {
  return (
    <SectionWrapper>
      <SectionTitle subtitle="Como posso ajudar" title="Soluções e Serviços" />
      <div className="gap-8 grid md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <div
            key={i}
            className="group flex flex-col items-center gap-6 bg-[#1a1d20] p-10 border border-white/5 hover:border-emerald-500/30 rounded-3xl text-center transition-all"
          >
            <div className="flex justify-center items-center bg-emerald-500/10 group-hover:bg-emerald-500 rounded-2xl w-16 h-16 text-emerald-500 group-hover:text-white transition-all duration-300">
              <ServiceIcon iconName={s.iconName} />
            </div>
            <h3 className="font-bold text-white text-xl">{s.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {s.description}
            </p>
            <button className="flex items-center hover:opacity-80 font-bold text-emerald-500 text-xs uppercase tracking-widest transition-opacity">
              Saiba Mais <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
