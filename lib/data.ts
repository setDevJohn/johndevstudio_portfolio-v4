export interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  problem: string
  result: string
  tech: string[]
  link: string
  github: string
}

export interface Skill {
  category: string
  items: string[]
  iconName: "LayoutGrid" | "Cpu" | "Database" | "TrendingUp"
}

export interface Service {
  title: string
  description: string
  iconName: "Layers" | "Zap" | "MessageSquare"
}

export interface Experience {
  year: string
  role: string
  company: string
  desc: string
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "QuantumSaaS Dashboard",
    category: "SaaS",
    image:
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
    description:
      "Plataforma de análise de dados em tempo real com processamento de IA.",
    problem:
      "Empresas tinham dificuldade em visualizar gargalos operacionais em grandes fluxos de dados.",
    result:
      "Redução de 30% no tempo de resposta operacional para os primeiros 50 clientes corporativos.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "EcoTrade Marketplace",
    category: "Sistemas Web",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description:
      "E-commerce B2B focado em créditos de carbono e sustentabilidade.",
    problem:
      "Falta de transparência e rastreabilidade no mercado de ativos ambientais.",
    result:
      "Processamento de mais de $2M em transações no primeiro semestre com 100% de integridade.",
    tech: ["React", "Prisma", "Tailwind", "Docker"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Nexus High-Ticket LP",
    category: "Landing Pages",
    image:
      "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=800",
    description:
      "Landing page de alta conversão para consultoria financeira premium.",
    problem:
      "Baixa taxa de conversão em leads qualificados no tráfego pago.",
    result:
      "Aumento de 45% na taxa de captura de leads ultra-qualificados (High Ticket).",
    tech: ["Next.js", "Framer Motion", "Three.js"],
    link: "#",
    github: "#",
  },
]

export const SKILLS: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    iconName: "LayoutGrid",
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "RESTful APIs", "GraphQL"],
    iconName: "Cpu",
  },
  {
    category: "Database & Infra",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Docker", "AWS/Vercel"],
    iconName: "Database",
  },
  {
    category: "Business & UX",
    items: ["UX/UI Design", "SEO Técnico", "Performance Opt.", "Agile/Scrum"],
    iconName: "TrendingUp",
  },
]

export const SERVICES: Service[] = [
  {
    title: "Sistemas Web Sob Medida",
    description:
      "Aplicações robustas e escaláveis focadas em processos de negócio complexos.",
    iconName: "Layers",
  },
  {
    title: "Landing Pages de Performance",
    description:
      "Design focado em psicologia de vendas e taxas de conversão acima da média.",
    iconName: "Zap",
  },
  {
    title: "Consultoria Técnica",
    description:
      "Mentoria para squads e arquitetura de software para novos produtos (MVPs).",
    iconName: "MessageSquare",
  },
]

export const EXPERIENCES: Experience[] = [
  {
    year: "2022 - Presente",
    role: "Senior Full Stack Freelancer",
    company: "Projetos Globais",
    desc: "Desenvolvimento de soluções end-to-end para startups dos EUA e Europa.",
  },
  {
    year: "2020 - 2022",
    role: "Full Stack Developer",
    company: "TechNova Solutions (CLT)",
    desc: "Liderança técnica na migração de legado para arquitetura de microserviços.",
  },
  {
    year: "2018 - 2020",
    role: "Frontend Developer",
    company: "Creative Agency",
    desc: "Criação de interfaces ricas e interativas para grandes marcas de varejo.",
  },
]

export const MENU_ITEMS = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre Mim" },
  { id: "projetos", label: "Projetos" },
  { id: "habilidades", label: "Habilidades" },
  { id: "experiencia", label: "Experiência" },
  { id: "servicos", label: "Serviços" },
  { id: "contato", label: "Contato" },
] as const

export type TabId = (typeof MENU_ITEMS)[number]["id"]
