import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from './providers'
import Nav from './components/Nav'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Playground Studio — Bold, Brave Brands',
  description: 'A Melbourne creative studio of designers, writers, strategists and big dreamers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang=en suppressHydrationWarning data-scroll-behavior=smooth className={`${inter.className} bg-background`}>
      <body className=antialiased overflow-x-hidden>
        <a href=#main-content className=sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:text-xs focus:tracking-widest focus:uppercase>
          Skip to main content
        </a>
        <Providers>
          <Nav />
          <PageTransition>
            <main id=main-content>
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