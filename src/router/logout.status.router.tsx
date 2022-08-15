import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFoundView from "../pages/NotFound.View";
import LoginView from "../pages/Login.View";
import TestView from '../pages/Test.View'


export const LogoutStatusRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/test" element={<TestView />} />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Router>
  );
};
