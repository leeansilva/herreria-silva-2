"use client";
import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Tabla from "../Tabla/Tabla";
import { useLocalStorage } from "@/Context/context";
import ModalChakra from "../ModalChakra/ModalChakra";

export default function Calculadora() {
  const {
    item: presus,
    saveItem,
    deleteItem,
    updateItem,
    loading,
    error,
  } = useLocalStorage("budgets", []);

  const [resultado, setResultado] = React.useState(0);
  const [precioI, setPrecioI] = React.useState(0);
  const [tituloI, setTituloI] = React.useState("");
  const [metrosI, setMetrosI] = React.useState(0);
  const [materialI, setMaterialI] = React.useState("");

  const [valorAgregadoI, setValorAgregadoI] = React.useState(0);
  const [nombreValorI, setNombreValorI] = React.useState("");

  const [carrito, setCarrito] = React.useState([]);

  const [porcentaje, setPorcentaje] = React.useState(0); // Nuevo estado para el porcentaje
  const [total, setTotal] = React.useState(0);

  const generateNewId = () => {
    return presus.length > 0 ? presus[presus.length - 1].id + 1 : 1;
  };

  const handleAddPresu = (title, data) => {
    const updatedPresus = [
      ...presus,
      { title: title, data: carrito,detalles:[{resultado: resultado}, {porcentaje: porcentaje}], id: generateNewId() },
    ];

    saveItem(updatedPresus);
  };

  const handleUpdatePresu = (id, updatedTitle, updatedAmount) => {
    const updatedBudgets = budgets.map((budget) => {
      if (budget.id === id) {
        return { ...budget, title: updatedTitle, amount: updatedAmount };
      }
      return budget;
    });
    updateItem(updatedBudgets);
  };

  if (error) return <div>Error: {error}</div>;

  //Que se pueda guardar el presupuesto en un localStorage, que reciba nombre del presupuesto
  //Que se pueda guardar como pdf
  //Que diga la cantidad de barras, aunque sean algunas por la mitad y que diga que la cantidad de barras redondeado.
  //Porque ahora esta dividiendo y multiplicando por numeros decimales.

  const calcularPresupuesto = (precio, metros, material) => {
    if (precio !== undefined && metros !== undefined && material !== "") {
      if (metros <= 6) {
        setResultado("Con una barra alcanza.");
      } else {
        setResultado(`El total de ${material} es de $${(metros / 6) * precio}`);
      }
    }
  };

  const agregarAlCarrito = () => {
    if (
      resultado !== "" &&
      materialI !== ""
    ) {
      const nuevoMaterial = {
        nombre: materialI,
        metros: metrosI,
        precio: precioI,
      };
      setCarrito([...carrito, nuevoMaterial]);
      setMaterialI("");
      setMetrosI(0);
      setPrecioI(0);
      setResultado(0);
      setValorAgregadoI(0);
      setNombreValorI("");

      setTotal(total + (metrosI / 6) * precioI);
    } else if (valorAgregadoI !== "" && nombreValorI !== "") {
      const nuevoMaterial = {
        nombre: nombreValorI,
        metros: 1,
        precio: valorAgregadoI,
      };

      setTotal(total + valorAgregadoI * 1);

      setCarrito([...carrito, nuevoMaterial]);
      setMaterialI("");
      setMetrosI(0);
      setPrecioI(0);
      setResultado(0);
      setValorAgregadoI(0);
      setNombreValorI("");
    }
  };

  const eliminarDelCarrito = (index) => {
    const materialEliminado = carrito[index];
    materialEliminado.metros >= 6
    ?
        setTotal(total - (materialEliminado.metros / 6) * materialEliminado.precio)
    :
        setTotal(total - materialEliminado.precio * 1)

    const nuevoCarrito = carrito.filter((item, i) => i !== index);
    setCarrito(nuevoCarrito);
  };

  React.useEffect(() => {
    calcularPresupuesto(precioI, metrosI, materialI);
    console.log(Math.round(metrosI / 6 + 1));
  }, [precioI, metrosI, materialI]);

  return (
    <Flex flexDir={{ base: "column", md: "row" }} gap={"30px"} w={"full"}>
      <Box
        border={"1px solid #2b333a"}
        mt={"15px"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-around"}
        p={6}
        color={"black"}
        borderRadius={15}
        boxShadow={"dark-lg"}
        bg={"#161b22"}
        h={"max-content"}
        w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
      >
        <form>
          <FormControl mb={3}>
            <FormLabel color={"white"} fontSize={{ base: "md", md: "xl" }}>
              Nombre del material:
            </FormLabel>
            <Input
              color={"white"}
              value={materialI}
              placeholder="Ej: Angulo 1' 1/4"
              onChange={(e) => setMaterialI(e.target.value)}
              type="text"
            />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel color={"white"} fontSize={{ base: "md", md: "xl" }}>
              Metros lineales:
            </FormLabel>
            <Input
              color={"white"}
              value={metrosI}
              onChange={(e) => setMetrosI(e.target.value)}
              type="number"
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel color={"white"} fontSize={{ base: "md", md: "xl" }}>
              Precio por barra:
            </FormLabel>
            <Input
              color={"white"}
              value={precioI}
              onChange={(e) => setPrecioI(e.target.value)}
              type="number"
            />
          </FormControl>
        </form>
        <Text mb={4} fontSize={"xl"} color="white">
          {resultado}
        </Text>
        <Button
          colorScheme={"green"}
          variant={"outline"}
          onClick={agregarAlCarrito}
        >
          Agregar material
        </Button>
        <ValorAgregado
          handle={agregarAlCarrito}
          valor={valorAgregadoI}
          setValor={setValorAgregadoI}
          nombreValor={nombreValorI}
          setNombreValor={setNombreValorI}
        />
      </Box>
      <Resultado
        titulo={tituloI}
        setTitulo={setTituloI}
        guardarPresu={() => handleAddPresu(tituloI, carrito)}
        total={total}
        porc={porcentaje}
        setPorc={setPorcentaje}
      >
        <>
          <h2>Detalle:</h2>
          <Tabla eliminar={eliminarDelCarrito} carrito={carrito} />
        </>
      </Resultado>
    </Flex>
  );
}

export function ValorAgregado({
  valor,
  setValor,
  nombreValor,
  setNombreValor,
  handle,
}) {
  return (
    <>
      <Accordion mt={5} defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Text
                color={"white"}
                fontSize={{ base: "md", md: "xl" }}
                as="span"
                flex="1"
                textAlign="left"
              >
                Otros materiales
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box
              border={"1px solid #2b333a"}
              bg={"#161b22"}
              mt={"15px"}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"space-around"}
              p={6}
              color={"white"}
              borderRadius={15}
              boxShadow={"dark-lg"}
              h={"max-content"}
              w={"full"}
            >
              <FormControl mb={3}>
                <FormLabel color={"white"} fontSize={{ base: "md", md: "xl" }}>
                  Nombre del material:
                </FormLabel>
                <Input
                  color={"white"}
                  value={nombreValor}
                  placeholder="Ej: Pintura"
                  onChange={(e) => setNombreValor(e.target.value)}
                  type="text"
                />
              </FormControl>
              <FormControl mb={3}>
                <FormLabel color={"white"} fontSize={{ base: "md", md: "xl" }}>
                  Importe:
                </FormLabel>
                <Input
                  color={"white"}
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                  type="number"
                />
              </FormControl>
              <Button
                colorScheme={"green"}
                variant={"outline"}
                onClick={handle}
              >
                Agregar material
              </Button>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export function Resultado({
  total,
  guardarPresu,
  titulo,
  setTitulo,
  children,
  porc,
  setPorc
}) {
  return (
    <Box
      border={"1px solid #2b333a"}
      bg={"#161b22"}
      mt={"15px"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"space-around"}
      p={6}
      color={"white"}
      borderRadius={15}
      boxShadow={"dark-lg"}
      h={"max-content"}
      w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
    >
      <>{children}</>
      <HStack flexDir={{base:'column', md:'row'}} w={"full"} justifyContent={"space-between"}>
        <Text
          mt={4}
          color={"white"}
          fontWeight={600}
          w={"max-content"}
          textAlign={"center"}
          fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }}
        >
          Total: ${total}
        </Text>

        <Box display={"flex"} flexDir={{base:'column', md:'row'}} gap={2}>
        <Flex >
          <Button onClick={()=>setPorc(porc - 1)}>-</Button>
          <Input
            w={'50px'}
            color={"white"}
            value={porc}
            onChange={(e) => setPorc(parseInt(e.target.value))}
            type="number"
          />
          <Button onClick={()=> setPorc(porc + 1)}>+</Button>
        </Flex>
          <ModalChakra
            titleButton={"Guardar presupuesto"}
            titleModal={"Guardar presupuesto"}
            handle={guardarPresu}
          >
            <FormLabel color={"black"} fontSize={{ base: "md", md: "md" }}>
              Ingrese el titulo del presupuesto:
            </FormLabel>
            <Input
              color={"black"}
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              type="text"
            />
          </ModalChakra>

          <Button colorScheme={"orange"} variant={"solid"}>
            Compartir
          </Button>
        </Box>
      </HStack>
    </Box>
  );
}
