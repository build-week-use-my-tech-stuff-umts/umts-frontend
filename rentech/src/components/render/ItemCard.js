import React, { Component } from "react";
import { Card, Image, Modal, Header, Button } from "semantic-ui-react";

const ItemCard = props => {
  // console.log(props.rentItem);
  return (
    <div className="item-card">
      <Card>
        <Image src={props.rentItem.category.imageUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.rentItem.name}</Card.Header>
          <Card.Description>{props.rentItem.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Header>${props.rentItem.price} per day</Card.Header>
        </Card.Content>
        <Card.Content extra>{props.rentItem.category.name}</Card.Content>
        <div className="flex-row">
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

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, size } = this.state;

    return (
      <div className="item-page">
        <Button onClick={this.show("mini")}>Request Item</Button>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Your request has been Sent!</Modal.Header>
          <Modal.Actions>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="OKAY"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ItemCard;
