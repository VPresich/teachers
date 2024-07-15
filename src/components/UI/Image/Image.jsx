import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Image.module.css";

export default function Image({ imgUrl, name }) {
  const theme = useSelector(selectTheme);
  return (
    <div className={clsx(css.container, css[theme])}>
      <img className={css.img} src={imgUrl} alt={name} />
    </div>
  );
}
