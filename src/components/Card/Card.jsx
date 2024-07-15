import { useState } from "react";
import CardFirstLine from "../CardFirstLine/CardFirstLine";
import LevelList from "../UI/LevelList/LevelList";
import CardDetails from "../CardDetails/CardDetails";
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
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShowDetails = () => {
    setShowDetails((prevState) => {
      !prevState;
    });
  };

  return (
    <div className={css.container}>
      <Image imgUrl={avatar_url} name={name} />

      <div className={css.infoWrapper}>
        <div className={css.firstLine}>
          <div className={css.nameWrapper}>
            <span className={css.label}>Languages</span>
            <p className={css.name}>{name} </p>
          </div>
          <CardFirstLine teacher={teacher} />
        </div>
        <div className={css.mainInfo}>
          <div className={css.descrWrapper}>
            <span className={css.label}>Speaks: </span>
            <span className={css.languages}>{languages.join(", ")}</span>
          </div>

          <div className={css.descrWrapper}>
            <span className={css.label}>Lesson Info:</span>
            <EllipsisText
              text={lesson_info}
              maxLines={1}
              className={css.description}
            />
          </div>

          <div className={css.descrWrapper}>
            <span className={css.label}>Conditions:</span>
            <EllipsisText
              text={conditions.join(" ")}
              maxLines={1}
              className={css.description}
            />
          </div>
        </div>

        <span className={css.readMore}>Read more</span>

        {showDetails && <CardDetails teacher={teacher} />}

        <LevelList levels={levels} levelFilter="A1 Beginner" />

        {showDetails && (
          <Button onClick={handleClick} btnAuxStyles={css.btnAuxStyles}>
            Book trial lesson
          </Button>
        )}
      </div>
      {showModal && (
        <ModalWrapper onClose={handleClose}>
          {/* <ModalContent id={_id} /> */}
        </ModalWrapper>
      )}
    </div>
  );
}
