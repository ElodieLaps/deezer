import { ReactNode } from "react";
import View from "./view";

export type LayoutProps = {
  title: string;
  description?: string;
  children: ReactNode | ReactNode[];
};

const Layout = ({ title, description, children }: LayoutProps) => {
  return (
    <View title={title} description={description}>
      {children}
    </View>
  );
};

export default Layout;
