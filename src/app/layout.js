import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AgroRedes S.R.L. - Bolívar',
  description:
    'Empresa líder en soluciones agropecuarias en Bolívar. Nos especializamos en la producción de carne y granos, brindando calidad, innovación y confiabilidad en cada paso. Nuestro compromiso se extiende a través de múltiples regiones, generando y administrando negocios agropecuarios con pasión y experiencia. Descubre cómo AgroRedes S.R.L. impulsa el crecimiento y el éxito en el sector agroindustrial.'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />

        {children}
      </body>
    </html>
  )
}
