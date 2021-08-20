import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

const Home = React.lazy(() => import("./views/Home"));
function Routes(): JSX.Element {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Switch>
      <Route exact={true} path={`${pathname}`} component={Home} />
    </Switch>
  );
}

export default Routes;
