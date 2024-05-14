import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zen Slam Poetry",
  description: "Zen themed slam poetry collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
