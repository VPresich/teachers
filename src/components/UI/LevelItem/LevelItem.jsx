import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import clsx from "clsx";
import css from "./LevelItem.module.css";

export default function LevelItem({ title, isActive }) {
  const theme = useSelector(selectTheme);
  console.log("TITLE", title);
  return (
    <div className={clsx(css.container, isActive && css[theme])}>
      <span className={css.title}>{`# ${title}`}</span>
    </div>
  );
}
