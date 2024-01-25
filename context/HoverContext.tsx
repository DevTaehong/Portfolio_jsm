"use client";
import { ReactNode, createContext, useContext, useState } from "react";

const HoverContext = createContext({
  hoveredCompany: "",
  setHoveredCompany: (company: string) => {},
});

export function HoverProvider({ children }: { children: ReactNode }) {
  const [hoveredCompany, setHoveredCompany] = useState("");

  return (
    <HoverContext.Provider value={{ hoveredCompany, setHoveredCompany }}>
      {children}
    </HoverContext.Provider>
  );
}

export const useHover = () => useContext(HoverContext);
