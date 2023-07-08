import React from "react";

import { Typewriter } from "react-simple-typewriter"; // https://www.npmjs.com/package/react-simple-typewriter
import { Text, createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  typewriterWrapper: {
    span: {
      position: "relative",
    },
  },
}));

const TypewriterComponent = () => {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.typewriterWrapper}>
      <Text fz="xl" color="white">
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={[
            "Full Stack Software Development",
            "Transforming ideas into digital reality",
            "Building digital bridges for your business",
            "Helping you reach your customers",
            "Creating a digital presence for your business",
            "Driving growth through technology",
            "Delivering unparalleled web services",
            "Driving innovation, one website at a time",
          ]}
          loop={5}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1000}
          cursorColor="#FFFFFF"
        />
      </Text>
    </div>
  );
};

export { TypewriterComponent };
