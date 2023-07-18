import { DataContext } from "./store/todo-contexts";
import { useContext } from "react";
import { todo } from "./types/types";
import { Reorder } from "framer-motion";
import TodoItem from "./TodoItem";
import classes from "../styles/Reorder.module.scss";

const Todos = () => {
  const { data, category, setTodo } = useContext(DataContext);

  let filteredData = data;
  if (category === "completed") {
    filteredData = data.filter((todo) => todo.isDone === true);
  }
  if (category === "uncompleted") {
    filteredData = data.filter((todo) => todo.isDone === false);
  }
  return (
    <>
      <Reorder.Group
        as="div"
        axis="y"
        className={classes["reorder"]}
        onReorder={setTodo}
        values={filteredData}>
        {filteredData.map((todo: todo) => (
          <TodoItem key={todo.id} Todo={todo} />
        ))}
      </Reorder.Group>
    </>
  );
};

export default Todos;
