"use client"

import { CheckCircle2 } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { SectionTitle } from "@/components/section-title"

const highlights = [
  {
    title: "Foco em Performance",
    description:
      "Websites leves, rápidos no Core Web Vitals e prontos para SEO.",
  },
  {
    title: "Arquitetura PJ/CLT",
    description:
      "Código limpo, documentado e fácil de manter por grandes equipes.",
  },
]

const infoCards = [
  { value: "100%", label: "Remoto" },
  { value: "EN/PT", label: "Idiomas" },
  { value: "Agile", label: "Metodologia" },
  { value: "Clean", label: "Architecture" },
]

export function AboutSection() {
  return (
    <SectionWrapper>
      <div className="items-center gap-16 grid lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionTitle
            subtitle="Sobre Mim"
            title="Transformando tecnologia em vantagem competitiva."
          />
          <p className="text-slate-400 text-lg leading-relaxed">
            Com mais de 6 anos de jornada, meu foco não é apenas escrever
            código, mas desenhar arquiteturas que suportem o crescimento do seu
            negócio. Combinei o rigor técnico do backend com a estética refinada
            do frontend moderno.
          </p>
          <div className="flex flex-col gap-4">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="bg-emerald-500/10 mt-1 p-2 rounded-lg text-emerald-500">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="gap-4 grid grid-cols-2">
          {infoCards.map((card, i) => (
            <div
              key={i}
              className={`p-8 bg-[#1a1d20] border border-white/5 rounded-3xl text-center flex flex-col gap-2 ${
                i === 1 ? "mt-8" : i === 2 ? "-mt-8" : ""
              }`}
            >
              <div className="font-bold text-emerald-500 text-3xl">
                {card.value}
              </div>
              <div className="font-mono text-slate-500 text-xs uppercase">
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
