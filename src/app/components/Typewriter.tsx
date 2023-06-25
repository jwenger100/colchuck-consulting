import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Text } from "@mantine/core";

const TypewriterComponent = () => {
  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div>
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
          onLoopDone={handleDone}
          onType={handleType}
          cursorColor="#FFFFFF"
        />
      </Text>
    </div>
  );
};

export { TypewriterComponent };
