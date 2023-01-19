import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage/MainPage";
import { About } from "./pages/About/About";
import { Projects } from "./pages/Projects/Projects";
import { Skills } from "./pages/Skills/Skills";
import { Contact } from "./pages/Contact/Contact";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
