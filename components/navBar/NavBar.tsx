"use client";

import { motion } from "framer-motion";
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

import { ThemeSwitch } from "@/components/navBar/ThemeSwitch";
import { righteous } from "@/config/fonts";
import NavBarMenuButton from "@/components/navBar/NavBarMenuButton";
import { siteConfig } from "@/config/site";
import { DownloadResumeIcon, DividerIcon } from "../svg/navBar";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <motion.div
        className="flex flex-row"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <NextUiNavBar
          classNames={{ wrapper: "max-w-[79.375rem] min-[1440px]:px-0" }}
          shouldHideOnScroll
          className="bg-white800 dark:bg-black300 xl:h-[7.3125rem]"
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent justify="center">
            <NavbarBrand>
              {/* //NOTE - The image file from the design can't be exported with high quality. So I used the text logo instead. */}
              <Link href="/" className="lg:drop-shadow-2xl">
                <div className="logo xl:h-[2.81rem] xl:w-[2.81rem] xl:rounded-full xl:p-[0.78rem]">
                  <span
                    className={`logoText xl:h-5 xl:w-5 xl:text-[1.1rem] xl:leading-[2.625rem] ${righteous.className}`}
                  >
                    T
                  </span>
                </div>
              </Link>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className="sm:flex sm:flex-row sm:gap-9" justify="end">
            <div className="hidden sm:flex sm:flex-row sm:items-center sm:gap-9">
              <NavBarLinks isMobile="navBarLinkDeskTop" />
            </div>
            <NavbarItem className="sm:hidden">
              <NavbarMenuToggle
                icon={NavBarMenuButton}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              />
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu className="items-center gap-6 pt-12">
            <NavBarLinks isMobile="navBarLinkMobile" />
          </NavbarMenu>
        </NextUiNavBar>
      </motion.div>
    </header>
  );
};

const NavBarLinks = ({ isMobile }: { isMobile: string }) => {
  const pathname = usePathname();
  return (
    <>
      {siteConfig.navItems.map((item) => (
        <NavbarMenuItem key={item.label}>
          <Link
            className={`${isMobile} w-full ${
              item.href === pathname
                ? "font-semibold text-primaryLight dark:text-primaryDark"
                : "font-normal text-white500 dark:text-white800"
            }`}
            href={item.href}
            size="lg"
          >
            {item.label}
          </Link>
        </NavbarMenuItem>
      ))}
      <NavbarMenuItem className="flex flex-row items-center gap-[0.1875rem]">
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
      <NavbarItem>
        <DividerIcon />
      </NavbarItem>
      <NavbarItem className="h-6">
        <ThemeSwitch />
      </NavbarItem>
    </>
  );
};
