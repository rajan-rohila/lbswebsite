import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import NotFoundPage from "./app/not_found/NotFoundPage";

import {
  ROUTE_PATH_LANDING_PAGE,
  ROUTE_PATH_NOT_FOUND_PAGE
} from "./config/routes/route_paths";
import LandingPage from "./app/landing/LandingPage";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATH_LANDING_PAGE} element={<LandingPage />} />
      <Route path={ROUTE_PATH_NOT_FOUND_PAGE} element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesComponent;
