import PropTypes from "prop-types";
import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

const colors = ["black"];

class RentechMenu extends Component {
  static propTypes = {
    color: PropTypes.string
  };

  state = { activeItem: "Account Settings" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { color } = this.props;
    const { activeItem } = this.state;

    return (
      <Menu color={color} inverted widths={3}>
        <Menu.Item
          name="Account Settings"
          active={activeItem === "Account Settings"}
          onClick={this.handleItemClick}
          as={Nav}
          to={`/account`}
        />
        <Menu.Item
          name="MyTech"
          active={activeItem === "MyTech"}
          onClick={this.handleItemClick}
          as={Nav}
          to={`/mytech`}
        />
        <Menu.Item
          name="Explore Marketplace"
          active={activeItem === "Explore Marketplace"}
          onClick={this.handleItemClick}
          as={Nav}
          to={`/marketplace`}
        />
      </Menu>
    );
  }
}

const MenuExampleColoredInvertedMenus = () => {
  const menus = colors.map(color => <RentechMenu color={color} key={color} />);

  return <div>{menus}</div>;
};

export default MenuExampleColoredInvertedMenus;
