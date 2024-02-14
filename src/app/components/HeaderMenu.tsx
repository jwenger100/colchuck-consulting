import {
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Drawer,
  Box,
  ActionIcon,
  rem,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";
import Image from "next/image";
import Link from "next/link";
import { IconBrandFacebook, IconBrandLinkedin } from "@tabler/icons-react";

const links = [
  { link: "/#about", label: "About" },
  { link: "/#services", label: "Our Services" },
  { link: "/", label: "Our Work" },
  { link: "/", label: "Contact" },
  // strucutre of the links for the DROPDOWN menu
  // {
  //   link: "#1",
  //   label: "Learn",
  //   links: [
  //     { link: "/docs", label: "Documentation" },
  //     { link: "/resources", label: "Resources" },
  //     { link: "/community", label: "Community" },
  //     { link: "/blog", label: "Blog" },
  //   ],
  // },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    // This is the code for the DROPDOWN menu

    // const menuItems = link.links?.map((item: any) => (
    //   <Menu.Item key={item.link}>{item.label}</Menu.Item>
    // ));

    // if (menuItems) {
    //   return (
    //     <Menu
    //       key={link.label}
    //       trigger="hover"
    //       transitionProps={{ exitDuration: 0 }}
    //       withinPortal
    //     >
    //       <Menu.Target>
    //         <a
    //           href={link.link}
    //           className={classes.link}
    //           onClick={(event) => event.preventDefault()}
    //         >
    //           <Center>
    //             <span className={classes.linkLabel}>{link.label}</span>
    //             <IconChevronDown size="0.9rem" stroke={1.5} />
    //           </Center>
    //         </a>
    //       </Menu.Target>
    //       <Menu.Dropdown>{menuItems}</Menu.Dropdown>
    //     </Menu>
    //   );
    // }

    return (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => console.log("clicked")}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <>
      <header className={classes.header}>
        <Container size="lg">
          <div className={classes.inner}>
            <Link href="/">
              <Image
                src="/cc-main-logo-green.svg"
                alt="Colchuck Consulting Logo"
                width={120}
                height={30}
                className={classes.logo}
                style={{ marginTop: "7px" }}
              />
            </Link>
            <Group gap={5} visibleFrom="sm">
              {items}
            </Group>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="sm"
            />
          </div>
        </Container>
      </header>
      <Drawer
        opened={opened}
        onClose={toggle}
        position="top"
        padding="md"
        size="100%"
        title={
          <Text c="var(--cc-green)" fw={800}>
            <Box ff={"var(--font-poppins)"} fw={"600"} ta="center">
              Colchuck
            </Box>
            <Box ff={"var(--font-poppins)"} fw={"400"} mt={"-10px"} fz={"14px"}>
              Consulting
            </Box>
          </Text>
        }
        onClick={toggle}
        zIndex={1000000}
      >
        <Box>
          <Group gap={0} className={classes.drawerContent}>
            {items}
          </Group>
          {opened && (
            <>
              <Box
                ta="center"
                mt={"md"}
                pb={"sm"}
                className={classes.fadeInSocialIcons}
              >
                {/* Facebook */}
                <ActionIcon
                  size="lg"
                  color="black"
                  variant="subtle"
                  // change this to the actual link
                  component="a"
                  href="https://www.facebook.com/people/Colchuck-Consulting/100092182747710/"
                  aria-label="Open in a new tab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandFacebook
                    style={{ width: rem(24), height: rem(24) }}
                    stroke={1.5}
                  ></IconBrandFacebook>
                </ActionIcon>
                {/* LinkedIn */}
                <ActionIcon
                  size="lg"
                  color="black"
                  variant="subtle"
                  // change this to the actual link
                  component="a"
                  href="https://www.linkedin.com/company/colchuck-consulting"
                  aria-label="Open in a new tab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandLinkedin
                    style={{ width: rem(24), height: rem(24) }}
                    stroke={1.5}
                  ></IconBrandLinkedin>
                </ActionIcon>
              </Box>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
}
