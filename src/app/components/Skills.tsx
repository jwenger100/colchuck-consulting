import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  createStyles,
  rem,
  Paper,
} from "@mantine/core";
import {
  SourceCode,
  Server2,
  CloudComputing,
  Devices,
  ArrowsDoubleSwNe,
  Users,
} from "tabler-icons-react";

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
];

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left",
    },
  },

  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(0, "#1db954", "#1ed760"),
    },
  },
}));

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Skills({ title, description }: FeaturesGridProps) {
  const { classes } = useStyles();
  return (
    <Container id="skills" className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" },
        ]}
      >
        {MOCKDATA.map((feature) => (
          <Paper withBorder radius="md" className={classes.card}>
            <ThemeIcon
              size="xl"
              radius="md"
              variant="gradient"
              gradient={{ deg: 0, from: "#1db954", to: "#1ed760" }}
            >
              {feature.icon}
            </ThemeIcon>
            <Text size="xl" weight={500} mt="md">
              {feature.title}
            </Text>
            <Text size="sm" mt="sm" color="dimmed">
              {feature.description}
            </Text>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
}
