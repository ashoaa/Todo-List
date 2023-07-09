import classes from "../styles/TodoInput.module.scss";
import { DataContext, ThemeContext } from "./store/todo-contexts";
import { useRef, useContext } from "react";
import { v4 as uuid } from "uuid";
const TodoInput = () => {
  const id = uuid();
  const inputRef = useRef<HTMLInputElement>(null);
  const dataCtx = useContext(DataContext);
  const { color, theme } = useContext(ThemeContext);
  const addTodoHandler = () => {
    if (inputRef.current && inputRef.current.value.trim() !== "") {
      const newTodo = {
        id: id.slice(0, 8),
        todo: inputRef.current.value.trim(),
        isDone: false,
      };
      dataCtx.addTodo(newTodo);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <div className={classes["input-main-container"]}>
        <div className={classes["input-container"]}>
          <input
            ref={inputRef}
            type="text"
            className={classes[`input-textfield-${color}-${theme}`]}
          />
          <button
            className={classes[`input-button-${color}`]}
            onClick={addTodoHandler}>
            ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoInput;
