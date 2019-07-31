import React from 'react'
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
            trigger={<Button content='Log out' />}
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

export default PopupExampleControlled