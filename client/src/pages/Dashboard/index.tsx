import React from "react";
import styled from "styled-components";
import * as colors from "../../constains/colors";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { Layout, Loader } from "../../components/index";
import { Suspense } from "react";

const Home = React.lazy(() => import("./views/Home"));
const MontageRoutes = React.lazy(() => import("./views/montages/index"));
const DiscoverRoutes = React.lazy(() => import("./views/discover/index"));
const ProfileRoutes = React.lazy(() => import("./views/profile/index"));
const UnknownPage = React.lazy(() => import("../404/UnknowPage"));

function Routes(): JSX.Element {
  const { path } = useRouteMatch();
  console.log("dashboard", path);
  return (
    <HomeWrapper rightContent>
      <Suspense
        fallback={
          <LoadWrapper>
            <Loader />
          </LoadWrapper>
        }
      >
        <Switch>
          <Route exact path={path} component={Home} />
          <Route path={`${path}/montage`} component={MontageRoutes} />
          <Route path={`${path}/discover`} component={DiscoverRoutes} />
          <Route path={`${path}/profile`} component={ProfileRoutes} />

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
      </Suspense>
    </HomeWrapper>
  );
}

export default Routes;
const LoadWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(230%, 0px);
`;
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
