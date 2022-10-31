import {
  createContext,
  ReactNode,
  useContext, useReducer
} from "react";

export enum ActionTypeEnum {
  SET_KEYWORD,
  RESET_KEYWORD,
}

type Action = { type: ActionTypeEnum; payload?: any };
type Dispatch = (action: Action) => void;
type State = { keyword: string };
type SearchProviderProps = { children: ReactNode | ReactNode[] };

const SearchStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function searchReducer(state: State, action: Action) {
  const { keyword } = action.payload;
  switch (action.type as ActionTypeEnum) {
    case ActionTypeEnum.SET_KEYWORD: {
      console.log("dans le switch", state);
      window.localStorage.setItem("keyword", JSON.stringify({ keyword }));
      return { keyword };
    }
    case ActionTypeEnum.RESET_KEYWORD: {
      window.localStorage.setItem("keyword", JSON.stringify({ keyword: "" }));
      return { keyword: "" };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function SearchProvider({ children }: SearchProviderProps) {
  const [state, dispatch] = useReducer(searchReducer, { keyword: "" });
  const value = { state, dispatch };

  console.log("context", state, value);
  return (
    <SearchStateContext.Provider value={value}>
      {children}
    </SearchStateContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchStateContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}

export { SearchProvider, useSearch };
