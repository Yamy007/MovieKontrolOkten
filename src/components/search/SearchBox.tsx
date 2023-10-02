import React, { FC, PropsWithChildren } from "react";
import { useAppSelector } from "../../hooks";
import { imageConst, typeSearchQuery } from "../../constant";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./search.scss";

import { Link } from "react-router-dom";
export interface ISearchBox extends PropsWithChildren {
  setEnable: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
}
export const SearchBox: FC<ISearchBox> = ({ setEnable, type }) => {
  const { isLoading, results } = useAppSelector((state) => state.movie.search);

  return (
    <div className="searchBox">
      {isLoading && <span className="loader"> </span>}

      <div className="title">{type}</div>
      {!isLoading && !results.length && <div className="none">None</div>}
      <IconButton className="close" onClick={() => setEnable(false)}>
        <CloseIcon />
      </IconButton>
      {results
        ?.filter((elem) => elem.profile_path || elem.poster_path)
        .map((elem, index) => (
          <div className="card-container" key={index}>
            {type === typeSearchQuery[0] && (
              <Link
                to={`movies/${elem.id}/`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="card">
                  <div className="image">
                    <img src={imageConst + elem.poster_path} alt="" />
                  </div>
                  <div className="description">
                    <div className="tit">{elem.title}</div>
                    <div className="desc">{elem.vote_average}</div>
                  </div>
                </div>
              </Link>
            )}
            {type !== typeSearchQuery[0] && (
              <div className="card">
                <div className="image">
                  {(type === typeSearchQuery[0] ||
                    type === typeSearchQuery[2]) && (
                    <img src={imageConst + elem.poster_path} alt="" />
                  )}
                  {type === typeSearchQuery[1] && (
                    <img src={imageConst + elem.profile_path} alt="" />
                  )}
                </div>
                {type === typeSearchQuery[0] && (
                  <div className="description">
                    <div className="tit">{elem.title}</div>
                    <div className="desc">{elem.vote_average}</div>
                  </div>
                )}
                {type === typeSearchQuery[1] && (
                  <div className="description">
                    <div className="tit">{elem.name}</div>
                    <div className="desc">{elem.original_name}</div>
                  </div>
                )}
                {type === typeSearchQuery[2] && (
                  <div className="description">
                    <div className="tit">{elem.name}</div>
                    <div className="desc">{elem.vote_average}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};
