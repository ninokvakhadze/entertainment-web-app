import { createGlobalStyle } from "styled-components";
import Header from "./header/header";
import Login from "./login-signup/Login";
import SignUp from "./login-signup/SignUp";
import Home from "./home/Home";
import Searched from "./search/search";
import Movies from "./movies/movie";
import TvSeries from "./tv-series/TvSeries";
import Bookmarks from "./bookmarks/bookmarks";
import JsonData from "./data.json";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

export interface Movie {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

const movies: Movie[] = JsonData;

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Router>
        <Header />
        <Searched search={search} data={movies} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home data={movies} search={search}/>} />
          <Route path="/movies" element={<Movies data={movies} search={search}/>} />
          <Route path="/tvseries" element={<TvSeries data={movies} search={search}/>} />
          <Route path="/bookmarks" element={<Bookmarks data={movies} search={search}/>} />
        </Routes>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Roboto:wght@700&display=swap');
    
 *{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  }
body{
  background-color:#10141E;
  }`;
