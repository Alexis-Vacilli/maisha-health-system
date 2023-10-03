import './globals.css'
import { Montserrat } from "next/font/google"

const montserrat = Montserrat(
  { 
    subsets: ['latin'],
    weight: ['300','400','700'],
    variable: "--font-mont-serrat"
  }
  )

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
