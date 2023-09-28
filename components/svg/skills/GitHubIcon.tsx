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
        viewBox="0 0 94 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={handleCircleHover}
        onMouseLeave={handleCircleLeave}
      >
        <circle
          cx="46.6912"
          cy="47.3898"
          r="46.6102"
          className={`fill-[#F3F8FF] dark:fill-black300 ${
            isCircleHovered && "fill-white900"
          }`}
        />
        <g clipPath="url(#clip0_3316_22173)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M46.6893 24.5703C33.8206 24.5703 23.3857 35.045 23.3857 47.9692C23.3857 58.305 30.0626 67.0748 39.325 70.1691C40.4902 70.384 40.9155 69.6616 40.9155 69.0416C40.9155 68.4859 40.8951 67.0148 40.8835 65.0626C34.4003 66.4766 33.0326 61.9259 33.0326 61.9259C31.9737 59.2234 30.4457 58.504 30.4457 58.504C28.3293 57.0519 30.6059 57.0811 30.6059 57.0811C32.9437 57.2463 34.1745 59.4925 34.1745 59.4925C36.2545 63.0679 39.6294 62.0355 40.9578 61.436C41.169 59.9239 41.772 58.893 42.4376 58.308C37.2625 57.7172 31.8222 55.7109 31.8222 46.7453C31.8222 44.1906 32.7296 42.1023 34.2212 40.466C33.9808 39.8737 33.1812 37.496 34.4484 34.2744C34.4484 34.2744 36.406 33.6456 40.8573 36.6726C42.7173 36.1535 44.7099 35.8947 46.6923 35.8844C48.6718 35.8947 50.6658 36.1535 52.5273 36.6726C56.9757 33.6456 58.9289 34.2744 58.9289 34.2744C60.2005 37.496 59.4008 39.8737 59.1605 40.466C60.6549 42.1023 61.5566 44.1906 61.5566 46.7453C61.5566 55.7328 56.1075 57.7113 50.9163 58.2904C51.7524 59.0128 52.4982 60.4401 52.4982 62.6234C52.4982 65.7513 52.469 68.2738 52.469 69.0416C52.469 69.6674 52.8885 70.3957 54.0713 70.1661C63.3249 67.0659 69.9959 58.3021 69.9959 47.9692C69.9959 35.045 59.561 24.5703 46.6893 24.5703Z"
            className={`${
              isCircleHovered || isCaseDetailPage
                ? "fill-[#3E75C3]"
                : "fill-[#778295]"
            }`}
          />
        </g>
        <defs>
          <clipPath id="clip0_3316_22173">
            <rect
              width="46.6102"
              height="46.6102"
              fill="white"
              transform="translate(23.3857 24.0847)"
            />
          </clipPath>
        </defs>
      </svg>
    </Tooltip>
  );
};

export default GitHubIcon;
