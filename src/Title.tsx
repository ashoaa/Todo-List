import { ThemeContext } from "./store/todo-contexts";
import { useContext } from "react";
import classes from "../styles/Title.module.scss";
const Title = () => {
  const { color } = useContext(ThemeContext);
  return (
    <div className={classes["title-container"]}>
      <h1 className={classes[`h1-${color}`]}>Todo List</h1>
    </div>
  );
};

export default Title;
