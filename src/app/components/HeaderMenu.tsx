import { Menu, Group, Center, Burger, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";
import Image from "next/image";
import Link from "next/link";

const links = [
  { link: "/#about", label: "About" },
  { link: "/#services", label: "Our Services" },
  { link: "/", label: "Our Work" },
  { link: "/", label: "Contact" },
  // strucutre of the links for the dropdown
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
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

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
            />
          </Link>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
