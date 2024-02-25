import React, { useState, useRef } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Title,
  Box,
  Text,
  Container,
  Card,
  SimpleGrid,
  Button,
  Modal,
  Image,
  rem,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, Embla, useAnimationOffsetEffect } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Fade, Slide } from "react-awesome-reveal";

import classes from "./Projects.module.css";
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
  SiMantine,
  SiGithubpages,
  SiPostcss,
  SiMaterialdesignicons,
  SiNodemon,
} from "@icons-pack/react-simple-icons";
const mockdata = [
  {
    title: "Boost Baseball",
    image: "/client-projects/boost-baseball/boost-baseball-1.png",
    description:
      "Boost Baseball provides a digital platform for showcasing baseball players' profiles, including their statistics and rankings.",
    modalDescription:
      "The Boost Baseball application is designed to revolutionize the way scouts, recruiters, coaches, and baseball enthusiasts approach the talent scouting and evaluation process. By integrating advanced filtering and sorting capabilities, users can effortlessly navigate through a vast database of players, pinpointing those who meet specific criteria such as playing position, graduation year, and other key metrics. This platform stands out as an invaluable tool in the competitive sports landscape, enabling users to uncover hidden gems and track the progress of rising stars in the baseball world.",
    modalTechnologies: [
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
      <SiYarn
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiReacthookform
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiAmazons3
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiReactquery
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiAmazonaws
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiMaterialdesignicons
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiNodemon
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
    ],
    modalImages: [
      "/client-projects/boost-baseball/boost-baseball-2.png",
      "/client-projects/boost-baseball/boost-baseball-3.png",
      "/client-projects/boost-baseball/boost-baseball-4.png",
      "/client-projects/boost-baseball/boost-baseball-5.png",
      "/client-projects/boost-baseball/boost-baseball-6.png",
      "/client-projects/boost-baseball/boost-baseball-7.png",
      "/client-projects/boost-baseball/boost-baseball-8.png",
      "/client-projects/boost-baseball/boost-baseball-9.png",
    ],
  },
  {
    title: "Hope Gives",
    image: "/client-projects/hope-gives/hope-gives-1.png",
    description:
      "Hope Gives is a social fundraising platform designed to bring hope through collective efforts and faith in action.",
    modalDescription:
      "Hope Gives enables individuals, churches, and nonprofits to start campaigns, share stories, manage donations, and witness the impact of every contribution. The website emphasizes authentic storytelling, accountable giving, and fostering a community of audacious hope. It provides tools for sharing campaigns through various channels and offers benefits for donors, including tax deductions and the ability to track the impact of donations.",
    modalTechnologies: [
      <SiMantine
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiNextdotjs
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
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
      <SiPostcss
        size={25}
        color={"var(--cc-green)"}
        style={{ marginLeft: "3px" }}
      />,
      <SiGithubpages
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
      "/client-projects/hope-gives/hope-gives-1.png",
      "/client-projects/hope-gives/hope-gives-2.png",
      "/client-projects/hope-gives/hope-gives-3.png",
      "/client-projects/hope-gives/hope-gives-4.png",
      "/client-projects/hope-gives/hope-gives-5.png",
      "/client-projects/hope-gives/hope-gives-6.png",
      "/client-projects/hope-gives/hope-gives-7.png",
    ],
  },
  {
    title: "Pastor Stays",
    image: "/client-projects/pastor-stays/pastor-stays-2.png",
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
      "/client-projects/pastor-stays/pastor-stays-3.png",
      "/client-projects/pastor-stays/pastor-stays-4.png",
      "/client-projects/pastor-stays/pastor-stays-5.png",
      "/client-projects/pastor-stays/pastor-stays-6.png",
      "/client-projects/pastor-stays/pastor-stays-7.png",
      "/client-projects/pastor-stays/pastor-stays-8.png",
      "/client-projects/pastor-stays/pastor-stays-9.png",
    ],
  },
];

const ProjectsCard = ({ article }: { article: any }) => {
  const TRANSITION_DURATION = 300;
  const [opened, { open, close }] = useDisclosure(false);
  const autoplay = useRef(Autoplay({ delay: 2000 }));
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
        p={"0"}
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
          // maw={600}
          withIndicators
          // style={{ margin: "0 auto" }}
          loop
          getEmblaApi={setEmbla}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          // make it classNames instead of classes for the carousel indicator class
          classNames={classes}
          previousControlProps={{
            style: {
              backgroundColor: "var(--cc-green)",
              color: "white",
            },
          }}
          nextControlProps={{
            style: {
              backgroundColor: "var(--cc-green)",
              color: "white",
            },
          }}
        >
          {article.modalImages?.map((image: any, index: any) => (
            <Carousel.Slide key={index}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}${image}`}
                w={{ base: rem(400), sm: rem(500) }}
                style={{
                  height: rem(400),
                  objectFit: "contain",
                  margin: "0 auto",
                }}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
        <Title
          order={3}
          ta={"center"}
          mt={"var(--mantine-spacing-lg)"}
          mb={"var(--mantine-spacing-xs)"}
          c={"var(--cc-text-color)"}
        >
          Description
        </Title>
        <Text ta={"center"}>{article.modalDescription} </Text>
        <Title
          order={3}
          ta={"center"}
          mt={"var(--mantine-spacing-lg)"}
          c={"var(--cc-text-color)"}
          mb={"var(--mantine-spacing-xs)"}
        >
          Technologies
        </Title>
        <Box className={classes.technologyIcons} ta={"center"}>
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
        shadow="md"
        className={classes.card}
        onClick={() => {
          open();
        }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}${article.image}`}
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
            mb={"var(--mantine-spacing-md)"}
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

export function Projects() {
  return (
    <Box className={classes.projects} id="projects">
      <Container size={"lg"}>
        <Fade duration={800} direction="left">
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
              needs of their businesses. Through a commitment to excellence and
              a client-centric approach, we have navigated complex challenges
              and achieved remarkable outcomes, reinforcing our reputation as
              leaders in our field.
            </Text>
          </Container>
        </Fade>
        <Box display={{ base: "none", sm: "block" }} ta={"center"}>
          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            <Slide direction="right" duration={800} triggerOnce>
              {mockdata.map((article) => (
                <ProjectsCard key={article.title} article={article} />
              ))}
            </Slide>
          </SimpleGrid>
        </Box>
        <Box display={{ base: "block", sm: "none" }} ta={"center"}>
          <Carousel
            previousControlProps={{
              style: {
                backgroundColor: "var(--cc-green)",
                color: "white",
                marginLeft: "-24px",
              },
            }}
            nextControlProps={{
              style: {
                backgroundColor: "var(--cc-green)",
                color: "white",
                marginRight: "-24px",
              },
            }}
            loop
          >
            {mockdata.map((article) => (
              <Carousel.Slide key={article.title}>
                <Slide direction="right" duration={800} triggerOnce>
                  <ProjectsCard article={article} />
                </Slide>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}
