import React from "react";
import { Header, Button, Modal, Image } from "semantic-ui-react";
import EditItemForm from "../forms/EditItemForm.js";
//This Modal Component

const EditItem = (props) => {
  return (
    <div className="edit-account">
      <Modal trigger={<Button color="blue" size='small' >Edit Item</Button>}>
        <Modal.Header>Edit Item</Modal.Header>
        <Modal.Content>
          <EditItemForm rentItem={props.rentItem}/>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default EditItem;
