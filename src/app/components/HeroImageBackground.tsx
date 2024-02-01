import { Title, Text, Container, Overlay } from "@mantine/core";
import { TypewriterComponent } from "./TypewriterComponent";
import { ChevronsDown } from "tabler-icons-react";
import classes from "./HeroImageBackground.module.css";

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#808080" opacity={0.45} zIndex={0} />
      <Title order={1} className={classes.title}>
        Colchuck Consulting
      </Title>
      <Container size={640}>
        <Text className={classes.description}>
          {/* nesting validation error? */}
          {/* <TypewriterComponent /> */}
        </Text>
      </Container>
      <ChevronsDown color="white" size={48} className={classes.chevronsDown} />
    </div>
  );
}
