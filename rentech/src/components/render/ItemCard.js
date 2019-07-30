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
          <Card.Header>Item Name: Super Digital Camera</Card.Header>
          <Card.Description>
            Sony RcX8VTS digital camera in perfect condition.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Card.Header>Item Price: $100 per day</Card.Header>
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
        <Modal.Header>Item Name: Super Digital Camera</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src="/images/avatar/large/rachel.png" />
          <Modal.Description>
            <Header>Item Price: May be</Header>
            <p>ITEM Description and end it</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ItemCard;
