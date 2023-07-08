import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  rem,
  Anchor,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export function About() {
  const { classes } = useStyles();
  return (
    <div id="about">
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Who We Are</Title>
            <Text color="black" mt="md">
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
            <Text color="black" mt="md">
              Focused on excellence for our clients, we are well established,
              with a reputation for great service and a high-quality product. We
              are a team of experienced developers and designers, who are
              passionate about building beautiful, easy to use software.
            </Text>
          </div>
          <Image src="./images/founders.png" className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
