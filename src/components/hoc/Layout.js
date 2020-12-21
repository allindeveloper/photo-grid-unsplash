import React from "react";
import {Route, Switch, withRouter } from "react-router-dom";
import Aux from "./_Aux";
import NotFound from "../../pages/NotFound/NotFound";
import Search from "../../pages/Search/Search";
import Home from "../../pages/Home/Home";
export class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    console.log("props in layout",this.props)
    return (
      <Aux>
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

            <Route
            render={(props) => <NotFound {...this.props} />}
            />
          </Switch>
       </Aux>
    );
  }
}

export default withRouter(Layout);
