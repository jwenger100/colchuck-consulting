import {
  Group,
  Burger,
  Container,
  Drawer,
  Box,
  rem,
  Text,
  Portal,
  Anchor,
} from "@mantine/core";
import { useDisclosure, useHeadroom, useWindowScroll } from "@mantine/hooks";
import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";
import Image from "next/image";
import Link from "next/link";
import { IconBrandFacebook, IconBrandLinkedin } from "@tabler/icons-react";

const links = [
  { link: "/#about", label: "About" },
  { link: "/#services", label: "Our Services" },
  { link: "/#projects", label: "Our Work" },
  { link: "/#contact", label: "Contact" },
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
  const [active, setActive] = useState(-1);
  const pinned = useHeadroom({ fixedAt: 120 });
  const [scroll] = useWindowScroll(); // Get the current scroll position
  const items = links.map((link, index) => {
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
        data-active={index === active || undefined}
        className={classes.link}
        onClick={() => {
          setActive(index);
        }}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <>
      <Portal>
        <header
          className={classes.header}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: rem(56),
            zIndex: 1,
            // transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
            // Combine both conditions: hide when at the top OR based on the pinned state
            transform:
              scroll.y <= 80
                ? `translate3d(0, ${rem(-110)}, 0)`
                : `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
            transition: "transform 400ms ease",
            backgroundColor: "var(--mantine-color-body)",
          }}
        >
          <Container size="lg">
            <div className={classes.inner}>
              <Link
                href="/"
                onClick={() => {
                  setActive(-1);
                }}
              >
                <Image
                  src="/cc-main-logo-green.svg"
                  alt="Colchuck Consulting Logo"
                  width={120}
                  height={30}
                  className={classes.logo}
                  style={{ marginTop: "7px" }}
                />
              </Link>
              <Group gap={0} justify="flex-end" visibleFrom="sm">
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
      </Portal>
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
                className={classes.cascadeFadeInSocialIcons}
              >
                {/* Facebook */}
                <Anchor
                  href="https://www.facebook.com/people/Colchuck-Consulting/100092182747710/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.socialIcon}
                >
                  <IconBrandFacebook
                    style={{ width: rem(32), height: rem(32) }}
                    stroke={1.5}
                  />
                </Anchor>
                {/* LinkedIn */}
                <Anchor
                  href="https://www.linkedin.com/company/colchuck-consulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.socialIcon}
                >
                  <IconBrandLinkedin
                    style={{
                      width: rem(32),
                      height: rem(32),
                      marginLeft: "5px",
                    }}
                    stroke={1.5}
                  />
                </Anchor>
              </Box>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
}
