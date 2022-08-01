import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFoundView from "../pages/NotFound.View";
import LoginView from "../pages/Login.View";


export const LogoutStatusRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginView />} />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Router>
  );
};
