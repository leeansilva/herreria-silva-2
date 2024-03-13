import Calculadora from '@/components/Calculadora/Calculadora'
import { Container, Text } from '@chakra-ui/react'
import React from 'react'

export default function page() {
  return (
    <Container bg={'#0d1117'} mt={'15px'} mb={'45px'} maxW={'8xl'}>
      <Text color={"white"}
            fontWeight={500}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>Calculadora de presupuesto.</Text>
      <Calculadora />
    </Container>
  )
}
