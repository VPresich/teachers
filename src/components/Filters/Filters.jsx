import { useState } from "react";

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

  const [selectedLevel, setSelectedLevel] = useState(levels[0]);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [selectedPrice, setSelectedPrice] = useState(prices[0]);

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  const handleLangChange = (lang) => {
    setSelectedLang(lang);
  };

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
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
