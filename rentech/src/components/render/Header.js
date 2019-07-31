import React from "react";
import Logo from "../../img/rentech-logo-new.png";
import { NavLink } from "react-router-dom";
const Header = props => {
  return (
    <div className="profile-header">
        <img src={Logo} alt="RenTech Logo" className="logo" />
        <div className='float-right'>

        <div className='link-container'>

        <NavLink onClick= {()=> {localStorage.removeItem('token')}} className='login' to="/login">Logout</NavLink>
        <NavLink className='login' to="/login">Login</NavLink>
        <NavLink to="createaccount">Create Account</NavLink>
      </div>

      </div>
    </div>
  );
};

import { Button, Grid, Header, Popup, Segment } from 'semantic-ui-react'

const timeoutLength = 2500

class PopupExampleControlled extends React.Component {
  state = { isOpen: false }

  handleOpen = () => {
    this.setState({ isOpen: true })

    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false })
    }, timeoutLength)
  }

  handleClose = () => {
    this.setState({ isOpen: false })
    clearTimeout(this.timeout)
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={8}>
          <Popup
            trigger={<Button content='Open controlled popup' />}
            content={`This message will self-destruct in ${timeoutLength /
              1000} seconds!`}
            on='click'
            open={this.state.isOpen}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            position='top right'
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header>State</Header>
          <Segment secondary>
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default PopupExampleControlled

export default Header;
