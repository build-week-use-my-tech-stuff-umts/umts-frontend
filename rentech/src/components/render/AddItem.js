import React from "react";
import { Button, Modal } from "semantic-ui-react";
import NewItemForm from "../forms/NewItemForm.js";
//This Modal Component

const AddItem = props => {
  return (
    <div className="edit-account">
      <Modal
        closeIcon
        trigger={
          <Button size="huge" color="blue">
            + Add an Item
          </Button>
        }
      >
        <Modal.Header>Add an Item</Modal.Header>
        <Modal.Content>
          <NewItemForm props={props} />
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default AddItem;
