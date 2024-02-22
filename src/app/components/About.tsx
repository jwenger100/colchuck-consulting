import {
  Image,
  Title,
  Text,
  rem,
  Anchor,
  Grid,
  Container,
  Box,
  AspectRatio,
  Button,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons-react";
import classes from "./About.module.css";

export function About() {
  return (
    // Need to account for header bar height 56px
    <Box id="about" className={classes.wrapper}>
      <Container size="lg">
        <Title order={1} ta={"center"} className={classes.title}></Title>
        <Grid>
          {/* left section of the about page */}
          <Grid.Col
            span={{ xs: 12 }}
            // className={`${classes.leftSection} green-linear-gradient`}
            className={classes.leftSection}
          >
            <Title
              className={classes.title}
              c={"var(--cc-text-color)"}
              ta={"center"}
              mt={"md"}
            >
              Who We Are{" "}
            </Title>
            <Text c="#414042" mt="md" ff={"var(--font-varta)"}>
              Our company was envisioned during a trip to{" "}
              <Anchor
                href="https://earth.google.com/web/search/Colchuck+Lake,+Leavenworth,+WA/@47.4984306,-120.8333841,1702.27471821a,686.05166596d,35y,0h,45t,0r/data=CokBGl8SWQolMHg1NDlhNDUwMzM0MzU2MmYzOjB4Y2FjM2E0MDRiMWM0OThkNxmvKeuSzL9HQCFooEMqVjVewCoeQ29sY2h1Y2sgTGFrZSwgTGVhdmVud29ydGgsIFdBGAIgASImCiQJkgGtdGnAR0ARThROffS0R0AZnKRRKqssXsAh0LA3KDs1XsAoAg"
                target="_blank"
              >
                Colchuck Lake
              </Anchor>
              , in the Enchantments of Washington State in 2018. We were
              inspired by the beauty of the lake, and the surrounding mountains.
              We wanted to bring that same beauty to our software. Founded by
              two industry experts, with a combined 40 years of experience,
              ready to make your dreams a reality.
            </Text>
            <Text c="#414042" mt="md" ff={"var(--font-varta)"}>
              Focused on excellence for our clients, we are well established,
              with a reputation for great service and a high-quality product. We
              are a team of experienced developers and designers, who are
              passionate about building beautiful, easy to use software.
            </Text>
            {/* Route this to another page that has team member cards */}
            {/* <Button>Meet the Team</Button> */}
          </Grid.Col>
          {/* right section of the about page */}
          <Grid.Col span={{ xs: 12 }} className={classes.rightSection}>
            <Title
              c={"var(--cc-text-color)"}
              mb={{ base: "-55px", sm: "-120px" }}
              ta={"center"}
            >
              Elevate Your Digital Presence
            </Title>
            <div className={classes.videoContainer}>
              <video autoPlay loop muted className={classes.videoControls}>
                <source src="/app-process.mp4" type="video/mp4" />
              </video>
            </div>
            <Text size="sm" mb={"sm"} mt={{ base: "-50px", sm: "-110px" }}>
              At <b>Colchuck Consulting,</b> we navigate the complex digital
              landscape so you don't have to. Our expertise stretches from the
              initial spark of an idea to the triumphant launch of your web
              presence. It is broken down into a seamless, six-step process that
              includes:
            </Text>
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="var(--cc-green)" size={24} radius="xl">
                  <IconCircleCheck
                    style={{ width: rem(16), height: rem(16) }}
                  />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Analysis</b> - We initiate by conducting a comprehensive
                analysis of your project. Our team delves into the specifics of
                your project to identify key requirements and potential
                challenges, ensuring a solid foundation for the subsequent
                phases.
              </List.Item>
              <List.Item>
                <b>Wireframing</b> - In this stage, we transition your vision
                into tangible, user-friendly interfaces through meticulous
                wireframing. Our approach involves crafting detailed blueprints
                that outline the structural layout of your application or
                website. This process is critical for visualizing the user
                journey and establishing a clear roadmap for design and
                development.
              </List.Item>
              <List.Item>
                <b>Development</b> is the phase where our coding expertise comes
                to the forefront. With precision and attention to detail, our
                developers write robust code that brings your project to life.
                We focus on creating scalable and efficient applications,
                utilizing the latest technologies to ensure your project is not
                just functional but also future-proof.
              </List.Item>
              <List.Item>
                <b>Design</b> - Our design phase is centered around creating
                visually appealing and intuitive layouts that resonate with your
                brand identity. We incorporate vibrant graphics, engaging
                animations, and user-centric design principles to craft
                interfaces that are not only beautiful but also enhance user
                experience. This phase ensures that your project stands out in
                the digital landscape.
              </List.Item>
              <List.Item>
                <b>Testing</b> - Before the launch, we rigorously test your
                project in a controlled staging environment. This step is
                crucial for identifying and addressing any bugs or usability
                issues. Our comprehensive testing process includes functional
                testing, performance testing, and user acceptance testing (UAT),
                ensuring that your project is polished and performs flawlessly
                across all devices and platforms.
              </List.Item>
              <List.Item>
                <b>Launch</b> - The launch phase is the exciting moment when
                your digital project takes flight, introduced to the world after
                meticulous planning, design, and testing. As we debut your
                project, our focus shifts towards monitoring its performance
                closely, ensuring that it operates seamlessly under real-world
                conditions. We also establish ongoing maintenance and support
                mechanisms to swiftly address any technical issues that may
                arise, guaranteeing optimal functionality and user satisfaction.
                This stage is not just about making your project live; it's
                about ensuring its longevity and relevance in the digital
                ecosystem, backed by our commitment to excellence and your
                success.
              </List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
