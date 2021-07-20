import React, { FC } from "react";
import s from './Images.module.scss';


type ImagesPropsType = {
  height: number
  width: number
  url: string
}

export const Image: FC<ImagesPropsType> = React.memo(({height, width, url}) => {
  return (
    <div className={s.image}>
      <img height={height} width={width} src={url} alt="catsImg" />
    </div>
  )
})
