import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import { urbanist } from '@/utils/fonts'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Julio Salas Portfolio',
    description: 'Professional Web Site',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={urbanist.className}>
            <body className={inter.className}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
