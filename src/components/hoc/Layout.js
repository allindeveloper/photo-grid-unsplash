import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Loader from "../Loader";
import Aux from "./_Aux";
import NotFound from "../../pages/NotFound/NotFound";
import Search from "../../pages/Search/Search";
import Home from "../../pages/Home/Home";
export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  

  render() {
    console.log("props in layout",this.props)
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
              path={"/search/result"}
              render={(props) => <Search {...this.props} />}
            />
          </Switch>
        </Suspense>
      </Aux>
    );
  }
}

export default withRouter(Layout);
