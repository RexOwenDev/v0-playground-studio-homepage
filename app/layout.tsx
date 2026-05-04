import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from './providers'
import Nav from './components/Nav'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Playground Studio — Bold, Brave Brands',
  description: 'A Melbourne creative studio of designers, writers, strategists and big dreamers.',
  generator: 'v0.app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.className} bg-background`}>
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:text-xs focus:tracking-widest focus:uppercase">
          Skip to main content
        </a>
        <Providers>
          <Nav />
          <PageTransition>
            <main id="main-content" className="min-h-screen">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
