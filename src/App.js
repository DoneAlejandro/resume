import React from "react";

import "./App.scss";
import { Header } from "./components/Header";

import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
