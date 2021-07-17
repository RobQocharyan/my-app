import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actions, getImages } from "../../../../Redux/main-reducer";
import { selectId, selectImages } from "../../../../Redux/selectors/selector";
import { Image } from "../Image/Images";
import s from "./BoxesPage.module.scss";

export const BoxesPage: FC = React.memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();
  const imagesData = useSelector(selectImages);
  const pageId = useSelector(selectId)
  
  const pathName = history.location.pathname;
  const id = Number(pathName.slice(1));

  useEffect(() => {
    dispatch(getImages(pageId));
  }, [pageId]);

  if (!imagesData) {
    return <div>...loading</div>;
  }

  if(id) {
    dispatch(actions.setId(id))
  }

  const images = imagesData.map((i) => {
    return <Image key={i.id} height={i.height} width={i.width} url={i.url} />;
  });

  return (
    <div className={s.boxesPage}>
      <div className={s.iamges}>
        {images}
        </div>
    </div>
  );
});
