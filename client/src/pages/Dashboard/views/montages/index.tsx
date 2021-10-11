import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const Montages = React.lazy(() => import("./Montage"));
const MontageDetail = React.lazy(() => import("./MontageDetail"));
function MontageRoutes(): JSX.Element {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact={true} path={path} component={Montages} />
      <Route path={`${path}/:id`} component={MontageDetail} />
    </Switch>
  );
}

export default MontageRoutes;
