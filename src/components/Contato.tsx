type ContatoProps = { email: string; github: string; linkedin: string; whatsapp: string; telefone: string }

const base = 'flex items-center justify-between gap-4 rounded-2xl border border-slate-700 bg-[#1b2940] px-5 py-5 font-semibold text-slate-100 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-300'

export function Contato({ email, github, linkedin, whatsapp, telefone }: ContatoProps) {
  return <div className="grid gap-4 md:grid-cols-2">
    <a className={base} href={`mailto:${email}`}><span><span className="block text-xs font-bold uppercase tracking-wider text-cyan-400">E-mail</span><span className="mt-1 block break-all text-sm">{email}</span></span><span aria-hidden="true">↗</span></a>
    <a className={base} href={whatsapp} target="_blank" rel="noopener noreferrer"><span><span className="block text-xs font-bold uppercase tracking-wider text-cyan-400">WhatsApp</span><span className="mt-1 block text-sm">{telefone}</span></span><span aria-hidden="true">↗</span></a>
    <a className={base} href={linkedin} target="_blank" rel="noopener noreferrer"><span><span className="block text-xs font-bold uppercase tracking-wider text-cyan-400">LinkedIn</span><span className="mt-1 block text-sm">Meu perfil profissional</span></span><span aria-hidden="true">↗</span></a>
    <a className={base} href={github} target="_blank" rel="noopener noreferrer"><span><span className="block text-xs font-bold uppercase tracking-wider text-cyan-400">GitHub</span><span className="mt-1 block text-sm">@fegaspar0706</span></span><span aria-hidden="true">↗</span></a>
  </div>
}
