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
    <>
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
                <Hover>
                <Playcard>
                  <img src="/assets/icon-play.svg" />
                  <Playtext>Play</Playtext>
                </Playcard>
              </Hover>
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
    </>
  ) : null;
};

export default Bookmarks;


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
  gap: 1%;
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
  @media screen and (max-width: 374px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 32%;
  }
`;
const ItemDiv = styled.div<{ imageSmall: string }>`
  background-image: ${(props) => `url(${props.imageSmall})`};
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  position: relative;
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
  z-index: 1;
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
const Playcard = styled.div`
  width: 117px;
  height: 48px;
  background: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 25px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: absolute;
  top: 45%;
  left: 40%;
  cursor: pointer;
`;

const Playtext = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
`;

const Hover = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: inline;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    border-radius: 11px;
    position: absolute;
    cursor: pointer;
    z-index: 0;
    opacity: 0;
    top: 0;
    left: 0;
    &:hover {
      opacity: 1;
    }
  }
`;
