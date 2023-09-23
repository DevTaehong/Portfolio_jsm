"user client";

import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useRef, MutableRefObject, useState } from "react";

import InputFields from "@/components/contact/InputFields";
import { inputFields } from "@/constants";

const ContactInputs = () => {
  const form: MutableRefObject<HTMLFormElement | null> = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSuccess = () => {
    toast.success("You successfully sent an email!", {
      style: {
        padding: "1.25rem",
      },
    });
    setIsLoading(false);
    form.current && form.current.reset();
  };

  const handleError = () => {
    toast.error("This didn't work. Try again");
    setIsLoading(false);
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      setIsLoading(true);
      try {
        await emailjs.sendForm(
          "service_em5rim5",
          "template_6as8pef",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_API_KEY
        );
        handleSuccess();
      } catch (e) {
        handleError();
      }
    }
  };

  return (
    <section className="px-6 py-12 xl:pr-[6.25rem]">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-9 md:gap-12 min-[1440px]:min-w-[47.6875rem]"
      >
        {inputFields.map((field) => (
          <InputFields key={field.id} {...field} isLoading={isLoading} />
        ))}
      </form>
    </section>
  );
};

export default ContactInputs;
