import React from "react";
import { Services } from "./Services";
export const Home = props => {
  return (
    <div className="App area-padding">
      <div>
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1 className="font-weight-light">
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
        <Services />
      </div>
    </div>
  );
};
