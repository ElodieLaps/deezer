import Input from "@/components/atoms/input";
import { HeaderProps } from ".";
import styles from "./styles.module.scss";

type ViewProps = HeaderProps;

const View = ({
  keyword,
  handleChangeKeyword,
  placeholder,
  className,
  title,
}: ViewProps) => {
  return (
    <div className={`header ${className} ${styles.header}`}>
      <div className={styles.header__background}></div>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>{title}</h1>
        <Input
          value={keyword}
          onChangeInput={(e) => handleChangeKeyword(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default View;
