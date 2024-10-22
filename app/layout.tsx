import '../styles/globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { DarkModeProvider } from '../src/components/ui/darkMode'
import Header from '../src/components/header'
import Footer from '../src/components/footer'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SAB Tech Tool',
  description: 'SAB Tech Tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <DarkModeProvider>
      <body className={jakarta.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </DarkModeProvider>
    </html>
  )
}