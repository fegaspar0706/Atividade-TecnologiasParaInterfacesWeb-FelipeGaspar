type RodapeProps = { nome: string; ano: number }
export function Rodape({ nome, ano }: RodapeProps) {
  return <footer className="border-t border-slate-700/60 bg-[#0d1321] px-5 py-8 text-center text-sm text-slate-400"><p>© {ano} {nome}. Todos os direitos reservados.</p><p className="mt-2">Desenvolvido com React, TypeScript, Vite e Tailwind CSS v4.</p></footer>
}
