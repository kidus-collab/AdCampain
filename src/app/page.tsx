//import Image from "next/image";
import styles from "./page.module.css";
import { Paper, Text, Loader } from "@mantine/core";

export default function Home() {
  return (
    <main className={styles.main}>
      <Paper>
        <Text>Hello world</Text>
      </Paper>
    </main>
  );
}
