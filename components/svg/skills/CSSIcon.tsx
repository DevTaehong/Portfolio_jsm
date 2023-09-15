"use client";

import { useHover } from "@/utils/useHover";
import { Tooltip } from "@nextui-org/react";

const CSSIcon = () => {
  const { isCircleHovered, handleCircleHover, handleCircleLeave } = useHover();
  return (
    <Tooltip
      classNames={{
        base: "text-white500 dark:text-white900 dark:bg-black300",
      }}
      content="CSS"
    >
      <svg
        className={`h-[3.29831rem] w-[3.29831rem] sm:h-[6.25rem] sm:w-[6.25rem] ${
          isCircleHovered && "drop-shadow-skill"
        } lg:h-[6.25rem] lg:w-[6.25rem]`}
        viewBox="0 0 55 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={handleCircleHover}
        onMouseLeave={handleCircleLeave}
      >
        <circle
          cx="26.8863"
          cy="26.3863"
          r="26.3863"
          className={`fill-[#F3F8FF] dark:fill-black300 ${
            isCircleHovered && "fill-white900"
          }`}
        />
        <g clipPath="url(#clip0_3357_3929)">
          <path
            d="M17.4038 37.6722L15.2393 13.9657H38.4819L36.3689 37.6722L26.8863 40.352"
            className={` ${
              isCircleHovered ? "fill-[#264DE4]" : "fill-[#778295]"
            }`}
          />
          <path
            d="M26.8864 15.8726V38.2906L34.5652 36.1777L36.3689 15.8726"
            className={` ${
              isCircleHovered ? "fill-[#2965F1]" : "fill-[#778295]"
            }`}
          />
          <path
            d="M19.5682 18.8101H26.8863V21.6961H19.8259M20.0836 24.6851H26.8863V27.6227H20.3413M20.4959 29.0657H23.3819L23.588 31.3848L26.8863 32.2609V35.3015L20.8566 33.6524"
            className={` ${
              isCircleHovered
                ? "fill-[#EBEBEB] dark:fill-[#FFFFFF]"
                : "fill-white900 dark:fill-black300"
            }`}
          />
          <path
            d="M26.8864 24.6851V27.6227H30.4423L30.0816 31.3848L26.8864 32.2609V35.3015L32.813 33.6524L34.1529 18.8101H26.8864V21.6961H31.0092L30.7258 24.6851H26.8864Z"
            className={` ${
              isCircleHovered
                ? "fill-[#FFFFFF] dark:fill-[#FFFFFF]"
                : "fill-white900 dark:fill-black300"
            }`}
          />
        </g>
        <defs>
          <clipPath id="clip0_3357_3929">
            <rect
              width="26.3863"
              height="26.3863"
              fill="white"
              transform="translate(13.6931 13.9657)"
            />
          </clipPath>
        </defs>
      </svg>
    </Tooltip>
  );
};

export default CSSIcon;
