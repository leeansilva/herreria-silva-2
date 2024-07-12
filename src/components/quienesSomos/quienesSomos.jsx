import React from 'react'
import { Box, Container, Divider, Heading, Text } from '@chakra-ui/react'

export default function QuienesSomos() {
    return (
        <Container maxW={'8xl'} display={'flex'} flexDir={{base:'column', lg:'row'}} color={'white'} gap={35} p={20}>
                <Box w={{base:'100%', md:'40%'}}>
                    <Heading as={'h2'} mb={5}>Nuestra Empresa</Heading>
                    <Text color={'#CBD5E0'} fontSize={{ base: "md", md: "xl", lg: "2xl" }} as={'p'}>Estamos comprometidos con nuestros clientes, en el desarrollo, provisión y ejecución de los proyectos productivos</Text>
                </Box>

                <Box w={{base:'100%', md:'60%'}} borderLeft={{base:'none', md:'1px solid white'}} pl={{base:'none', md:10}}>
                    <Text color={'#CBD5E0'} fontSize={{ base: "md", md: "xl", lg: "2xl" }}>Nos especializamos en soluciones técnicas, en las actividades de mecanizados de precisión, montajes, mantenimiento y limpieza industrial.</Text>
                </Box>
        </Container>
    )
}
