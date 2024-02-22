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

// More simple tech icons: https://simpleicons.org/
// Currently using: https://techicons.dev/
// And https://worldvectorlogo.com/

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
      { title: "PWA", src: "/tech-icons/PWA.svg" },
      // { title: "HTML5", src: "/tech-icons/HTML5.svg" },
      { title: "D3.js", src: "/tech-icons/D3.js.svg" },
      { title: "Less.js", src: "/tech-icons/Less.js.svg" },
      { title: "Vue.js", src: "/tech-icons/Vue.js.svg" },
    ],
  },
  {
    category: "Web Backend",
    services: [
      { title: "Node.js", src: "/tech-icons/Node.js.svg" },
      { title: "PostgresSQL", src: "/tech-icons/PostgresSQL.svg" },
      {
        title: "Azure SQL-Database",
        src: "/tech-icons/Azure-SQL-Database.svg",
      },
      // { title: "Django", src: "/tech-icons/Django.svg" },
      { title: "Next Auth", src: "/tech-icons/Next-auth.svg" },
      // { title: "PHP", src: "/tech-icons/PHP.svg" },
      { title: "Java", src: "/tech-icons/Java.svg" },
      { title: ".NET", src: "/tech-icons/Net.svg" },
      { title: "Redis", src: "/tech-icons/Redis.svg" },
      { title: "Prisma", src: "/tech-icons/Prisma.svg" },
      { title: "Stripe", src: "/tech-icons/Stripe.svg" },
      { title: "Amity", src: "/tech-icons/Amity.svg" },
    ],
  },
  {
    category: "DevOps & Cloud",
    services: [
      { title: "Docker", src: "/tech-icons/Docker.svg" },
      { title: "Kubernetes", src: "/tech-icons/Kubernetes.svg" },
      { title: "AWS", src: "/tech-icons/AWS.svg" },
      { title: "GitHub Actions", src: "/tech-icons/GitHub-Actions.svg" },
      { title: "Terraform", src: "/tech-icons/Terraform.svg" },
    ],
  },
  {
    category: "Testing",
    services: [
      { title: "Jest", src: "/tech-icons/Jest.svg" },
      { title: "Cypress", src: "/tech-icons/Cypress.svg" },
      { title: "Selenium", src: "/tech-icons/Selenium.svg" },
      { title: "Mocha", src: "/tech-icons/Mocha.svg" },
      { title: "Chai", src: "/tech-icons/Chai.svg" },
    ],
  },
  {
    category: "Tools",
    services: [
      { title: "Jira", src: "/tech-icons/Jira.svg" },
      { title: "Confluence", src: "/tech-icons/Confluence.svg" },
      { title: "Slack", src: "/tech-icons/Slack.svg" },
      { title: "Teams", src: "/tech-icons/Microsoft-Teams.svg" },
      { title: "Notion", src: "/tech-icons/Notion.svg" },
      { title: "Google Meet", src: "/tech-icons/Google-Meet.svg" },
      { title: "Figma", src: "/tech-icons/Figma.svg" },
      { title: "Bitbucket", src: "/tech-icons/Bitbucket.svg" },
      { title: "Asana", src: "/tech-icons/Asana.svg" },
      { title: "GitHub", src: "/tech-icons/GitHub.svg" },
    ],
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
        ta={"center"}
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
      <Title ta="center" c={"var(--cc-text-color)"}>
        Technologies we work with!
      </Title>
      <Text
        size="sm"
        ta="center"
        mb="var(--mantine-spacing-lg)"
        mt="var(--mantine-spacing-md)"
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
