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
            <i className="fa-solid fa-xmark" />
          </button>
          <button
            className={
              Todo.isDone
                ? classes[`todo-done-button-${color}`]
                : classes[`todo-button-${color}`]
            }
            onClick={() => doneTodo(Todo.id)}>
            <i className="fa-solid fa-check" />
          </button>
        </div>
      </div>
    </Reorder.Item>
  );
};

export default TodoItem;
