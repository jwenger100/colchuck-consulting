import React from "react";
import {
  Title,
  Text,
  rem,
  Anchor,
  Grid,
  Container,
  Box,
  List,
  ThemeIcon,
} from "@mantine/core";
import {
  IconCircleCheck,
  IconFrame,
  IconAnalyze,
  IconLayoutGrid,
  IconTerminal,
  IconZoomCode,
  IconRocket,
} from "@tabler/icons-react";
import classes from "./About.module.css";
import { Fade, Slide } from "react-awesome-reveal";

export function About() {
  return (
    <Box id="about" className={classes.wrapper}>
      <Container size="lg">
        <Title order={1} ta={"center"} className={classes.title}></Title>
        <Grid>
          <Slide direction="left">
            <Grid.Col span={{ xs: 12 }}>
              <Fade duration={800}>
                <Title
                  className={classes.title}
                  c={"var(--cc-text-color)"}
                  ta={"center"}
                  mt={"md"}
                >
                  Who We Are{" "}
                </Title>
                <Text c="var(--cc-text-color)" mt="md" ff={"var(--font-varta)"}>
                  We are driven by the belief that technology should be an
                  enabler of unlocking potential, making complex tasks simple,
                  and unlocking new possibilities for growth.{" "}
                  <b>Colchuck Consulting</b> was envisioned during a trip to{" "}
                  <Anchor
                    href="https://earth.google.com/web/search/Colchuck+Lake,+Leavenworth,+WA/@47.4984306,-120.8333841,1702.27471821a,686.05166596d,35y,0h,45t,0r/data=CokBGl8SWQolMHg1NDlhNDUwMzM0MzU2MmYzOjB4Y2FjM2E0MDRiMWM0OThkNxmvKeuSzL9HQCFooEMqVjVewCoeQ29sY2h1Y2sgTGFrZSwgTGVhdmVud29ydGgsIFdBGAIgASImCiQJkgGtdGnAR0ARThROffS0R0AZnKRRKqssXsAh0LA3KDs1XsAoAg"
                    target="_blank"
                  >
                    Colchuck Lake
                  </Anchor>
                  , in the Enchantments of Washington State. We were inspired by
                  the beauty of the lake, and the surrounding mountains. We want
                  to bring that same beauty and simplicity to software and
                  technology solutions. Founded by a collective of seasoned
                  industry professionals, with a combined 40 years of experience
                  at Fortune 500 companies, we are ready to bring your ideas to
                  reality. Our focus on custom, high-quality digital solutions
                  will drive your business to the next level.
                </Text>
              </Fade>
              {/* Route this to another page that has team member cards */}
              {/* <Button>Meet the Team</Button> */}
            </Grid.Col>
          </Slide>
          <Grid.Col span={{ xs: 12 }} className={classes.rightSection}>
            <Slide direction="right" style={{ marginBottom: "45px" }}>
              <Title
                c={"var(--cc-text-color)"}
                mb={{ base: "-35px" }}
                ta={"center"}
              >
                Elevate Your Digital Presence
              </Title>
            </Slide>
            <Slide direction="right">
              <div className={classes.videoContainer}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline // This ensures inline playback on iOS Safari
                  className={classes.videoControls}
                >
                  <source
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/app-process.mp4`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Slide>
            <Fade cascade duration={1500}>
              <Text
                c="var(--cc-text-color)"
                mb={"sm"}
                mt={{ base: "20px", sm: "20px" }}
              >
                By working with <b>Colchuck Consulting</b>, we will navigate the
                complex digital landscape so you don't have to. Our expertise
                stretches from the initial spark of an idea to the launch of
                your web presence or mobile app. It is broken down into a
                seamless, six-step process that includes:
              </Text>
            </Fade>
            <List
              spacing="xs"
              size="sm"
              className={classes.list}
              center
              c={"var(--cc-text-color)"}
              icon={
                <ThemeIcon color="var(--cc-green)" size={24} radius="xl">
                  <IconCircleCheck
                    style={{ width: rem(16), height: rem(16) }}
                  />
                </ThemeIcon>
              }
            >
              <Fade cascade damping={0.1} duration={1000}>
                <List.Item
                  icon={
                    <ThemeIcon color="var(--cc-green)" size={24} radius="xl">
                      <IconAnalyze
                        style={{ width: rem(16), height: rem(16) }}
                      />
                    </ThemeIcon>
                  }
                  className={classes.listItem1}
                >
                  <b style={{ color: "white" }}>Analysis</b> - Our expert team
                  will guide you through a comprehensive analysis of your
                  project goals, potential challenges and how to maximize your
                  idea.
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon color="var(--cc-green)" size={24} radius="xl">
                      <IconFrame style={{ width: rem(16), height: rem(16) }} />
                    </ThemeIcon>
                  }
                  className={classes.listItem2}
                >
                  <b style={{ color: "white" }}>Wireframing</b> - In this stage,
                  we transition your vision into a tangible, digital blueprint
                  through meticulous wireframing. Our approach involves crafting
                  detailed blueprints that outline the structural layout of your
                  application or website.
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon color="var(--cc-green)" size={24} radius="xl">
                      <IconLayoutGrid
                        style={{ width: rem(16), height: rem(16) }}
                      />
                    </ThemeIcon>
                  }
                  className={classes.listItem3}
                >
                  <b style={{ color: "white" }}>Design</b> - Our design phase is
                  centered around creating visually appealing and intuitive
                  layouts that resonate with your brand identity. This phase
                  ensures that your project stands out in the digital landscape
                  by incorporating vibrant graphics, animations and user-centric
                  design.
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon color="var(--cc-green)" size={24} radius="xl">
                      <IconTerminal
                        style={{ width: rem(16), height: rem(16) }}
                      />
                    </ThemeIcon>
                  }
                  className={classes.listItem4}
                >
                  <b style={{ color: "white" }}>Development</b> - This phase is
                  where our coding expertise comes to the forefront! With
                  precision and attention to detail, our developers write robust
                  code that brings your project to life utilizing the latest
                  technologies to ensure your project is future-proof.
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon color="var(--cc-green)" size={24} radius="xl">
                      <IconZoomCode
                        style={{ width: rem(16), height: rem(16) }}
                      />
                    </ThemeIcon>
                  }
                  className={classes.listItem5}
                >
                  <b style={{ color: "white" }}>Testing</b> - Before the launch,
                  we rigorously test your project in a controlled staging
                  environment. This step is crucial for identifying and
                  addressing any bugs or usability issues across multiple
                  devices and platforms.
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon color="var(--cc-green)" size={24} radius="xl">
                      <IconRocket style={{ width: rem(16), height: rem(16) }} />
                    </ThemeIcon>
                  }
                  className={classes.listItem6}
                >
                  <b style={{ color: "white" }}>Launch</b> - Your project is now
                  live! As we debut your project, our focus shifts towards
                  monitoring its performance, and ensuring that it operates
                  seamlessly under real-world conditions. We also establish
                  ongoing maintenance and support mechanisms to swiftly address
                  any technical issues that may arise, guaranteeing optimal
                  functionality and user satisfaction.
                </List.Item>
              </Fade>
            </List>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
