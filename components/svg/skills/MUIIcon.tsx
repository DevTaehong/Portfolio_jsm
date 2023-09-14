"use client";

import { useState } from "react";
import { Tooltip } from "@nextui-org/react";

const MUIIcon = ({ isCaseDetailPage }: { isCaseDetailPage?: boolean }) => {
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
      content="MUI"
    >
      <svg
        className={`${
          isCaseDetailPage
            ? "h-[3.18744rem] w-[3.18744rem] sm:h-[5.82625rem] sm:w-[5.82625rem]"
            : "h-[3.29831rem] w-[3.29831rem] sm:h-[6.25rem] sm:w-[6.25rem]"
        } `}
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
        <g clip-path="url(#clip0_3357_3941)">
          <path
            onMouseEnter={handleCircleHover}
            onMouseLeave={handleCircleLeave}
            d="M13.8575 27.8435V16.4182L23.7524 22.1308V25.9393L17.1558 22.1308V29.7477L13.8575 27.8435Z"
            className={`${
              isCircleHovered ? "fill-[#00B0FF]" : "fill-[#778295]"
            }`}
          />
          <path
            onMouseEnter={handleCircleHover}
            onMouseLeave={handleCircleLeave}
            d="M23.7523 22.1308L33.6472 16.4182V27.8435L27.0506 31.6519L23.7523 29.7477L30.3489 25.9393V22.1308L23.7523 25.9393V22.1308Z"
            className={`${
              isCircleHovered ? "fill-[#0081CB]" : "fill-[#778295]"
            }`}
          />
          <path
            onMouseEnter={handleCircleHover}
            onMouseLeave={handleCircleLeave}
            d="M23.7523 29.7477V33.5561L30.3489 37.3645V33.5561L23.7523 29.7477Z"
            className={`${
              isCircleHovered ? "fill-[#00B0FF]" : "fill-[#778295]"
            }`}
          />
          <path
            onMouseEnter={handleCircleHover}
            onMouseLeave={handleCircleLeave}
            className={`${
              isCircleHovered ? "fill-[#0081CB]" : "fill-[#778295]"
            }`}
            d="M30.3489 37.3645L40.2437 31.6519V24.0351L36.9455 25.9393V29.7477L30.3489 33.5561V37.3645ZM36.9455 22.1308V18.3224L40.2437 16.4182V20.2266L36.9455 22.1308Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_3357_3941">
            <rect
              width="26.3863"
              height="26.3863"
              fill="white"
              transform="translate(13.8577 13.7384)"
            />
          </clipPath>
        </defs>
      </svg>
    </Tooltip>
  );
};

export default MUIIcon;
