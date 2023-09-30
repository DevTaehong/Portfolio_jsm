"use client";

import { useHover } from "@/utils/useHover";
import { Tooltip } from "@nextui-org/react";

const TailwindIcon = ({ isCaseDetailPage }: { isCaseDetailPage?: boolean }) => {
  const { isCircleHovered, handleCircleHover, handleCircleLeave } = useHover();
  return (
    <Tooltip
      classNames={{
        base: "text-white500 dark:text-white900 dark:bg-black300",
      }}
      content="Tailwind CSS"
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
        <path
          className={`${
            isCircleHovered || isCaseDetailPage
              ? "fill-[#44A8B3]"
              : "fill-[#778295]"
          }`}
          d="M21.4604 25.0351C22.23 21.9567 24.154 20.4175 27.2324 20.4175C31.85 20.4175 32.4272 23.8807 34.736 24.4579C36.2752 24.8427 37.622 24.2655 38.7764 22.7263C38.0068 25.8047 36.0828 27.3439 33.0044 27.3439C28.3868 27.3439 27.8096 23.8807 25.5008 23.3035C23.9616 22.9187 22.6148 23.4959 21.4604 25.0351ZM15.6884 31.9615C16.458 28.8831 18.382 27.3439 21.4604 27.3439C26.078 27.3439 26.6552 30.8071 28.964 31.3843C30.5032 31.7691 31.85 31.1919 33.0044 29.6527C32.2348 32.7311 30.3108 34.2703 27.2324 34.2703C22.6148 34.2703 22.0376 30.8071 19.7288 30.2299C18.1896 29.8451 16.8428 30.4223 15.6884 31.9615Z"
        />
      </svg>
    </Tooltip>
  );
};

export default TailwindIcon;
