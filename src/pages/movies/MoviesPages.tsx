import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { castActions, movieActions } from "../../redux";
import { imageConst } from "../../constant";
import "./movies.scss";
import { Button, Rating } from "@mui/material";
export const MoviesPages = () => {
  const { id } = useParams();
  console.log(id);
  const { cast } = useAppSelector((state) => state.cast);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(movieActions.movieInfo(id));
    dispatch(castActions.getAll(id));
  }, [id, dispatch]);
  const {
    overview,
    backdrop_path,
    genres,
    title,
    adult,
    budget,
    original_language,
    runtime,
    release_date,
    popularity,
    vote_average,
    vote_count,
  } = useAppSelector((state) => state.movie.movie) || {};

  return (
    <>
      <div className="info">
        <div className="image">
          <img src={imageConst + backdrop_path} alt="" />
          <div className="genre">
            {genres?.map((elem) => (
              <Button color="secondary" variant="outlined">
                {elem.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="decsryption">
          <div className="titleMovie">{title}</div>
          <div className="parametr">
            <div>Adult: {adult ? "18+" : "3+"}</div>
            <div>Budget: {budget}$</div>
            <div>Original Language: {original_language}</div>
            <div>Release date: {release_date}</div>
            <div>Runtime: {runtime} min.</div>
            <div>Popularity: {popularity}</div>
            <div>Vote: {vote_count}</div>
            <div>
              <Rating
                name="size-large"
                defaultValue={vote_average}
                size="medium"
                precision={0.1}
                readOnly
                max={10}
              />
            </div>
          </div>
          <div className="overview">{overview}di</div>
        </div>
      </div>
      <div className="cast">
        {cast
          ?.filter((elem) => elem.profile_path)
          .map((elem, index) => (
            <div className="card-container" key={index}>
              <div className="card">
                <div className="image">
                  <img src={imageConst + elem.profile_path} alt="" />
                </div>
                <div className="description">
                  <div className="tit">{elem.name}</div>
                  <div className="desc">{elem.original_name}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
