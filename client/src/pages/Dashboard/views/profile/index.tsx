import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const Profile = React.lazy(() => import("./Profile"));
const UnknownPage = React.lazy(() => import("src/pages/404/UnknowPage"));
const Edit = React.lazy(
  () => import("src/pages/Dashboard/views/profile/Edit/index")
);
function ProfileRoutes(): JSX.Element {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact={true} path={path} component={Profile} />
      <Route exact path={`${path}/edit`} component={Edit} />
      <Route path="*">
        <div
          style={{
            position: "relative",
            width: "inherit",
            height: "600px",
          }}
        >
          <UnknownPage />
        </div>
      </Route>
    </Switch>
  );
}

export default ProfileRoutes;
