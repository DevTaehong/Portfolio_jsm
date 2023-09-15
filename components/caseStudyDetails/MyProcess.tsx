import {
  Definition,
  Design,
  Planning,
  Development,
  Deployment,
} from "../svg/myProcess";

const myProcess = [Definition, Design, Planning, Development, Deployment];

const MyProcess = () => {
  return (
    <section className="bg-white900 dark:bg-black200">
      <div className="flex flex-col gap-6 px-6 py-9 sm:gap-10 xl:px-[17.5rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col gap-[0.56rem] sm:gap-[0.62rem]">
            <p className="technologiesUsed dark:text-primaryDark sm:text-[0.875rem] sm:leading-[1.26875rem]">
              Way of work
            </p>
            <h6 className="caseStudyDetailTechStack dark:text-white900 sm:text-[2rem] sm:leading-[2.1rem]">
              My Process
            </h6>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-x-[3.12rem] gap-y-[1.88rem] sm:justify-between">
          {myProcess.map((Process) => (
            <div
              key={Process.name}
              className="flex flex-col items-center gap-[0.88rem]"
            >
              <Process />
              <p className="smallBold text-black300 dark:text-white900 sm:text-[1.25rem] sm:leading-[1.625rem]">
                {Process.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProcess;
