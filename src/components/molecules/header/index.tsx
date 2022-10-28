import View from "./view";

export type HeaderProps = {
  keyword: string;
  handleChangeKeyword: (e: string) => void;
  placeholder?: string;
  className?: string;
  title: string;
};

const Header = ({
  keyword,
  handleChangeKeyword,
  placeholder,
  className,
  title
}: HeaderProps) => {
  return (
    <View
      className={className}
      keyword={keyword}
      handleChangeKeyword={handleChangeKeyword}
      placeholder={placeholder}
      title={title}
    />
  );
};

export default Header;
