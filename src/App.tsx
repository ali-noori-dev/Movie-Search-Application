import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Router } from "./router";

function App() {
  return (
    <div>
      <ToastContainer theme="colored" position="bottom-right" />
      <HashRouter>
        <Router />
      </HashRouter>
    </div>
  );
}

export default App;
