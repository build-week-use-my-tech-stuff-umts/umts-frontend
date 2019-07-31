import React from "react";
import { Header, Button, Modal, Image } from "semantic-ui-react";
import EditProfileForm from "../forms/EditProfileForm.js";
//This Modal Component

const EditAccount = () => {
  return (
    <div className="edit-account">
      <Modal
        trigger={
          <Button size="huge" color="blue">
            Edit Account
          </Button>
        }
      >
        <Modal.Header>Edit your Account Information</Modal.Header>
        <Modal.Content>
          <EditProfileForm />
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default EditAccount;
