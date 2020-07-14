import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./Home";
import Repositories from "./Repositories";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/repositories" component={Repositories} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
