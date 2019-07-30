import React from "react";
import { Header, Button, Modal, Image } from "semantic-ui-react";

//This Modal Component

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

export default ItemPage;
