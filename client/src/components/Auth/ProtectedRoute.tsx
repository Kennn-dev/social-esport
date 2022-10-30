import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAppStore } from "src/store";

type Props = {
  children: any;
};
export default function ProtectedRoute(props: Props & RouteProps) {
  const { children, ...rest } = props;
  const auth = useAppStore((state) => state.auth);

  // TODOS :decode then verify token here

  if (!auth.accessToken) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  }

  return <Route {...rest}>{children}</Route>;
}
