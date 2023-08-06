import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
} from "@mantine/core";
import {
  BrandFacebook,
  BrandLinkedin,
  BrandInstagram,
  BrandTwitter,
} from "tabler-icons-react";
import { ContactIconsList } from "./ContactIcons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    backgroundImage: `url("./bg.svg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan("sm")]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: "#1db954",
    "&:hover": {
      backgroundColor: "#1ed760",
    },
  },
}));

const social = [BrandFacebook, BrandLinkedin];

export function Contact() {
  const { classes } = useStyles();

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
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
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

          <Group position="right" mt="md">
            <Button className={classes.control} type="submit">
              Send message
            </Button>
          </Group>
        </form>
      </SimpleGrid>
    </div>
  );
}
