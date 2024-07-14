import AppNav from "../AppNav/AppNav";
import AuthMenu from "../Authentication/AuthMenu/AuthMenu";
import Logo from "../Logo/Logo";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import styles from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={styles.header}>
      <Logo />
      <AppNav />
      <ThemeSelector />
      <AuthMenu />
    </header>
  );
}
