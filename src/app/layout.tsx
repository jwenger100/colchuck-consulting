import "./globals.css";
// Mantine core styles
import "@mantine/core/styles.css";
import ThemeProvider from "./theme-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colchuck Consulting",
  description: "The Colchuck Differnce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* favicon issue: https://stackoverflow.com/questions/61836949/why-is-my-favicon-not-working-in-my-next-js-app */}
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
