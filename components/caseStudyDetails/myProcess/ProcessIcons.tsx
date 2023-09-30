const ProcessIcons = ({
  Process,
  myProcessText,
}: {
  Process: React.FC;
  myProcessText: string;
}) => {
  return (
    <div
      key={Process.name}
      className="flex flex-col items-center gap-[0.88rem]"
    >
      <Process />
      <p className="smallBold text-black300 dark:text-white900 sm:text-[1.25rem] sm:leading-[1.625rem]">
        {myProcessText}
      </p>
    </div>
  );
};

export default ProcessIcons;
