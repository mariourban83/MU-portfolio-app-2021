import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// components
import TheFooter from "./components/TheFooter";
import TheNavigation from "./components/TheNavigation";

// styles
import "./App.scss";

// views
import TheHome from "./views/TheHome";
import TheProjects from "./views/TheProjects";
import TheContact from "./views/TheContact";

function App() {
  return (
    <>
      <Container fluid className="App">
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
      </Container>
    </>
  );
}

export default App;
