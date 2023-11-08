import React from "react";
import { Box, Text, Flex, Button } from "@mantine/core";

import { color, Font } from "../../utils/constants";
const LandingFooter = () => {
  return (
    <Box>
      <Text my={5} ff={Font[1]}>
        Unleash your brand's social media potential with Webline Ads. Elevate,
        <br /> engage, and conquer the digital landscape.
      </Text>
      <Flex mt={3}>
        <Button bg={color[0]}>Start Now</Button>
      </Flex>
    </Box>
  );
};

export default LandingFooter;
