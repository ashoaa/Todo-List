export interface contextColor {
  color: "orange" | "blue" | "green";
  changeColor: (inputColor: contextColor["color"]) => void;
  theme: "light" | "dark";
  changeTheme: (inputTheme: contextColor["theme"]) => void;
}

export interface todo {
  id?: string;
  todo?: string;
  isDone: boolean;
}
export interface contextData {
  data: todo[];
  render: number;
  category: "all" | "completed" | "uncompleted";
  addTodo: (inputTodo: todo) => void;
  deleteTodo: (inputTodo: todo["id"]) => void;
  doneTodo: (inputTodo: todo["id"]) => void;
  changeCategoty: (inputTodo: contextData["category"]) => void;
}
