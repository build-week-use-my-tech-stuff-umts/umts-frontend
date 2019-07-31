import React from "react";
import { Switch, Route } from "react-router-dom";
import Marketplace from "./Marketplace";
import MyTech from "./MyTech";
import AccountInfo from "./AccountInfo";
import LoginCard from './LoginCard';
import CreateAcctCard from './CreateAcctCard'
import PrivateRoute from './PrivateRoute'
const AppRouter = () => {
  return (
    <div className="page-view bottom attached segment active tab">

      <Switch>
        <PrivateRoute path="/marketplace" component={Marketplace} />
        <PrivateRoute path="/mytech" component={MyTech} />
        <PrivateRoute path="/account" component={AccountInfo} />

        <Route path='/createaccount' render={props => <CreateAcctCard {...props} /> } />
        <Route path='/login' render={props => <LoginCard {...props}/> } />

      </Switch>
    </div>
  );
};


export default AppRouter;
