import TrackType from "@/utils/types/track";
import { TrackListProps } from ".";
import Track from "../track";
import styles from "./styles.module.scss";

type ViewProps = TrackListProps;

const View = ({ list }: ViewProps) => {
  return (
    <ul className={`list ${styles.list}`}>
      {list?.map((item: TrackType) => {
        return (
          <li className={`list-${item.id} ${styles.list__item}` } key={item.id}>
            <Track track={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default View;
