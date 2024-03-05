import React from "react";
import { Text, Title, Container, Grid, Card, rem, Box } from "@mantine/core";
import {
  SourceCode,
  Server2,
  CloudComputing,
  Devices,
  ArrowsDoubleSwNe,
  Users,
  Books,
  DeviceMobile,
  Settings,
} from "tabler-icons-react";
import classes from "./Services.module.css";
import { Carousel } from "@mantine/carousel";
import { Fade, Slide, Zoom, Flip } from "react-awesome-reveal";

export const MOCKDATA = [
  {
    icon: SourceCode,
    title: "Custom Web Applications",
    description:
      "Our web development company crafts custom web solutions tailored to meet your business goals. We follow a detailed process to ensure your web application is scalable, secure, and high-performing, from design to deployment, with ongoing support for future needs.",
  },
  {
    icon: Devices,
    title: "Responsive Web Design",
    description:
      "Our responsive web design services optimize your website for an excellent user experience across devices, from mobile to desktop. We adopt a mobile-first approach, using flexible grids, responsive images, and media queries to ensure your site adjusts perfectly to any screen size, offering optimal layout and performance.",
  },
  {
    icon: Server2,
    title: "Hosting and Maintenance",
    description:
      "Our hosting and maintenance services ensure your website runs smoothly 24/7. We offer secure, reliable hosting tailored to your site's needs, ensuring high uptime, quick load times, and scalability for any traffic volume. Our maintenance includes updates to content, security patches, and performance optimizations for peace of mind and peak efficiency.",
  },
  {
    icon: CloudComputing,
    title: "Robust Web Services",
    description:
      "We specialize in scalable web services on AWS, Azure, and Google Cloud, focusing on high availability and seamless scalability. Our expertise in RESTful APIs, microservices, and serverless computing is tailored to offer cost-efficiency and robust security, leveraging cutting-edge cloud technologies.",
  },
  {
    icon: Books,
    title: "Third Party Libraries",
    description:
      "Our expertise extends to integrating a wide range of third-party libraries, ensuring your web application is equipped with the latest features and technologies. From payment gateways, social media APIs, OAuth, to analytics and cloud storage, we seamlessly incorporate these tools to enhance functionality, user experience, and performance.",
  },
  {
    icon: ArrowsDoubleSwNe,
    title: "CI/CD",
    description:
      "Our CI/CD services streamline software delivery by automating code integration and deployment, reducing integration issues, and enhancing software quality. This optimized pipeline improves team productivity, minimizes errors, and accelerates feedback from end-users.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description:
      "Our mission centers on our clients' success, prioritizing transparent communication and customized solutions. We collaborate closely from consultation to delivery and beyond, aiming for client delight. With a focus on lasting relationships, we offer ongoing support and adapt our services for client growth in the digital landscape.",
  },
  {
    icon: DeviceMobile,
    title: "Progressive Web Applications",
    description:
      "Elevate your web presence with our Progressive Web App (PWA) development, offering a native app-like experience with offline use, fast loading, and push notifications. Our PWAs deliver a seamless user experience on all devices, boosting user retention and performance across desktop and mobile.",
  },
  {
    icon: Settings,
    title: "Testing",
    description:
      "Our quality assurance and testing services guarantee top-quality and performance for your web applications. Using advanced tools like Cypress, Selenium, and Mocha with Chai, we offer comprehensive testing to quickly identify and fix issues, ensuring a seamless user experience across all devices.",
  },
];

export function Services() {
  return (
    <Container id="services" className={classes.wrapper} size="lg">
      <Fade duration={1000}>
        <Title c={"var(--cc-text-color)"} ta={"center"} mb={"sm"}>
          Our Services
        </Title>
      </Fade>
      <Slide direction="up" duration={1000}>
        <Text size="sm" mb={"sm"} ta={"center"} pl={"md"} pr={"md"}>
          Mastering the digital sphere with exceptional web development,
          intuitive UI/UX design, cutting-edge coding practices, and thorough
          performance testing for seamless user experiences.
        </Text>
      </Slide>
      <Box display={{ base: "none", sm: "block" }}>
        <Grid>
          {MOCKDATA.map((feature, index) => (
            // each child in a list should have a unique "key" prop
            <Grid.Col span={{ md: 6, lg: 4 }} key={index}>
              <Zoom duration={750} style={{ height: "100%" }}>
                <Card
                  key={feature.title}
                  shadow="md"
                  radius="md"
                  className={classes.card}
                  padding="xl"
                >
                  <feature.icon
                    style={{ width: rem(50), height: rem(50) }}
                    color={"var(--cc-green)"}
                  />
                  <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                    {feature.title}
                  </Text>
                  <Text fz="sm" mt="sm">
                    {feature.description}
                  </Text>
                </Card>
              </Zoom>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
      <Box display={{ base: "block", sm: "none" }} ta={"center"}>
        <Flip direction="horizontal" duration={750}>
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
            {MOCKDATA.map((feature, index) => (
              <Carousel.Slide key={index}>
                <Card
                  shadow="md"
                  radius="md"
                  className={classes.card}
                  padding="xl"
                >
                  <feature.icon
                    style={{
                      width: rem(50),
                      height: rem(50),
                      margin: "0 auto",
                    }}
                    color={"var(--cc-green)"}
                  />
                  <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                    {feature.title}
                  </Text>
                  <Text fz="sm" c="dimmed" mt="sm">
                    {feature.description}
                  </Text>
                </Card>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Flip>
      </Box>
    </Container>
  );
}
