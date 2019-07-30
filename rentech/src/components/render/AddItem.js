import React from "react";
import { Header, Button, Modal, Image } from "semantic-ui-react";
import NewItemForm from "../forms/NewItemForm.js";
//This Modal Component

const AddItem = () => {
  return (
    <div className="edit-account">
      <Modal trigger={<Button size="huge" color='white'>+ Add an Item</Button>}>
        <Modal.Header>Add an Item</Modal.Header>
        <Modal.Content>
          <NewItemForm />
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default AddItem;
