import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const Profile = React.lazy(() => import("./Profile"));
function ProfileRoutes(): JSX.Element {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact={true} path={path} component={Profile} />
      {/* <Route path={`${path}/:id`} component={} /> */}
    </Switch>
  );
}

export default ProfileRoutes;
