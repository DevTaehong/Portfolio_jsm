"use client";

import { useHover } from "@/utils/useHover";
import { Tooltip } from "@nextui-org/react";

const GitHubIcon = ({ isCaseDetailPage }: { isCaseDetailPage?: boolean }) => {
  const { isCircleHovered, handleCircleHover, handleCircleLeave } = useHover();
  return (
    <Tooltip
      classNames={{
        base: "text-white500 dark:text-white900 dark:bg-black300",
      }}
      content="GitHub"
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
        <g clipPath="url(#clip0_3357_3965)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.0499 13.7859C19.7648 13.7859 13.8575 19.7157 13.8575 27.0322C13.8575 32.8833 17.6374 37.8479 22.8808 39.5996C23.5405 39.7213 23.7813 39.3123 23.7813 38.9613C23.7813 38.6468 23.7697 37.814 23.7631 36.7088C20.0929 37.5093 19.3187 34.9331 19.3187 34.9331C18.7192 33.4032 17.8543 32.9959 17.8543 32.9959C16.6561 32.1739 17.9449 32.1904 17.9449 32.1904C19.2684 32.284 19.9651 33.5556 19.9651 33.5556C21.1426 35.5796 23.0532 34.9952 23.8052 34.6558C23.9248 33.7998 24.2661 33.2162 24.6429 32.885C21.7132 32.5506 18.6335 31.4148 18.6335 26.3393C18.6335 24.893 19.1472 23.7109 19.9915 22.7845C19.8555 22.4492 19.4028 21.1032 20.1202 19.2794C20.1202 19.2794 21.2284 18.9235 23.7483 20.6371C24.8013 20.3432 25.9293 20.1967 27.0515 20.1909C28.1721 20.1967 29.301 20.3432 30.3548 20.6371C32.873 18.9235 33.9788 19.2794 33.9788 19.2794C34.6986 21.1032 34.2459 22.4492 34.1099 22.7845C34.9559 23.7109 35.4663 24.893 35.4663 26.3393C35.4663 31.4272 32.3816 32.5472 29.4428 32.8751C29.9161 33.284 30.3383 34.092 30.3383 35.328C30.3383 37.0987 30.3218 38.5267 30.3218 38.9613C30.3218 39.3157 30.5593 39.7279 31.2288 39.598C36.4673 37.8429 40.2439 32.8817 40.2439 27.0322C40.2439 19.7157 34.3366 13.7859 27.0499 13.7859Z"
            className={`${
              isCircleHovered || isCaseDetailPage
                ? "fill-[#3E75C3]"
                : "fill-[#778295]"
            }`}
          />
        </g>
        <defs>
          <clipPath id="clip0_3357_3965">
            <rect
              width="26.3863"
              height="26.3863"
              fill="white"
              transform="translate(13.8577 13.5111)"
            />
          </clipPath>
        </defs>
      </svg>
    </Tooltip>
  );
};

export default GitHubIcon;
