import { DataContext, ThemeContext } from "./store/todo-contexts";
import { useContext } from "react";
import { todo } from "./types/types";
import classes from "../styles/Todos.module.scss";

const Todos = () => {
  const { data, category, deleteTodo, doneTodo } = useContext(DataContext);
  const { color } = useContext(ThemeContext);
  let filteredData = data;
  if (category === "completed") {
    filteredData = data.filter((todo) => todo.isDone === true);
  }
  if (category === "uncompleted") {
    filteredData = data.filter((todo) => todo.isDone === false);
  }
  return (
    <>
      {filteredData.map((todo: todo) => (
        <div key={todo.id} className={classes["todo-main-container"]}>
          <div className={classes["todo-container"]}>
            <div className={classes[`todo-${color}`]}>{todo.todo}</div>
            <button
              className={classes[`todo-button-${color}`]}
              onClick={() => {
                deleteTodo(todo.id);
              }}>
              <i className="fa-solid fa-xmark" />
            </button>
            <button
              className={
                todo.isDone
                  ? classes[`todo-done-button-${color}`]
                  : classes[`todo-button-${color}`]
              }
              onClick={() => doneTodo(todo.id)}>
              <i className="fa-solid fa-check" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Todos;
