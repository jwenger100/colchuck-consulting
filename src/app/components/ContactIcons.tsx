import { Text, Box, Stack, rem, Tooltip } from "@mantine/core";
import {
  IconSun,
  IconPhone,
  IconMapPin,
  IconAt,
  IconCopy,
  IconCheck,
} from "@tabler/icons-react";
import { useClipboard } from "@mantine/hooks";

import classes from "./ContactIcons.module.css";

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  ...others
}: ContactIconProps) {
  const clipboard = useClipboard({ timeout: 1500 });

  return (
    <>
      <Box className={classes.wrapper} {...others}>
        <Box mr="md">
          <Icon style={{ width: rem(24), height: rem(24) }} />
        </Box>

        <Box>
          <Text size="xs" className={classes.title}>
            {title}
          </Text>
          <Text className={classes.description}>
            {description}{" "}
            {description === "info@colchuckconsulting.com" && (
              <Tooltip
                label={clipboard.copied ? "Copied!" : "Copy to clipboard"}
                onClick={() => clipboard.copy("info@colchuckconsulting.com")}
                offset={12}
                withArrow
              >
                {/* keep span to display tooltip */}
                <span>
                  {clipboard.copied ? (
                    <IconCheck
                      size="1.5rem"
                      color="#FFFFFF"
                      style={{ marginBottom: "-5px" }}
                    />
                  ) : (
                    <IconCopy
                      size="1.25rem"
                      color="#FFFFFF"
                      style={{
                        cursor: "pointer",
                        marginLeft: "5px",
                        marginBottom: "-3px",
                      }}
                    />
                  )}
                </span>
              </Tooltip>
            )}
          </Text>
        </Box>
      </Box>
    </>
  );
}

const MOCKDATA = [
  { title: "Email", description: "info@colchuckconsulting.com", icon: IconAt },
  { title: "Phone", description: "(360) 316-4900", icon: IconPhone },
  { title: "Location", description: "Seattle", icon: IconMapPin },
  { title: "Working hours", description: "9 a.m. – 5 p.m.", icon: IconSun },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
