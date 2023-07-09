import { createContext, ReactNode, useState } from "react";
import { contextColor, todo, contextData } from "../types/types";
interface props {
  children: ReactNode;
}

let initialColor: contextColor["color"] = "orange";
const localColor = localStorage.getItem("color");
if (localColor !== null) {
  if (
    localColor === "orange" ||
    localColor === "blue" ||
    localColor === "green"
  )
    initialColor = localColor;
}

let initialTheme: contextColor["theme"] = "light";
const localTheme = localStorage.getItem("theme");
if (localTheme !== null) {
  if (localTheme === "light" || localTheme === "dark") {
    initialTheme = localTheme;
  }
}

export const ThemeContext = createContext<contextColor>({
  color: initialColor,
  changeColor: () => undefined,
  theme: initialTheme,
  changeTheme: () => undefined,
});

let initialData = [];
if (localStorage.getItem("data") !== null) {
  initialData = JSON.parse(localStorage.getItem("data"));
}

export const DataContext = createContext<contextData>({
  data: initialData,
  render: 0,
  category: "completed",
  addTodo: () => undefined,
  deleteTodo: () => undefined,
  doneTodo: () => undefined,
  changeCategoty: () => undefined,
});
const ContextWraper = ({ children }: props) => {
  const [color, setColor] = useState<contextColor["color"]>(initialColor);
  const [theme, setTheme] = useState<contextColor["theme"]>(initialTheme);
  const [data, setData] = useState<todo[]>(initialData);
  const [render, setRender] = useState(0);
  const [category, setCategoty] = useState<contextData["category"]>("all");

  const changeColor = (color: contextColor["color"]) => {
    localStorage.setItem("color", color);
    setColor(color);
  };

  const changeTheme = (theme: contextColor["theme"]) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  const addTodo = (newTodo: todo) => {
    const newData = [newTodo, ...data];
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  };
  const deleteTodo = (id: todo["id"]) => {
    const newData = data.filter((todo) => todo.id !== id);
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  };
  const doneTodo = (id: todo["id"]) => {
    const ind = data.map((todo) => todo.id).indexOf(id);
    const newData = data;
    newData[ind].isDone = !data[ind].isDone;
    localStorage.setItem("data", JSON.stringify(newData));
    setRender(render + 1);
    setData(newData);
  };

  const changeCategoty = (category: contextData["category"]) => {
    setCategoty(category);
  };
  return (
    <ThemeContext.Provider value={{ color, changeColor, theme, changeTheme }}>
      <DataContext.Provider
        value={{
          data,
          render,
          category,
          addTodo,
          deleteTodo,
          doneTodo,
          changeCategoty,
        }}>
        {children}
      </DataContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ContextWraper;
