import React from "react";

import { Box, Text, Button, Flex, Container } from "@mantine/core";
import Image from "next/image";

import { Font, images, color } from "../utils/constants";
const NavBar = () => {
  return (
    <Flex
      mx={6}
      pos="absolute"
      top={5}
      left={0}
      right={0}
      justify="space-between"
    >
      <Box ml={3}>
        <Image
          src={images.logo}
          alt="Website Logo"
          width="100px"
          height="200px"
        />
      </Box>
      <Box display={{ base: "none", md: "flex" }}>
        <Box>
          <Text ff={Font[0]} fs={{ md: "14px", lg: "16px" }} fw="bold">
            pricing
          </Text>
        </Box>
        <Box>
          {" "}
          <Text ff={Font[0]} fs={{ md: "14px", lg: "16px" }} fw="bold">
            About
          </Text>
        </Box>
        <Box>
          {" "}
          <Text ff={Font[0]} fs={{ md: "14px", lg: "16px" }} fw="bold">
            Services
          </Text>
        </Box>
        <Box>
          {" "}
          <Text ff={Font[0]} fs={{ md: "14px", lg: "16px" }} fw="bold">
            Our work
          </Text>
        </Box>
      </Box>

      <Button bg={color[0]}>Contact Us</Button>
    </Flex>
  );
};

export default NavBar;
