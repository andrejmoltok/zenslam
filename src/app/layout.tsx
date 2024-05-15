import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu";

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
      <body>
        <nav>
          <Menu />
        </nav>
        {children}
      </body>
    </html>
  );
}
