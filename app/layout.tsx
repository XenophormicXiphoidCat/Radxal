import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
      title: 'Radxal - Where AI Meets Talent | AI-Powered Freelancer Matchmaking',
    description: 'Radxal connects visionary businesses with elite AI, no-code, and automation experts — delivering flawless projects every time. AI freelancer network for serious projects.',
  keywords: 'AI freelancer network, AI automation talent, no-code experts, freelancer matchmaking, AI-powered projects',
  authors: [{ name: 'Xenophormic Corp.' }],
  openGraph: {
          title: 'Radxal - Where AI Meets Talent',
    description: 'AI-powered freelancer–client matchmaking for serious projects.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
