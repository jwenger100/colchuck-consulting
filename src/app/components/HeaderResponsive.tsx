import {
  createStyles,
  Header,
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Image,
} from "@mantine/core";
import { useDisclosure, useScrollIntoView } from "@mantine/hooks";
import { BrandFacebook, BrandInstagram } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  headerContainer: {
    position: "relative",
    backgroundColor: "transparent",
    borderBottom: 0,
  },
  logo: {
    marginTop: "-40px",
    maxHeight: "100%",
    marginLeft: "-20px",
  },
  headerLink: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.white,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
    "&:hover": {
      color: "#1DB954", //spotify green
    },
  },

  sideMenuLink: {
    display: "flex",
    alignItems: "center",
    height: rem(42),
    width: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

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
  const { classes, theme } = useStyles();

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
  const { classes, theme } = useStyles();

  return (
    <Box pb={120}>
      <Header height={60} px="md" className={classes.headerContainer}>
        <Group position="apart" sx={{ height: "100%" }}>
          <Image
            src="/cc-white-mtn.svg"
            height={100}
            width={200}
            alt="Colchuck Consulting Logo"
            className={classes.logo}
          />
          <Group
            sx={{ height: "100%" }}
            spacing={0}
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
      </Header>

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
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          <LinkComponent location="sideMenuLinks" closeDrawer={closeDrawer} />
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          {/* social media icons */}
          {/* <BrandFacebook size={24} />
          <BrandInstagram size={24} /> */}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
