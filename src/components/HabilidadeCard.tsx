import type { Habilidade } from '../types'

type HabilidadeCardProps = { habilidade: Habilidade }

const niveis: Record<Habilidade['nivel'], string> = { Básico: 'bg-slate-700', Intermediário: 'bg-cyan-500', Avançado: 'bg-emerald-400' }

export function HabilidadeCard({ habilidade }: HabilidadeCardProps) {
  return (
    <article className="rounded-2xl border border-slate-700/70 bg-[#1b2940] p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-400/60">
      <div className="flex items-start justify-between gap-3"><h3 className="font-bold text-white">{habilidade.nome}</h3><span className={`mt-1.5 size-2.5 shrink-0 rounded-full ${niveis[habilidade.nivel]}`} aria-hidden="true" /></div>
      <p className="mt-3 text-sm text-slate-400">{habilidade.categoria}</p>
      <p className="mt-4 text-xs font-bold text-cyan-300">{habilidade.nivel}</p>
    </article>
  )
}
