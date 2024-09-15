import styled from "styled-components";
import { Movie } from "../App";
import { useLocation } from "react-router-dom";

interface SearchedProps {
  data: Movie[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Searched: React.FC<SearchedProps> = ({ data, search, setSearch }) => {
  const searchedItems = search
    ? data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    : data;
  const location = useLocation();

  return location.pathname !== "/login" && location.pathname !== "/signup" ? (
    <>
      <Search
        placeholder="Search for movies or TV series"
        onChange={(event) => setSearch(event.target.value)}
      />
      {search !== "" ? (
        <>
          <Title>Found {searchedItems.length} results for '{search}'</Title>
          <SearchedItems>
            {searchedItems.map((item: Movie, index: number) => (
              <Info_img key={index}>
                <ItemDiv imageSmall={item.thumbnail?.regular?.small || ""}>
                  <BookMarkDiv>
                    <BookMarkImg src="./assets/icon-bookmark-empty.svg" />
                  </BookMarkDiv>
                </ItemDiv>
                <ItemInfo>
                  {item.year} <img src="./assets/Oval.svg" />{" "}
                  <CategoryImg
                    src={
                      item.category === "Movie"
                        ? "./assets/icon-category-movie.svg"
                        : "./assets/icon-category-tv.svg"
                    }
                  />
                  {item.category}
                  <img src="./assets/Oval.svg" /> {item.rating}
                </ItemInfo>
                <ItemTitle>{item.title}</ItemTitle>
              </Info_img>
            ))}
          </SearchedItems>
        </>
      ) : null}
    </>
  ) : null;
};

export default Searched;

const Search = styled.input`
  margin-top: 20px;

  width: 100%;
  height: 24px;
  background-color: #10141e;
  background-image: url("./assets/icon-search.svg");
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: left center; 
  border: none;
  padding-left: 40px;
  &:focus,
  &:not(:placeholder-shown) {
    color: #ffffff;
  }

  &:focus {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    background-position: left;
    width: 381px;
    height: 32px;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
  }

  @media screen and (min-width: 1040px) {
    margin-top: 45px;
  }
`;

const Title = styled.h1`
  font-family: "Outfit", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.3125px;
  text-align: left;
  color: white;
  margin: 15px 10px;
`;
const SearchedItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 5px;
  row-gap: 20px;
  width: 100%;
  padding: 10px;
`;

const Info_img = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 49%;
  min-width: 164px;
  height: auto;
`;
const ItemDiv = styled.div<{ imageSmall: string }>`
  background-image: ${(props) => `url(${props.imageSmall})`};
  background-repeat: no-repeat;
  width: 100%;
  min-height: 110px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  aspect-ratio: 16 / 9;
`;

const BookMarkDiv = styled.div`
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  align-self: flex-end;
`;
const BookMarkImg = styled.img`
  height: 14px;
  width: 13px;
`;
const ItemInfo = styled.div`
  color: #fff;
  opacity: 75%;
  font-family: "Outfit", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
  display: flex;
  gap: 3px;
`;

const CategoryImg = styled.img`
  width: 12px;
  height: 12px;
  opacity: 75%;
`;
const ItemTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 17.64px;
  text-align: left;
  font-family: "Outfit", sans-serif;
  color: white;
`;
