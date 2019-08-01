import React from 'react';
import {Grid, Popup,  } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const timeoutLength = 2500

class LogOutPopOut extends React.Component {
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
            trigger={<NavLink onClick= {()=> {localStorage.removeItem('token')}} className='logout' to="/login">Logout</NavLink>}
            content={`You have been Logged out`}
            on='click'
            open={this.state.isOpen}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            position='top right'
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default LogOutPopOut