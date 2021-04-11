import React, { Suspense, lazy } from 'react';
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// styles
import "./App.scss";

// components
const TheFooter = lazy(() => import ("./components/TheFooter"));
const TheNavigation = lazy (() => import ("./components/TheNavigation"));


// views - code splitted
const TheHome = lazy(() => import( "./views/TheHome"));
const TheProjects = lazy(() => import ("./views/TheProjects"));
const TheContact = lazy(() => import ("./views/TheContact"));

function App() {
  return (
    <>
      <Container fluid className="App">
        <Suspense fallback={<div>Loading...</div>}>
        <Container fluid>
        <TheNavigation />
        </Container>
        <Container fluid>
            <Switch>
              <Route path="/" component={TheHome} exact />
              <Route path="/projects" component={TheProjects} />
              <Route path="/contact" component={TheContact} />
            </Switch>
        </Container>        
        <Container>
          <footer>
            <TheFooter />
          </footer>
        </Container>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
