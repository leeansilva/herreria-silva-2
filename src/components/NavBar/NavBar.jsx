"use client";
import React, { useEffect, useState } from "react";
import { Box, Container, HStack, Image, Spacer, Button, DrawerCloseButton, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, Link as LinkChakra, useDisclosure, Flex, VStack, Menu, MenuButton, MenuList, MenuItem, } from "@chakra-ui/react";
import { Link as LinkNext } from "next/link";
import { IconButton } from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { DrawerBody } from "@chakra-ui/react";
import {
  FaMapMarkerAlt, FaPhoneAlt,
} from "react-icons/fa";
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
//key para usar herramientas especiales.
// window.localStorage.setItem("uniqueKey","test")

export default function Navbar() {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [logoOpacity, setLogoOpacity] = useState(1);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 100) {
      setHideNavbar(true);
      setLogoOpacity(0); // Cambia la opacidad del logo a 0.5 cuando se oculta el navbar
    } else {
      setHideNavbar(false);
      setLogoOpacity(1); // Restaura la opacidad del logo a 1 cuando se muestra el navbar
    }
  };


  // Agrega el event listener al montar el componente
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      bg={hideNavbar ? "rgba(1, 4, 9, 0.5)" : "#010409"}
      zIndex="1000"
      position="fixed"
      top={0}
      boxShadow="md"
      as="header"
      maxW={{ base: "100svw", lg: "100%" }}
      paddingBlock={5}
      borderBottom="2px solid #2b333a"
      transition="background-color 0.3s ease"
    >
      <Container maxW={"8xl"}>
        <HStack
          justifyContent={{ base: "center", md: "flex-end", lg: "flex-end" }}
          w={"full"}
          gap={3}
          color={"white"}
        >
          <LinkChakra
            display={{ base: "none", md: "flex", lg: "flex" }}
            as={Flex}
            gap={1}
          >
            <FaMapMarkerAlt />
            <small>Paraguay 8094 Moreno</small>
          </LinkChakra>
          <LinkChakra
            display={{ base: "none", md: "flex", lg: "flex" }}
            as={Flex}
            gap={1}
          >
            <FaPhoneAlt />
            <small>Cel. (011) 4093-8094</small>
          </LinkChakra>
        </HStack>
        <HStack as="nav">
          <Image
            filter={"invert(100%)"}
            mt={{ base: 0, md: "0", lg: "-20px" }}
            w={{ base: "80px", lg: "90px" }}
            p={0}
            alt="logo"
            src="img\logo.jpg"
            maxH={"80px"}
            opacity={logoOpacity}
            transition="opacity 0.3s ease"
          />
          <Spacer />
          <VStack gap={2} p={0} h={"full"}>
            <LinkDirecciones
              m={0}
              gap={{ base: 3, md: 3, lg: 2, xl: 4 }}
              display={{ base: "none", md: "none", lg: "flex" }}
              fontSize={{ base: "100px", md: "12px", lg: "lg", xl: "xl" }}
              fontWeight={700}
              textTransform={"uppercase"}
              color={"white"}
            />
          </VStack>
          <DrawerButton display={{ base: "initial", lg: "none" }} />
        </HStack>
      </Container>
    </Container>
  );
}

function DrawerButton({ display }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef()

  return (
    <Box display={display}>
      <IconButton
        color={"white"}
        onClick={onOpen}
        variant={"ghost"}
        fontSize="40px"
        icon={<HamburgerIcon />}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        trapFocus={false}
        position={"fixed"}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent bg={"rgba(255,255,255,0.8)"}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <LinkDirecciones
              onclick={onClose}
              direction={"column"}
              fontSize={{ base: "2xl" }}
              fontWeight={700}
              textTransform={"uppercase"}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

function LinkDirecciones(props) {
  const { onclick } = props;
  const [UK, setUK] = React.useState('')

  const uniqueKey = "test"

  React.useEffect(() => {
    const localUniqueKey = window.localStorage.getItem("uniqueKey");
    localUniqueKey && setUK(localUniqueKey);
  }, [])


  //se mapea links, ruta y titulo
  const links = [
    ["quienesSomos", "Quiénes somos"],
    ["trabajos", "Trabajos"],
  ];

  return (
    <Flex {...props}>
      <LinkChakra as={LinkNext}
        href="/"
        onClick={onclick}
      >
        Inicio
      </LinkChakra>
      {links.map((seccion, index) => (
        <LinkChakra
          //  href={seccion[0]} 
          key={index}
          as={Link}
          onClick={onclick}
          to={seccion[0]}
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          {seccion[1]}
        </LinkChakra>
      ))}
      <LinkChakra
        as={LinkNext}
        href="/contacto"
        onClick={onclick}
      >
        Contacto
      </LinkChakra>
      {
        UK === uniqueKey ?
          <Menu>
            <MenuButton bg={'none'} colorScheme={{ base: 'white', md: 'white' }} variant='link' fontSize={{ base: '2xl', md: 'xl', lg: 'lg', xl: 'xl' }} as={Button} p={{ base: '4px 0 0 0', md: '4px 0 0 0', lg: '2px 0 0 0', xl: '2px 0 0 0' }} h={'max-content'} w={'max-content'} rightIcon={<ChevronDownIcon />}>
              HERRAMIENTAS
            </MenuButton>
            <MenuList display={'flex'} flexDir={'column'} p={'0 5px'} bg={'black'}>
              <LinkChakra as={LinkNext} onClick={onclick} bg={'black'} color={'white'} href={'/herramientas/divisora'}>Divisora</LinkChakra>
              <LinkChakra as={LinkNext} onClick={onclick} bg={'black'} color={'white'} href={'/herramientas/calculadora'}>Calculadora de presupuestos</LinkChakra>
              <LinkChakra as={LinkNext} onClick={onclick} bg={'black'} color={'white'} href={'/herramientas/misPresupuestos'}>Mis presupuestos</LinkChakra>
            </MenuList>
          </Menu>
          :
          <></>
      }
    </Flex>
  );
}
