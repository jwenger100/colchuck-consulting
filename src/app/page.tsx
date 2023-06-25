// https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp
"use client"; // This is a client component 👈🏽

import styles from "./page.module.css";
import { HeaderResponsive } from "./components/Header";
import {
  Image,
  Card,
  Text,
  Badge,
  Button,
  Group,
  Title,
  BackgroundImage,
} from "@mantine/core";

import { TypewriterComponent } from "./components/Typewriter";

const links = [
  { label: "Home", link: "/" },
  { label: "About", link: "about" },
  { label: "Projects", link: "projects" },
  { label: "Contact", link: "contact" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <BackgroundImage
        src="/colchuck-lake.jpeg"
        className={styles.backgroundImage}
      />
      <HeaderResponsive links={links} />
      <div className={styles.contentContainer}>
        <Title order={1} className={`${styles.slideDown} ${styles.pageTitle}`}>
          Colchuck Consulting
        </Title>
        <TypewriterComponent />
        <div className={styles.cardContainer}>
          {/* About */}
          <div className={styles.aboutUs} id="about">
            <Title order={2}>About Us</Title>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className={styles.projects} id="projects">
            <Title order={2}>Projects</Title>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className={styles.contact} id="contact">
            <Title order={2}>Contact</Title>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </main>
  );
}
