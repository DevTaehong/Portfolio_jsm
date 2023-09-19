const ContactInputs = () => {
  return (
    <section className="px-6 py-12 xl:pr-[6.25rem]">
      <form className="flex flex-col gap-9 md:gap-12 min-[1440px]:min-w-[47.6875rem]">
        <div className="flex flex-col gap-4">
          <label
            className="bodyRegular text-black300 dark:text-white900 md:text-[1.25rem] md:leading-[1.875rem]"
            htmlFor="name"
          >{`What’s your name?`}</label>
          <input
            type="text"
            id="name"
            name="name"
            className="contactInputs p-4 dark:border-contactInputs dark:bg-black300"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label
            className="bodyRegular text-black300 dark:text-white900 md:text-[1.25rem] md:leading-[1.875rem]"
            htmlFor="name"
          >{`What's your email?`}</label>
          <input
            type="text"
            id="name"
            name="name"
            className="contactInputs p-4 dark:border-contactInputs dark:bg-black300"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label
            className="bodyRegular text-black300 dark:text-white900 md:text-[1.25rem] md:leading-[1.875rem]"
            htmlFor="name"
          >{`Write something about your project goals and time frame`}</label>
          <textarea className="h-[11.875rem] rounded-[1.25rem] border border-textArea bg-white800 p-4 dark:border-contactInputs dark:bg-black300" />
        </div>
        <div className="flex flex-col gap-4">
          <label
            className="bodyRegular text-black300 dark:text-white900 md:text-[1.25rem] md:leading-[1.875rem]"
            htmlFor="name"
          >
            {`How to reach out to you back?`}
            <br className="block lg:hidden" />
            <span className="text-black400">{` eg. phone number or email `}</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="contactInputs p-4 dark:border-contactInputs dark:bg-black300"
          />
          <div className="flex md:justify-end">
            <input
              className="smallBold contactInputsButton mt-1 w-full text-white900 dark:bg-primaryDark md:mt-[1.75rem] md:text-[1.125rem] md:leading-[1.8rem] lg:max-w-[11.625rem]"
              type="submit"
              value="Send"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactInputs;
