import {
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Image,
} from "@mantine/core";
import classes from "./HeaderResponsive.module.css";
import { useDisclosure, useScrollIntoView } from "@mantine/hooks";

const mockdata = [
  {
    link: "about",
    label: "About",
  },
  {
    link: "skills",
    label: "Skills",
  },
  {
    link: "contact",
    label: "Contact",
  },
];

// Suppose this is your component
function LinkComponent({
  location,
  closeDrawer,
}: {
  location: string;
  closeDrawer: any;
}) {
  const links = mockdata.map((item) => (
    <a
      key={item.label}
      href={item.link}
      className={
        location === "header" ? classes.headerLink : classes.sideMenuLink
      }
      onClick={(event) => {
        event.preventDefault();
        const target =
          (document.getElementById(item.link) as HTMLDivElement) ||
          document.body;
        if (target) {
          // TODO useScrollIntoView hook is not working
          target.scrollIntoView({ behavior: "smooth" });
        }
        if (closeDrawer) {
          closeDrawer(); // Close the drawer here
        }
      }}
    >
      {item.label}
    </a>
  ));

  return <>{links}</>; // Render the links
}

export default LinkComponent;

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box pb={120}>
      <header className={classes.headerContainer}>
        <Group>
          <Image
            src="/cc-white-mtn.svg"
            height={100}
            width={200}
            alt="Colchuck Consulting Logo"
            className={classes.logo}
          />
          <Group
            // sx={{ height: "100%" }}
            // spacing={0}
            className={classes.hiddenMobile}
          >
            <LinkComponent location="header" closeDrawer={closeDrawer} />
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
            size="sm"
            color="white"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        position="right"
        // size="100%"
        padding="md"
        title="Colchuck Consulting"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider my="sm" color={"gray"} />
          <LinkComponent location="sideMenuLinks" closeDrawer={closeDrawer} />
          <Divider my="sm" color={"gray"} />
          {/* social media icons */}
          {/* <BrandFacebook size={24} />
          <BrandInstagram size={24} /> */}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
