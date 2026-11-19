import type { Experiencia } from '../types'

type FormacaoCardProps = { item: Experiencia }

export function FormacaoCard({ item }: FormacaoCardProps) {
  return <article className="border-l-2 border-cyan-400 pl-6 pb-2"><span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-300">{item.situacao}</span><h3 className="mt-3 text-lg font-bold text-white">{item.nome}</h3><p className="mt-1 text-sm font-semibold text-slate-300">{item.instituicao}</p><p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">{item.descricao}</p></article>
}
