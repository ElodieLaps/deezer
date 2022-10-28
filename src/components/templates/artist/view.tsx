import Button from "@/components/atoms/button";
import Layout from "@/components/atoms/layout";
import Artist from "@/components/molecules/artist";
import { NextRouter } from "next/router";
import { ArtistProps } from ".";
import styles from "./styles.module.scss";

interface ViewProps extends ArtistProps {
  router: NextRouter;
}

const View = ({ artist, router }: ViewProps) => {
  const { name } = artist;
  return (
    <Layout
      title={`${name}`}
      description={`La page contenant les informations de l'artiste ${name}`}
    >
      <div className={`artist-template-${name} ${styles.artist_template}`}>
        <Button
          type="link"
          label="retour"
          onClickButton={() => router.back()}
        />
        <Artist artist={artist} />
      </div>
    </Layout>
  );
};

export default View;
