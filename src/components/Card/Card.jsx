import { useState } from "react";
import CardFirstLine from "../CardFirstLine/CardFirstLine";
import LevelList from "../UI/LevelList/LevelList";
import CardDetails from "../CardDetails/CardDetails";
import Button from "../UI/Button/Button";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import BookingFormContent from "../BookingFormContent/BookingFormContent";
import Image from "../UI/Image/Image";

import EllipsisText from "../UI/EllipsisText/EllipsisText";

import css from "./Card.module.css";

export default function Card({ teacher }) {
  const { avatar_url, name, lesson_info, conditions, languages, levels } =
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
    setShowDetails(!showDetails);
  };

  const handleValues = (values) => {
    console.log(values);
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

        <span className={css.readMore} onClick={handleShowDetails}>
          {showDetails ? "Show less" : "Read more"}
        </span>

        <div
          className={
            showDetails
              ? `${css.details} ${css.visible}`
              : `${css.details} ${css.hidden}`
          }
        >
          <CardDetails teacher={teacher} />
        </div>

        <LevelList levels={levels} levelFilter="A1 Beginner" />

        <div
          className={
            showDetails
              ? `${css.details} ${css.visible}`
              : `${css.details} ${css.hidden}`
          }
        >
          <Button onClick={handleClick} btnAuxStyles={css.btnAuxStyles}>
            Book trial lesson
          </Button>
        </div>
      </div>
      {showModal && (
        <ModalWrapper onClose={handleClose}>
          <BookingFormContent teacher={teacher} handleValues={handleValues} />
        </ModalWrapper>
      )}
    </div>
  );
}
