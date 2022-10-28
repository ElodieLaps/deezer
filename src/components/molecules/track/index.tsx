import TrackType from "utils/types/track";
import View from "./view";

export type TrackProps = {
  track: TrackType;
};

const Track = ({ track }: TrackProps) => {
  return <View track={track} />;
};

export default Track;
