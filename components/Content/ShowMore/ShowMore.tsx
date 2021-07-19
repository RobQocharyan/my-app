  import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  showMore } from "../../../Redux/main-reducer";
import { selectId } from "../../../Redux/selectors/selector";
import s from "./ShowMore.module.scss";

export const ShowMore: FC = React.memo(() => {

  const dispatch = useDispatch()
  const id = useSelector(selectId)
  
  return (
    <div className={s.showMore}>
      <button onClick={() => {
        dispatch(showMore(id))
      }}>
        Show More
      </button>
    </div>
  );
});
