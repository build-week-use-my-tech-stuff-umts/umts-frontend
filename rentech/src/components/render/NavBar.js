import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

const createLabel = (iconName, labelText) => (
  <span>
    <Icon name={iconName} />
    {labelText}
  </span>
);

const welcomeLabel = createLabel("home", "Home Page");
const accountLabel = createLabel("users", "Account Settings");
const myTechLabel = createLabel("computer", "My Tech");
const exploreTechLabel = createLabel("shop", "Explore Tech for Rent");

const panes = [
  {
    menuItem: <Menu.Item key="home" as={Nav} to={`/`} content={welcomeLabel} />
  },
  {
    menuItem: <Menu.Item key="users" as={Nav} to={`/`} content={accountLabel} />
  },
  {
    menuItem: (
      <Menu.Item key="computer" as={Nav} to={`/`} content={myTechLabel} />
    )
  },
  {
    menuItem: (
      <Menu.Item key="shop" as={Nav} to={`/`} content={exploreTechLabel} />
    )
  }
];

const NavBar = () => (
  <div className="nav-container">
    <Tab panes={panes} renderActiveOnly={false} />
  </div>
);

export default NavBar;
