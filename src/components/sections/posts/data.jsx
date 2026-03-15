import { Truck, Package, Lightbulb, Percent } from 'lucide-react'

export const FILTERS = [
  {
    key: 'todos',
    label: 'Todos',
    Icon: null
  },
  {
    key: 'empresa',
    label: 'Empresa',
    Icon: Truck
  },
  {
    key: 'servicos',
    label: 'Serviços',
    Icon: Package
  },
  {
    key: 'dicas',
    label: 'Dicas',
    Icon: Lightbulb
  },
  {
    key: 'promocoes',
    label: 'Promoções',
    Icon: Percent
  },
]

export const CAT_LABELS = {
  empresa: 'Empresa',
  servicos: 'Serviços',
  dicas: 'Dicas',
  promocoes: 'Promoções',
}

export const POSTS = [
  {
    cat: 'empresa', featured: true, badge: 'Destaque',
    date: '14 Mar 2026',
    title: 'Expandimos para o Porto — Agora Servimos o Norte de Portugal',
    excerpt: 'Depois de 15 anos focados em Lisboa e arredores, chegou a hora de levar a qualidade MoveForce ao norte. A partir de Abril, a nossa equipa opera a partir do Porto com capacidade total para mudanças residenciais, empresariais e internacionais.',
  },
  {
    cat: 'servicos',
    date: '8 Mar 2026',
    title: 'Novo Serviço: Montagem de Mobiliário IKEA',
    excerpt: 'Adicionámos montagem profissional de mobiliário ao nosso catálogo. Chega, abre as caixas e nós tratamos do resto.',
  },
  {
    cat: 'dicas',
    date: '1 Mar 2026',
    title: '10 Coisas a Fazer 2 Semanas Antes da Tua Mudança',
    excerpt: 'A preparação é metade do trabalho. O nosso guia prático para chegares ao dia da mudança sem stress.',
  },
  {
    cat: 'promocoes',
    date: '22 Fev 2026',
    title: 'Desconto de 15% em Mudanças Agendadas para Abril',
    excerpt: 'Abril é o mês das mudanças — e nós queremos celebrar contigo. Agenda até 31 de Março e garante 15% de desconto.',
  },
  {
    cat: 'empresa',
    date: '15 Fev 2026',
    title: 'MoveForce Recebe Prémio de Excelência em Serviço ao Cliente',
    excerpt: 'Ficamos em 1.º lugar no ranking de empresas de mudanças da região de Lisboa pela terceira vez consecutiva.',
  },
  {
    cat: 'dicas',
    date: '5 Fev 2026',
    title: 'Como Embalar Obras de Arte e Espelhos com Segurança',
    excerpt: 'Os objetos mais frágeis merecem atenção especial. Os nossos especialistas partilham as técnicas que usamos internamente.',
  },
  {
    cat: 'servicos',
    date: '28 Jan 2026',
    title: 'Armazém Climatizado com Câmeras 24h em Tempo Real',
    excerpt: 'Actualizámos o sistema de videovigilância. Os clientes podem agora monitorizar os seus bens remotamente.',
  },
  {
    cat: 'empresa',
    date: '10 Jan 2026',
    title: 'Frota Renovada — 4 Novos Camiões em 2026',
    excerpt: 'O novo ano começa com um investimento na nossa frota. Quatro novos veículos climatizados ampliam a nossa capacidade.',
  },
  {
    cat: 'promocoes',
    date: '2 Jan 2026',
    title: 'Pacote Empresarial — Preços Especiais para Contratos Anuais',
    excerpt: 'Para empresas que precisam de mudanças frequentes, criámos pacotes de contrato anual com condições exclusivas.',
  },
]