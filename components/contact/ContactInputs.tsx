"user client";

import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useRef, MutableRefObject, useState } from "react";

import InputField from "@/components/contact/InputField";

const ContactInputs = () => {
  const form: MutableRefObject<HTMLFormElement | null> = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  // NOTE - Cannot make it exportable because of the use of IsLoading
  const inputField = [
    {
      label: "What's your name?",
      id: "name",
      name: "name",
      type: "text",
      maxLength: 50,
      required: true,
    },
    {
      label: "What's your email?",
      id: "email",
      name: "email",
      type: "email",
      maxLength: 500,
      required: true,
    },
    {
      label: "Write something about your project goals and time frame",
      id: "goalsTimeFrame",
      name: "goalsTimeFrame",
      type: "text",
      maxLength: 500,
      required: true,
      isTextArea: true,
    },
    {
      label: (
        <>
          How to reach out to you back?
          <br className="block lg:hidden" />
          <span className="text-black400">{` eg. phone number or email`}</span>
        </>
      ),
      id: "howToReactOut",
      name: "howToReactOut",
      type: "text",
      maxLength: 500,
      pattern: "^(?:\\d{10}|\\w+@\\w+\\.\\w{2,3})$",
      required: true,
      // NOTE - Cannot make it exportable because of the use of IsLoading
      isLoading,
    },
  ];

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      setIsLoading(true);
      emailjs
        .sendForm(
          "service_em5rim5",
          "template_6as8pef",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_API_KEY
        )
        .then(
          () => {
            toast.success("You successfully sent an email!", {
              style: {
                padding: "1.25rem",
              },
            });
            setIsLoading(false);
            form.current && form.current.reset();
          },
          (error) => {
            toast.error("This didn't work. Try again", error);
            setIsLoading(false);
          }
        );
    }
  };

  return (
    <section className="px-6 py-12 xl:pr-[6.25rem]">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-9 md:gap-12 min-[1440px]:min-w-[47.6875rem]"
      >
        {inputField.map((field) => (
          <InputField
            key={field.id}
            label={field.label}
            id={field.id}
            name={field.name}
            type={field.type}
            maxLength={field.maxLength}
            pattern={field.pattern}
            required={field.required}
            isTextArea={field.isTextArea}
            isLoading={field.isLoading}
          />
        ))}
      </form>
    </section>
  );
};

export default ContactInputs;
