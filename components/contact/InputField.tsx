import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";

const InputField = ({
  label,
  id,
  name,
  type,
  maxLength,
  pattern,
  required = false,
  isTextArea = false,
  isLoading = false,
}: {
  label: string | JSX.Element;
  id: string;
  name: string;
  type: string;
  maxLength: number;
  pattern?: string;
  required?: boolean;
  isTextArea?: boolean;
  isLoading?: boolean;
}) => (
  <div className="flex flex-col gap-4">
    <label
      className="bodyRegular text-black300 dark:text-white900 md:text-[1.25rem] md:leading-[1.875rem]"
      htmlFor={id}
    >
      {label}
    </label>
    {isTextArea ? (
      <textarea
        maxLength={maxLength}
        required={required}
        name={name}
        id={id}
        className="h-[11.875rem] rounded-[1.25rem] border border-textArea bg-white800 p-4 dark:border-contactInputs dark:bg-black300"
      />
    ) : (
      <input
        required={required}
        type={type}
        id={id}
        name={name}
        maxLength={maxLength}
        pattern={pattern}
        className="contactInputs p-4 dark:border-contactInputs dark:bg-black300"
      />
    )}
    {name === "howToReactOut" && (
      <div className="flex md:justify-end">
        <Button
          spinner={<Spinner size="sm" className="mr-2" />}
          isLoading={isLoading}
          className="smallBold contactInputsButton  mt-1 w-full cursor-pointer text-white900 transition-opacity hover:opacity-80 dark:bg-primaryDark md:mt-[1.75rem] md:text-[1.125rem] md:leading-[1.8rem] lg:max-w-[11.625rem]"
          type="submit"
        >
          Send
        </Button>
      </div>
    )}
  </div>
);

export default InputField;
