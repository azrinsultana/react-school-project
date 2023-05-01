import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import Home from "./pages/Home";



import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={Home}
          />
          
          
           
          
        
          <Route
            path={process.env.PUBLIC_URL + "/not-found"}
            component={NotFound}
          />
          <Route exact component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
