import React from "react";
import {
  Container,
  Text,
  Paper,
  Avatar,
  Button,
  SimpleGrid,
  Title,
} from "@mantine/core";

// Mock data for the testimonials
const testimonials = [
  {
    id: 1,
    name: "Jane Fingerlicker",
    role: "Art Director",
    email: "jfingerlicker@me.io",
    avatarUrl:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Software Engineer",
    email: "johndoe@example.com",
    avatarUrl:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
  },
  {
    id: 3,
    name: "Emily Smith",
    role: "Product Manager",
    email: "emilysmith@example.com",
    avatarUrl:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
  },
];

export function Testimonials() {
  return (
    <Container>
      <Title order={1} ta={"center"}>
        Testimonials
      </Title>
      <Text ta={"center"} mb={"100px"}>
        See what our clients have to say about us
      </Text>
      <SimpleGrid cols={3} spacing="lg">
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
            <div
              style={{
                position: "absolute",
                top: "-49px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Avatar src={testimonial.avatarUrl} size={80} radius={80} />
            </div>
            <Text ta="center" fz="lg" fw={500} mt="50px">
              {testimonial.name}
            </Text>
            <Text ta="center" c="dimmed" fz="sm">
              {testimonial.email} • {testimonial.role}
            </Text>
            <Button variant="default" fullWidth mt="md">
              Send message
            </Button>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
}
