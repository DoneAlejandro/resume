import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { Projects } from "../pages/Projects";
import { About } from "../pages/About";
import { Skills } from "../pages/Skills";
import { Contact } from "../pages/Contact";
import style from "./Main.module.scss";

export const Main = () => {
  const location = useLocation();
  return (
    <main className={style.container}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </AnimatePresence>
    </main>
  );
};
