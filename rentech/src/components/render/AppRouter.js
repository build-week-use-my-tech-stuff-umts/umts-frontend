import React from "react";
import { Switch, Route } from "react-router-dom";
import Marketplace from "./Marketplace";
import MyTech from "./MyTech";
import AccountInfo from "./AccountInfo";
const AppRouter = () => {
  return (
    <div className="page-view bottom attached segment active tab">
      <Switch>
        <Route exact path="/" component={Marketplace} />
        <Route path="/mytech" component={MyTech} />
        <Route path="/account" component={AccountInfo} />
      </Switch>
    </div>
  );
};

export default AppRouter;
