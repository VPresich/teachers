import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectUserName,
} from "../../../redux/auth/selectors";
import AuthButton from "../AuthButton/AuthButton";
import ThemeSelector from "../../ThemeSelector/ThemeSelector";
import RegistrationButton from "../RegistrationButton/RegistrationButton";

import css from "./AuthMenu.module.css";

const AuthMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  return (
    <div className={css.authPart}>
      {isLoggedIn && <p className={css.userName}>{`Welcome, ${userName}`}</p>}
      <AuthButton>{isLoggedIn ? "Logout" : "Log in"}</AuthButton>
      {!isLoggedIn ? <RegistrationButton /> : <ThemeSelector />}
    </div>
  );
};

export default AuthMenu;
