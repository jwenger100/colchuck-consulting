// https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp
"use client"; // This is a client component 👈🏽

// css styling
// import styles from "./page.module.css";
import { createStyles } from "@mantine/core";
// local components
import { HeaderResponsive } from "./components/HeaderResponsive";
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

const useStyles = createStyles((theme) => ({
  main: {
    // minHeight: "100vh",
  },
  /* container for everything below the landing page HeroImageBackground */
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  sectionsContainer: {
    position: "absolute",
    top: "100vh",
    width: "100%",
  },
}));

export default function Home() {
  const { classes } = useStyles();
  return (
    <main className={classes.main}>
      <HeroImageBackground />
      <HeaderResponsive links={links} />
      <div className={classes.contentContainer}>
        <div className={classes.sectionsContainer}>
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
