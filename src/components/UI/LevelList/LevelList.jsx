import LevelItem from "../LevelItem/LevelItem";
import css from "./LevelList.module.css";

export default function LevelList({ levels, levelFilter }) {
  return (
    <ul className={css.container}>
      {levels.map(({ title, index }) => (
        <li key={index}>
          <LevelItem title={title} isActive={title === levelFilter} />
        </li>
      ))}
    </ul>
  );
}
