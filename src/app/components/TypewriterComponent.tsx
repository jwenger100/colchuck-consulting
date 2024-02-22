import React from "react";

import { Typewriter } from "react-simple-typewriter"; // https://www.npmjs.com/package/react-simple-typewriter
import { Text } from "@mantine/core";
import classes from "./TypewriterComponent.module.css";

const TypewriterComponent = () => {
  return (
    <div className={classes.typewriterWrapper}>
      <Text fz="40px" c="white" ff="var(--font-poppins)" fw={"600"}>
        {/* Style will be inherited from the parent element */}
        <Typewriter
          // WEBDEVELOPMENT -> Full Stack Software Development
          // FULLSTACK
          // DEVOPS
          // TRANSFORMINGIDEAS -> Transforming ideas into digital reality
          // DIGITALBRIDGES -> Building digital bridges for your business
          // REACHCUSTOMERS -> Helping you reach your customers
          // words={[
          //   "Full Stack Software Development",
          //   "Transforming ideas into digital reality",
          //   "Building digital bridges for your business",
          //   "Helping you reach your customers",
          //   "Creating a digital presence for your business",
          //   "Driving growth through technology",
          //   "Delivering unparalleled web services",
          //   "Driving innovation, one website at a time",
          // ]}
          words={[
            "WEB DEVELOPMENT",
            "FULL STACK",
            "DEVOPS",
            "CLOUD INFRASTRUCTURE",
            "UI/UX DESIGN",
            "MOBILE APP DEVELOPMENT",
            "API DEVELOPMENT",
            "AGILE",
            "SCRUM",
          ]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={150}
          deleteSpeed={150}
          delaySpeed={1000}
          cursorColor="white"
        />
      </Text>
    </div>
  );
};

export { TypewriterComponent };
