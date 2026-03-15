import { ArrowRight, Boxes, Building2, Globe, Home, Package, ShieldCheck } from 'lucide-react'

export const SERVICES = [
  {
    num: '01',
    name: 'Mudança Residencial',
    desc: 'Da garagem ao apartamento de luxo. Cada objeto tratado como nosso, com embalagem profissional e transporte seguro porta-a-porta.',
    icon: <Home />,
  },
  {
    num: '02',
    name: 'Mudança Empresarial',
    desc: 'Escritórios, armazéns e lojas. Planeamento rigoroso para minimizar paragem operacional e garantir uma transição sem fricção.',
    icon: <Building2 />,
  },
  {
    num: '03',
    name: 'Mudança Internacional',
    desc: 'Portugal para o mundo. Tratamos de aduanas, seguros e logística internacional. Tu foges para a nova aventura — nós tratamos do resto.',
    icon: <Globe />,
  },
  {
    num: '04',
    name: 'Embalagem Profissional',
    desc: 'Materiais certificados, técnicas especializadas. Frágeis, eletrónica e obras de arte — protegidos como merecem, sem exceção.',
    icon: <Package />,
  },
  {
    num: '05',
    name: 'Armazenagem Segura',
    desc: 'Armazém climatizado, videovigilância 24h, acesso flexível. As tuas coisas guardadas com total segurança pelo tempo que precisares.',
    icon: <Boxes />,
  },
  {
    num: '06',
    name: 'Seguro Total',
    desc: 'Cobertura completa de todos os bens durante a mudança. Sem letras pequenas, sem surpresas. A tua paz de espírito incluída no preço.',
    icon: <ShieldCheck />,
  },
]