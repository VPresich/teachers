import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import css from "./Button.module.css";
import clsx from "clsx";

export default function Button({ children, width, onClick, ...props }) {
  const theme = useSelector(selectTheme);
  return (
    <button
      className={clsx(css.btn, css[theme])}
      style={{ width: width }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
