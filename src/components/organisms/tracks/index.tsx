import TrackType from "@/utils/types/track";
import View from "./view";

export type TracksProps = {
  list: TrackType[];
};

const Tracks = ({ list }: TracksProps) => {
  return <View list={list} />;
};

export default Tracks;
