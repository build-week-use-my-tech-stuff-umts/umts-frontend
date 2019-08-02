import React from "react";

import { Button, Modal } from "semantic-ui-react";

import EditItemForm from "../forms/EditItemForm.js";
//This Modal Component

const EditItem = props => {
  return (
    <div className="edit-account">
      <Modal
        closeIcon
        trigger={
          <Button color="blue" size="small">
            Edit Item
          </Button>
        }
      >
        <Modal.Header>Edit Item</Modal.Header>
        <Modal.Content>
          <EditItemForm rentItem={props.rentItem} />
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default EditItem;
