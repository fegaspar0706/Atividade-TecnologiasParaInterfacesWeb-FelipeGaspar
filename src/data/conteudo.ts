import type { Experiencia, Habilidade, Projeto } from '../types'

// Dados centralizados e tipados. Ajuste o nível das habilidades conforme sua experiência.
export const habilidades: Habilidade[] = [
  { id: 1, nome: 'HTML5', nivel: 'Avançado', categoria: 'Desenvolvimento web' },
  { id: 2, nome: 'CSS3 e layout responsivo', nivel: 'Avançado', categoria: 'Desenvolvimento web' },
  { id: 3, nome: 'JavaScript', nivel: 'Intermediário', categoria: 'Desenvolvimento web' },
  { id: 4, nome: 'React', nivel: 'Básico', categoria: 'Desenvolvimento web' },
  { id: 5, nome: 'TypeScript', nivel: 'Básico', categoria: 'Desenvolvimento web' },
  { id: 6, nome: 'Tailwind CSS', nivel: 'Básico', categoria: 'Desenvolvimento web' },
  { id: 7, nome: 'PHP', nivel: 'Intermediário', categoria: 'Programação e dados' },
  { id: 8, nome: 'MySQL e SQL', nivel: 'Intermediário', categoria: 'Programação e dados' },
  { id: 9, nome: 'Java e orientação a objetos', nivel: 'Intermediário', categoria: 'Programação e dados' },
  { id: 10, nome: 'Linguagem C', nivel: 'Intermediário', categoria: 'Programação e dados' },
  { id: 11, nome: 'Git e GitHub', nivel: 'Básico', categoria: 'Ferramentas e design' },
  { id: 12, nome: 'Web design e UI', nivel: 'Intermediário', categoria: 'Ferramentas e design' },
]

// Os cinco projetos abaixo vieram do portfólio PHP enviado pelo autor.
export const projetos: Projeto[] = [
  {
    id: 1, titulo: 'RecargaBUS',
    descricao: 'Sistema para gerenciamento de recargas de cartões de ônibus. Apresentado no portfólio original como projeto destaque, com processo de patenteamento mencionado pelo autor.',
    tecnologias: ['Sistema web', 'Gestão de recargas'],
    imagem: '/img/foto-recargabus.png', alt: 'Captura do projeto RecargaBUS',
    link: 'https://recargabus.gt.tc', destaque: true, emAndamento: false,
  },
  {
    id: 2, titulo: 'Uhub — Protótipo',
    descricao: 'Protótipo de uma rede acadêmica voltada à criação de comunidades, interação entre estudantes e networking universitário.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    imagem: '/img/foto-uhub.png', alt: 'Captura do protótipo da plataforma Uhub',
    link: 'https://uhub.gt.tc', emAndamento: true,
  },
  {
    id: 3, titulo: 'Trontris',
    descricao: 'Jogo inspirado em Tetris com estética Tron, desenvolvido durante o curso de Informática para Internet do SENAI.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    imagem: '/img/foto_trontris.png', alt: 'Tela do jogo Trontris com peças em estilo neon',
    link: '/projetos/trontris/Trontris-main/index.html', emAndamento: false,
  },
  {
    id: 4, titulo: 'Quiz Literário',
    descricao: 'Quiz interativo criado em comemoração ao Dia do Livro durante as atividades do curso do SENAI.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    imagem: '/img/foto-quiz.png', alt: 'Tela inicial do Quiz Literário',
    link: '/projetos/quiz/quiz-literario/index.html', emAndamento: false,
  },
  {
    id: 5, titulo: 'The Velvet Echoes',
    descricao: 'Site de artista fictício desenvolvido na disciplina de Fundamentos de Web Design do IFTM, com páginas de galeria, agenda, produtos e contato.',
    tecnologias: ['HTML', 'CSS', 'Web Design'],
    imagem: '/img/foto-artista.png', alt: 'Captura do site The Velvet Echoes',
    link: '/projetos/site_artista/Site-de-Artista-Fict-cio---The-Velvet-Echoes-main/indexvelvet.html', emAndamento: false,
  },
]

export const formacao: Experiencia[] = [
  { id: 1, nome: 'Análise e Desenvolvimento de Sistemas', instituicao: 'IFTM — Campus Uberaba Parque Tecnológico', situacao: 'Em andamento · 3º período', descricao: 'Formação superior com foco em desenvolvimento de software, banco de dados e algoritmos.' },
  { id: 2, nome: 'Informática para Internet', instituicao: 'SENAI', situacao: 'Concluído', descricao: 'Formação técnica com foco em desenvolvimento web e web design.' },
  { id: 3, nome: 'Ensino Médio', instituicao: 'Escola SESI Alberto Martins Fontoura Borges', situacao: 'Concluído', descricao: 'Formação de nível médio.' },
]

export const perfil = {
  nome: 'Felipe Gaspar',
  subtitulo: 'Desenvolvimento web · Front-end · Tecnologia',
  imagem: '/img/fotoperfil.jpg',
  email: 'felipe.barberato0707@gmail.com',
  telefone: '(34) 99952-1712',
  whatsapp: 'https://wa.me/5534999521712?text=Ol%C3%A1%2C%20Felipe!%20Vi%20seu%20portf%C3%B3lio.',
  linkedin: 'https://www.linkedin.com/in/felipe-gaspar-541a90331',
  github: 'https://github.com/fegaspar0706',
}
