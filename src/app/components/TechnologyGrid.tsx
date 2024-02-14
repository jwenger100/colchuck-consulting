import React from "react";
import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  useMantineTheme,
  Container,
  Title,
  Box,
} from "@mantine/core";
import Image from "next/image";
import classes from "./TechnologyGrid.module.css";

interface TechnologyItem {
  title: string;
  src: string;
}

interface TechnologyCategory {
  category: string;
  services: TechnologyItem[];
}

// Placeholder for future props. Currently unused.
interface TechnologyGridProps {
  // Example: categories?: TechnologyCategory[];
}

const mockdata: TechnologyCategory[] = [
  {
    category: "Web Frontend",
    services: [
      { title: "React", src: "/tech-icons/React.svg" },
      { title: "Material UI", src: "/tech-icons/Material-UI.svg" },
      { title: "Mantine", src: "/tech-icons/Mantine.svg" },
      { title: "NextJS", src: "/tech-icons/Next.js.svg" },
      { title: "TypeScript", src: "/tech-icons/TypeScript.svg" },
      { title: "CSS3", src: "/tech-icons/CSS3.svg" },
      { title: "HTML5", src: "/tech-icons/HTML5.svg" },
      { title: "D3.js", src: "/tech-icons/D3.js.svg" },
      { title: "Less.js", src: "/tech-icons/Less.js.svg" },
      { title: "Vue.js", src: "/tech-icons/Vue.js.svg" },
    ],
  },
  {
    category: "Web Backend",
    services: [],
  },
  {
    category: "APIs",
    services: [],
  },
];

export function TechnologyGrid(/* props: TechnologyGridProps */) {
  const theme = useMantineTheme();

  const items = mockdata.map((category) => (
    <Box key={category.category}>
      <Title
        order={4}
        mb={"var(--mantine-spacing-xs)"}
        mt={"var(--mantine-spacing-xs)"}
        fw={"600"}
        ta={{ xs: "center", sm: "left" }}
        className={classes.categoryTitle}
      >
        {category.category}
      </Title>
      <SimpleGrid cols={{ base: 2, sm: 2, lg: 5 }}>
        {category.services.map((item) => (
          <UnstyledButton key={item.title} className={classes.item}>
            <Image
              src={item.src}
              width={50}
              height={50}
              alt={`${item.title} logo`}
            />
            <Title size="xs" mt={7}>
              {item.title}
            </Title>
          </UnstyledButton>
        ))}
      </SimpleGrid>
    </Box>
  ));

  return (
    <Container
      size="lg"
      mb={"var(--mantine-spacing-xl)"}
      className={classes.wrapper}
    >
      <Title className={classes.title} ta="center">
        Technologies we work with!
      </Title>
      <Text
        size="sm"
        ta="center"
        mb="var(--mantine-spacing-lg)"
        mt="var(--mantine-spacing-md)"
        className={classes.description}
      >
        Our expertise encompasses various technologies that we constantly expand
        depending on our Clients’ needs. Take a look at just a few of those we
        work with.
      </Text>
      <Card withBorder radius="md" className={classes.card}>
        {items}
      </Card>
    </Container>
  );
}
