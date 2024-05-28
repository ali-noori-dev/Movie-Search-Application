import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components";

const HomePage = lazy(() => import("../pages/home"));

export function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        {/* <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} /> */}
      </Route>
    </Routes>
  );
}
