import Trending from "./trending-recomended/Trending";
import styled from "styled-components";
import { Movie } from "../App";
import Recommended from "./trending-recomended/Recommended";

interface HomeProps {
  data: Movie[];
  search: string;
  setData: React.Dispatch<React.SetStateAction<Movie[]>>;
}

const Home: React.FC<HomeProps> = ({ data, search, setData }) => {
  return (
    <HomeDiv>
      <Trending data={data} search={search} setData={setData}/>
      <Recommended data={data} search={search} setData={setData}/>
    </HomeDiv>
  );
};

export default Home;

const HomeDiv = styled.div`
  /* padding: 10px; */
`;
