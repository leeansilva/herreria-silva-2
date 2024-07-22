"use client"
import ChakraCarousel from '@/components/CarouselTrabajos/CarouselTrabajos';
import { jobs } from '@/data/trabajos';
import { Container, Divider, Text, Image, VStack, CircularProgress, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';


export default function page() {
  const [loadingImage, setLoadingImage] = React.useState(true);

  const handleImageLoad = () => {
    setLoadingImage(false);
  };

  return (
    <Container
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-around"}
        maxW={'8xl'}
        pt={5}
      >
        {
          jobs.map((trabajo, index) => (
            <>
            <Text
              as={'h1'}
              color={"white"}
              fontWeight={600}
              fontSize={{ base: "5xl", md: "5xl", lg: "5xl" }}
            >
              {trabajo.title}
            </Text>
            <ChakraCarousel gap={32} imagen={trabajo.imagenes}>
              {trabajo.imagenes.map((post, index) => (
                <>
                  <Image display={{base:'inline-block', md: loadingImage ? "none" : "inline-block"}}
                   onLoad={handleImageLoad} 
                   style={{userSelect: 'none', 
                    borderRadius:'5px', WebkitUserDrag:'none'}} 
                    src={trabajo.imagenes[index]}
                    >  
                  </Image>
                  {
                    loadingImage &&
                    <Box h={'500px'} w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                      <CircularProgress color="green.500" size='120px'
                      />
                    </Box>
                  }
                 </>
              ))}
              
            </ChakraCarousel>
            <Divider mt={10} mb={10}></Divider>
            </>
          ))
        }
        
    </Container>
  )
}
