import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("authToken") !== null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/auth" />
      )
    }
  />
);
export default PrivateRoute;
