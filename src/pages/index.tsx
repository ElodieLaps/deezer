import HomeTemplate from "@/components/templates/home";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="home">
      <HomeTemplate />
    </div>
  );
};

export default Home;
