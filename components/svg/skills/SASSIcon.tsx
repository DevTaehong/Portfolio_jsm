"use client";

import { useHover } from "@/utils/useHover";
import { Tooltip } from "@nextui-org/react";

const SASSIcon = ({ isCaseDetailPage }: { isCaseDetailPage?: boolean }) => {
  const { isCircleHovered, handleCircleHover, handleCircleLeave } = useHover();
  return (
    <Tooltip
      classNames={{
        base: "text-white500 dark:text-white900 dark:bg-black300",
      }}
      content="SASS"
    >
      <svg
        className={`${
          isCaseDetailPage
            ? "h-[3.18744rem] w-[3.18744rem] sm:h-[5.82625rem] sm:w-[5.82625rem]"
            : "h-[3.29831rem] w-[3.29831rem] sm:h-[6.25rem] sm:w-[6.25rem]"
        } ${isCircleHovered && "drop-shadow-skill"}`}
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
        <g clipPath="url(#clip0_3357_3936)">
          <path
            d="M36.3032 13.9657H17.8328C15.6469 13.9657 13.8749 15.7377 13.8749 17.9236V36.3941C13.8749 38.58 15.6469 40.352 17.8328 40.352H36.3032C38.4892 40.352 40.2612 38.58 40.2612 36.3941V17.9236C40.2612 15.7377 38.4892 13.9657 36.3032 13.9657Z"
            fill="#778295"
            className={`fill-[#778295] ${
              (isCircleHovered || isCaseDetailPage) && "fill-[#CC6699]"
            }`}
          />
          <path
            d="M27.1712 18.5009C22.2238 20.2016 19.0285 23.6545 19.3378 25.7159C19.647 27.7773 22.7391 29.4265 24.1306 30.5087C22.3268 31.4364 20.0593 32.8278 20.1108 34.6316C20.2139 37.1053 22.8937 36.3322 24.0275 35.6107C25.1613 34.8892 26.2951 32.8794 25.5736 30.7664C27.1712 30.3541 28.5627 30.8695 28.9749 31.1787C30.5726 32.3125 29.748 33.6009 29.1811 33.807C28.6142 34.0131 28.9749 34.1162 29.3357 34.0131C29.6964 33.9101 30.4695 33.3947 30.4695 32.5186C30.4695 30.3026 28.0988 29.2718 25.1613 30.0449C23.4606 28.2411 21.1415 27.4166 21.2446 25.4582C21.2961 24.7367 21.5538 22.8814 26.1405 20.5623C30.7272 18.2432 33.9739 19.1708 33.5616 21.2838C32.9432 24.479 27.3773 26.6435 25.419 24.7882C25.3159 24.5821 24.9552 24.4275 25.1613 24.9944C26.192 27.5712 34.5408 26.3858 34.9016 20.9231C35.0046 18.0371 30.8302 17.264 27.1712 18.5009ZM22.7391 34.9923C21.4507 35.4046 21.5023 34.58 21.5538 34.2708C21.7084 33.3947 22.4299 32.3125 24.5944 31.2302C25.2128 33.1886 23.8214 34.6831 22.7391 34.9923Z"
            fill="white"
            className={` ${
              isCircleHovered || isCaseDetailPage
                ? "dark:fill-[#FFFFFF]"
                : "dark:fill-black300"
            }`}
          />
        </g>
        <defs>
          <clipPath id="clip0_3357_3936">
            <rect
              width="26.3863"
              height="26.3863"
              fill="white"
              transform="translate(13.8749 13.9657)"
            />
          </clipPath>
        </defs>
      </svg>
    </Tooltip>
  );
};

export default SASSIcon;
