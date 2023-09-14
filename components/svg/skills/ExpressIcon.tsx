"use client";

import { useState } from "react";
import { Tooltip } from "@nextui-org/react";

export const ExpressIcon = () => {
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
      content="Express.js"
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
        <g clip-path="url(#clip0_3357_3971)">
          <path
            className={`${
              isCircleHovered
                ? "fill-[#000000] dark:fill-white900"
                : "fill-[#778295]"
            }`}
            onMouseEnter={handleCircleHover}
            onMouseLeave={handleCircleLeave}
            d="M38.4963 33.2225C37.6517 33.4328 37.1292 33.2317 36.6605 32.5424L33.327 28.0256L32.8452 27.4002L28.9522 32.5573C28.5074 33.1777 28.0408 33.4477 27.2107 33.2282L32.1957 26.6746L27.5546 20.755C28.3528 20.6029 28.9043 20.6804 29.3941 21.3804L32.8517 25.9533L36.3347 21.4052C36.7809 20.7848 37.2606 20.5489 38.0617 20.7777L36.2621 23.1143L33.824 26.2234C33.5338 26.5787 33.5737 26.8217 33.8407 27.165L38.4963 33.2225ZM15.2822 26.5652L15.69 24.601C16.8002 20.7138 21.3498 19.0985 24.4874 21.5005C26.3211 22.9132 26.7768 24.9115 26.6861 27.1501H16.3503C16.195 31.1794 19.1563 33.6112 22.9317 32.3704C24.256 31.9348 25.036 30.9193 25.4264 29.6487C25.6245 29.0119 25.9525 28.9124 26.5634 29.0944C26.2514 30.6834 25.5476 32.0108 24.06 32.8416C21.8375 34.0852 18.665 33.683 16.9961 31.9547C16.002 30.952 15.5913 29.6814 15.407 28.3226C15.378 28.098 15.3199 27.8841 15.2764 27.6688C15.2802 27.3012 15.2822 26.9335 15.2822 26.5659V26.5652ZM16.3692 26.2952H25.7094C25.6484 23.3815 23.7959 21.3121 21.2642 21.2944C18.4851 21.2731 16.4896 23.2934 16.3692 26.2952Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_3357_3971">
            <rect
              width="26.3863"
              height="26.3863"
              fill="white"
              transform="translate(14.0393 13.5111)"
            />
          </clipPath>
        </defs>
      </svg>
    </Tooltip>
  );
};

export default ExpressIcon;
