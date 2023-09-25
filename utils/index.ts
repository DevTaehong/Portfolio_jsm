export const generateFadeInAnimationVariants = (
  delayFactor: number,
  y: number = 100
) => {
  return {
    initial: {
      opacity: 0,
      y,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delayFactor * index,
      },
    }),
  };
};

export const revealAnimationVariants = (y: number) => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
});

export const paragraphVariants = revealAnimationVariants(35);
export const headingVariants = revealAnimationVariants(30);
export const paragraphVariants2 = revealAnimationVariants(25);
export const paragraphVariants3 = revealAnimationVariants(20);
