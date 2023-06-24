"use client";

import styles from "./page.module.css";
import { HeaderResponsive } from "./components/Header";
import { Image, Card, Text, Badge, Button, Group } from "@mantine/core";

const links = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contact" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.backgroundImage}></div>
      <HeaderResponsive links={links} />
      <div>Hello darkness my old friend I've come to talk with you again</div>
    </main>
  );
}
