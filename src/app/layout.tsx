import "./globals.css";
// Mantine core styles
import "@mantine/core/styles.css";
import ThemeProvider from "./theme-provider";
import type { Metadata } from "next";
import { Poppins, Montserrat, Raleway, Varta } from "next/font/google";

// font for COLCHUCK CONSULTING text
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin", "latin-ext", "devanagari"],
  variable: "--font-poppins",
});

// for for headings
const montserrat = Montserrat({
  weight: "variable",
  display: "swap",
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
});

// font for body text
const varta = Varta({
  weight: "variable",
  display: "swap",
  subsets: ["latin", "latin-ext"],
  variable: "--font-varta",
});

export const metadata: Metadata = {
  title: "Colchuck Consulting",
  description: "The Colchuck Differnce",
  icons: {
    icon: "icon.ico", // facivon.ico -> icon.ico 👍
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${varta.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
