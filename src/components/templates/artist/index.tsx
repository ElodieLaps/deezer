import ArtistType from "@/utils/types/artist";
import { useRouter } from "next/router";
import View from "./view";

export type ArtistProps = {
  artist: ArtistType;
};

const ArtistTemplate = ({ artist }: ArtistProps) => {
  const router = useRouter();
  return <View artist={artist} router={router} />;
};

export default ArtistTemplate;
