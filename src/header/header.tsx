import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const location = useLocation();
  return location.pathname !== "/login" && location.pathname !== "/signup" ? (
    <>
      <HeaderDiv>
          <Logo src="./assets/logo.svg" />
          <NavDiv>
            <Link to="/home">
              <NavImg
                src={
                  location.pathname == "/home"
                    ? "./assets/icon-nav-home-white.svg"
                    : "./assets/icon-nav-home.svg"
                }
              />
            </Link>
            <Link to="/movies">
              <NavImg
                src={
                  location.pathname == "/movies"
                    ? "./assets/icon-nav-movies-white.svg"
                    : "./assets/icon-nav-movies.svg"
                }
              />
            </Link>
            <Link to="/tvseries">
              <NavImg
                src={
                  location.pathname == "/tvseries"
                    ? "./assets/icon-nav-tvseries-white.svg"
                    : "./assets/icon-nav-tv-series.svg"
                }
              />
            </Link>
            <Link to="/bookmarks">
              <NavImg
                src={
                  location.pathname == "/bookmarks"
                    ? "./assets/icon-nav-bookmarks-white.svg"
                    : "./assets/icon-nav-bookmark.svg"
                }
              />
            </Link>
          </NavDiv>
        <Profile src="./assets/image-avatar.png" />
      </HeaderDiv>
    </>
  ) : null;
}

export default Header;

const HeaderDiv = styled.div`
  background-color: #161d2f;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  padding: 5px 16px;
  align-items: center;
  @media screen and (min-width: 768px) {
    border-radius: 12px;
  }
  @media screen and (min-width: 1024px) {
    position: absolute;
    width: 96px;
    height: 100%;
    z-index: 1;
    flex-direction: column;
    padding: 30px;
  }
`;

const NavDiv = styled.div`
  display: flex;
  gap: 15px;
  @media screen and (min-width: 1024px){
    flex-direction: column;
    margin-top: -220px;
  }
`;

const Logo = styled.img`
  width: 25px;
  height: 20px;
`;
const NavImg = styled.img`
  width: 24px;
  height: 24px;
`;
const Profile = styled.img`
  width: 24px;
  height: 24px;
  border: 1px solid #ffff;
  border-radius: 12px;
`;
