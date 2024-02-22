import React from "react";
import {
  Container,
  Text,
  Paper,
  Avatar,
  Button,
  SimpleGrid,
  Title,
  Box,
} from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";
import { Tex } from "tabler-icons-react";

// Mock data for the testimonials
const testimonials = [
  {
    id: 1,
    name: "Brandon Beeson",
    organization: "Pastor Stays",
    description:
      "I had the pleasure of working with Colchuck Consulting to create a web app, and I can't express how grateful I am to have found them. Before partnering with Kyle and Jon, we had struggled with two other tech companies that were unable to get our project off the ground, and we wasted a significant amount of time and resources in the process.",
  },
  {
    id: 2,
    name: "Andre Marshall",
    organization: "Boost Baseball",
    description:
      "They are great! Not the most straight forward project and has many evolving pieces, they are very patient and understanding. They are also very flexible throughout the process! Highly recommend these guys if you are in need of Software/App development or even a website also.",
  },
  {
    id: 3,
    name: "Francis Marquez",
    organization: "The Mas Agency",
    description:
      "We are a sports management firm based in South Florida and contracted Colchuck to develop our internal site. The guys were awesome to deal with professionally and personally. So much so that we now hired them again for a second tech development stage. Highly recommended.",
  },
];

export function Testimonials() {
  return (
    <Container>
      <Title order={1} ta={"center"} c={"var(--cc-text-color)"}>
        Testimonials
      </Title>
      <Text ta={"center"} mb={"100px"} c={"var(--cc-text-color)"}>
        See what our clients have to say about us
      </Text>
      <SimpleGrid cols={{ sm: 1, lg: 3 }} spacing="lg">
        {testimonials.map((testimonial) => (
          <Paper
            key={testimonial.id}
            radius="md"
            withBorder
            p="lg"
            bg="var(--mantine-color-body)"
            style={{
              position: "relative",
              paddingTop: "60px",
              minHeight: "300px",
            }}
          >
            <Box
              style={{
                position: "absolute",
                top: "-45px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Avatar color="var(--cc-green)" size={80} radius={80}>
                <IconQuote size={60} color="var(--cc-green)" />
              </Avatar>
            </Box>
            <Text ta="center" mb="lg" c="dimmed" mt={"30px"}>
              {testimonial.description}
            </Text>
            <Text ta="center" fz="lg" fw={500} mt="50px">
              {testimonial.name}
            </Text>
          </Paper>
        ))}
      </SimpleGrid>
      <Text ta={"center"}>
        Read all our reviews{" "}
        <a
          rel="noopener"
          target="_blank"
          href="https://www.google.com/search?q=colchuck+consulting&oq=colchuck+consulting&aqs=chrome..69i57j69i65j69i61l2j69i65l2.8310j0j7&sourceid=chrome&ie=UTF-8#lrd=0x6cf17a09d3b42db3:0xe6c50446bd1d0a83,1,,,,"
        >
          here
        </a>
      </Text>
    </Container>
  );
}
