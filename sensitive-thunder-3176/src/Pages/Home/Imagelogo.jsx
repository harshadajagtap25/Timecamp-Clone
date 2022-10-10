import { Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Imagelogo = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <Stack bg={"#37c266"} m={0} p={4} spacing={8}>
        <Text
          fontWeight={"semibold"}
          fontSize={"lg"}
          color={"white"}
          textAlign={"center"}
        >
          Trusted by 18,000 teams from all over the world (and still growing!)
        </Text>
        <SimpleGrid
          px={[10, 20, 40]}
          justifyContent={"center"}
          columns={[2, 3, 3, 6]}
          spacing={6}
        >
          <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png" />
          <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png" />
          <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png" />
          <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png" />
          <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png" />
          <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png" />
        </SimpleGrid>
      </Stack>
    </div>
  );
};

export default Imagelogo;
