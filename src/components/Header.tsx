import { Container } from './Container'

type HeaderProps = { nome: string }

const itens = [
  { nome: 'Sobre', id: 'sobre' },
  { nome: 'Conhecimentos', id: 'habilidades' },
  { nome: 'Projetos', id: 'projetos' },
  { nome: 'Formação', id: 'formacao' },
  { nome: 'Contato', id: 'contato' },
]

export function Header({ nome }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#101526]/90 backdrop-blur-xl">
      <Container className="flex min-h-19 flex-wrap items-center justify-between gap-4 py-4">
        <a href="#inicio" aria-label="Voltar ao início" className="flex items-center gap-3 text-base font-extrabold tracking-tight text-white">
          <span className="hidden sm:inline">{nome.split(' ').slice(0, 2).join(' ')}<span className="text-cyan-400">.</span></span>
        </a>
        <nav aria-label="Navegação principal" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-300 sm:text-sm">
          {itens.map((item) => <a key={item.id} href={`#${item.id}`} className="transition hover:text-cyan-300 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-cyan-400">{item.nome}</a>)}
        </nav>
      </Container>
    </header>
  )
}
