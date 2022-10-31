import HomeTemplate from "@/components/templates/home";
import { SearchProvider } from "context/searchContext";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="home">
      <SearchProvider>
        <HomeTemplate />
      </SearchProvider>
      
    </div>
  );
};

export default Home;
