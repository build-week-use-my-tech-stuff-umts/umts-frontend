import React from "react";
// import { Switch, Route } from "react-router-dom";
import Marketplace from "./Marketplace";
import MyTech from "./MyTech";
import AccountInfo from "./AccountInfo";
// import CreateAcctCard from './CreateAcctCard'
import PrivateRoute from './PrivateRoute'
const AppRouter = () => {
  return (
    <div className="page-view bottom attached segment active tab">
        <PrivateRoute path="/marketplace" component={Marketplace} />
        <PrivateRoute path="/mytech" component={MyTech} />
        <PrivateRoute path="/account" component={AccountInfo} />
    </div>
  );
};


export default AppRouter;
