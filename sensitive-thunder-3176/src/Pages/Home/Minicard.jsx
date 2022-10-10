import {
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import React from "react";
import Faq from "./Faq";

const Minicard = () => {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Stack spacing={"2"} w={"90%"}>
            <Text
              as={"span"}
              color={"#25cf60"}
              fontSize={"sm"}
              fontFamily={"nunito sans, sans-serif"}
            >
              FOR EMPLOYEES
            </Text>

            <Heading
              lineHeight={0.8}
              fontWeight={700}
              textAlign={"left"}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              fontFamily={"lato"}
            >
              <Text as={"span"} fontSize={"46px"}>
                Track your employees working time
              </Text>
            </Heading>

            <Text color={"#1b1b20"}>
              Log working hours of your employees automatically or manually and
              make sure they are billed fairly.
            </Text>
          </Stack>
          <Faq />
          <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
            <Button
              rounded={"full"}
              size={"lg"}
              fontSize={"sm"}
              px={8}
              w={80}
              color={"white"}
              bg={"#25cf60"}
              _hover={"#25cf60"}
            >
              Track employees time
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                " https://cdn-m.timecamp.com/img/greenbranding/features/img-home-features.png"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Minicard;
