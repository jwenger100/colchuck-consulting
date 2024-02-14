import { ThemeIcon, Text, Title, Container, Paper, Grid } from "@mantine/core";
import {
  SourceCode,
  Server2,
  CloudComputing,
  Devices,
  ArrowsDoubleSwNe,
  Users,
} from "tabler-icons-react";
import classes from "./Services.module.css";

export const MOCKDATA = [
  {
    icon: <SourceCode size="1.6rem" />,
    title: "Custom Web Applications",
    description:
      "We are a professional web application development company, we prodvide top notch custom web development services.",
  },
  {
    icon: <Devices size="1.6rem" />,
    title: "Responsive Web Design",
    description:
      "We provide complete mobile, tablet, and desktop support for your website, so it looks perfect on every device.",
  },
  {
    icon: <Server2 size="1.6rem" />,
    title: "Hosting and Maintenance",
    description:
      "We make hosting websites for our clients' easy and painless. We also provide maintenace so that every site is performing at the highest level.",
  },
  {
    icon: <CloudComputing size="1.6rem" />,
    title: "Robust Web Services",
    description:
      "We are skilled at building scalabe web services on a variety of cloud platforms.",
  },
  {
    icon: <CloudComputing size="1.6rem" />,
    title: "THIRD PARTY LIBRARIES",
    description: "THIRD PARTY LIBRARIES",
  },
  {
    icon: <ArrowsDoubleSwNe size="1.6rem" />,
    title: "CI/CD",
    description:
      "We have automated our development pipelines to deliver top-quality web applications, while reducing errors, increasing efficiency, and facilitating seamless collaboration with development teams.",
  },
  {
    icon: <Users size="1.6rem" />,
    title: "Customer Focused",
    description:
      "We are 100% customer focused and transaprent. We aim to deliver the optimum solution that fits your business needs.",
  },
  {
    icon: <Users size="1.6rem" />,
    title: "One Stop Shop",
    description:
      "We are 100% customer focused and transaprent. We aim to deliver the optimum solution that fits your business needs.",
  },
  {
    icon: <Users size="1.6rem" />,
    title: "Two Stop Shop",
    description:
      "We are 100% customer focused and transaprent. We aim to deliver the optimum solution that fits your business needs.",
  },
];

export function Services() {
  return (
    <Container id="services" className={classes.wrapper} size={1200}>
      <Title className={classes.title} ta={"center"}>
        Our Services
      </Title>
      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Mastering the digital sphere with exceptional web development,
          intuitive UI/UX design, cutting-edge coding practices, and thorough
          performance testing for seamless user experiences.
        </Text>
      </Container>
      <Grid>
        {MOCKDATA.map((feature, index) => (
          // each child in a list should have a unique "key" prop
          <Grid.Col span={{ md: 6, lg: 4 }} key={index}>
            <Paper withBorder radius="md" className={classes.card}>
              <ThemeIcon
                size="xl"
                radius="md"
                variant="gradient"
                gradient={{ deg: 0, from: "#1db954", to: "#1ed760" }}
              >
                {feature.icon}
              </ThemeIcon>
              <Text size="xl" fw={500} mt="md">
                {feature.title}
              </Text>
              <Text size="sm" mt="sm" c="dimmed">
                {feature.description}
              </Text>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
