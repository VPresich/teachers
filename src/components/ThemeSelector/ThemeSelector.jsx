import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { updateTheme } from '../../redux/auth/operations';
import { selectTheme } from "../../redux/auth/selectors";
import { setTheme } from "../../redux/auth/slice";
import iconsPath from "../../assets/img/icons.svg";
import clsx from "clsx";
import css from "./ThemeSelector.module.css";

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value.toLowerCase();
    dispatch(setTheme(selectedTheme));
    // dispatch(updateTheme({ theme: selectedTheme }));
    setIsOpen(false);
  };

  return (
    <div className={css.header}>
      <button
        className={clsx(css.btn, { [css.open]: isOpen }, css[theme])}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={clsx(css.text, css[theme])}>Theme</span>
        <div className={clsx(css.iconContainer, css[theme])}>
          <svg className={clsx(css.icon, css[theme])} aria-label="arrow icon">
            <use href={`${iconsPath}#icon-theme`} />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className={clsx(css.dropdown, css[theme])}>
          {["Yellow", "Green", "Blue", "Pink", "Red"].map((themeOption) => (
            <label
              key={themeOption}
              className={clsx(css.label, {
                [css.selected]: theme === themeOption.toLowerCase(),
                [css[theme.toLowerCase()]]: true,
                [css.inactive]:
                  theme !== themeOption.toLowerCase() && theme === "yellow",
              })}
            >
              <input
                type="radio"
                value={themeOption.toLowerCase()}
                checked={theme === themeOption.toLowerCase()}
                onChange={handleThemeChange}
              />
              {themeOption}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
