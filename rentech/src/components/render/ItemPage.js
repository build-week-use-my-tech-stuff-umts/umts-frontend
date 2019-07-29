import React from "react";
import { Header, Button, Modal, Image } from "semantic-ui-react";

//This Modal Component

const ItemPage = () => {
  return (
    <div className="item-page">
      <Modal trigger={<Button>View Details</Button>}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src="/images/avatar/large/rachel.png" />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ItemPage;
