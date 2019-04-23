import React from "react";
import "./Footer.scss";
export const Footer = props => {
  return (
    <div className="footer">
      <div className="row justify-content-center">
        <div className="list">
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Title</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
          </ul>
        </div>
        <div className="list">
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Title</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
          </ul>
        </div>
        <div className="list">
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Title</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
