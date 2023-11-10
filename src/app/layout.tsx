import type { Metadata } from "next";
import { Coiny } from "next/font/google";

import favicon from "./favicon.png";
import { NextUIProvider } from "@nextui-org/react";

const coiny = Coiny({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default: "Webline Ads",
    template: "%s | Webline Ads",
  },
  description:
    "Social Media Advertising Agency based in Addis Ababa | Ethiopia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={coiny.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
