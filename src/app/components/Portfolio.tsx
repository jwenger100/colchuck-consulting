import classes from "./Portfolio.module.css";
import {
  Title,
  Box,
  Text,
  Container,
  Card,
  AspectRatio,
  SimpleGrid,
} from "@mantine/core";
import Image from "next/image";

const mockdata = [
  {
    title: "Top 10 places to visit in Norway this summer",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 18, 2022",
  },
  {
    title: "Best forests to visit in North America",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 27, 2022",
  },
  {
    title: "Hawaii beaches review: better than you think",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 9, 2022",
  },
];

const cards = mockdata.map((article) => (
  <Card
    key={article.title}
    p="md"
    radius="md"
    component="a"
    href="#"
    className={classes.card}
  >
    <AspectRatio ratio={1920 / 1080}>
      {/* possibly remove unoptimized */}
      <Image src={article.image} alt="" unoptimized fill />
    </AspectRatio>
    <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
      {article.date}
    </Text>
    <Text fw={"bold"} mt={5}>
      {article.title}
    </Text>
  </Card>
));

export function Portfolio() {
  return (
    <Box className={classes.projects} id="portfolio">
      <Title order={2} ta={"center"}>
        Projects
      </Title>
      <Container size="lg">
        <Container size={600} p={0}>
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

        <Container py="xl">
          <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
        </Container>
      </Container>
      <Title order={2} ta={"center"}>
        Reviews
      </Title>
    </Box>
  );
}
