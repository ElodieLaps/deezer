// https://api.deezer.com/artist/27

import axios from "axios";

class ArtistApi {
  async findArtistById(id: string | string[]) {
    let data: any = {};

    try {
      const response = await axios.get(`https://api.deezer.com/artist/${id}`);
      data = response?.data || {};
    } catch (error) {
      console.log(error);
    }

    return data;
  }
}

export default new ArtistApi();
