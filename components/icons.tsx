import { IconSvgProps } from "@/types";

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    className="fill-primaryDark"
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z" />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    className="fill-primaryLight"
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
    <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
  </svg>
);

export const DownloadResumeIcon = ({ ...props }: IconSvgProps) => (
  <svg
    className="h-[24px] w-[24px] fill-black200 dark:fill-white900 sm:h-[20px] sm:w-[20px]"
    viewBox="0 0 21 21"
    aria-hidden="true"
    focusable="false"
    role="presentation"
    {...props}
  >
    <g id="material-symbols:download">
      <path
        id="Vector"
        d="M4.99992 17.1667C4.54159 17.1667 4.14909 17.0033 3.82242 16.6767C3.49575 16.35 3.3327 15.9578 3.33325 15.5V13H4.99992V15.5H14.9999V13H16.6666V15.5C16.6666 15.9583 16.5033 16.3508 16.1766 16.6775C15.8499 17.0042 15.4577 17.1672 14.9999 17.1667H4.99992ZM9.99992 13.8333L5.83325 9.66667L6.99992 8.45833L9.16659 10.625V3.83333H10.8333V10.625L12.9999 8.45833L14.1666 9.66667L9.99992 13.8333Z"
      />
    </g>
  </svg>
);

export const DividerIcon = ({ ...props }: IconSvgProps) => (
  <svg
    width="2"
    height="25"
    className="hidden sm:block"
    viewBox="0 0 2 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Line 5"
      d="M1 0.5L0.999999 24.5"
      stroke="#6F74A7"
      stroke-linecap="round"
    />
  </svg>
);
