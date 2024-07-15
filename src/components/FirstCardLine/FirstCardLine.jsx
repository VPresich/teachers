import FavoriteButton from "../UI/FavoriteButton/FavoriteButton";
import iconsPath from "../../assets/img/icons.svg";

import css from "./FirstCardLine.module.css";

export default function FirstCardLine({ teacher }) {
  return (
    <div className={css.container}>
      <div className={css.featuresContainer}>
        <div className={css.feature}>
          <svg className={css.iconContainer} aria-label="star icon">
            <use href={`${iconsPath}#icon-star`} />
          </svg>
          <span className={css.featureValue}></span>
          <span className={css.separator}></span>
        </div>
        <div className={css.feature}>
          <span className={css.featureTitle}>Lessons done:</span>
          <span className={css.featureValue}>{teacher.lessons}</span>
          <span className={css.separator}></span>
        </div>
        <div className={css.feature}>
          <svg className={css.iconContainer} aria-label="star icon">
            <use className={css.iconStar} href={`${iconsPath}#icon-star`} />
          </svg>
          <span className={css.featureTitle}>Rating:</span>
          <span className={css.featureValue}>{teacher.rating}</span>
          <span className={css.separator}></span>
        </div>
        <div className={css.feature}>
          <span className={css.featureTitle}>Price / 1 hour:</span>
          <span className={css.price}>{teacher.price_per_hour}$</span>
          <span className={css.separator}></span>
        </div>
      </div>
      <FavoriteButton id={teacher._id} />
    </div>
  );
}
