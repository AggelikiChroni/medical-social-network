import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Chats from "./Chat";
import UserAuths from "./UserAuth";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/chats" component={Chats} />
      <Route path="/auth" component={UserAuths} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
