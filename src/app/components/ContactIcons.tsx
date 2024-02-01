import {
  ThemeIcon,
  Text,
  SimpleGrid,
  Box,
  Stack,
  Tooltip,
} from "@mantine/core";
import classes from "./ContactIcons.module.css";
import { useClipboard } from "@mantine/hooks";
import { Sun, Phone, MapPin, At, Copy, Check } from "tabler-icons-react";

type ContactIconVariant = "white" | "gradient";

interface ContactIconStyles {
  variant: ContactIconVariant;
}

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = "gradient",
  className,
  ...others
}: ContactIconProps) {
  const clipboard = useClipboard({ timeout: 1500 });
  return (
    <div className={classes.wrapper} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius="md">
          <Icon size="1.5rem" />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size="1.5rem" />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text>
          {description}
          {description === "info@colchuckconsulting.com" && (
            <Tooltip
              label={clipboard.copied ? "Copied!" : "Copy to clipboard"}
              onClick={() => clipboard.copy("info@colchuckconsulting.com")}
              offset={12}
              withArrow
            >
              {/* keep span to display tooltip */}
              <span className={classes.copyIconAlignment}>
                {clipboard.copied ? (
                  <Check size="1.5rem" color="#FFFFFF" />
                ) : (
                  <Copy size="1.5rem" color="#FFFFFF" />
                )}
              </span>
            </Tooltip>
          )}
        </Text>
      </div>
    </div>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

const MOCKDATA = [
  { title: "Email", description: "info@colchuckconsulting.com", icon: At },
  { title: "Phone", description: "(360) 316-4900", icon: Phone },
  { title: "Location", description: "Seattle", icon: MapPin },
  { title: "Working hours", description: "8 a.m. – 11 p.m.", icon: Sun },
];

export function ContactIconsList({
  data = MOCKDATA,
  variant,
}: ContactIconsListProps) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} variant={variant} {...item} />
  ));
  return <Stack>{items}</Stack>;
}

export function ContactIcons() {
  return (
    <SimpleGrid cols={2}>
      <Box
      // sx={(theme) => ({
      //   padding: theme.spacing.xl,
      //   borderRadius: theme.radius.md,
      //   backgroundColor: theme.white,
      // })}
      >
        <ContactIconsList />
      </Box>

      <Box
      // sx={(theme) => ({
      //   padding: theme.spacing.xl,
      //   borderRadius: theme.radius.md,
      //   backgroundImage: `linear-gradient(135deg, ${
      //     theme.colors[theme.primaryColor][6]
      //   } 0%, ${theme.colors[theme.primaryColor][4]} 100%)`,
      // })}
      >
        <ContactIconsList variant="white" />
      </Box>
    </SimpleGrid>
  );
}
