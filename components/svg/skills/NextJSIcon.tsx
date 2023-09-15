"use client";

import { useHover } from "@/utils/useHover";
import { Tooltip } from "@nextui-org/react";

const NextJSIcon = () => {
  const { isCircleHovered, handleCircleHover, handleCircleLeave } = useHover();
  return (
    <>
      <Tooltip
        classNames={{
          base: "text-white500 dark:text-white900 dark:bg-black300",
        }}
        content="Next.js"
      >
        <svg
          className={`h-[3.29831rem] w-[3.29831rem] dark:hidden sm:h-[6.25rem] sm:w-[6.25rem] ${
            isCircleHovered && "drop-shadow-skill"
          } lg:h-[6.25rem] lg:w-[6.25rem]`}
          viewBox="0 0 103 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={handleCircleHover}
          onMouseLeave={handleCircleLeave}
        >
          <circle
            cx="50.1408"
            cy="50"
            r="50"
            className={`${
              isCircleHovered ? "fill-white900" : "fill-[#F3F8FF]"
            }`}
          />
          <g clip-path="url(#clip0_3718_256)" className="dark:hidden">
            <mask
              id="mask0_3718_256"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="26"
              y="25"
              width="50"
              height="50"
            >
              <path
                d="M51 75C64.8071 75 76 63.8071 76 50C76 36.1929 64.8071 25 51 25C37.1929 25 26 36.1929 26 50C26 63.8071 37.1929 75 51 75Z"
                fill="black"
              />
            </mask>
            <g mask="url(#mask0_3718_256)">
              <path
                className={`${
                  isCircleHovered
                    ? "fill-[#192333] dark:fill-white900"
                    : "fill-[#778295] "
                }`}
                d="M51 75C64.8071 75 76 63.8071 76 50C76 36.1929 64.8071 25 51 25C37.1929 25 26 36.1929 26 50C26 63.8071 37.1929 75 51 75Z"
              />
              <path
                d="M67.53 68.7556L45.2061 40H41V59.9917H44.3649V44.2732L64.8886 70.7903C65.8147 70.1706 66.6969 69.4903 67.53 68.7556Z"
                fill="url(#paint0_linear_3718_256)"
              />
              <path
                d="M61.2777 40H57.9444V60H61.2777V40Z"
                fill="url(#paint1_linear_3718_256)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_3718_256"
              x1="56.2777"
              y1="57.3611"
              x2="66.1389"
              y2="69.5833"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_3718_256"
              x1="59.6111"
              y1="40"
              x2="59.5552"
              y2="54.6875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <clipPath id="clip0_3718_256">
              <rect
                width="50"
                height="50"
                fill="white"
                transform="translate(26.1408 25)"
              />
            </clipPath>
          </defs>
        </svg>
      </Tooltip>
      {/*  In Dark mode, it has different path */}
      <Tooltip
        classNames={{
          base: "text-white500 dark:text-white900 dark:bg-black300",
        }}
        content="Next.js"
      >
        <svg
          className={`hidden h-[3.29831rem] w-[3.29831rem] dark:block sm:h-[6.25rem] sm:w-[6.25rem] ${
            isCircleHovered && "drop-shadow-skill"
          } lg:h-[6.25rem] lg:w-[6.25rem]`}
          viewBox="0 0 103 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50.1406" cy="50" r="50" fill="#192333" />
          <g clip-path="url(#clip0_3313_11459)">
            <path
              d="M49.5033 25.0135C49.3958 25.0232 49.0536 25.0574 48.7457 25.0819C41.644 25.7221 34.992 29.5534 30.7789 35.442C28.4329 38.7162 26.9324 42.4303 26.3655 46.3642C26.1651 47.7374 26.1406 48.143 26.1406 50.0049C26.1406 51.8668 26.1651 52.2724 26.3655 53.6456C27.7242 63.0333 34.4055 70.9207 43.4671 73.843C45.0898 74.3659 46.8004 74.7227 48.7457 74.9377C49.5033 75.0208 52.778 75.0208 53.5355 74.9377C56.8933 74.5663 59.7379 73.7355 62.5434 72.3037C62.9735 72.0838 63.0566 72.0251 62.9979 71.9762C62.9588 71.9469 61.126 69.4888 58.9266 66.5176L54.9285 61.1176L49.9187 53.7043C47.1621 49.6286 44.8943 46.2958 44.8747 46.2958C44.8552 46.2909 44.8356 49.5846 44.8259 53.6065C44.8112 60.6485 44.8063 60.9319 44.7183 61.0981C44.5913 61.3375 44.4935 61.4353 44.2882 61.5428C44.1318 61.621 43.995 61.6356 43.257 61.6356H42.4114L42.1866 61.4939C42.0399 61.4011 41.9324 61.2789 41.8591 61.1372L41.7565 60.9173L41.7662 51.1191L41.7809 41.316L41.9324 41.1255C42.0106 41.0228 42.1768 40.8909 42.2941 40.8274C42.4945 40.7296 42.5727 40.7198 43.4182 40.7198C44.4153 40.7198 44.5815 40.7589 44.8405 41.0424C44.9138 41.1206 47.6265 45.206 50.8718 50.1271C54.1172 55.0481 58.5551 61.7676 60.735 65.0662L64.6939 71.0624L64.8943 70.9305C66.6685 69.7772 68.5453 68.1352 70.0311 66.4248C73.1934 62.7938 75.2315 58.3663 75.9158 53.6456C76.1162 52.2724 76.1406 51.8668 76.1406 50.0049C76.1406 48.143 76.1162 47.7374 75.9158 46.3642C74.557 36.9765 67.8757 29.0891 58.8141 26.1668C57.2159 25.6487 55.515 25.292 53.6089 25.077C53.1396 25.0281 49.909 24.9744 49.5033 25.0135ZM59.7379 40.1334C59.9725 40.2507 60.1631 40.4755 60.2315 40.7101C60.2706 40.8371 60.2804 43.5542 60.2706 49.6775L60.256 58.4641L58.7066 56.089L57.1524 53.714V47.3269C57.1524 43.1975 57.1719 40.8762 57.2012 40.7638C57.2794 40.4902 57.4505 40.2751 57.6851 40.1481C57.8855 40.0455 57.9588 40.0357 58.7262 40.0357C59.4495 40.0357 59.5766 40.0455 59.7379 40.1334Z"
              className={`fill-[#778295] ${
                isCircleHovered && "dark:fill-white900"
              }`}
            />
          </g>
          <defs>
            <clipPath id="clip0_3313_11459">
              <rect
                width="50"
                height="50"
                fill="white"
                transform="translate(26.1406 25)"
              />
            </clipPath>
          </defs>
        </svg>
      </Tooltip>
    </>
  );
};

export default NextJSIcon;
