import React, { Component } from "react";
import { Card, Image, Modal, Header, Button } from "semantic-ui-react";

const ItemCard = props => {
  // console.log(props.rentItem);
  return (
    <div className="item-card">
      <Card className="market-item">
        <Image src={props.rentItem.category.imageUrl} wrapped ui={false} />
        <Card.Content className="flex">
          <Card.Header>{props.rentItem.name}</Card.Header>
          <Card.Description className="description-container">
            {props.rentItem.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Header>${props.rentItem.price} per day</Card.Header>
        </Card.Content>
        <Card.Content extra>{props.rentItem.category.name}</Card.Content>
        <div>
          <ItemPage props={props} />
          <NotificationModal props={props} />
        </div>
      </Card>
    </div>
  );
};

const ItemPage = props => {
  // console.log(props.props.rentItem);
  return (
    <div className="item-page">
      <Modal trigger={<Button color="blue">View Details</Button>}>
        <Modal.Header>{props.props.rentItem.name}</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src={props.props.rentItem.category.imageUrl}
          />

          <Modal.Description>
            <Header>${props.props.rentItem.price} per day</Header>
            <p>{props.props.rentItem.description}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

class NotificationModal extends Component {
  state = { open: false };

  // show = size => () => this.setState({ size, open: true });
  // close = () => this.setState({ open: false });
  handleOpen = () => {
    this.setState({ model_open: true });
  };

  handleClose = () => {
    this.setState({ model_open: false });
  };
  render() {
    // const { open, size } = this.state;

    return (
      <div className="item-page">
        <Modal
          size="mini"
          trigger={<Button onClick={this.handleOpen}>Request Item</Button>}
          open={this.state.model_open}
          onClose={this.handleClose}
          closeIcon
        >
          <Modal.Content>
            <p>Your request has been sent!</p>
          </Modal.Content>
          <Modal.Actions>
            <Button positive onClick={this.handleClose}>
              Okay
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ItemCard;
