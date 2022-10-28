import Input from "@/components/atoms/input";
import Layout from "@/components/atoms/layout";
import Header from "@/components/molecules/header";
import Tracks from "@/components/organisms/tracks";
import TrackType from "@/utils/types/track";
import styles from "./styles.module.scss";

type ViewProps = {
  keyword: string;
  handleChangeKeyword: (e: string) => void;
  searchResult: TrackType[];
};

const View = ({ keyword, handleChangeKeyword, searchResult }: ViewProps) => {
  return (
    <Layout
      title="accueil"
      description={`chercher une musique depuis l'accueil avec le mot clé ${keyword}`}
    >
      <div className={`home ${styles.home}`}>
        <Header
          keyword={keyword}
          handleChangeKeyword={handleChangeKeyword}
          placeholder="chercher un titre"
          className={styles.home__header}
          title="Chercher un titre"
        />
        {searchResult.length > 0 && <Tracks list={searchResult} />}
      </div>
    </Layout>
  );
};

export default View;
