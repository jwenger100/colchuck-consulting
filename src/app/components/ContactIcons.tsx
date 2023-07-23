import {
  createStyles,
  ThemeIcon,
  Text,
  SimpleGrid,
  Box,
  Stack,
  Tooltip,
} from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { Sun, Phone, MapPin, At, Copy } from "tabler-icons-react";

type ContactIconVariant = "white" | "gradient";

interface ContactIconStyles {
  variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.white,
  },

  title: {
    color:
      variant === "gradient"
        ? theme.colors.gray[6]
        : theme.colors[theme.primaryColor][0],
  },

  copyIconAlignment: {
    marginLeft: theme.spacing.xs,
  },
}));

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
  const { classes, cx } = useStyles({ variant });
  const clipboard = useClipboard({ timeout: 1000 });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
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
              withArrow
            >
              {/* keep span to display tooltip */}
              <span className={classes.copyIconAlignment}>
                <Copy size="1.5rem" color="#FFFFFF" />
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
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundColor: theme.white,
        })}
      >
        <ContactIconsList />
      </Box>

      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundImage: `linear-gradient(135deg, ${
            theme.colors[theme.primaryColor][6]
          } 0%, ${theme.colors[theme.primaryColor][4]} 100%)`,
        })}
      >
        <ContactIconsList variant="white" />
      </Box>
    </SimpleGrid>
  );
}
