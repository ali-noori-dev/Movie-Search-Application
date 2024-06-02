import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Router } from "./router";

function App() {
  return (
    <div>
      <ToastContainer theme="colored" rtl position="bottom-left" />
      <HashRouter>
        <Router />
      </HashRouter>
    </div>
  );
}

export default App;
