import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

//TODOS : Replace loading with component
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Routes = () => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <Switch>
        <Route exact path={"/"}>
          <Dashboard />
        </Route>
        <Route path={"/login"}>
          <h1>Login</h1>
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
