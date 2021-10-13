import React from "react";
import styled from "styled-components";
import * as colors from "../../constains/colors";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { Layout } from "../../components/index";
import { Suspense } from "react";

const Home = React.lazy(() => import("./views/Home"));
const MontageRoutes = React.lazy(() => import("./views/montages/index"));
const DiscoverRoutes = React.lazy(() => import("./views/discover/index"));
const ProfileRoutes = React.lazy(() => import("./views/profile/index"));

function Routes(): JSX.Element {
  const { path } = useRouteMatch();
  console.log("dashboard", path);
  return (
    <HomeWrapper rightContent>
      <Suspense
        fallback={<h1 style={{ color: colors.white }}>Dashboar Loading..</h1>}
      >
        <Switch>
          <Route exact path={path} component={Home} />
          <Route path={`${path}/montage`} component={MontageRoutes} />
          <Route path={`${path}/discover`} component={DiscoverRoutes} />
          <Route path={`${path}/profile`} component={ProfileRoutes} />

          <Route path="*">
            <h1 style={{ color: "white" }}>Not found</h1>
          </Route>
        </Switch>
      </Suspense>
    </HomeWrapper>
  );
}

export default Routes;

const HomeWrapper = styled(Layout)`
  width: 60%;
  .heading {
    font-size: 2rem;
    font-weight: bold;
    color: ${colors.white};
  }
  .home--content {
    flex-grow: 1;
  }
  .home--rightbar {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;

    flex-shrink: 0;
    width: 35%;
  }
`;
