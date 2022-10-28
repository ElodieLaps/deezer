import axios from "axios";

class SearchApi {
  async findSomethingByKeyword(keyword: string | string[]) {
    let data: any[] = [];

    try {
      const response = await axios.get(
        `https://api.deezer.com/search?q=${keyword}`
      );
      data = response?.data || [];
    } catch (error) {
      console.log(error);
    }
    return data;
  }

  async getNextPage(keyword: string | string[], index: string | string[]) {
    let data: any[] = [];

    try {
      const response = await axios.get(
        `https://api.deezer.com/search?q=${keyword}&page=${index}`
      );
      data = response?.data || [];
    } catch (error) {
      console.log(error);
    }
    return data;
  }
}

export default new SearchApi();
