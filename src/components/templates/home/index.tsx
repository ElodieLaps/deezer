import axios from "axios";
import { debounce } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import View from "./view";

const HomeTemplate = () => {
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (value: string) => {
    setKeyword(value);
  };

  const fetchResult = useCallback(async () => {
    const { data: result } = await axios.get(`/api/search?q=${keyword}`);
    result && setSearchResult(result.data);
  }, [keyword]);

  const debounceSearch = useMemo(
    () =>
      debounce(
        () => {
          if (!keyword) {
            return;
          }
          fetchResult();
        },
        300,
        { maxWait: 1000 }
      ),
    [fetchResult, keyword]
  );

  useEffect(() => {
    if (keyword.length > 2) {
      debounceSearch();
    }
    return debounceSearch.cancel;
  }, [debounceSearch, keyword]);

  return (
    <>
      <View
        keyword={keyword}
        handleChangeKeyword={handleChange}
        searchResult={searchResult}
      />
    </>
  );
};

export default HomeTemplate;
