import React from "react";
import { Title, Box, Image, Anchor } from "@mantine/core";
import { Fade } from "react-awesome-reveal";

export function Awards() {
  return (
    <Fade direction="up">
      <Box mb={"xl"}>
        <Title ta={"center"} c={"var(--cc-text-color)"} mt={"xl"} mb={"md"}>
          Awards & Recognitions
        </Title>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Anchor
            href="https://www.designrush.com/agency/profile/colchuck-consulting"
            target="_blank"
            underline="never"
          >
            <Image
              src="/design-rush.png"
              alt="Design Rush Image"
              mah={"200px"}
            />
          </Anchor>
          <Anchor
            target="_blank"
            href="https://www.google.com/search?q=colchuck+consulting&oq=colchuck+consulting&aqs=chrome..69i57j69i65j69i61l2j69i65l2.8310j0j7&sourceid=chrome&ie=UTF-8#lrd=0x6cf17a09d3b42db3:0xe6c50446bd1d0a83,1,,,,"
          >
            <Image
              src="/google-reviews.png"
              alt="Google Reviews Image"
              mah={"200px"}
            />
          </Anchor>
        </Box>
      </Box>
    </Fade>
  );
}
