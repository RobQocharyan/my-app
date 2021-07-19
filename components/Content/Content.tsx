import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actions, getImages } from "../../Redux/main-reducer";
import { selectId, selectImages } from "../../Redux/selectors/selector";
import { Image } from "./Image/Images";
import s from "./Content.module.scss";
import { ShowMore } from "./ShowMore/ShowMore";


export const Content: FC = React.memo(() => {

  const dispatch = useDispatch();
  const history = useHistory();
  const imagesData = useSelector(selectImages);
  const pageId = useSelector(selectId)
  
  const pathName = history.location.pathname;
  const id = Number(pathName.slice(1));

  if(id) {
    dispatch(actions.setId(id))
  }
  
  useEffect(() => {
    dispatch(getImages(pageId));
  }, [pageId, dispatch]);

  if (!imagesData) {
    return <div className={s.loading}>...loading</div>;
  }

  const images = imagesData.map((i) => {
    return <Image key={i.id} height={i.height} width={i.width} url={i.url} />;
  });

  return (
    <div className={s.content}>
      <div className={s.images}>
        {images}
        </div>
        <div>
          <ShowMore />
        </div>
    </div>
  );
});
