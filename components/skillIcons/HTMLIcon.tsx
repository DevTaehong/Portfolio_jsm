import { useState } from "react";
import { Tooltip } from "@nextui-org/react";

const HTMLIcon = () => {
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
      content="HTML"
    >
      <svg
        className={`h-[3.29831rem] w-[3.29831rem] sm:h-[6.25rem] sm:w-[6.25rem] ${
          isCircleHovered && "drop-shadow-skill"
        } lg:h-[6.25rem] lg:w-[6.25rem]`}
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
        <g clip-path="url(#clip0_3357_3922)">
          <path
            onMouseEnter={handleCircleHover}
            onMouseLeave={handleCircleLeave}
            d="M17.6983 37.6723L15.5853 13.9658H38.828L36.715 37.6723L27.1809 40.3521"
            className={`fill-[#778295] ${isCircleHovered && "fill-[#E34F26]"}`}
          />
          <path
            onMouseEnter={handleCircleHover}
            onMouseLeave={handleCircleLeave}
            d="M27.2324 38.2906L34.9113 36.1777L36.715 15.8726H27.2324"
            className={`fill-[#778295] ${isCircleHovered && "fill-[#EF652A]"}`}
          />
          <path
            onMouseEnter={handleCircleHover}
            onMouseLeave={handleCircleLeave}
            d="M27.2324 24.6853H23.3672L23.1095 21.6962H27.2324V18.8102H19.9143L20.6873 27.6228H27.2324V24.6853ZM27.1808 32.261L23.9341 31.3849L23.728 29.0658H20.842L21.2027 33.6525L27.1808 35.3016V32.261Z"
            className={` ${
              isCircleHovered
                ? "fill-[#EBEBEB] dark:fill-[#FFFFFF]"
                : "fill-white900 dark:fill-black300"
            }`}
          />
          <path
            onMouseEnter={handleCircleHover}
            onMouseLeave={handleCircleLeave}
            d="M27.1809 24.6853V27.6228H30.7884L30.4277 31.3849L27.1809 32.261V35.3016L33.1591 33.6525L33.9836 24.6853H27.1809ZM27.1809 18.8102V21.6962H34.2413L34.499 18.8102H27.1809Z"
            className={` ${
              isCircleHovered
                ? "fill-[#FFFFFF] dark:fill-[#FFFFFF]"
                : "fill-white900 dark:fill-black300"
            }`}
          />
        </g>
        <defs>
          <clipPath id="clip0_3357_3922">
            <rect
              width="26.3863"
              height="26.3863"
              fill="white"
              transform="translate(14.0393 13.9658)"
            />
          </clipPath>
        </defs>
      </svg>
    </Tooltip>
  );
};

export default HTMLIcon;
