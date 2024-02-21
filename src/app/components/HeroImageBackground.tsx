import cx from "clsx";
import { Title, Text, Container, Button, Overlay, Box } from "@mantine/core";
import classes from "./HeroImageBackground.module.css";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconMailFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import { TypewriterComponent } from "./TypewriterComponent";

export function HeroImageBackground() {
  return (
    <Box className={classes.wrapper}>
      <Overlay color="#000" backgroundOpacity={0.45} zIndex={1} />
      <Box className={classes.inner}>
        <Box className={classes.titleContainer}>
          <Title className={classes.title} fw={"600"}>
            COLCHUCK
          </Title>
          <Title order={3} className={classes.subtitle} fw={"400"}>
            CONSULTING
          </Title>
        </Box>
        <Container size={640}>
          <Container size={400}>
            <Text size="lg" ta={"center"} className={classes.description}>
              Your gateway to bespoke technology solutions that propel your
              business into the future.
            </Text>
          </Container>
          {/* 
          <Box ta={"center"} mt={"60px"} mb={"60px"}>
            <TypewriterComponent />
          </Box> */}
          {/* Parent box for horizontal row alignment */}

          <Box className={classes.contactInfoContainer}>
            {/* Box for icons (aligned left) */}
            <Box>
              <a
                href="https://www.facebook.com/people/Colchuck-Consulting/100092182747710/"
                target="_blank"
                className={classes.socialLink}
              >
                <IconBrandFacebook
                  style={{ marginRight: "5px" }}
                  className={classes.socialIcon}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/colchuck-consulting"
                target="_blank"
                className={classes.socialLink}
              >
                <IconBrandLinkedin className={classes.socialIcon} />
              </a>
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
                <a
                  href="tel:3603164900"
                  rel="noopener"
                  style={{ color: "white" }}
                >
                  (360) 316-4900
                </a>
              </Box>
              <Box display={{ base: "block", sm: "none" }}>
                <a
                  href="tel:3603164900"
                  rel="noopener"
                  style={{ color: "white" }}
                >
                  <IconPhoneFilled
                    size={"1.15rem"}
                    className={classes.socialIcon}
                  />
                </a>
              </Box>
              <Box display={{ base: "none", sm: "block" }}>
                <a
                  href="mailto:info@colchuckconsulting.com?Subject=General%20Inquiry"
                  style={{ color: "white" }}
                >
                  info@colchuckconsulting.com
                </a>
              </Box>
              <Box display={{ xs: "block", sm: "none" }}>
                <a
                  href="mailto:info@colchuckconsulting.com?Subject=General%20Inquiry"
                  style={{ color: "white" }}
                >
                  <IconMailFilled
                    size={"1.15rem"}
                    className={classes.socialIcon}
                  />
                </a>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
