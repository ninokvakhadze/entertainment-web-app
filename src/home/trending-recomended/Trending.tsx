import styled from "styled-components";
import { Movie } from "../../App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./trending.css";
import { useState } from "react";

interface TrendingProps {
  data: Movie[];
  search: string;
}

const settings = {
  speed: 500,
  infinite: false,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  rows: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 1.5,
      },
    },
  ]
};

const Trending: React.FC<TrendingProps> = ({ data, search }) => {
  const trendingItems = data.filter((item) => item.isTrending);

  const [trending, setTrending] = useState(trendingItems);

  return search == "" ? (
    <>
      <Title>Trending</Title>
      <Slider {...settings}>
        {trending.map((item: Movie, index: number) => (
          <TrendingDiv
            className="slick-slide"
            imagesmall={item.thumbnail.trending?.small || ""}
            key={index}
          >
            <BackgroundDiv>
              <Playcard>
                <img src="/assets/icon-play.svg" />
                <Playtext>Play</Playtext>
              </Playcard>
              <BookMarkDiv
                onClick={() => {
                  trending[index].isBookmarked = !trending[index].isBookmarked;
                  setTrending([...trending]);
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
              <div>
                <ItemInfo>
                  {item.year} <img src="./assets/Oval.svg" />{" "}
                  <CategoryImg
                    src={
                      item.category == "Movie"
                        ? "./assets/icon-category-movie.svg"
                        : "./assets/icon-category-tv.svg"
                    }
                  />
                  {item.category}
                  <img src="./assets/Oval.svg" /> {item.rating}
                </ItemInfo>
                <ItemTitle>{item.title}</ItemTitle>
              </div>
            </BackgroundDiv>
          </TrendingDiv>
        ))}
      </Slider>
    </>
  ) : null;
};

export default Trending;

const Title = styled.h1`
  font-family: "Outfit", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.3125px;
  text-align: left;
  color: white;
  margin: 15px 0px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40.32px;
    letter-spacing: -0.5px;
  }
`;

const TrendingDiv = styled.div<{ imagesmall: string }>`
  background-image: ${(props) => `url(${props.imagesmall})`};
  background-repeat: no-repeat;
  aspect-ratio: 16 / 9;
  width: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
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
  font-family: "Outfit", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.3125px;
  text-align: left;
  color: white;
`;

const Playcard = styled.div`
  width: 117px;
  height: 48px;
  background: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 25px;
  gap: 10px;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: absolute;
  top: 45%;
  left: 40%;
  cursor: pointer;
`;

const BackgroundDiv = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 40%,
    rgba(0, 0, 0, 0.75) 100%
  );
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: right;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
  &:hover ${Playcard} {
    display: flex;
  }
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
