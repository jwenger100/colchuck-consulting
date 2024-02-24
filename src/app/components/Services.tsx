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
      "Our professional web application development company takes pride in delivering top-notch custom web solutions, meticulously crafted from concept to launch. We engage in a thorough discovery process to understand your unique business requirements, enabling us to design and develop bespoke web applications that align perfectly with your objectives. Our expert team employs the latest technologies and agile methodologies to ensure a scalable, secure, and high-performing final product. From initial wireframing and design to development, testing, and deployment, we provide comprehensive support and maintenance, ensuring your web application evolves with your business needs.",
  },
  {
    icon: Devices,
    title: "Responsive Web Design",
    description:
      "Our responsive web design services ensure that your website delivers an exceptional user experience on every device, be it a mobile phone, tablet, or desktop. We start by adopting a mobile-first approach, recognizing the importance of optimizing for smaller screens and then scaling up to larger displays. Our design process involves flexible grids and layouts, responsive images, and media queries to ensure that your website automatically adjusts to the user's device, providing optimal layout and performance.",
  },
  {
    icon: Server2,
    title: "Hosting and Maintenance",
    description:
      "Our hosting and maintenance services are designed to offer you peace of mind and ensure your website operates at peak efficiency around the clock. We provide reliable, secure hosting solutions tailored to your website's specific needs, whether it's a high-traffic e-commerce site or a content-driven informational portal. Our hosting solutions feature high uptime, fast load times, and scalable resources to handle any volume of traffic. In addition to hosting, we offer comprehensive maintenance services, including regular updates to web content, security patches, and performance optimizations.",
  },
  {
    icon: CloudComputing,
    title: "Robust Web Services",
    description:
      "Specializing in scalable web services on major cloud platforms like AWS, Azure, and Google Cloud, we ensure high availability and seamless scalability. Our expertise spans RESTful APIs, microservices, and serverless computing, tailored to your business needs for cost-efficiency and robust security, leveraging the best of cloud technologies.",
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
      "Our Continuous Integration/Continuous Deployment (CI/CD) services are at the forefront of modern development practices, designed to streamline the process of software delivery. By automating the integration of code changes from multiple contributors into a shared repository, we significantly reduce integration issues and improve software quality. Our CI/CD pipeline is optimized for efficiency, reducing errors, increasing team productivity, and enabling a faster feedback loop with end-users.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description:
      "At the heart of our mission is a 100% commitment to our clients' success. We prioritize transparent communication, tailoring our solutions to meet the unique needs and goals of each customer. Our approach involves close collaboration with our clients at every stage of the project, from initial consultation to final delivery and beyond, ensuring not just satisfaction but delight with the end result. We believe in building lasting relationships, offering ongoing support, and adapting our services to help our clients grow and thrive in an ever-evolving digital landscape.",
  },
  {
    icon: DeviceMobile,
    title: "Progressive Web Applications",
    description:
      "Transform your web presence with Progressive Web Applications (PWA). We specialize in developing PWAs that provide a native app-like experience, offering offline capabilities, fast loading times, and push notifications. Our PWAs are designed to ensure a seamless, engaging user experience across all platforms, significantly improving user retention and performance on both desktop and mobile devices.",
  },
  {
    icon: Settings,
    title: "Testing",
    description:
      "Our quality assurance and testing services are designed to ensure your web applications meet the highest standards of quality and performance. We utilize a suite of advanced testing frameworks, including Cypress for modern end-to-end testing, Selenium for browser-based automation, and Mocha with Chai for flexible and powerful testing of JavaScript applications. By integrating these tools, we provide a robust testing strategy that identifies and resolves issues efficiently, ensuring a seamless, user experience across all platforms and devices.",
  },
];

export function Services() {
  return (
    <Container id="services" className={classes.wrapper} size="lg">
      <Fade duration={750}>
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
                  <Text fz="sm" c="dimmed" mt="sm">
                    {feature.description}
                  </Text>
                </Card>
              </Zoom>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
      <Box display={{ base: "block", sm: "none" }} ta={"center"}>
        <Carousel
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
          loop
        >
          {MOCKDATA.map((feature, index) => (
            <Carousel.Slide key={index}>
              <Flip direction="horizontal" duration={750}>
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
              </Flip>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
}
