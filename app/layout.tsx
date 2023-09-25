import { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";
import { NavBar } from "@/components/navBar/NavBar";
import { poppins } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body className="bg-white800 dark:bg-black300">
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <NavBar />
          {children}
          <Footer />
          <Toaster position="bottom-right" reverseOrder={true} />
        </Providers>
      </body>
    </html>
  );
}
