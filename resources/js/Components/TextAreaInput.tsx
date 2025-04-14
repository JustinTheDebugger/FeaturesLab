import {
  forwardRef,
  useImperativeHandle,
  useRef,
  InputHTMLAttributes,
} from "react";

type TextAreaInputProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  rows?: number;
};

export type TextAreaInputRef = {
  focus: () => void;
};

const TextAreaInput = forwardRef<TextAreaInputRef, TextAreaInputProps>(
  ({ className = "", rows = 6, ...props }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => textareaRef.current?.focus(),
    }));

    const baseClasses =
      "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 " +
      "focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 " +
      "dark:focus:ring-indigo-600 rounded-md shadow-sm";

    return (
      <textarea
        {...props}
        ref={textareaRef}
        rows={rows}
        className={`${baseClasses} ${className}`}
      />
    );
  }
);

export default TextAreaInput;
