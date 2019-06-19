import React, { PureComponent } from "react";
import "./App.css";
import Admin from "./components/Admin/Admin";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loader from 'react-loader';

interface AppState {
  loaded: boolean;
}

class App extends PureComponent<{}, AppState> {
  state = {
    loaded: true
  };

  render() {
    return (
      <div className="App">
        <Loader loaded={this.state.loaded} />
        <Router>
          <nav>
            <Link to="/admin">Admin</Link>
          </nav>
          <div className="main-window">
            <Route exact path="/admin" component={Admin} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
