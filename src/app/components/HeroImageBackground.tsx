"use client";
import { Title, Text, Container, Overlay, Box, Anchor } from "@mantine/core";
import classes from "./HeroImageBackground.module.css";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconMailFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

import { TypewriterComponent } from "./TypewriterComponent";

export function HeroImageBackground() {
  // List of image URLs
  const images = [
    `${process.env.NEXT_PUBLIC_BASE_PATH}/aasgard-pass.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH}/colchuck-lake-2.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH}/enchantments-alpine-lakes-1.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH}/enchantments-alpine-lakes-2.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH}/enchantments-goats-1.jpg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH}/enchantments-goats-2.webp`,
    `${process.env.NEXT_PUBLIC_BASE_PATH}/enchantments-mtn-1.jpeg`,
    `${process.env.NEXT_PUBLIC_BASE_PATH}/enchantments-mtn-2.jpg`,
  ];

  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

  useEffect(() => {
    // Retrieve the current index from localStorage, default to -1 if not found
    const currentIndex = parseInt(
      localStorage.getItem("currentIndex") ?? "-1",
      10
    );

    // Calculate the next index, looping back to 0 if at the last image
    const nextIndex = (currentIndex + 1) % images.length;

    // Update the background image URL with the next image
    const newImage = images[nextIndex];
    setBackgroundImageUrl(newImage);

    // Update the current index in localStorage
    localStorage.setItem("currentIndex", nextIndex.toString());
  }, []); // Empty dependency array to run only once on mount

  return (
    <Box className={classes.wrapper}>
      <Fade duration={1000} triggerOnce>
        {backgroundImageUrl && ( // Only render the Image component if backgroundImageUrl is not an empty string
          <Image
            src={backgroundImageUrl}
            alt="Colchuck Lake"
            fill={true}
            quality={100}
            priority={true} // Load this image before others
            unoptimized
            className={classes.bgImage}
          />
        )}
      </Fade>
      <Overlay color="#000" backgroundOpacity={0.45} zIndex={1} />
      <Box className={classes.inner}>
        <Fade cascade damping={0.1} duration={1400} delay={200}>
          <Box className={classes.titleContainer}>
            <Title className={classes.title} fw={"600"}>
              COLCHUCK
            </Title>
            <Title order={3} className={classes.subtitle} fw={"400"}>
              CONSULTING
            </Title>
          </Box>
        </Fade>
        <Container size={640}>
          <Fade cascade damping={0.1} duration={1500} delay={300}>
            <Container size={400}>
              <Text size="lg" ta={"center"} className={classes.description}>
                Your gateway to bespoke technology solutions that propel your
                business into the future.
              </Text>
            </Container>
          </Fade>
          <Zoom duration={1600}>
            <Box ta={"center"} mt={"60px"} mb={"60px"}>
              <TypewriterComponent />
            </Box>
          </Zoom>
          {/* Parent box for contact info */}
          <Slide direction="up" duration={1700}>
            <Box className={classes.contactInfoContainer}>
              {/* Box for icons (aligned left) */}
              <Box>
                <Anchor
                  href="https://www.facebook.com/people/Colchuck-Consulting/100092182747710/"
                  target="_blank"
                  className={classes.socialLink}
                >
                  <IconBrandFacebook
                    style={{ marginRight: "5px" }}
                    className={classes.socialIcon}
                    stroke={1.5}
                  />
                </Anchor>
                <Anchor
                  href="https://www.linkedin.com/company/colchuck-consulting"
                  target="_blank"
                  className={classes.socialLink}
                >
                  <IconBrandLinkedin
                    className={classes.socialIcon}
                    stroke={1.5}
                  />
                </Anchor>
              </Box>
              {/* Box for contact information (aligned right), now also with flex layout for horizontal alignment */}
              <Box
                style={{
                  display: "flex", // Aligns items horizontally
                  alignItems: "center", // Centers items vertically
                  gap: "16px", // Adds space between items
                }}
              >
                {" "}
                <Text
                  c="white"
                  fz={"1rem"}
                  display={{ base: "none", sm: "block" }}
                >
                  Contact:
                </Text>
                <Box display={{ base: "none", sm: "block" }}>
                  <Anchor
                    href="tel:3603164900"
                    underline="always"
                    rel="noopener"
                    style={{ color: "white" }}
                  >
                    (360) 316-4900
                  </Anchor>
                </Box>
                <Box display={{ base: "block", sm: "none" }}>
                  <Anchor
                    href="tel:3603164900"
                    rel="noopener"
                    style={{ color: "white" }}
                  >
                    <IconPhoneFilled
                      size={"1.15rem"}
                      className={classes.socialIcon}
                    />
                  </Anchor>
                </Box>
                <Box display={{ base: "none", sm: "block" }}>
                  <Anchor
                    href="mailto:info@colchuckconsulting.com?Subject=General%20Inquiry"
                    style={{ color: "white" }}
                    underline="always"
                  >
                    info@colchuckconsulting.com
                  </Anchor>
                </Box>
                <Box display={{ xs: "block", sm: "none" }}>
                  <Anchor
                    href="mailto:info@colchuckconsulting.com?Subject=General%20Inquiry"
                    style={{ color: "white" }}
                  >
                    <IconMailFilled
                      size={"1.15rem"}
                      className={classes.socialIcon}
                    />
                  </Anchor>
                </Box>
              </Box>
            </Box>
          </Slide>
        </Container>
      </Box>
    </Box>
  );
}
