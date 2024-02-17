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
} from "@mantine/core";
import Image from "next/image";
import classes from "./Portfolio.module.css";

const mockdata = [
  {
    title: "Pastor Stays",
    image: "/client-projects/pastor-stays-1.png",
    date: "August 18, 2022",
    description:
      "Pastor Stays offers tailored lodging for pastors, primarily vacation homes, with a focus on community support.",
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

  return (
    <>
      <Modal size={"100%"} opened={opened} onClose={close}>
        {/* Modal content */}
        <Title
          order={3}
          mt={"var(--mantine-spacing-sm)"}
          mb={"var(--mantine-spacing-lg)"}
          ta={"center"}
        >
          {article.title}
        </Title>
        {/* maw max width */}
        {/* mah max height */}
        {/* mx marginLeft marginRight */}
        {/* my marginTop marginBottom */}
        {/* MODAL IMAGE */}
        <AspectRatio ratio={16 / 9}>
          <Image
            src={article.image}
            alt={article.title}
            unoptimized
            fill
            objectFit="contain"
          />
        </AspectRatio>
        <Button onClick={close}>Close</Button>
      </Modal>

      <Card
        // p="md"
        w={"360px"}
        radius="sm"
        className={classes.card}
        onClick={() => {
          open();
        }}
      >
        <AspectRatio ratio={16 / 9} maw={"300"} mah={"300"}>
          <Image
            src={article.image}
            alt={article.title}
            unoptimized
            fill
            objectFit="contain"
          />
        </AspectRatio>
        <Title fw={"bold"} order={3} mt={5} ta={"center"}>
          {article.title}
        </Title>
        <Text c="dimmed" size="xs" fw={700} mt="md" ta={"center"}>
          {article.description}
        </Text>
        <Button
          variant="primary"
          bg={"var(--cc-green)"}
          mt={"30px"}
          w={"200px"}
          ta={"center"}
          m={"auto"}
          onClick={() => open()}
        >
          View Project
        </Button>
      </Card>
    </>
  );
};

export function Portfolio() {
  return (
    <Box
      className={classes.projects}
      id="portfolio"
      mt={"var(--mantine-spacing-xl)"}
    >
      <Container size={"lg"}>
        <Title order={2} ta={"center"}>
          Projects
        </Title>
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
        <SimpleGrid cols={{ base: 1, sm: 3 }}>
          {mockdata.map((article) => (
            <PortfolioCard key={article.title} article={article} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
