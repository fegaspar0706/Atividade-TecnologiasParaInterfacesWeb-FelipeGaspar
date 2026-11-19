import type { ReactNode } from 'react'
import { Container } from './Container'

type SecaoProps = { id: string; titulo: string; descricao?: string; children: ReactNode }

export function Secao({ id, titulo, descricao, children }: SecaoProps) {
  return <section id={id} className="scroll-mt-24 py-16 sm:py-20"><Container><div className="mb-9"><div className="mb-3 h-1 w-12 rounded-full bg-cyan-400"/><h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{titulo}</h2>{descricao && <p className="mt-3 max-w-3xl leading-7 text-slate-400">{descricao}</p>}</div>{children}</Container></section>
}
