import Image from "next/image";
import Link from "next/link";
import { TrackProps } from ".";
import styles from "./styles.module.scss";

type ViewProps = TrackProps;

const View = ({ track }: ViewProps) => {
  console.log("track", track);
  return (
    <div className={`track track-${track.title} ${styles.track}`}>
      <Link href={`/artiste/${track.artist.id}`}>
        <h3 className={styles.track__artist_title}>{track.artist.name}</h3>
      </Link>
      {track.album.cover && (
        <Image
          className={`track-image-${track.title} ${styles.track__image}`}
          src={track.album.cover}
          alt={track.title}
          width={104}
          height={104}
        />
      )}
      <div>
        <Link href={track.link} target="_blank" rel="noreferrer">
          <h2 className={styles.track__track_title}>{track.title}</h2>
        </Link>
        <p>album : {track.album.title}</p>
      </div>
    </div>
  );
};

export default View;
