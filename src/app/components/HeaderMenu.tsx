import React, { useState, useEffect } from "react";
import {
  Group,
  Burger,
  Container,
  Drawer,
  Box,
  rem,
  Text,
  Anchor,
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { IconBrandFacebook, IconBrandLinkedin } from "@tabler/icons-react";

// next/dynamic is used to import the StickyHeadroom component dynamically
// This is done to prevent the component from being rendered on the server, which would cause an error.
const StickyHeadroom = dynamic(
  () => import("@integreat-app/react-sticky-headroom")
);

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
  const [scroll] = useWindowScroll(); // Get the current scroll position
  const [showHeader, setShowHeader] = useState(false); // State to control the visibility of the header.

  useEffect(() => {
    // Check if the page has been scrolled (i.e., scroll.y > 300), and update showHeader accordingly.
    setShowHeader(scroll.y > 300);
  }, [scroll.y]);

  if (!showHeader) return null; // Do not render the header if showHeader is false.

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
      <StickyHeadroom scrollHeight={56} zIndex={2} pinStart={300}>
        <header className={classes.header}>
          <Container size="lg">
            <div className={classes.inner}>
              <Link
                href="/"
                onClick={() => {
                  setActive(-1);
                }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/cc-main-logo-green.svg`}
                  alt="Colchuck Consulting Logo"
                  width={120}
                  height={30}
                  priority={true} // Load this image before others
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
      </StickyHeadroom>
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
