import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Loader } from "./components";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

//TODOS : Replace loading falback with component
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const UnknowPage = React.lazy(() => import("./pages/404/UnknowPage"));

const LoadLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

const Routes = () => {
  return (
    <Suspense
      fallback={
        <LoadLayout>
          <Loader />
        </LoadLayout>
      }
    >
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <ProtectedRoute path={"/dashboard"}>
          <Dashboard />
        </ProtectedRoute>

        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route exact path={"/register"}>
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
