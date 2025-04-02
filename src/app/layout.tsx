import type { Metadata } from "next";
import '@fontsource-variable/inter';
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas Reale - Coach Fitness Online",
  description: "Coach fitness online para mujeres ocupadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/images/og-lucas-reale.jpg"></meta>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
