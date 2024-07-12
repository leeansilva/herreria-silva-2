import React from 'react'
import { Button } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'
import { Tooltip } from '@chakra-ui/react'
import Link from 'next/link'

export default function Flotante() {
  return (
    <Tooltip label='Whatsapp' placement='right' bg={'green.600'}>
    <Button
        as={Link}
        href={'https://wa.me/5491140933840'}
        target='_blank'
        p={'10px 0 10px 0'} 
        height={'60px'}
        width={'60px'}
        borderRadius={'50%'} 
        colorScheme={'whatsapp'} 
        position={'fixed'} 
        right={'20px'} 
        bottom={'20px'}
        > 
            <FaWhatsapp size={'md'} /> 
        </Button>
    </Tooltip>
  )
}