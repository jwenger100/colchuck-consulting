// https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp
"use client"; // This is a client component 👈🏽

// css styling
import styles from "./page.module.css";
// local components
import { HeaderResponsive } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { HeroImageBackground } from "./components/HeroImageBackground";

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
      <HeroImageBackground />
      <HeaderResponsive links={links} />
      <div className={styles.contentContainer}>
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
