import {
  Title,
  Text,
  Container,
  Overlay,
  createStyles,
  rem,
  keyframes,
} from "@mantine/core";
import { TypewriterComponent } from "./TypewriterComponent";
import { ChevronsDown } from "tabler-icons-react";

export const bounce = keyframes({
  "from, 20%, 53%, 80%, to": { transform: "translate3d(0, 0, 0)" },
  "40%, 43%": { transform: "translate3d(0, -1.875rem, 0)" },
  "70%": { transform: "translate3d(0, -0.9375rem, 0)" },
  "90%": { transform: "translate3d(0, -0.25rem, 0)" },
});

export const slideDownOpacity = keyframes({
  from: { opacity: 0, transform: "translateY(-20px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "absolute",
    top: 0,
    width: "100vw",
    height: "100vh",
    backgroundImage: `url("./images/aasgard-pass.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontWeight: 800,
    fontSize: rem(60),
    letterSpacing: rem(-1),
    marginTop: "275px",
    position: "relative",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Georgia, ${theme.fontFamily}`,
    animation: `${slideDownOpacity} ease-in 1s`,
    animationFillMode: "forwards",
    animationDuration: "2s",

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textOverflow: "ellipsis",
    },
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.md,
    },
  },

  chevronsDown: {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "0",
    marginBottom: "20px",
    animation: `${bounce} 3s ease-in-out infinite`,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export function HeroImageBackground() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#808080" opacity={0.45} zIndex={0} />
      <Title order={1} className={classes.title}>
        Colchuck Consulting
      </Title>
      <Container size={640}>
        <Text className={classes.description}>
          <TypewriterComponent />
        </Text>
      </Container>
      <ChevronsDown color="white" size={48} className={classes.chevronsDown} />
    </div>
  );
}
