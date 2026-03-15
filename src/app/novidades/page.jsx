import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer/footer'
import PageHero from '@/components/page-hero/index.jsx/page-hero'
import Posts from '@/components/sections/posts'
import Newsletter from '@/components/sections/newsletter'

export const metadata = {
  title: 'Novidades — CRARM XPRESS',
  description: 'Últimas actualizações, dicas e promoções da CRARM XPRESS.',
}

export default function Novidades() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Últimas"
          title="Novi"
          titleEm="dades"
          meta={['Últimas actualizações', 'da CRARM XPRESS']}
        />
        <Posts />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}