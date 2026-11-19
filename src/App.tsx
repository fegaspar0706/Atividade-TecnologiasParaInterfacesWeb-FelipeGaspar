import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Secao } from './components/Secao'
import { HabilidadeCard } from './components/HabilidadeCard'
import { ProjetoCard } from './components/ProjetoCard'
import { FormacaoCard } from './components/FormacaoCard'
import { Contato } from './components/Contato'
import { Rodape } from './components/Rodape'
import { formacao, habilidades, perfil, projetos } from './data/conteudo'

function App() {
  return (
    <div className="min-h-screen bg-[#101526] font-sans text-slate-100 antialiased">
      <Header nome={perfil.nome} />
      <main>
        <Hero nome={perfil.nome} imagem={perfil.imagem} cargo={perfil.subtitulo} apresentacao="Estudante de Análise e Desenvolvimento de Sistemas no IFTM e formado em Informática para Internet pelo SENAI. Desenvolvo experiências web, interfaces e soluções de software — sempre buscando aprender e colocar ideias em prática." />
        <Secao id="sobre" titulo="Sobre mim" descricao="Um pouco sobre minha trajetória e meus interesses em tecnologia.">
          <div className="grid items-start gap-6 lg:grid-cols-[1.6fr_1fr]">
            <div className="rounded-2xl border border-slate-700/70 bg-[#1b2940] p-7 leading-8 text-slate-300">
              <p>Sou <strong className="font-semibold text-white">Felipe Gaspar Barberato</strong>, estudante do 3º período de Análise e Desenvolvimento de Sistemas no Instituto Federal do Triângulo Mineiro, Campus Uberaba Parque Tecnológico.</p>
              <p className="mt-4">Também tenho formação técnica em Informática para Internet pelo SENAI. Tenho interesse em desenvolvimento web, interfaces front-end, design gráfico, programação e bancos de dados.</p>
              <p className="mt-4">Neste portfólio reuni projetos de jogos, sites e sistemas desenvolvidos durante minha formação.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-700/70 bg-[#1b2940] p-6"><p className="text-4xl font-black text-cyan-400">{projetos.length}</p><p className="mt-2 text-sm text-slate-300">Projetos apresentados</p></div>
              <div className="rounded-2xl border border-slate-700/70 bg-[#1b2940] p-6"><p className="text-4xl font-black text-cyan-400">{habilidades.length}</p><p className="mt-2 text-sm text-slate-300">Conhecimentos</p></div>
              <div className="col-span-2 rounded-2xl border border-slate-700/70 bg-[#1b2940] p-6"><p className="text-xs font-bold uppercase tracking-widest text-cyan-400">Principal interesse</p><p className="mt-2 text-lg font-bold text-white">Desenvolvimento web e design de interfaces</p></div>
            </div>
          </div>
        </Secao>
        <div className="bg-[#151e32]">
          <Secao id="habilidades" titulo="Conhecimentos e habilidades" descricao="Tecnologias e ferramentas com as quais venho trabalhando. Os níveis são indicativos e podem ser atualizados conforme minha evolução.">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {habilidades.map((habilidade) => <HabilidadeCard key={habilidade.id} habilidade={habilidade} />)}
            </div>
          </Secao>
        </div>
        <Secao id="projetos" titulo="Projetos desenvolvidos" descricao="Uma seleção dos trabalhos presentes no meu portfólio original. Os projetos locais podem ser abertos diretamente em uma nova aba.">
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projetos.map((projeto) => <ProjetoCard key={projeto.id} projeto={projeto} />)}
          </div>
        </Secao>
        <div className="bg-[#151e32]">
          <Secao id="formacao" titulo="Formação acadêmica" descricao="Cursos e experiências que contribuíram para minha trajetória.">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {formacao.map((item) => <FormacaoCard key={item.id} item={item} />)}
            </div>
          </Secao>
        </div>
        <Secao id="contato" titulo="Vamos conversar?" descricao="Tem alguma ideia, dúvida ou oportunidade? Fique à vontade para entrar em contato.">
          <Contato email={perfil.email} whatsapp={perfil.whatsapp} telefone={perfil.telefone} github={perfil.github} linkedin={perfil.linkedin} />
        </Secao>
      </main>
      <Rodape nome={perfil.nome} ano={new Date().getFullYear()} />
    </div>
  )
}

export default App
