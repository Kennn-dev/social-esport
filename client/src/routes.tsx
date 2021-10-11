import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//TODOS : Replace loading falback with component
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const UnknowPage = () => <h1 style={{ color: "white" }}>No Match</h1>;
const Routes = () => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route path={"/dashboard"}>
          <Dashboard />
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route>
        <Route path={"/register"}>
          <Register />
        </Route>
        <Route path="*">
          <UnknowPage />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
