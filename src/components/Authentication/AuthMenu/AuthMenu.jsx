import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import AuthButton from "../AuthButton/AuthButton";
import RegistrationButton from "../RegistrationButton/RegistrationButton";
import css from "./AuthMenu.module.css";

const AuthMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.buttons}>
      <AuthButton>{isLoggedIn ? "Logout" : "Log in"}</AuthButton>
      <RegistrationButton />
    </div>
  );
};

export default AuthMenu;
