import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

// styles
import "./App.scss";

// components
const TheHeader = lazy(() => import("./components/TheHeader"));
const TheFooter = lazy(() => import("./components/TheFooter"));

// views - code splitted
const TheHome = lazy(() => import("./views/TheHome"));
const TheProjects = lazy(() => import("./views/TheProjects"));
const TheContact = lazy(() => import("./views/TheContact"));

function App() {
  return (
    <div className="App fade-in-1s">
      <Suspense fallback={<div className="loader"> </div>}>
        <TheHeader />
        <Switch>
          <Route path="/" component={TheHome} exact />
          <Route path="/projects" component={TheProjects} />
          <Route path="/contact" component={TheContact} />
        </Switch>
        <TheFooter />
      </Suspense>
    </div>
  );
}

export default App;
