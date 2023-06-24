import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Projects from "./Projects";
import Error from "./Error";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/error" elementment={<Error />} />
      <Route path="*" element={<Navigate to="/main" replace />} />
    </Routes>
  );
}
