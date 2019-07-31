import React from "react";
import { Card, Image, Icon, Modal, Header, Button } from "semantic-ui-react";

const ItemCard = props => {
  return (
    <div className="item-card">
      <Card>
        <Image
          src={require("../../img/camera-macro-optics-122400.jpg")}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Item Name Props</Card.Header>
          <Card.Description>
            Item Description Props
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Card.Header>Item Price Props $000.00</Card.Header>
        </Card.Content>
            <Card.Content extra>
        <Icon name='camera' />
        Item Type: Insert Type prop
    </Card.Content>
        <ItemPage />
      </Card>
    </div>
  );
};

const ItemPage = () => {
  return (
    <div className="item-page">
      <Modal trigger={<Button color='blue'>View Details</Button>}>
        <Modal.Header>Item Name Props</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={require("../../img/camera-macro-optics-122400.jpg")} />
          <Modal.Description>
            <Header>Item Price Props $00.00</Header>
            <p>ITEM Description Props</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ItemCard;
