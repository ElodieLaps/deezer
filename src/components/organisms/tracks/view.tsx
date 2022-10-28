import List from "@/components/molecules/list"
import { TracksProps } from ".";
import styles from "./styles.module.scss";

type ViewProps = TracksProps;

const View = ({list}: ViewProps) => {
    return(
        <div className={styles.tracks}>
      <List list={list} />
    </div>
    )
}

export default View