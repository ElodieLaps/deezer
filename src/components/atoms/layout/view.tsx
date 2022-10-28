import Head from "next/head";
import { LayoutProps } from ".";
import styles from "./styles.module.scss";

type ViewProps = LayoutProps;

const View = ({ title, description, children }: ViewProps) => {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`content ${styles.layout__content}`}>{children}</div>
    </div>
  );
};

export default View;
