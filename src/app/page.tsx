// https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp
"use client"; // This is a client component 👈🏽
import { PuffLoader } from "react-spinners";

// css styling
import classes from "./page.module.css";
// local components
import { HeaderMegaMenu } from "./components/HeaderResponsive";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { HeroImageBackground } from "./components/HeroImageBackground";

import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   height: "100vh",
      // }}
      >
        <PuffLoader
          color="#1db954"
          size={100}
          loading={loading}
          aria-label="Loading Spinner"
        />
      </div>
    );
  }
  return (
    <main className={classes.main}>
      <HeroImageBackground />
      <HeaderMegaMenu />
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
