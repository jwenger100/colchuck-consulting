import React from "react";
import {
  Container,
  Text,
  Paper,
  Avatar,
  SimpleGrid,
  Title,
  Box,
  Anchor,
} from "@mantine/core";
import { IconQuote, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import classes from "./Testimonials.module.css";
import { Zoom, Fade, Slide } from "react-awesome-reveal";

// Mock data for the testimonials
const testimonials = [
  {
    id: 1,
    name: "Brandon Beeson",
    organization: "Pastor Stays",
    description:
      "I had the pleasure of working with Colchuck Consulting to create a web app, and I can't express how grateful I am to have found them. Before partnering with Kyle and Jon, we had struggled with two other tech companies that were unable to get our project off the ground, and we wasted a significant amount of time and resources in the process.",
  },
  {
    id: 2,
    name: "Andre Marshall",
    organization: "Boost Baseball",
    description:
      "They are great! Not the most straight forward project and has many evolving pieces, they are very patient and understanding. They are also very flexible throughout the process! Highly recommend these guys if you are in need of Software/App development or even a website also.",
  },
  {
    id: 3,
    name: "Francis Marquez",
    organization: "The Mas Agency",
    description:
      "We are a sports management firm based in South Florida and contracted Colchuck to develop our internal site. The guys were awesome to deal with professionally and personally. So much so that we now hired them again for a second tech development stage. Highly recommended.",
  },
];

const clientLogos = [
  `${process.env.NEXT_PUBLIC_BASE_PATH}/client-logos/mas-logo-1.png`,
  `${process.env.NEXT_PUBLIC_BASE_PATH}/client-logos/boost-baseball-logo-3.svg`,
  `${process.env.NEXT_PUBLIC_BASE_PATH}/client-logos/pastor-stays-logo.png`,
];

export function Testimonials() {
  return (
    <>
      {/* New Banner Section for Our Clients */}
      <Fade direction="up" duration={800}>
        <Box className={classes.clientLogosContainer}>
          <Box pt="sm" ta="center">
            <Title mb="xs" mt="xl" c="white">
              Our Clients
            </Title>
            <Text c="white">
              Some of the companies we have had the pleasure of working with
            </Text>
            <Box className={classes.clientLogosImagesContainer}>
              {clientLogos.map((logo, index) => (
                <Box key={index} p="md">
                  {/* For Mantine v3.0 or later, use Image component */}
                  <Image
                    src={logo}
                    unoptimized
                    alt={`Client ${index + 1}`}
                    height={100}
                    width={150}
                    className={classes.clientLogo}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Fade>
      <Container>
        <Slide direction="left" duration={1000} damping={3}>
          <Title ta={"center"} c={"var(--cc-text-color)"} mt={"xl"}>
            Testimonials
          </Title>
          <Text ta={"center"} c={"var(--cc-text-color)"}>
            See what our clients have to say about us
          </Text>
          <Text ta={"center"} mb={"60px"}>
            Read all our reviews{" "}
            <Anchor
              rel="noopener"
              target="_blank"
              href="https://www.google.com/search?q=colchuck+consulting&oq=colchuck+consulting&aqs=chrome..69i57j69i65j69i61l2j69i65l2.8310j0j7&sourceid=chrome&ie=UTF-8#lrd=0x6cf17a09d3b42db3:0xe6c50446bd1d0a83,1,,,,"
            >
              here
              <IconExternalLink
                size={16}
                style={{ marginLeft: "2px", marginBottom: "-3px" }}
              />
            </Anchor>
          </Text>
        </Slide>
        <SimpleGrid
          cols={{ sm: 1, lg: 3 }}
          spacing="lg"
          mb={"var(--mantine-spacing-xl)"}
        >
          {testimonials.map((testimonial) => (
            <Zoom key={testimonial.id} duration={1000}>
              <Paper
                className={classes.testimonialCard}
                key={testimonial.id}
                radius="md"
                withBorder
                shadow="md"
                p="lg"
                mb={"var(--mantine-spacing-xl)"}
                bg="var(--mantine-color-body)"
                style={{}}
              >
                <Box
                  style={{
                    position: "absolute",
                    top: "-45px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <Avatar
                    color="#FFFFFF"
                    size={80}
                    radius={80}
                    variant="filled"
                    style={{ border: "1px solid #ccc" }}
                  >
                    <IconQuote size={60} color="var(--cc-green)" />
                  </Avatar>
                </Box>
                <Text ta="center" mb="lg" c="dimmed" mt={"30px"}>
                  {testimonial.description}
                </Text>
                <Box ta="center" fz="lg" fw={500} mt="50px">
                  {testimonial.name}
                  <Text ta="center" c="dimmed">
                    {testimonial.organization}
                  </Text>
                </Box>
              </Paper>
            </Zoom>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
