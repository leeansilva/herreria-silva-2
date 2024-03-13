import { Box, Button, Container, Text } from "@chakra-ui/react";
import React from "react";

export default function Hero() {
  return (
    <>
      <Box
        position={"relative"}
        className="hero-container"
        bg={
          "url(https://i.pinimg.com/originals/22/11/63/22116358dc31de9b32c8154b75446fad.jpg)"
        }
        backgroundSize={"cover"}
        backgroundPositionX={"center"}
        backgroundPositionY={"center"}
        backgroundRepeat={"no-repeat"}
        minH={"65svh"}
        w={"full"}
        filter={"brightness(40%)"}
      ></Box>

      <Container
        pos={"absolute"}
        top={{base:'119px', md:'139px', lg:'119px'}}
        left={"0"}
        right={"0"}
        bottom={"0"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-around"}
        h={"65svh"}
        maxW="8xl"
      >
        <Box h={"max-content"}>
          <Text
            color={"white"}
            fontWeight={600}
            w={"max-content"}
            textAlign={"center"}
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
          >
            Herreria Silva.
          </Text>
          <Text
            color={"white"}
            fontWeight={600}

            textAlign={"left"}
            fontSize={{ base: "md", md: "xl", lg: "2xl" }}
          >
            Con más de 20 años de experiencia y trayectoria en el rubro, somos una
            empresa familiar dedicada al trabajo metalúrgico.
          </Text>
          <Button fontSize={'xl'} size={{base:'md',md:'lg'}} mt={5} colorScheme={"green"}>
            Contactanos
          </Button>
        </Box>
      </Container>
    </>
  );
}
