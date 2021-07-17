import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actions, getImages } from "../../../Redux/main-reducer";
import { selectId, selectImages } from "../../../Redux/selectors/selector";
import { Image } from "../Image/Images";
import s from "./ClotesPage.module.scss";

export const ClotesPage: FC = React.memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();
  const imagesData = useSelector(selectImages);
  const pageId = useSelector(selectId)

  const pathName = history.location.pathname;
  console.log(pathName)
  const id = Number(pathName.slice(1));
  console.log(id)

  if(id) {
    dispatch(actions.setId(id))
  }

  useEffect(() => {
    dispatch(getImages(Number(pageId)));
  }, [dispatch, pageId]);

  if (!imagesData) {
    return <div>...loading</div>;
  }


  const images = imagesData?.map((i) => {
    return <Image key={i.id} height={i.height} width={i.width} url={i.url} />;
  });

  return (
    <div className={s.clotesPage}>
      <div className={s.images}>
        {images}
        </div>
    </div>
  );
});
