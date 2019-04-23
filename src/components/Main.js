import React from "react";
import { Services } from "./Services";
export const Main = props => {
  return (
    <main role="main" className="container">
      <div className="App area-padding">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
              <h1 class="font-weight-light">
                Powerful <b>Documentation</b> and Help Center Profile Builder.
              </h1>
            </div>
          </div>
          <div class="row">
            <div class="col text-center">
              <a href="#" class="btn btn-green">
                Get Started
              </a>
            </div>
          </div>
          <Services/>
        </div>
      </div>
    </main>
  );
};
