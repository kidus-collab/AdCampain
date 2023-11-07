import React from "react";

import { Box, Text, Button, Image, Group, Container } from "@mantine/core";

import { Font, images, color } from "../../utils/constants";
const NavBar = () => {
  return (
    <Group justify="space-between">
      <Container fluid>
        <Box ml={3}>
          <Image src={images.logo} />
        </Box>
        <Box display={{ base: "none", md: "flex" }}>
          <Box>
            <Text ff={Font} fs={{ md: "14px", lg: "16px" }} fw="bold">
              pricing
            </Text>
          </Box>
          <Box>
            {" "}
            <Text ff={Font} fs={{ md: "14px", lg: "16px" }} fw="bold">
              About
            </Text>
          </Box>
          <Box>
            {" "}
            <Text ff={Font} fs={{ md: "14px", lg: "16px" }} fw="bold">
              Services
            </Text>
          </Box>
          <Box>
            {" "}
            <Text ff={Font} fs={{ md: "14px", lg: "16px" }} fw="bold">
              Our work
            </Text>
          </Box>
        </Box>

        <Button bg={color[0]}>Contact Us</Button>
      </Container>
    </Group>
  );
};

export default NavBar;
