import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import {
  Button,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

const Email = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box marginLeft={5}>
      <Button w={50} borderRadius="10px" color="black" onClick={onOpen}>
        <HiOutlineMail />
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Email;
