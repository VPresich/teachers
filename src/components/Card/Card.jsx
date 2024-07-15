import { useState } from "react";
import FirstCardLine from "../FirstCardLine/FirstCardLine";
import LevelList from "../UI/LevelList/LevelList";
import Button from "../UI/Button/Button";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
// import ModalContent from "../ModalContent/ModalContent";
import Image from "../UI/Image/Image";

import EllipsisText from "../UI/EllipsisText/EllipsisText";

import css from "./Card.module.css";

export default function Card({ teacher }) {
  const { _id, avatar_url, name, lesson_info, conditions, languages, levels } =
    teacher;

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={css.container}>
      <Image imgUrl={avatar_url} name={name} />

      <div className={css.infoWrapper}>
        <div className={css.mainInfo}>
          <div className={css.firstLine}>
            <span className={css.label}>Languages</span>
            <FirstCardLine teacher={teacher} />
          </div>

          <p className={css.name}>{name} </p>

          <div>
            <span className={css.label}>Speaks:</span>
            <span className={css.languages}>{languages.join(". ")}</span>
          </div>

          <div>
            <span className={css.label}>Lesson Info:</span>
            <EllipsisText
              text={lesson_info}
              maxLines={1}
              className={css.description}
            />
          </div>

          <div>
            <EllipsisText
              text={conditions.join(" ")}
              maxLines={1}
              className={css.description}
            />
          </div>

          <LevelList levels={levels} levelFilter="A1 Beginner" />
        </div>
        <Button onClick={handleClick}>Book trial lesson</Button>
      </div>
      {showModal && (
        <ModalWrapper onClose={handleClose}>
          {/* <ModalContent id={_id} /> */}
        </ModalWrapper>
      )}
    </div>
  );
}
