"use client";

import { useState } from "react";
import { Tooltip } from "@nextui-org/react";

const ReduxIcon = ({ isCaseDetailPage }: { isCaseDetailPage?: boolean }) => {
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
      content="Redux Toolkit"
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
        <path
          onMouseEnter={handleCircleHover}
          onMouseLeave={handleCircleLeave}
          className={`${isCircleHovered ? "fill-[#764ABC]" : "fill-[#778295]"}`}
          d="M32.1855 30.9677C33.0984 30.8748 33.7909 30.1011 33.7595 29.1726C33.728 28.2442 32.941 27.5014 31.9966 27.5014H31.9337C30.9577 27.5323 30.2023 28.337 30.2338 29.2964C30.2653 29.7606 30.4542 30.1629 30.7375 30.4415C29.6672 32.5151 28.0302 34.0316 25.5749 35.3005C23.9065 36.1671 22.1752 36.4766 20.4439 36.26C19.0273 36.0743 17.9255 35.4554 17.2329 34.4339C16.2256 32.9174 16.1312 31.2771 16.9812 29.6369C17.5793 28.4608 18.5236 27.5942 19.1217 27.1608C18.9958 26.7585 18.8069 26.0777 18.7125 25.5825C14.148 28.8322 14.6202 33.227 16.0053 35.3005C17.0441 36.848 19.1532 37.8075 21.4826 37.8075C22.1122 37.8075 22.7418 37.7455 23.3714 37.5909C27.4008 36.8171 30.4542 34.4649 32.1855 30.9677ZM37.7259 27.13C35.3335 24.3755 31.8078 22.859 27.7784 22.859H27.2748C26.9915 22.302 26.3934 21.9305 25.7323 21.9305H25.6693C24.6935 21.9615 23.9381 22.7661 23.9696 23.7256C24.001 24.6541 24.7879 25.3968 25.7323 25.3968H25.7952C26.4878 25.3659 27.0859 24.9326 27.3378 24.3445H27.9043C30.2968 24.3445 32.5632 25.0254 34.6095 26.3562C36.1834 27.3775 37.3167 28.7084 37.9462 30.3177C38.4814 31.6176 38.4499 32.8865 37.8832 33.9697C37.0018 35.61 35.5224 36.5075 33.5706 36.5075C32.3114 36.5075 31.1153 36.1361 30.4857 35.8576C30.1394 36.1671 29.5098 36.6622 29.069 36.9718C30.4227 37.5908 31.8078 37.9312 33.1299 37.9312C36.1519 37.9312 38.3869 36.2908 39.2369 34.6506C40.1497 32.8555 40.0867 29.7606 37.7259 27.13ZM21.7345 31.4937C21.766 32.4222 22.5529 33.1649 23.4973 33.1649H23.5603C24.5361 33.134 25.2916 32.3293 25.2601 31.37C25.2287 30.4414 24.4416 29.6987 23.4973 29.6987H23.4344C23.3714 29.6987 23.2769 29.6987 23.2141 29.7295C21.9234 27.6251 21.3882 25.3349 21.5772 22.859C21.703 21.002 22.3326 19.3926 23.4344 18.0618C24.3472 16.9166 26.1101 16.3596 27.3063 16.3287C30.6431 16.2668 32.0595 20.352 32.154 21.9923C32.5632 22.0852 33.2558 22.3019 33.728 22.4567C33.3502 17.4429 30.2023 14.8432 27.1804 14.8432C24.3472 14.8432 21.7345 16.8549 20.6956 19.826C19.2476 23.7874 20.192 27.5942 21.9548 30.5963C21.7975 30.8129 21.703 31.1533 21.7345 31.4937Z"
        />
      </svg>
    </Tooltip>
  );
};

export default ReduxIcon;
