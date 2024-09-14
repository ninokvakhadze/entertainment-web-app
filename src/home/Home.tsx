import Trending from "./trending-recomended/Trending";
import styled from "styled-components";
import { Movie } from "../App";
import Recommended from "./trending-recomended/Recommended";

interface HomeProps {
  data: Movie[];
  search: string;
}

const Home: React.FC<HomeProps> = ({ data, search }) => {
  return (
    <HomeDiv>
      <Trending data={data} search={search} />
      <Recommended data={data} search={search} />
    </HomeDiv>
  );
};

export default Home;

const HomeDiv = styled.div`
  padding: 10px;
`;
