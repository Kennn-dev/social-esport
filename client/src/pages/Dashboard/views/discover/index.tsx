import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const Discover = React.lazy(() => import("./Discover"));
const PeopleDiscover = React.lazy(() => import("./PeopleDiscover"));
function DiscoverRoutes(): JSX.Element {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact={true} path={path} component={Discover} />
      <Route path={`${path}/people`} component={PeopleDiscover} />
    </Switch>
  );
}

export default DiscoverRoutes;
