"use client";

import { useState } from "react";
import { Tooltip } from "@nextui-org/react";

const JSIcon = () => {
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
      content="JavaScript"
    >
      <svg
        viewBox="0 0 55 53"
        className={`h-[3.29831rem] w-[3.29831rem] sm:h-[6.25rem] sm:w-[6.25rem] ${
          isCircleHovered && "drop-shadow-skill"
        } lg:h-[6.25rem] lg:w-[6.25rem]`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={`fill-[#F3F8FF] dark:fill-black300 ${
            isCircleHovered && "fill-white900"
          }`}
          cx="26.5232"
          cy="26.3863"
          r="26.3863"
          onMouseEnter={handleCircleHover}
          onMouseLeave={handleCircleLeave}
        />
        <g clip-path="url(#clip0_3357_3898)">
          <path
            onMouseEnter={handleCircleHover}
            onMouseLeave={handleCircleLeave}
            className={`fill-[#778295] ${isCircleHovered && "fill-[#F0DB4F]"}`}
            d="M36.286 13.1931H17.8156C15.6297 13.1931 13.8577 14.9651 13.8577 17.1511V35.6215C13.8577 37.8074 15.6297 39.5794 17.8156 39.5794H36.286C38.4719 39.5794 40.244 37.8074 40.244 35.6215V17.1511C40.244 14.9651 38.4719 13.1931 36.286 13.1931Z"
          />
          <path
            onMouseEnter={handleCircleHover}
            onMouseLeave={handleCircleLeave}
            className={` ${
              isCircleHovered
                ? "fill-[#323330] dark:fill-black300"
                : "fill-[#F3F8FF] dark:fill-black300"
            }`}
            d="M30.5552 32.2613C31.0705 33.1374 31.792 33.7559 32.9773 33.7559C34.0081 33.7559 34.678 33.2405 34.678 32.519C34.678 31.6944 34.0081 31.3852 32.8743 30.8699L32.2558 30.6122C30.4521 29.8392 29.2668 28.9115 29.2668 26.9016C29.2668 25.0463 30.6582 23.6033 32.8743 23.6033C34.4719 23.6033 35.6057 24.1702 36.3787 25.6132L34.4719 26.8501C34.0596 26.077 33.5958 25.7678 32.8743 25.7678C32.1528 25.7678 31.6889 26.2317 31.6889 26.8501C31.6889 27.5716 32.1528 27.8808 33.235 28.3446L33.8534 28.6023C35.9664 29.5299 37.1517 30.4061 37.1517 32.519C37.1517 34.7351 35.3995 35.9719 33.0289 35.9719C30.7098 35.9719 29.2152 34.8897 28.4937 33.4467L30.5552 32.2613ZM21.7941 32.4675C22.2064 33.1374 22.5156 33.7559 23.3917 33.7559C24.2163 33.7559 24.7316 33.4467 24.7316 32.2098V23.6549H27.2053V32.1067C27.2053 34.6835 25.7108 35.8173 23.4948 35.8173C21.4849 35.8173 20.3511 34.7866 19.7842 33.5497L21.7941 32.4675Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_3357_3898">
            <rect
              width="26.3863"
              height="26.3863"
              fill="white"
              transform="translate(13.8577 13.1931)"
            />
          </clipPath>
        </defs>
      </svg>
    </Tooltip>
  );
};

export default JSIcon;
