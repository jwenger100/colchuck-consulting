"use client";

// Using Third-party packages and providers
// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#using-third-party-packages-and-providers

import React, { ReactNode } from "react";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  /** Controls various styles of h1-h6 elements, used in TypographyStylesProvider and Title components */
  headings: {
    fontFamily: "var(--font-montserrat)",
  },
  /** font-family used in all components, system fonts by default */
  fontFamily: "var(--font-varta)",
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
