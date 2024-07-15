import Reviewers from "../Reviewers/Reviewers";
import css from "./CardDetails.module.css";

const CardDetails = ({ teacher }) => {
  const { experience, reviews } = teacher;
  return (
    <div className={css.container}>
      <p className={css.experience}>{experience}</p>
      <Reviewers reviews={reviews} />
    </div>
  );
};

export default CardDetails;
