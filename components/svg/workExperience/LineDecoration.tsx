import { useEffect, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { motion } from "framer-motion";

import { useHover } from "@/context/HoverContext";
import { companyPositions } from "@/constants";

const LineDecoration = () => {
  const { hoveredCompany, setHoveredCompany } = useHover();
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setPosition(companyPositions[hoveredCompany]);
  }, [hoveredCompany]);

  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setPosition(data.x);
  };

  const handleDragStop = (e: DraggableEvent, data: DraggableData) => {
    setHoveredCompany(
      data.x === 200.5
        ? "JSM Masterclass Experience"
        : data.x === 401
        ? "Nova Scotia Community College"
        : ""
    );
  };

  return (
    <svg
      className="h-[4.375rem] w-full"
      viewBox="0 0 471 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 34.5H470"
        stroke="#151E2C"
        className="dark:stroke-black400"
        strokeOpacity="0.4"
        strokeLinecap="round"
      />
      <Draggable
        axis="x"
        bounds={{ left: 0, right: 401 }}
        grid={[200.5, 0]}
        onDrag={handleDrag}
        onStop={handleDragStop}
        position={{ x: position, y: 0 }}
      >
        <motion.g
          transition={{ type: "tween" }}
          initial={{ x: 0 }}
          animate={{
            x: position,
          }}
        >
          <circle
            cx="35"
            cy="35"
            r="35"
            className="cursor-pointer dark:fill-black200"
            fill="#F3F8FF"
          />
          <circle
            cx="35"
            cy="35"
            r="34.5"
            className="cursor-pointer dark:stroke-black400"
            stroke="#151E2C"
            strokeOpacity="0.4"
          />
          <circle
            cx="35"
            cy="35"
            r="22"
            className="cursor-pointer dark:fill-white900"
            fill="#151E2C"
          />
        </motion.g>
      </Draggable>
    </svg>
  );
};

export default LineDecoration;
