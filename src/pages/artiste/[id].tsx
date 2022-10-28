import ArtistApi from "@/api/artist";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import ArtistTemplate from "@/components/templates/artist";
import ArtistType from "@/utils/types/artist";

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  return {
    props: {
      artist: params?.id ? await ArtistApi.findArtistById(params.id) : null,
    },
  };
};

type ArtistProps = {
  artist: ArtistType
}

const Artist = ({ artist }: ArtistProps) => {
  console.log("artist", artist);
  return (
    <div className="artist">
      <ArtistTemplate artist={artist} />
    </div>
  );
};

export default Artist;
