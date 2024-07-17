import { useDispatch, useSelector } from "react-redux";
import { saveLevel, saveLanguage, savePrice } from "../../redux/filters/slice";
import {
  selectLevel,
  selectLanguage,
  selectPrice,
} from "../../redux/filters/selectors";

import DropDownSelector from "../UI/DropDownSelector/DropDownSelector";
import css from "./Filters.module.css";

const Filters = () => {
  const levels = [
    "A1 Beginner",
    "A2 Elementary",
    "B1 Intermediate",
    "B2 Upper-Intermediate",
    "C1 Advanced",
    "C2 Proficient",
  ];

  const languages = [
    "English",
    "German",
    "Spanish",
    "French",
    "Mandarin Chinese",
    "Italian",
    "Korean",
    "Vietnamese",
  ];

  const prices = ["10 $", "20 $", "30 $", "40 $"];

  const selectedLevel = useSelector(selectLevel);
  const selectedLang = useSelector(selectLanguage);
  const selectedPrice = useSelector(selectPrice);
  const dispatch = useDispatch();

  const handleLevelChange = (level) => {
    dispatch(saveLevel(level));
  };

  const handleLangChange = (lang) => {
    dispatch(saveLanguage(lang));
  };

  const handlePriceChange = (price) => {
    dispatch(savePrice(price));
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p className={css.filterLabel}>Languages:</p>
        <DropDownSelector
          btnLabel={selectedLang}
          options={languages}
          selectedOption={selectedLang}
          onChange={handleLangChange}
          btnCSSClass={css.btnLang}
          dropdownCSSClass={css.dropdownLang}
        />
      </div>
      <div className={css.wrapper}>
        <p className={css.filterLabel}>Level of knowledge:</p>
        <DropDownSelector
          btnLabel={selectedLevel}
          options={levels}
          selectedOption={selectedLevel}
          onChange={handleLevelChange}
        />
      </div>
      <div className={css.wrapper}>
        <p className={css.filterLabel}>Price:</p>
        <DropDownSelector
          btnLabel={selectedPrice}
          options={prices}
          selectedOption={selectedPrice}
          onChange={handlePriceChange}
          btnCSSClass={css.btnPrice}
          dropdownCSSClass={css.dropdownPrice}
        />
      </div>
    </div>
  );
};

export default Filters;
