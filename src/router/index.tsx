import { Router, Route, Switch, Redirect } from "react-router-dom";

import BasicLayout from "../layouts/BasicLayout";
import UserLayout from "../layouts/UserLayout";
import { createHashHistory as createHistory } from "history"; // 锚点模式的history
const history = createHistory();

function RouteCom(props: any){
  return (
    <Router history={history}>
      <Route
        render={(): JSX.Element => {
          return (
            <Switch>
              <Route
                path="/"
                component={BasicLayout}
              />
            </Switch>
          );
        }}
      />
    </Router>
  );
}

export default RouteCom
