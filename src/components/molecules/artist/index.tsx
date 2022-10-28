import ArtistType from "@/utils/types/artist";
import View from "./view";

export type ArtistProps = {
  artist: ArtistType;
}

const Artist = ({artist}: ArtistProps) => {
  return <View artist={ artist}/>
};

export default Artist;
