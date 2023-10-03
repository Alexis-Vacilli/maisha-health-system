import './globals.css'
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'MAISHA DASHBOARD',
  description: 'Maisha Health care system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
