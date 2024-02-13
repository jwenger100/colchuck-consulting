import "./globals.css";
// Mantine core styles
import "@mantine/core/styles.css";
import ThemeProvider from "./theme-provider";
import type { Metadata } from "next";
import { Poppins, Montserrat, Raleway } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin", "latin-ext", "devanagari"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  weight: "variable",
  display: "swap",
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
});

const raleway = Raleway({
  weight: "variable",
  display: "swap",
  subsets: ["latin", "latin-ext"],
  variable: "--font-raleway",
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
      className={`${poppins.variable} ${montserrat.variable} ${raleway.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
