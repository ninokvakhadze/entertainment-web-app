import styled from "styled-components";
import { Movie } from "../App";
import { useState } from "react";

interface TvSeriesProps {
  data: Movie[];
  search: string;
}

const TvSeries: React.FC<TvSeriesProps> = ({ data, search }) => {
  const tvSeriesItems = data.filter((item) => item.category != "Movie");
  const [tvSeries, setTvSeries] = useState(tvSeriesItems);

  return search == "" ? (
    <>
      <Title>Tv Series</Title>
      <TvSeriesItems>
        {tvSeries.map((item: Movie, index: number) => (
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
                  tvSeries[index].isBookmarked = !tvSeries[index].isBookmarked;
                  setTvSeries([...tvSeries]);
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
                  item.category == "TvSeries"
                    ? "./assets/icon-category-TvSeries.svg"
                    : "./assets/icon-category-tv.svg"
                }
              />
              {item.category}
              <img src="./assets/Oval.svg" /> {item.rating}
            </ItemInfo>
            <ItemTitle>{item.title}</ItemTitle>
          </Info_img>
        ))}
      </TvSeriesItems>
    </>
  ) : null;
};

export default TvSeries;


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
const TvSeriesItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1%;
  row-gap: 20px;
  width: 100%;
  height: 100%;
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
  z-index: 0;
  aspect-ratio: 16 / 9;
  position: relative;
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
  @media screen and (min-width: 1040px) {
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
