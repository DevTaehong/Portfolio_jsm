import { useState } from "react";

export function useHover() {
  const [isCircleHovered, setIsCircleHovered] = useState(false);

  const handleCircleHover = () => {
    setIsCircleHovered(true);
  };

  const handleCircleLeave = () => {
    setIsCircleHovered(false);
  };

  return {
    isCircleHovered,
    handleCircleHover,
    handleCircleLeave,
  };
}
