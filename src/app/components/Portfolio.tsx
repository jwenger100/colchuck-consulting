import { useState, useRef } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Title,
  Box,
  Text,
  Container,
  Card,
  AspectRatio,
  SimpleGrid,
  Button,
  TextInput,
  Modal,
  Image,
  rem,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, Embla, useAnimationOffsetEffect } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

// import Image from "next/image";
import classes from "./Portfolio.module.css";
import {
  SiReact,
  SiTypescript,
  SiCss3,
  SiNextdotjs,
  SiMui,
  SiPrisma,
  SiAmazonaws,
  SiReactquery,
  SiAmazons3,
  SiSharp,
  SiGooglemaps,
  SiNodedotjs,
  SiReacthookform,
  SiYarn,
} from "@icons-pack/react-simple-icons";
import React from "react";
const mockdata = [
  {
    title: "Pastor Stays",
    image: "/client-projects/pastor-stays-3.png",
    date: "August 18, 2022",
    description:
      "Pastor Stays offers tailored lodging for pastors, primarily vacation homes, with a focus on community support.",
    modalDescription:
      "Pastor Stays is a website dedicated to providing accommodation options for pastors, offering a variety of lodgings such as vacation condos, homes, shared homes, resorts, retreat centers, and more unique options like treehouses and boathouses. It aims to serve pastors seeking rest and retreat opportunities, facilitating a supportive community environment through various types of stays. The site includes sections for home and pastor logins, indicating a platform where hosts can offer their spaces and pastors can find suitable accommodations. Additionally, there's an option for visitors to donate, suggesting a non-profit component to their operations.",
    modalTechnologies: [
      <SiReact
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiTypescript
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiCss3
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiNextdotjs
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiMui
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiPrisma
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiAmazonaws
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiReactquery
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiAmazons3
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiSharp
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiGooglemaps
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiNodedotjs
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiReacthookform
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiYarn
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
    ],
    modalImages: [
      "/client-projects/pastor-stays-3.png",
      "/founders.png",
      "/colchuck-lake-1.jpeg",
      "/colchuck-lake-2.jpg",
    ],
  },
  {
    title: "Best forests to visit in North America",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    description: "August 27, 2022",
  },
  {
    title: "Hawaii beaches review: better than you think",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    description: "September 9, 2022",
  },
];

const PortfolioCard = ({ article }: { article: any }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const TRANSITION_DURATION = 300;
  const [embla, setEmbla] = useState<Embla | null>(null);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  return (
    <>
      <Modal
        size={"100%"}
        opened={opened}
        fullScreen={isSmallScreen} // Apply based on screen size
        transitionProps={{ duration: TRANSITION_DURATION }}
        onClose={close}
        ta={"center"}
      >
        {/* Modal content */}
        <Title
          order={1}
          mt={"var(--mantine-spacing-sm)"}
          mb={"var(--mantine-spacing-lg)"}
          ta={"center"}
          c={"var(--cc-text-color)"}
        >
          {article.title}
        </Title>
        {/* maw max width */}
        {/* mah max height */}
        {/* mx marginLeft marginRight */}
        {/* my marginTop marginBottom */}
        {/* MODAL IMAGE */}
        <Carousel
          withIndicators
          height={350}
          loop
          getEmblaApi={setEmbla}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          // make it classNames instead of classes for the carousel indicator class
          classNames={classes}
        >
          {article.modalImages?.map((image: any, index: any) => (
            <Carousel.Slide key={index}>
              <Image
                src={image}
                style={{
                  width: "100%",
                  height: rem(500),
                  objectFit: "cover",
                }}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
        <Title
          order={3}
          ta={"left"}
          mt={"var(--mantine-spacing-lg)"}
          c={"var(--cc-text-color)"}
        >
          Description
        </Title>
        <Text ta={"left"}>{article.modalDescription} </Text>
        <Title
          order={3}
          ta={"left"}
          mt={"var(--mantine-spacing-lg)"}
          c={"var(--cc-text-color)"}
        >
          Technologies
        </Title>
        <Box className={classes.technologyIcons} ta={"left"}>
          {article.modalTechnologies?.map((icon: any, index: any) => (
            <React.Fragment key={index}>{icon}</React.Fragment>
          ))}
        </Box>
        <Button
          onClick={close}
          mt={"var(--mantine-spacing-md)"}
          className={classes.closeButton}
        >
          Close
        </Button>
      </Modal>

      <Card
        p="0"
        radius="sm"
        className={classes.card}
        onClick={() => {
          open();
        }}
      >
        <Image
          src={article.image}
          alt={article.title}
          className={classes.cardImage}
        />
        <Box
          pt={"var(--mantine-spacing-md)"}
          pl={"var(--mantine-spacing-md)"}
          pr={"var(--mantine-spacing-md)"}
          ta={"center"}
        >
          <Title fw={"bold"} c={"var(--cc-text-color)"} order={3}>
            {article.title}
          </Title>
          <Text c="dimmed" size="xs" fw={700}>
            {article.description}
          </Text>
          <Button
            mt={"var(--mantine-spacing-md)"}
            onClick={() => open()}
            className={classes.viewProjectbutton}
          >
            View Project
          </Button>
        </Box>
      </Card>
    </>
  );
};

export function Portfolio() {
  return (
    <Box className={classes.projects} id="portfolio">
      <Container size={"lg"}>
        <Title ta={"center"} c={"var(--cc-text-color)"}>
          Projects
        </Title>
        <Container
          size="lg"
          mb={"var(--mantine-spacing-lg)"}
          mt={"var(--mantine-spacing-sm)"}
        >
          <Text size="sm">
            We are proud to showcase a diverse portfolio of projects,
            demonstrating our extensive experience and collaborative success
            across multiple industries. Our team has partnered with clients to
            deliver innovative, custom-tailored solutions that meet the unique
            needs of their businesses. Through a commitment to excellence and a
            client-centric approach, we have navigated complex challenges and
            achieved remarkable outcomes, reinforcing our reputation as leaders
            in our field.
          </Text>
        </Container>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          {mockdata.map((article) => (
            <PortfolioCard key={article.title} article={article} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
