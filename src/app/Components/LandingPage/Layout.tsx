import React from "react";

import { Stack } from "@mantine/core";
import LandingHeader from "./LandingHeader";
import LandingBody from "./LandingBody";
import LandingFooter from "./LandingFooter";

const Layout = () => {
  return (
    <Stack>
      <LandingHeader />
      <LandingBody />
      <LandingFooter />
    </Stack>
  );
};

export default Layout;
