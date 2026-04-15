export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-10 border-white/5 border-t">
      <div className="flex md:flex-row flex-col justify-between items-center gap-4 mx-auto max-w-6xl text-slate-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Gabriel Dev. Todos os direitos
          reservados.
        </p>
        <div className="flex gap-6">
          <span className="flex items-center">
            <span className="bg-emerald-500 mr-2 rounded-full w-2 h-2"></span>
            Next.js + Tailwind
          </span>
          <span className="flex items-center">
            <span className="bg-emerald-500 mr-2 rounded-full w-2 h-2"></span>
            Framer Motion
          </span>
        </div>
      </div>
    </footer>
  )
}
