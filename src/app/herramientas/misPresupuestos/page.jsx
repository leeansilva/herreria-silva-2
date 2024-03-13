"use client";
import { useLocalStorage } from "@/Context/context";
import Tabla from "@/components/Tabla/Tabla";
import { Box, Container, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function page() {
  const {
    item: presus,
    saveItem,
    deleteItem,
    updateItem,
    loading,
    error,
  } = useLocalStorage("budgets", []);

  const [carr, setCarr] = React.useState([])

  React.useEffect(() => {
    presus != [] && presus.map((item, index) =>{setCarr([...carr, item.data])} )

    console.log(carr)
  }, [presus])

  return (
    <Container maxW={"8xl"}>
    <HStack w={'full'}>
    <Text w={'250px'} color={'white'} fontSize={'xl'}>Buscar por fecha o título: </Text>
    <Input color={'white'} type="search"  placeholder="Ej: Reja Cacho"/>
    </HStack>

    {
        carr != [] ?
        presus?.map((item, index) => (
            <Box border={"1px solid #2b333a"}
            mt={"15px"}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"space-around"}
            p={6}
            color={"white"}
            borderRadius={15}
            boxShadow={"dark-lg"}
            bg={"#161b22"}
            h={"max-content"}
            w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}>
              <h1>{item.title}</h1>
              <Tabla carrito={item.data} />
            </Box>
          ))
          :
          <>loading</>
    }

    </Container>
  );
}
