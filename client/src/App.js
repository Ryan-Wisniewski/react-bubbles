import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.scss";

import PrivateRoute from './components/PrivateRoute'
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Link to='/bubbles'>BubblePage</Link>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path='/bubbles' component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;
