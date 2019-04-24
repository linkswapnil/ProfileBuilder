import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { User } from "./components/User";
import { Home } from "./components/Home";
import { Container } from "react-bootstrap";

export const Routes = () => {
  return (
    <>
      <Header />
      <Container fluid="true">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};
