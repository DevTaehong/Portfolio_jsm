"use client";

import { useState } from "react";
import { Tooltip } from "@nextui-org/react";

const GitIcon = () => {
  const [isCircleHovered, setIsCircleHovered] = useState(false);

  const handleCircleHover = () => {
    setIsCircleHovered(true);
  };

  const handleCircleLeave = () => {
    setIsCircleHovered(false);
  };
  return (
    <Tooltip
      classNames={{
        base: "text-white500 dark:text-white900 dark:bg-black300",
      }}
      content="Git"
    >
      <svg
        className={`h-[3.29831rem] w-[3.29831rem] sm:h-[6.25rem] sm:w-[6.25rem] ${
          isCircleHovered && "drop-shadow-skill"
        } lg:h-[6.25rem] lg:w-[6.25rem]`}
        viewBox="0 0 55 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          onMouseEnter={handleCircleHover}
          onMouseLeave={handleCircleLeave}
          cx="26.8863"
          cy="26.3863"
          r="26.3863"
          className={`fill-[#F3F8FF] dark:fill-black300 ${
            isCircleHovered && "fill-white900"
          }`}
        />
        <path
          className={`${isCircleHovered ? "fill-[#EE513B]" : "fill-[#778295]"}`}
          onMouseEnter={handleCircleHover}
          onMouseLeave={handleCircleLeave}
          d="M16.5343 28.0969C15.8907 27.4533 15.8907 26.4099 16.5343 25.7663L26.4304 15.8702C27.0739 15.2267 28.1174 15.2267 28.7609 15.8702L38.657 25.7663C39.3005 26.4099 39.3005 27.4533 38.657 28.0969L28.7609 37.9929C28.1174 38.6365 27.0739 38.6365 26.4304 37.9929L16.5343 28.0969Z"
        />
        <path
          className={` ${
            isCircleHovered
              ? "fill-white900"
              : "fill-white900 dark:fill-black300"
          } `}
          onMouseEnter={handleCircleHover}
          onMouseLeave={handleCircleLeave}
          d="M24.4202 17.912L23.4181 18.9141L26.0063 21.5024C25.9016 21.727 25.8432 21.9775 25.8432 22.2417C25.8432 22.9917 26.3144 23.6317 26.9769 23.8816V30.2132C26.3144 30.4631 25.8432 31.1031 25.8432 31.8531C25.8432 32.8208 26.6277 33.6053 27.5954 33.6053C28.5631 33.6053 29.3476 32.8208 29.3476 31.8531C29.3476 31.1732 28.9603 30.5836 28.3942 30.2932V23.8903L30.8683 26.3644C30.7687 26.5845 30.7133 26.8288 30.7133 27.0861C30.7133 28.0538 31.4978 28.8383 32.4655 28.8383C33.4333 28.8383 34.2178 28.0538 34.2178 27.0861C34.2178 26.1184 33.4333 25.3339 32.4655 25.3339C32.2775 25.3339 32.0964 25.3635 31.9265 25.4183L29.2693 22.7611C29.3202 22.597 29.3476 22.4225 29.3476 22.2417C29.3476 21.274 28.5631 20.4895 27.5954 20.4895C27.4145 20.4895 27.2401 20.5169 27.076 20.5678L24.4202 17.912Z"
        />
      </svg>
    </Tooltip>
  );
};

export default GitIcon;
