import {
  Image,
  Title,
  Text,
  rem,
  Anchor,
  Grid,
  Container,
} from "@mantine/core";
import classes from "./About.module.css";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function About() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <div id="about">
      <Container size={1100}>
        <Grid>
          <Grid.Col span={{ xs: 12, sm: 6 }}>
            <Title className={classes.title}>Who We Are</Title>
            <Text c="black" mt="md">
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
            <Text c="black" mt="md">
              Focused on excellence for our clients, we are well established,
              with a reputation for great service and a high-quality product. We
              are a team of experienced developers and designers, who are
              passionate about building beautiful, easy to use software.
            </Text>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 6 }}>
            <Carousel
              withControls
              withIndicators
              loop={true}
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
            >
              <Carousel.Slide>
                <Image height={350} src="./images/colchuck-lake-2.jpg" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image height={350} src="./images/enchantments-goats-1.jpg" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image height={350} src="./images/enchantments-goats-2.webp" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image height={350} src="./images/enchantments-mtn-1.jpeg" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image height={350} src="./images/enchantments-mtn-2.jpg" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  height={350}
                  src="./images/enchantments-alpine-lakes-1.jpg"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  height={350}
                  src="./images/enchantments-alpine-lakes-2.jpg"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image height={350} src="./images/founders.png" />
              </Carousel.Slide>
            </Carousel>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
