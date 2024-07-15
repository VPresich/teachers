import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { selectFavorites } from "../../../redux/teachers/selectors";
import { selectTheme } from "../../../redux/auth/selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../redux/teachers/slice";
import iconsPath from "../../../assets/img/icons.svg";
import css from "./FavoriteButton.module.css";

export default function FavoriteButton({ id }) {
  const dispatch = useDispatch();

  const theme = useSelector(selectTheme);
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
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
}
