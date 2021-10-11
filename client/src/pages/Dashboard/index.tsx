import React from "react";
import styled from "styled-components";
import * as colors from "../../constains/colors";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { Layout } from "../../components/index";

const Home = React.lazy(() => import("./views/Home"));
const MontageRoutes = React.lazy(() => import("./views/montages/index"));
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
function Routes(): JSX.Element {
  const { path } = useRouteMatch();
  console.log("dashboard", path);
  return (
    <HomeWrapper rightContent>
      <Switch>
        <Route exact path={path} component={Home} />
        <Route path={`${path}/montage`} component={MontageRoutes} />
        <Route path="*">
          <h1 style={{ color: "white" }}>Not found</h1>
        </Route>
      </Switch>
    </HomeWrapper>
  );
}

export default Routes;
