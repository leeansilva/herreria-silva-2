import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

export default function Tabla({ carrito, eliminar }) {
  console.log(carrito)
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Vista detallada del presupuesto</TableCaption>
        <Thead>
          <Tr>
            <Th>Material</Th>
            <Th>Cantidad</Th>
            <Th>Precio</Th>
            <Th>Accion</Th>
          </Tr>
        </Thead>

        {carrito != [] ? (
          <Tbody>
            {carrito?.map((item, index) => (
              <Tr>
                <Td>{item?.nombre}</Td>
                <Td>{item?.metros >= 6 ? item.metros / 6 : item.metros}</Td>
                <Td>
                  $
                  {item?.metros >= 6
                    ? item?.precio * (item.metros / 6)
                    : item?.precio}
                </Td>
                <Td>
                  <Button colorScheme={"red"} onClick={() => eliminar(index)}>
                    <FaTrash />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        ) : (
          <p>loading</p>
        )}
      </Table>
    </TableContainer>
  );
}
