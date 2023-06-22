"use client";

import styles from "./page.module.css";
import { HeaderResponsive } from "./components/Header";
import { Image } from "@mantine/core";

const links = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contact" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderResponsive links={links} />
      <Image src="/colchuck-lake.jpeg" />
    </main>
  );
}
