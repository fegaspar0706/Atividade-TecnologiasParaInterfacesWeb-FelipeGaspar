import type { Projeto } from '../types'

type ProjetoCardProps = { projeto: Projeto }

export function ProjetoCard({ projeto }: ProjetoCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-[#1b2940] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-950/30">
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#111b2b] p-2">
        <img src={projeto.imagem} alt={projeto.alt} loading="lazy" className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]" />
        {projeto.destaque && <span className="absolute top-4 left-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-[#0d1927]">Projeto destaque</span>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        {projeto.emAndamento && <span className="mb-3 w-fit rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">Em desenvolvimento</span>}
        <h3 className="text-xl font-extrabold text-white">{projeto.titulo}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{projeto.descricao}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Tecnologias do projeto ${projeto.titulo}`}>
          {projeto.tecnologias.map((tech) => <li key={tech} className="rounded-md border border-slate-600/60 bg-slate-900/50 px-2.5 py-1 text-xs font-semibold text-slate-200">{tech}</li>)}
        </ul>
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold">
          {projeto.link && <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-cyan-300">Abrir projeto ↗</a>}
          {projeto.github && <a href={projeto.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 underline-offset-4 hover:text-white hover:underline">Código-fonte ↗</a>}
        </div>
      </div>
    </article>
  )
}
