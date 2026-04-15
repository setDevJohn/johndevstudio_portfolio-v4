"use client"

import { CheckCircle2, LayoutGrid, Cpu, Database, TrendingUp } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { SectionTitle } from "@/components/section-title"
import { SKILLS, type Skill } from "@/lib/data"

const iconMap = {
  LayoutGrid,
  Cpu,
  Database,
  TrendingUp,
}

function SkillIcon({ iconName }: { iconName: Skill["iconName"] }) {
  const Icon = iconMap[iconName]
  return <Icon className="w-5 h-5" />
}

export function SkillsSection() {
  return (
    <SectionWrapper>
      <SectionTitle subtitle="Stack Técnica" title="Habilidades & Ferramentas" />
      <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((skill, idx) => (
          <div
            key={idx}
            className="group bg-[#1a1d20] hover:bg-emerald-500/[0.02] p-6 border border-white/5 rounded-2xl transition-colors"
          >
            <div className="flex justify-center items-center bg-emerald-500/10 mb-6 rounded-lg w-10 h-10 text-emerald-500 group-hover:scale-110 transition-transform">
              <SkillIcon iconName={skill.iconName} />
            </div>
            <h3 className="mb-4 font-bold text-white text-lg">
              {skill.category}
            </h3>
            <ul className="flex flex-col gap-3">
              {skill.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center text-slate-400 text-sm"
                >
                  <CheckCircle2 className="mr-2 w-4 h-4 text-emerald-500" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
