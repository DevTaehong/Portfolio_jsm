const ContactInputs = () => {
  return (
    <section className="bg-white900 px-6 py-12 dark:bg-black200">
      <form className="flex flex-col gap-9 2xl:mx-auto 2xl:max-w-[90rem]">
        <div className="flex flex-col gap-4">
          <label
            className="bodyRegular text-black300"
            htmlFor="name"
          >{`What’s your name?`}</label>
          <input
            type="text"
            id="name"
            name="name"
            className="contactInputs p-4"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label
            className="bodyRegular text-black300"
            htmlFor="name"
          >{`What's your email?`}</label>
          <input
            type="text"
            id="name"
            name="name"
            className="contactInputs p-4"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label
            className="bodyRegular text-black300"
            htmlFor="name"
          >{`Write something about your project goals and time frame`}</label>
          <textarea className="h-[11.875rem] rounded-[1.25rem] border border-textArea bg-white800 p-4" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="bodyRegular text-black300" htmlFor="name">
            {`How to reach out to you back?`}
            <br />
            <p className="text-black400">{`eg. phone number or email `}</p>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="contactInputs p-4"
          />
          <input
            className="smallBold contactInputsButton mt-1 text-white900"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </section>
  );
};

export default ContactInputs;
