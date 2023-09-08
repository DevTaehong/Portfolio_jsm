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

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <NextUiNavBar
      maxWidth="full"
      className="bg-white800 dark:bg-black300 lg:h-[6.25rem] lg:pl-[3.81rem] lg:pr-[3.94rem]"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <div className="logo lg:h-[45px] lg:w-[45px] lg:rounded-[11250px] lg:p-[12.5px]">
            <span
              className={`logoText lg:h-[20px] lg:w-[20px] lg:text-[17.5px] lg:leading-[2.625rem] ${righteous.className}`}
            >
              T
            </span>
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:flex sm:flex-row sm:gap-9" justify="end">
        <div className="hidden sm:flex sm:flex-row sm:items-center sm:gap-9">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.label}>
              <Link
                className={`smallBold w-full ${
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
              className="smallRegular text-black200 dark:text-white900"
              href="/public/Resume.pdf"
              size="lg"
            >
              Resume
            </Link>
          </NavbarMenuItem>
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
      <NavbarMenu>
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.label}>
            <Link
              className={`paragraphRegular w-full ${
                item.href === pathname
                  ? "text-primaryLight dark:text-primaryDark"
                  : "text-white500 dark:text-white800"
              }`}
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="flex flex-row items-center gap-[3px]">
          <DownloadResumeIcon />
          <Link
            className="paragraphRegular text-black200 dark:text-white900"
            href="/public/Resume.pdf"
            size="lg"
          >
            Resume
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUiNavBar>
  );
};
