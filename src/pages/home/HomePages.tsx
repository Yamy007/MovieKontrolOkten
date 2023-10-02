import React from "react";
import "./home.scss";
import { Sectors } from "../../components";
import { useAppSelector } from "../../hooks";
import { IResponseMovie } from "../../interface";
export const HomePages = () => {
  const { results: topResults }: IResponseMovie = useAppSelector(
    (state) => state.movie.topMovie
  );

  const { results: popularResults }: IResponseMovie = useAppSelector(
    (state) => state.movie.popularMovie
  );
  const { results: nowResults } = useAppSelector(
    (state) => state.movie.now_playing
  );
  const { results: upcomingResults } = useAppSelector(
    (state) => state.movie.upcoming
  );

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="contentMain">
        <Sectors type={"Top Rated"} results={topResults} />
      </div>
      <div className="contentMain">
        <Sectors type={"Popular"} results={popularResults} />
      </div>
      <div className="contentMain">
        <Sectors type={"Now moving"} results={nowResults} />
      </div>
      <div className="contentMain">
        <Sectors type={"Upcoming"} results={upcomingResults} />
      </div>
    </div>
  );
};
