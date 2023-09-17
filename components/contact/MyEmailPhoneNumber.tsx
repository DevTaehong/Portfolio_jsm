import Call from "../svg/contact/Call";
import Email from "../svg/contact/Email";
import { FooterGitHubIcon, LinkedInIcon } from "../svg/footer";

const MyEmailPhoneNumber = () => {
  return (
    <section className="bg-white900 px-11 py-12 dark:bg-black200">
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-[0.88rem]">
          <p className="paragraphRegular text-black300">My Socials</p>
          <div className="flex flex-row gap-9">
            <FooterGitHubIcon />
            <LinkedInIcon />
          </div>
        </div>
        <div className="flex flex-col gap-[0.88rem]">
          <p className="paragraphRegular text-black300">Phone Number</p>
          <div className="flex flex-row gap-[0.81rem]">
            <Call />
            <p>{`+1 (782) 234-7489`}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[0.88rem]">
          <p className="paragraphRegular text-black300">Email Address</p>
          <div className="flex flex-row gap-[0.81rem]">
            <Email />
            minth1123@icloud.com
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyEmailPhoneNumber;
