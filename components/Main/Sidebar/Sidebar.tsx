import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../../Redux/selectors/sidebar-selector";
import { getCategories } from "../../../Redux/sidebar-reducer";
import { Category } from "./Categories/Category";
import s from './Sidebar.module.scss';

export const Sidebar: FC = React.memo(() => {

  const categoriesData = useSelector(selectCategories) 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  
  const category = categoriesData?.map((c) => {
    return <Category key={c.id} id={c.id} name={c.name}/>
  })

  return (
    <div className={s.sidebar}>
        <div className={s.categories}>
            {category}
        </div>
    </div>
  )
})