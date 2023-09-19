import Call from "../svg/contact/Call";
import Email from "../svg/contact/Email";
import { FooterGitHubIcon, LinkedInIcon } from "../svg/footer";

const MyEmailPhoneNumber = () => {
  return (
    <section className="px-11 py-12 xl:pl-[6.25rem]">
      <div className="flex flex-col gap-9 md:gap-[5rem] min-[1440px]:min-w-[20.875rem]">
        <div className="flex flex-col gap-[0.88rem] md:gap-[1.88rem]">
          <p className="paragraphRegular text-black300 dark:text-white900 md:text-[1.5rem] md:leading-[1.95rem]">
            My Socials
          </p>
          <div className="flex flex-row gap-9">
            <FooterGitHubIcon />
            <LinkedInIcon />
          </div>
        </div>
        <div className=" flex flex-col gap-[0.88rem] md:gap-[1.88rem]">
          <p className="paragraphRegular text-black300 dark:text-white900 md:text-[1.5rem] md:leading-[1.95rem]">
            Phone Number
          </p>
          <div className="paragraphBold flex flex-row items-center gap-[0.81rem] text-black400 dark:text-white800">
            <Call />
            <p>{`+1 (782) 234-7489`}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[0.88rem] md:gap-[1.88rem]">
          <p className="paragraphRegular text-black300 dark:text-white900 md:text-[1.5rem] md:leading-[1.95rem]">
            Email Address
          </p>
          <div className="paragraphBold flex flex-row items-center gap-[0.81rem] text-black400 dark:text-white800">
            <Email />
            minth1123@icloud.com
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyEmailPhoneNumber;
