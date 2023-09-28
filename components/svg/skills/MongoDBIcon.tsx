"use client";

import { useHover } from "@/utils/useHover";
import { Tooltip } from "@nextui-org/react";

const MongoDBIcon = ({ isCaseDetailPage }: { isCaseDetailPage?: boolean }) => {
  const { isCircleHovered, handleCircleHover, handleCircleLeave } = useHover();
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
        viewBox="0 0 95 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={handleCircleHover}
        onMouseLeave={handleCircleLeave}
      >
        <circle
          className={`fill-[#F3F8FF] dark:fill-black300 ${
            isCircleHovered && "fill-white900"
          }`}
          cx="47.5486"
          cy="47.3898"
          r="46.6102"
        />
        <g clipPath="url(#clip0_3316_22188)">
          <path
            className={`${
              isCircleHovered || isCaseDetailPage
                ? "fill-[#13AA52]"
                : "fill-[#778295]"
            }`}
            d="M47.5482 70.6949C60.4193 70.6949 70.8533 60.2608 70.8533 47.3898C70.8533 34.5188 60.4193 24.0847 47.5482 24.0847C34.6772 24.0847 24.2432 34.5188 24.2432 47.3898C24.2432 60.2608 34.6772 70.6949 47.5482 70.6949Z"
          />
          <path
            d="M53.7781 44.5423C52.306 38.0455 48.8271 35.9094 48.4525 35.0932C48.0428 34.5174 47.6277 33.4933 47.6277 33.4933C47.6209 33.476 47.61 33.4455 47.5972 33.4159C47.5549 33.9917 47.533 34.2138 46.9887 34.7946C46.1457 35.4537 41.8206 39.0829 41.4687 46.464C41.1405 53.3481 46.4415 57.4502 47.1584 57.9732L47.2399 58.031V58.026C47.2445 58.0606 47.4675 59.6646 47.6241 61.3642H48.1858C48.3176 60.1628 48.5151 58.9695 48.7775 57.7897L48.823 57.7601C49.1437 57.5302 49.4494 57.2801 49.7384 57.0114L49.7712 56.9818C51.2951 55.5739 54.0348 52.3176 54.0079 47.1258C54.0023 46.2598 53.9254 45.3957 53.7781 44.5423ZM47.5645 54.0864C47.5645 54.0864 47.5645 44.4312 47.8831 44.433C48.1316 44.433 48.4534 56.8871 48.4534 56.8871C48.011 56.8339 47.5645 54.8375 47.5645 54.0864Z"
            className={`fill-white900 ${
              isCircleHovered || isCaseDetailPage
                ? "dark:fill-[#FFFFFF]"
                : "dark:fill-black300"
            } `}
          />
        </g>
        <defs>
          <clipPath id="clip0_3316_22188">
            <rect
              width="46.6102"
              height="46.6102"
              fill="white"
              transform="translate(24.2432 24.0847)"
            />
          </clipPath>
        </defs>
      </svg>
    </Tooltip>
  );
};

export default MongoDBIcon;
