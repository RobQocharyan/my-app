import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { selectImages } from "../../Redux/selectors/selector";
import { BoxesPage } from "./BoxesPage/BoxesPage";
import s from './Content.module.scss';
import { Image } from "./Image/Images";
import {ClotesPage} from './ClotesPage/ClotesPage'
import { HatsPage } from "./HatsPage/HatsPage";
import { SinksPage } from "./SinksPage/SinksPage";
import { SpacePage } from "./SpacePage/SpacePage";
import { Sunglasses } from "./Sunglasses/Sunglasses";
import { TiesPage } from "./TiesPage/TiesPage";
import { ShowMore } from "./ShowMore/ShowMore";

export const Content: FC = React.memo(() => {

  return (
    <div className={s.content}>
      <div className={s.images}>
        <Route path={'/5'} render={() => {
          return <BoxesPage/>
        }}/>
        <Route path={'/15'} render={() => {
          return <ClotesPage/>
        }}/>
         <Route path={'/1'} render={() => {
          return <HatsPage/>
        }}/>
          <Route path={'/14'} render={() => {
          return <SinksPage/>
        }}/>
         <Route path={'/2'} render={() => {
          return <SpacePage/>
        }}/>
         <Route path={'/4'} render={() => {
          return <Sunglasses/>
        }}/>
         <Route path={'/7'} render={() => {
          return <TiesPage/>
        }}/>
      </div>
      <div>
        <ShowMore/>
      </div>
    </div>
  )
})