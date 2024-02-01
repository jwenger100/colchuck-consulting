import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from "@mantine/core";
import classes from "./Contact.module.css";
import { BrandFacebook, BrandLinkedin } from "tabler-icons-react";
import { ContactIconsList } from "./ContactIcons";

const social = [BrandFacebook, BrandLinkedin];

export function Contact() {
  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon size="1.4rem" />
    </ActionIcon>
  ));

  return (
    <div id="contact" className={classes.wrapper}>
      <SimpleGrid
        cols={2}
        spacing={50}
        // breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList variant="white" />
          {/* TODO: Add back once social media pages are built out */}
          {/* <Group mt="xl">{icons}</Group> */}
        </div>
        <form
          className={classes.form}
          method="POST"
          action="https://usebasin.com/f/a2ec02428985"
          encType="multipart/form-data"
        >
          <TextInput
            name="name"
            label="Name"
            placeholder="Thomas Carlyle"
            required
            type="text"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            name="email"
            label="Email"
            placeholder="your@email.com"
            required
            type="email"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            name="subject"
            label="Subject"
            placeholder="Subject"
            required
            mt="md"
            type="text"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            name="message"
            required
            label="Your message"
            placeholder="Hello, I would like to discuss ..."
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group mt="md">
            <Button className={classes.control} type="submit">
              Send message
            </Button>
          </Group>
        </form>
      </SimpleGrid>
    </div>
  );
}
