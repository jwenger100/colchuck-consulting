// https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp
"use client"; // This is a client component 👈🏽
import { PuffLoader } from "react-spinners";

// css styling
import classes from "./page.module.css";
// local components
import { HeaderMenu } from "./components/HeaderMenu";
import { About } from "./components/About";
import { Services } from "./components/Services";
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
          color="var(--cc-green)"
          size={100}
          loading={loading}
          aria-label="Loading Spinner"
        />
      </div>
    );
  }
  return (
    <main className={classes.main}>
      <HeaderMenu />
      <HeroImageBackground />
      {/* later move abour componet to sectionsContainer */}

      <div className={classes.contentContainer}>
        <div className={classes.sectionsContainer}>
          <About />
          <Services />
          {/* <Contact /> */}
        </div>
      </div>
    </main>
  );
}
