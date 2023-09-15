"use client";

import { useState } from "react";
import { Tooltip } from "@nextui-org/react";

const MongoDBIcon = ({ isCaseDetailPage }: { isCaseDetailPage?: boolean }) => {
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
      content="MongoDb"
    >
      <svg
        className={`${
          isCaseDetailPage
            ? "h-[3.18744rem] w-[3.18744rem] sm:h-[5.82625rem] sm:w-[5.82625rem]"
            : "h-[3.29831rem] w-[3.29831rem] sm:h-[6.25rem] sm:w-[6.25rem]"
        } ${isCircleHovered && "drop-shadow-skill"}`}
        viewBox="0 0 55 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          onMouseEnter={handleCircleHover}
          onMouseLeave={handleCircleLeave}
          className={`fill-[#F3F8FF] dark:fill-black300 ${
            isCircleHovered && "fill-white900"
          }`}
          cx="27.068"
          cy="31.9814"
          r="26.3863"
        />
        <g clip-path="url(#clip0_3357_3980)">
          <path
            className={`${
              isCircleHovered || isCaseDetailPage
                ? "fill-[#13AA52]"
                : "fill-[#778295]"
            }`}
            onMouseEnter={handleCircleHover}
            onMouseLeave={handleCircleLeave}
            d="M27.5957 45.1746C34.8821 45.1746 40.7889 39.2679 40.7889 31.9815C40.7889 24.6951 34.8821 18.7883 27.5957 18.7883C20.3094 18.7883 14.4026 24.6951 14.4026 31.9815C14.4026 39.2679 20.3094 45.1746 27.5957 45.1746Z"
          />
          <path
            onMouseEnter={handleCircleHover}
            onMouseLeave={handleCircleLeave}
            d="M31.1221 30.3695C30.2887 26.6917 28.3193 25.4824 28.1072 25.0203C27.8753 24.6944 27.6403 24.1146 27.6403 24.1146C27.6364 24.1048 27.6303 24.0875 27.623 24.0708C27.5991 24.3968 27.5867 24.5225 27.2785 24.8513C26.8013 25.2244 24.3528 27.2789 24.1537 31.4574C23.9679 35.3546 26.9688 37.6768 27.3746 37.9728L27.4208 38.0056V38.0027C27.4233 38.0223 27.5496 38.9304 27.6382 39.8925H27.9562C28.0308 39.2124 28.1427 38.5369 28.2912 37.869L28.317 37.8522C28.4985 37.7221 28.6716 37.5805 28.8352 37.4284L28.8537 37.4116C29.7164 36.6146 31.2674 34.7712 31.2522 31.8321C31.249 31.3418 31.2055 30.8526 31.1221 30.3695ZM27.6045 35.7725C27.6045 35.7725 27.6045 30.3066 27.7849 30.3077C27.9256 30.3077 28.1077 37.358 28.1077 37.358C27.8573 37.3279 27.6045 36.1977 27.6045 35.7725Z"
            className={`fill-white900 ${
              isCircleHovered || isCaseDetailPage
                ? "dark:fill-[#FFFFFF]"
                : "dark:fill-black300"
            } `}
          />
        </g>
        <defs>
          <clipPath id="clip0_3357_3980">
            <rect
              width="26.3863"
              height="26.3863"
              fill="white"
              transform="translate(14.4026 18.7883)"
            />
          </clipPath>
        </defs>
      </svg>
    </Tooltip>
  );
};

export default MongoDBIcon;
