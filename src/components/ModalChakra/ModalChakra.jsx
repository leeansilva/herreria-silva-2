import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";

export default function ModalChakra({titleButton,titleModal,handle,children}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnClick = () =>{
    handle();
    onClose();
  }
  return (
    <>
      <Button colorScheme={'green'} onClick={onOpen}>{titleButton}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{titleModal}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
                colorScheme={"green"}
                variant={"solid"}
                onClick={handleOnClick}
              >
                Confirmar
              </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
