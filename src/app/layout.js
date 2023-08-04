import "primereact/resources/themes/lara-dark-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Animal Info App',
  description: 'An app that displays the information of various animals in eyeappealing format',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
