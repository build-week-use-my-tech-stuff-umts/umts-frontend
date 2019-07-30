import React from "react";
import { Header, Button, Modal, Image } from "semantic-ui-react";
import EditItemForm from "../forms/EditItemForm.js";
//This Modal Component

const EditItem = () => {
  return (
    <div className="edit-account">
      <Modal trigger={<Button color="blue" className='techbutton'size='small' >Edit Item</Button>}>
        <Modal.Header>Edit Item</Modal.Header>
        <Modal.Content>
          <EditItemForm />
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default EditItem;
