import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./Home";
import Repositories from "./Repositories";

const App = () => {
  return (
    <div>
      <Router>
        <NavigationBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/repositories" component={Repositories} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
