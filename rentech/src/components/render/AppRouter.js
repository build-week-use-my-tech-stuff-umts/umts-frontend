import React from "react";
import { Switch, Route } from "react-router-dom";
import Marketplace from "./Marketplace";
import MyTech from "./MyTech";
import AccountInfo from "./AccountInfo";
import LoginCard from './LoginCard';
import CreateAcctCard from './CreateAcctCard'
const AppRouter = () => {
  return (
    <div className="page-view bottom attached segment active tab">
      <Switch>
        <Route path="/marketplace" component={Marketplace} />
        <Route path="/mytech" component={MyTech} />
        <Route path="/account" component={AccountInfo} />

        <Route path='/createaccount' render={props => <CreateAcctCard {...props} /> } />
        <Route path='/login' render={props => <LoginCard {...props}/> } />

      </Switch>
    </div>
  );
};

export default AppRouter;
