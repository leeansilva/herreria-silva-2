'use client'

import React from 'react'
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    VisuallyHidden,
    chakra,
    useColorModeValue,
    Image,
    Spacer,
} from '@chakra-ui/react'
import { FaTwitter, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function Footer() {
    return (
        <Box
            as='footer'
            bg={'#010409'}
            color={'white'}>
            <Container as={Stack} maxW={'8xl'} py={10}>
                <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <ListHeader>Compania</ListHeader>
                        <Box as="a" href={'/'}>
                            Inicio
                        </Box>
                        <Box as="a" href={'#'}>
                            Quiénes somos
                        </Box>
                        <Box as="a" href={'#'}>
                            Trabajos
                        </Box>
                        <Box as="a" href={'#'}>
                            Contacto
                        </Box>
                    </Stack>


                    <Stack align={'flex-start'}>
                        <ListHeader>Información</ListHeader>
                        <Box as="a" href={'/'}>
                            Paraguay 8094, Trujui, Moreno
                        </Box>
                        <Box as="a" href={'#'}>
                            11-4093-3840
                        </Box>
                        <Box as="a" href={'#'}>
                            lsilva341@gmail.com
                        </Box>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Horario de atención</ListHeader>
                        <Box as="a" href={'/'}>
                        Lunes a viernes de 08:00 a 13:00 y de 14:00 a 18:00.<br/>
                        Sábado de 08:00 a 17:00 hs.
                        </Box>
                    </Stack>


                </SimpleGrid>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
            >
                <Container
                    as={Stack}
                    maxW={'8xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}>
                    <Text>© 2024 HERRERIA SILVA.</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Whatsapp'} href={'#'}>
                            <FaWhatsapp />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}