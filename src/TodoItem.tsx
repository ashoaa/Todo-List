import { Reorder } from "framer-motion";
import classes from "../styles/Todos.module.scss";
import { todo } from "./types/types";
import { useContext } from "react";
import { DataContext, ThemeContext } from "./store/todo-contexts";
interface props {
  Todo: todo;
}
const TodoItem = ({ Todo }: props) => {
  const { deleteTodo, doneTodo } = useContext(DataContext);
  const { color } = useContext(ThemeContext);
  return (
    <Reorder.Item as="div" value={Todo}>
      <div className={classes["todo-main-container"]}>
        <div className={classes["todo-container"]}>
          <div className={classes[`todo-${color}`]}>{Todo.todo}</div>
          <button
            className={classes[`todo-button-${color}`]}
            onClick={() => {
              deleteTodo(Todo.id);
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={classes[`svg-${color}`]}
              viewBox="0 0 384 512">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
          <button
            className={
              Todo.isDone
                ? classes[`todo-done-button-${color}`]
                : classes[`todo-button-${color}`]
            }
            onClick={() => doneTodo(Todo.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={
                Todo.isDone ? classes[`svg-done`] : classes[`svg-${color}`]
              }
              viewBox="0 0 448 512">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </button>
        </div>
      </div>
    </Reorder.Item>
  );
};

export default TodoItem;
