import { DataContext, ThemeContext } from "./store/todo-contexts";
import { useContext } from "react";
import classes from "../styles/Stats.module.scss";
const Status = () => {
  const { category, changeCategoty } = useContext(DataContext);
  const { color } = useContext(ThemeContext);
  return (
    <>
      <div className={classes["category-main-container"]}>
        <div className={classes["category-container"]}>
          <div
            className={`${classes[`category-${color}`]} ${
              category === "all" ? classes[`selected-${color}`] : " "
            }`}
            onClick={() => changeCategoty("all")}>
            All
          </div>
          <div
            className={`${classes[`category-${color}`]} ${
              category === "completed" ? classes[`selected-${color}`] : " "
            }`}
            onClick={() => changeCategoty("completed")}>
            Completed
          </div>
          <div
            className={`${classes[`category-${color}`]} ${
              category === "uncompleted" ? classes[`selected-${color}`] : " "
            }`}
            onClick={() => changeCategoty("uncompleted")}>
            Uncompleted
          </div>
        </div>
      </div>
    </>
  );
};

export default Status;
