import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getImages } from "../../Redux/main-reducer";
import { Content } from "../Main/Content/Content";
import { Sidebar } from "../Main/Sidebar/Sidebar";
import s from './Main.module.scss';

export const Main: FC = React.memo(() => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages(5));
  }, [dispatch]);

  return (
    <div className={s.main}>
        <Sidebar/>
        <Content/>
    </div>
  )
})