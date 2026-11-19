import { Container } from './Container'

type HeroProps = { nome: string; cargo: string; apresentacao: string; imagem: string }

export function Hero({ nome, cargo, apresentacao, imagem }: HeroProps) {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-white/5 bg-[radial-gradient(ellipse_at_80%_20%,rgba(18,189,226,.13),transparent_52%)] py-16 sm:py-24">
      <Container className="grid items-center gap-12 md:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/8 px-4 py-2 text-xs font-bold tracking-[0.16em] text-cyan-300 uppercase">
            <span className="size-2 rounded-full bg-cyan-400" aria-hidden="true" /> Meu portfólio
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">Olá, eu sou <span className="text-cyan-400">{nome}</span><span className="text-white">.</span></h1>
          <p className="mt-6 text-lg font-semibold text-slate-200">{cargo}</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">{apresentacao}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projetos" className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-[#0a1622] transition hover:-translate-y-1 hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">Explorar projetos <span aria-hidden="true">↗</span></a>
            <a href="#contato" className="rounded-xl border border-slate-600 px-6 py-3 font-bold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">Entrar em contato</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
          <div aria-hidden="true" className="absolute -inset-3 rotate-5 rounded-[2.5rem] border border-cyan-400/40" />
          <img src={imagem} alt={`Foto de perfil de ${nome}`} className="relative aspect-square w-full rounded-[2rem] border border-slate-700 object-cover shadow-2xl shadow-cyan-950/30" width="420" height="420" fetchPriority="high" />
          <div className="absolute -bottom-5 -left-4 rounded-xl border border-slate-700 bg-[#1c2b45] px-4 py-3 shadow-xl"><span className="text-xs font-semibold text-cyan-300">IFTM + SENAI</span><p className="text-sm font-bold text-white">Desenvolvimento Web</p></div>
        </div>
      </Container>
    </section>
  )
}
