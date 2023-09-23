import { Link } from "@nextui-org/link";

import { links, emailPhoneNumber } from "@/constants";

const MyEmailPhoneNumber = () => {
  return (
    <section className="px-11 py-12 xl:pl-[6.25rem]">
      <div className="flex flex-col gap-9 md:gap-[5rem] min-[1440px]:min-w-[20.875rem]">
        <div className="flex flex-col gap-[0.88rem] md:gap-[1.88rem]">
          <p className="paragraphRegular text-black300 dark:text-white900 md:text-[1.5rem] md:leading-[1.95rem]">
            My Socials
          </p>
          <div className="flex flex-row gap-9">
            {links.map((link) => (
              <Link key={link.link} isExternal href={link.link}>
                <link.icon />
              </Link>
            ))}
          </div>
        </div>
        {emailPhoneNumber.map((item) => (
          <div
            key={item.title}
            className=" flex flex-col gap-[0.88rem] md:gap-[1.88rem]"
          >
            <p className="paragraphRegular text-black300 dark:text-white900 md:text-[1.5rem] md:leading-[1.95rem]">
              {item.title}
            </p>
            <div className="paragraphBold flex flex-row items-center gap-[0.81rem] text-black400 dark:text-white800">
              <item.icon />
              <p>{item.numberOrEmail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyEmailPhoneNumber;
