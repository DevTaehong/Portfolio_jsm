"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useSwitch } from "@nextui-org/switch";

import { MoonFilledIcon, SunFilledIcon } from "@/components/svg/navBar";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const { Component, isSelected, getBaseProps, getInputProps } = useSwitch({
    isSelected: theme === "light",
    onChange,
  });
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>

      {isSelected ? <SunFilledIcon /> : <MoonFilledIcon />}
    </Component>
  );
}
