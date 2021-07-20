import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../Redux/selectors/sidebar-selector";
import { getCategories } from "../../Redux/sidebar-reducer";
import { Category } from "./Categories/Category";
import s from './Sidebar.module.scss';

export const Sidebar: FC = React.memo(() => {

  const categoriesData = useSelector(selectCategories)
  const dispatch = useDispatch()

  const [menuList, setMenuList] = useState(false)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const categories = categoriesData?.map((c) => {
    return <div className={s.link}>
        <Category key={c.id} id={c.id} name={c.name} />
    </div>
  })

  return (
    <div className={s.sidebar}>
      <div className={s.categories}>
        <div className={`${s.burger} ${menuList ? s.active : ''}`} onClick={() => {
          setMenuList(!menuList)
        }}>
          <span></span>
        </div>
        <div className={`${s.menu} ${menuList ? s.active : ''}`} onClick={e => e.stopPropagation()}>
          <div className={s.list} onClick={() => { setMenuList(false) }}>
            {categories}
          </div>
        </div>
      </div>
    </div>
  )
})