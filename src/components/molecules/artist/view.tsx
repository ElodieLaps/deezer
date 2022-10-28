import Image from "next/image";
import Link from "next/link";
import { ArtistProps } from ".";
import styles from "./styles.module.scss";

type ViewProps = ArtistProps;

const View = ({ artist }: ViewProps) => {
  const { name, link, picture, tracklist } = artist;
  return (
    <div className={`artist-${name} ${styles.artist}`}>
      <Link href={link}>
        <h1 className={styles.artist__title}>{name}</h1>
        <div className={styles.artist__content}>
          <Image
            className={`track-image-${name} ${styles.artist__image}`}
            src={picture}
            alt={name}
            width={104}
            height={104}
          />
        </div>
      </Link>
    </div>
  );
};

export default View;
