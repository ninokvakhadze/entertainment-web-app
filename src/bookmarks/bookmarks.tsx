import styled from "styled-components";
import { Movie } from "../App";
import { useState } from "react";

interface BookmarksProps {
  data: Movie[];
  search: string;
}

const Bookmarks: React.FC<BookmarksProps> = ({ data, search }) => {
  const bookmarksItems = data.filter((item) => item.isBookmarked == true);
  const [bookmarks, setBookmarks] = useState(bookmarksItems);

  return search == "" ? (
    <MainDiv>
      <Title>Bookmarked movies</Title>
      <BookmarksItems>
        {bookmarks
          .filter((item) => item.category == "Movie")
          .map((item: Movie, index: number) => (
            <Info_img>
              <ItemDiv
                key={index}
                imageSmall={item.thumbnail.regular.small || ""}
              >
                <BookMarkDiv
                  onClick={() => {
                    bookmarks[index].isBookmarked =
                      !bookmarks[index].isBookmarked;
                    setBookmarks([...bookmarks]);
                  }}
                >
                  <BookMarkImg
                    src={
                      item.isBookmarked
                        ? "./assets/icon-bookmark-full.svg"
                        : "./assets/icon-bookmark-empty.svg"
                    }
                  />
                </BookMarkDiv>
              </ItemDiv>
              <ItemInfo>
                {item.year} <img src="./assets/Oval.svg" />{" "}
                <CategoryImg
                  src={
                    item.category == "Bookmarks"
                      ? "./assets/icon-category-Bookmarks.svg"
                      : "./assets/icon-category-tv.svg"
                  }
                />
                {item.category}
                <img src="./assets/Oval.svg" /> {item.rating}
              </ItemInfo>
              <ItemTitle>{item.title}</ItemTitle>
            </Info_img>
          ))}
      </BookmarksItems>
      <Title>Bookmarked Tv Series</Title>
      <BookmarksItems>
        {bookmarks
          .filter((item) => item.category != "Movie")
          .map((item: Movie, index: number) => (
            <Info_img>
              <ItemDiv
                key={index}
                imageSmall={item.thumbnail.regular.small || ""}
              >
                <BookMarkDiv
                  onClick={() => {
                    bookmarks[index].isBookmarked =
                      !bookmarks[index].isBookmarked;
                    setBookmarks([...bookmarks]);
                  }}
                >
                  <BookMarkImg
                    src={
                      item.isBookmarked
                        ? "./assets/icon-bookmark-full.svg"
                        : "./assets/icon-bookmark-empty.svg"
                    }
                  />
                </BookMarkDiv>
              </ItemDiv>
              <ItemInfo>
                {item.year} <img src="./assets/Oval.svg" />{" "}
                <CategoryImg
                  src={
                    item.category == "Bookmarks"
                      ? "./assets/icon-category-Bookmarks.svg"
                      : "./assets/icon-category-tv.svg"
                  }
                />
                {item.category}
                <img src="./assets/Oval.svg" /> {item.rating}
              </ItemInfo>
              <ItemTitle>{item.title}</ItemTitle>
            </Info_img>
          ))}
      </BookmarksItems>
    </MainDiv>
  ) : null;
};

export default Bookmarks;

const MainDiv = styled.div`
  padding: 10px;
`;

const Title = styled.h1`
  font-family: "Outfit", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.3125px;
  text-align: left;
  color: white;
  margin: 15px 0px;
`;
const BookmarksItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 5px;
  row-gap: 20px;
  width: 100%;
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
  height: 100%;
  aspect-ratio: 16 / 9;
  /* min-width: 164px; */
  min-height: 110px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
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
