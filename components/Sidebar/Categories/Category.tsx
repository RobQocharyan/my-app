import React, { FC } from "react";
import s from "./Category.module.scss";
import { NavLink } from "react-router-dom";

type CategoryPropsType = {
  name: string;
  id: number
};

export const Category: FC<CategoryPropsType> = React.memo(({ name, id }) => {
  return (
    <div className={s.category}>
      <NavLink activeClassName={s.active} to={`${id}`}>
        {name}
      </NavLink>
    </div>
  );
});
