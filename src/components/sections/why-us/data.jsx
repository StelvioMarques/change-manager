import { ClockCheck, DollarSign, ShieldCheck, Users } from 'lucide-react'

export const ITEMS = [
  {
    title: 'Equipa Certificada',
    desc: 'Todos os nossos colaboradores têm formação técnica em manuseamento, embalagem e transporte de bens pessoais e profissionais.',
    icon: <Users size={19} />,
  },
  {
    title: 'Preço Fixo Garantido',
    desc: 'Orçamento fechado, sem surpresas no final. O que acordamos é o que pagas — independentemente de qualquer imprevisto logístico.',
    icon: <DollarSign size={19} />,
  },
  {
    title: 'Seguro Completo Incluído',
    desc: 'Todos os bens cobertos durante todo o processo. Em caso de dano — improvável, mas possível — tratamos de tudo imediatamente.',
    icon: <ShieldCheck size={19} />,
  },
  {
    title: 'Pontualidade Rigorosa',
    desc: 'Chegamos à hora combinada. Sem desculpas. Entendemos que o teu tempo é valioso e o teu dia está planeado à volta da mudança.',
    icon: <ClockCheck size={19} />,
  },
]