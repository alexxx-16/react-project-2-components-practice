import type { InputHTMLAttributes, FocusEvent } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

// _e means I need e here for the signature, but ntentionally ignoring it.
const handleFocus = (_e: FocusEvent<HTMLInputElement>) => {
  console.log("user starts typing.");
};
const handleBlur = (_e: FocusEvent<HTMLInputElement>) => {
  console.log("user stops typing.");
};

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="text-lg ml-2">{label}</label>}
      <input
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="outline-none shadow-md bg-yellow-100 py-3 rounded-full px-5 focus:ring-2 focus:ring-yellow-400 caret-yellow-400 transition-all duration-200"
      />
    </div>
  );
};

export default Input;
