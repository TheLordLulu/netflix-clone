import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Rows from "./Rows";
import requests from "../request";
const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Rows
        title="NETFLEX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Rows title="Trending Now" fetchURL={requests.fetchTrending} />
      <Rows title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Rows title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Rows title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <Rows title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
    </div>
  );
};

export default HomeScreen;
