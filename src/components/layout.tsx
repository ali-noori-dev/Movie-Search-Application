import { Outlet } from "react-router-dom";

export const Layout = function () {
  return (
    <div>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};
