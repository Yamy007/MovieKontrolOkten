import React, { useEffect, useState } from "react";
import "./layouts.scss";
import { Panel } from "../components";
import { Header } from "./header/Header";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { genreActions, movieActions } from "../redux";
import { Filter } from "../components/filter/Filter";

export const MainLayouts = () => {
  const [click, setClick] = useState<boolean>(true);
  const [page, setPage] = useState<string>("Home");
  const [filter, setFilter] = useState<boolean>(false);
  const [chaise, setChaise] = useState<number[]>([]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(movieActions.getAllTop());
    dispatch(movieActions.getAllPopular());
    dispatch(movieActions.getAllNow());
    dispatch(movieActions.getAllUpcoming());
    dispatch(genreActions.getAll());
  }, [dispatch]);

  return (
    <div className="main-container">
      <div className="header">
        <div className="line"></div>
        <Header setClick={setClick} setFilter={setFilter} filter={filter} />
      </div>
      <div className={click ? "main" : "main_S"}>
        <div className={click ? "panel" : "panel_S"}>
          <Panel full={click} page={page} setPage={setPage} />
        </div>
        <div className="content">
          <Filter filter={filter} chaise={chaise} setChaise={setChaise} />
          <Outlet context={chaise} />
        </div>
      </div>
    </div>
  );
};
