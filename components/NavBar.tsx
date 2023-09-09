"use client";

import {
  Navbar as NextUiNavBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ThemeSwitch } from "@/components/theme-switch";
import { righteous } from "@/config/fonts";
import NavBarMenuButton from "@/components/NavBarMenuButton";
import { siteConfig } from "@/config/site";
import { DownloadResumeIcon, DividerIcon } from "./icons";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white800 dark:bg-black300">
      <NextUiNavBar
        maxWidth="full"
        className="bg-white800 dark:bg-black300 lg:h-[6.25rem] lg:pl-[3.81rem] lg:pr-[3.94rem] 2xl:mx-auto 2xl:max-w-[90rem]"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarBrand>
            {/* //NOTE - The image file from the design can't be exported with high quality. So I used the text logo instead. */}
            <Link href="/" className="lg:drop-shadow-2xl">
              <div className="logo lg:h-[45px] lg:w-[45px] lg:rounded-full lg:p-[12.5px]">
                <span
                  className={`logoText lg:h-[20px] lg:w-[20px] lg:text-[17.5px] lg:leading-[2.625rem] ${righteous.className}`}
                >
                  T
                </span>
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="sm:flex sm:flex-row sm:gap-9" justify="end">
          <div className="hidden sm:flex sm:flex-row sm:items-center sm:gap-9">
            <NavBarLinks isMobile="smallBold" />
          </div>
          <NavbarItem>
            <DividerIcon />
          </NavbarItem>
          <NavbarItem className="h-[24px]">
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="sm:hidden">
            <NavbarMenuToggle
              icon={NavBarMenuButton}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="items-center gap-6 pt-12">
          <NavBarLinks isMobile="paragraphRegular" />
        </NavbarMenu>
      </NextUiNavBar>
    </div>
  );
};

const NavBarLinks = ({ isMobile }: { isMobile: string }) => {
  const pathname = usePathname();
  return (
    <>
      {siteConfig.navItems.map((item) => (
        <NavbarItem key={item.label}>
          <Link
            className={`${isMobile} w-full ${
              item.href === pathname
                ? "text-primaryLight dark:text-primaryDark"
                : "text-white500 dark:text-white800"
            }`}
            href={item.href}
            size="lg"
          >
            {item.label}
          </Link>
        </NavbarItem>
      ))}
      <NavbarMenuItem className="flex flex-row items-center gap-[3px]">
        <DownloadResumeIcon />
        <Link
          className={`text-black200 dark:text-white900 ${isMobile}`}
          href="/Resume.pdf"
          download="Resume.pdf"
          size="lg"
        >
          Resume
        </Link>
      </NavbarMenuItem>
    </>
  );
};
