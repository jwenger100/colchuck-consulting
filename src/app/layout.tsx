import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
