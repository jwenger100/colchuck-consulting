// https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp
"use client"; // This is a client component 👈🏽

// css styling
import styles from "./page.module.css";
// local components
import { HeaderResponsive } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { ParticlesComponent } from "./components/ParticlesComponent";
import { TypewriterComponent } from "./components/TypewriterComponent";
// mantine components
import { Title } from "@mantine/core";

import { ChevronsDown } from "tabler-icons-react";

const links = [
  // { label: "Home", link: "/" },
  { label: "About", link: "about" },
  { label: "Skills", link: "skills" },
  // { label: "Projects", link: "projects" },
  //TODO: Add logos of clients
  // { label: "Clients", link: "clients"}
  { label: "Contact", link: "contact" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <ParticlesComponent />
      <HeaderResponsive links={links} />
      <div className={styles.contentContainer}>
        <Title order={1} className={`${styles.slideDown} ${styles.pageTitle}`}>
          Colchuck Consulting
        </Title>
        <TypewriterComponent />
        <ChevronsDown color="white" size={48} className={styles.chevronsDown} />
        <div className={styles.sectionsContainer}>
          <About />
          <Skills
            title="Skills"
            description="Mastering the digital sphere with exceptional web development, intuitive UI/UX design, cutting-edge coding practices, and thorough performance testing for seamless user experiences."
          />
          <Contact />
        </div>
      </div>
    </main>
  );
}
