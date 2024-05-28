import { Outlet } from "react-router-dom";
import { Header } from "./header";

export const Layout = function () {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
