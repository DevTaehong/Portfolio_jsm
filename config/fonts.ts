import { Poppins, Righteous } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const righteous = Righteous({
  subsets: ["latin"],
  variable: "--font-righteous",
  weight: "400",
});
