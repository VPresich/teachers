import LevelItem from "../LevelItem/LevelItem";
import css from "./LevelList.module.css";

export default function LevelList({ levels, levelFilter }) {
  return (
    <ul className={css.container}>
      {levels.map((level, index) => (
        <li key={index}>
          <LevelItem title={level} isActive={level === levelFilter} />
        </li>
      ))}
    </ul>
  );
}
