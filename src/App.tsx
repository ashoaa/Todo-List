import TodoInput from "./TodoInput";
import Todos from "./Todos";
import Status from "./Status";
import ColorChanger from "./UI/ColorChanger";
import ThemeWraper from "./UI/ThemeWraper";
import Title from "./Title";
const App = () => {
  return (
    <>
      <ThemeWraper>
        <ColorChanger />
        <Title />
        <TodoInput />
        <Status />
        <Todos />
      </ThemeWraper>
    </>
  );
};

export default App;
