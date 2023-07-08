import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  createStyles,
  rem,
} from "@mantine/core";
import {
  SourceCode,
  Server2,
  CloudComputing,
  Devices,
  Seo,
  Users,
} from "tabler-icons-react";

export const MOCKDATA = [
  {
    icon: SourceCode,
    title: "Custom Web Applications",
    description:
      "We are a professional web application development company, we prodvide top notch custom web development services.",
  },
  {
    icon: Devices,
    title: "Responsive Web Design",
    description:
      "We provide complete mobile, tablet, and desktop support for your website, so it looks perfect on every device.",
  },
  {
    icon: Server2,
    title: "Hosting and Maintenance",
    description:
      "We make hosting websites for our clients' easy and painless. We also provide maintenace so that every site is performing at the highest level.",
  },
  {
    icon: CloudComputing,
    title: "Robust Web Services",
    description:
      "We are skilled at building scalabe web services on a variety of cloud platforms.",
  },
  {
    icon: Seo,
    title: "SEO",
    description:
      "Our custom websites come with custom SEO to suit the indiviual needs of each client.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description:
      "We are 100% customer focused and transaprent. We aim to deliver the optimum solution that fits your business needs.",
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size="1.1rem" />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

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
}));

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data?: FeatureProps[];
}

export function Skills({
  title,
  description,
  data = MOCKDATA,
}: FeaturesGridProps) {
  const { classes } = useStyles();
  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

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
        {features}
      </SimpleGrid>
    </Container>
  );
}
