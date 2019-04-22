import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./styles.scss";

function App() {
  return (
    <>
      <Header />
      <main role="main" className="container">
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start testediting to see some magic happen!</h2>
          <h1>Hello CodeSandbox</h1>
          <h2>Start testediting to see some magic happen!</h2>
          <h1>Hello CodeSandbox</h1>
          <h2>Start testediting to see some magic happen!</h2>
          <h1>Hello CodeSandbox</h1>
          <h2>Start testediting to see some magic happen!</h2>
          <h1>Hello CodeSandbox</h1>
          <h2>Start testediting to see some magic happen!</h2>
          <h1>Hello CodeSandbox</h1>
          <h2>Start testediting to see some magic happen!</h2>
          <h1>Hello CodeSandbox</h1>
          <h2>Start testediting to see some magic happen!</h2>
          <h1>Hello CodeSandbox</h1>
          <h2>Start testediting to see some magic happen!</h2>
          <h1>Hello CodeSandbox</h1>
          <h2>Start testediting to see some magic happen!</h2>
          <h1>Hello CodeSandbox</h1>
          <h2>Start testediting to see some magic happen!</h2>
          <h1>Hello CodeSandbox</h1>
          <h2>Start testediting to see some magic happen!</h2>
          <h1>Hello CodeSandbox</h1>
          <h2>Start testediting to see some magic happen!</h2>
        </div>
      </main>
      <Footer />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
