import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { selectIsFavorite } from "../../../redux/favorites/selectors";
import { selectTheme } from "../../../redux/auth/selectors";
import {
  addFavorite,
  removeFavorite,
} from "../../../redux/favorites/operations";

import iconsPath from "../../../assets/img/icons.svg";
import css from "./FavoriteButton.module.css";

const FavoriteButton = ({ id }) => {
  const dispatch = useDispatch();

  const theme = useSelector(selectTheme);
  const isFavorite = useSelector((state) => selectIsFavorite(state, id));

  console.log("FavoriteButton: isFavorite", isFavorite);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <button className={css.btn} onClick={handleToggleFavorite}>
      <svg
        className={clsx(isFavorite ? css[theme] : css.default)}
        width="24"
        height="24"
        aria-label="btn icon"
      >
        <use href={`${iconsPath}#favorite`} />
      </svg>
    </button>
  );
};

export default FavoriteButton;
