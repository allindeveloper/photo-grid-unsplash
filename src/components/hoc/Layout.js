import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "../Loader";
import Aux from "./_Aux";
import NotFound from "../../pages/NotFound/NotFound";
import Home from '../../pages/Home/Home'
export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Aux>
          <Suspense fallback={<Loader />}>
            <Switch>
                  <Route
                    path={"/"}
                    exact
                    render={(props) => <Home {...this.props} />}
                  />


                  <Route
                    render={(props) => <NotFound {...this.props} {...props} />}
                  />
            </Switch>
          </Suspense>
      </Aux>
    );
  }
}

export default Layout;
