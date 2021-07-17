import React, { FC } from "react";
import s from './Header.module.scss';

export const Header: FC = React.memo(() => {
  return (
    <div className={s.header}>
        <div className={s.logo}>
          logo
        </div>
    </div>
  )
})