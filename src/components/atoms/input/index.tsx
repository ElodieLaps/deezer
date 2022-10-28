import { ChangeEventHandler } from "react";
import View from "./view";

export type InputProps = {
  className?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChangeInput: ChangeEventHandler<HTMLInputElement>;
};

const Input = ({
  className,
  type = "text",
  placeholder,
  value,
  onChangeInput,
}: InputProps) => {
  return (
    <View
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChangeInput={onChangeInput}
    />
  );
};

export default Input;
