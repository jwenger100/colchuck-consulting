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
} from "@mantine/core";
import classes from "./About.module.css";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function About() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <Box id="about" className={classes.wrapper}>
      <Container size="lg">
        <Title order={1} ta={"center"} className={classes.title}>
          We Are a Professional Website Design & Development Agency
        </Title>
        <Grid>
          {/* left section of the about page */}
          <Grid.Col span={{ xs: 12, sm: 6 }} className={classes.leftSection}>
            <Title className={classes.title}>
              Elevate Your Digital Presence with Our Comprehensive Web Solutions
            </Title>

            <AspectRatio ratio={16 / 9} className={classes.video}>
              <video autoPlay loop muted controls>
                <source src="/app-development-video.mp4" type="video/mp4" />
              </video>
            </AspectRatio>
            <Text className={classes.text}>
              At <b>Colchuck Consulting,</b> we navigate the complex digital
              landscape so you don't have to. Our expertise stretches from the
              initial spark of an idea to the triumphant launch of your web
              presence. We begin with a thorough Analysis phase, employing
              cutting-edge tools to dissect market trends and pinpoint your
              unique niche. Our team excels in Wireframing, crafting blueprints
              that translate your vision into a tangible, user-friendly
              interface. Transitioning from blueprints to reality, our
              Development phase involves coding with precision, ensuring each
              line propels your vision forward. We embed creativity into every
              aspect of Design, incorporating vibrant graphics and intuitive
              layouts that speak to your brand identity. Rigorous Testing is at
              the heart of our process, fine-tuning every detail to perfection.
              Finally, the Launch is where your digital dreams take flight,
              powered by our strategic marketing and robust support systems. Our
              end-to-end solutions, depicted in this seamless graphic, are
              designed to elevate your business, engage your audience, and
              expand your horizons. Join us at <b>Colchuck Consulting,</b> where
              your digital transformation journey begins.
            </Text>
          </Grid.Col>
          {/* right section of the about page */}
          <Grid.Col span={{ xs: 12, sm: 6 }} className={classes.rightSection}>
            <Title className={classes.title}>
              Grow your business with a web application custom to your needs
            </Title>
            <Text>
              At Colchuck Consulting, we work to accelerate our clients' revenue
              via effective digital marketing. Our design process puts us in the
              shoes of your target audiences because we know that understanding
              the end-user’s motivations and goals is the most important aspect
              of achieving exceptional results.
            </Text>
            <Text>
              Experience matters, and we have a proven track record of creating
              engaging and effective websites. Our team of experts is skilled in
              creating websites that are designed to grow your business.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
