import React from "react";

import { Box, Flex, Image, Text } from "@mantine/core";

import { Font, images } from "../../utils/constants";

const About = () => {
  return (
    <section id="#about">
      <Box>About</Box>
      <Text>Why webline Ads ?</Text>
      <Flex justify="space-between">
        <Box w="40%">
          <Image src={images.About} />
        </Box>
        <Box w="60%">
          <Text>
            At Webline Ads, we understand the importance of telling your unique
            business story and reaching your target audience in the digital
            landscape. Our passionate team of experts is dedicated to helping
            you maximize the potential of social media platforms to achieve
            exceptional business growth. We go beyond the ordinary by combining
            innovative strategies and creative content to create engaging
            experiences for your audience. From crafting compelling
            advertisements to designing strategic campaigns, From Facebook to
            Instagram, Twitter to YouTube & Linkedin , we'll optimize your
            presence across these platforms, expand your reach, and cultivate a
            loyal community of customers who are genuinely passionate about your
            brand. We believe in the power of collaboration and view our clients
            as true partners. Your vision, goals, and aspirations become our
            driving force. Together, we'll embark on an exciting journey of
            growth, pushing boundaries, and surpassing expectations. Are you
            ready to make waves in the digital world? Let Webline Ads be your
            guiding light. Ignite your brand, spark conversations, and unlock
            unparalleled success through social media advertising. Your business
            deserves to be heard, and we're here to ensure it resonates with the
            world.
          </Text>
        </Box>
      </Flex>
    </section>
  );
};

export default About;
