import cx from "clsx";
import { Title, Text, Container, Button, Overlay, Box } from "@mantine/core";
import classes from "./HeroImageBackground.module.css";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandFacebookFilled,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { TypewriterComponent } from "./TypewriterComponent";

export function HeroImageBackground() {
  return (
    <Box className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <Box className={classes.inner}>
        <Box className={classes.titleContainer}>
          <Title className={classes.title}>COLCHUCK</Title>
          <Title order={3} className={classes.subtitle}>
            CONSULTING
          </Title>
        </Box>
        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Your gateway to bespoke technology solutions that propel your
            business into the future.
          </Text>

          {/* <Box ta={"center"} mt={"60px"} mb={"60px"}>
            <TypewriterComponent />
          </Box> */}
          {/* Parent box for horizontal row alignment */}

          <Box className={classes.contactInfoContainer}>
            {/* Box for icons (aligned left) */}
            <Box>
              <IconBrandLinkedin size={"1.15rem"} color="#fff" />
              <IconBrandFacebook
                size={"1.15rem"}
                color="#fff"
                style={{ marginLeft: "5px" }}
              />
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
                Contact
              </Text>
              <Text
                c="white"
                fz={"1rem"}
                display={{ base: "none", sm: "block" }}
              >
                {/* tel: – place a phone call
                  mailto: – open an email app
                  callto: open Skype
                  sms: – send a text message */}
                3603164900
              </Text>
              <Text c="white" fz={"1rem"}>
                <a
                  href="mailto:info@colchuckconsulting.com?Subject=General%20Inquiry"
                  style={{ color: "white" }}
                >
                  info@colchuckconsulting.com
                </a>
              </Text>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
