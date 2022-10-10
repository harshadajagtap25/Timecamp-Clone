import React from "react";
import { BiPlus } from "react-icons/bi";
import styles from "../user.module.css";
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

function GuestInvite() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box marginLeft={10} marginRight={5}>
      <Button
        w={150}
        borderRadius="10px"
        bg="#4bb063"
        color="white"
        onClick={onOpen}
      >
        <BiPlus />
        Invite people
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        w="600px"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Invite user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box className={styles.guest}>
              <h3>Each person's email address:</h3>
              <div styled={{ marginTop: "30px" }}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Email address  "
                />
              </div>
            </Box>
          </ModalBody>
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
}

export default GuestInvite;
