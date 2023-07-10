import { useContext } from "react";
import classes from "../../styles/ColorChanger.module.scss";
import { ThemeContext } from "../store/todo-contexts";
import { contextColor, colorNames } from "../types/types";
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
        {colorNames.map((colorName) => (
          <div
            className={classes[`theme-${colorName}-${theme}`]}
            onClick={() => changeColor(`${colorName}`)}></div>
        ))}
      </div>
    </>
  );
};

export default ColorChanger;
