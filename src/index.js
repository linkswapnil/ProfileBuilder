import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <main role="main" class="container">
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </div>
      </main>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
