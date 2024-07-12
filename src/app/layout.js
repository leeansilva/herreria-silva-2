import { Roboto_Condensed } from 'next/font/google'
import { Providers } from './chakra/provider'
import { Box } from '@chakra-ui/react'
import Navbar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import Flotante from '@/components/Flotante/Flotante'

const roboto = Roboto_Condensed({
  weight: ['300','400','700'],
  subsets: ['latin'],
  variable: '--font-rubik',
})

export default function RootLayout({ children }) {
  return (
    <html lang='es' className={roboto.variable}>
      <body style={{backgroundColor:'#0d1117'}}>
        <Providers>
          <Navbar/>
          <Box bg={'#0d1117'} as='main' pt={{base:'119px', md:'139px', lg:'119px'}} style={{minHeight:'calc(100svh - 308px)'}}>
            {children}
            <Flotante />
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}