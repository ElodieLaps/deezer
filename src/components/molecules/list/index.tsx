import TrackType from "@/utils/types/track";
import View from "./view";

export type TrackListProps = {
  list: TrackType[];
};

const List = ({ list }: TrackListProps) => {
  return (
    <View list={list}/>
  );
};

export default List;
