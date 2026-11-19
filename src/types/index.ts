export type Nivel = 'Básico' | 'Intermediário' | 'Avançado'

export type Habilidade = {
  id: number
  nome: string
  nivel: Nivel
  categoria: 'Desenvolvimento web' | 'Programação e dados' | 'Ferramentas e design'
}

export type Projeto = {
  id: number
  titulo: string
  descricao: string
  tecnologias: string[]
  imagem: string
  alt: string
  link?: string
  github?: string
  destaque?: boolean
  emAndamento: boolean
}

export type Experiencia = {
  id: number
  nome: string
  instituicao: string
  situacao: string
  descricao: string
}
