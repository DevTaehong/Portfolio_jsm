const DigitalOcean = ({ isHovered }: { isHovered: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="58"
    height="58"
    viewBox="0 0 58 58"
    fill="none"
  >
    <path
      d="M29.0121 53.1474V43.778C38.9301 43.778 46.6247 33.947 42.8209 23.507C42.1158 21.5959 41.0033 19.8612 39.5607 18.4232C38.118 16.9851 36.3798 15.8782 34.4665 15.1791C24.0289 11.4019 14.1931 19.07 14.1931 28.988H4.85266C4.85266 13.1806 20.1381 0.853139 36.714 6.03205C43.9422 8.30372 49.7229 14.0578 51.9704 21.2885C57.1445 37.862 44.8171 53.1474 29.0121 53.1474Z"
      className={`${
        isHovered
          ? "fill-primaryLight dark:fill-primaryDark"
          : "fill-black200 dark:fill-white900"
      }`}
    />
    <path
      d="M29.0411 43.836H19.7007V34.4932H29.0411V43.836ZM19.7007 50.9869H12.5498V43.836H19.7007V50.9869ZM12.5498 43.836H6.55164V37.8354H12.5498V43.836Z"
      className={`${
        isHovered
          ? "fill-primaryLight dark:fill-primaryDark"
          : "fill-black200 dark:fill-white900"
      }`}
    />
  </svg>
);

export default DigitalOcean;
