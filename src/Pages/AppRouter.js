import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Main from "./Main";
import Projects from "./Projects";
import Reviews from "./Reviews";
import About from "./About";
import Stages from "./Stages";
import Contacts from "./Contacts";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/about" element={<About />} />
      <Route path="/stages" element={<Stages />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
