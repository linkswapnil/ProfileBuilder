import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import "./styles.scss";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
