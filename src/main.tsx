import ReactDOM from "react-dom/client";
import ContextWraper from "./store/todo-contexts";
import App from "./App.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ContextWraper>
    <App />
  </ContextWraper>
);
