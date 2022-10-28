import { InputProps } from ".";
import styles from "./styles.module.scss";

type ViewProps = InputProps;

const View = ({
  className = "",
  type = "text",
  placeholder,
  value,
  onChangeInput,
}: ViewProps) => {
  return (
    <input
      className={`input ${className} ${styles.input}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChangeInput}
    />
  );
};

export default View;
