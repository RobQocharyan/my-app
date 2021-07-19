import React from "react";
import s from "./App.module.scss";
import { Route } from "react-router-dom";
import { useSelector } from 'react-redux'
import { Sidebar } from "./components/Sidebar/Sidebar";
import { selectCategories } from "./Redux/selectors/sidebar-selector";
import { Content } from "./components/Content/Content";

function App() {

  const categoriesData = useSelector(selectCategories)
  const categories = categoriesData?.map((c) => {
    return <Route path={`/${c.id}`} render={() => {
      return <Content />
    }} />
  })


  return (
    <div className={s.App}>
      <Sidebar />
      <div className={s.content}>
        {categories}
      </div>
    </div>
  );
}

export default App;
