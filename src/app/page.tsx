"use client";

//import Image from "next/image";
import styles from "./page.module.css";

import NavBar from "./Components/NavBar";
import Layout from "./Components/LandingPage/Layout";
import Trusted from "./Components/Trusted";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />

      <Trusted />
    </main>
  );
}
