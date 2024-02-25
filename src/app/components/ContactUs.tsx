import React, { useRef, useState } from "react";
import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Box,
  Anchor,
  Autocomplete,
  Loader,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTelegram,
} from "@tabler/icons-react";
import { ContactIconsList } from "./ContactIcons";
import classes from "./ContactUs.module.css";
import { Fade, Slide } from "react-awesome-reveal";

const socialMedia = [
  {
    Icon: IconBrandFacebook,
    link: "https://www.facebook.com/people/Colchuck-Consulting/100092182747710/",
  },
  {
    Icon: IconBrandLinkedin,
    link: "https://www.linkedin.com/company/colchuck-consulting",
  },
];

export function ContactUs() {
  const timeoutRef = useRef<number>(-1);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0 || val.includes("@")) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(
          ["gmail.com", "outlook.com", "yahoo.com"].map(
            (provider) => `${val}@${provider}`
          )
        );
      }, 1000);
    }
  };

  const icons = socialMedia.map((item, index) => (
    <Anchor key={index} href={item.link} target="_blank" underline="never">
      <ActionIcon size={28} className={classes.social} variant="transparent">
        <item.Icon size="1.4rem" stroke={1.5} />
      </ActionIcon>
    </Anchor>
  ));

  return (
    <Box className={classes.wrapper} id="contact">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <Slide direction="left" duration={1000}>
          <Box>
            <Title c="white" ta={{ base: "center", sm: "left" }}>
              Contact us
            </Title>
            <Text
              className={classes.description}
              mt="sm"
              ta={{ base: "center", sm: "left" }}
              mb={{ base: 0, sm: 30 }}
            >
              Send us an email or give us a call, we cant wait to connect with you and talk about making your dreams a reality!
            </Text>

            <ContactIconsList />

            <Group display={{ base: "none", sm: "block" }} mt="xl">
              {icons}
            </Group>
          </Box>
        </Slide>
        <Slide direction="right" duration={1000}>
          <Box className={classes.form}>
            <form action="https://usebasin.com/f/9c7384101449" method="POST">
              <Autocomplete
                value={value}
                data={data}
                onChange={handleChange}
                rightSection={
                  loading ? (
                    <Loader size="1rem" color="var(--cc-green)" />
                  ) : null
                }
                label="Email"
                type="email"
                name="email"
                placeholder="Your email"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <TextInput
                label="Name"
                name="name"
                placeholder="Thomas Carlyle"
                required
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <TextInput
                label="Subject"
                placeholder="Subject"
                name="subject"
                required
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <Textarea
                required
                label="Your message"
                name="message"
                placeholder="Hello, I would like to discuss..."
                minRows={4}
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <Box className={classes.buttonContainer} mt={"md"}>
                <Button className={classes.control} type="submit">
                  Send message
                  <IconBrandTelegram
                    style={{ marginLeft: "5px" }}
                    size={"1.25rem"}
                  />
                </Button>
              </Box>
            </form>
          </Box>
        </Slide>
      </SimpleGrid>
      <Group display={{ base: "flex", sm: "none" }} mt="xl" justify="center">
        {icons}
      </Group>
      <Fade duration={1000} direction="up">
        <Group
          mt="xl"
          justify="center"
          flex={"row"}
          className={classes.footerIconGroup}
        >
          <Text c="white" size="sm" mb={{ base: "-12px", sm: 0 }}>
            Copyright {new Date().getFullYear()}
          </Text>
          <Text c="white" size="sm" display={{ base: "none", sm: "block" }}>
            •
          </Text>
          <Text
            c="white"
            size="sm"
            fw={600}
            mt={{ sm: "-2px" }}
            ff={"var(--font-poppins)"}
          >
            Colchuck
          </Text>
          <Text
            c="white"
            size="sm"
            fw={400}
            ff={"var(--font-poppins)"}
            ml={{ base: 0, sm: "-12px" }}
            mt={{ base: "-20px", sm: "-2px" }}
          >
            Consulting
          </Text>
          <Text c="white" size="sm" display={{ base: "none", sm: "block" }}>
            •
          </Text>
          <Text c="white" size="sm" mt={{ base: "-12px", sm: 0 }}>
            All rights reserved
          </Text>
        </Group>
      </Fade>
    </Box>
  );
}
