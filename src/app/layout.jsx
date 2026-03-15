import { Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

// Each font gets a CSS variable that matches what globals.css expects
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',   // → var(--font-bebas-neue) in @theme
  display: 'swap',
})

const barlow = Barlow({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-barlow',       // → var(--font-barlow) in @theme
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed', // → var(--font-barlow-condensed) in @theme
  display: 'swap',
})

export const metadata = {
  title: 'MoveForce — Mudanças Premium',
  description: 'Da primeira caixa ao último quadro — tratamos de tudo com rigor e cuidado absoluto.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt"
      suppressHydrationWarning
      className={`
        ${bebasNeue.variable}
        ${barlow.variable}
        ${barlowCondensed.variable}
      `}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}