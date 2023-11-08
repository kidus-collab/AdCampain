//import Image from "next/image";
import styles from "./page.module.css";

import { Box, Text } from "@mantine/core";
import NavBar from "./Components/NavBar";
import Layout from "./Components/LandingPage/Layout";
import Trusted from "./Components/Trusted";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Layout />
      <Trusted />
    </main>
  );
}
