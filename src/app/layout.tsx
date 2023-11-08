import type { Metadata } from "next";
import { Coiny } from "next/font/google";

import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript, createTheme } from "@mantine/core";

const coiny = Coiny({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default: "Webline Ads",
    template: "%s | Webline Ads",
  },
  description:
    "Social Media Advertising Agency based in Addis Ababa | Ethiopia",
  icons: {
    icon: "",
  },
};

// customize mantine provider

/*if (typeof window !== "undefined") {
  const theme = createTheme({
    fontFamily: "Poppins",
    headings: { fontFamily: "Coiny , sans-serif", fontWeight: "400" },
  });
} */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={coiny.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
