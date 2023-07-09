import { useContext } from "react";
import { ThemeContext } from "../store/todo-contexts";
import classes from "../../styles/ThemeWraper.module.scss";
interface props {
  children: React.ReactNode;
}
const ThemeWraper = ({ children }: props) => {
  const { color, theme } = useContext(ThemeContext);
  return <div className={classes[`theme-${color}-${theme}`]}>{children}</div>;
};

export default ThemeWraper;
