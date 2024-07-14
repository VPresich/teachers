import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import AuthButton from "../AuthButton/AuthButton";
import css from "./AuthMenu.module.css";

const AuthMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.buttons}>
      <AuthButton>{isLoggedIn ? "Logout" : "Log in"}</AuthButton>
      <button>Registration</button>
    </div>
  );
};

export default AuthMenu;
