// https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp
"use client"; // This is a client component 👈🏽
import { PuffLoader } from "react-spinners";

// css styling
import classes from "./page.module.css";
// local components
import { HeaderMenu } from "./components/HeaderMenu";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Projects } from "./components/Projects";
import { TechnologyGrid } from "./components/TechnologyGrid";
import { ContactUs } from "./components/ContactUs";
import { HeroImageBackground } from "./components/HeroImageBackground";

import { useState, useEffect } from "react";
import { Box } from "@mantine/core";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <PuffLoader
          color="var(--cc-green)"
          size={100}
          loading={loading}
          aria-label="Loading Spinner"
        />
      </Box>
    );
  }
  return (
    <main className={classes.main}>
      <HeaderMenu />
      <HeroImageBackground />
      <About />
      <Services />
      <TechnologyGrid />
      <Projects />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
