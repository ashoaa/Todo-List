import { useContext } from "react";
import classes from "../../styles/ColorChanger.module.scss";
import { ThemeContext } from "../store/todo-contexts";
const ColorChanger = () => {
  const { changeColor, changeTheme, theme, color } = useContext(ThemeContext);
  const toggleTheme = theme === "light" ? "dark" : "light";
  return (
    <>
      <div className={classes[`theme-container-${color}-${theme}`]}>
        <div
          className={classes[`theme-icon-${theme}`]}
          onClick={() => changeTheme(toggleTheme)}>
          {theme === "light" ? (
            <i className="fa-solid fa-moon"></i>
          ) : (
            <i className="fa-solid fa-sun"></i>
          )}
        </div>
        <div
          className={classes[`theme-blue-${theme}`]}
          onClick={() => changeColor("blue")}></div>
        <div
          className={classes[`theme-orange-${theme}`]}
          onClick={() => changeColor("orange")}></div>
        <div
          className={classes[`theme-green-${theme}`]}
          onClick={() => changeColor("green")}></div>
      </div>
    </>
  );
};

export default ColorChanger;
