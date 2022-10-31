import axios from "axios";
import { ActionTypeEnum, useSearch } from "context/searchContext";
import { debounce } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import View from "./view";

const HomeTemplate = () => {
  const { dispatch } = useSearch();
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (window === undefined) {
      throw new Error("Window must be ready");
    }
    const localStorageSearch = window.localStorage.getItem("keyword") ?? null;
    if (localStorageSearch) {
      const { keyword: storedKeyword } = JSON.parse(localStorageSearch);
      setKeyword(storedKeyword || "");
    }
  }, []);

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
          dispatch({ type: ActionTypeEnum.SET_KEYWORD, payload: { keyword } });
        },
        300,
        { maxWait: 1000 }
      ),
    [dispatch, fetchResult, keyword]
  );

  useEffect(() => {
    if (keyword?.length > 2) {
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
