'use client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import '../chakra/style.css'

const theme = extendTheme({
    styles: {
        global: {
            h1:{
                fontSize: '38px',
            },
            h2:{
                fontSize: '28px',
            },
            p:{
                fontSize: '14px',
            },
            a: {
                color: 'teal.500',
            },
        },
    },
    fonts: {
        heading: 'var(--font-rubik)',
        body: 'var(--font-rubik)',
    }
});



export function Providers({ children }) {
    return (
        <ChakraProvider theme={theme}>
            <ProgressBar options={{ showSpinner: false }} color='#1c9595' height='4px' />
            {children}
        </ChakraProvider>
    )
}